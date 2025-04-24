import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Header from '../Components/Header/header';
import Login from '../Components/Login/Login';
import Blogs from '../Components/Post/Blogs';
import Register from '../Components/Register/Register';
import './App.css';
// import Profile from '../Components/Profile/Profile';
import AdminPanel from '../Components/AdminPanel/AdminPanel';
import CreatePost from '../Components/CreatePost/CreatePost';
import Cuisines from '../Components/Cuisines/Cuisines';
import ScrollToTop from '../Components/Scroll To Top/ScrollToTop';
import EditPost from '../Components/EditPost/EditPost';
// import HomePage from '../Components/HomePage/HomePage';
import AllBlogs from '../Components/Post/AllBlogs';
import PostDetails from '../Components/Post/BlogDetails';
import { UserProvider } from '../Context/UserProvider';
import Recipes from '../Components/Recipes/Recipes';
import RecipeDetails from '../Components/Recipes/RecipeDetails';
import { lazy } from 'react';
import Footer from '../Components/Footer/Footer';
const Header = lazy(()=> import ('../Components/Header/header'))
const HomePage = lazy(()=> import ('../Components/HomePage/HomePage'))

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
      <Header/>
      <ScrollToTop/>

        <Routes>
          <Route path='/' element={
            <main>
              <HomePage/>
            </main>}>
          </Route>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/blogs/allBlogs' element={<AllBlogs/>}/>
          <Route path='/cuisines' element={<Cuisines/>}/>
          <Route path='/recipes' element={<Recipes/>}/>
          <Route path='/recipes/:id' element={<RecipeDetails/>}/>
          <Route path='/inspireOthers' element={<CreatePost/>}/>
          <Route path='/blogs/:id' element={<PostDetails/>}/>
          <Route path='/editPost/:id' element={<EditPost/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/adminPanel' element={<AdminPanel/>}/>
        </Routes>
      <Footer/>
        </UserProvider>
    </BrowserRouter>
  );
}

export default App;
