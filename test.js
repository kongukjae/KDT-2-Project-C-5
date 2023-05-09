fetch("http://books.google.com/books/content?id=d_oeDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", {"Content:type":"image/jpeg"})
.then(result=>{
    return result.blob();
})
.then(blob=>{
    const imageUrl = URL.createObjectURL(blob);
    const imgElement = document.createElement("img"); // <img> 태그 생성
    imgElement.src = imageUrl; // 이미지 URL 설정
    document.body.appendChild(imgElement); // <img> 태그를 body에 추가
})