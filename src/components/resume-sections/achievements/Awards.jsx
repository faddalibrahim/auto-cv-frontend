import React from 'react'
import Input from "components/input/Input";

const Awards = ({height, overflow}) => {
    return (
        <div style={{ height: height, overflow: overflow }}>
            <div>
                <small style = {{color:"red"}}>Achievement 1</small>
                <Input placeholder="achievement/award" />
                <Input placeholder="duration" />
            </div>
            <div>
                <small style = {{color:"red"}}>Achievement 2</small>
                <Input placeholder="achievement/award" />
                <Input placeholder="duration" />
            </div>
            <div>
                <small style = {{color:"red"}}>Achievement 3</small>
                <Input placeholder="achievement/award" />
                <Input placeholder="duration" />
            </div>
        </div>
    )
}

export default Awards
