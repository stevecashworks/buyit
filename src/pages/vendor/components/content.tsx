import styled from "styled-components";
import Orders from "./orders/order";
import Dashboard from "./dashboard";
import ProductList from "./productList/productList";
import Profile from "./profile/profile";
import AddProduct from "./addProduct/addProduct";
import responsive from "../../../responsive";

const Container = styled.div`
    width:900px;
    height:700px;
    ${responsive(`
        height:auto;
        padding-bottom:50px;
    `)}
   /* background-color: #e7f3d7; */
`;
export const contentData={
    "dashboard":Dashboard,
    "products":ProductList,
    "orders":Orders,
    "profile":Profile,
    "settings":ProductList,
    "add product":AddProduct
    
}
 export type contentKey= keyof typeof contentData
type slideProps={
    currentSlide:contentKey
}

const Content=({currentSlide}:slideProps)=>{
    const CurrentContent=contentData[currentSlide]
    return(
        <Container>
            <CurrentContent>

            </CurrentContent>
            {/* <Dashboard></Dashboard> */}
            {/* <ProductList/> */}
            {/* <Orders/> */}
            {/* <CurrentContent/> */}
            {/* <Dashboard/> */}

        </Container>
    )
}
export default  Content