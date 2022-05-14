import React from 'react';
import doctor from '../../assets/images/doctor.png' ;
import appointment from '../../assets/images/appointment.png' ; 
import DeliverButton from './DeliverButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center my-20'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>

            <div className='flex-1'>
            <h3 className='text-xl text-primary font-bold'>Appointment</h3>
            <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
            <p className='text-white py-5'>Hi! I am Dr.Shahidul Amin. Healthy body is important for healthy mind. To serve you the service we are always stay with happiness. Our service is always ready for you. Please make an appointment to any deseases.</p>
            <DeliverButton>Get Started</DeliverButton>
            </div>
           
        </section>
    );
};

export default MakeAppointment;