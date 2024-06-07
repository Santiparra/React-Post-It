import Post from "./Post";
import AddPost from "./AddPost"
import { useState } from "react";

//Se importa para generar classes para css unicos
import classes from "../styles/PostList.module.css";

function PostList() {
    const [ enteredBody, setEnteredBody ] = useState("");
    const [ enteredAuthor, setEnteredAuthor ] = useState("");

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    return (
        <>
            <AddPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
            <ul className={classes.posts}>
                <Post author="Santi" body="React" />
                <Post author={enteredAuthor} body={enteredBody} />
            </ul>
        </>
    )
}

export default PostList