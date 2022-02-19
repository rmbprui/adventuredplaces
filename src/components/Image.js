const Image = (props, { src, alt, title, fallbackSrc = "/img/banner.jpg" }) => {
  const onError = (e) => {
    e.target.onerror = null;
    e.target.src = fallbackSrc;
  };

  return <img src={src} alt={alt} title={title} {...props} onError={onError} />;
};

export default Image;
