import Image from 'next/image';
import css from 'styled-jsx/css';

const style = css`
  .container {
    height: 100px;
    padding: 0px 50px;
    background-color: #d1411e;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 3;
  }
  .item {
    flex: 1;
    display: flex;
    align-items: center;
  }
  .item:nth-child(2) {
    flex: 3;
  }
  .item:last-child {
    justify-content: flex-end;
  }
  .callButton {
    background-color: white;
    border-radius: 50%;
    padding: 10px;
    width: 50px;
    height: 50px;
  }
  .texts {
    margin-left: 20px;
    color: white;
  }
  .text:first-child {
    font-size: 12px;
    font-weight: 500;
  }
  .text:last-child {
    font-size: 20px;
    font-weight: bold;
  }
  .list {
    padding: 0;
    display: flex;
    align-items: center;
    list-style: none;
    color: white;
  }
  .listItem {
    margin: 20px;
    font-weight: 500;
  }
  .cart {
    position: relative;
  }
  .count {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #d1411e;
    font-weight: bold;
  }
`;
const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="item">
          <div className="callButton">
            <Image src="/img/telephone.png" alt="" width="32" height="32" />
          </div>
          <div className="texts">
            <div className="text">ORDER NOW!</div>
            <div className="text">000 000 0000</div>
          </div>
        </div>
        <div className="item">
          <ul className="list">
            <li className="listItem">Homepage</li>
            <li className="listItem">Products</li>
            <li className="listItem">Menu</li>
            <Image src="/img/logo.png" alt="" width="130px" height="150px" />
            <li className="listItem">Events</li>
            <li className="listItem">Blog</li>
            <li className="listItem">Contact</li>
          </ul>
        </div>
        <div className="item">
          <div className="cart">
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />
            <div className="count">2</div>
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </>
  );
};

export default Navbar;
