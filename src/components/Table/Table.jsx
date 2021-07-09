import {TableHeader} from "./TableHeader/TableHeader";
import React from "react";
import {TableRowResult} from "./TableRow/TableRowResult";
import {TableRowCompany} from "./TableRow/TableRowCompany";

let Table = ({result, companies}) => {

    let childrenCompany = (company) => {
        if (company.isOpen) {
            return company.sources.map((companyChild) => {
                return (
                    <tr className="table__tr">
                        <TableRowCompany company={companyChild}/>
                        <TableRowResult result={companyChild.result}/>
                    </tr>
                )
            })
        }
    }

    return (
        <>
            <div className="container">
                <table className="table">
                    <TableHeader/>
                    <tbody>
                    <tr className="table__tr table__result">
                        <td>Итого</td>
                        <TableRowResult result={result}/>
                    </tr>
                    {companies.map((company) => {
                            return (
                                <>
                                <tr className="table__tr">
                                    <TableRowCompany company={company}/>
                                    <TableRowResult result={company.result}/>
                                </tr>
                                    {childrenCompany(company)}
                                </>
                        )
                        }
                    )}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export {Table}