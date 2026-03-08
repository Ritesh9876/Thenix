import { useQuery } from '@thenix/react'

function UserData() {

    const data = useQuery({
        queryKey: 'userData',
        queryFn: () => fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
    })
    console.log('**/userData',data,)
  return (
    <div>UserData</div>
  )
}

export default UserData