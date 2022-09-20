import React from "react";

interface Props {
    className: string;
    style: object;
}

const Left: React.FC<Props> = (props) => {
    return (
        <div className={props.className + " h-screen "} style={props.style}>
            <div></div>
        </div>
    );
};

export default Left;
