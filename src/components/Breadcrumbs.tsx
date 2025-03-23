import { FC } from 'react';

type BreadcrumbsProps = {
    title: string;
    subTitle: string;
    classNameTitle: string;
    classNameSubTitle: string
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ title, subTitle, classNameTitle, classNameSubTitle }) => {
    const words = title.split(" ");
    return (
        <section className='custom-container text-center '>
            <h2 className={`${classNameTitle}`}>
                <span className='text-white'>{words[0]}</span>{" "}
                <span className="text-[#D90A14]">{words[1]}</span>
            </h2>
            <p className={classNameSubTitle}>{subTitle}</p>
        </section>
    )
}

export default Breadcrumbs
