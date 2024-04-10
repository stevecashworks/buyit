import { Button } from "react-bootstrap"
import styled from "styled-components"
const Container=styled.div`
display:flex;
`
const FieldName= styled.div`
    
`
const FieldValue=styled.div`
    
`
const Actions=styled.div`
`





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
                <Button variant="outline info">Edit</Button>
                <Button variant="outline success">Save</Button>
            </Actions>

        </Container>
    )
}
export default ProfileRow