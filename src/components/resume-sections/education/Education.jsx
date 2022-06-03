import React from 'react'
import Input from "components/input/Input";

const Education = ({height, overflow}) => {
    return (
        <div style = {{height:height, overflow:overflow}}>
            <Input placeholder="School" />
            <Input placeholder="Location" />
            <Input placeholder="Program" />
            <Input placeholder="Expecd date of graduation" />
            <Input placeholder="high school" />
            <Input placeholder="high school location" />
            <Input placeholder="high school location" />
            <Input placeholder="high school program" />
            <Input placeholder="highschool duration" />
        </div>
    )
}

export default Education
