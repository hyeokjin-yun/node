/**
 * 제목 : 사진 폴더 정리 Script 생성
 * 요구사항
 * 1. 동영상(mp4), 이미지(png) 파일들이 함께 있는 폴더를 각각 동영상과 이미지를 분리하여 관리
 * 2. 동영상 파일은 video폴더에, png 파일은 capture 폴더에 각각 이동하여 정리
 */

const process = require('process');
const fs = require('fs');
const path = require('path');

//현재 경로를 workingDir로 설정하여 하위 폴더로 video, capture 폴더 생성
// const workingDir = process.cwd();
// const videoDir = path.join(workingDir,'video')
// const captureDir = path.join(workingDir,'capture')

//실행하는 명령어의 매개변수를 받아 workingDir로 설정하여 하위 폴더로 video, capture 폴더 생성
const folder = process.argv[2];
const workingDir = path.join(process.cwd(),folder)
const videoDir = path.join(workingDir,'video')
const captureDir = path.join(workingDir,'capture')

if(!fs.existsSync(workingDir)) fs.mkdirSync(workingDir);
if(!fs.existsSync(videoDir)) fs.mkdirSync(videoDir);
if(!fs.existsSync(captureDir)) fs.mkdirSync(captureDir);

fs.promises.readdir(workingDir)
.then((files) => {
  fileCheck(files)
})
.catch(console.error)

function fileCheck(files) {
  for(file of files){
    if(isVideo(file)){
      moveFile(file,videoDir)
    }else if(isCapture(file)) {
      moveFile(file,captureDir)
    }
  }
}

const isVideo = (file) => {
  if(path.extname(file) === '.mp4') return true
}

const isCapture = (file) => {
  if(path.extname(file) === '.png') return true  
}

const moveFile = (file,targetDir) => {
  let oldPath = path.join(workingDir,file);
  let newPath = path.join(targetDir,file);
  fs.promises.rename(oldPath, newPath)
  .catch(console.error);
}