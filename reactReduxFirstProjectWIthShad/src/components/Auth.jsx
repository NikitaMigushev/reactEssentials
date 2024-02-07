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

export default function Auth() {
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
                    <Label htmlFor="password">Пароль</Label>
                    <Input id="name" placeholder="введите пароль"></Input>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button>Войти</Button>
            </CardFooter>
        </Card>
        </div>
    )
}