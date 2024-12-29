import React from 'react';

interface SectionWrapperProps {
  title: string;
  sectionClassName?: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  title,
  sectionClassName,
  children,
}) => {
  return (
    <section className={`${sectionClassName} space-y-5 py-10`}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default SectionWrapper;
