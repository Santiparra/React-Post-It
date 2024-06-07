import Post from "./Post";
import AddPost from "./AddPost"
import Modal from "./Modal";
import { useState } from "react";

//Se importa para generar classes para css unicos
import classes from "../styles/PostList.module.css";

function PostList({ isPosting, onStopPosting }) { 
    const [ enteredBody, setEnteredBody ] = useState("");
    const [ enteredAuthor, setEnteredAuthor ] = useState("");

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    

//    let modalContent;

//    if (modalIsVisible) {
//        modalContent = (
//            <Modal onClose={hideModalHandler}>
//                <AddPost 
//                    onBodyChange={bodyChangeHandler} 
//                    onAuthorChange={authorChangeHandler} 
//                />
//            </Modal>
//        );
//    }

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <AddPost
                        onBodyChange={bodyChangeHandler}
                        onAuthorChange={authorChangeHandler}
                    />
                </Modal>
            )}
            <ul className={classes.posts}>
                <Post author="Santi" body="React" />
                <Post author={enteredAuthor} body={enteredBody} />
            </ul>
        </>
    )
}

export default PostList