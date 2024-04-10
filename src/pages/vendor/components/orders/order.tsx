import styled from "styled-components";
import {Table} from "react-bootstrap"
import OrderRow from "./components/orderRow";

const Container=styled.div`
height:100%;
background-color: #ececec;
width:900px;
color:rgb(0,0,0,0.7);
`

const TopCon=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;
    padding:20px 40px;
    box-sizing:border-box;

`
const Button=styled.a`
    color:white;
    background-color:var(--info);
    width:200px;
    height:40px;
    text-decoration:none;
    display:flex;
    font-weight:bold;
    align-items:center;
    justify-content:center;

`
const PageTitle=styled.div`
    font-size:20px;
`
const TableCon=styled.div`
width:600px;
margin:20px auto;
position:relative;
top:60px;
/* background-color:white; */
    
`
 const THead= styled.thead`
 border-bottom:1px solid rgb(0,0,0,0.2);
 `
 const TBody= styled.tbody``
 const Th=styled.th``
 const sampleRow={ orderId:"#33544",name:"Fashion Sneakers",price:250}


 const rowsData= new Array(7).fill(sampleRow)
const Orders=()=>{
return (
  <Container>
    <TopCon>
      <PageTitle>Orders</PageTitle>
      <Button>Add Product</Button>
    </TopCon>
    <TableCon>
      <Table responsive>
        <THead>
          <Th> OrderId</Th>
          <Th> ProductName</Th>
          <Th> Status</Th>
          <Th> Price</Th>
        </THead>
        <TBody>
          {rowsData.map((row) => (
            <OrderRow {...row} />
          ))}
        </TBody>
      </Table>
    </TableCon>
  </Container>
);
}
export default Orders