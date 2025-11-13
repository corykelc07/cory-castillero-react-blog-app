import { Link } from "react-router";

function PostList() {
    return (
    <div className="flex flex-col gap-y-2">
        <Link to="/posts/1">Post #1</Link> 
        <Link to="/posts/2">Post #2</Link>
        <Link to="/posts/3">Post #3</Link>
    </div>
    );
    
}

export default PostList