import React , { lazy, Suspense } from 'react';
import './App.css';
/*eslint-disable */
import Navbar from './Components/Navbar';
import BookList from './Components/BookList';
import ThemeContextProvider, { ThemeContext } from './Contexts/ThemeContext';
import ToggleTheme from './Components/ToggleTheme';
import SongList from './Components/SongList';
import AnotherComponent from './Components/AnotherComponent';

const LazyComponent = lazy(() => import('./Components/LazyComponent'));
function App() {
  return (
    <div className="App">
      {/* <ThemeContextProvider>
      <Navbar />
      <ToggleTheme />
      </ThemeContextProvider> */}
      {/* <ThemeContextProvider>
      <SongList />
      <BookList />
      </ThemeContextProvider> */}
      <Suspense fallback = {<div>...Loading</div>}><LazyComponent /></Suspense>
      <AnotherComponent />
    </div>
    
  );
}

export default App;
