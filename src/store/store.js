import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
// for our store's state:
// this.state = {
//  currentVideo:
//  videoList:
//  searchQueryVal:
//}

export default createStore(rootReducer, {videoList: exampleVideoData, currentVideo: exampleVideoData[0]},applyMiddleware(thunk));