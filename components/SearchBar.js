import React,{useState} from 'react';
// import sendQuery from '../src/mariadb';

const container={
  display:"flex",
  width:"100%",
  height:"50px",
  justifyContent:"center",
  alignItems:"center",
}

const box={
  display:"flex",
  flexDirection:"row",
  width:"100%",
  height:"80%",
  borderRadius:"10px",
  backgroundColor:"#B0A7A7",
  justifyContent:"space-around",
  alignItems:"center",
}

const inputSt={
  backgroundColor:"#D9D9D9",
  border:"none",
  borderRadius:"5px",
  width:"85%",
  height:"70%"
}

const imgBox={
  display:"flex",
  width:"10%",
  height:"70%",
  backgroundColor:"#D9D9D9",
  borderRadius:"5px"
}

const imgStyle = {
  width: '20px',
  height: '20px',
  marginLeft: '3px'
}


//도서,태그 검색 페이지의 검색바를 담당하는 컴포넌트
//김동주
const searchBar=()=>{

  const [searchQuery, setSearchQuery] = useState('');
// 돋보기 버튼 클릭 시 처리할 로직
  const handleSearch = async () => {
    const response = await sendQuery(`SELECT * FROM books WHERE title LIKE '%${searchQuery}%' OR author LIKE '%${searchQuery}%'`)
    // response.json()는 JSON형식을 Javascript 객체로 변환시켜주는 메서드이다.
    // data = 객체
    const data = response.json();
    
    //(검색 결과를 처리하는 부분)
    
  };

  return(
    <div style={container}>
      <div style={box}>
          <input style={inputSt}type='text' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></input>
          <div style={imgBox}>
            <button onClick={handleSearch}><img style={imgStyle} src="/img/reading_glasses.png"></img></button>
          </div>
      </div>
    </div>
  );
}


export default searchBar;