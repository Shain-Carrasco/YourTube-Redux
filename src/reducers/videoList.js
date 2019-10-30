import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData.js';

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  if ( action.type === 'CHANGE_VIDEO_LIST' ) {
    const newState = [];
    newState = action.videos;
    return newState;
  } else {
    return state;
  }
};

export default videoListReducer;
