import React from 'react'
import Input from "components/input/Input";

const Curricular = ({height, overflow}) => {
    return (
        <div style = {{height:height, overflow:overflow}}>
            <div>
                <small style = {{color:"red"}}>Activity 1</small>
                <Input placeholder="company" />
                <Input placeholder="location" />
                <Input placeholder="position" />
                <Input placeholder="duration" />
                <textarea cols = "42" name="impact1"  rows="4" placeholderc= "impact"></textarea>
                
            </div>
            <div>
                <small style = {{color:"red"}}>Activity 2</small>
                <Input placeholder="company" />
                <Input placeholder="location" />
                <Input placeholder="position" />
                <Input placeholder="duration" />
                <textarea cols = "42" name="impact2"  rows="4" placeholderc= "impact"></textarea>
            </div>
            <div>
                <small style = {{color:"red"}}>Activity 3</small>
                <Input placeholder="company" />
                <Input placeholder="location" />
                <Input placeholder="position" />
                <Input placeholder="duration" />
                <textarea cols = "42" name="impact3" rows="4" placeholderc= "impact"></textarea>
            </div>
        </div>
    )
}

export default Curricular
