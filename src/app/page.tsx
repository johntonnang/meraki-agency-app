import { FC } from 'react';
import { getStartPageData } from '../sanity/sanity.query';
import Hero from '~components/Hero';
import Services from '~components/Services';
import TwoColumnTextImage from '~components/TwoColumnTextImage';
import TwoColumnImageText from '~components/TwoColumnImageText';
import TwoColumnListImage from '~components/TwoColumnListImage';
import TwoColumnImageList from '~components/TwoColumnImageList';
import ArticlesHighlight from '~components/ArticlesHighlight';

import { ComponentProps, ComponentMap, PageData } from '~types/index';

const componentMap: ComponentMap = {
  hero: Hero as FC<ComponentProps>,
  services: Services as FC<ComponentProps>,
  twoColumnTextImage: TwoColumnTextImage as FC<ComponentProps>,
  twoColmnImageText: TwoColumnImageText as FC<ComponentProps>,
  twoColumnListImage: TwoColumnListImage as FC<ComponentProps>,
  twoColumnImageList: TwoColumnImageList as FC<ComponentProps>,
  articlesHighlight: ArticlesHighlight as FC<ComponentProps>,
};

export default async function Home() {
  const pageData: PageData = await getStartPageData();

  return (
    <>
      <main>
        {pageData.pageBuilder?.map((block, index) => {
          const Component = componentMap[block._type];
          return Component ? <Component key={index} {...block} /> : null;
        })}
      </main>
    </>
  );
}
