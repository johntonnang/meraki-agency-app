import Image from 'next/image';
import { TwoColumnListImageProps } from '~types/index';

const TwoColumnImageList: React.FC<TwoColumnListImageProps> = ({
  header,
  servicesList,
  image,
}) => {
  return (
    <section className="flex h-full w-full flex-col gap-16 py-16 text-right lg:flex-row-reverse lg:gap-0 lg:py-32">
      <div className="flex h-full w-full flex-col gap-4 lg:gap-6">
        <h2 className="text-28 font-black uppercase leading-none tracking-tight lg:text-64">
          {header}
        </h2>
        <ul className="list-right list-disc pr-4">
          {servicesList.map((service, index) => (
            <li key={index} className="text-16 lg:text-24">
              {service}
            </li>
          ))}
        </ul>
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

export default TwoColumnImageList;
