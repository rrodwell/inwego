import React, { Component } from 'react';
import 'bootstrap';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='row'>
          <div className='col-md-6 col-sm-12 offset-md-3'>
            <div className='card' style={{width:'100%'}}>
              <div className='card-body'>
                <div style={{marginBottom: '2rem', textAlign:'center'}}>
                  <img className="App-logo" src={logo} alt='react logo'/>
                </div>
                <div className='event-form row'>
                  <form className='col-10 offset-sm-1'>
                    <div className='form-row' style={{marginBottom: '1rem'}}>
                      <div className='col-sm-12'>
                        <h5>1. Test</h5>
                      </div>
                      <div className='col-sm-12'>
                        <h5>2. Test</h5>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="gridCheck"/>
                          <label className="form-check-label" for="gridCheck">
                          I am a duly authorized representative of the organizer with rights neccesay to display all provided convernt and gree to INWEGO's full Terms of Service
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className='form-row' style={{marginBottom: '1rem'}}>
                      <div className='col-sm-12'>
                        <h5>Addition Information</h5>
                        <p>Please include important advisories our members should know before purchsing tickets to your event. These might include age restrictions, food/drink minimums and warnings about nudity or sexual content.</p>
                        <div className='form-group'>
                          <textarea className="form-control" rows="3"></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="form-row" style={{marginBottom: '1rem'}}>
                      <h5>3. Contact, Venue and Event Details</h5>
                      <div className="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                      </div>
                      <div className="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="inputAddress">Address</label>
                      <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                    <div className="form-group">
                      <label for="inputAddress2">Address 2</label>
                      <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity"/>
                      </div>
                      <div className="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" className="form-control">
                          <option selected>Choose...</option>
                          <option>...</option>
                        </select>
                      </div>
                      <div className="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip"/>
                      </div>
                    </div>
                    <div className="form-group" style={{marginBottom: '1rem'}}>
                      <h5>4. Agree To Terms</h5>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
                        <label className="form-check-label" for="gridCheck">
                          I agree to the terms and conditions.
                        </label>
                      </div>
                    </div>
                    <h5>5. Submit For Consideration</h5>
                    <div>
                      <button type="submit" className="btn btn-primary">Submit</button>
                      <button type="submit" className="btn btn-primary">Cancel</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
