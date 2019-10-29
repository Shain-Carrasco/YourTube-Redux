var changeVideoList = (videos) => ({
  type: 'CHANGE_VIDEO_LIST',
  videos: videos
});

export default changeVideoList;

//in the state -keep track of videoList
//our action will be
/*
action:
{
  type: 'UPDATE VIDEOS',
  payload: videos
}

*/