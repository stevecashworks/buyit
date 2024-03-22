import styled from "styled-components"

const Container=styled.div`
    width:100%;
    height: 100px;
    box-sizing:border-box;
    background-color: #e9e8e8;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 50px 120px;
`
const PageDetail=styled.div`
    text-transform:uppercase;
    color:rgb(0,0,0,0.5);
    cursor:pointer;
`

const PageTitle=()=>{
return(
    <Container>
        <PageDetail>Product</PageDetail>
        <PageDetail>Home/Product</PageDetail>

    </Container>
)
}
export default PageTitle