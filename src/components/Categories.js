import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'chairs',
                    name: 'Стулья'
                },
                {
                    key: 'sofa',
                    name: 'Диваны'
                },
                {
                    key: 'pillow',
                    name: 'Подушки'
                },
                {
                    key: 'light',
                    name: 'Лампы'
                },
                {
                    key: 'shelf',
                    name: 'Полки'
                },
                {
                    key: 'tables',
                    name: 'Столы'
                },
            ]
        }
    }
    render() {
        return (
        <div className='categories'>
            {this.state.categories.map(element => (
                <div key={element.key} onClick={() => this.props.chooseCategory(element.key)} >{element.name}</div>
            ))}
        </div>
        )
    }
}

export default Categories