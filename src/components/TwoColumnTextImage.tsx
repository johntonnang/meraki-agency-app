import Image from 'next/image';
import Link from 'next/link';
import { TwoColumnTextImageProps } from '~types/index';

const TwoColumnTextImage: React.FC<TwoColumnTextImageProps> = ({
  header,
  preamble,
  description,
  hasLink,
  link,
  image,
}) => {
  const renderLink = () => {
    let href = '';

    switch (link?.linkType) {
      case 'internal':
        href = `/${link?.pageReference?.slug?.current}`;
        break;
      case 'external':
        href = link?.url;
        break;
      case 'email':
        href = `mailto:${link?.email}`;
        break;
      case 'phone':
        href = `tel:${link?.phone}`;
        break;
      default:
        return null;
    }

    return (
      <Link
        className="ml-1 flex h-12 w-40 items-center justify-center rounded-lg border-2 border-black bg-white text-16 font-medium text-black active:-translate-x-[2px] active:translate-y-[2px] lg:h-16 lg:w-52 lg:text-20"
        href={href}
        target={link?.linkType === 'external' ? '_blank' : undefined}
        rel={link?.linkType === 'external' ? 'noopener noreferrer' : undefined}
      >
        {link?.title}
      </Link>
    );
  };

  return (
    <section className="flex h-full w-full flex-col gap-16 py-16 lg:flex-row lg:gap-0 lg:py-32">
      <div className="flex h-full w-full flex-col gap-4 lg:gap-6">
        <p className="w-3/4 text-12 lg:w-2/3 lg:text-16">{preamble}</p>
        <h2 className="text-28 font-black uppercase leading-none tracking-tight lg:text-64">
          {header}
        </h2>
        <p className="text-16 lg:text-24">{description}</p>
        {link && hasLink && (
          <div className="relative">
            {renderLink()}
            <div className="absolute left-1 top-0 -z-[1] h-12 w-40 -translate-x-1 translate-y-1 rounded-lg bg-main-green lg:h-16 lg:w-52" />
          </div>
        )}
      </div>
      <div className="flex h-full w-full items-center justify-center">
        <Image
          src={image?.image}
          alt={image?.alt}
          width="0"
          height="0"
          sizes="(max-width: 768px) 100vw, 33vw"
          className="aspect-video h-auto w-full object-cover"
        />
      </div>
    </section>
  );
};

export default TwoColumnTextImage;
