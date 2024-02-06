import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Button} from "@/components/ui/button.jsx";
import {useDispatch, useSelector} from "react-redux";

export default function Counter() {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    const toggle = useSelector(state => state.showCounter)

    const incrementHandler = () => {
        dispatch({type: 'increment'});
    }

    const decrementHandler = () => {
        dispatch({type: 'decrement'});
    }

    const increaseHandler = () => {
        dispatch({type: 'increase', amount: 5})
    }

    const toggleCounterHandler = () => {
        dispatch({type: 'toggle'})
        console.log(toggle);
    }


    return (
        <div className="h-7 mt-4">
            <Card>
                <CardHeader>
                    <CardTitle>Counter</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col">
                        {toggle && <p>Counter: {counter}</p>}
                        <div className="flex space-x-4 mt-4">
                            <div>
                                <Button onClick={incrementHandler}>Increment</Button>
                            </div>
                            <div>
                                <Button onClick={decrementHandler}>Decrement</Button>
                            </div>
                            <div>
                                <Button onClick={increaseHandler}>Increase by 5</Button>
                            </div>
                            <div>
                                <Button onClick={toggleCounterHandler}>Toggle Counter</Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}