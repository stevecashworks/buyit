import styled from "styled-components";
import {FaStar} from "react-icons/fa"
import {FaRegStarHalfStroke} from "react-icons/fa6"
const Container=styled.div`
display:flex;
margin:10px 0;
    
`
interface ratingProp{
    no:number
}
const Rating=(props:ratingProp)=>{
 const {no}=props
    const grayRatings=5-no
    const fullRatings=Math.floor(no)
    const fullRatingStars=new Array(fullRatings).fill(FaStar)
    const grayRatingsList=new Array(Math.floor(grayRatings)).fill(FaStar)
    return (
      <Container>
        {fullRatingStars.map((Icon) => (
          <Icon color="#cba229" />
        ))}
        {no !== fullRatings && <FaRegStarHalfStroke color="#cba229" />}
        {grayRatingsList.map(Icon=><Icon color="#c9c7c7" />)}
      </Container>
    );
}
export default Rating