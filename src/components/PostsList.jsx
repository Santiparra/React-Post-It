import Post from "./Post";

import { useLoaderData } from "react-router-dom";

//Se importa para generar classes para css unicos
import classes from "../styles/PostList.module.css";

function PostList() {    
    const posts = useLoaderData();

    return (
        <>
            {posts.length > 0 && (
                <ul className={classes.posts}>
                {posts.map((post) => <Post key={post.id} id={post.id} author={post.author} body={post.body} />) }
            </ul>
            )}
            {posts.length === 0 && (
                <div style={{ textAlign:"center", color:"white" }}>
                    <h2>Aún no se han agregado notas</h2>
                </div>
            )}
        </>
    )
}

export default PostList