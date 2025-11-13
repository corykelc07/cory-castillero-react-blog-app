import { Route, Routes } from 'react-router';
import './App.css';
import { ThemeProvider } from './ThemeContext';
import IndividualBlogPost from './Blog/IndividualBlogPost';
import ContactPage from './contacts/ContactPage';
import CommonLayout from './layouts/CommonLayout';
import PostList from './postList/PostList';
import Homepage from './homepage/Homepage';


function App() {
  return (
    <ThemeProvider> 
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path="/" element={<Homepage/>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/:post_id" element={<IndividualBlogPost/>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App
