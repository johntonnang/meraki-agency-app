import { PortableTextBlock } from '@portabletext/react';
import { FC } from 'react';

export interface BaseProps {
  _type: string;
}

export interface HeroProps extends BaseProps {
  _type: 'hero';
  heading: string;
  tagline: string;
  offerTitle: string;
  offersList: string[];
}

export interface ServicesProps extends BaseProps {
  _type: 'services';
  title: string;
  servicesList: string[];
}

export interface TwoColumnTextImageProps extends BaseProps {
  _type: 'twoColumnTextImage';
  header: string;
  preamble: string;
  description: string;
  hasLink: boolean;
  link: {
    title: string;
    linkType: 'internal' | 'external' | 'email' | 'phone';
    url: string;
    email: string;
    phone: string;
    pageReference?: {
      slug?: {
        current: string;
      };
    };
  };
  image: {
    image: string;
    alt: string;
  };
}

export interface TwoColumnListImageProps extends BaseProps {
  _type: 'twoColumnListImage';
  header: string;
  servicesList: string[];
  image: {
    image: string;
    alt: string;
  };
}

export interface ArticlesHighlightProps extends BaseProps {
  _type: 'articlesHighlight';
  title: string;
  articles: ArticlesHighlightItem[];
}

export interface ArticlesHighlightItem {
  _id: string;
  name: string;
  slug?: {
    current: string;
  };
  preamble: string;
  date: string;
  image: {
    image: string;
    alt: string;
  };
}

export interface AllArticlesProps extends BaseProps {
  _type: 'allArticles';
  title: string;
  articles: ArticleData[];
}

export interface ArticleData {
  _id: string;
  name: string;
  slug: { current: string };
  preamble?: string;
  date: string;
  author?: {
    name: string;
  };
  image: {
    image: string;
    alt: string;
  };
  details?: PortableTextBlock[];
}

export type MenuProps = {
  menuData: {
    image: {
      image: string;
      alt: string;
    };
    link: {
      title: string;
      pageReference: {
        slug?: {
          current: string;
        };
      };
    };
    title: string;
    links: {
      title: string;
      pageReference: {
        slug?: {
          current: string;
        };
      };
    }[];
    socialLinks: { url: string; title: string }[];
  };
};

export type FooterProps = {
  footerData: {
    image: {
      image: string;
      alt: string;
    };
    title: string;
    links: {
      title: string;
      pageReference: {
        slug?: {
          current: string;
        };
      };
    }[];
    socialLinks: { url: string; title: string }[];
  };
};

export type ComponentProps =
  | HeroProps
  | ServicesProps
  | TwoColumnTextImageProps
  | TwoColumnListImageProps
  | ArticlesHighlightProps
  | AllArticlesProps;

export type ComponentMap = {
  [key: string]: FC<ComponentProps>;
};

export interface MenuData {
  image: {
    image: string;
    alt: string;
  };
  link: {
    title: string;
    pageReference: {
      slug: {
        current: string;
      };
    };
  };
  title: string;
  links: {
    title: string;
    pageReference: {
      slug?: {
        current: string;
      };
    };
  }[];
  socialLinks: { url: string; title: string }[];
}

export interface FooterData {
  image: {
    image: string;
    alt: string;
  };
  title: string;
  links: {
    title: string;
    pageReference: {
      slug: {
        current: string;
      };
    };
  }[];
  socialLinks: { url: string; title: string }[];
}

export type PageData = {
  _id: string;
  title: string;
  pageBuilder: ComponentProps[];
};

export type PageProps = {
  slug?: {
    current: string;
  };
};

export type ParamsProps = {
  params: {
    slug: string;
  };
};
