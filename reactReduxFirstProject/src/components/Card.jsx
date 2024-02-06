import {Button} from "../../@/components/ui/button.jsx";

export function Card() {
    let counter = 0

    return (
        <div className="bg-cyan-100 p-8 transform transition hover:scale-105 h-40 w-56 mt-4 rounded-md">
            <div className="flex flex-col items-center">
                <h1 className="text-2xl font-bold">Counter</h1>
                <div className="mt-4 text-lg">{counter}</div>
                <Button>Click me</Button>
            </div>
        </div>
    )
}