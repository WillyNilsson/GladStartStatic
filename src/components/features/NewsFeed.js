// src/components/features/NewsFeed.js
import React from 'react';
import ArticleList from './ArticleList';
import RegionalSidebar from './RegionalSidebar';
import NewsletterForm from './NewsletterForm';

const NewsFeed = ({
  articles,
  onResetFilters,
  regions,
  selectedRegion,
  onRegionSelect,
}) => {
  return (
    <div className="content-layout">
      {/* Main News Feed */}
      <div className="main-column">
        <h2 className="page-title">Senaste positiva nyheterna</h2>
       
        <ArticleList
          articles={articles}
          onResetFilters={onResetFilters}
        />
      </div>

      {/* Regional Sidebar */}
      <div className="sidebar-column" style={{ marginTop: '.5rem' }}>
        <RegionalSidebar
          regions={regions}
          selectedRegion={selectedRegion}
          onRegionSelect={onRegionSelect}
        />
      </div>
    </div>
  );
};

export default NewsFeed;