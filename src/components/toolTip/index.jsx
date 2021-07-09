
import React from "react";

class Tooltip extends React.Component{
    constructor(props) {
        super(props);
        this.setShow = this.setShow.bind(this)
        this.state = {
            show: false
        }
    }
    setShow(bool){
        this.setState({
            show: bool
        })
    }


    render() {
        return  (
            <div className="tooltip-container">
                <span className={this.state.show ? 'tooltip-box visible' : 'tooltip-box'}>
                    {this.props.text}
                </span>
                <span onMouseEnter={() => this.setShow(true)} onMouseLeave={() => this.setShow(false)} >
                    {this.props.children}
                </span>
            </div>
        );
    }

}
export default Tooltip