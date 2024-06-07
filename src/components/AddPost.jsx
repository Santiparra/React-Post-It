import classes from "../styles/AddPost.module.css";

function AddPost(props) {
  
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Texto</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange}/>
      </p>
      <p>
        <label htmlFor="name">Su nombre</label>
        <input type="text" id="name" required onChange={props.onAuthorChange}/>
      </p>
    </form>
  );
}

export default AddPost;