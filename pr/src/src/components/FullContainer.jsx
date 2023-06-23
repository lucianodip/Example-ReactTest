import Container from "react-bootstrap/esm/Container"
import ContainerNavbar from "./Navbar/ContainerNavbar"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Sidebar from "./Sidebar/Sidebar"



export const FullContainer = ({children}) => {
  
  return (
    <div className='App container-full'>
        <Header/>
        <Container className='container-main'>
            <ContainerNavbar/>
            {children}  
            <Footer/>
        </Container>   
        <Sidebar/>
    </div>
  )
}
