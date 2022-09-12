import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from './screens/loginScreen/LoginScreen'
// import LoginScreen from './screens/loginScreen/LoginScreen'
import { BrowserRouter as Router, Routes, Redirect, Route, Switch } from 'react-router-dom'
import './_app.scss'

const Layout = ({children}) => {
   const [sidebar, toggleSidebar] = useState(false)

   const handleToggleSidebar = () => toggleSidebar(value => !value)

   return (
      <>
          <Header handleToggleSidebar={handleToggleSidebar} />
         <div className="app__container">
            <Sidebar
               sidebar={sidebar}
               handleToggleSidebar={handleToggleSidebar}
            />
            <Container fluid className="app__main ">
               {children}
            </Container>
         </div>
      </>
   )
}

const App = () => {
  
   return (
      <>
         <Router>
            <Routes>
            <Route path='/' element={<Layout><HomeScreen/></Layout>}>
               {/* <Layout>
                  <HomeScreen />
               </Layout> */}
            </Route>

            <Route path='/auth' element={<LoginScreen/>} >
               {/* <LoginScreen /> */}
            </Route>

            <Route path='/search' element={<Layout><h1>Search Result</h1></Layout>}>
            </Route>
            </Routes>
         </Router>
      
      </>
   )
}

export default App