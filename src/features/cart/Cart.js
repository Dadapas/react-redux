import React, {useState} from 'react';

import {
    deleteCart, addCart,
    increment, decrement
} from './cartSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import './Cart.css';


function Cart(props) {

    let carts = useAppSelector((state) => state.cart.carts )
    const dispatch = useAppDispatch();

    const [number, setNumber] = useState(1)

    function handleClick(e) {
        let index = e.target.getAttribute('data-target-id')
        dispatch(deleteCart(index))
    }

    function handleChange(e) {

        setNumber(+e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const name = document.querySelector('[name=name]')
        const price = document.querySelector('[name=price]')
        let cart = {
            name: name.value,
            price: parseFloat(price.value),
            nbr: number
        }

        dispatch(addCart(cart))
        /* console.log('Submit')*/
    }

    function getTotal() {
        carts = carts.filter(m => m != null)
        if (carts.length === 0) return 0;
        if (carts.length === 1) return carts[0].nbr * carts[0].price
        return carts.map(m => m.price * m.nbr).reduce((a,b) => a + b )
    }

    return (
        <div>
          <form onSubmit={handleSubmit} >
              <input type={'text'} name="name" placeholder={'name'} /><br/>
              <input step={'any'} type={'number'} name="price" placeholder={'Prix'} /><br/>
              <input type={'number'} value={number} onChange={handleChange} name="nbr" placeholder={'Number'} /><br/>
              <button type={'submit'}>Submit</button>
          </form>
          <table className={'cart'}>
              <thead>
                <tr>
                    <th>#</th>
                    <th>Produit</th>
                    <th>Prix</th>
                    <th>Nombre</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {carts.map((p, i) => (
                    <tr key={i+'efe'}>
                        <td>{i+1}</td>
                        <td>{p.name}</td>
                        <td>{p.price}</td>
                        <td>
                            <button onClick={()=>{ dispatch(decrement(i)) }}>-</button>
                            {p.nbr}
                            <button onClick={()=>{ dispatch(increment(i)) }}>+</button>
                        </td>
                        <td>{p.nbr * p.price}</td>
                        <td><button data-target-id={i} onClick={handleClick}>Supprimer</button></td>
                    </tr>
                ))}
                <tr>
                    <td style={{'float': 'revert'}} colSpan={"6"}>
                        Total: <b>{getTotal()}</b>
                    </td>
                </tr>
              </tbody>
          </table>
        </div>
    );
}

export default Cart