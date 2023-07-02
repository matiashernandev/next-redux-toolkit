"use client"

import { decrement, increment } from "@/redux/features/counterSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"

export default function HomePage() {
  const count = useAppSelector((state) => state.counterReducer.counter)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(increment())
        }}
      >
        Increment
      </button>{" "}
      <br />
      <button
        onClick={() => {
          dispatch(decrement())
        }}
      >
        Decrement
      </button>
    </div>
  )
}
