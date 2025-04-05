import './App.css';
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import PostList from './components/PostList';

export default function App() {
  return (
    <div className="app">
      <Header />
      <NavMenu />
      <PostList />
    </div>
  );
}