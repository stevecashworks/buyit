import styled from "styled-components";
import headset from "../../../../assets/products/black headset.png";
import fashion from "../../../../assets/products/lipstick.png";
import accessories from "../../../../assets/products/smart watch.png";
import cam from "../../../../assets/cam.png";
import "./categories.css";
import { motion } from "framer-motion";
import variants from "./categoryvariants.tsx";
import responsive from "../../../../responsive.tsx";
const Container = styled.div`
  width: 80vw;
  margin: 80px auto;
  height: 500px;
  display: grid;
  gap: 40px;
  grid-template-columns: 4fr 3fr 2.5fr;
  ${responsive(`
  display:flex;
  flex-direction:column;
  align-items:center;
  width:100vw;
  height:auto;
    
  `)}
`;
const MusicCategory = styled.div`
  background-color: #f3d2f0;
  display: flex;
  flex-direction: column;
  height: 400px;
  gap: 40px;
  position: relative;
  cursor: pointer;
  ${responsive(`
    width:350px;
  `)}
`;
const MidCategory = styled.div`
  display: grid;
  height: 400px;
  grid-gap: 20px;
  grid-template-rows: 1fr 1fr;
  ${responsive(`
    height:600px;
  `)}
`;
const CategoryText = styled.div`
  font-size: 30px;
  font-weight: 400;
  margin: 20px 50px;
  color: rgb(0, 0, 0, 0.8);
`;

const HeadsetImg = styled.img`
  position: absolute;
  left: -50px;
  width: 400px;
  top: 80px;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const SubCat = styled.div`
  position: relative;
  background-color: #e6e7e3;
  background-color: #f3d2f0;
  width:350px;

  cursor: pointer;
`;
const SubCatImg = styled.img`
  width: 150px;
  position: absolute;
  left: 120px;
  bottom: -30px;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Categories = () => {
  return (
    <Container>
      <motion.div
        variants={variants.left}
        initial="initial"
        whileInView="visible"
      >
        <MusicCategory>
          <CategoryText>Music</CategoryText>
          <HeadsetImg src={headset} />
        </MusicCategory>
      </motion.div>
      <motion.div
        variants={variants.center}
        initial="initial"
        whileInView="visible"
      >
        <MidCategory>
          <SubCat>
            <CategoryText>Fashion</CategoryText>
            <SubCatImg src={fashion} />
          </SubCat>
          <SubCat>
            <CategoryText>Acessories</CategoryText>
            <SubCatImg
              src={accessories}
              style={{ left: "180px", bottom: "10px" }}
            />
          </SubCat>
        </MidCategory>
      </motion.div>
      <motion.div
        variants={variants.right}
        initial="initial"
        whileInView="visible"
      >
        <MusicCategory>
          <CategoryText>Cameras</CategoryText>
          <HeadsetImg src={cam} />
        </MusicCategory>
      </motion.div>
    </Container>
  );
};
export default Categories;
