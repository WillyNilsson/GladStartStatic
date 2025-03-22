// src/components/features/UserFeed.js
import React from 'react';
import { formatDate } from '../../utils';

const UserFeed = ({ posts }) => {
  return (
    <div className="content-layout">
      <div className="main-column">
        <div className="popover-header" style={{ marginBottom: '1.5rem' }}>
          <h2 className="page-title">Användarinlägg</h2>
          <div className="badge">Kommer snart</div>
        </div>

        <div className="user-posts">
          {posts.map((post) => (
            <div key={post.id} className="user-card">
              <div className="user-card-header">
                <img
                  src={post.avatar || '/images/avatar-placeholder.jpg'}
                  alt={post.username}
                  className="user-avatar"
                />
                <div className="user-info">
                  <h4 className="user-name">{post.username}</h4>
                  <span className="user-date">{formatDate(post.date, 'long')}</span>
                </div>
              </div>
              
              <div className="user-card-content">
                <h3 className="user-card-title">{post.title}</h3>
                <p>{post.content}</p>
                
                {post.image && (
                  <img src={post.image} alt={post.title} className="user-card-image" />
                )}
              </div>
              
              <div className="user-card-footer">
                <button className="action-button">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                  <span>{post.likes}</span>
                </button>
                <button className="action-button">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  <span>{post.comments}</span>
                </button>
                <button className="action-button">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                  <span>Dela</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserFeed;