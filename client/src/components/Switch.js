import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Switch.css';

class Switch extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleClick(this.props.position);
    }

    render() {
        let carre;
        if (this.props.switchOn) {
            carre = <div onClick={this.handleClick} className="switch switch-on"></div>
        } else {
            carre = <div onClick={this.handleClick} className="switch switch-off"></div>
        }

        return (
            <span>
                {carre}
            </span>
        );
    }
}

Switch.propTypes = {
    switchOn: PropTypes.bool,
    carre: PropTypes.element
};

export default Switch;