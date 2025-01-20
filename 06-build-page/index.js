const fs = require('fs');
const path= require('path');
const dirPathStyles = path.join(__dirname,'styles');
const projectPath = path.join(__dirname, 'project-dist');
const bundlePath = path.join(__dirname, 'project-dist', 'bundle.css');

async function buildPage(){
    
    
    const components = await getComponents();
    const template = await fs.promises.readFile(path.join(__dirname,'template.html'),'utf-8');
  //  console.log(template);
     // await console.log(components)
    const htmlPage =  replace(template,components);
    console.log(htmlPage);
}

buildPage()

async function getComponents(){
    let components={};
    const componentsFiles = await fs.promises.readdir(path.join(__dirname,'components'),{withFileTypes:true});
    for (const file of componentsFiles) {
        if (file.isFile() && path.extname(file.name) === '.html') {
            components[path.basename(file.name, '.html')] = await fs.promises.readFile(path.join(__dirname, 'components', file.name), 'utf-8');
        }
    }
    return components;
}
 function replace(template,components){
  let result = template;
  for(const key in components){
    const regExp = new RegExp(`{{${key}}}`,'g');
    result = result.replace(regExp,components[key]);
  }
  return result;
}