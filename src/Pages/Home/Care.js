import React from 'react';
import treatment from '../../assets/images/treatment.png';
import DeliverButton from './DeliverButton';
import MakeAppointment from './MakeAppointment';

const Care = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
        <div className='px-10'>
          <h1 className="text-5xl font-bold">Exceptional Dental</h1>
          <h1 className="text-5xl font-bold">Care, On Yours Term</h1>

          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <DeliverButton>Get Started</DeliverButton>
        </div>
      </div>
    </div>
  );
};

export default Care;