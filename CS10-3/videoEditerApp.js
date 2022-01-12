import { VideoListManager } from './dataManager.js';
import { VideoPrinter } from './printer.js';
import { VideoController } from './videoController.js';

const videoEditer = new VideoController(new VideoListManager(), new VideoPrinter());
videoEditer.insertVideoInfo();