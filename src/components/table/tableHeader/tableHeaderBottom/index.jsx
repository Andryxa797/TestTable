import React from "react";
import iconInformation from "../../../../assert/img/icon-information.svg"
import downArrow from "../../../../assert/img/down_arrow.svg"
import upArrow from "../../../../assert/img/up_arrow.svg"
import Tooltip from "../../../toolTip";


let TableHeaderBottom = ({columns, setSortField, sortOptions}) => {

    let getFieldNameForSort = (parent, key, isSort) => {
        if (!isSort) {
            setSortField(parent, key)

        }
    }

    let getSortIcon = (sortOptions, column) => {
        if (column.parent === sortOptions.parent && column.key === sortOptions.key) {
            switch (sortOptions.direction) {
                case 'asc':
                    return <img className={column.isNarrowCol ? "sort_img_center" : "sort_img"} src={upArrow} alt=""/>
                case 'desc':
                    return <img className={column.isNarrowCol ? "sort_img_center" : "sort_img"} src={downArrow} alt=""/>
                default:
                    return null
            }
        }
    }

    return (
        <tr className="table__tr">
            {columns.map((column) => {
                return column.subColumns.map(item => {
                    return (
                        <th key={column.key + '_' + item.key} className="thead_th"
                            onClick={() => getFieldNameForSort(item.parent, item.key, item.isSort)}>
                            <span>
                                <span className={item.isNarrowCol ? "from_new_line narrow_column" : "from_new_line"}>{item.name}</span>
                                {item.haveInformationIcon ?
                                    <Tooltip text={item.haveInformationIcon}><img className="table__th__img" src={iconInformation} alt=""/>
                                    </Tooltip>
                                    : null}
                                {getSortIcon(sortOptions, item)}
                            </span>

                        </th>
                    )
                })
            })
            }
        </tr>
    )
}


export {TableHeaderBottom}