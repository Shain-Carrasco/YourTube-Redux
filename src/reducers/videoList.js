import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData.js';

let initialState = {
  videoList: [],
  currentVideo: null
};

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  if ( action.type === 'CHANGE_VIDEO_LIST' ) {
    //return Object.assign({}, state, {
    //  videoList: action.videos
    return action.videos;

  } else {
    return state;
  }
};

export default videoListReducer;
