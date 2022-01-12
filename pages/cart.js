import Image from 'next/image';
import css from 'styled-jsx/css';

const style = css`
  .container {
    padding: 50px;
    display: flex;
  }
  .left {
    flex: 2;
  }
  .right {
    flex: 1;
  }
  .imgContainer {
    position: relative;
    width: 100px;
    height: 100px;
  }
  .table {
    width: 100%;
    border-spacing: 20px;
  }
  .name {
    font-weight: 500;
    color: #d1411e;
    font-size: 18px;
  }
  .total {
    font-weight: 500;
    font-size: 18px;
  }
  .wrapper {
    width: 90%;
    max-height: 300px;
    padding: 50px;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #333;
    color: white;
  }

  .totalTextTitle {
    margin-right: 10px;
  }
  .button {
    height: 30px;
    color: #d1411e;
    font-weight: bold;
    cursor: pointer;
    margin-top: 20px;
  }
  td {
    text-align: center;
  }
`;
const cart = () => {
  return (
    <div className="container">
      <div className="left">
        <table className="table">
          <tr className="tr">
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
              <div className="imgContainer">
                <Image
                  src="/img/pizza.png"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </td>
            <td>
              <span className="name">Pepperoni</span>
            </td>
            <td>
              <span className="extras">Double ingredient, spicy sauce</span>
            </td>
            <td>
              <span className="price">$19.90</span>
            </td>
            <td>
              <span className="quantity">2</span>
            </td>
            <td>
              <span className="total">$39.80</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className="imgContainer">
                <Image
                  src="/img/pizza.png"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </td>
            <td>
              <span className="name">Pepperoni</span>
            </td>
            <td>
              <span className="extras">Double ingredient, spicy sauce</span>
            </td>
            <td>
              <span className="price">$19.90</span>
            </td>
            <td>
              <span className="quantity">2</span>
            </td>
            <td>
              <span className="total">$39.80</span>
            </td>
          </tr>
        </table>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2 className="title">CART TOTAL</h2>
          <div className="totalText">
            <b className="totalTextTitle">Subtotal:</b>$79.60
          </div>
          <div className="totalText">
            <b className="totalTextTitle">Discount:</b>$0.00
          </div>
          <div className="totalText">
            <b className="totalTextTitle">Total:</b>$79.60
          </div>
          <button className="button">CHECKOUT NOW!</button>
        </div>
      </div>
      <style jsx>{style}</style>
    </div>
  );
};

export default cart;
