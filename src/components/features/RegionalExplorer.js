// src/components/features/RegionalExplorer.js
import React from 'react';
import { getScoreColorClass } from '../../utils';

const RegionalExplorer = ({ regions }) => {
  return (
    <div className="content-layout" >
      <div className="main-column" >
        <div className="popover-header" style={{ marginBottom: '1.5rem' }}>
          <h2 className="page-title">Utforska efter landskap</h2>
          <div className="badge">Kommer snart</div>
        </div>

        <div className="region-grid">
          {regions.map((region) => (
            <div key={region.id} className="region-card">
              <div className="region-header">
                <h3 className="region-name">{region.name}</h3>
                <span className={getScoreColorClass(region.positivity)}>
                  +{Math.round(region.positivity * 100)}%
                </span>
              </div>
              <p className="region-stats">{region.articles_count} positiva artiklar</p>
              <button className="region-button disabled-button">Utforska landskap</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegionalExplorer;