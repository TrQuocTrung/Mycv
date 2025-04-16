import AppHeader from './components/layout/app.header'
import AppFooter from './components/layout/app.footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </>
  )
}

export default App
