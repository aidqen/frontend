import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { store } from './store/store'
import { Homepage } from './pages/Homepage'
import { AppHeader } from './cmps/AppHeader'
import { AboutUs } from './cmps/AboutUs'
import { ToyIndex } from './pages/ToyIndex'
import { ScopedCssBaseline } from '@mui/material'
import { ToyDetails } from './pages/ToyDetails'
import { LoginSignup } from './pages/LoginSignup'

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScopedCssBaseline>
          <section className="app">
            <AppHeader />
            <main>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/toys" element={<ToyIndex />} />
                <Route path="/toys/:toyId" element={<ToyDetails />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/auth/login" element={<LoginSignup />} />
                <Route path="/auth/signup" element={<LoginSignup />} />
                
              </Routes>
            </main>
          </section>
        </ScopedCssBaseline>
      </Router>
    </Provider>
  )
}
