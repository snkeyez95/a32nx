import React, { useContext, useEffect } from 'react';
import { RootContext } from '../../../RootContext';
import { LineHolder } from '../../../Components/Lines/LineHolder';
import { Label } from '../../../Components/Lines/Label';
import { SingleValueField } from '../../../Components/Field/SingleValueField';
import { lineColors, lineSides, lineSizes } from '../../../Components/Lines/Line';
import { lineSelectKeys } from '../../../Components/Buttons';
import { LineOnly } from '../../../Components/Lines/LineOnly';
import { EmptyLine } from '../../../Components/Lines/EmptyLine';
import { LabelAndLine } from '../../../Components/Lines/LabelAndLine';
import { Content } from '../../../Components/Content';
import { RowHolder } from '../../../Components/RowHolder';

const CoRouteLine: React.FC = () => (
    <LineHolder>
        <Label value="CO RTE" />
        <SingleValueField
            color={lineColors.amber}
            value=""
            nullValue="__________"
            lsk={lineSelectKeys.L1}
        />
    </LineHolder>
);

const FromToLine: React.FC = () => (
    <LineHolder>
        <Label value="FROM/TO" side={lineSides.right} />
        <SingleValueField
            color={lineColors.amber}
            value=""
            nullValue="____|____"
            size={lineSizes.regular}
            side={lineSides.right}
        />
    </LineHolder>
);

const AltDestLine: React.FC = () => (
    <LineHolder>
        <Label value="ALTN/CO RTE" />
        <SingleValueField
            value=""
            nullValue="----|----------"
        />
    </LineHolder>
);

const FlightNoLine: React.FC = () => (
    <LineHolder>
        <Label value="FLT NBR" />
        <SingleValueField
            value=""
            nullValue="________"
            color={lineColors.amber}
        />
    </LineHolder>
);

const WindTempLine: React.FC = () => (
    <LineHolder>
        <LineOnly value="WIND/TEMP>" side={lineSides.right} />
    </LineHolder>
);

const CostIndexLine: React.FC = () => (
    <LineHolder>
        <Label value="COST INDEX" />
        <SingleValueField
            value=""
            nullValue="___"
            color={lineColors.amber}
            min={0}
            max={999}
        />
    </LineHolder>
);

// TODO create split value field for this
const CruiseFLTemp: React.FC = () => (
    <LineHolder>
        <Label value="CRZ FL/TEMP" />
        <SingleValueField value="" nullValue="-----|---°" />
    </LineHolder>
);

// TODO finish this
const AlignOptionLine: React.FC = () => (
    <LineHolder>
        <EmptyLine />
        <EmptyLine />
    </LineHolder>
);

const TropoLine: React.FC = () => (
    <LineHolder>
        <Label value="TROPO" side={lineSides.right} />
        <SingleValueField
            value=""
            nullValue="36090"
            color={lineColors.cyan}
            size={lineSizes.small}
            side={lineSides.right}
        />
    </LineHolder>
);

const GndTempLine: React.FC = () => (
    <LineHolder>
        <LabelAndLine
            labelValue="GND TEMP"
            labelSide={lineSides.right}
            lineValue="---°"
            lineSide={lineSides.right}
            lineColor={lineColors.inop}
        />
    </LineHolder>
);

const RequestLine: React.FC = () => (
    <LineHolder>
        <Label size={lineSizes.regular} value="REQUEST*" color={lineColors.amber} side={lineSides.right} />
        <SingleValueField value="" nullValue="INIT " color={lineColors.amber} side={lineSides.right} />
    </LineHolder>
);

export const InitAPage: React.FC = () => {
    const [, , , setTitle] = useContext(RootContext);

    useEffect(() => {
        setTitle('INIT');
    }, []);

    return (
        <Content>
            <RowHolder index={1}>
                <CoRouteLine />
                <FromToLine />
            </RowHolder>
            <RowHolder index={2}>
                <AltDestLine />
                <RequestLine />
            </RowHolder>
            <RowHolder index={3}>
                <FlightNoLine />
                <AlignOptionLine />
            </RowHolder>
            <RowHolder index={4}>
                <WindTempLine />
            </RowHolder>
            <RowHolder index={5}>
                <CostIndexLine />
                <TropoLine />
            </RowHolder>
            <RowHolder index={6}>
                <CruiseFLTemp />
                <GndTempLine />
            </RowHolder>
        </Content>
    );
};
