import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import React, { useState, useEffect } from "react";

const dummyList = [
  {
    id: 1,
    author: "최희원",
    content: "Hi~",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "박진혁",
    content: "Hi~",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "감자",
    content: "Hi~",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "아깽",
    content: "Hi~",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 5,
    author: "박이",
    content: "Hi~",
    emotion: 2,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <h2>일기장</h2>
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
