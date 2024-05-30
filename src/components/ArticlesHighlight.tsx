import { ArticlesHighlightProps } from '~types/index';
import Link from 'next/link';

const ArticlesHighlight: React.FC<ArticlesHighlightProps> = ({
  title,
  articles,
}) => {
  return (
    <section className="flex h-full w-full flex-col gap-8 py-16 lg:gap-16 lg:py-32">
      <h2 className="text-36 lg:text-64 font-black uppercase">{title}</h2>
      <div className="grid grid-rows-1 gap-8 lg:grid-cols-4">
        {articles.map((article) => (
          <div
            key={article._id}
            className="bg-dark flex flex-col gap-3 border-4 p-6"
          >
            <p className="text-12 font-light">
              {new Date(article?.date).toLocaleDateString()}
            </p>
            <h3 className="text-24 lg:text-40 font-black leading-tight">
              {article?.name}
            </h3>
            <p className="text-16">{article?.preamble}</p>
            <div className="relative z-10 mt-auto">
              <Link
                className="text-12 flex h-10 w-32 items-center justify-center rounded-lg border-2 border-black bg-white font-medium text-black active:-translate-x-[2px] active:translate-y-[2px]"
                href={`/inspiration/${article.slug?.current}`}
              >
                Read more
              </Link>
              <div className="bg-main-green absolute left-0 top-0 -z-[1] h-10 w-32 -translate-x-1 translate-y-1 rounded-lg" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full items-center gap-6 whitespace-nowrap before:h-1 before:w-full before:bg-white before:content-['']">
        <Link
          href="/inspiration"
          className="text-16 lg:text-20 group flex font-medium"
        >
          Show all
          <span className="ml-6 flex -translate-x-2 transform transition-transform duration-300 group-hover:translate-x-0">
            &rarr;
          </span>
        </Link>
      </div>
    </section>
  );
};

export default ArticlesHighlight;