import React from "react";

interface RightProps {
    className: string;
    style: object;
}

export const Right: React.FC<RightProps> = ({ className, style }) => {
    return (
        <div className={className} style={style}>
            RIGHT
        </div>
    );
};
