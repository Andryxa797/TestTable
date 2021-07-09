import React from "react";
import {TableHeaderBottom} from "./tableHeaderBottom";
import {TableHeaderTop} from "./tableHeaderTop";


let TableHeader = ({setSortField, sortOptions, columns}) => {
    return (
        <>
            <thead>
            <TableHeaderTop columns={columns}/>
            <TableHeaderBottom columns={columns} setSortField={setSortField} sortOptions={sortOptions}/>
            </thead>
        </>
    )
}
export {TableHeader}