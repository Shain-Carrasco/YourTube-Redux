import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

var initialState = {
  currentVideo: null,
  videoList: []
}

var rootReducer = (state = initialState, action) => {
  return {
    currentVideo: currentVideo(state.currentVideo, action),
    videoList: videoList(state.videoList, action)
  };
};

//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
