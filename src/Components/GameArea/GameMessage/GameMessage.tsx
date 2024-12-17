import "./GameMessage.css";

type GameMessageProps = {
    winner: string;
};

export function GameMessage(props: GameMessageProps): JSX.Element {

    let messageColor: string = "white";
    switch(props.winner){
        case "You":
            messageColor = "rgb(47, 255, 61)";
            break;
        case "Computer":
            messageColor = "red";
            break;
        case "Draw":
            messageColor = "white";
            break;
        default:
            messageColor = "white";
            break;
    }

    return (
        <div className="GameMessage">
            {props.winner &&
                <h1 style={{color: messageColor}}>{props.winner === "Draw" ? "Draw" :
                    props.winner === "You" ? "You Win!" : "You Lost!"}
                </h1>
            }
        </div>
    );
}
