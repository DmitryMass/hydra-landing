import { FC, Fragment } from 'react';
import { Container } from '../layouts/Container';
import { contactList } from '@/utils/contactList';

//lg need to add Mediaqueries and hidden block + add Swiper
export const Contact: FC = () => {
  return (
    <section className="mb-20 max-lg:hidden relative">
      <Container>
        <div className="contact-gradient py-10 pl-4 pr-10 flex justify-between items-center">
          {contactList.map(({ logo, subtitle, title }) => (
            <Fragment key={title}>
              {title === 'Give Us a Call' ? (
                <div className="h-[100px] w-[2px] bg-stroke" />
              ) : null}
              <div className="flex items-center px-10">
                <img src={logo} alt="logo" />
                <div className="ml-2.5">
                  <p className="text-md24 mb-2.5 font-bold">{title}</p>
                  <p className="text-s14">{subtitle}</p>
                </div>
              </div>
              {title === 'Give Us a Call' ? (
                <div className="h-[100px] w-[2px] bg-stroke" />
              ) : null}
            </Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
};
