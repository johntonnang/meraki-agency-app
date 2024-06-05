import { FC } from 'react';
import { PortableText } from '@portabletext/react';
import { ArticleData } from '~types/index';
import Image from 'next/image';

const ArticlePage: FC<{ articleData: ArticleData }> = ({ articleData }) => (
  <article>
    <h1>{articleData.name}</h1>
    {articleData.author && <p>By {articleData.author.name}</p>}
    {articleData.date && (
      <p>{new Date(articleData.date).toLocaleDateString()}</p>
    )}
    {articleData.image?.image && (
      <Image
        src={articleData.image.image}
        alt={articleData.image.alt}
        width="0"
        height="0"
        sizes="(max-width: 768px) 100vw, 33vw"
        className="aspect-video h-auto w-full object-cover"
      />
    )}
    {articleData.preamble && <p>{articleData.preamble}</p>}
    {articleData.details && <PortableText value={articleData.details} />}
  </article>
);

export default ArticlePage;
