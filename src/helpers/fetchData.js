export const getVideos = () => {
  try {
    api.get('/videos')
    .then(res => {
      setVideos(res);
      setToDisplay(res); 
      setIsLoading(false); 
    })
    .catch(e => {
      console.log(e);
      setIsLoading(false);
    });
  } catch (error) {
    console.log(error)
  }
}