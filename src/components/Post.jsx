//Se importa para generar classes para css unicos
import classes from "../styles/Post.module.css";

function Post(props) {

    return (
        <div className={classes.post}>
            <p className={classes.author}>{props.author}</p>
            <p className={classes.text}>{props.body}</p>
        </div>
    );
}

export default Post;
