import React from 'react';

const About = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row items-center justify-center gap-12 mx-12'>
            <div className='text-start w-72 lg:w-96'>
                <h1 className='text-2xl font-semibold'>ABOUT ME</h1>
                <h1 className='text-justify'>I am an enthusiastic individual and consider myself very adaptable to any
                    given situation. In addition, I am very good at time management and love
                    working with a team and I believe I would be an excellent addition to your
                    team. </h1>
                    <h1>Email: <span style={{borderBottom: "1px solid white"}}>mdsharifsamad@gmail.com</span></h1>
            </div>
            <div  data-aos="zoom-out"  data-aos-duration="2000">
                <img className='w-[350px]' src="showaib2.png" alt="" />
            </div>
        </div>
    );
};

export default About;