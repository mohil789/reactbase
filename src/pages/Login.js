import React, {Component} from 'react';
import Signup from './Signup';

class Login extends Component {
    constructor(props)
    {
        super(props)
        this.login=this.login.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.signup=this.signup.bind(this);
        this.state={
            email : "",
            password : ""
        }
    }
    login(e){
        e.preventDefault();
        // fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        //     console.log(u)
        // }).catch((err)=>{
        //     console.log(err);
        // })
    }
    signup(e){
        e.preventDefault();
        return <Signup /> ;
        // fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{2
        //     console.log(u)
        // }).catch((err)=>{
        //     console.log(err);
        // })
    }
    handleSubmit(e){
        return <Signup/>
    }
    handleChange(e){
        this.setState({
            [e.target.name[0]] : e.target.value
        })
    }
    handleClick(e) {
        alert('Email : '+ this.state.email[0].label);
        alert('Password : '+this.state.password[0].label);
    }
    render() {
        return (
            <div>
                  {/* <!-- loader Start --> */}
                <div id="loading">
                    <div id="loading-center">
                    </div>
                </div>
      {/* <!-- loader END --> */}
        {/* <!-- Sign in Start --> */}
                <section class="sign-in-page">
                    <div id="container-inside">
                        <div id="circle-small"></div>
                        <div id="circle-medium"></div>
                        <div id="circle-large"></div>
                        <div id="circle-xlarge"></div>
                        <div id="circle-xxlarge"></div>
                    </div>
                    <div class="container p-0">
                        <div class="row no-gutters">
                            <div class="col-md-6 text-center pt-5">
                                <div class="sign-in-detail text-white">
                                <a class="sign-in-logo mb-5" href="sign-in.html#"><img src="asset/images/logo-full.png" class="img-fluid" alt="logo" /></a>
                                <div class="owl-carousel" data-autoplay="true" data-loop="true" data-nav="false" data-dots="true" data-items="1" data-items-laptop="1" data-items-tab="1" data-items-mobile="1" data-items-mobile-sm="1" data-margin="0">
                                    <div class="item">
                                        <img src="asset/images/login/1.png" class="img-fluid mb-4" alt="logo" />
                                        <h4 class="mb-1 text-white">Find new friends</h4>
                                        <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                    </div>
                                    <div class="item">
                                        <img src="asset/images/login/2.png" class="img-fluid mb-4" alt="logo" /> 
                                        <h4 class="mb-1 text-white">Connect with the world</h4>
                                        <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                    </div>
                                    <div class="item">
                                        <img src="asset/images/login/3.png" class="img-fluid mb-4" alt="logo" />
                                        <h4 class="mb-1 text-white">Create new events</h4>
                                        <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 bg-white pt-5">
                            <div class="sign-in-from">
                                <h1 class="mb-0">Sign in</h1>
                                <p>Enter your email address and password to access admin panel.</p>
                                <form class="mt-4">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" name="email"class="form-control mb-0" id="exampleInputEmail1" placeholder="Enter email" onChange={(event,newValue)=> this.setState({email:newValue})} value={this.state.email} />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        {/* <a href="sign-in.html#" class="float-right">Forgot password?</a> */}
                                        <input type="password" name="password" class="form-control mb-0" id="exampleInputPassword1" placeholder="Password" onChange={(event,newValue)=> this.setState({password:newValue})} value={this.state.password} />
                                    </div>
                                    <div class="d-inline-block w-100">
                                        {/* <div class="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                                            <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                            <label class="custom-control-label" for="customCheck1">Remember Me</label>
                                        </div> */}
                                        <button type="submit" class="btn btn-primary float-right" onClick={(event) => this.handleClick(event)}>Sign in</button>
                                    </div>
                                    <div class="sign-info">
                                        <button style={{marginLeft: '25px'}} class="btn btn-success" onSubmit={(event) => this.handleSubmit(event)}>Sign up</button>
                                        {/* <span class="dark-color d-inline-block line-height-2">Don't have an account? <a href="signup.html">Sign up</a></span> */}
                                        <ul class="iq-social-media">
                                            <li><a href="sign-in.html#"><i class="ri-facebook-box-line"></i></a></li>
                                            <li><a href="sign-in.html#"><i class="ri-twitter-line"></i></a></li>
                                            <li><a href="sign-in.html#"><i class="ri-instagram-line"></i></a></li>
                                        </ul>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    </div>
            </section>
        {/* <!-- Sign in END --> */}
            </div>
        );
    }
}
export default Login;