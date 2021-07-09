import React from "react";
import {TableRowResult} from "./tableRow/tableRowResult";
import {TableRowCompany} from "./tableRow/tableRowCompany";


let Table = ({result, companies, toggleButtonIsVisible}) => {

    let noProfitCompanyChild = (companyChild) => {
        let noProfitCompany = true
        let massive = Object.values(companyChild.result)
        massive.forEach((item) => {
            let massiveItem = Object.values(item)
            massiveItem.forEach((value) => {
                if (value !== 0 && value !== null) {
                    noProfitCompany = false
                }
            })
        })
        return (noProfitCompany ?
            "table__tr table__company__no_profit" :
            "table__tr table__company__button_press")
    }
    let childrenCompany = (company) => {
        if (company.isOpen) {
            return company.sources.map((companyChild) => {
                return (
                    <tr key={company.id + '_' + companyChild.id} className={noProfitCompanyChild(companyChild)}>
                        <TableRowCompany company={companyChild} isChild={true}/>
                        <TableRowResult result={companyChild.result}/>
                    </tr>
                )
            })
        }
    }
    return (

        <>
            <tr className="table__tr table__result">
                <td>Итого</td>
                { Object.keys(result).length? <TableRowResult result={result}/> : null}
            </tr>
            {companies && companies.map((company) =>
                <>
                    <tr key={company.id} className={company.isOpen ? "table__tr table__company__button_press" : "table__tr"}>
                        <TableRowCompany company={company} toggleButtonIsVisible={toggleButtonIsVisible} isChild={false}/>
                        <TableRowResult result={company.result}/>
                    </tr>
                    {childrenCompany(company)}
                </>
            )}
        </>
    )
}
export {Table}