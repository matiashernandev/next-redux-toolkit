"use client"

import { decrement, increment } from "@/redux/features/counterSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useGetUserByIdQuery, useGetUsersQuery } from "@/redux/services/userApi"

export default function HomePage() {
  const count = useAppSelector((state) => state.counterReducer.counter)
  const dispatch = useAppDispatch()

  const { data, error, isLoading, isFetching } = useGetUsersQuery(null)

  if (isLoading || isFetching) return <p>Loading...</p>
  if (error) return <p>Some error</p>

  return (
    <div>
      <h1 className="text-center text-2xl">{count}</h1>
      <button
        className="bg-green-500 px-3 py-2 rounded-md"
        onClick={() => {
          dispatch(increment())
        }}
      >
        Increment
      </button>{" "}
      <br />
      <button
        className="bg-blue-500 px-3 py-2 rounded-md"
        onClick={() => {
          dispatch(decrement())
        }}
      >
        Decrement
      </button>
      <div className="grid grid-cols-3 bg-slate-600 ">
        {data?.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
