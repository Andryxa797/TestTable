import React from "react";
import {TableHeaderBottom} from "./TableHeaderBottom/TableHeaderBottom";
import {TableHeaderTop} from "./TableHeaderTop/TableHeaderTop";


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
