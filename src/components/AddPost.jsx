import classes from "../styles/AddPost.module.css";

import { useState } from "react";

function AddPost({ onCancel, onAddPost }) {
  const [ enteredBody, setEnteredBody ] = useState("");
  const [ enteredAuthor, setEnteredAuthor ] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor
    };
    onAddPost(postData);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Texto</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
      </p>
      <p>
        <label htmlFor="name">Su nombre</label>
        <input type="text" id="name" required onChange={authorChangeHandler}/>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancelar</button>
        <button>Enviar</button>
      </p>
    </form>
  );
}

export default AddPost;