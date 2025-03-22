// src/components/layout/Header.js
import React from 'react';

const Header = ({ onTabChange, activeTab }) => {
  return (
    <div className="header-wrapper">
      {/* Top header section with logo and icons */}
      <header className="header">
        <div className="header-container">
          <div className="header-content">
            <button onClick={() => onTabChange('feed')} className="logo-button">
              <img
                src="/images/GladStartLogo.jpg"
                alt="GLADSTART"
                className="logo-image"
                style={{  height: '38px', marginLeft: '1.3rem' }}
              />
            </button>

            <div className="header-actions">
              {/* Filter Button - Disabled */}
              <button className="icon-button disabled-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>
              </button>

              {/* Search Button - Disabled */}
              <button className="icon-button disabled-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs integrated in the header component */}
      <div className="nav-container">
        <div className="nav-content">
          <nav className="nav-tabs">
            <button 
              className={`nav-tab ${activeTab === 'feed' ? 'active' : ''}`}
              onClick={() => onTabChange('feed')}
            >
              Nyhetsfeed
            </button>
            <button
              className={`nav-tab ${activeTab === 'regional' ? 'active' : ''}`}
              onClick={() => onTabChange('regional')}
            >
              Regionalt
            </button>
            <button
              className={`nav-tab ${activeTab === 'userfeed' ? 'active' : ''}`}
              onClick={() => onTabChange('userfeed')}
            >
              Användare
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;