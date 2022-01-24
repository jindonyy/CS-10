class MultiProcesser {
    constructor() {
        this.programs = [{
                            name: 'A',
                            maxTime: 2
                        }, {
                            name: 'B',
                            maxTime: 4
                        }, {
                            name: 'C',
                            maxTime: 6
                        }, {
                            name: 'D',
                            maxTime: 8
                        }, {
                            name: 'E',
                            maxTime: 10
                        }];
        this.process = new Map();
        this.queue = new Map();
    }

    setProcess(size) {
        while(this.process.size < size) {
            const random = Math.floor(Math.random() * this.programs.length);
            const seletedEl = this.programs[random];
            this.process.set(seletedEl.name, {
                                                maxTime: seletedEl.maxTime,
                                                status: 'ready',
                                                accTime: 0
                                            });
        }
    }

    setQueue() {
        this.process.forEach((value, key) => {
            this.queue.set(key, value);
        });
    }

    schedule() {
        this.printResult();
        this.queue.forEach(value => {
            value.status = 'waiting';
        });

        const timeSharing = setInterval(() => {
            const queueList = this.queue.entries();
            const current = queueList.next(); // 첫번째 요소 선택
            const [currentKey, currentValue] = current.value;
            currentValue.status = 'running';
            currentValue.accTime++;
            this.printResult();
            currentValue.status = 'waiting';
            this.queue.delete(currentKey);
            
            if(currentValue.maxTime <= currentValue.accTime) {
                currentValue.status = 'terminated';
            } else {
                this.queue.set(currentKey, currentValue);
            }
            
            if(this.queue.size < 1) { // queue에서 요소가 다 삭제됐을 때
                clearInterval(timeSharing);
                this.printResult();
            }
        }, 1000);

    }
    
    printResult() {
        this.process.forEach((value, key) => {
            console.log(`${key}(${value.status}), ${value.accTime} / ${value.maxTime}sec`);
        });
        if(this.queue.size >= 1) console.log('--------- ⏱  ---------');
        else console.log('모든 프로세스가 종료되었습니다.')
    }

    initProcess() {
        this.setProcess(3);
        this.setQueue();
        this.schedule();
    }
}

const multiProcesser = new MultiProcesser();
multiProcesser.initProcess();