const xhr = new XMLHttpRequest();
const url =
  "ttps://www.nl.go.kr/NL/search/openApi/search.do?key=&kwd=%ED%86%A0%EC%A7%80";
xhr.open("POST", url);
xhr.setRequestHeader("content-type", "appli");
xhr.onload = () => {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.response);
    console.log(data.data);
  }
};
