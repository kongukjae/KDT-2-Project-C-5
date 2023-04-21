const html = `

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bookstagram</title>
</head>
<body>
  <div>Bookstagram</div>
<form action="signup.php" method="post" enctype="multipart/form-data">
<label for="photo">프로필 사진:</label>
<input type="file" name="photo" id="photo" accept="image/*"><br>

<label for="id">ID:</label>
<input type="text" name="id" id="id" required><br>
<!-- <input> 태그의 required 속성은 폼 데이터(form data)가 서버로 제출되기 전 반드시 채워져 있어야 하는 입력 필드를 명시한다. -->
<label for="email">email:</label>
<input type="email" name="email" id="email" required><br>

<label for="username">user name:</label>
<input type="text" name="username" id="username" required><br>

<label for="password">password:</label>
<input type="password" name="password" id="password" required><br>

<label for="password_check">passwordcheck:</label>
<input type="password" name="password_check" id="password_check" required><br>

<input type="submit" value="submit">
</form>`;
// export default html;
module.exports = html;
