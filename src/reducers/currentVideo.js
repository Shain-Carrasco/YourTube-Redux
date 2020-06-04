import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData.js';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if (action.type === 'CHANGE_VIDEO' && action.video !== undefined) {
    return action.video;
  } else {
    return state;
  }
};

export default currentVideoReducer;