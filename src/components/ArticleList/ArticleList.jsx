const ArticleList = ({ items }) => {
  return (
    <ul>
      {items.map(({ objectID, url, title }) => {
        return (
          <li key={objectID}>
            <a href={url} target="_blank" rel="noreferrer noopener">
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default ArticleList;
