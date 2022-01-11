import Image from 'next/image';
import { useState } from 'react';
import css from 'styled-jsx/css';

const style = css`
  .container {
    height: calc(100vh - 100px);
    background-color: #d1411e;
    overflow: hidden;
  }
  .arrowContainer {
    position: absolute;
    width: 10%;
    height: 20%;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    z-index: 2;
  }
  .wrapper {
    width: 300vw;
    height: 100%;
    display: flex;
  }
  .imgContainer {
    width: 100vw;
    height: 100%;
    position: relative;
  }
`;

const Slide = () => {
  const [index, setIndex] = useState(0);
  const images = [
    '/img/featured.png',
    '/img/featured2.png',
    '/img/featured3.png',
  ];
  return (
    <div className="container">
      <div className="arrowContainer" style={{ left: 0 }}>
        <Image src="/img/arrowleft.png" alt="" layout="fill" />
      </div>
      <div className="wrapper">
        {images.map((img, i) => (
          <div className="imgContainer" key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div className="arrowContainer" style={{ right: 0 }}>
        <Image src="/img/arrowright.png" alt="" layout="fill" />
      </div>
      <style jsx>{style}</style>
    </div>
  );
};

export default Slide;
