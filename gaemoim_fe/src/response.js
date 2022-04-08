// response.js
export const RESP = {
  POSTGET: {
    ok: true,
    result: [
      {
        postId: 4,
        title: "제목4",
        nickName: "니노막시무스",
        createdAt: "2022-04-08",
        FrontNum: 2,
        BackNum: 3,
        completed: false,
      },
      {
        postId: 3,
        title: "제목3",
        nickName: "카이저쏘제",
        createdAt: "2022-04-08",
        FrontNum: 2,
        BackNum: 4,
        completed: true,
      },
    ],
  },
  POSTPOST: {
    ok: true,
    result: [
      {
        result: "success",
      },
    ],
  },
  POSTPOSTIDGET: {
    ok: true,
    result: [
      {
        postId: 1,
        title: "제목1",
        nickName: "니노막시무스",
        createdAt: "2021-12-14",
        FrontNum: 2,
        BackNum: 3,
        completed: false,
        post_content: "프로젝트 같이 할 분 모집합니다!",
      },
    ],
  },
  COMMENTSPOSTIDGET: {
    ok: true,
    result: [
      {
        postId: 1,
        userId: "1",
        nickName: "test1",
        commentId: 1,
        comment_content: "저요저요! 댓글내용1",
      },
      {
        postId: 1,
        userId: "2",
        nickName: "test2",
        commentId: 2,
        comment_content: "저요저요! 댓글내용2",
      },
    ],
  },
  COMMENTSPOSTIDPOST: {
    ok: true,
    result: [
      {
        result: "success",
      },
    ],
  },
  COMMENTSIDGET: {
    ok: true,
    result: [
      {
        postId: 1,
        userId: "1",
        nickName: "test1",
        commentId: 1,
        comment_content: "저요저요! 댓글내용1",
      },
    ],
  },
  COMMENTSIDPUT: {
    ok: true,
    result: [
      {
        result: "success",
      },
    ],
  },
  COMMENTSIDDELETE: {
    ok: true,
    result: [
      {
        result: "success",
      },
    ],
  },
  REGISTERPOST: {
    ok: true,
    result: [
      {
        result: "success",
      },
    ],
  },
  LOGINPOST: {
    ok: true,
    result: [
      {
        result: "success",
        token: "token",
      },
    ],
  },
  IDCHECKPOST: {
    ok: true,
    result: [
      {
        result: false,
      },
    ],
  },
  ISLOGINGET: {
    ok: true,
    result: [
      {
        nickName: "카이저쏘제",
      },
    ],
  },
};
