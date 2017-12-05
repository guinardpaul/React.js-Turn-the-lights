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
            board: [],
            end: false
        });

        this.generateBoard = this.generateBoard.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    generateBoard() {
        this.setState({
            board: boards[Math.floor(Math.random() * boards.length)],
            end: false
        }, () => {
            console.log(this.state.board);
        });
    }

    handleClick(position) {
        let newState = this.state.board;
        let toModify = [
            [position[0], position[1]],
            [position[0] - 1, position[1]],
            [position[0] + 1, position[1]],
            [position[0], position[1] - 1],
            [position[0], position[1] + 1]
        ];

        toModify.map((value, i) => {
            if (value[0] >= 0 && value[0] <= 4 && value[1] >= 0 && value[1] <= 4) {
                if (newState[value[0]][value[1]] === 0) {
                    newState[value[0]][value[1]] = 1;
                } else {
                    newState[value[0]][value[1]] = 0;
                }
            } return null;
        });

        // Check les valeur de la grille jusqu'à trouvé un 0
        // Si 0 => on continu
        // Sinon => jeu terminé
        let gameFinished = true;
        for (const row in newState) {
            if (newState.hasOwnProperty(row)) {
                for (const cell in newState[row]) {
                    if (newState[row].hasOwnProperty(cell)) {
                        if (cell === 0) {
                            gameFinished = false;
                            break;
                        }
                    }
                }
            }
        }

        this.setState({
            board: newState,
            end: gameFinished
        });
    }

    componentWillMount() {
        this.setState({
            board: boards[Math.floor(Math.random() * boards.length)]
        });
    }

    render() {
        let latestRow = '';
        let finMsg;
        if (this.state.end) {
            finMsg = <h3>Vous avez gagné !</h3>
        }

        return (
            <div>
                <button className="btn btn-primary" onClick={this.generateBoard}>Recommencer</button>
                <br />
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
                {finMsg}
            </div>
        );
    }
}

GameBoard.propTypes = {
    end: PropTypes.bool,
    board: PropTypes.array,
    handleClick: PropTypes.func,
    generateBoard: PropTypes.func,
    position: PropTypes.array
};

export default GameBoard;