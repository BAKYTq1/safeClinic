import { RouterProvider } from 'react-router-dom'
import './styles/App.scss'
import './styles/index.scss'
import { myRouter } from './router/Router.tsx'
function App() {

  return (
    <>
    <RouterProvider router={myRouter}/>
    </>
  )
}

export default App
