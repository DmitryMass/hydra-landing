import { FC } from 'react';
import { Container } from '../layouts/Container';
import { servicesList } from '@/utils/servicesList';
import { MainButton } from '../ui/MainButton';
import { ServiceItem } from './ServiceItem';

export const ServicesSection: FC = () => {
  return (
    <section className="mb-24">
      <Container>
        <div className="grid grid-cols-4 gap-2.5 max-lg:grid-cols-2 max-sm:hidden">
          {servicesList.map((service) => (
            <ServiceItem key={service.service} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
};
