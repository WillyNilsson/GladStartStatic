import React, { useState } from 'react';
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import NewsFeed from './components/features/NewsFeed';
import UserFeed from './components/features/UserFeed';
import RegionalExplorer from './components/features/RegionalExplorer';
import { articles } from './data/articles';
import { regions } from './data/regions';
import { topics } from './data/topics';
import { userPosts } from './data/posts';
import './styles/index.css';

function App() {
  const [activeTab, setActiveTab] = useState('feed');
  const [filters, setFilters] = useState({
    region: 'all',
    topics: [],
    sources: [],
    minScore: 0.7,
  });
  const [selectedRegion, setSelectedRegion] = useState(null);
  
  // Filter articles based on current filters
  const filteredArticles = articles.filter(article => {
    // Region filter
    if (filters.region !== 'all' && article.region.name !== filters.region) {
      return false;
    }
    
    // Topics filter
    if (filters.topics.length > 0) {
      const articleTopics = article.topics.map(t => t.name);
      if (!filters.topics.some(t => articleTopics.includes(t))) {
        return false;
      }
    }
    
    // Positivity score filter
    if (article.positivity_score < filters.minScore) {
      return false;
    }
    
    return true;
  });
  
  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => {
      // For array-based filters
      if (filterType === 'topics' || filterType === 'sources') {
        const currentValues = [...prevFilters[filterType]];
        const index = currentValues.indexOf(value);
        
        // Toggle value (remove if exists, add if doesn't)
        if (index !== -1) {
          currentValues.splice(index, 1);
        } else {
          currentValues.push(value);
        }
        
        return { ...prevFilters, [filterType]: currentValues };
      }
      
      // For simple value filters
      return { ...prevFilters, [filterType]: value };
    });
  };
  
  // Reset filters
  const resetFilters = () => {
    setFilters({
      region: 'all',
      topics: [],
      sources: [],
      minScore: 0.7,
    });
    setSelectedRegion(null);
  };
  
  // Handle region selection
  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    handleFilterChange('region', region.name);
  };
  
  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      {/* Header */}
      <Header
        onTabChange={handleTabChange}
        filters={filters}
        onFilterChange={handleFilterChange}
        onResetFilters={resetFilters}
        allTopics={topics}
        regions={regions}
        activeTab={activeTab}
      />

      {/* Navigation Tabs */}
      {/* <Navigation activeTab={activeTab} onTabChange={handleTabChange} /> */}

      {/* Main Content */}
      <div>
      <main className="main-content">
        {/* News Feed with Regional Sidebar */}
        {activeTab === 'feed' && (
          <NewsFeed
            articles={filteredArticles}
            onResetFilters={resetFilters}
            regions={regions}
            selectedRegion={selectedRegion}
            onRegionSelect={handleRegionSelect}
          />
        )}

        {/* User Feed */}
        {activeTab === 'userfeed' && <UserFeed posts={userPosts} />}

        {/* Regional Explorer */}
        {activeTab === 'regional' && <RegionalExplorer regions={regions} />}
      </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
