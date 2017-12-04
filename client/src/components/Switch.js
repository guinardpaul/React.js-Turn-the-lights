import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Switch.css';

class Switch extends Component {
    render() {
        let carre;
        if (this.props.switchOn) {
            carre = <div className="switch switch-on"></div>
        } else {
            carre = <div className="switch switch-off"></div>
        }

        return (
            <div>
                {carre}
            </div>
        );
    }
}

Switch.propTypes = {
    switchOn: PropTypes.bool,
    carre: PropTypes.element
};

export default Switch;