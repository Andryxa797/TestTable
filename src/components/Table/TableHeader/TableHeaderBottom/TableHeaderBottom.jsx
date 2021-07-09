import React from "react";



let TableHeaderBottom = ({columns, setSortField, sortOptions}) => {

    let getFieldNameForSort = (parent, key) => {
        setSortField(parent, key)
    }

    let getSortIcon = (sortOptions, field) => {
        if (field.parent === sortOptions.parent && field.key === sortOptions.key) {
            switch (sortOptions.direction) {
                case 'asc':
                    return <img className="sort_img" src={upArrow} alt=""/>
                case 'desc':
                    return <img className="sort_img" src={downArrow} alt=""/>
                default:
                    return null
            }
        }
    }
    // debugger
    return (
        <tr className="table__tr">
            {columns.map((column) => {
                return column.subColumns.map(item => {
                    return (
                        <th data-field="name-company" onClick={() => getFieldNameForSort(item.parent, item.key)}>
                        <span>
                            <span
                                className={item.isNarrowCol ? "from_new_line narrow_column" : "from_new_line"}>{item.name}</span>
                        </span>
                            {getSortIcon(sortOptions, item)}
                            {item.haveInformationIcon ?
                                <img className="table__th__img" src={iconInformation} alt=""/> : null}
                        </th>
                    )
                })
            })
            }
        </tr>
    )
}

export {TableHeaderBottom}

//
//   <tr className="table__tr">
// <th className="thead__source table__th">Источник трафика</th>
// <th className="thead__traffic table__th" colSpan={fields.traffic.length}>
// <div className="thead__inherit">
// <div className="thead__inherit__left">
// <div>Трафик</div>
// </div>
// <div className="thead__inherit__right">
// <img src={iconGears} alt=""/>
// <img src={iconInformation} alt=""/>
// </div>
// </div>
// </th>
// <th className="thead__sales table__th" colSpan={fields.sales.length}>
// <div className="thead__inherit">
// <div className="thead__inherit__left">
// <div>
// <img src={iconCRM} alt=""/>Продажи
// </div>
// <div className="thead__inherit__left__subtitle">
// <img src={iconModelLinear} alt=""/>Линейная модель
// </div>
// </div>
// <div className="thead__inherit__right">
// <img src={iconGears} alt=""/>
// <img src={iconInformation} alt=""/>
// </div>
// </div>
// </th>
// <th className="thead__purpose table__th" colSpan={fields.purpose.length}>
// <div className="thead__inherit">
// <div className="thead__inherit__left">
// <div>
// <img src={iconCompositeOne} alt=""/>Цель с осн. GA
// </div>
// <div className="thead__inherit__left__subtitle">
// <img src={iconComposite} alt=""/>Состовная цель
// </div>
// </div>
// <div className="thead__inherit__right">
// <img src={iconGears} alt=""/>
// <img src={iconInformation} alt=""/>
// </div>
// </div>
// </th>
// </tr>


// let mapDisplayingFields = (field) => {
//     return (
//         field.map((item) => {
//             return (
//                 <th data-field="name-company" onClick={() => getFieldNameForSort(item.parent, item.key)}>
//                         <span>
//                             <span
//                                 className={item.isNarrowCol ? "from_new_line narrow_column" : "from_new_line"}>{item.name}</span>
//                         </span>
//                     {getSortIcon(sortOptions, item)}
//                     {item.haveInformationIcon ?
//                         <img className="table__th__img" src={iconInformation} alt=""/> : null}
//                 </th>
//             )
//         })
//     )
// }

// <th data-field="name-company">Название</th>
// {mapDisplayingFields(fields.traffic)}
// {mapDisplayingFields(fields.sales)}
// {mapDisplayingFields(fields.purpose)}

// const TableHeaderTop = ({title, titleIcon, subTitle, subTitleIcon, additionalIcons, subColumns}) => {
//     return (
//         <th className="thead__purpose table__th" colSpan={subColumns && subColumns.length}>
//             <div className="thead__inherit">
//                 <div className="thead__inherit__left">
//                     <div>
//                         {titleIcon} {title}
//                     </div>
//                     <div className="thead__inherit__left__subtitle">
//                         {subTitleIcon}{subTitle}
//                     </div>
//                 </div>
//                 <div className="thead__inherit__right">
//                     {additionalIcons}
//                 </div>
//             </div>
//         </th>
//     )
// }