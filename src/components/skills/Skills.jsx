import React from 'react'
import Input from "components/input/Input";

const Skills = ({height, overflow}) => {
    return (
        <div style={{ height: height, overflow: overflow }}>
            <div>
                <small style = {{color:"red"}}>1st skillset list</small>
                <Input placeholder="skill(s)" />
            </div>
            <div>
                <small style = {{color:"red"}}>2nd skillset list</small>
                <Input placeholder="skill(s)" />
            </div>
        </div>
    )
}

export default Skills
