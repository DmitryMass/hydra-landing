import { FC } from 'react';

type TitlesProps = {
  title: string;
  subtitle: string;
};
export const Titles: FC<TitlesProps> = ({ subtitle, title }) => {
  return (
    <div className="max-lg:text-center max-lg:hidden mb-10">
      <p className="text-l36 font-bold mb-2.5 max-lg:text-md26 uppercase">
        {title}
      </p>
      <p className="text-l36 font-thin max-lg:text-md26 uppercase">
        {subtitle}
      </p>
    </div>
  );
};
