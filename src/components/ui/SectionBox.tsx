import type { FC } from 'react';

type SectionBoxProps = {
  title: string;
  subtitle: string;
  desc: string;
};

export const SectionBox: FC<SectionBoxProps> = ({ desc, subtitle, title }) => {
  return (
    <div>
      <div>
        <p className="text-l36 font-bold">{title}</p>
        <div>
          <p className="text-l36 font-thin">{subtitle}</p>
          <img src="/icons/long-arrow-svg" alt="long-arrow" />
        </div>
      </div>
      <div className="max-w-description w-full">
        <p className="text-sm16">{desc}</p>
      </div>
    </div>
  );
};
