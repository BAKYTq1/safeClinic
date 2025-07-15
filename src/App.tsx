import { RouterProvider } from 'react-router-dom'
import './styles/App.css'
import { myRouter } from './router/Router.tsx'
function App() {

  return (
    <>
    <RouterProvider router={myRouter}/>
    </>
  )
}

export default App
