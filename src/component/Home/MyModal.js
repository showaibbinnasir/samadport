import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { DiFirefox, DiGithubBadge, DiStreamline } from "react-icons/di";

const MyModal = ({ project, setState }) => {
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal w-auto scale-96">
                <div className="modal-box relative bg-gradient-to-r from-[#F15A29] to-[#F7941D]">
                    <label onClick={() => setState(false)} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{project.projectName}</h3>
                    <p className="py-4">{project.description}</p>
                    <p>ScreenShots</p>
                    <PhotoProvider>
                        <div className="foo grid grid-cols-2 lg:grid-cols-3 gap-5">
                            {project.thumbnails.map((item, index) => (
                                <PhotoView key={index} src={item}>
                                    <img className='w-20 lg:w-40 rounded-lg' src={item} alt="" />
                                </PhotoView>
                            ))}
                        </div>
                    </PhotoProvider>
                    <h1>Features : </h1>
                    <ul className='mx-12 list-disc'>
                        {
                            project.features.map(feature => <li>{feature}</li>)
                        }
                    </ul>
                    <h1>Links : </h1>
                    <div className='flex justify-center'>
                        <div className='flex'>
                            <a href={project.liveLink} target="_blank"><h1 className='text-4xl'><DiFirefox /></h1></a>
                            <a href={project.githubLink} target="_blank"><h1 className='text-4xl'><DiGithubBadge /></h1></a>
                            <a href={project.serverLink} target="_blank"><h1 className='text-4xl'><DiStreamline /></h1></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyModal;