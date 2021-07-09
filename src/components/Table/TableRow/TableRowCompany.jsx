import iconBtnPlus from "../../../assert/img/plus.png";
import iconBtnMinus from "../../../assert/img/minus.png";
import iconCompanyActivity from "../../../assert/img/ok.png";
import React from "react";

let TableRowCompany = ({company, toggleButtonIsVisible, isChild}) =>{
    return(
            <td className="table__company">
                <div className="table__company__wrapper">
                    <div className="table__company__button">
                        {company.sources?
                            <img onClick={()=>toggleButtonIsVisible(company.id)} src={!company.isOpen? iconBtnPlus: iconBtnMinus} alt=""/>
                            :null}
                    </div>
                    <div className="table__company__icon"><img src={company.icon}  alt=""/></div>
                    <div className="table__company__about">
                        <div className="table__company__name">{company.name}{company.mediator?' / ' + company.mediator:null}</div>
                        <div className="table__company__group ">
                            {!isChild?company.sources?"Группа. Источников " + company.sourcesCount: "Платная реклама": null}
                        </div>
                    </div>
                    <div className="table__company__active">
                        {!company.sources && !isChild?<img src={iconCompanyActivity} alt=""/>:null}
                    </div>
                </div>
            </td>

    )
}

export {TableRowCompany}