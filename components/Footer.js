import Image from 'next/image';
import css from 'styled-jsx/css';

const style = css`
  .container {
    height: calc(100vh - 100px);
    background-color: #222;
    display: flex;
  }
  .item {
    flex: 1;
    position: relative;
    display: flex;
  }
  .item:last-child {
    flex: 2;
    padding: 50px;
    justify-content: space-between;
  }
  .card {
    flex: 1;
    padding: 0 20px;
  }
  .title {
    font-size: 18px;
    color: #b7903c;
  }
  .text {
    color: lightgray;
  }
  .motto {
    color: white;
  }
  @media screen and (max-width: 480px) {
    .container {
      height: auto;
      text-align: center;
    }
    .item:first-child {
      display: none;
    }
    .item {
      flex-direction: column;
    }
    .title {
      font-size: 30px;
    }
    .text {
      font-size: 20px;
    }
  }
`;

const Footer = () => {
  return (
    <div className="container">
      <div className="item">
        <Image src="/img/bg.png" layout="fill" objectFit="cover" alt="" />
      </div>
      <div className="item">
        <div className="card">
          <h2 className="motto">
            THE MANDINGCO PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className="card">
          <h1 className="title">FIND OUR RESTAURANTS</h1>
          <p className="text">
            0000 SEOUL St #104
            <br /> KOREA, 00000
            <br /> (000) 000-0000
          </p>
          <p className="text">
            0000 SEOUL St #125
            <br /> KOREA, 00000
            <br /> (000) 000-0000
          </p>
          <p className="text">
            0000 SEOUL St #153
            <br /> KOREA, 00000
            <br /> (000) 000-0000
          </p>
          <p className="text">
            0000 SEOUL St #243
            <br /> KOREA, 00000
            <br /> (000) 000-0000
          </p>
        </div>
        <div className="card">
          <h1 className="title">WORKING HOURS</h1>
          <p className="text">
            MONDAY UNTIL FRIDAY
            <br /> 09:00 - 22:00
          </p>
          <p className="text">
            SATURDAY - SUNDAY
            <br /> 12:00 - 20:00
          </p>
        </div>
      </div>
      <style jsx>{style}</style>
    </div>
  );
};

export default Footer;
