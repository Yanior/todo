import React, {Component} from 'react';
import './item-add-form.css'

export default class ItemAddForm extends Component {
    render() {
        const { addItem } = this.props;
        return (
            <div className='mt-3 item-add-form'>
                <button type="button" 
                className="btn btn-outline-secondary"
                onClick={() => addItem('Hello my dear')}>
                Add Todo
                </button>
            </div>
        );
    }
}