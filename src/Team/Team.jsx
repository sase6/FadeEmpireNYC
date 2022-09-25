import React, {useState} from 'react';
import teamData from './teamData.js';

export default () => {
  const [currentMember, setCurrentMember] = useState(1);

  const changeMember = (id) => {
    // animate out
    setCurrentMember(id);
  };

  return (
    <div className="team-page" id='team-page'>
      <div className="team-card">
        <div className="team-card-img-container">
          <div className="pfp-img-1">
            <img className="team-card-pfp-mini" src={(teamData[currentMember - 1] || teamData[2]).imgUrl} alt="Profile Picture" />
            <div className="team-card-pfp-overlay"></div>
          </div>

          <img className="team-card-pfp" src={teamData[currentMember].imgUrl} alt="Profile Picture" />

          <div className="pfp-img-2">
            <img className="team-card-pfp-mini" src={(teamData[currentMember + 1] || teamData[0]).imgUrl} alt="Profile Picture" />
            <div className="team-card-pfp-overlay"></div>
          </div>
        </div>

        <div className="team-member-name">{teamData[currentMember].name}</div>
        <div className="team-member-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos adipisci veritatis, dolorem similique vitae dignissimos asperiores inventore, nulla est eum mollitia ipsa quas suscipit ex itaque expedita illo, totam voluptatem. Nulla soluta cupiditate id pariatur nisi nam veniam iure cumque eos. Quo fuga, autem illum aperiam doloremque enim ut aliquid.</div>
        <div className="team-member-contact-header">Contact</div>
        <div className="team-member-phone-number">718-313-7694</div>
        <div className="team-member-social-container">
          <div className="social instagram"></div>
          <div className="social facebook"></div>
          <div className="social tiktok"></div>
        </div>
        <div className="cta-button cta-button-team">
          <button className="schedule-button">Schedule Appointment</button>
          <div className="schedule-button-bg"></div>
        </div>
      </div>

      <div className="carousel-control">
        <div className="carousel-controller">
          <div className="carousel-ball" style={{background: currentMember === 0? "indianred" : "rgba(0,0,0,0.25)"}} onClick={() => changeMember(0)}></div>
          <div className="carousel-ball" style={{background: currentMember === 1? "indianred" : "rgba(0,0,0,0.25)"}} onClick={() => changeMember(1)}></div>
          <div className="carousel-ball" style={{background: currentMember === 2? "indianred" : "rgba(0,0,0,0.25)"}} onClick={() => changeMember(2)}></div>
        </div>
      </div>
    </div>
  );
};