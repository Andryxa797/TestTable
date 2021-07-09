import iconGears from "../../assert/img/icon-gears.svg";
import iconInformation from "../../assert/img/icon-information.svg";

import iconCRM from "../../assert/img/crm.png"
import iconModelLinear from "../../assert/img/model_linear.png"
import iconCompositeOne from "../../assert/img/composite1.png"
import iconComposite from "../../assert/img/composite.png"
import React from "react";

const columns = [
    {
        key: 'trafficSource',
        title: 'Источник трафика',
        haveInformationIcon: null,
        subColumns: [
            {
                parent: 'trafficSource',
                key: 'title',
                name: 'Название',
                isSort: true
            }
        ],
    },
    {
        key: 'traffic',
        title: 'Трафик',
        haveInformationIcon: 'Трафик Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley',
        subColumns: [
            {
                parent: 'traffic',
                key: 'impressions',
                name: 'Показы',
                maxlength: 6,
                haveInformationIcon: 'Показы =) Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                isNarrowCol: false
            },
            {
                parent: 'traffic',
                key: 'clicks',
                name: 'Клики',
                maxlength: 5,
                haveInformationIcon: false,
                isNarrowCol: false

            },
            {
                parent: 'traffic',
                key: 'sessions',
                name: 'Сеансы',
                maxlength: 4,
                haveInformationIcon: false,
                isNarrowCol: false
            },
            {
                parent: 'traffic',
                key: 'ctr',
                name: 'CTR,%',
                maxlength: 3,
                haveInformationIcon:  'CTR %',
                isNarrowCol: false
            },
            {
                parent: 'traffic',
                key: 'priceClick',
                name: 'Цена клика',
                maxlength: 3,
                haveInformationIcon: false,
                isNarrowCol: true
            },
            {
                parent: 'traffic',
                key: 'expenses',
                name: 'Затраты',
                maxlength: 6,
                haveInformationIcon: 'Затраты Lorem Ipsum is simply dummy text ever since the 1500s, when an unknown printer took a galley',
                isNarrowCol: false
            }
        ],
        additionalIconsGears: <img src={iconGears} alt=""/>,
        additionalIconsInformation:  <img src={iconInformation} alt=""/>,
    },
    {
        key: 'sales',
        title: 'Продажи',
        titleIcon: <img src={iconCRM} alt=""/>,
        subTitle: 'Линейная модель',
        subTitleIcon: <img src={iconModelLinear} alt=""/>,
        additionalIconsGears: <img src={iconGears} alt=""/>,
        additionalIconsInformation:  <img src={iconInformation} alt=""/>,
        haveInformationIcon: 'Продажи Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley',
        subColumns: [
            {
                parent: 'sales',
                key: 'quantity',
                name: 'Кол-во',
                maxlength: 6,
                haveInformationIcon: false,
                isNarrowCol: false
            },
            {
                parent: 'sales',
                key: 'cpa',
                name: 'CPA',
                maxlength: 2,
                haveInformationIcon: false,
                isNarrowCol: false
            },
            {
                parent: 'sales',
                key: 'revenue',
                name: 'Выручка',
                maxlength: 5,
                haveInformationIcon: 'Выручка Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
                isNarrowCol: false
            }
        ]
    },
    {
        key: 'purpose',
        title: 'Цель с осн. GA',
        titleIcon: <img src={iconCompositeOne} alt=""/>,
        subTitle: 'Состовная цель',
        subTitleIcon: <img src={iconComposite} alt=""/>,
        additionalIconsGears: <img src={iconGears} alt=""/>,
        additionalIconsInformation:  <img src={iconInformation} alt=""/>,
        haveInformationIcon:'Цель с осн. GA',
        subColumns: [
            {
                parent: 'purpose',
                key: 'quantity',
                name: 'Кол- во',
                maxlength: 3,
                haveInformationIcon: false,
                isNarrowCol: true
            },
            {
                parent: 'purpose',
                key: 'cpa',
                name: 'CPA',
                maxlength: 1,
                haveInformationIcon: false,
                isNarrowCol: false
            },
            {
                parent: 'purpose',
                key: 'cr',
                name: 'CR, %',
                maxlength: 1,
                haveInformationIcon: false,
                isNarrowCol: true
            }
        ]
    },
]
export {columns}
