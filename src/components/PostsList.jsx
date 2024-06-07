import Post from "./Post";
import AddPost from "./AddPost"
import Modal from "./Modal";

import { useState, useEffect } from "react";

//Se importa para generar classes para css unicos
import classes from "../styles/PostList.module.css";

function PostList({ isPosting, onStopPosting }) {    
    const [ posts, setPosts ] = useState([]);
    const [ isFetching, setisFetching ] = useState(false);

    useEffect( () => {
            async function fetchPosts() {
                setisFetching(true);
                const response = await fetch("http://localhost:8080/posts");
                const resData = await response.json();
                setPosts(resData.posts);
                setisFetching(false);   
            }
            
            fetchPosts();
    }, [] );

    function addPostHandler(postData) {
        fetch("http://localhost:8080/posts", {
            method: "POST",
            body:  JSON.stringify(postData),
            headers: {
                "Content-Type" : "application/json"
            }
        });
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <AddPost onCancel={onStopPosting} onAddPost={addPostHandler} />
                </Modal>
            )}
            {!isFetching && posts.length > 0 && (
                <ul className={classes.posts}>
                {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />) }
            </ul>
            )}
            {!isFetching && posts.length === 0 && (
                <div style={{ textAlign:"center", color:"white" }}>
                    <h2>Aún no se han agregado notas</h2>
                </div>
            )}
            {isFetching && (
                <div style={{ textAlign:"center", color:"white" }}>
                    <p>Cargando posts...</p>
                </div>
            )}
        </>
    )
}

export default PostList