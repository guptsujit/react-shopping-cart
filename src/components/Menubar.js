import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
class Menubar extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
                <div className="container">
                    <Link to="/" className="brand-logo">Shopping</Link>

                    <ul className="navbar-nav">
                        <li className="nav-item"><Link to="/" className="nav-link">Shop</Link></li>
                        <li className="nav-item"><Link to="/mycart" className="nav-link">My cart <span id="totalitemId">({this.props.totalQuantity})</span></Link></li>
                        <li className="nav-item"><Link to="/wishlist" className="nav-link">Wishlist</Link></li>
                    </ul>
                </div>
            </nav>

        )

    }


}
const mapStateToProps = (state) => {
    var totalItemArray = state.addedItems.map((item) => {
        return item.quantity;
    });
    var totalQuantity = 0;
    if (totalItemArray.length) {
        var totalQuantity = totalItemArray.reduce((a, b) => {
            return a + b;
        })
    }
    return {
        addedItems: state.addedItems,
        totalQuantity: totalQuantity
        //addedItems: state.addedItems
    }
}
export default connect(mapStateToProps)(Menubar);

