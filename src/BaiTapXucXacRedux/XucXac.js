import React, { Component } from 'react'
import {connect} from 'react-redux'

class XucXac extends Component {
    renderXucXac=()=>{
        return this.props.mangXucXac.map((xucXac,index)=>{
            return <img src={xucXac.hinhAnh} key={index} width="50" height="50" className="ml-3"></img>
        })
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-4">
                        <button className="btn btn-success p-5"><span className="display-4">Tài</span></button>
                    </div>
                    <div className="col-4 mt-5">
                        {this.renderXucXac()}
                    </div>
                    {/* <div className="col-4 mt-5">
                        <img src="./img/xuc_xac/1.png" width="50" height="50"></img>
                        <img src="./img/xuc_xac/2.png" width="50" height="50"></img>
                        <img src="./img/xuc_xac/3.png" width="50" height="50"></img>
                    </div> */}
                    <div className="col-4">
                        <button className="btn btn-danger p-5"><span className="display-4">Xỉu</span></button>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        mangXucXac: state.stateGameXucXac.mangXucXac
    }
}

export default connect (mapStateToProps)(XucXac)
