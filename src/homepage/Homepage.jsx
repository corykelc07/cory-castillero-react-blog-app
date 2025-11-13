import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";

function Homepage() {
    const [blogPost, setblogPost] = useState("");
    const [individualPost, setIndividualPost] = useState(1);

    useEffect(() => {
            axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => setblogPost(res.data))
            .catch(e => console.error("error fetching: " + e))
        }, []);

    console.log(blogPost);
    return (
        <div className="flex flex-col gap-y-2">
            <Link to="/posts/1">Post #{individualPost }</Link>
            <Link to="/posts/2">Post #2</Link>
            <Link to="/posts/3">Post #3</Link>
        </div>
        );
    }

export default Homepage;
