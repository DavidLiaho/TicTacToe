import { Tile } from "../Tile/Tile";
import "./Board.css";

type BoardProps = {
    tiles: string[];
    onTileClick: any;
    winningPattern: number[] | null;
    winner: string;
};

export function Board(props: BoardProps): JSX.Element {
    let winner: string = "";
    if (props.winner === "You") winner = "X";
    else if (props.winner === "Computer") winner = "O";

    return (
        <div className="Board">

            <Tile onClick={() => props.onTileClick(0)} value={props.tiles[0]} className={`${props.winningPattern && props.winningPattern.includes(0) ? `winning${winner}` : ""} border-right border-bottom`} />
            <Tile onClick={() => props.onTileClick(1)} value={props.tiles[1]} className={`${props.winningPattern && props.winningPattern.includes(1) ? `winning${winner}` : ""} border-right border-bottom`} />
            <Tile onClick={() => props.onTileClick(2)} value={props.tiles[2]} className={`${props.winningPattern && props.winningPattern.includes(2) ? `winning${winner}` : ""} border-bottom`} />

            <Tile onClick={() => props.onTileClick(3)} value={props.tiles[3]} className={`${props.winningPattern && props.winningPattern.includes(3) ? `winning${winner}` : ""} border-right border-bottom`} />
            <Tile onClick={() => props.onTileClick(4)} value={props.tiles[4]} className={`${props.winningPattern && props.winningPattern.includes(4) ? `winning${winner}` : ""} border-right border-bottom`} />
            <Tile onClick={() => props.onTileClick(5)} value={props.tiles[5]} className={`${props.winningPattern && props.winningPattern.includes(5) ? `winning${winner}` : ""} border-bottom`} />

            <Tile onClick={() => props.onTileClick(6)} value={props.tiles[6]} className={`${props.winningPattern && props.winningPattern.includes(6) ? `winning${winner}` : ""} border-right`} />
            <Tile onClick={() => props.onTileClick(7)} value={props.tiles[7]} className={`${props.winningPattern && props.winningPattern.includes(7) ? `winning${winner}` : ""} border-right`} />
            <Tile onClick={() => props.onTileClick(8)} value={props.tiles[8]} className={props.winningPattern && props.winningPattern.includes(8) ? `winning${winner}` : ""} />

        </div>
    );
}
