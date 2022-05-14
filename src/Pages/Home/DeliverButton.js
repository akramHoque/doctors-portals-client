import React from 'react';

const DeliverButton = ({ children }) => {
    return (
        <div>
            <button className="btn btn-primary text-white font-bold uppercase bg-gradient-to-r from-secondary to-primary">{children}</button>
        </div>
    );
};

export default DeliverButton;