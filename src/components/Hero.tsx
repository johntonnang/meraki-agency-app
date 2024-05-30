import { HeroProps } from '~types/index';

const Hero: React.FC<HeroProps> = ({
  heading,
  tagline,
  offerTitle,
  offersList,
}) => {
  const concatenatedList = offersList?.concat(offersList);

  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center gap-4 py-16 lg:gap-8 lg:py-32">
      <p className="text-14 lg:text-36">{tagline}</p>
      <h1 className="text-center text-40 font-black uppercase tracking-tight lg:text-150">
        {heading}
      </h1>
      <div className="flex w-full flex-col items-center justify-center gap-2 lg:flex-row lg:items-start lg:gap-6 lg:text-36">
        <h2>{offerTitle}</h2>
        {offersList && (
          <div className="relative h-20 overflow-hidden lg:h-56">
            <ul className="vertical-slider text-center lg:text-start">
              {concatenatedList.map((offer, index) => (
                <li key={index}>{offer}</li>
              ))}
            </ul>
            <div className="fade-offers" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
