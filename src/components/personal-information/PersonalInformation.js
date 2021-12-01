import React from 'react'
import Input from "components/input/Input";

const PersonalInformation = ({height, overflow}) => {
    return (
        <div style = {{height:height, overflow:overflow}}>
            <Input placeholder="name" />
            <Input placeholder="postal address" />
            <Input placeholder="phone number" />
            <Input placeholder="nationality" />
            <Input placeholder="email" />
            <Input placeholder="LinkedIn" />
        </div>
    )
}

export default PersonalInformation
