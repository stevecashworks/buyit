import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import app from "./firebase-config.ts";
import React from "react";
import { previewType, progressType } from "../pages/vendor/components/addProduct/addProduct.tsx";
const storage = getStorage(app);
type fileProps={
    file:File;
    setUrls:React.Dispatch<React.SetStateAction<previewType[]>>;
    prevState:previewType[];
    productName:string;
    setProgress:React.Dispatch<React.SetStateAction<progressType>>;
    id:string;
}
const uploadFile=({file,setUrls,setProgress, prevState,productName, id}:fileProps)=>{
  setProgress("loading")

    
    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, productName + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
  "state_changed",
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log("Upload is " + progress + "% done");
    switch (snapshot.state) {
      case "paused":
        console.log("Upload is paused");
        break;
        case "running":
            console.log("Upload is running");
            break;
        }
    },
    (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    setProgress("failed")
    switch (error.code) {
        case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
            case "storage/canceled":
                // User canceled the upload
                break;
                
                // ...
                
                case "storage/unknown":
                    // Unknown error occurred, inspect error.serverResponse
                    break;
    }
  },
  () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setProgress("success")
          setUrls(prevState.map(pic=>{
            if(pic.id===id){
              return {...pic,img:downloadURL}
            }
            return pic
          }));
        });
  }
);

    }
    export  default uploadFile