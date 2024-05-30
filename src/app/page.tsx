import { FC } from 'react';
import { getStartPageData } from '../sanity/sanity.query';
import Hero from '~components/Hero';
import Services from '~components/Services';
import TwoColumnTextImage from '~components/TwoColumnTextImage';
import TwoColumnImageText from '~components/TwoColumnImageText';
import ArticlesHighlight from '~components/ArticlesHighlight';

import { ComponentProps, ComponentMap, PageData } from '~types/index';

const componentMap: ComponentMap = {
  hero: Hero as FC<ComponentProps>,
  services: Services as FC<ComponentProps>,
  twoColumnTextImage: TwoColumnTextImage as FC<ComponentProps>,
  twoColmnImageText: TwoColumnImageText as FC<ComponentProps>,
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
