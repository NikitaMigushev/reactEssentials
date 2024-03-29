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
import {counterActions} from "@/store/index.js";

export default function Counter() {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.counter);
    const show = useSelector((state) => state.counter.showCounter);

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    };

    const increaseHandler = () => {
        dispatch(counterActions.increase(10)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
    };

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
    };


    return (
        <div className="h-7 mt-4">
            <Card>
                <CardHeader>
                    <CardTitle>Counter</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col">
                        {show && <p>Counter: {counter}</p>}
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