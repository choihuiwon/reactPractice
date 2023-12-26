import { useState, useRef } from "react";

const DiaryEditor = () => {
  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: "",
  });

  //   const [author, setAuthor] = useState("");
  //   const [content, setContent] = useState("");

  const handleChangeState = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      //   alert("작성사는 최소 1글자 이상 입력해주세요.");
      // focus
      authorInput.current.focus();
      return;
    }

    if (state.content.length < 5) {
      //   alert("일기 본문은 최소 5글자 이상 입력해주세요.");
      // focus
      contentInput.current.focus();
      return;
    }

    // console.log(state);

    alert("저장 성공");
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={handleChangeState}
          //   {(e) => {
          // setState({
          //   ...state,
          //   author: e.target.value,
          //   //   content: state.content,
          // });
          //   }}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
          // {(e) => {
          // setState({
          //   ...state,
          //   //   author: state.author,
          //   content: e.target.value,
          // });
          //   }}
        />
      </div>
      <div>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <div>
          <button onClick={handleSubmit}>일기 저장하기</button>
        </div>
      </div>
    </div>
  );
};
export default DiaryEditor;
