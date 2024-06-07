import { Link } from 'react-router-dom';
import { MdPostAdd, MdMessage } from 'react-icons/md';


import classes from '../styles/MainHeader.module.css';

function MainHeader() {
  
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link to="/add-post" className={classes.button} >
          <MdPostAdd size={18} />
          Nueva Nota
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;