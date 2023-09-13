import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7t2gdpk', 'template_0s2bmzo', form.current, 'gInjccIl4ZwYBMeuN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
        e.target.reset();
        toast.success('Email sended')
    };
    return (
        <div id='about'>


            <h1 className='text-3xl font-semibold mt-12'>Contact With Me</h1>
            <div className='flex h-[40vh] items-center justify-center mt-12'>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">What is your name?</span>
                        </label>
                        <input required name='user_name' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your email?</span>
                        </label>
                        <input required name='user_email' type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Text?</span>
                        </label>
                        <textarea required name='message' type="text" placeholder="Type here" className=" textarea input input-bordered w-full max-w-xs" />
                    </div>
                    <input className='bg-gradient-to-r from-[#F15A29] to-[#F7941D] px-3 py-2 mt-2 rounded-md' type="submit" />
                </form>
            </div>
            

        </div>
    );
};

export default Contact;