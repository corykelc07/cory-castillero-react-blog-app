import { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext";
import CommentBox from "./CommentBox";
import Content from "./Content";
import { useParams } from "react-router";
import axios from "axios";
import IndividualComment from "./IndividualComment";

function Body () {
    const params = useParams();
    
    const [loading, setLoading] = useState(true);
    const [postData, setPostData] = useState();
    const [authorData, setAuthorData] = useState();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const postRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.post_id}`);
                setPostData(postRes.data);

                const authorRes = await axios.get(
                    `https://jsonplaceholder.typicode.com/users/${postRes.data.userId}`
                );
                setAuthorData(authorRes.data);

                const commentRes = await axios.get(
                    `https://jsonplaceholder.typicode.com/posts/${params.post_id}/comments`
                )
                setComments(commentRes.data);
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    },[params.post_id])



    return (
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow border border-gray-200 p-6 mt-10">
            {loading ? (
                <p>Loading</p>
            ) : (
                <>
                    <Content
                        title={postData.title}
                        content={postData.body}
                        author={authorData.name}
                        email={authorData.email}
                    />
                    <div className="border-t border-gray-200 mt-8 pt-6">
                        <CommentBox
                            initialComments={comments}
                        />
                        </div>
                </>
            )}
            
        </div>
    );
}

export default Body;