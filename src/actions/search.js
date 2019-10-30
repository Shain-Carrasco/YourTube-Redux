import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  // return {
  //   type: 'HANDLE_VIDEO_SEARCH',
  //   payload: q
  // };

  searchYouTube({ key: YOUTUBE_API_KEY, query: q }, callback);

  return () => {
    dispatch( changeVideo(  ) )
    dispatch( changeVideoList(  ) )
  }
};
export default handleVideoSearch;
// in the state of the store we'll keep track of
// type: 'SEARCH'
// payload: q  (the actual value of the search input /event.target.value)

/*What should handle VideoSearch do?

* make a $get request by invoking searchYouTube({q,max:5, API_Key}, and a callback)

return a function - Thunk?
    - which invokes dispatch( changeVideo(data.items[0])  )
    - which invokes dispatch( changeVideoList(data.items) )
    -






*/