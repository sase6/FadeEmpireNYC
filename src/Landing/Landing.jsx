import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const backgroundUrl = '/img/broll.mp4';
const logoUrl = '/img/ryanLogo.png';

export default () => {
  //

  return (
    <div className="landing-page">
      <div className="landing-page-video-containter">
        <div className="landing-video-overlay">
          <nav>
            <div className="logo-container">
              <img src={logoUrl} width="75px" height="75px" alt="Fade Empire NYC Logo"/>
            </div>
            <div className="menu-container">
              <MenuIcon 
                sx={{
                  color: 'white',
                  width: 40,
                  height: 40
                }}
              />
            </div>
          </nav>

          <div className="call-to-action">
            <div className="cta-quote quote-text">"Grooming you <br/> to look your <br/> best!"</div>
            <div className="cta-button">
              <button className="schedule-button">Schedule Appointment</button>
              <div className="schedule-button-bg"></div>
            </div>
          </div>
        </div>
        <video className='landing-video' autoPlay={true} muted loop playsInline>
          <source src={backgroundUrl} type="video/mp4"/> 
        </video>
      </div>

      <div className="landing-page-map-container">
        <iframe className='google-maps-iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d378.21063722793156!2d-73.83886635403466!3d40.68090689999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2672434557cdf%3A0x9d32b577597ded5d!2sAndrew%E2%80%99s%20innovative%20Kutz!5e0!3m2!1sen!2sus!4v1664052712816!5m2!1sen!2sus" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};