import React from 'react';

const backgroundUrl = '/img/broll.mp4';

export default () => {
  //

  return (
    <div className="landing-page">
      <video className='landing-video' autoPlay={true} muted playsInline>
        <source src={backgroundUrl} type="video/mp4"/>
      </video>

    </div>
  );
};