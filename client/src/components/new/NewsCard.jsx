const isImageUrl = (url) => {
  if (!url) return false;
  return /\.(jpg|jpeg|png|gif|webp|svg|bmp|avif)(\?.*)?$/i.test(url);
};

const isVideoUrl = (url) => {
  if (!url) return false;
  return /\.(mp4|webm|ogg|mov|avi|mkv)(\?.*)?$/i.test(url);
};

const isYouTubeUrl = (url) => {
  if (!url) return false;
  return /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)/.test(url);
};

const getYouTubeEmbedUrl = (url) => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
};

const MediaRenderer = ({ url, title }) => {
  if (!url) return null;

  if (isYouTubeUrl(url)) {
    const embedUrl = getYouTubeEmbedUrl(url);
    return (
      <iframe
        src={embedUrl}
        title={title}
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        style={{ width: '100%', height: '100%', border: 'none' , borderRadius: "16px" }}
      />
    );
  }

  if (isVideoUrl(url)) {
    return (
      <video
        src={url}
        controls
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: "16px"}}
      >
        متصفحك لا يدعم تشغيل الفيديو
      </video>
    );
  }

  if (isImageUrl(url)) {
    return (
      <img
        src={url}
        alt={title}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    );
  }

  // fallback: try to show as image
  return (
    <img
      src={url}
      alt={title}
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      onError={(e) => { e.target.style.display = 'none'; }}
    />
  );
};

const NewsCard = ({ image, title, date, name, content }) => {
  return (
    <div className='NewCard'>
      <div className="media-wrapper">
        <MediaRenderer url={image} title={title} />
      </div>
      <div className="NewsCardContent">
        <div className="head">
          <p>{title}</p>
          <span>{date}</span>
        </div>
        <div className="text">
          <h3>{name}</h3>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;