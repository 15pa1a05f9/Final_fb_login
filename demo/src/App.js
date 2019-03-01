import React, { Component } from 'react';
import logo from './connect_fb.png'
import './App.css';

class App extends Component {
 
  constructor () {
    super();
    this.state = {
      email: '',
      password: ''
    };
    
   this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogin=this.handleLogin.bind(this);
  }
  
  handleEmailChange (evt) {
    this.setState({ email: evt.target.value });
  }
  
  handlePasswordChange (evt) {
    this.setState({ password: evt.target.value });
  }
  handleLogin(evt) {
    if((evt.keyCode === 13)||(evt.target.value==="Login")){
  alert(this.state.email);
  alert(this.state.password);
    }
  }
  render() {
    return (
      <div className="App">
        <div className="bg">
           <div className="fblogo">
                  <a href="https://www.facebook.com">facebook</a>
              </div>
              <div className="fbform">
                  <form >
                      <p className="csd">Email or phone:</p>
                      <p className="csd">Password:</p><br></br>
                      <input type="text" name="email" value={this.state.email} onChange={this.handleEmailChange} />
                      <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}  />
                      <input type="submit" value="Login"  onClick={this.handleLogin}/><br></br>
       
                   </form>
               </div>
        </div>
        <div className="leftbr">
      <p className="lb">Facebook  helps you to connect and share with the people in your life</p>
      <img  className="lb" src={logo} alt="looogo"/>
    </div>
    <div className="accform">
              <form >
                  <h2>Create an account</h2>
                  <p>It's free and always will be.</p>
                  <input type="text" name="FirstName" placeholder="First name"/>
                  <input type="text" name="SurName" placeholder="Surname"/><br></br><br></br>
                  <input type="text" name="Mobile" placeholder="Mobile number or email address" size="45"/><br></br><br></br>
                  <input type="password" name="Password" placeholder="New password" size="45"/>
                  <br></br>
                  <p>Birthday</p>
                  <select title="Month" >
            
                  <option value="1">Jan</option>
                  <option value="2">Feb</option>
                  <option value="3">Mar</option>
                  <option value="4">Apr</option>
                  <option value="5">May</option>
                  <option value="6">Jun</option>
                  <option value="7">Jul</option>
                  <option value="8">Aug</option>
                  <option value="9">Sep</option>
                  <option value="10">Oct</option>
                  <option value="11">Nov</option>
                  <option value="12">Dec</option>
                  </select>
                  <select title="Day">
                
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                  </select>
                    <select title="Year">
                
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                  <option value="1995">1995</option>
                  <option value="1994">1994</option>
                  <option value="1993">1993</option>
                  <option value="1992">1992</option>
                  <option value="1991">1991</option>
                  <option value="1990">1990</option>
                  </select><br></br>
                  <div className="link">Why do I need to provide my birthday?</div><br></br><br></br>
                  <input type="radio" name="gender" value="male"/> Male
                  <input type="radio" name="gender" value="female"/> Female<br></br><br></br>
                  <div className="agree">
                  By clicking Sign Up, you agree to our
                  <div className="link">
                  Terms
                  </div>
                  and that you have read our 
                  <div className="link">
                  Data Use Policy
                  </div>
                  including our 
                  <div className="link">
                  Cookie Use.
                  </div>
                  </div>
                  <button type="submit" >Sign Up</button><br></br><br></br>
                  <div className="create">
                  <div className="linkh">
                  Create a Page
                  </div>
                  for a celebrity, band or business.
                  </div>
                  
                  </form></div>
      </div>
    

    );
  }
}

export default App;
