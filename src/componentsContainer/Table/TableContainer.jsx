import React from 'react'
import {Table} from "./Table";
import {connect} from "react-redux";
import {setSortField, toggleButtonIsVisible} from "../../redux/reducerTable";
import {TableHeader} from "./TableHeader/TableHeader";

class TableContainer extends React.Component {

    sortData(sortOptions, companies) {
        let stateCompanies = [...companies]
        switch (sortOptions.direction) {
            case 'asc':
                return stateCompanies.sort((a, b) => {
                    return b.result[sortOptions.parent][sortOptions.key] - a.result[sortOptions.parent][sortOptions.key]
                });
            case 'desc':
                return stateCompanies.sort((a, b) => {
                    return a.result[sortOptions.parent][sortOptions.key] - b.result[sortOptions.parent][sortOptions.key]
                });
            default:
                return stateCompanies
        }
    }

    render() {
        const { columns, setSortField, sortOptions } = this.props
        return (
            <div className="container">
                <table className="table">
                    <TableHeader fields={this.props.fields}
                                 setSortField={setSortField}
                                 sortOptions={sortOptions}
                                 columns={columns}/>
                    <tbody>
                        <Table result={this.props.result}
                               fields={this.props.fields}
                               companies={this.sortData(this.props.sortOptions, this.props.companies)}
                               toggleButtonIsVisible={this.props.toggleButtonIsVisible}/>
                    </tbody>
                </table>
            </div>);
    }

}

let mapStateToProps = (state) => {
    return {
        result: state.table.result,
        companies: state.table.companies,
        fields: state.table.fields,
        sortOptions: state.table.sortOptions,
    }
}

export default connect(mapStateToProps, {
    toggleButtonIsVisible,
    setSortField
})(TableContainer)