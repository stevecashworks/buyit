import styled from "styled-components";
import sneakers from "../../../../../assets/products/sneakers.png";
import flask from "../../../../../assets/products/studs.png";
import camera from "../../../../../assets/cam.png";
import smartWatch from "../../../../../assets/products/home.png";
import { useRef, useState } from "react";
import responsive from "../../../../../responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 550px;
`;
const TopContainer = styled.div<{ image: string }>`
  cursor: crosshair;
  width: 550px;
  height: 800px;
  background-color: #ddd;
  background-image: url(${props=>props.image});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden;
  transition: all 0.2s ease;
  ${responsive(`
    width:300px;
    height:400px;
  `)}
`;

const BottomContainer = styled.div`
  display: flex;
  gap: 20px;
`;
const ImgCon = styled.div<{active:boolean}>`
  width: 120px;
  height: 150px;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity:${props=>props.active?1:0.4};
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const Img = styled.img`
  width: 120px;
`;

const Images = () => {
  const photos = [ smartWatch,sneakers, flask, camera];
  const [image, setImage] = useState(sneakers);
    console.log(image)
  const containerRef = useRef(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    const container = containerRef.current;
    
    const { top, left, width, height } = container.getBoundingClientRect();
    const x = clientX - left; // x position within the element.
    const y = clientY - top; // y position within the element.

    const moveX = ((x / width) * 100 - 50) * -0.5; // Move in the opposite direction of the cursor
    const moveY = ((y / height) * 100 - 50) * -1.5; // Move in the opposite direction of the cursor

  if(container) {
    container.style.backgroundPosition = `${moveX}% ${moveY}%`;

  } 
  };
  return (
    <Container>
      <TopContainer
        ref={containerRef}
        image={image}
        onMouseMove={handleMouseMove}
      ></TopContainer>
      <BottomContainer>
        {photos.map((prod) => {
          return (
            <ImgCon active={prod===image}
              onClick={() => {
                setImage(prod);
              }}
            >
              <Img src={prod} />
            </ImgCon>
          );
        })}
      </BottomContainer>
    </Container>
  );
};
export default Images;