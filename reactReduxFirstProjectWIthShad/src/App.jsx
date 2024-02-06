import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button} from "@/components/ui/button.jsx";
import Counter from "@/components/Counter.jsx";
import {Provider} from 'react-redux'
import store from './store/index.js'

function App() {
    return (
        <>
            <Provider store={store}>
                <div className="flex justify-center">
                    <Counter/>
                </div>
            </Provider>
        </>
    )
}

export default App
