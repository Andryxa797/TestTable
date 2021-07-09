import iconBtnPlus from "../../../assert/img/plus.png";
import iconCompanyActivity from "../../../assert/img/ok.png";

let TableRowCompany = ({company}) =>{
    return(

            <td className="table__company">
                <div className="table__company__wrapper">
                    <div className="table__company__button">
                        <img src={iconBtnPlus} alt=""/>
                    </div>
                    <div className="table__company__icon">
                        <img src={company.icon}/>
                    </div>
                    <div className="table__company__about">
                        <div className="table__company__name">{company.name}</div>
                        <div className="table__company__group">Группа. Источников {company.sourcesCount}</div>
                    </div>
                    <div className="table__company__active">
                        <img src={iconCompanyActivity} alt=""/>
                    </div>
                </div>
            </td>

    )
}

export {TableRowCompany}