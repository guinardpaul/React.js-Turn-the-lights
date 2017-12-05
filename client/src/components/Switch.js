import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Switch.css';

class Switch extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (!this.props.end) {
            this.props.handleClick(this.props.position);
        }
    }

    render() {
        let carre;
        let cssClass;

        if (this.props.end) {
            cssClass = 'switch switch-on';
        } else if (this.props.switchOn) {
            cssClass = 'switch switch-on cursor';
        } else if (!this.props.switchOn) {
            cssClass = 'switch switch-off cursor'
        }

        return (
            <span>
                <div onClick={this.handleClick} className={cssClass}></div>
            </span>
        );
    }
}

Switch.propTypes = {
    switchOn: PropTypes.bool,
    carre: PropTypes.element,
    handleClick: PropTypes.func
};

export default Switch;