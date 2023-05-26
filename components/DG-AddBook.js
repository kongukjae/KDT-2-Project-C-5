import React, {useState} from 'react';

// import SearchBar from './DJ-SearchBar'
import SelectBooks from '../JE_SelectBooks'
import './AddBook.css'



const crossBox={
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  width:"100px",
  height:"100px",
  border:"1px solid black"

}

const container={
  display:"flex",
  flexDirection:"column",
  width:"100%",
  height:"50%",
  justifyContent:"space-around",
  alignItems:"center"
}


const searchBox={
  display:"flex",
  width:"100%"

}
//리뷰 작성 페이지 기능 내에서 십자가 버튼과 검색바를 담당하는 컴포넌트
const AddBook=()=>{

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return(
    <div style={container}>
    <div style={crossBox}>
      <div id="cross"></div>
    </div>
    {/* <label htmlFor="booktitle">
      Book Title:
      <input type="text" id="booktitle" name="booktitle"/>
    </label>
    <label htmlFor="bookcover">
      Book Cover:
      <input type="file" id="bookcover" name="bookcover" onChange={handleFileChange}/>
    </label>
    <label htmlFor="bookauthor">
      Book Author:
      <input type="text" id="bookauthor" name="bookauthor"/>
    </label>
    <label htmlFor="bookpublisher">
      Book Publisher:
      <input type="text" id="bookpublisher" name="bookpublisher"/>
    </label>
    <label htmlFor="bookrelease">
      Book Release:
      <input type="text" id="bookrelease" name="bookrelease" />
    </label>
    <label htmlFor="isbn">
      ISBN:
      <input type="text" id="isbn" name="isbn" />
    </label> */}

    <div style={searchBox}>
      {/* 지은씨의 SelectBook 가져옴  */}
      <SelectBooks />
      {/* <SearchBar /> */}
      
    </div>
  </div>
  );
}

export default AddBook;