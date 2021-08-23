import React, {useState} from 'react';
import { useDispatch } from 'react-redux'
import { addCart } from './cartSlice'


export function AddCart(props) {
	const dispatch = useDispatch();
	const [number, setNumber] = useState(1)

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
    }

	return (
		<form onSubmit={handleSubmit} >
          <input type={'text'} name="name" placeholder={'name'} /><br/>
          <input step={'any'} type={'number'} name="price" placeholder={'Prix'} /><br/>
          <input type={'number'} value={number} onChange={handleChange} name="nbr" placeholder={'Number'} /><br/>
          <button type={'submit'}>Submit</button>
        </form>
	)
}