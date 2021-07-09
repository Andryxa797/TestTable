import React from "react";

import iconGears from "../../../assert/img/icon-gears.svg"
import iconInformation from "../../../assert/img/icon-information.svg"
import iconCRM from "../../../assert/img/crm.png"
import iconModelLinear from "../../../assert/img/model_linear.png"
import iconCompositeOne from "../../../assert/img/composite1.png"
import iconComposite from "../../../assert/img/composite.png"


let TableHeader = () => {

    return (
        <thead>
        <tr className="table__tr">
            <th className="thead__source" colSpan="1">Источник трафика</th>

            <th className="thead__traffic" colSpan="6">
                <div className="thead__inherit">
                    <div className="thead__inherit__left">
                        <div>Трафик</div>
                    </div>
                    <div className="thead__inherit__right">
                        <img src={iconGears} alt=""/>
                        <img src={iconInformation} alt=""/>
                    </div>
                </div>
            </th>

            <th className="thead__sales" colSpan="3">
                <div className="thead__inherit">
                    <div className="thead__inherit__left">
                        <div>
                            <img src={iconCRM} alt=""/>Продажи
                        </div>
                        <div className="thead__inherit__left__subtitle">
                            <img src={iconModelLinear} alt=""/>Линейная модель
                        </div>
                    </div>
                    <div className="thead__inherit__right">
                        <img src={iconGears} alt=""/>
                        <img src={iconInformation} alt=""/>
                    </div>
                </div>
            </th>

            <th className="thead__purpose" colSpan="3">
                <div className="thead__inherit">
                    <div className="thead__inherit__left">
                        <div>
                            <img src={iconCompositeOne} alt=""/>Цель с осн. GA
                        </div>
                        <div className="thead__inherit__left__subtitle">
                            <img src={iconComposite} alt=""/>Состовная цель
                        </div>
                    </div>
                    <div className="thead__inherit__right">
                        <img src={iconGears} alt=""/>
                        <img src={iconInformation} alt=""/>
                    </div>
                </div>
            </th>

        </tr>
        <tr className="table__tr">
            <th>Название</th>
            <th>Показы<img className="table__th__img" src={iconInformation} alt=""/></th>
            <th>Клики</th>
            <th>Сеансы</th>
            <th>CTR<img className="table__th__img" src={iconInformation} alt=""/></th>
            <th>
                <div>Цена</div>
                клика
            </th>
            <th>Затраты <div>
                <span className="table__th__span">Настроить</span>
                <img className="table__th__img" src={iconInformation} alt=""/></div></th>
            <th>Кол-во</th>
            <th>CPA</th>
            <th>Выручка</th>
            <th>Кол-во</th>
            <th>CPA</th>
            <th>CR, %</th>
        </tr>
        </thead>
    )
}
export {TableHeader}