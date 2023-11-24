import { Outlet } from "react-router-dom"

//Elements
import Navigation from "./elements/Navigation"
import Heading from "./elements/Heading";

function App() {
  return (
    <>
    <Heading>Hello Motion!</Heading>
      <Navigation />
      <Outlet />
    </>
  )
}

export default App
