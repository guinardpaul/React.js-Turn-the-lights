import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Switch from './Switch';

const boards = [
    [
        [1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 0, 1, 0],
        [1, 0, 0, 0, 1]
    ],
    [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 0, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0]
    ],
    [
        [0, 0, 1, 0, 0],
        [0, 1, 0, 1, 0],
        [1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0]
    ]
];

class GameBoard extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            board: boards[Math.floor(Math.random() * boards.length)]
        });
        console.log(this.state.board[1][2]);

        this.generateBoard = this.generateBoard.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(position) {
        let newState = this.state.board;
        if (newState[position[0]][position[1]] === 0) {
            newState[position[0]][position[1]] = 1;
        } else {
            newState[position[0]][position[1]] = 0;
        }
        this.setState({
            board: newState
        });
        console.log(newState[position[0]][position[1]])
    }

    componentDidMount() {
    }

    generateBoard() {

    }

    render() {
        let latestRow = '';

        return (
            <div>
                {
                    this.state.board.map((row, i) => {
                        let cssClass;
                        if (row === latestRow) {
                            cssClass = '';
                        } else {
                            cssClass = <br />;
                        }
                        latestRow = row;
                        return (
                            <span key={i}>
                                {cssClass}
                                <span key={i}>
                                    {
                                        row.map((cell, j) => {
                                            return (
                                                <Switch key={j} position={[i, j]} switchOn={cell === 0 ? false : true} handleClick={this.handleClick} />
                                            );
                                        })
                                    }
                                </span>
                            </span>
                        );
                    })
                }
            </div>
        );
    }
}

GameBoard.propTypes = {

};

export default GameBoard;