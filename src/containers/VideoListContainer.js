import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

//connect props from state and action dispatchers to videoList component
var VideoListContainer = () => {
  connect(mapStateToProps, mapDispatchToProps)(VideoList);
};

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.
const mapStateToProps = state => {
  return {
    videos: state.videoList
  };
};

//dispatching the actions
const mapDispatchToProps = dispatch => {
  return {
    handleVideoListEntryTitleClick: video => {
      dispatch(changeVideo(video));   //might need to return
    }
  }
}

export default VideoListContainer;
