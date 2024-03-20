import styled from "styled-components";
import delivery from "../../../../assets/delivery.svg";
import offer from "../../../../assets/offer.svg";
import hrs24 from "../../../../assets/24hrs.svg";
import creditCard from "../../../../assets/creditCard.svg";
import "./services.css"
import responsive from "../../../../responsive";
const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  ${responsive(`flex-direction:column;gap:20px; align-items:center;opacity:0.8`)}
`;
const CardCon = styled.div`
  background-color: #dadada;
  height: 50px;
  display: flex;
  padding:10px;
  width:230px;
  ${responsive(`width:300px`)}
`;
const CardRight = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content: center;
`;
const CardImg = styled.img``;

const CardHeading = styled.h4`
font-size:12px;
`;
const CardText = styled.p``;

const cardData = [
  { img: delivery, text: "free delivery worldwide", heading: "free delivery" },
  { img: hrs24, text: "24 x 7 service", heading: "Online Service For 24 X 7" },
  {
    img: offer,
    text: "Festival offer",
    heading: "New Online Special Festival Offer",
  },
  {
    img: creditCard,
    text: "online payment",
    heading: "New Online Payment gateways",
  },
];
interface CardProps {
  img: string;
  text: string;
  heading: string;
}

const Card = (props: CardProps) => {
  const { img, heading, text } = props;
  return (
    <CardCon>
      <CardImg className="cardImg" src={img} />
        <CardRight>
            <CardHeading>{heading}</CardHeading>
            <CardText>{text}</CardText>
        </CardRight>
    </CardCon>
  );
};
const Services = () => {
  return (
    <Container> {cardData.map(card=><Card {...card} />)} </Container>
  );
};
export default Services