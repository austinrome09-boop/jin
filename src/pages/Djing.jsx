import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Djing = () => {
  // --- LOGIC: Music Player State ---
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  // Set initial volume to 50% on load (matching your script)
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  // Toggle Play/Pause
  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Toggle Mute
  const toggleMute = () => {
    const audio = audioRef.current;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    // We add the 'dj-wrapper' class here to target specific body background styles if needed
    <div className="dj-wrapper" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      
      {/* Header / Back Button */}
      <header style={{ position: 'absolute', background: 'transparent', boxShadow: 'none' }}>
        <Link to="/" className="logo">jin.</Link>
        <nav>
          {/* Note: We use Link instead of a href to keep it a Single Page App */}
          <Link to="/#skills" style={{ color: '#fff', borderBottom: '1px solid #b74b4b' }}>
            <i className="fas fa-arrow-left"></i> Back
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="dj-hero">
        <i className="fas fa-compact-disc"></i>
        <h1>DJ & Live Mixing</h1>
        <p>Curating vibes, controlling the crowd, and creating unforgettable nights.</p>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2 className="gallery-title">EVENTS PLAYED AT</h2>
        <div className="gallery-grid">
          
          {/* Photo 1 */}
          <div className="gallery-item">
            <img src="/slide1.jpg" alt="Live Set 1" />
            <div className="gallery-overlay">
              <h3>Live Set at POST CEREMONY</h3>
              <p>Live Cafe Set</p>
            </div>
          </div>

          {/* Photo 2 */}
          <div className="gallery-item">
            <img src="/cf.png" alt="Live Set 2" />
            <div className="gallery-overlay">
              <h3>The Grind Set at half_____way</h3>
              <p>Live Cafe Set</p>
            </div>
          </div>

          {/* Photo 3 */}
          <div className="gallery-item">
            <img src="/fwb.png" alt="Live Set 3" />
            <div className="gallery-overlay">
              <h3>FWIB Meetup</h3>
              <p>Corporate Event</p>
            </div>
          </div>

          {/* Photo 4 */}
          <div className="gallery-item">
            <img src="/pcbs.jpg" alt="Live Set 4" />
            <div className="gallery-overlay">
              <h3>brew & spin at POST CEREMONY</h3>
              <p>Live Cafe Set</p>
            </div>
          </div>

          {/* Photo 5 */}
          <div className="gallery-item">
            <img src="/majikasa.jpg" alt="Live Set 5" />
            <div className="gallery-overlay">
              <h3>Live Set at Majikasa</h3>
              <p>Live Cafe Set</p>
            </div>
          </div>

          {/* Photo 6 */}
          <div className="gallery-item">
            <img src="/accents.jpg" alt="Live Set 6" />
            <div className="gallery-overlay">
              <h3>GALLERY NOISE at THE ACCENTS CAFE</h3>
              <p>Live Cafe Set</p>
            </div>
          </div>

          {/* Photo 7 */}
          <div className="gallery-item">
            <img src="/juju.jpg" alt="Live Set 7" />
            <div className="gallery-overlay">
              <h3>Community Launch at Hausbyjuju</h3>
              <p>Live Cafe Set</p>
            </div>
          </div>

          {/* Photo 8 */}
          <div className="gallery-item">
            <img src="/tg.jpg" alt="Live Set 8" />
            <div className="gallery-overlay">
              <h3>Merry Grounds Year-End Pop-up</h3>
              <p>Live Event</p>
            </div>
          </div>

        </div>
      </section>

      {/* Custom Music Player (Bottom Right) */}
      <div className="music-player-container">
        {/* Rotating Disc: 'playing' class is added conditionally based on state */}
        <div className={`vinyl-disc ${isPlaying ? 'playing' : ''}`} id="vinyl"></div>
        
        <div className="controls">
          <span className="track-name">FWIB Live Set 2025</span>
          <div className="player-btns">
            
            {/* Play/Pause Button */}
            <button className="control-btn" onClick={togglePlay}>
              <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
            </button>
            
            {/* Mute/Unmute Button */}
            <button className="control-btn" onClick={toggleMute}>
              <i className={`fas ${isMuted ? 'fa-volume-mute' : 'fa-volume-up'}`}></i>
            </button>
          </div>
        </div>

        {/* Audio Element (Hidden, Controlled by React Refs) */}
        <audio ref={audioRef} loop>
            {/* Ensure these files are in your public folder! */}
            <source src="/FWIB SET.wav" type="audio/wav" />
            <source src="/mix.mp3" type="audio/mp3" />
        </audio>
      </div>

    </div>
  );
};

export default Djing;