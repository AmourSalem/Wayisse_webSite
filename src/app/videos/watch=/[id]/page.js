import VideoPlayingPage from "@/contents/VideoPlayingPage";

export const metadata = {
  title: 'Vidéo - Wayissé',
}


export default async function generateMetadata(props) {
  
  const { params } = props;
  const id = params.id;

  return (
    
    <div>
      <VideoPlayingPage id={id} />
    </div>
  );
};