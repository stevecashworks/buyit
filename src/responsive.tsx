const responsive=(styles:string)=>{
return `
    @media (max-width:500px){
        ${styles}
    }
`


}
export default responsive