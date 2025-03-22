// src/components/features/RegionalSidebar.js
import React from 'react';
import { getScoreColorClass } from '../../utils';

const RegionalSidebar = ({ regions }) => {
  // Take only the top 6 regions based on positivity
  const topRegions = [...regions]
    .sort((a, b) => b.positivity - a.positivity)
    .slice(0, 6);

  return (
    <div className="sidebar">
      <h3 className="sidebar-title">Kommer Snart</h3>
      <div className="sidebar-list">
        {topRegions.map((region) => (
          <button
            key={region.id}
            className="sidebar-item disabled-button"
          >
            <div className="sidebar-item-content">
              <span className="sidebar-item-label">{region.name}</span>
              <span className={getScoreColorClass(region.positivity)}>
                +{Math.round(region.positivity * 100)}%
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RegionalSidebar;