import classes from "../styles/AddPost.module.css";
import Modal from "../components/Modal";

import { Link, Form, redirect } from "react-router-dom";

function AddPost( ) {

  return (
    <Modal>
      <Form method="post" className={classes.form} >
        <p>
          <label htmlFor="body">Texto</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Su nombre</label>
          <input type="text" name="author" id="name" required />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancelar
          </Link>
          <button>Enviar</button>
        </p>
      </Form>
    </Modal>
  );
}

export default AddPost;

export async function action ({request}) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body:  JSON.stringify(postData),
    headers: {
        "Content-Type" : "application/json"
    }
  });

  return redirect("/");
};