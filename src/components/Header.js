import React, { useState } from 'react'
import { RiShoppingBagLine } from "react-icons/ri"
import Order from './Order'

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(element => summa += Number.parseFloat(element.price))
  return (
    <div>
      {props.orders.map(element => (
        <Order onDelete={props.onDelete} key={element.id} item={element} />
      ))}
      <p className='summa'>Сумма: {summa.toFixed(2)}$</p>
    </div>
  )
}

const showNothing = () => {
  return (
    <div className='empty'>
      <h2>Товаров нет</h2>
    </div>
  )
}

function Header(props) {
let [basketOpen, setBasketOpen] = useState(false);
  return (
    <header>
      <div className='header_container'>
        <span className='logo'>House Staff</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <RiShoppingBagLine onClick={() => setBasketOpen(basketOpen = !basketOpen)} className={`basket ${basketOpen && 'active'}`} />

        {basketOpen && (
          <div className='shop'>
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}

      </div>
      <div className='presentation'></div>
    </header>
  )
}

export default Header