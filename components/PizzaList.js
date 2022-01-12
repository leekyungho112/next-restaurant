import css from 'styled-jsx/css';
import PizzaCard from './PizzaCard';

const style = css`
  .container {
    padding: 20px 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .desc {
    font-size: 24px;
    width: 70%;
    color: #444;
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 480px) {
    .title {
      text-align: center;
    }
    .desc {
      width: 90%;
      text-align: center;
    }
  }
`;

const PizzaList = () => {
  return (
    <div className="container">
      <h1 className="title">THE BEST PIZZA IN TOWN</h1>
      <p className="desc">
        최고의 도우 맛을 위해 물, 밀가루, 이스트 등을 최적의 비율 로 매일
        반죽하여 냉장저온(1~3°C) 숙성한 도미노 피자의 도우! 수분보유량이
        우수하고 도우 입자 사이의 공기층이 적절히 형성된 3일~7일차 도우를 사용해
        전문 피자메이커가 핸드토스드(Hand Tossed) 방식으 로 만들어 특유의 쫄깃
        하고 포실포실한 식감과 맛, 향으로 오감을 충족시킵니다.
      </p>
      <div className="wrapper">
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
      <style jsx>{style}</style>
    </div>
  );
};

export default PizzaList;
