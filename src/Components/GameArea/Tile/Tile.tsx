import "./Tile.css";

type TileProps = {
    className: string;
    value: string;
    onClick: any;
};

export function Tile(props: TileProps): JSX.Element {
    let hoverCssClass: string = "";
    if (!props.value) {
        hoverCssClass = "hoverX";
    }

    return (
        <div onClick={props.onClick} className={"Tile " + props.className + ` ${hoverCssClass}`}>{props.value}</div>
    );
}
