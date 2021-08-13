import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import OnePost from './components/OnePost';
import Header from './components/Header';
import Footer from './components/Footer';
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from './components/themes'
import { lazy, Suspense, useState, useEffect } from 'react';
const AllPosts = lazy(() => import('./components/AllPosts'))

const StyledApp = styled.div``;


function App() {

  const [theme, setTheme] = useState('light')

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  //LOCAL STORAGE
  useEffect(()=> {
    const data = localStorage.getItem('darkMode')
    if(data){
      setTheme(JSON.parse(data))
    }
  }, [])

  //LOCAL STORAGE
  useEffect(()=> {
    localStorage.setItem('darkMode', JSON.stringify(theme))
  })
  
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme: darkTheme}>
    <GlobalStyles/>
      <StyledApp>
        <div className="main-container">
            <Suspense fallback={<div className="loading">Loading...</div>}>
              <Router>
                <Header themeToggler={themeToggler} theme={theme}/>
                  <div className="App">
                    <Route path="/" exact component={AllPosts}/>
                    <Route path="/:slug" exact component={OnePost}/>
                  </div>
                <Footer/>
              </Router>
            </Suspense>
          </div>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
