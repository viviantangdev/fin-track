import React from 'react';

interface SectionWrapperProps {
  title?: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  title,
  children
}) => {
  return (
    <section className='space-y-5 py-10'>
      <h3>{title}</h3>
      {children}
    </section>
  );
};

export default SectionWrapper;
