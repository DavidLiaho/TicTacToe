import profile from "../../../Assets/Images/LinkedInProfile.png";
import angular from "../../../Assets/Images/stack-icons/Angular.png";
import bootstrap from "../../../Assets/Images/stack-icons/Bootstrap.png";
import css from "../../../Assets/Images/stack-icons/CSS.png";
import html from "../../../Assets/Images/stack-icons/HTML.png";
import jquery from "../../../Assets/Images/stack-icons/jQuery.png";
import javascript from "../../../Assets/Images/stack-icons/JS.png";
import mysql from "../../../Assets/Images/stack-icons/MySQL.png";
import nodejs from "../../../Assets/Images/stack-icons/nodejs.png";
import react from "../../../Assets/Images/stack-icons/React.png";
import typescript from "../../../Assets/Images/stack-icons/TS.png";
import "./About.css";

export function About(): JSX.Element {
    return (
        <div className="About">
            <div className="top">
                <img src={profile} />
                <div className="info">
                    <h1>David Liahovitsky</h1>
                    <h2>Full-Stack Web Developer</h2>
                    <p>I am a creative and collaborative developer.
                        I approach each project with a passion for excellence and a commitment to continuous improvement.
                        My goal is to create applications that not only meet expectations, but exceed them!
                        I have a strong foundation in both front-end and back-end development, whether it's developing from scratch or improving existing systems, I am dedicated to writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices.
                    </p>
                </div>
            </div>
            <div className="bot">
                <img src={html} />
                <img src={css} />
                <img src={javascript} />
                <img src={typescript} />
                <img src={react} />
                <img src={angular} />
                <img src={nodejs} />
                <img src={bootstrap} />
                <img src={jquery} />
                <img src={mysql} />
            </div>
        </div>
    );
}
