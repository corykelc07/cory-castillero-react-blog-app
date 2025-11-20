import React from "react";
import { useUsername } from "../authWrapper/AuthContext";
import { Link } from "react-router";


function Homepage() {
    const username = useUsername();
    const loggedOutUser = "Welcome, Please login to post in the Blog Application. You may still view posts on the Blog Post tab but you cannot post unless you are logged in."
    const loggedInUser = `Welcome ${username}, Please navigate to the Blog Post to start Blogging`
    const loggedIn = username ? loggedInUser : loggedOutUser; 
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <main className="flex-1 flex flex-col items-center gap-y-4 px-4 md:px-0 pt-10 pb-10">
                <div className="bg-white w-full max-w-2xl shadow-md text-center p-6 sm:p-10 rounded-2xl border border-gray-200">
                    <h1 className = "text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">My Blog</h1> 
                    <div className="bg-white shadow-md border border-gray-100 rounded-xl p-4 sm:p-6 max-w-xl mx-auto text-gray-700 text-base leading-relaxed">
                        {loggedIn}
                    </div>

                    <div className= "flex flex-col sm:flex-row gap-4 mt-6 justify-center">
                        <Link to="/posts" className="bg-blue-400 w-full sm:w-fit px-8 py-2 rounded-2xl text-white text-center">Blog Posts</Link>
                        {!username &&
                            (<Link to="/login" className="bg-green-400 w-full sm:w-fit px-8 py-2 rounded-2xl text-white text-center">Login</Link>)
                        }
                    </div>

                </div>
            </main>
        </div>
        );
    }

export default Homepage;
