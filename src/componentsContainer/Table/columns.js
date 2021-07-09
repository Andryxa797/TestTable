import iconGears from "../assert/img/icon-gears.svg";
import iconInformation from "../assert/img/icon-information.svg";
import React from "react";

export const columns = [
    {
        key: 'trafficSource',
        title: 'Источник трафика',
        subTitles: [
            {
                parent: 'trafficSource',
                key: 'title',
                name: 'Название',
            }
        ],
    },
    {
        key: 'traffic',
        title: 'Трафика',
        subTitles: [
            {
                parent: 'traffic',
                key: 'impressions',
                name: 'Показы',
                maxlength: 6,
                haveInformationIcon: true,
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
                haveInformationIcon: true,
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
                haveInformationIcon: true,
                isNarrowCol: false
            }
        ],
        additionalIcons: (
            <>
                <img src={iconGears} alt=""/>
                <img src={iconInformation} alt=""/>
            </>
        ),
    },
    {
        key: 'sales',
        title: 'Продажи',
        additionalIcons: (
            <>
                <img src={iconGears} alt=""/>
                <img src={iconInformation} alt=""/>
            </>
        ),
        subTitles: [
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
                haveInformationIcon: false,
                isNarrowCol: false
            }
        ]
    },
    {
        key: 'purpose',
        title: 'Цель с осн. GA',
        additionalIcons: (
            <>
                <img src={iconGears} alt=""/>
                <img src={iconInformation} alt=""/>
            </>
        ),
        subTitles: [
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

