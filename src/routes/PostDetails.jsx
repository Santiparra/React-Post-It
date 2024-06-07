import { useLoaderData, Link } from 'react-router-dom';

import Modal from '../components/Modal';
import classes from '../styles/PostDetails.module.css';

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>No se encontro ningun post</h1>
          <p>Desafortunadamente el post requerido no fue encontrado.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Correcto
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

export async function loader({params}) {
  const response = await fetch('http://localhost:8080/posts/' + params.postId);
  const resData = await response.json();
  return resData.post;
}