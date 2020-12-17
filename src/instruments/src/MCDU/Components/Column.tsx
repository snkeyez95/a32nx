import React from "react";
import "./styles.scss";
import {LineHolder} from "./Lines/LineHolder";

type ColumnProps = {
    side: string
}

const Column: React.FC<ColumnProps> = ({side, children}) => (
    <div className={`column-holder ${side}`}>
        {[1,2,3,4,5,6].map((value) => (
            <>
                {() => {
                    let node = <LineHolder />
                    for (let child of React.Children.toArray(children)){
                        if (React.isValidElement(child)) {
                            const {index} = child.props;
                            if (value === index) {
                                node = child;
                            }
                        }
                    }
                    return node;
                }}
            </>
        ))}
    </div>
)

export {Column};
