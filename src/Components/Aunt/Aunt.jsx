import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunt = () => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin>Sabil</Cousin>
                <Cousin>Sabila</Cousin>
            </section>
        </div>
    );
};

export default Aunt;