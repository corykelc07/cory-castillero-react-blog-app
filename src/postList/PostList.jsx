import { Link } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

function PostList() {
    const [blogPost, setblogPost] = useState("");


    useEffect(() => {
            axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => setblogPost(res.data))
            .catch(e => console.error("error fetching: " + e))
        }, []);

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <main className="flex-1 flex flex-col items-center gap-y-4 px-4 md:px-0 pt-10 pb-10">
                <div className="bg-white w-full max-w-2xl shadow-md text-center p-6 sm:p-10 rounded-2xl border border-gray-200">
                    <h1 className = "text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Posts</h1>
                    <div className="bg-white shadow-md border border-gray-100 rounded-xl p-4 sm:p-6 max-w-xl mx-auto text-gray-700 text-[12.5px] leading-relaxed">
                        Please select a post to view details. Users that are currently logged in can comment on posts.
                    </div>
                        <div className= "flex flex-col sm:flex-row gap-4 mt-6 justify-center">
                            <Link to="/posts/1" className="bg-blue-400 w-full sm:w-fit px-8 py-2 rounded-2xl text-white text-center">Post #1</Link>
                            <Link to="/posts/2" className="bg-blue-400 w-full sm:w-fit px-8 py-2 rounded-2xl text-white text-center">Post #2</Link>
                            <Link to="/posts/3" className="bg-blue-400 w-full sm:w-fit px-8 py-2 rounded-2xl text-white text-center">Post #3</Link>
                        </div>

                </div>
            </main>
        </div>
        );
}

export default PostList