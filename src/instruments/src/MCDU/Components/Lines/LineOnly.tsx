import React from "react";
import {EmptyLine} from "./EmptyLine";
import {Line, lineColors, lineSides} from "./Line";

type LineOnlyProps = {
    value: string,
    color?: lineColors,
    side?: lineSides,
    func?: (value:any) => any
}

export const LineOnly: React.FC<LineOnlyProps> = ({side, value, color, func}) => {
    return (
        <>
            <EmptyLine />
            <Line value={value} color={color} side={side}/>
        </>

    )
}

const DefaultLineOnlyProps: LineOnlyProps = {
    value: "",
    color: lineColors.white,
    side: lineSides.left
}
LineOnly.defaultProps = DefaultLineOnlyProps;