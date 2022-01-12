import Image from 'next/image';
import { useState } from 'react';
import css from 'styled-jsx/css';

const style = css`
  .container {
    height: calc(100vh - 100px);
    display: flex;
  }
  .left {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right {
    flex: 1;
    padding: 20px;
  }
  .imgContainer {
    width: 80%;
    height: 80%;
    position: relative;
  }
  .price {
    color: #d1411e;
    font-style: 24px;
    font-weight: 400;
    border-bottom: 1px solid #d1411e;
  }
  .sizes {
    width: 40%;
    display: flex;
    justify-content: space-between;
  }
  .size {
    width: 30px;
    height: 30px;
    position: relative;
    cursor: pointer;
  }
  .size:nth-child(2) {
    width: 40px;
    height: 40px;
  }
  .size:last-child {
    width: 50px;
    height: 50px;
  }
  .number {
    position: absolute;
    top: -5px;
    right: -20px;
    background-color: teal;
    color: white;
    font-size: 12px;
    padding: 0 5px;
    border-radius: 10px;
  }
  .ingredients {
    display: flex;
    margin-bottom: 30px;
  }
  .option {
    display: flex;
    align-items: center;
    margin-right: 10px;
    font-size: 14px;
    font-weight: 500;
  }
  .checkbox {
    width: 20px;
    height: 20px;
  }
  .quantity {
    width: 50px;
    height: 30px;
  }
  .button {
    height: 30px;
    margin-left: 10px;
    border: none;
    color: white;
    background-color: #d1411e;
    font-weight: 500;
    cursor: pointer;
  }
  @media screen and (max-width: 480px) {
    .container {
      height: auto;
      text-align: center;
      flex-direction: column;
      margin-top: 20px;
    }
    .imgContainer {
      width: 70vw;
      height: 70vw;
    }
    .title {
      margin: 5px;
    }
    .sizes {
      width: 100%;
      padding: 0px 20px;
    }
    .ingredients {
      flex-direction: column;
    }
    .option {
      margin: 10px;
      font-size: 18px;
    }
    .checkbox {
      width: 25px;
      height: 25px;
    }
    .quantity,
    .button {
      height: 50px;
      padding: 10px 20px;
    }
  }
`;
const Product = () => {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: '/img/pizza.png',
    name: 'PEPPERONI',
    price: [19.9, 23.9, 27.9],
    desc: `산뜻한 토마토소스 그 위에 페퍼로니와 주욱 늘어나는 모차렐라 치즈 짭짤한 풍미가 일품인 정통
        아메리칸 스타일`,
  };
  return (
    <div className="container">
      <div className="left">
        <div className="imgContainer">
          <Image src={pizza.img} layout="fill" objectFit="contain" alt="" />
        </div>
      </div>
      <div className="right">
        <h1 className="title">{pizza.name}</h1>
        <span className="price">${pizza.price[size]}</span>
        <p className="desc">{pizza.desc}</p>
        <h3 className="choose">Choose the size</h3>
        <div className="sizes">
          <div className="size" onClick={() => setSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className="number">Small</span>
          </div>
          <div className="size" onClick={() => setSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className="number">Medium</span>
          </div>
          <div className="size" onClick={() => setSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className="number">Large</span>
          </div>
        </div>
        <h3 className="choose">Choose additional ingredients</h3>
        <div className="ingredients">
          <div className="option">
            <input
              type="checkbox"
              id="double"
              name="double"
              className="checkbox"
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className="option">
            <input
              type="checkbox"
              id="cheese"
              name="cheese"
              className="checkbox"
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className="option">
            <input
              type="checkbox"
              id="spicy"
              name="spicy"
              className="checkbox"
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className="option">
            <input
              type="checkbox"
              id="garlic"
              name="garlic"
              className="checkbox"
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>
        <div className="add">
          <input type="number" defaultValue={1} className="quantity" />
          <button className="button">ADD to Cart</button>
        </div>
      </div>
      <style jsx>{style}</style>
    </div>
  );
};

export default Product;
