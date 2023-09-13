import React from 'react';
import { DiFirefox, DiGithubBadge, DiStreamline, BsLinkedin } from "react-icons/di";
import { AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { Typewriter } from 'react-simple-typewriter'
const TopBanner = () => {
    return (
        <div className='flex justify-center mt-12'>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-around items-center gap-5'>
                <div className='text-start' data-aos="fade-down-right" data-aos-duration="2000">
                    <h1>Hello I Am</h1>
                    <h1 className='text-4xl font-semibold'>Showaib bin Nasir</h1>
                    <h1 style={{ fontSize: '18px', margin: 'auto 0', fontWeight: 'normal' }}>
                        A {' '}
                        <span style={{ color: 'white'}}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Junior JavaScript Developer', 'MERN Stack Specialist']}
                                loop={15}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}

                            />
                        </span>
                    </h1>
                    <div className='flex justify-start'>
                        <div className='flex'>
                            <a href="https://www.linkedin.com/in/showaib-bin-nasir-7381491a3" target="_blank"><h1 className='text-4xl'><AiFillLinkedin /></h1></a>
                            <a href="https://github.com/showaibbinnasir" target="_blank"><h1 className='text-4xl'><DiGithubBadge /></h1></a>
                            <a href="https://www.facebook.com/showaibbin.nasir/" target="_blank"><h1 className='text-4xl'><AiFillFacebook /></h1></a>
                        </div>
                    </div>
                    <div data-aos="zoom-in-left" data-aos-duration="2000">
                        <a href='resume.pdf' download class="btn border-none bg-gradient-to-r from-[#F15A29] to-[#F7941D] px-3 py-2 mt-2 rounded-md">Download CV</a>
                    </div>
                </div>
                <div data-aos="fade-down-left" data-aos-duration="2000">
                    <img className='w-[350px]' src="logo.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default TopBanner;