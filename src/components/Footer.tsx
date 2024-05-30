import Image from 'next/image';
import Link from 'next/link';
import { FooterProps } from '~types/index';
const Footer: React.FC<FooterProps> = ({ footerData }) => {
  return (
    <footer className="flex h-96 w-full flex-col before:h-1 before:w-full before:bg-white before:content-['']">
      <div className="flex h-full w-full flex-col items-center justify-between py-16 lg:flex-row lg:py-32">
        <ul className="flex gap-3">
          {footerData?.socialLinks.map((socialLink, index) => (
            <li key={index}>
              <Link
                aria-label={`${socialLink?.title} page`}
                className="whitespace-nowrap text-16 uppercase underline underline-offset-4 lg:text-20"
                href={socialLink.url}
              >
                {socialLink?.title}
              </Link>
            </li>
          ))}
        </ul>
        <Image
          src={footerData?.image?.image}
          alt={footerData?.image?.alt}
          width="0"
          height="0"
          sizes="100vw"
          className="h-10 w-full lg:h-20"
        />
        <nav>
          <ul className="flex gap-3">
            {footerData?.links.map((link, index) => (
              <li key={index}>
                <Link
                  aria-label={`Internal link to: ${link?.pageReference?.slug?.current}`}
                  className="whitespace-nowrap text-16 uppercase underline underline-offset-4 lg:text-20"
                  href={`/${link?.pageReference?.slug?.current}`}
                >
                  {link?.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
