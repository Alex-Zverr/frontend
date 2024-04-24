import { Outlet } from "react-router-dom"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

const Layout = () => {

    return (
        <>  
            <Header />

            <main>
                <div className="container">
                    <Outlet />
                </div>
            </main>

            <Footer />
        </>
    )
}

export default Layout