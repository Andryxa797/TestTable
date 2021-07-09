import React from "react";

let TableRowResult = ({result}) => {
        return(
        <>
            <td data-traffic-impressions="">{result.traffic.impressions}</td>
            <td data-traffic-clicks="">{result.traffic.clicks}</td>
            <td data-traffic-session="">{result.traffic.sessions}</td>
            <td data-traffic-ctr="">{result.traffic.ctr}</td>
            <td data-traffic-price-click="">{result.traffic.priceClick}</td>
            <td data-traffic-expenses="">{result.traffic.expenses}</td>
            <td data-sales-quantity="">{result.sales.quantity}</td>
            <td data-sales-cpa="">{result.sales.cpa}</td>
            <td data-sales-revenue="">{result.sales.revenue}</td>
            <td data-purpose-quantity="">{result.purpose.quantity}</td>
            <td data-purpose-cpa="">{result.purpose.cpa}</td>
            <td data-purpose-cr="">{result.purpose.cr}</td>
        </>
        )
        }

        export {TableRowResult}