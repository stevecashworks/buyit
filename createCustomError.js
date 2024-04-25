const  createCustomError=(message,code )=>{
    const customCode= code||500;
    const customMessage=message||"Oops an error occured"
    return {code: customCode, message:customMessage}
    
}
export default createCustomError