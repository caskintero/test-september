import React from "react";

export const Button = ({ title, classButton, ...props }) => {
    return (
        <button
            className={`btn btn-primary rounded px-3 py-2 ${classButton}`}
            {...props}
        >
            {title}
        </button>
    );
};
