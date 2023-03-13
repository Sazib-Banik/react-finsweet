import React, { useEffect, useState } from 'react';
import ClientLogo from '../ClientLogo/ClientLogo';
import './ClientPart.css';
const ClientPart = () => {
    const [clientLogo, setClientLogo] = useState([]);
    useEffect(() => {
        fetch('ClientLogo.json')
        .then(res=>res.json())
        .then(data => setClientLogo(data))
    },[])
    return (
        <section id="client_part">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-2">
                        <div className="client_part_text">
                            <p>We are</p>
                            <h4>Featured in</h4>
                        </div>
                    </div>
                        {clientLogo.map(item=> <ClientLogo key={item.id} item={item} />)}
                </div>
            </div>
        </section>
    );
};

export default ClientPart;