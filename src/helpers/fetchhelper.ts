import { responseType } from "../pages/Register/register";

type fetch_arguments={
method:"get"|"post",
body?:object,
url:string,
token?:string|undefined|null
onError?:(err:string)=>void,
onSuccess?:(data:responseType)=>void,
}

const fetch_helper=({method,body,url,token,onError,onSuccess}:fetch_arguments)=>{
 const postOptions = {
    method,
   headers: token
     ? { "Content-Type": "application/json", token }
     : { "Content-Type": "application/json",  },
     body:JSON.stringify(body)
     
 };

 const options=method==="post"?postOptions:{}
        fetch(url,options).then(res=>res.json()).then(data=>{
            console.log(data)
            if(data.success){
                if (onSuccess) {
                  onSuccess(data);
                }
            }
            else{
                alert(data.result)
            }
            
        }).catch(err=>{
            if(onError){
                onError(err.message)
            }
        })
    
    
}



export default fetch_helper