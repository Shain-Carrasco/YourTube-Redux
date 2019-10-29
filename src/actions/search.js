import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  return {
    type: 'HANDLE_VIDEO_SEARCH',
    payload: q
  };
};
export default handleVideoSearch;
// in the state of the store we'll keep track of
// type: 'SEARCH'
// payload: q  (the actual value of the search input /event.target.value)