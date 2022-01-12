module.exports = class VideoPrinter {
  printVideoInfo(videosInfo) {
    videosInfo.forEach(video => {
      console.log(`${video.title} (${video.id}) : ${video.time}`);
    });
  }

  printVideoList(videoList) {
    let printText = '[start]---';
    let currentVideo = videoList.head;
    for(let i = 0; i < videoList.length; i++) {
      printText += `[${currentVideo.id}, ${currentVideo.time}sec]---`;
      currentVideo = currentVideo.next;
    }
    console.log(`${printText}[end]`);
  }
}