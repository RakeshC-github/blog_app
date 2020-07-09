import React, { useState } from 'react';
import './index.css';
import BlogForm from './components/form';
import BlogList from './components/BlogList';
import BlogContextProvider from './context/BlogContext';

function App() {
  const [showForm, setshowForm] = useState(false);
  const [showBlogs, setshowBlogs] = useState(true);
  const addNewPost = () => {
    setshowForm(true);
    setshowBlogs(false);
  }
  const showPublishedBlog = () => {
    setshowForm(false);
    setshowBlogs(true);
  }
  return (
    <div>
    <header></header>
      <div className='container card'>
      <div className='row'>
        <button type="button home-button" id="newpost" onClick={addNewPost}>NEW POST</button>
        <button type="button contact-button" id="publish" onClick={showPublishedBlog}>PUBLISHED</button>
      </div>
      <div class="">
      <BlogContextProvider>
        {showForm && <BlogForm />}
        {showBlogs && <BlogList />}
      </BlogContextProvider>
      </div>
      </div>
    </div>
  );
}

export default App;
