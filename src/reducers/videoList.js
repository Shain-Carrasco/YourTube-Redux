import Redux from 'redux';
import exampleVideoData as sampleData from '../data/exampleVideoData.js';

var videoListReducer = (state = sampleData, action) => {
  //TODO: define a reducer for the videoList field of our state.
  if ( action.type === 'CHANGE_VIDEO_LIST' ) {
    const newState = {};
    newState.videoList = action.videos;
    newState.currentVideo = state.currentVideo;
    return newState;
  } else {
    return state;
  }
};

export default videoListReducer;
