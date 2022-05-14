import React from 'react';
import Info from '../Info/Info';
import Banner from './Banner/Banner';
import Care from './Care';
import Footer from './Footer';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
           <Services></Services>
           <Care></Care>
           <MakeAppointment></MakeAppointment>
           <Testimonials></Testimonials>
           <Footer></Footer>
           
        
        </div>
    );
};

export default Home;