const [ VideoMaker, VideoListManager ] = require('./dataManager.js');
const VideoPrinter = require('./printer.js');

class VideoController {
  constructor([VideoMaker, VideoListManager], view) {
    [this.VideoMaker, this.VideoListManager] = [VideoMaker, VideoListManager];
    this.view = view;
  }

  loopVideoInfo() {
    const videosInfo = this.VideoMaker.initVideoData();
    this.view.printVideoInfo(videosInfo);
  }

  editVideo() {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.setPrompt('🎥 Edit > ');
    rl.prompt();
    rl.on('line', input => {
      if (input === 'esc') rl.close();

      const splitArr = input.split(" ");
      const [editing, id, index] = [splitArr[0], splitArr[1], splitArr[2]];
      const videoList = this.VideoListManager[editing](id, Number(index));
      this.view.printVideoList(videoList);
    });
    rl.on('close', function() {
      process.exit();
    });
  }
}

const videoEditer = new VideoController([new VideoMaker(), new VideoListManager()], new VideoPrinter());
videoEditer.loopVideoInfo();
videoEditer.editVideo();