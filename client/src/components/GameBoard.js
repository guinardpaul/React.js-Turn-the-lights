import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Switch from './Switch';

class GameBoard extends Component {
    constructor(props) {
        super(props);

        this.generateBoard = this.generateBoard.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

    }

    componentDidMount() {
    }

    generateBoard() {
        return <Switch switchOn={true} onClick={this.handleClick} />
    }

    render() {
        let board = this.generateBoard();

        return (
            <div>
                {board}
            </div>
        );
    }
}

GameBoard.propTypes = {

};

export default GameBoard;