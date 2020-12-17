import React, {useContext, useEffect} from "react";
import {Column} from "../../../Components/Column";
import "../../../Components/styles.scss"
import {RootContext} from "../../../RootContext.jsx";
import {LineHolder} from "../../../Components/Lines/LineHolder";
import {lineColors, lineSides, lineSizes} from "../../../Components/Lines/Line";
import {LabelAndLine} from "../../../Components/Lines/LabelAndLine";
import {LineOnly} from "../../../Components/Lines/LineOnly";

// TODO move this to utils?
/* const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function findNewMonthIndex(index) {
    if (index === 0) {
        return 11;
    } else {
        return index - 1;
    }
}

function lessThan10(num) {
    if (num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function calculateActiveDate(date) {
    if (date.length === 13) {
        const startMonth = date.slice(0, 3);
        const startDay = date.slice(3, 5);

        const endMonth = date.slice(5, 8);
        const endDay = date.slice(8, 10);

        return `${startDay}${startMonth}-${endDay}${endMonth}`;
    } else {
        return date;
    }
}

function calculateSecDate(date) {
    if (date.length === 13) {
        const primStartMonth = date.slice(0, 3);
        const primStartDay = date.slice(3, 5);

        const primStartMonthIndex = months.findIndex((item) => item === primStartMonth);

        if (primStartMonthIndex === -1) {
            return "ERR";
        }

        let newEndMonth = primStartMonth;
        let newEndDay = primStartDay - 1;

        let newStartDay = newEndDay - 27;
        let newStartMonth = primStartMonth;

        if (newEndDay === 0) {
            newEndMonth = months[findNewMonthIndex(primStartMonthIndex)];
            newEndDay = monthLength[findNewMonthIndex(primStartMonthIndex)];
        }

        if (newStartDay <= 0) {
            newStartMonth = months[findNewMonthIndex(primStartMonthIndex)];
            newStartDay = monthLength[findNewMonthIndex(primStartMonthIndex)] + newStartDay;
        }

        return `${lessThan10(newStartDay)}${newStartMonth}-${lessThan10(newEndDay)}${newEndMonth}`;
    } else {
        return "ERR";
    }
}  */


const IdentPage: React.FC = () => {
    const [, , , setTitle] = useContext(RootContext);
    //const date = useSimVar("FLIGHT NAVDATA DATE RANGE", "string")

    useEffect(() => {
        setTitle("A320-200")
    }, []);
    return (
        <div className="two-columns">
            <Column side={"column-left"}>
                <LineHolder index={1}>
                    <LabelAndLine
                        labelValue={"\xa0ENG"}
                        lineValue={"LEAP-1A26"}
                        labelSide={lineSides.left}
                        lineSide={lineSides.left}
                        lineColor={lineColors.green}
                    />
                </LineHolder>
                <LineHolder index={2}>
                    <LabelAndLine
                        labelValue={"\xa0ACTIVE NAV DATA BASE"}
                        lineValue={"TODO"}
                        labelSide={lineSides.left}
                        lineSide={lineSides.left}
                        lineColor={lineColors.cyan}
                    />
                </LineHolder>
                <LineHolder index={3}>
                    <LabelAndLine
                        labelValue={"TODO"}
                        lineValue={"\xa0SECOND NAV DATA BASE"}
                        labelSide={lineSides.left}
                        lineSide={lineSides.left}
                        lineColor={lineColors.inop}
                        lineSize={lineSizes.small}
                    />
                </LineHolder>
                <LineHolder index={5}>
                    <LabelAndLine
                        labelValue={"[  ]"}
                        lineValue={"CHG CODE"}
                        lineSize={lineSizes.small}
                        labelSide={lineSides.left}
                        lineSide={lineSides.left}
                        lineColor={lineColors.inop}
                    />
                </LineHolder>
                <LineHolder index={6}>
                    <LabelAndLine
                        labelValue={"+0.0/+0.0"}
                        lineValue={"IDLE/PERF"}
                        labelSide={lineSides.left}
                        lineSide={lineSides.left}
                        lineColor={lineColors.green}
                    />
                </LineHolder>
            </Column>
            <Column side={"column-right"}>
                <LineHolder index={2}>
                    <LineOnly value={"AIRAC"} color={lineColors.green} />
                </LineHolder>
                <LineHolder index={6}>
                    <LabelAndLine
                        labelValue={"SOFTWARE"}
                        lineValue={"STATUS/XLOAD"}
                        labelSide={lineSides.right}
                        lineSide={lineSides.right}
                        lineColor={lineColors.inop}
                    />
                </LineHolder>
            </Column>
        </div>
    )
}

export default IdentPage