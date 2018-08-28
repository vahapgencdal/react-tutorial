import React, { Component } from 'react'

export default class AddTodo extends Component {
    render() {
        return (
            <div>
                <input type = 'text' ref = 'input' />

                <button onClick = {(e) => this.handleClick(e)}>
                    Add
                </button>
            </div>
        )
    }
    handleClick(e) {
        this.props.onAddClick(this.refs.input.value.trim());
        this.refs.input.value = '';
    }
}