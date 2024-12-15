import { videoData } from './data';

export default function MobileFeatures() {
  const currentVideo = videoData[0];
  
  return (
    <div className="px-2 py-2">
      <div className="rounded-lg bg-white p-2">
        <div className="mb-2 text-2xl font-semibold">{currentVideo.title}</div>
        <p className="mb-2 text-sm text-black/60 dark:text-gray-500">
          {currentVideo.description}
        </p>
        <video
          className="aspect-video w-full object-cover"
          muted
          playsInline
          autoPlay
          loop
          controls
          controlsList="nodownload"
          disablePictureInPicture
        >
          <source src={currentVideo.videoUrl} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
