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
   console.log(e)
  }
  const onChangeHandlerBody = (e)=> {
    setBody(e.target.value);

  }
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setId(id +1);
    setTitle("");
    setBody("");
    dispatch(createlist(id, title, body));
  };

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
      <button className="add-button" onClick={onSubmitHandler} type = "createlist">추가하기</button>
    </form>
  );
}

export default Form;
