import React, { Component } from 'react';
import { connect } from 'react-redux'
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
        let expirationMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const month = expirationMonth.map((monthNo) => {

            return (

                <option value={monthNo}>{monthNo}</option>

            )

        })
        let expirationyear = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028];
        const year = expirationyear.map((yearNo) => {

            return (

                <option value={yearNo}>{yearNo}</option>

            )

        })

        let itemDetails = this.props.addedItems.map((item) => {
                   return (
                         <p><a href="#">{item.title}</a> &nbsp;&nbsp; <span className="price"> &#8377; {item.price}</span>
                         <span className="quantity"> Quantity : {item.quantity}</span></p>
                   )
        })

        return (

            <div className="container main-container">

                <div className="row">
                    <div className="col-75">
                        <div className="container">
                            <form>

                                <div className="row">
                                    <div className="col-50">
                                        <h3>Billing Address</h3>
                                        <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
                                        <input type="text" id="fname" name="firstname"  />
                                        <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
                                        <input type="text" id="email" name="email"  />
                                        <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
                                        <input type="text" id="adr" name="address"  />
                                        <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
                                        <input type="text" id="city" name="city" />

                                        <div className="row">
                                            <div className="col-50">
                                                <label htmlFor="state">State</label>
                                                <input type="text" id="state" name="state"  />
                                            </div>
                                            <div className="col-50">
                                                <label htmlFor="zip">Zip</label>
                                                <input type="text" id="zip" name="zip"  />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-50">
                                        <h3>Payment</h3>
                                        <label htmlFor="fname">Accepted Cards</label>
                                        <div className="icon-container">
                                            <i className="fa fa-cc-visa" ></i>
                                            <i className="fa fa-cc-amex"></i>
                                            <i className="fa fa-cc-mastercard" ></i>
                                            <i className="fa fa-cc-discover"></i>
                                        </div>
                                        <label htmlFor="cname">Name on Card</label>
                                        <input type="text" id="cname" name="cardname"  />
                                        <label htmlFor="ccnum">Credit card number</label>
                                        <input type="text" id="ccnum" name="cardnumber"  />
                                        <label htmlFor="expmonth">Exp Month</label>
                                        <input type="text" id="expmonth" name="expmonth" />
                                        <div className="row">
                                            <div className="col-50">
                                                <label htmlFor="expyear">Exp Year</label>
                                                <input type="text" id="expyear" name="expyear"  />
                                            </div>
                                            <div className="col-50">
                                                <label htmlFor="cvv">CVV</label>
                                                <input type="text" id="cvv" name="cvv"  />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <label>
                                    <input type="checkbox" name="sameadr" /> Shipping address same as billing
        </label>
                                <div>
                                 <button type="button" className="btn btn-info">Continue to checkout</button>   
                                  
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className="col-25">
                        <div className="container">
                            <h4>Cart Details</h4>
                             {itemDetails}
                            <hr />
                            <p>Total <span className="price"><b> &#8377; {this.props.total}</b></span></p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        addedItems: state.addedItems,
        total: state.total
    }
}
export default connect(mapStateToProps)(Checkout)
