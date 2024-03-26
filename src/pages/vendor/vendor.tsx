import styled from "styled-components"
import Header from "../home/components/header/header"
import SearchAndFav from "../home/components/searchandfav/SearchAndFav"

const  Container=styled.div`
    width:100%;
`
const Vendor=()=>{
 return(
    <Container>
    <Header/>
    <SearchAndFav/>
    </Container>
 )   
}
export default Vendor