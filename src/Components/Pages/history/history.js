import React from 'react'
import { connect } from 'react-redux'
import BootstrapTable from "react-bootstrap-table-next";
import './history.scss'


class History extends React.Component {

    render() {
        const columns = [
            {
                dataField: "id",
                text: "Product ID",
                sort: true
            },
            {
                dataField: "name",
                text: "Product Name",
                sort: true
            },
            {
                dataField: "price",
                text: "Product Price",
                sort: true
            }
        ];
        
        return (


            <div className="history-div">
            
                <div className="row">
                    <div className="column main col-lg-12 col-md-12 col-sm-6 col-xs-6">
                        <div className="title">
                            <h1>
                                <strong>HISTORY</strong>
                            </h1>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="table-responsive">
                        <table class="table">
                            <BootstrapTable
                                keyField="id"
                                data={this.props.historyList}
                                columns={columns}
                            />
                        </table>
                    </div>
                </div>
            </div>

        )
    }
}
const mapStateToProps = state => {
    
    return {
        historyList:state.history.historyList
    }
}

export default connect(
    mapStateToProps,
    null
)(History);
