import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.setState={
            name:'',
            email:'',
            password:''
        }
    }
    // handleChange(e){
    //     this.setState({
    //         [e.target.name[0]] : e.target.value
    //     })
    // }
    handleClick(e) {
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.password);
    }
    
    render() {
        return (
            <div className="signup">
            {/* // <!-- loader Start --> */}
            <div id="loading">
               <div id="loading-center">
               </div>
            </div>
            {/* // <!-- loader END --> */}
            {/* //   <!-- Sign in Start --> */}
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
                                  <a class="sign-in-logo mb-5" href="sign-up.html#"><img src="asset/images/logo-full.png" class="img-fluid" alt="logo" /></a>
                                  <div class="owl-carousel" data-autoplay="true" data-loop="true" data-nav="false" data-dots="true" data-items="1" data-items-laptop="1" data-items-tab="1" data-items-mobile="1" data-items-mobile-sm="1" data-margin="0">
                                      <div class="item">
                                          <img src="asset/images/login/1.png" class="img-fluid mb-4" alt="logo" />
                                          <h4 class="mb-1 text-white">Manage your orders</h4>
                                          <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                      </div>
                                      <div class="item">
                                          <img src="asset/images/login/1.png" class="img-fluid mb-4" alt="logo" />
                                          <h4 class="mb-1 text-white">Manage your orders</h4>
                                          <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                      </div>
                                      <div class="item">
                                          <img src="asset/images/login/1.png" class="img-fluid mb-4" alt="logo" />
                                          <h4 class="mb-1 text-white">Manage your orders</h4>
                                          <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 bg-white pt-5">
                              <div class="sign-in-from">
                                  <h1 class="mb-0">Sign Up</h1>
                                  <p>Enter your email address and password to access admin panel.</p>
                                  <form class="mt-4">
                                      <div class="form-group">
                                          <label for="exampleInputEmail1">Your Full Name</label>
                                          <input type="text" class="form-control mb-0" id="exampleInputEmail1" placeholder="Your Full Name" onChange={(event,newValue)=> this.setState={name:newValue}} />
                                      </div>
                                      <div class="form-group">
                                          <label for="exampleInputEmail2">Email address</label>
                                          <input type="email" class="form-control mb-0" id="exampleInputEmail2" placeholder="Enter email" onChange={(event,newValue)=> this.setState={email:newValue}} />
                                      </div>
                                      <div class="form-group">
                                          <label for="exampleInputPassword1">Password</label>
                                          <input type="password" class="form-control mb-0" id="exampleInputPassword1" placeholder="Password" onChange={(event,newValue)=> this.setState={password:newValue}} />
                                      </div>
                                      <div class="d-inline-block w-100">
                                          {/* <div class="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                                              <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                              <label class="custom-control-label" for="customCheck1">I accept <a href="sign-up.html#">Terms and Conditions</a></label>
                                          </div> */}
                                          <h4>Name : {this.state.name}</h4>
                                          <h4>Email : {this.state.email}</h4>
                                          <h4>Password : {this.state.password}</h4>
                                          <button type="submit" class="btn btn-primary float-right" onClick={(event) => this.handleClick(event)}>Sign Up</button>
                                          
                                          {/* <RaisedButton label="Submit" primary={true} onClick={(event) => this.handleClick(event)}/> */}
                                      </div>
                                      <div class="sign-info">
                                          {/* <span class="dark-color d-inline-block line-height-2">Already Have Account ? <a href="sign-in.html#">Log In</a></span> */}
                                          <ul class="iq-social-media">
                                              <li><a href="sign-up.html#"><i class="ri-facebook-box-line"></i></a></li>
                                              <li><a href="sign-up.html#"><i class="ri-twitter-line"></i></a></li>
                                              <li><a href="sign-up.html#"><i class="ri-instagram-line"></i></a></li>
                                          </ul>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              </div>
            //   <!-- Sign in END -->
        );
    }
}
export default Signup;