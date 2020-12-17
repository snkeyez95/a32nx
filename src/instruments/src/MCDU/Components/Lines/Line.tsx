import React from "react";
import '../styles.scss'

export enum lineSides {
    left = "line-left",
    right = "line-right"
}

export enum lineSizes {
    small = "s-text",
    regular = "",
}

export enum lineColors {
    white = "white",
    inop = "inop",
    cyan = "cyan",
    yellow = "yellow",
    green = "green",
    amber = "amber",
    red = "red",
    magenta = "magenta"
}

type LineProps = {
    size?: lineSizes,
    value?: string,
    side?: lineSides,
    color?: lineColors,
}

const DefaultLineProps:LineProps = {
    size: lineSizes.regular,
    value: "",
    side: lineSides.left,
    color: lineColors.white
}


export const Line: React.FC<LineProps> = ({size, value, side, color}) => {
    return (
        <>
            <p className={`line ${size} ${side} ${color}`}>{value}</p>
        </>
    )
}

Line.defaultProps = DefaultLineProps