import { FC } from 'react';
import { PortableText } from '@portabletext/react';
import { ArticleData } from '~types/index';

const ArticlePage: FC<{ articleData: ArticleData }> = ({ articleData }) => (
  <article>
    <h1>{articleData.name}</h1>
    {articleData.author && <p>By {articleData.author.name}</p>}
    {articleData.date && (
      <p>{new Date(articleData.date).toLocaleDateString()}</p>
    )}
    {articleData.image?.image && (
      <img src={articleData.image.image} alt={articleData.image.alt} />
    )}
    {articleData.preamble && <p>{articleData.preamble}</p>}
    {articleData.details && <PortableText value={articleData.details} />}
  </article>
);

export default ArticlePage;
