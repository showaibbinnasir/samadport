import React, { useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import MyModal from './MyModal';

const Project = ({ project }) => {
    const [state , setState] = useState(false)
    return (
        <div className='mt-12 flex justify-center'>
            <div className="card w-[300px] lg:w-[350px] bg-base-100 shadow-2xl">
                <figure><img data-aos="fade-down-right" data-aos-duration="2000" src={project.profile} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 data-aos="fade-down-right" data-aos-duration="2000" className="card-title">
                        {project.projectName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{project.description}</p>
                    <label onClick={()=> setState(true)} className="bg-gradient-to-r from-[#F15A29] to-[#F7941D] px-3 py-2 rounded-md" htmlFor="my-modal-3">See Details</label>
                    {
                        state === true && <MyModal project={project} setState={setState}></MyModal>
                    }
                    
                    
                    <div className="card-actions justify-end">
                        <a href={project.liveLink} className="badge badge-outline">Live Link</a>
                        <a href={project.githubLink} className="badge badge-outline">Code LInk</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;