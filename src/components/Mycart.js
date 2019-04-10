import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity } from './actions/cartAction'
class Mycart extends Component {

    //to remove the item completely
    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }
    render() {
        if (this.props.addedItems.length) {
         
            const itemAddedInCart = this.props.addedItems.map((item) => {

                return (

                        <tr key={item.id}>
                            <td><img src={item.img} alt={item.img} className="img-thumbnail" width="50" height="50" /></td>
                            <td>{item.title}</td>
                            <td> {item.price}  &#8377;</td>
                            <td>{item.quantity}</td>
                            <td>
                                <Link to="/mycart"><i className="fa fa-plus" onClick={() => { this.handleAddQuantity(item.id) }}></i> </Link>
                                <Link to="/mycart"><i className="fa fa-minus" onClick={() => { this.handleSubtractQuantity(item.id) }}></i></Link>
                                <Link to="/mycart"> <i className="fa fa-trash" onClick={() => { this.handleRemove(item.id) }}></i> </Link>
                            </td>
                        </tr>



                )
            }

            )

            return (
                <div className="container">
                    <div className="cart">
                        <h5>Your have added listed below items:</h5>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {itemAddedInCart}
                            </tbody>
                        </table>



                        <span><Link to="/" className="btn btn-primary"> Continue Shopping </Link></span>&nbsp;&nbsp;
                         <span><Link to="/" className="btn btn-success"> Place Order </Link></span>
                          <h5 style = {{float : 'right'}}> Total Amount :  {this.props.total}</h5>
                    </div>

                </div>
            )

        } else {

            return (
                <div className="container">
                    <div className="alert alert-warning">
                        Your shopping cart is empty.
              </div>
                </div>
            )
        }

    }
}


const mapStateToProps = (state) => {
    console.log(state);
    return {
        addedItems: state.addedItems,
        total: state.total
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Mycart)