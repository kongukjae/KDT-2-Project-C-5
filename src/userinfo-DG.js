//받은 사용자 데이터를 표 형식 HTML 엘리먼트로 마크업 하는 구문.
export default function userInfoTableData(userInfoData){
  let table = `<table>
    <thead>
      <tr>
        <th>인덱스</th>
        <th>사용자 ID</th>
        <th>사용자 암호</th>
        <th>사용자 Email</th>
        <th>사용자 닉네임</th>
        </tr>
    </thead>
    <tbody>
    `;
  //존재하는 인덱스만큼 반복한다.
  userInfoData.forEach(obj=>{
    table += `  <tr>
        <th>${obj['id']}</th>
        <th>${obj['user-id']}</th>
        <th>${obj['user-pwd']}</th>
        <th>${obj['user-email']}</th>
        <th>${obj['user-name']}</th>
      </tr>
    `;
  })
  table += `</tbody>
  </table>`
  return table;
}
function userInfoTable(userInfoData){
  const users = window.document.getElementById('users');
  users.innerHTML = userInfoTableData(userInfoData);
};
