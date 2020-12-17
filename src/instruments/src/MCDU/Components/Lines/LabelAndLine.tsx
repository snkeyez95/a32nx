import React from "react";
import {Line, lineColors, lineSides, lineSizes} from "./Line";
import {Label} from "./Label";

type LabelAndLineProps = {
    labelValue: string,
    lineValue: string,
    labelColor?: lineColors,
    lineColor?: lineColors,
    labelSide?: lineSides,
    lineSide?: lineSides,
    lineSize?: lineSizes,
}

export const LabelAndLine: React.FC<LabelAndLineProps> = (
    {
        lineSize,
        lineSide,
        labelSide,
        labelValue,
        labelColor,
        lineColor,
        lineValue}) => {
    return (
        <>
            <Label value={labelValue} side={labelSide} color={labelColor}/>
            <Line value={lineValue} side={lineSide} color={lineColor} size={lineSize}/>
        </>
    )
}