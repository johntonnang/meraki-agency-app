import React from 'react';
import { ServicesProps } from '~types/index';

const Services: React.FC<ServicesProps> = ({ servicesList }) => {
  const renderServiceItems = (list: string[]) => {
    return list.map((service, index) => (
      <li
        key={index}
        className="lg:text-48 text-20 text-nowrap uppercase leading-tight opacity-20"
      >
        {service}
      </li>
    ));
  };

  const concatenatedList = servicesList.concat(servicesList);

  return (
    <section className="flex h-full w-full flex-col items-center justify-center py-16 lg:py-32">
      <div className="relative w-full overflow-hidden">
        <ul className="slider-left flex w-fit">
          {renderServiceItems(concatenatedList)}
        </ul>
        <ul className="slider-right flex w-fit">
          {renderServiceItems(concatenatedList)}
        </ul>
        <ul className="relative left-1/2 flex w-fit -translate-x-1/2">
          {concatenatedList.map((service, index) => (
            <React.Fragment key={index}>
              {index === 7 && (
                <li className="lg:text-48 text-20 text-nowrap font-bold uppercase leading-tight text-white">
                  This is Meraki Agency.
                </li>
              )}
              <li className="lg:text-48 text-20 w-fit text-nowrap uppercase leading-tight opacity-20">
                {service}
              </li>
            </React.Fragment>
          ))}
        </ul>
        <ul className="slider-left flex w-fit">
          {renderServiceItems(concatenatedList)}
        </ul>
        <ul className="slider-right flex w-fit">
          {renderServiceItems(concatenatedList)}
        </ul>
        <div className="fade-services" />
      </div>
    </section>
  );
};

export default Services;
