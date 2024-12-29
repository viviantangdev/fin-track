import React from 'react'

interface PageHeaderProps{
    title: string;
    description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({title, description}) => {
  return (
    <section>
        <h2>{title}</h2>
        <p>{description}</p>
    </section>
  )
}

export default PageHeader