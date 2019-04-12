import React, { Component } from 'react';

// This page is in under progress
class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            email: '',
            address: '',
            userState: '',
            pincode: '',
            landmark: '',
            cardNumber: '',
            expirationMonth: 1,
            expirationyear: 2020
                
            

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
       // this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
       // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
     let expirationMonth = [1,2,3,4,5,6,7,8,9,10,11,12];
      const month = expirationMonth.map((monthNo) => {

            return (
              
             <option value={monthNo}>{monthNo}</option>
              
            )

      })
 let expirationyear = [2020,2021,2022,2023,2024,2025,2026,2027,2028];
      const year = expirationyear.map((yearNo) => {

            return (
              
             <option value={yearNo}>{yearNo}</option>
              
            )

      })


        return (
            <div className="container main-container">
                <h5>Enter Delivery Address</h5>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group row">
                        <label for="inputFullname" class="col-sm-2 col-form-label">Fullanme</label>
                        <div class="col-sm-4">
                            <input type="text" name="fullname" class="form-control" id="inputFullname" value={this.state.fullname} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-4">
                            <input type="text" name="email" class="form-control" id="inputEmail" value={this.state.email} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputAddress" class="col-sm-2 col-form-label">Address</label>
                        <div class="col-sm-4">
                            <input type="text" name="address" class="form-control" id="inputAddress" value={this.state.address} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputState" class="col-sm-2 col-form-label">State</label>
                        <div class="col-sm-4">
                            <input type="text" name="userState" class="form-control" id="inputState" value={this.state.userState} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPin" class="col-sm-2 col-form-label">Pin Code</label>
                        <div class="col-sm-4">
                            <input type="text" name="pincode" class="form-control" id="inputPin" value={this.state.pincode} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputLandmark" class="col-sm-2 col-form-label">Landmark</label>
                        <div class="col-sm-4">
                            <input type="text" name="landmark" class="form-control" id="inputLandmark" value={this.state.landmark} onChange={this.handleChange} />
                        </div>
                    </div>
                    <h5>Enter Card details</h5>
                    <div class="form-group row">
                        <label for="inputCardNumber" class="col-sm-2 col-form-label">Card Number</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="inputCardNumber" value={this.state.cardNumber} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputMonth" class="col-sm-2 col-form-label">Expiration Date</label>

                        <div class="col-sm-2">
                              <select>
                          {month}
                          </select>
                        </div>

                        <div class="col-sm-2">
                              <select>
                          {year}
                          </select>
                        </div>
                        <div class="col-sm-1">
                            <input type="text" class="form-control" id="ccv" placeholder= "CCV" value={this.state.ccv} onChange={this.handleChange} />
                        </div>
                    </div>
                    <input type="submit" value="Submit Order" />
                </form>
            </div>
        );
    }

}
export default Checkout