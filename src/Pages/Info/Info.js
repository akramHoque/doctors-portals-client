import React from 'react';
import InForCard from '../InForCard/InForCard';
import clock from '../../assets/icons/clock.svg' ;
import marker from '../../assets/icons/marker.svg' ;
import phone from '../../assets/icons/phone.svg' ;

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
           <InForCard cardTitle = "Opening Hours" bgClass = "bg-gradient-to-r from-secondary to-primary"  img = {clock}></InForCard>
           <InForCard cardTitle = "Our Locations" bgClass = "bg-accent" img = {marker}></InForCard>
           <InForCard cardTitle = "Contact Us" bgClass = "bg-gradient-to-r from-secondary to-primary" img = {phone}></InForCard>
        </div>
    );
};

export default Info;