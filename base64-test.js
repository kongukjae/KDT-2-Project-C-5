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
  //atob로 테스트한 것은 기본 base64를 기본 문자열로 바꾸는 것이었다. 이에 그 반대인 btoa로 변환하였다.
    base64Box.push(btoa(pwdBox[i]));
}
//제대로 인코딩되어 저장되었는지 테스트.
console.log(base64Box);

//문자열의 길이 차이를 알기위해 테스트.
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

console.log(btoa("AbCdEfGhI").length);
//숫자가 바뀐다고하여 길이가 바뀌는것으로는 보이지 않는다.
//글자수가 바뀔시 인코딩되는 길이가 바뀌는 것을 확인했다.
//8 -> 11문자
//위의 테스트는 atob로 인코딩하여 생긴 문제로서, 길이의 변하는 값이 다른것을 확인했다.

//btoa로 바꾸어 진행한 결과 : 각각 16문자로 저장됨.
//10~12문자를 입력했을 경우, 16개의 문자가 생긴다. 9문자일경우, 12개. 4개식 늘어났다.


for(let i = 0; i < base64Box.length; i++){
  //문제 확인! atob는 base64에서 latin code로 바꾸는 구문이었다!
  //이 문제를 해결하기위해 위의 구문을 변경하기로 한다.
}