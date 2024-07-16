import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { store } from './store/store'
import { Homepage } from './pages/Homepage'
import { AppHeader } from './cmps/AppHeader'
import { AboutUs } from './cmps/AboutUs'
import { ToyIndex } from './pages/ToyIndex'

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <section className="app">
          <AppHeader />
          <main>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/toys" element={<ToyIndex />} />
              <Route path="/about" element={<AboutUs />}/>
            </Routes>
          </main>
        </section>
      </Router>
    </Provider>
  )
}
