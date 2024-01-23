

/*
First we start from creating the initial board
*/

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({onSelectSquare, turns}) {
    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }

    // //Here we create a state of board
    //
    // const [gameBoard, setGameBoard] = useState(initialGameBoard); //initialGameBard is set as default value of state
    //
    //
    // /*
    // number, number -> Board
    // takes rowIndex and colIndex as input, defines cell, and returns an updated Board with filled
    // 'X' symbol on defined cell.
    //  */
    // function handleSelectSquare(rowIndex, colIndex) {
    //     // take previous gameboard in setFunction
    //     setGameBoard((prevGameBoard) => {
    //         /*
    //         create a copy of previous board and call it updated board
    //         */
    //         const updatedBoard =
    //             /*
    //             Array -> Array
    //             take previous board array and destructure it into array of rows, make a copy
    //             */
    //             [...prevGameBoard
    //
    //                 /*
    //                 Array -> Array
    //                 takes array of rows and apply function to each element to destructure its innerArray, make a copy
    //                 */
    //                 .map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });
    //
    //     onSelectSquare();
    // }
/*
Gameboard -> Gameboard JSX render
take gameboard and renders rows and columns, in selected cell calls function handleSelectedSquare where
board is updated
*/
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}