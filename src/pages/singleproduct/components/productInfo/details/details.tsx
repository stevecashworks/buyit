import styled from "styled-components";
import Rating from "../../../../home/components/ratings";
import { FaCheckCircle, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { GoBookmarkFill } from "react-icons/go";
import { PiShoppingCartFill } from "react-icons/pi";

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
const ColorsCon = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 30px 0;
`;
const SelectSize = styled.p`
  margin: 20px 0;
  color: rgb(0, 0, 0, 0.5);
`;
const cols = ["#ddd", "#8ab9e7", "#ecec6a"];
const Color = styled.div<{ col: string }>`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${(props) => props.col};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Line = styled.div`
  width: 100%;
  height: 10px;
  border-bottom: 1px dashed rgb(0, 0, 0, 0.3);
`;
const Size = styled.div<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? "#ebebeb" : "white")};
  border: rgb(0, 0, 0, 0.2);
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(0, 0, 0, 0.3);
`;
const QuantityCon = styled.div`
  display: flex;
  color: rgb(0, 0, 0, 0.5);
  border-collapse: collapse;
`;
const Quantity = styled.div`
  display: flex;
  align-items: center;
  width: 70px;
  height: 40px;
  justify-content: center;
  border: 1px solid rgb(0, 0, 0, 0.5);
  border-collapse: collapse;
`;
const ChevronCon = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(0, 0, 0, 0.5);
  border-collapse: collapse;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    background: var(--info);
    color: white;
  }
`;
const CartBtns = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 30px 0;
`;
const CartBtn = styled.button`
  color: white;
  background-color: #df392e;
  border-radius: 0;
  text-transform: uppercase;
  border: none;
  padding: 20px 10px;
  box-sizing: border-box;
  width: 180px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border:none;
`;
const sizes = ["s", "m", "l", "xl"];
const Details = () => {
  const [currentColor, setCurrentColor] = useState(cols[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);
  return (
    <Container>
      {/* product stats starts */}
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
      {/* color selection starts */}
      <ColorsCon>
        {cols.map((col) => {
          return (
            <Color
              onClick={() => {
                setCurrentColor(col);
              }}
              col={col}
            >
              {currentColor === col && <FaCheckCircle size="14" />}
            </Color>
          );
        })}
      </ColorsCon>
      {/* color selection ends */}
      <Line />
      {/* sizes selection section starts */}
      <SelectSize>Select Size</SelectSize>

      <ColorsCon>
        {sizes.map((size) => {
          return (
            <Size
              onClick={() => {
                setCurrentSize(size);
              }}
              selected={currentSize === size}
            >
              {size}
            </Size>
          );
        })}
      </ColorsCon>

      {/* sizes selection section ends */}

      {/* quantity selection section starts */}
      <SelectSize>Quantity</SelectSize>
      <QuantityCon>
        <ChevronCon
          onClick={() => {
            setQuantity(quantity === 0 ? quantity : quantity - 1);
          }}
        >
          <FaChevronLeft />
        </ChevronCon>
        <Quantity>{quantity}</Quantity>
        <ChevronCon>
          <FaChevronRight
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          />
        </ChevronCon>
      </QuantityCon>
      {/* quantity selection ends */}

      {/* cart btns  start*/}
      <CartBtns>
        <CartBtn>
          <PiShoppingCartFill style={{ marginRight: "10px" }} />
          add to cart
        </CartBtn>
        <CartBtn>
          <GoBookmarkFill style={{ marginRight: "10px" }} /> wishlist
        </CartBtn>
      </CartBtns>
      {/* cart btns  end*/}

      {/* free shipping */}
      <Top>🛳 free shipping for orders above 500USD</Top>
      <Line />
      {/* free shipping ends */}

      {/* shipping info  starts*/}
    </Container>
  );
};
export default Details;
