import {Button} from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "@/store/index.js";
import {authActions} from "@/store/index.js";

export default function Auth() {
    const dispatch = useDispatch();

    const authHandler = () => {
        dispatch(authActions.login());
    };

    return (
        <div className="w-1/4 mt-4">
        <Card>
            <CardHeader>
                <CardTitle>
                    Вход
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col space-y-4">
                    <Label htmlFor="tel">Телефон</Label>
                    <Input id="name" placeholder="+79991111111"></Input>
                    <Label htmlFor="pass">Пароль</Label>
                    <Input id="pass" placeholder="введите пароль"></Input>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button onClick={authHandler}>Войти</Button>
            </CardFooter>
        </Card>
        </div>
    )
}