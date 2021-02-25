import React, { useContext } from 'react';
import { Line, lineColors, lineSides, lineSizes } from '../Lines/Line';
import { lineSelectKeys } from '../Buttons';
import { useInteractionEvent } from '../../../Common/hooks';
import { RootContext } from '../../RootContext';

type SingleValueFieldProps = {
    value: number | string,
    nullValue: number | string
    min? : number,
    max? : number,
    color?: lineColors,
    side?: lineSides,
    size?: lineSizes,
    selectedCallback?: (value:string | number) => any,
    lsk?: lineSelectKeys
}

const DefaultSingleValueFieldProps: SingleValueFieldProps = {
    value: '',
    nullValue: '',
    color: lineColors.white,
    size: lineSizes.regular,
};

export const SingleValueField: React.FC<SingleValueFieldProps> = (
    {
        value,
        nullValue,
        min,
        max,
        color,
        side,
        size,
        lsk,
        selectedCallback,
    },
) => {
    const [scratchpad, setScratchpad, , ] = useContext(RootContext);

    if (lsk !== undefined) {
        useInteractionEvent(lsk, () => {
            if (selectedCallback) {
                if (min && max) {
                    if (parseFloat(scratchpad) >= min && parseFloat(scratchpad) <= max) {
                        selectedCallback(scratchpad);
                    } else {
                        setScratchpad('ERROR');
                    }
                } else {
                    selectedCallback(scratchpad);
                }
            }
        });
    }

    return (
        <Line side={side} value={value === '' ? nullValue.toString() : value.toString()} color={color} size={size} />
    );
};

SingleValueField.defaultProps = DefaultSingleValueFieldProps;
