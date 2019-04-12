import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart, addToWishlist } from './actions/cartAction'

class Home extends Component {
    state = {
        message: false,
        wishlist: false
    }

    addProductToCart = (id) => {
        this.props.addToCart(id);
        this.setState({
            message: true
        })
        setTimeout(function () {
            this.setState({ message: false });
        }.bind(this), 1000);
    }
    addProductToWishlist = (id) => {
        this.props.addToWishlist(id);
        this.setState({
            wishlist: true
        })
        setTimeout(function () {
            this.setState({ wishlist: false });
        }.bind(this), 1000);
    }
    render() {
        let successDiv;
        let wishlistMessage;
        if (this.state.message) {
            successDiv = <div className="alert alert-success"> Item added in cart</div>

        }
        if (this.state.wishlist) {
            wishlistMessage = <div className="alert alert-success"> Item added in wishlist</div>

        }
        let itemList = this.props.items.map(item => {

            console.log(item.class);
            return (
                <div className="product" key={item.id}>
                    <div className="card-image">
                        <img src={item.img} alt={item.title} />
                    </div>
 <span id="heart" className = {item.class} style={{ cursor: 'pointer'}} onClick={this.addProductToWishlist.bind(this, item.id)}>&hearts;</span>
                    <div className="card-content">
                        {/*<p>{item.desc}</p>*/}
                        <span className="card-title">{item.title}</span>
                        <p><b>Price:  &#8377; {item.price}</b></p>
                        <div to="/" className="btn btn-info" style={{ cursor: 'pointer' }} onClick={this.addProductToCart.bind(this, item.id)}>Add to cart</div>&nbsp;&nbsp;
                  
                    </div>
                </div>

            )
        })

        return (

            <div className="container main-container">
                <h3 className="center">Our Products</h3>
                {successDiv}
                {wishlistMessage}
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {

    return {
        items: state.items,
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        // addToCart: (id) => { dispatch(addToCart(id)) },
        addToCart: function (id) {
            return dispatch(addToCart(id));
        },
        addToWishlist: function (id) {
            return dispatch(addToWishlist(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)