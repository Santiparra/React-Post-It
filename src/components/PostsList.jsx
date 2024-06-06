import Post from "./Post";

//Se importa para generar classes para css unicos
import classes from "../styles/PostList.module.css";

function PostList() {
    return (
        <ul className={classes.posts}>
            <Post author="Santi" body="React" />
            <Post author="Leti" body="Reactjs" />
        </ul>
    )
}

export default PostList