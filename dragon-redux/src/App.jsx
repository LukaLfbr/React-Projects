import './App.scss'
import {Route, Routes} from "react-router-dom";
import DragonPage from "./page/Dragon.page.jsx";
import NavBar from "./component/NavBar.jsx";
import KnightPage from "./page/Knight.page.jsx";
function App() {



    return (
        <main>
            <header>
                <h1>Dragons & Knights</h1>
                <NavBar />
            </header>

            <Routes>
                <Route path={'/'} element={<DragonPage />} />
                <Route path={'/knight'} element={<KnightPage />} />
            </Routes>
        </main>
    )
}

export default App