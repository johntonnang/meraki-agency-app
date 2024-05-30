import { FC } from 'react';
import { getAllArticles, getArticleData } from '~sanity/sanity.query';
import { PortableText } from '@portabletext/react';
import { ParamsProps, ArticleData } from '~types/index';
import Image from 'next/image';

const ArticlePage: FC<{ articleData: ArticleData }> = ({ articleData }) => (
  <section className="h-full w-full py-16 lg:py-32">
    <article>
      <div className="flex h-full w-full flex-col gap-16 lg:flex-row lg:gap-0">
        <div className="flex h-full w-full flex-col gap-4 lg:gap-6">
          <h1 className="text-36 lg:text-64 font-black uppercase leading-none tracking-tight">
            {articleData.name}
          </h1>
          {articleData.author && <p>By {articleData.author.name}</p>}
          {articleData.date && (
            <p>{new Date(articleData.date).toLocaleDateString()}</p>
          )}
          {articleData.preamble && <p>{articleData.preamble}</p>}
        </div>
        {articleData.image?.image && (
          <Image
            src={articleData?.image?.image}
            alt={articleData?.image?.alt}
            width="0"
            height="0"
            sizes="100vw"
            className="h-auto w-full"
          />
        )}
      </div>
      {articleData.details && <PortableText value={articleData.details} />}
    </article>
  </section>
);

export default async function Page({ params }: ParamsProps) {
  const { slug } = params;
  const articleData: ArticleData = await getArticleData(slug);

  return (
    <>
      <main>{articleData && <ArticlePage articleData={articleData} />}</main>
    </>
  );
}

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article: { slug: { current: string } }) => ({
    slug: article.slug?.current,
  }));
}
