import styled from "styled-components";
import { motion } from "framer-motion";
// import wristwatch from "../../../assets/wristwatch.png";
import cam from "../../../../assets/cam.png";
import "./productbanner.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import responsive from "../../../../responsive";

const Container = styled.div`
  width: 80vw;
  margin: 30px auto;
  display: flex;
  ${responsive(`width:100vw;`)}
 
`;
const SubCon = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  display: flex;
  gap: 100px;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #e4e4e1;
  background-image: radial-gradient(
      at top center,
      rgba(255, 255, 255, 0.03) 0%,
      rgba(0, 0, 0, 0.03) 100%
    ),
    linear-gradient(
      to top,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(143, 152, 157, 0.6) 100%
    );
  background-blend-mode: normal, multiply;
  background-color: #dee;
  ${responsive(`
    flex-direction:column;
  `)}
`;

const Left = styled.div`
  margin-left: 150px;
  display: flex;
  height: 100%;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
  gap: 60px;
  ${responsive(`display:none;`)}
`;
const Right = styled.div`
  position: relative;
`;
const Img = styled.img`
  position: absolute;
  top: -40px;
  left: -100px;
  width: 600px;
  ${responsive(`left:-100px; top:40px`)}
`;
const Promo = styled.div`
  font-size: 25px;
`;
const Btn = styled.button`
  background-color: var(--info);
`;
const Heading = styled.h1`
  font-size: 40px;
`;

const leftVariant = {
  initial: {
    y: 0,
    scale: 1,
    opacity: 0,
    
  },
  visible: {
    y: 20,
    scale: 1.2,
    opacity: 1,
    transition: {
      delay: 0,
      duration: 1.5,
    },
  },
};

const ProductBanner = () => {
  return (
    <Container>
      <SubCon className="subcon">
        <Left>
          <motion.div
            className="first-motion"
            transition={{ staggerChildren: 1 }}
          >
            <motion.div
              variants={leftVariant}
              initial="initial"
              whileInView="visible"
            >
              <Promo>Save 30% </Promo>
            </motion.div>
            <motion.div
              variants={leftVariant}
              initial="initial"
              whileInView="visible"
            >
              <Heading>Special Price</Heading>
            </motion.div>

            <motion.div
              variants={leftVariant}
              initial="initial"
              whileInView="visible"
            >
              <Btn>Shop now</Btn>
            </motion.div>
          </motion.div>
        </Left>
        <Right>
          <Img src={cam} />
        </Right>
      <div className="chevron-con left"> <FaChevronLeft/></div>
      <div className="chevron-con right"><FaChevronRight/></div>
      </SubCon>
    </Container>
  );
};
export default ProductBanner;
