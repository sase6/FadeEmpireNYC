import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';

export default ({render, setRender, page, setPage}) => {
  if (!render) return;

  const toggleRenderOff = () => {
    document.querySelector('.menu-overlay').style.animation = "500ms fadeOut forwards";
    setTimeout(() => setRender(false), 500);
  };

  const changePage = (e, page) => {
    e.stopPropagation();
    setPage(page);
    toggleRenderOff();
  };

  return (
    <div className="menu-overlay" onClick={(e) => changePage(e, "home")}>
      <div className="exit-menu-button">
        <div className="exit-menu-button-container" onClick={toggleRenderOff}>
          <ClearIcon 
            sx={{
              color: 'white',
              width: 40,
              height: 40
            }}
          />
        </div>
      </div>

      <a href='#landing-page' className="home-link link" style={{color: page==='home'? 'indianred' : 'white'}} onClick={(e) => changePage(e, "home")}>HOME</a>
      <a href='#team-page' className="team-link link" style={{color: page==='team'? 'indianred' : 'white'}} onClick={(e) => changePage(e, "team")}>TEAM</a>
      <a href='#gallery-page' className="gallery-link link" style={{color: page==='gallery'? 'indianred' : 'white'}} onClick={(e) => changePage(e, "gallery")}>GALLERY</a>
    </div>
  );
};