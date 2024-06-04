import { groq } from 'next-sanity';
import { client } from './sanity.client';

export async function getAllPages() {
  return await client.fetch(groq`*[_type == "page"]{ _id, title, slug }`);
}

export async function getPageData(slug: string) {
  try {
    return await client.fetch(
      groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      pageBuilder[]{
        ...,
        _type == "hero" => {
          _type,
          heading,
          tagline,
          offerTitle,
          offersList[]
        },
        _type == "textWithIllustration" => {
          _type,
          title,
          content,
          illustration {
            "image": asset->url,
            alt
          }
        },
        _type == "gallery" => {
          _type,
          title,
          images[]{
            "image": asset->url,
            alt
          }
        },
        _type == "video" => {
          _type,
          title,
          url
        },
        _type == "form" => {
          _type,
          title,
          formId
        },
        _type == "services" => {
          _type,
          title,
          servicesList[]
        },
        _type == "twoColumnTextImage" => {
          _type,
          header,
          preamble,
          description,
          link {
          title,
          linkType,
          url,
          email,
          phone,
          pageReference-> {
            slug
          }
        },
          image {
            "image": asset->url,
            alt,
            hotspot,
          }
        },
        _type == "twoColumnImageText" => {
          _type,
          header,
          preamble,
          description,
          link {
          title,
          linkType,
          url,
          email,
          phone,
          pageReference-> {
            slug
          }
        },
          image {
            "image": asset->url,
            alt,
            hotspot,
          }
        },
        _type == "twoColumnListImage" => {
          _type,
          header,
          servicesList,
          image {
            "image": asset->url,
            alt,
            hotspot
          }
        },
        _type == "twoColumnImageList" => {
          _type,
          header,
          servicesList,
          image {
            "image": asset->url,
            alt,
            hotspot
          }
        },
        _type == "articlesHighlight" => {
          _type,
          title,
          articles[]->{
            _id,
            name,
            slug,
            preamble,
            date,
            image {
              "image": asset->url,
              alt
            }
          }
        }
      }
    }`,
      { slug }
    );
  } catch (error) {
    console.error('Error when fetching page data.', error);
    return null;
  }
}

export async function getStartPageData() {
  try {
    return await client.fetch(
      groq`*[_type == "page" && isStartPage == true][0]{
      _id,
      title,
      pageBuilder[]{
        ...,
        _type == "hero" => {
          _type,
          heading,
          tagline,
          offerTitle,
          offersList[]
        },
        _type == "textWithIllustration" => {
          _type,
          title,
          content,
          illustration {
            "image": asset->url,
            alt
          }
        },
        _type == "gallery" => {
          _type,
          title,
          images[]{
            "image": asset->url,
            alt
          }
        },
        _type == "video" => {
          _type,
          videoLabel,
          url
        },
        _type == "form" => {
          _type,
          title,
          formId
        },
        _type == "services" => {
          _type,
          title,
          services
        },
        _type == "twoColumnTextImage" => {
          _type,
          header,
          preamble,
          description,
          link {
          title,
          linkType,
          url,
          email,
          phone,
          pageReference-> {
            slug
          }
        },
          image {
            "image": asset->url,
            alt,
            hotspot,
          }
        },
        _type == "twoColumnImageText" => {
          _type,
          header,
          preamble,
          description,
          link {
          title,
          linkType,
          url,
          email,
          phone,
          pageReference-> {
            slug
          }
        },
          image {
            "image": asset->url,
            alt,
            hotspot,
          }
        },
        _type == "twoColumnListImage" => {
          _type,
          header,
          servicesList,
          image {
            "image": asset->url,
            alt,
            hotspot
          }
        },
        _type == "twoColumnImageList" => {
          _type,
          header,
          servicesList,
          image {
            "image": asset->url,
            alt,
            hotspot
          }
        },
        _type == "articlesHighlight" => {
          _type,
          title,
          articles[]->{
            _id,
            name,
            slug,
            preamble,
            date,
            image {
              "image": asset->url,
              alt
            }
          }
        }
      }
    }`
    );
  } catch (error) {
    console.error('Error when fetching start page data.', error);
    return null;
  }
}

export async function getMenuData() {
  try {
    return await client.fetch(
      groq`*[_type == "menu"][0]{
        title,
        image {
          "image": asset->url,
          alt
        },
        links[] {
          title,
          pageReference-> {
            slug
          }
        },
        socialLinks,
        link {
          title,
          pageReference-> {
            slug
          }
        }
      }`
    );
  } catch (error) {
    console.error('Error when fetching menu data.', error);
    return null;
  }
}

export async function getFooterData() {
  try {
    return await client.fetch(
      groq`*[_type == "footer"][0]{
        title,
        image {
          "image": asset->url,
          alt
        },
        links[] {
          title,
          pageReference-> {
            slug
          }
        },
        socialLinks
      }`
    );
  } catch (error) {
    console.error('Error when fetching footer data.', error);
    return null;
  }
}

export async function getAllArticles() {
  return await client.fetch(
    groq`*[_type == "article"]{ _id, name, slug, preamble, date, author->{name}, image{ "image": asset->url, alt } }`
  );
}

export async function getArticleData(slug: string) {
  try {
    return await client.fetch(
      groq`*[_type == "article" && slug.current == $slug][0]{
        _id,
        name,
        slug,
        preamble,
        date,
        author->{
          name
        },
        image {
          "image": asset->url,
          alt
        },
        details[]{
          ...,
          _type == "block" => {
            ...
          }
        }
      }`,
      { slug }
    );
  } catch (error) {
    console.error('Error when fetching article data.', error);
    return null;
  }
}
