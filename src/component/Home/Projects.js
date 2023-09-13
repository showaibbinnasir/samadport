import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch("projets.json")
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
    },[])
    return (
        <div className='my-12' id='projects'>
            <h1 className='text-3xl'>Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-12 md:mx-26 lg:mx-26 gap-3'>
                {
                    data.map((project,i) => <Project key={i} project={project}></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;