import './App.css'
import Counter from "@/components/Counter.jsx";
import {Provider, useSelector} from 'react-redux'
import store from './store/index.js'
import Header from './components/Header.jsx'
import Auth from "@/components/Auth.jsx";
import {counterActions} from "@/store/index.js";

function App() {
    const isAuth = useSelector(state => state.auth.isAuthenticated);


    return (
        <>
            <Header/>
            <div className="flex flex-col items-center">
                {!isAuth && <Auth/>}
                {isAuth && <Counter/>}
            </div>
        </>
    );
}

export default App;
