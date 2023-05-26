
import bookcover1 from '../src/img/book-cover3.jpg';
import bookcover2 from '../src/img/book-cover4.jpg';
import bookcover3 from '../src/img/book-cover5.jpg';
import bookcover4 from '../src/img/book-cover6.jpg';
import bookcover5 from '../src/img/book-cover.jpg';
import bookcover6 from '../src/img/book-cover2.jpg';


export let globalState = {
  tags: "",
  reviewData:{
    bookTitle:"",
    review1:"",
    review2:"",
    tag:""
  },
  DB: {
    "bookreview": [
      {
        "index": 1,
        "userid": "dgchoi3904",
        "username": "대건씌",
        "userpic": null,
        "booktitle": "개리포터와 개법사의 뼈",
        "bookcover": bookcover1,
        "bookauthor": "롤링스파이더",
        "bookpublisher": "문학쇼츠",
        "bookrelease": "20230518",
        "isbn": "9781234567890",
        "createdtime": "2023-05-04T06:40:54.000Z",
        "modifiedtime": "2023-05-19T02:31:57.000Z",
        "summery": "짧은 리뷰 내용",
        "body": "리뷰 내용",
        "tag": "#없어!",
        "viewcount": 0,
        "likecount": 0
      },
      {
        index: 2,
        userid: "dongju97",
        username: "동주팀장",
        userpic: null,
        booktitle: "시장학개론",
        bookcover: bookcover2,
        createdtime: "2023-05-04T06:41:17.000Z",
        modifiedtime: "2023-05-08T08:16:57.000Z",
        summery: "이 책은 과거와 현재, 미래의 모든 시장을 위한 실무 지침서다.",
        body: "리뷰 내용",
        tag: "#태그",
        viewcount: 2000,
        likecount: 700,
      },
      {
        index: 3,
        userid: "dgchoi3904",
        username: "대거니",
        userpic: null,
        booktitle: "메리골드 마음 세탁소",
        bookcover: bookcover3,
        createdtime: "2023-05-08T08:43:57.000Z",
        modifiedtime: "2023-05-08T08:43:57.000Z",
        summery:
          "마음에 묻은 얼룩을 마법처럼 지워드립니다. 한국형 힐링 소설의 결정판!",
        body: "리뷰 내용",
        tag: null,
        viewcount: 200,
        likecount: 80,
      },
      {
        index: 4,
        userid: "admin",
        username: "관리자01",
        userpic: null,
        booktitle: "아버지의 해방일지",
        bookcover: bookcover4,
        createdtime: "2023-05-08T08:43:57.000Z",
        modifiedtime: "2023-05-08T08:43:57.000Z",
        summery:
          "새삼스럽게 경탄스럽다!, 가슴 먹먹한 감동..정지아의 손끝에서 펼쳐지는 시대의 온기...",
        body: "리뷰 내용",
        tag: null,
        viewcount: 100,
        likecount: 20,
      },
      {
        index: 5,
        userid: "test01",
        username: "test01",
        userpic: null,
        booktitle: "도둑맞은 집중력",
        bookcover: bookcover5,
        isbn: null,
        createdtime: "2023-05-09T07:29:02.000Z",
        modifiedtime: "2023-05-09T07:29:02.000Z",
        summery: "내 집중력은 어디 있나",
        body: "왜 내 인생은 이모양이지? 생각하는 사람에게 힘이 되어줄 책",
        tag: null,
        viewcount: 5,
        likecount: 1,
      },
      {
        index: 6,
        userid: "test01",
        username: "test01",
        userpic: null,
        booktitle: "이끼숲",
        bookcover: bookcover6,
        isbn: null,
        createdtime: "2023-05-09T07:38:51.000Z",
        modifiedtime: "2023-05-09T07:38:51.000Z",
        summery: "삶의 의미란",
        body: "죽음 앞에서도 허무함에 빠지지 않으려면",
        tag: null,
        viewcount: 2,
        likecount: 0,
      },
      {
        index: 7,
        userid: "test01",
        username: "test01",
        userpic: null,
        booktitle: "그래서 지금 뭘했지?",
        bookcover: bookcover2,
        isbn: null,
        createdtime: "2023-05-10T00:29:33.000Z",
        modifiedtime: "2023-05-10T00:29:33.000Z",
        summery: "넌 대체 무엇을 했느냐?",
        body: "뭐 했는지 모르겠는데 이글을 쓰게 됬습니다.",
        tag: null,
        viewcount: 1,
        likecount: 0,
      },
    ],
    "userinfo": [
      {
        "user-id": "admin",
        "user-pwd": "qwe123",
        "user-email": "admin@email.com",
        "user-name": "관리자01",
        "user-pic": null
      },
      {
        "user-id": "dgchoi3904",
        "user-pwd": "qweasd123",
        "user-email": "dgchoi3904@gmail.com",
        "user-name": "대거니",
        "user-pic": null
      },
      {
        "user-id": "dongju97",
        "user-pwd": "qwe123",
        "user-email": "dongju97@email.com",
        "user-name": "동주팀장",
        "user-pic": null
      },
      {
        "user-id": "test",
        "user-pwd": "qwe123",
        "user-email": "tester@email.com",
        "user-name": "tester",
        "user-pic": null
      },
      {
        "user-id": "test01",
        "user-pwd": "qwe123",
        "user-email": "test01@email.com",
        "user-name": "test01",
        "user-pic": null
      }
    ]
  }
};
  
export function getUserInfo() {
  return globalState.DB.userinfo;
}
export function setUserInfo(arr) {
  globalState.DB.userinfo = arr;
}

export function getBookReview() {
  return globalState.DB.bookreview;
}
export function setBookReview(arr) {
  globalState.DB.bookreview = arr;
}

export function setTagString(str) {
  globalState.tags = str;
}

export function getTagString() {
  return globalState.tags;
}
