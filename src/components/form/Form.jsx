import React, { useState } from "react";
import "./style.css";
import {useDispatch} from "react-redux";
import {createlist} from "../../redux/modules/todo";

function Form() {

  const dispatch = useDispatch();
  const [title, setTitle ] = useState("");
  const [body, setBody ] = useState("");
  const [id, setId] = useState(3);

  const onChangeHandlerTitle = (e)=> {
    setTitle(e.target.value); 
   console.log(e.target.value)
  }
  const onChangeHandlerBody = (e)=> {
    setBody(e.target.value);

  }
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setId(id +1);
    setTitle("");
    setBody("");
    console.log(id, title, body)
    dispatch(createlist(id, title, body)); //1개 이상의 값은 딕셔너리 형태로 받아햐 함 , 왜 그전에는 그냥 됐지?..
  };

  //form 태그,   event.preventDefault();   -> onClick!
  return (

    <form onSubmit={onSubmitHandler} className="add-form">  
      <div className="input-group">
        <label className="form-label">제목</label>
        <input
          type="text"
          name="title"
          value={title}
          className="add-input input-body"
          onChange={onChangeHandlerTitle}
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          name="body"
          value={body}
          className="add-input"
          onChange={onChangeHandlerBody}
        />
      </div>
      {/* onClick={onSubmitHandler} 가 아니더라도 form 태그에 메소드로 인해 submit 과 reset이 됨 */}
      <button className="add-button" onClick={onSubmitHandler} type = "createlist">추가하기</button>
    </form>
  );
}

export default Form;
