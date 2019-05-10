import React from 'react';
import style from './index.scss';

const img = require('./cc.jpeg');

class CheckboxWithLabel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isChecked: false};
        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        this.setState(prevState => ({isChecked: !prevState.isChecked}));
    }

    render() {
        return (
            <div className={style.checkboxBd}>
                <input
                    type="checkbox"
                    checked={this.state.isChecked}
                    onChange={this.onChange}
                />
                {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
                <div>
                    <img src={img} alt=""/>
                </div>
            </div>
        );
    }

}

export default CheckboxWithLabel;
