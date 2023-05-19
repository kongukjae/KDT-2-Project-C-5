export let globalState = {
  tags: "",
  DB: {
    "bookreview": [
      {
        "index": 1,
        "userid": "dgchoi3904",
        "username": "대건씌",
        "userpic": null,
        "booktitle": "개리포터와 개법사의 뼈",
        "bookcover": null,
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
        "index": 2,
        "userid": "dongju97",
        "username": "동주팀장",
        "userpic": null,
        "booktitle": "쟤와벌",
        "bookcover": null,
        "bookauthor": null,
        "bookpublisher": null,
        "bookrelease": null,
        "isbn": null,
        "createdtime": "2023-05-04T06:41:17.000Z",
        "modifiedtime": "2023-05-08T08:16:57.000Z",
        "summery": "짧은 리뷰 내용",
        "body": "리뷰 내용",
        "tag": "#태그",
        "viewcount": 0,
        "likecount": 0
      },
      {
        "index": 3,
        "userid": "dgchoi3904",
        "username": "대거니",
        "userpic": null,
        "booktitle": "책 이름",
        "bookcover": null,
        "bookauthor": null,
        "bookpublisher": null,
        "bookrelease": null,
        "isbn": null,
        "createdtime": "2023-05-08T08:43:57.000Z",
        "modifiedtime": "2023-05-08T08:43:57.000Z",
        "summery": "짧은 리뷰 내용",
        "body": "리뷰 내용",
        "tag": null,
        "viewcount": 0,
        "likecount": 0
      },
      {
        "index": 4,
        "userid": "admin",
        "username": "관리자01",
        "userpic": null,
        "booktitle": "이건 책이란다",
        "bookcover": null,
        "bookauthor": null,
        "bookpublisher": null,
        "bookrelease": null,
        "isbn": null,
        "createdtime": "2023-05-08T08:43:57.000Z",
        "modifiedtime": "2023-05-08T08:43:57.000Z",
        "summery": "짧은 리뷰 내용",
        "body": "리뷰 내용",
        "tag": null,
        "viewcount": 0,
        "likecount": 0
      },
      {
        "index": 5,
        "userid": "test01",
        "username": "test01",
        "userpic": null,
        "booktitle": "바보도 이해하는 책쓰기",
        "bookcover": null,
        "bookauthor": null,
        "bookpublisher": null,
        "bookrelease": null,
        "isbn": null,
        "createdtime": "2023-05-09T07:29:02.000Z",
        "modifiedtime": "2023-05-09T07:29:02.000Z",
        "summery": "바보도 이해할수 있었다!",
        "body": "이 책은 바보도 이해할 수 있는 언어로 작성되어 있어 원숭이라도 이해할 수 있는 내용을 담고 있습니다.",
        "tag": null,
        "viewcount": 0,
        "likecount": 0
      },
      {
        "index": 6,
        "userid": "test01",
        "username": "test01",
        "userpic": null,
        "booktitle": "깃이제일쉬웠어요",
        "bookcover": null,
        "bookauthor": null,
        "bookpublisher": null,
        "bookrelease": null,
        "isbn": null,
        "createdtime": "2023-05-09T07:38:51.000Z",
        "modifiedtime": "2023-05-09T07:38:51.000Z",
        "summery": "깃은 참 쉽구나!",
        "body": "이것은 깃이라는 것을 깨달았습니다!",
        "tag": null,
        "viewcount": 0,
        "likecount": 0
      },
      {
        "index": 7,
        "userid": "test01",
        "username": "test01",
        "userpic": null,
        "booktitle": "그래서 지금 뭘했지?",
        "bookcover": null,
        "bookauthor": null,
        "bookpublisher": null,
        "bookrelease": null,
        "isbn": null,
        "createdtime": "2023-05-10T00:29:33.000Z",
        "modifiedtime": "2023-05-10T00:29:33.000Z",
        "summery": "넌 대체 무엇을 했느냐?",
        "body": "뭐 했는지 모르겠는데이글을 쓰게 됬습니다.",
        "tag": null,
        "viewcount": 0,
        "likecount": 0
      }
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
  },
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
