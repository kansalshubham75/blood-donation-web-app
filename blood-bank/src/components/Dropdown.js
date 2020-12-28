import React, { Component } from 'react'

export default class Dropdown extends Component {
    state={
        isOpen:false,
        title:''
    }
    // componentDidMount(){
    //     this.setState({
    //         title:this.props.title
    //     });
    // }
    render() {

        return (
            <div>
                <i className="material-icons prefix">{this.props.dropdown[1]}</i>
                
            </div>
        )
    }
}
