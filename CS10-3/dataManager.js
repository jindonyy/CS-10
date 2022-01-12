let videosInfo = ['dony', 'maev', 'JSJS', 'jane', 'jwuu', 'dott', 'ideu', 'hemd', 'khan', 'mill', 'pokk', 'oliv', 'cron'];

class Video {
  constructor() {
    this.title = '',
    this.id = '',
    this.time = 1,
    this.next = null;
  }
}

class VideoMaker {
  makeTime(min, max) {
    const random = Math.random() * (max - min) + min;
    return parseInt(random);
  }

  initVideoData() {
    videosInfo = videosInfo.map((id, index) => {
      const newVideo = new Video();
      newVideo.title = `제목${index + 1}`;
      newVideo.id = id;
      newVideo.time = this.makeTime(1, 15.1);

      return newVideo;
    });

    return videosInfo;
  }
}

class VideoListManager {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  findVideoInfo(id) {
    return videosInfo.find(el => el['id'] === id);
  }

  push(id) {
    const newVideo = this.findVideoInfo(id);
    if(!newVideo) return "🚫 해당 ID의 비디오가 없습니다."; // 해당 ID의 비디오가 없을 경우

    if(this.tail) {
      this.tail.next = newVideo;
      this.tail = newVideo;
    } else {
      this.head = newVideo;
      this.tail = newVideo;
    }
    
    this.length++;
    return this;
  }

  pop() {
    if(!this.head) return "❌ 삭제할 비디오가 없습니다."; // 리스트가 비었을 시

    let currentVideo = this.head;
    let newTail = currentVideo;
    while(currentVideo.next) {
      newTail = currentVideo;
      currentVideo = currentVideo.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if(this.length === 0) { // 노드가 하나인데 삭제했을 경우
      this.head = null;
      this.tail = null;
    }

    return this;
  }

  shift() {
    if(!this.head) return "❌ 삭제할 비디오가 없습니다."; // 리스트가 비었을 시

    const oldHead = this.head;
    this.head = oldHead.next;
    this.length--;

    if(this.length === 0) { // 노드가 하나인데 삭제했을 경우
      this.tail = null;
    }

    return this;
  }

  unshift(id) {
    const newVideo = this.findVideoInfo(id);
    if(!newVideo) return "🚫 해당 ID의 비디오가 없습니다."; // 해당 ID의 비디오가 없을 경우
    
    if(this.head) { // 기존에 노드가 있으면
      newVideo.next = this.head;
      this.head = newVideo;
    } else {
      this.head = newVideo;
      this.tail = this.head;
    }
    
    this.length++;
    return this;
  }

  insert(id, index) {
    if(index < 0) return "❗️index를 다시 확인해주세요.";
    if(index >= this.length) return this.push(id);
    const newVideo = this.findVideoInfo(id);
    if(!newVideo) return "🚫 해당 ID의 비디오가 없습니다."; // 해당 ID의 비디오가 없을 경우
    if(index === 0) return this.unshift(id);
    
    let currentVideo = this.head;
    for(let i = 0; i < index - 1; i++) {
      currentVideo = currentVideo.next;
    }
    const nextVideo = currentVideo.next;
    currentVideo.next = newVideo;
    newVideo.next = nextVideo;
    this.length++;

    return this;
  }

  remove(id) {
    if(this.head.id === id) return this.shift();

    let previousVideo = this.head;
    let currentVideo = this.head.next;
    let currentVideoIndex = 1;
    
    while(currentVideo.next) {
      if(currentVideo.id === id) break;

      previousVideo = currentVideo;
      currentVideo = currentVideo.next;
      currentVideoIndex++;
    }

    // if(!currentVideoIndex) return "🚫 해당 ID의 비디오가 없습니다.";
    if(currentVideoIndex >= this.length - 1) return this.pop();
    
    previousVideo.next = currentVideo.next;
    this.length--;

    return this;
  }
}

module.exports = [ VideoMaker, VideoListManager ];