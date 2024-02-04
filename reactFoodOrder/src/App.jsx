import Header from './components/Header.jsx';
import Meals from './components/Meals.jsx';
import {CartContextProvider} from './store/CartContext.jsx';
import {SecondCartContextProvider} from "./components/store/SecontCartContext.jsx";

function App() {
    return (
        <SecondCartContextProvider>
            <CartContextProvider>
                <Header/>
                <Meals/>
            </CartContextProvider>
        </SecondCartContextProvider>
    );
}

export default App;
