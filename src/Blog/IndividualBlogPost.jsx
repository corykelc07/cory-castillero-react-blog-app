import React from "react";
import Body from "./Body";

import { ThemeProvider } from '../ThemeContext';

function IndividualBlogPost() {
    return (
        <div className='flex flex-col min-h-screen'>
        <main className='flex-1'>
        <Body />
        </main>
      </div>
    )
}

export default IndividualBlogPost