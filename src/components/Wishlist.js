import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItemFromWishlist } from './actions/cartAction'
class Wishlist extends Component {

    //to remove the item completely
    handleRemove = (id) => {
        this.props.removeItemFromWishlist(id);
    }
 
    render() {
        if (this.props.wishlistItems.length) {
         
            const itemAddedInWishlist = this.props.wishlistItems.map((item) => {

                return (

                        <tr key={item.id}>
                            <td><img src={item.img} alt={item.img} className="img-thumbnail" width="50" height="50" /></td>
                            <td>{item.title}</td>
                            <td> {item.price}  &#8377;</td>
                  
                            <td>
                           
                         <Link to="/wishlist"> <i className="fa fa-trash" onClick={() => { this.handleRemove(item.id) }}></i> </Link>
                            </td>
                        </tr>



                )
            }

            )

            return (
                <div className="container main-container">
                    <div className="cart">
                        <h5>My Wishlist:</h5>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {itemAddedInWishlist}
                            </tbody>
                        </table>
                          <span><Link to="/" className="btn btn-primary"> Continue Shopping </Link></span>&nbsp;&nbsp;
                    </div>

                </div>
            )

        } else {

            return (
                <div className="container main-container">
                    <div className="alert alert-warning">
                        Your wishlist is empty.
              </div>
                </div>
            )
        }

    }
}


const mapStateToProps = (state) => {
    return {
        wishlistItems: state.wishList,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItemFromWishlist: (id) => { dispatch(removeItemFromWishlist(id)) },
      
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Wishlist)