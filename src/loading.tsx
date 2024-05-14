import { Circles } from "react-loader-spinner";
import styled from "styled-components"
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:rgb(0,0,0,0.2);

`;

// const StyledSpinner = styled(InfinitySpin)`
//   display: block; // Change to block if flex doesn't affect it
//   margin: auto; // Centers the spinner in case flex doesn't work
//   border: 3px solid blue; // Helps visualize the spinner area
//   svg {
//     margin: auto; // Center horizontally if flex properties fail
//     display: block; // Helps to apply margins properly
//     border: 2px solid red; // Visually indicates the bounds of the SVG
//   }
// `;


const Loading=()=>{
    return (
      <Container>
        <Circles
          height="80"
          width="80"
          color="var(--info)"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </Container>
    );
}
export default Loading 