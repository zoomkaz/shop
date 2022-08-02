import React, { Component } from 'react'
import { FiTrash } from 'react-icons/fi'

export class Order extends Component {
    render() {
        return (
        <div className='item'>
            <img alt='Oopss..' src={"./img/" + this.props.item.img} />
            <h2>{this.props.item.title}</h2>
            <b>{this.props.item.price}$</b>
            <FiTrash onClick={() => this.props.onDelete(this.props.item.id)} className='delete' />
        </div>
        )
    }
}

export default Order