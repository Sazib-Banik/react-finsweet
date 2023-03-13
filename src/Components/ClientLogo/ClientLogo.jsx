import React from 'react';
import './ClientLogo.css';
const ClientLogo = ({item}) => {
    return (
        <div className="col-6 col-sm-6 col-md-6 col-lg-2 d-flex align-items-center">
            <div className="client_logo">
                <img src={item.logo} alt="" className="w-100" />
            </div>
        </div>
    );
};

export default ClientLogo;