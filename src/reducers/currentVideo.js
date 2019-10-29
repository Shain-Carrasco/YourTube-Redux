import Redux from 'redux';
import exampleVideoData as sampleData from '../data/exampleVideoData.js';

var currentVideoReducer = (state = sampleData, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if (action.type === 'CHANGE_VIDEO') {
    const newState = {};
    newState.currentVideo = action.video;
    newState.videoList = [...state.videoList];
    return newState;
  } else {
    return state;
  }
};

export default currentVideoReducer;
