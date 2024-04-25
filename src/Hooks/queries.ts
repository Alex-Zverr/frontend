import { useQuery } from "@tanstack/react-query"
import { getUsers } from "../Services/auth.services"

export const useGetUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: getUsers
    })
}
