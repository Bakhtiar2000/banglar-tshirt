import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunt from '../Aunt/Aunt';
import './Grandpa.css'

export const RingContext = createContext('Platinum')
export const MoneyContext = createContext(0)

const Grandpa = () => {
    const ring = 'diamond';
    const [money, setMoney] = useState(0)

    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p><small>Has money:{money}</small></p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='Golden Ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle ring={ring}></Uncle>
                        <Aunt></Aunt>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;