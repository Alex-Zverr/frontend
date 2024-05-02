import { useQuery } from "@tanstack/react-query";
import App from "../Components/App"
import { getCurrentUser } from "../Services/auth.services";

const Contacts = () => {
    const { data, isSuccess } = useQuery({
        queryKey: ['current_user'],
        queryFn: () => getCurrentUser()
    })

    if (isSuccess) {
        console.log(data);
    }

    return (
        <>
            <h1>Контакты</h1>
            <App />
        </>
    )
}

export default Contacts