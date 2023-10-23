const fs = require('fs');
const path = require('path');
const process = require('process');

const mkDir = (dir) => {
  if(!fs.existsSync(dir)) fs.mkdirSync(dir)
}

const isVideo = (file) => {
  if(path.extname(file) === '.mp4') return true
}

const isCapture = (file) => {
  if(path.extname(file) === '.png') return true
}

const moveFile = (file, targetDir) => {
  let oldPath = path.join(workingDir,file)
  let newPath = path.join(targetDir,file)
  fs.promises.rename(oldPath,newPath)
  .catch(console.error)
}

const fileCheck = (files) => {
  for(file of files){
    if(isVideo(file)) {
      moveFile(file,videoDir)
    }else if(isCapture(file)) {
      moveFile(file,captureDir)
    }
  }
}

const folderName = process.argv[2]
const workingDir = path.join(process.cwd());
const videoDir = path.join(workingDir,'video')
const captureDir = path.join(workingDir,'capture')

mkDir(workingDir);
mkDir(videoDir);
mkDir(captureDir);

fs.promises.readdir(workingDir)
.then(files => {
  fileCheck(files)
})
.catch(console.error)