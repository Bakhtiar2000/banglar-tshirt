import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message= <p>Please add some products</p>
    }
    else{
        message= <div>
            <p>Happy shopping</p>
        </div> 
    }
    return (
        <div>
            <h2 className={cart.length >2 ? 'orange':'red'}>Cart added: {cart.length}</h2>
            {cart.length >2? 
            <h3 className={`bold ${cart.length ===3? 'pink': 'green'}`}>Boroloxx</h3>: 
            <h3>Goribs</h3>}

            {message}
            {
                cart.map(tshirt=> <p
                    key={tshirt._id}
                >
                {tshirt.name} 
                <button onClick={()=> handleRemoveFromCart(tshirt._id)}>X</button>
                </p>)
            }
            {
                cart.length ==2 && <p>Pay digitally from home</p> // '&&' works if the condition is true
            }
            {
                cart.length ===2 || <p>Buy only two of them</p> // '||' works if the condition is false
            }
        </div>
    );
};

export default Cart;