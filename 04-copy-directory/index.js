const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'files');
const dirPathCopy = path.join(__dirname, 'files-copy');

async function copyDirectory(sourceDir, targetDir) {
  try {
  
    await fs.promises.mkdir(targetDir, { recursive: true });

    
    const entries = await fs.promises.readdir(sourceDir, { withFileTypes: true });

    for (const entry of entries) {
      const sourcePath = path.join(sourceDir, entry.name);
      const targetPath = path.join(targetDir, entry.name);
      
      if (entry.isFile()) {
        
        await fs.promises.copyFile(sourcePath, targetPath);
      
      } else if (entry.isDirectory()) {
       
        await copyDirectory(sourcePath, targetPath);
      }
    }
  } catch (err) {
    console.error('Error due copy directory:', err.message);
  }
}


copyDirectory(dirPath, dirPathCopy);
module.exports = copyDirectory;