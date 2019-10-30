import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData.js';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if (action.type === 'CHANGE_VIDEO') {
    const newState = action.video;
    // newState.currentVideo = action.video;
    // if (state !== null) {
    //   newState.videoList = [...state.videoList];
    // } else {
    //   newState.videoList = null;
    // }
    return newState;
  } else {
    return state;
  }
};

export default currentVideoReducer;
