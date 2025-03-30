import { NavLink } from "react-router";
import Breadcrumbs from "./Breadcrumbs";
import userIcon from '../assets/userIcon.png'
import emailIcon from '../assets/emailIcon.png'
import googleIcon from '../assets/googleIcon.png'
import { useState } from "react";
import Button from "./Button";


const Login = () => {
    const [active, setActive] = useState<'sign-up' | 'login'>('sign-up');

    return (
        <section className=" my-20 mx-auto xl:p-0 lg:p-[46px]">
            <div className="xl:custom-container  lg:middle-container md:small-container max-[430px]:small-container">
            <div className="flex  items-center justify-between relative z-0 max-[1020px]:flex-col ">
                {/* left  */}
                <div className="relative z-0 w-[48%] h-[378px]">
                    <div className="absolute top-0 left-0  -z-10  blur-[100px] bg-[#77060B] w-[612px] h-[372px] rounded-r-full opacity-60 " />

                    <Breadcrumbs
                        title="Join Our Fitness Community"
                        subTitle="Sign up now to unlock exclusive access to personalized workout plans, expert coaching, and a supportive community that will help you achieve your fitness goals."
                        classNameSubTitle="text-white text-xm text-left text-medium my-4 "
                        classNameTitleOne="text-white text-[32px] font-bold text-left relative z-50 "
                        classNameTitleTwo="text-white text-[32px] font-bold"
                        classNameTitleThree="text-[#D90A14] text-[32px] font-bold"
                        classNameTitleFour="text-[#D90A14] text-[32px] font-bold"
                    />
                    <div className="flex flex-col h-[252px] relative z-20 gap-6">
                        <div className="flex items-center gap-6 relative -z-40">
                            <div className="bg-[#1D1D1D] w-[50%] h-[114px] rounded-[8px] py-3 px-3">
                                <h3 className="text-white text-base mb-2 text-center font-bold"><span className="text-[#D90A14] font-medium text-[16px]" >Personalized</span> Workout Plans</h3>
                                <p className="text-white text-[12px] text-justify">Customized routines that match your fitness level and goals, ensuring you achieve the best results in the most efficient way.</p>
                            </div>

                            <div className="bg-[#1D1D1D] w-[50%] h-[114px] rounded-[8px] py-3 px-3">
                                <h3 className="text-white text-base mb-2 text-center font-bold">Expert  <span className="text-[#D90A14] opacity-100" >Coaching</span></h3>
                                <p className="text-white text-[12px] text-justify">Work with certified trainers who will guide you every step of the way to ensure you're on the right track.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="bg-[#1D1D1D] w-[50%] h-[114px] rounded-[8px] py-3 px-3">
                                <h3 className="text-white text-base mb-2 text-center font-bold">Community <span className="text-[#D90A14]" >Support</span></h3>
                                <p className="text-white text-[12px] text-justify">Join a vibrant community of fitness enthusiasts where you can share experiences, get motivated, and stay inspired.</p>
                            </div>

                            <div className="bg-[#1D1D1D] w-[50%] h-[114px] rounded-[8px] py-3 px-3">
                                <h3 className="text-white text-base mb-2 text-center font-bold" >Exclusive <span className="text-[#D90A14]" >Resources</span></h3>
                                <p className="text-white text-[12px] text-justify">Access premium content, including video tutorials, nutrition guides, and member-only discounts on fitness gear.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right  */}
                <div className="bg-[#5B0408] w-[50%] rounded-[12px] py-4 px-6 mt-[156px]">
                    <h2 className="text-[#EE8E93] text-[20px] font-semibold text-center">
                        {/* Навигационные ссылки */}
                        <NavLink
                            to="/signup"
                            onClick={() => setActive('sign-up')} // Переключение состояния активной ссылки
                            className={`${active === 'sign-up'
                                ? "text-[#D90A14] text-2xl font-bold border-b-2 border-[#D90A14] pb-1"
                                : "text-[#EE8E93] text-[20px] font-semibold border-b-0"}`}
                        >
                            Sign Up
                        </NavLink>
                        <span className="mx-4">|</span> {/* Разделитель между ссылками */}
                        <NavLink
                            to="/login"
                            onClick={() => setActive('login')}
                            className={`${active === 'login'
                                ? "text-[#D90A14] text-2xl font-bold border-b-2 border-[#D90A14] pb-1"
                                : ""}`}
                        >
                            Login
                        </NavLink>
                    </h2>

                    <label htmlFor="name" className="text-white text-base font-medium ">Name</label>
                    <div className="relative mb-2">
                        <input
                            type="text"
                            className="mt-2 border-2 border-solid border-[#D9D9D9] py-3 px-9 pl-12 pr-9 placeholder:text-white w-full rounded-[4px]" // добавлены отступы для иконки
                            placeholder="Enter Your Name"
                        />
                        <img
                            src={userIcon}
                            alt="User-icon"
                            width={18}
                            height={20}
                            className="absolute left-3 top-[34px] transform -translate-y-1/2" // позиционирование иконки внутри поля
                        />
                    </div>

                    <label htmlFor="email" className="text-white text-base  font-medium">E-Mail</label>
                    <div className="relative mb-4">
                        <input
                            type="text"
                            className="mt-2 border-2 border-solid border-[#D9D9D9] py-3 px-9 pl-12 pr-9 placeholder:text-white w-full rounded-[4px]" // добавлены отступы для иконки
                            placeholder="Enter Your E-Mail"
                        />
                        <img
                            src={emailIcon}
                            alt="User-icon"
                            width={18}
                            height={20}
                            className="absolute left-3 top-[34px] transform -translate-y-1/2" // позиционирование иконки внутри поля
                        />
                    </div>
                    <Button type="submit" className="bg-[#D90A14] py-2 w-full rounded-[4px] text-white cursor-pointer mb-2" title="Sign Up" />
                    <div className="flex items-center justify-between mb-2">
                        <span className="block w-[266px] h-[1px] text-white border-b border-[1px] border-solid"></span>
                        <span className="text-white text-base font-medium">Or</span>
                        <span className="block w-[266px] h-[1px] text-white border-b border-[1px] border-solid"></span>
                    </div>
                    <Button type="submit" className="bg-none  py-2 w-full rounded-[4px] text-white cursor-pointer flex items-center  justify-center border-2 border-solid border-white" title="Sign Up With Google" icon={googleIcon} />

                </div>
            </div>
            </div>
        </section>
    )
}

export default Login
