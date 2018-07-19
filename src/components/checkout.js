import React, {Component} from 'react'
import Modal from 'react-responsive-modal';

export default class InvoicePopup extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({open: true});
  };

  onCloseModal = () => {
    this.setState({open: false});
  };

  render() {
    const {cart, total} = this.props
    console.log(cart)
    console.log(total)
    const {open} = this.state;
    return (
      <div>
        <button onClick={this.onOpenModal}>check out</button>
        <Modal open={open} onClose={this.onCloseModal} little>
          <div>
            <div ref={el => (this.componentRef = el)}>
              <h2>Order check out</h2>
              <div>Thanks for your purchase.</div>
              {
                cart.map((item, index) => {
                  return (
                    <li key={index}>
                      {item.name}, ${item.price}, {item.quantity}, ${item.price * item.quantity}
                    </li>
                  )
                })
              }
              <div>
                Total: ${total.toFixed(2)}
              </div>
            </div>
          </div>
          {/*<div id='invoicePopupPrintButton'>*/}
            {/*<ReactToPrint*/}
              {/*trigger={() => <Button primary>Print</Button>}*/}
              {/*content={() => this.componentRef}*/}
            {/*/>*/}
          {/*</div>*/}
        </Modal>
      </div>
    );
  }
}
