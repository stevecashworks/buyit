import styled from "styled-components";
import Rating from "../../../../home/components/ratings";

const Container = styled.div`
  width: 700px;
`;
const Top = styled.div`
  height: 30px;
  align-items: center;
  background-color: #f0f0f0;
  width: 100%;
  display: flex;
`;
const ProductName = styled.div`
  margin: 20px 0;
  text-transform: uppercase;
  color: var(--dark);
  font-weight: 600;
  font-size: larger;
  opacity: 0.8;
`;
const RatingCon = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin: 20px 0;
`;
const NoOfRating = styled.div`
  text-transform: uppercase;
`;
const Btn = styled.button`
  background-color: var(--secondary);
  color: white;
  font-size: 12px;
  opacity: 0.8;
`;
const PriceCon = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const Price = styled.p`
  font-size: 24px;
  color: var(--dark);
  opacity: 0.6;
  letter-spacing: 1.5;
`;
const FormerPrice = styled.p`
  text-decoration: line-through;
  opacity: 0.8;
  font-size: 14px;
`;
const Discount = styled.p`
  font-size: 16px;
  color: var(--danger);
  letter-spacing: 1px;
`;
const ColorsCon=styled.div`
  display:flex;
  gap:10px;
  align-items:center;

`
const Color= styled.div<{col:string}>`
width:30px;
height:30px;
border-radius:50%;
background-color:${props=>props.col};
display:flex;
align-items:center;
justify-content:center;
`
const Details = () => {
  return (
    <Container>
      ]{/* product stats starts */}
      <Top>🔥 Blazing offers just for you</Top>
      <ProductName>Super Fashion sneakers</ProductName>
      <RatingCon>
        <Rating no={3.5} />
        <NoOfRating>120 ratings</NoOfRating>
      </RatingCon>
      <RatingCon>
        <Btn>#1 Bestseller</Btn>
        <NoOfRating style={{ fontSize: "12px" }}>in fashion</NoOfRating>
      </RatingCon>
      {/* products stats end */}
      <PriceCon>
        <Price>$ 599.99</Price>
        <FormerPrice>$8999.99</FormerPrice>
        <Discount> 30% off</Discount>
      </PriceCon>
    </Container>
  );
};
export default Details;
