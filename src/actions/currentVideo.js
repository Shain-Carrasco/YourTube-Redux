var changeVideo = (video) => {
  //TODO:  Return some action object to change the currently playing video.
  let action = {
    type: 'CHANGE_VIDEO',
    video: video
  };
  return action;
};
export default changeVideo;
