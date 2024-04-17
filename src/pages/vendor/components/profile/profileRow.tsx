import { Button } from "react-bootstrap"
import styled from "styled-components"
const Container=styled.div`
display:flex;
height:40px;
align-items:center;
text-transform: capitalize;
margin-bottom:10px;
font-size:14px;

`
const FieldName= styled.div`
flex:1;
`
const FieldValue=styled.div`
margin-left:50px;
   
flex:1;
    
`
const Actions = styled.div`
  display: flex;
  gap: 20px;
  
  
`;





type rowProps={
    fieldName:string,
    fieldValue:string
}


const ProfileRow=({fieldName, fieldValue}:rowProps)=>{
    return (
        <Container>
            <FieldName>{fieldName}</FieldName>
            <FieldValue>{fieldValue}</FieldValue>
            <Actions>
                <Button variant="outline-primary">Edit</Button>
                <Button variant="outline-success">Save</Button>
            </Actions>

        </Container>
    )
}
export default ProfileRow