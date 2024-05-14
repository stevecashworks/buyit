import styled from "styled-components"
import {useState, useRef, useEffect} from "react"
import ProductCard from "../productcard/productCard"
import responsive from "../../../../responsive"
import { productListType } from "../hotdeals/hotDeals"

const Container=styled.div`
    width:80vw;
    margin:0 auto;
    ${responsive(`
      width:100vw;
    `)}
`
const ProductTop=styled.div`
    margin:20px auto;
    width:100%;
    display:flex;
    justify-content:space-between;
    ${responsive(`
       flex-direction:column;
       gap:20px; 
       align-items:center;
    `)}
`
const Choices= styled.div`
display:flex;
gap:20px;
`

const Choice=styled.p<{selected:boolean}>`
    background-color:${props=>props.selected?"var(--info)":"transparent"} ;
    color:${props=>props.selected?"white":"black"} ;
    transition:all 0.2s linear;
    width:200px;
    height:40px;
    border-radius:15px;
    display:flex;
    align-items: center;
    justify-content:center;
    cursor:pointer;
    ${responsive(`
      width:150px;
    `)}

`


const ProductTopText=styled.p`
    text-transform:uppercase;
`
const ProductCategoryCon=styled.div`
position: relative;
display:flex;
overflow: hidden;
width:100%;
/* background:red; */



`
const ProductsCon = styled.div<{ selected: boolean }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  transition: transform 0.5s ease;
  transform: ${(props) =>
    props.selected ? "translateX(0)" : "translateX(-100%)"};
  width: 100%;
  overflow: hidden;
  position:absolute;
  

  ${responsive(`
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding-top: 40px;
    padding-bottom: 40px;
  `)}
`;


const Products=({products}: productListType)=>{
  
const newProducts= products.filter(prod=>prod.mileage==="new")
const featuredProducts= products.filter(prod=>prod.mileage==="featured")
  const  categoryConRef= useRef<HTMLDivElement>(null)
  const newProductsRef=useRef<HTMLDivElement>(null)
  const featuredProductsRef=useRef<HTMLDivElement>(null)
    
    
    const  [group, setGroup]= useState("new")
    useEffect(()=>{
      const activeCon=group==="new"?newProductsRef.current:featuredProductsRef.current;
      
      if(categoryConRef.current&& activeCon){
        const  height= activeCon.offsetHeight+100
        categoryConRef.current.style.height=`${height}px`
        
        
      }
      
    },[group,products])
    return (
      <Container>
        <ProductTop>
          <ProductTopText>recommended Just for you</ProductTopText>
          <Choices>
            <Choice
              onClick={() => {
                setGroup("new");
              }}
              selected={group === "new"}
            >
              New Products
            </Choice>
            <Choice
              onClick={() => {
                setGroup("featured");
              }}
              selected={group === "featured"}
            >
              Featured Products
            </Choice>
          </Choices>
        </ProductTop>
        <hr />
        
        <ProductCategoryCon ref={categoryConRef}>
          <ProductsCon ref={newProductsRef} selected={group === "new"}>
            {newProducts.map((product) => (
              <ProductCard {...product} />
            ))}
          </ProductsCon>

          <ProductsCon ref={featuredProductsRef} selected={group === "featured"}>
            {featuredProducts.map((product) => (
              <ProductCard {...product} />
            ))}
          </ProductsCon>
        </ProductCategoryCon>
      </Container>
    );
}
export default Products