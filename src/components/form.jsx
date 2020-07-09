import React, { useContext, useState } from 'react';
import { BlogContext } from '../context/BlogContext';
import swal from 'sweetalert';


const BlogFrom = () => {
    const { dispatch } = useContext(BlogContext);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [err,setErr] = useState("");
    const [errCont,setErrContent] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        if(title === "" && content === ""){
            setErr("Please fill blog Title")
            setErrContent("Please fill blog Content")
            return
        }else if(title === ""){
            setErr("Please fill blog Title")
            return
        }else if(content === ""){
            setErrContent("Please fill blog Content")
            return
        }else{
        dispatch({ type: 'ADD_BLOG', blog: { title, content }});
        }
        swal({
            title: "Success",
            text: "Post published succesfully. Click published button to view",
            icon: "success",
            buttons: true,
            dangerMode: false,
          })
        setTitle('');
        setContent('');
    }

    function errTitle(e){
        if(e.target.value){
            setErr("")
            setTitle(e.target.value)
        }else{
            setErr("Please fill blog Title")
            setTitle("")
        }
    }

    function errContent(e){
        if(e.target.value){
            setErrContent("")
            setContent(e.target.value)
        }else{
            setErrContent("Please fill blog Content")
            setContent("")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="blog title" value={title}
                onChange={(e) => errTitle(e,"title")} />
                <p style={{color:"red"}}>{err}</p>
            <textarea placeholder="blog Content" value={content}
                onChange={(e) => errContent(e,"content")} />
                   <p style={{color:"red"}}>{errCont}</p>
            <input type="submit" id="publish" value="Publish Blog" />
        </form>
    );
}

export default BlogFrom;