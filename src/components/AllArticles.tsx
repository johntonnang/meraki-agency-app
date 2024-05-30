import { FC } from 'react';
import Link from 'next/link';
import { AllArticlesProps } from '~types/index';

const AllArticles: FC<AllArticlesProps> = ({ title, articles }) => {
  return (
    <section className="flex h-full w-full flex-col gap-8 py-16 lg:gap-16 lg:py-32">
      <h2 className="text-36 font-black uppercase lg:text-64">{title}</h2>
      <div className="grid grid-rows-1 gap-8 lg:grid-cols-4">
        {articles.map((article) => (
          <div
            key={article._id}
            className="flex flex-col gap-3 border-4 bg-dark p-6"
          >
            <p className="text-12 font-light">
              {new Date(article?.date).toLocaleDateString()}
            </p>
            <h3 className="text-24 font-black leading-tight lg:text-40">
              {article?.name}
            </h3>
            <p className="text-16">{article?.preamble}</p>
            <div className="relative z-10 mt-auto">
              <Link
                aria-label="Read more"
                className="flex h-10 w-32 items-center justify-center rounded-lg border-2 border-black bg-white text-12 font-medium text-black active:-translate-x-[2px] active:translate-y-[2px]"
                href={`/inspiration/${article.slug?.current}`}
              >
                Read more
              </Link>
              <div className="absolute left-0 top-0 -z-[1] h-10 w-32 -translate-x-1 translate-y-1 rounded-lg bg-main-green" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllArticles;
