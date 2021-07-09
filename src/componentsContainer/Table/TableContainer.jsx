import React from 'react'
import {Table} from "../../components/Table/Table";
import {connect} from "react-redux";
import {setSortField, setStateData, toggleButtonIsVisible} from "../../redux/reducerTable";
import {TableHeader} from "../../components/Table/TableHeader/TableHeader";
import {columns} from "./columns";
import {data} from "../../data/data";

class TableContainer extends React.Component {

    componentDidMount() {
        this.props.setStateData(data.result, data.companies)
    }

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
        const {setSortField, sortOptions} = this.props
        return (
            <div className="container">
                <table className="table">
                        <TableHeader setSortField={setSortField}
                                     sortOptions={sortOptions}
                                     columns={columns}/>
                    <tbody>
                        <Table result={this.props.result}
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
    setSortField,
    setStateData
})(TableContainer)