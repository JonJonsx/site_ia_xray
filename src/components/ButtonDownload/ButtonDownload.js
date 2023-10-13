import React from "react";
import { IconButton } from "@chakra-ui/react";
import { Download } from "react-feather";


export default function ButtonDownload(props) {
  const { imageURL, imageName } = props
  const downloadImage = () => {
    fetch(imageURL,{
      headers: { 'responseType': 'blob' }
    })
      .then((response) =>  {
        // debugger 
        return response.blob()} )
     
      .then((blob) => {
        const file = new File([blob], { type: "image/jpg" });
        const data = window.URL.createObjectURL(file);
        const a = document.createElement('a');
        a.href = data;
        a.download = imageName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(data);
      }
    );
  };

  // const downloadImage = () => {
  //   const file = new File(["https://vencerocancer.org.br/wp-content/uploads/2013/09/voc-exames-radiografia-eyenigelen-822x463.jpg"], { type: "image/jpg" });
  //   const data = window.URL.createObjectURL(file)
  //   const a = document.createElement('a');
  //   a.href = data;
  //   a.download = imageName;
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  // };

  return (
    <div>
      <IconButton background="#3498db" color="#ffffff" icon={<Download />} onClick={downloadImage}/>
    </div>
  );
};



