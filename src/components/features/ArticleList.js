import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleList = ({ articles, onResetFilters }) => {
  if (articles.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-message">Inga artiklar matchar dina filter. Prova att ändra dina filterval.</p>
        <button className="reset-button" onClick={onResetFilters}>
          Återställ filter
        </button>
      </div>
    );
  }

  return (
    <div className="article-list">
      <iframe
              src="https://gladstart.curated.co/embed?color1=f5efe7&color2=4a3520&color_bg_button=e67e22&color_border=f39c12&color_button=ffffff&color_links=6f4e37&color_terms=967259&title=Join+GladStart+%F0%9F%98%8A+"
              width="100%"
              height="310"
              frameBorder="0"
              style={{ maxWidth: '100%', marginBottom: '-5.3rem' }}
              title="GladStart Newsletter"
            ></iframe>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
