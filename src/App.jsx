import { useState } from 'react';

import PostList from "./components/PostsList";
import MainHeader from "./components/MainHeader"

function App() {
  const [ modalIsVisible, setVisibility ] = useState(false);

  function hideModalHandler() {
    setVisibility(false);
  }

  function showModalHandler() {
    setVisibility(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostList 
          isPosting={modalIsVisible} 
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;
