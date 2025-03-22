import React from 'react';
import LazyImage from './LazyImage';
import { formatDate, getScoreColorClass } from '../../utils';

const ArticleCard = ({ article }) => {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="article-card"
    >
      {article.image_url && (
        <LazyImage
          src={article.image_url}
          alt={article.title}
          className="article-card-image"
        />
      )}

      <div className="article-card-content">
        <div className="article-card-header">
          <span className="article-card-source">{article.source.name}</span>
          <span
            className={getScoreColorClass(article.positivity_score)}
          >
            +{Math.round(article.positivity_score * 100)}%
          </span>
        </div>

        <h3 className="article-card-title">{article.title}</h3>

        <p className="article-card-summary">{article.summary}</p>

        <div className="article-card-footer">
          <span className="article-card-date">{formatDate(article.published_date)}</span>

          <div>
            {article.region && (
              <span className="article-card-region">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {article.region.name}
              </span>
            )}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;
