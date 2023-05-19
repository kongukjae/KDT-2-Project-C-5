async function formFetch(reqMethod, formData, url) {
  try {
    const response = await fetch(url, {
      // HTTP 요청 메서드 지정
      method: reqMethod,
      // HTTP 요청 헤더 지정
      // 요청 본문에 클라이언트가 서버에 JSON 형태의 데이터를 담아 보낼 것을 명시
      headers: { "Content-Type": "application/json" },
      // HTTP 요청 본문에 담을 데이터를 지정
      // 작성한 form 객체를 JSON 형태의 문자열로 변환하여 본문에 보냄
      body: JSON.stringify(formData),
    });
    // 응답이 성공적이었을 경우
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("전송에 실패하였습니다.");
    }
  } catch (err) {
    console.log(err);
    throw err; // 오류를 호출자에게 전달.
  }
}

export default formFetch;
