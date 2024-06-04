import { FC } from 'react';
import { getAllArticles, getAllPages, getPageData } from '~sanity/sanity.query';
import Hero from '~components/Hero';
import Services from '~components/Services';
import TwoColumnTextImage from '~components/TwoColumnTextImage';
import TwoColumnImageText from '~components/TwoColumnImageText';
import TwoColumnListImage from '~components/TwoColumnListImage';
import TwoColumnImageList from '~components/TwoColumnImageList';
import AllArticles from '~components/AllArticles';

import {
  ComponentMap,
  ParamsProps,
  PageProps,
  PageData,
  ComponentProps,
  ArticleData,
} from '~types/index';

const componentMap: ComponentMap = {
  hero: Hero as FC<ComponentProps>,
  services: Services as FC<ComponentProps>,
  twoColumnTextImage: TwoColumnTextImage as FC<ComponentProps>,
  twoColumnImageText: TwoColumnImageText as FC<ComponentProps>,
  twoColumnListImage: TwoColumnListImage as FC<ComponentProps>,
  twoColumnImageList: TwoColumnImageList as FC<ComponentProps>,
  allArticles: AllArticles as FC<ComponentProps>,
};

export default async function Page({ params }: ParamsProps) {
  const { slug } = params;
  const pageData: PageData = await getPageData(slug);
  const articles: ArticleData[] = await getAllArticles();

  return (
    <>
      <main>
        {pageData?.pageBuilder?.map((block, index) => {
          const Component = componentMap[block._type];
          const componentProps =
            block._type === 'allArticles' ? { ...block, articles } : block;
          return Component ? (
            <Component key={index} {...componentProps} />
          ) : null;
        })}
      </main>
    </>
  );
}

export async function generateStaticParams() {
  const pages: PageProps[] = await getAllPages();
  return pages.map((page: PageProps) => ({ slug: page.slug?.current }));
}
