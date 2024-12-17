import { Navigate, Route, Routes } from "react-router-dom";
import { Game } from "../../GameArea/Game/Game";
import { Page404 } from "../../PagesArea/Page404/Page404";
import "./Routing.css";
import { About } from "../../PagesArea/About/About";
import { Contact } from "../../PagesArea/Contact/Contact";

export function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Game />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}
