import React from "react";
import {Line, lineColors, lineSides, lineSizes} from "./Line";

type LabelProps = {
    value?: string,
    side?: lineSides,
    size?: lineSizes
    color?: lineColors
}
export const Label: React.FC<LabelProps> = ({color, size, value, side}) => {
    return (
        <Line value={value} size={size} side={side} color={color}/>
    )
}

const DefaultLabelProps:LabelProps = {
    value: "",
    side: lineSides.left,
    size: lineSizes.regular,
    color: lineColors.white
}
Label.defaultProps = DefaultLabelProps;