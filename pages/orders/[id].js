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
  .row:last-child {
    width: 80%;
    display: flex;
    justify-content: space-between;
  }
  .done {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .inProgress {
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: inProgress 1s ease infinite alternate;
  }
  @keyframes inProgress {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .undone {
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0.3;
  }
  .undone .checkedIcon,
  .inProgress .checkedIcon {
    display: none;
  }
  .table {
    width: 100%;
    text-align: left;
    margin-bottom: 50px;
  }
  /* .name {
    font-weight: 500;
    color: #d1411e;
    font-size: 18px;
  }
  .total {
    font-weight: 500;
    font-size: 18px;
  } */
  .wrapper {
    width: 90%;
    max-height: 300px;
    padding: 10px 50px 50px 50px;
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
    background-color: white;
    height: 30px;
    color: teal;
    font-weight: bold;
    margin-top: 20px;
    cursor: not-allowed;
  }
`;

const Order = () => {
  const status = 0;
  const statusClass = (index) => {
    if (index - status < 1) return 'done';
    if (index - status === 1) return 'inProgress';
    if (index - status > 1) return 'undone';
  };
  return (
    <div className="container">
      <div className="left">
        <div className="row">
          <table className="table">
            <tbody>
              <tr className="tr">
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
              <tr>
                <td>
                  <span className="id">87328478</span>
                </td>
                <td>
                  <span className="name">Tomas Lee</span>
                </td>
                <td>
                  <span className="address">GangNam st. 29494 SEOUL</span>
                </td>

                <td>
                  <span className="total">$79.80</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row">
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" width={30} height={30} alt="" />
            <span>Payment</span>
            <div className="checkedIcon">
              <Image
                className="checkedIcon"
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/img/bake.png" width={30} height={30} alt="" />
            <span>Preparing</span>
            <div className="checkedIcon">
              <Image
                className="checkedIcon"
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/img/bike.png" width={30} height={30} alt="" />
            <span>On the way</span>
            <div className="checkedIcon">
              <Image
                className="checkedIcon"
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/img/delivered.png" width={30} height={30} alt="" />
            <span>Delivered</span>
            <div className="checkedIcon">
              <Image
                className="checkedIcon"
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
        </div>
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
          <button disabled className="button">
            PAID
          </button>
        </div>
      </div>
      <style jsx>{style}</style>
    </div>
  );
};

export default Order;
