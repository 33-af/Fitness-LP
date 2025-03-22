import { FC } from 'react';

type BreadcrumbsProps  = {
    title: string;
    subTitle: string;
    classNameTitle: string;
    classNameSubTitle: string
}

const Breadcrumbs: FC<BreadcrumbsProps > = ({ title, subTitle, classNameTitle, classNameSubTitle }) => {
    return (
        <section className=''>

            <h2 className={classNameTitle}>{title}</h2>
            <p className={classNameSubTitle}>{subTitle}</p>
        </section>
    )
}

export default Breadcrumbs
