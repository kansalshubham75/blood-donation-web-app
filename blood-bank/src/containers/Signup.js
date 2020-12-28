import React,{Component} from 'react';

class Signup extends Component{
    state={
        name:'',
        email:null,
        password:null,
        bloodgroup:null,
        gender:null,
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        console.log(e);
    }
    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h4 className="grey-text text-darken-3">Sign Up</h4>
                    <div className="input-field">
                        <i className="material-icons prefix">account_circle</i>
                        <label htmlFor="name">Name</label>
                        <input onChange={this.handleChange} type="text" id="name"></input>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">email</i>
                        <label htmlFor="email">Email</label>
                        <input onChange={this.handleChange} type="email" id="email"></input>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">fingerprint</i>
                        <label htmlFor="password">Password</label>
                        <input onChange={this.handleChange} type="password" id="password"></input>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">polymer</i>
                        <label htmlFor="bloodgroup">Blood Group</label>
                        <input onChange={this.handleChange} type="text" id="bloodgroup"></input>
                    </div>
                    <div className="input-field">
                        <p>
                            <label>
                                <input name="male" type="radio"/>
                                <span>Male</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="female" type="radio"/>
                                <span>Female</span>
                            </label>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signup