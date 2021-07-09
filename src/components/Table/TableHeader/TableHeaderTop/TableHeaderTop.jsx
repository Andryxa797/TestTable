import React from "react";
import Tooltip from "../../../ToolTip/Tooltip";

const TableHeaderTop = ({columns}) => {
    return (
        <tr className="table__tr">
            {columns.map((column) => {
                return (
                    <th key={column.key} className=" table__th" colSpan={column.subColumns && column.subColumns.length}>
                            <div className="thead__left">
                                <div>{column.titleIcon} {column.title}</div>
                                <div className="thead__left__subtitle">{column.subTitleIcon}{column.subTitle}</div>
                            </div>
                            <div className="thead__right">
                                {column.additionalIconsGears}
                                <Tooltip text={column.haveInformationIcon}>{column.additionalIconsInformation}
                                </Tooltip>

                            </div>
                    </th>
                )
            })}
        </tr>)
}

export {TableHeaderTop}