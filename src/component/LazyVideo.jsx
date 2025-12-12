import React, { useRef, useState, useEffect } from "react";

function extVideoType(src) {
  const ext = src?.split(".").pop()?.toLowerCase();
  const known = ["mp4", "webm", "ogg", "mov", "m4v", "mkv", "avi"];
  return known.includes(ext) ? `video/${ext}` : "video/mp4";
}

function LazyVideo({
  src,
  poster,
  className = "",
  autoPlay = false,
  showPlayButton = false,
  ...props
}) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [showControls, setShowControls] = useState(!autoPlay);

  // Lazy load observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Auto-hide controls after inactivity
  useEffect(() => {
    if (isPlaying) {
      startHideTimer();
    }
    return () => clearTimeout(timeoutRef.current);
  }, [isPlaying]);

  const startHideTimer = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 2500);
  };

  const handleMouseMove = () => {
    if (isPlaying) {
      setShowControls(true);
      startHideTimer();
    }
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
      startHideTimer();
    } else {
      video.pause();
      setIsPlaying(false);
      setShowControls(true);
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-full overflow-hidden group"
    >
      {isVisible ? (
        <>
          <video
            {...props}
            ref={videoRef}
            onClick={togglePlay}
            muted
            loop
            autoPlay={autoPlay}
            poster={poster}
            className={`w-full object-cover h-full ${className}`}
          >
            <source src={src} type={extVideoType(src)} />
          </video>

          {showPlayButton && showControls && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center z-10"
            >
              <div className="bg-black/60 p-3 rounded-full text-white hover:bg-black/80 transition">
                {isPlaying ? (
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 8h2v8h-2zM14 8h2v8h-2z" />
                  </svg>
                ) : (
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </div>
            </button>
          )}
        </>
      ) : (
        <img
          src={poster}
          alt="Video thumbnail"
          className="w-full object-cover h-full"
        />
      )}
    </div>
  );
}

export default LazyVideo;
