import React from 'react';
import { createPortal } from 'react-dom';

const Backdrop = () => {
    return createPortal (
        <div className="backdrop" />,
        document.getElementById('modal-root')
    );
};

export default Backdrop;
