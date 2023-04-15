import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = ({ring}) => {
    const [money, setMoney]= useContext(MoneyContext)
    return (
        <div>
            <h3>Uncle</h3>
            <p><small>Grandpa money: {money}</small></p>
            <button onClick={() =>setMoney(money +1000)}>Send 1000 taka</button>
            <section className='flex'>
                <Cousin hasFriend={true} ring={ring}>Nabil</Cousin>
                <Cousin>Nabila</Cousin>
            </section>
        </div>
    );
};

export default Uncle;