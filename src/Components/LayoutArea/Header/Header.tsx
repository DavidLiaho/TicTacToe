import { Navigate, useNavigate } from "react-router-dom";
import "./Header.css";

export function Header(): JSX.Element {

    const navigate = useNavigate();

    return (
        <div className="Header" onClick={() => navigate("/home")}>
			<h1>Tic Tac Toe</h1>
        </div>
    );
}
