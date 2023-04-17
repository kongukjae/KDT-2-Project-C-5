//5개의 임의의 8문자~11문자 문자열 만들기.
//5개의 문자열 저장용 배열
let pwdBox = [];
//5번을 반복하여 임의의 문자열을 만드는 구문
for(let i = 0; i < 5; i++){
//여기에 임의로 문자열을 만들려고 하니 정규식(regEXP)를 써야할 것 같다.
//RegExp를 쓰기엔 시간이 오래걸린다. 연구시간을 고려해 추후 과정으로 생각하고 지금은 임의의 기본 텍스트만을 넣어 테스트한다.
  pwdBox.push(`SeDongSerU${i+1}`)
}
//제대로 저장되었는지 테스트.
console.log(pwdBox);

//5개의 base64로 인코딩된 문자열을 저장하는 배열
let base64Box = [];
for(let i = 0; i < 5; i++){
  //pwdBox의 매 인덱스마다 문자열을 받아 base64로 변환 후, 이를 base64Box에 push.
    base64Box.push(atob(pwdBox[i]));
}
//제대로 인코딩되어 저장되었는지 테스트.
console.log(base64Box);

console.log(pwdBox[0].length);
console.log(pwdBox[1].length);
console.log(pwdBox[2].length);
console.log(pwdBox[3].length);
console.log(pwdBox[4].length);


console.log(base64Box[0].length);
console.log(base64Box[1].length);
console.log(base64Box[2].length);
console.log(base64Box[3].length);
console.log(base64Box[4].length);
console.log(typeof(base64Box[0]));
console.log(atob("ThisIsSpart").length);