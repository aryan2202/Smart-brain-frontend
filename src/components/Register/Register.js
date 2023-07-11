import React from "react";

class Register extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name:'',
            email :'',
            password:'',
            errorMessage:''
        }
    }

    onNameChange =(event)=>{
        this.setState({name : event.target.value})
    }

    onEmailChange =(event)=>{
        this.setState({email : event.target.value})
    }

    onPasswordChange =(event)=>{
        this.setState({password : event.target.value})
    }
    onSubmitRegister =(event) =>{
        fetch('https://smart-brain-backend-ai94.onrender.com/register',{
            method :'post',
            headers :{'Content-Type':'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name : this.state.name
            })
        })
        .then(response => {
            if (response.status === 400) {
                return response.text()
            } else {
                return response.json()
            }
        })
        .then(data=>{
            if(data === 'Success'){
                this.props.onRouteChange('signIn')
            }
            else{
                console.log(data)
                this.setState({errorMessage: data})
            }
        })
    }

    render(){
        const {onRouteChange} = this.props;
        return(
        <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center">
            <main className="pa4 black-80">
                <form className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f4" htmlFor="name">Name</label>
                        <input 
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="text" 
                        name="name"  
                        id="name"
                        onChange={this.onNameChange}/>
                        <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
                        <input 
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="email" 
                        name="email-address"  
                        id="email-address"
                        onChange={this.onEmailChange}/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
                        <input 
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="password" 
                        name="password"  
                        id="password"
                        onChange={this.onPasswordChange}/>
                    </div>
                    </fieldset>
                    <div className="">
                    <input 
                    onClick={this.onSubmitRegister}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib" 
                    type="button" 
                    value="Register"/>
                    </div>
                    <div className="lh-copy mt3">
                    <p onClick={()=>onRouteChange('signIn')} className="f4 link dim black db grow pointer">Sign In</p>
                    </div>
                    {this.state.errorMessage ? <p class='b bg-red'style={{ color: 'white' }}>{this.state.errorMessage}</p> : null}
                </form>
            </main>
        </article>
             );
    }
}

export default Register;