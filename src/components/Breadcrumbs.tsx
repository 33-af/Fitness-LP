import { FC } from 'react';

type BreadcrumbsProps = {
    title: string;
    subTitle?: string;

    classNameTitleOne?: string;
    classNameTitleTwo?: string;
    classNameTitleThree?: string;
    classNameTitleFour?: string;
    classNameSubTitle?: string;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({
    title,
    subTitle,
    classNameTitleOne,
    classNameTitleTwo,
    classNameTitleThree,
    classNameTitleFour,
    classNameSubTitle
}) => {
    const words = title.split(" ");
    return (
        <section className="text-center  xl:custom-container lg:middle-container ">
            <h2 className={`${classNameTitleOne} relative z-[20]`}>
                <span className={`${classNameTitleOne}`}>{words[0]}</span>{" "}
                <span className={`${classNameTitleTwo}`}>{words[1]}</span>{" "}
                <span className={`${classNameTitleThree}`}>{words?.[2]}</span>{" "}
                <span className={`${classNameTitleFour}`}>{words?.[3]}</span>
            </h2>
            <p className={classNameSubTitle}>{subTitle}</p>
        </section>
    );
};


export default Breadcrumbs
