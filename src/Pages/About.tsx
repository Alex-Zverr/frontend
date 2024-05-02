import { useQuery } from "@tanstack/react-query"
import App from "../Components/App"
import { getUsers } from "../Services/auth.services"

const About = () => {
    const { data, isSuccess } = useQuery({
        queryKey: ['users'],
        queryFn: () => getUsers()
    })

    if (isSuccess) {
        console.log(data);
    }

    return (
        <>
            <h1>О нас</h1>
            <App />
            <div>Получит пользователей</div>
            <div>
                {isSuccess ? data?.map((user) => (
                    <div key={user.id}>{user.username}</div>
                )) : (
                    <div>Загрузка...</div>
                )}
            </div>
        </>
    )
}

export default About