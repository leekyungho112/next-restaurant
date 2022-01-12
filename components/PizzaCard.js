import Image from 'next/image';
import css from 'styled-jsx/css';

const style = css`
  .container {
    width: 22%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 40px;
    cursor: pointer;
  }
  .title {
    font-size: 18px;
    color: #d1411e;
    font-weight: bold;
  }
  .price {
    font-size: 18px;
    color: #666;
    font-weight: bold;
  }
  .desc {
    text-align: center;
    color: #777;
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    .container {
      width: 100%;
    }
    .title {
      font-size: 30px;
    }
    .price,
    .desc {
      font-size: 24px;
    }
  }
`;
const PizzaCard = () => {
  return (
    <div className="container">
      <Image src="/img/pizza.png" alt="" width="500" height="500" />
      <h1 className="title">Pepperoni Pizza</h1>
      <span className="price">$19.90</span>
      <p className="desc">
        진정한 피자매니아는 페퍼로니 피자만 고집한다. 산뜻한 토마토소스, 그 위에
        페퍼로니와 주욱 늘어나는 모차렐라 치즈~ 짭짤한 풍미가 일품인 정통
        아메리칸 스타일
      </p>
      <style jsx>{style}</style>
    </div>
  );
};

export default PizzaCard;
