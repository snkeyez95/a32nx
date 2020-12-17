import React from "react";
import {EmptyLine} from "./EmptyLine";

export type LineHolderProps = {
    index?: number
}

export const LineHolder: React.FC<LineHolderProps> = ({children}) => {
    if (children) {
        return (
            <div className="line-holder">
                {children}
            </div>
        )
    } else {
        return (
            <div className="line-holder">
                <EmptyLine />
                <EmptyLine />
            </div>
        )
    }

}