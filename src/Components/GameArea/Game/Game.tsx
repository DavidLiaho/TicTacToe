import { useEffect, useState } from "react";
import { Board } from "../Board/Board";
import { GameMessage } from "../GameMessage/GameMessage";
import "./Game.css";

enum turns {
    "Player" = "Player",
    "Computer" = "Computer"
}

export function Game(): JSX.Element {

    const [tiles, setTiles] = useState<string[]>(Array(9).fill(null));
    const [turn, setTurn] = useState<turns>(turns.Player);
    const [winner, setWinner] = useState<string>("");
    const [winningPattern, setWinningPattern] = useState<number[] | null>(null);

    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];

    function checkWin(currentTiles: string[], player: string): boolean {
        for (const pattern of winPatterns) {
            if (pattern.every(index => currentTiles[index] === player)) {
                setWinningPattern(pattern);
                return true;
            }
        }
        setWinningPattern(null);
        return false;
    }

    function checkDraw(): boolean {
        for (const tile of tiles) {
            if (tile === null) return false;
        }
        return true;
    }

    function resetGame() {
        setTiles(Array(9).fill(null));
        setTurn(turns.Player);
        setWinner("");
    }

    function findBestMove(): number {
        // Check for winning move
        for (let i = 0; i < 9; i++) {
            if (tiles[i] === null) {
                const testTiles = [...tiles];
                testTiles[i] = "O";
                if (checkWin(testTiles, "O")) {
                    return i;
                }
            }
        }

        // Check for blocking player's winning move
        for (let i = 0; i < 9; i++) {
            if (tiles[i] === null) {
                const testTiles = [...tiles];
                testTiles[i] = "X";
                if (checkWin(testTiles, "X")) {
                    return i;
                }
            }
        }

        // Choose a random available tile
        const emptyIndices = tiles.map((tile, index) => tile === null ? index : -1).filter(index => index !== -1);
        return emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    }

    function handleTileClick(index: number): void {
        // If computer turn, or clicked on used tile, or game is over - return:
        if (turn === turns.Computer || tiles[index] !== null || winner) return;

        // Else:
        const newTiles = [...tiles];
        newTiles[index] = "X";
        setTiles(newTiles);
        setTurn(turns.Computer);
    }

    useEffect(() => {
        if (checkWin(tiles, "O")) {
            setWinner("Computer");
        }
        else if (checkWin(tiles, "X")) {
            setWinner("You");
        }
        else if (checkDraw()) {
            setWinner("Draw");
        }
        else if (turn === turns.Computer) {
            // Computer's Move:
            setTimeout(() => {
                const bestMove = findBestMove();
                const newTiles = [...tiles];
                newTiles[bestMove] = "O";
                setTiles(newTiles);
                setTurn(turns.Player);
            }, 1000);
        }
    }, [turn]);

    return (
        <div className="Game">

            <GameMessage winner={winner} />

            <Board tiles={tiles} onTileClick={handleTileClick} winningPattern={winningPattern} winner={winner} />

            <button onClick={resetGame}>RESTART</button>
        </div>
    );
}
