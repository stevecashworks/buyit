import styled from "styled-components"
import {useState} from "react"
import  flask from "../../../../assets/products/flask.png"
import sneaker from "../../../../assets/products/sneakers.png"
import ProductCard from "../productcard/productCard"
import responsive from "../../../../responsive"

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
const sampleProduct={name:"flask", desc:"Retains temperature", price:30, src:flask, rating:5}
const sampleProduct2={name:"Sneakers", desc:"Comfortable sneakers", price:30, src:sneaker, rating:5}
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
overflow-x: hidden;
width:100%;
height:2000px;

${responsive(`
  height:6100px;
  padding-top:20px;
`)}


`
const ProductsCon= styled.div<{selected:boolean}>`
display:flex;
flex-wrap:wrap;
justify-content: space-between;
gap:30px;
display: flex;
position:absolute;
top:0;
left:0;
transition:all 0.5s ease 0.2s;
width:100%;
background:rgb(0,0,0,0.1);
transform:translateX(${prop=>prop.selected?"100%":"0px"});
${responsive(`
  flex-direction:column-reverse;
  height:auto;
  align-items:center;
  justify-content:start;
  padding-top:40px;
  padding-bottom:40px;
  width:100vw;
`)}
`


const Products=()=>{
    const productData= []
    const productData2= []
    
    for(let i=0;i<12;i++ ){
        productData.push(sampleProduct)
    }

    for (let i = 0; i < 12; i++) {
      productData2.push(sampleProduct2);
    }
const  [group, setGroup]= useState("new")
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
        
        <ProductCategoryCon>
          <ProductsCon selected={group === "new"}>
            {productData.map((product) => (
              <ProductCard {...product} />
            ))}
          </ProductsCon>

          <ProductsCon selected={group === "featured"}>
            {productData2.map((product) => (
              <ProductCard {...product} />
            ))}
          </ProductsCon>
        </ProductCategoryCon>
      </Container>
    );
}
export default Products