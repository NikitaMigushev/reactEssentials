import './App.css'
import Counter from "@/components/Counter.jsx";
import {Provider} from 'react-redux'
import store from './store/index.js'
import Header from './components/Header.jsx'
import Auth from "@/components/Auth.jsx";

function App() {
    return (
        <>
            <Provider store={store}>
                <Header />

                <div className="flex flex-col items-center">
                    <Auth />
                    <Counter/>
                </div>
            </Provider>
        </>
    )
}

export default App
