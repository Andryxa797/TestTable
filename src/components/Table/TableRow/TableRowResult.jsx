import React from "react";
import {checkMaxLengthValue, checkNull, partitioningValue} from "../../../helpers/helpers";
import {columns} from "../../../componentsContainer/Table/columns";

const TableRowResult = ({result}) => {

    const preprocessingValue = (value, parent, key, result) => {
        value = checkNull(value)
        value = checkMaxLengthValue(value, parent, key, result)
        value = partitioningValue(value.newValue, value.addPoint )
        return value
    }

    return (
        <>
            <td>{preprocessingValue(result.traffic.impressions, 'traffic', 'impressions', columns)}</td>
            <td>{preprocessingValue(result.traffic.clicks, 'traffic', 'clicks', columns)}</td>
            <td>{preprocessingValue(result.traffic.sessions, 'traffic', 'sessions', columns)}</td>
            <td>{preprocessingValue(result.traffic.ctr, 'traffic', 'ctr', columns)}</td>
            <td>{preprocessingValue(result.traffic.priceClick, 'traffic', 'priceClick', columns)}</td>
            <td>{preprocessingValue(result.traffic.expenses, 'traffic', 'expenses', columns)}</td>
            <td className="td_link">{preprocessingValue(result.sales.quantity, 'sales', 'quantity', columns)}</td>
            <td>{preprocessingValue(result.sales.cpa, 'sales', 'cpa', columns)}</td>
            <td>{preprocessingValue(result.sales.revenue, 'sales', 'revenue', columns)}</td>
            <td>{preprocessingValue(result.purpose.quantity, 'purpose', 'quantity', columns)}</td>
            <td>{preprocessingValue(result.purpose.cpa, 'purpose', 'cpa', columns)}</td>
            <td>{preprocessingValue(result.purpose.cr, 'purpose', 'cr', columns)}</td>
        </>
    )
}

export {TableRowResult}