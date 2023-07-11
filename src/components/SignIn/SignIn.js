import React from "react";
import './SignIn.css'

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            signInEmail :'',
            signInPassword:'',
            errorMessage:''
        }
    }

    onEmailChange =(event)=>{
        this.setState({signInEmail : event.target.value})
    }

    onPasswordChange =(event)=>{
        this.setState({signInPassword : event.target.value})
    }

    onSubmitSignin =(event) =>{
        fetch('https://smart-brain-backend-ai94.onrender.com/signin',{
            method :'post',
            headers :{'Content-Type':'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => {
            if (response.status === 400) {
                return response.text()
            } else {
                return response.json()
            }
        })
        .then(data => {
            if (data.name) {
                this.props.loadUser(data)
                this.props.onRouteChange('home')
            } else {
                this.setState({ errorMessage: data });
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
                        <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
                            <input
                             onChange={this.onEmailChange}
                             className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
                            <input 
                            onChange={this.onPasswordChange}
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                        </div>
                        </fieldset>
                        <div className="">
                        <input 
                        onClick={this.onSubmitSignin}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f3 dib" 
                        id="SignInButton"
                        type="button"
                        value="Sign in"/>
                        </div>
                        <div className="lh-copy mt3">
                        <p onClick={()=>onRouteChange('register')} className="f4 link dim black db grow pointer">Register</p>
                        </div>
                        {this.state.errorMessage ? <p class='b bg-red'style={{ color: 'white' }}>{this.state.errorMessage}</p> : null}
                    </form>
                </main>
            </article>
        );
    }
}

export default SignIn;