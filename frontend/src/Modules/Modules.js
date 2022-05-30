import React, { useEffect, useState } from 'react';
import './Modules.css';
import { GoPrimitiveDot } from "react-icons/go";

const Modules = () => {
    
    const [modules, setModules] = useState([{
        name: '',
        code: '',
        mc: '',
        prerequisites: [],
        preclusions: []
    }])

    useEffect(() => {
        fetch("/modules").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setModules(jsonRes));
    })

    return(
        <div className='modules'>
            {modules.map(module =>
                <div className = 'modules-one'>
                    <h3 className = 'modules-name'>{module.code} {module.name}</h3>
                    <p>Computer Science <GoPrimitiveDot/> {module.mc} MCs</p>
                    <p>Prerequisites {module.prerequisites}</p>
                    <p>Preclusions <span>{module.preclusions}</span></p> 
                </div>
            )}

        </div>
    )
}

export default Modules;