/**
 * Para poder usar hooks y JS que se ejecute en el cliente, hay que
 * convertir el componente a client component con 'use client'.
 */

"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  addOne,
  initCounterState,
  resetCount,
  substractOne,
} from "@/store/counter/counterSlice";

interface Props {
  initialValue: number;
}

export interface CounterResponse {
  count: number;
}

async function getAPICounter(): Promise<CounterResponse> {
  const response = await fetch("/api/counter");
  const counterValue = await response.json();

  return counterValue;
}

export function CartCounter({ initialValue = 0 }: Props) {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  const handleAdd = () => dispatch(addOne());
  const handleReset = () => dispatch(resetCount(0));
  const handleSubtract = () => dispatch(substractOne());

  // useEffect(() => {
  //   dispatch(initCounterState(initialValue));
  // }, [dispatch, initialValue]);

  useEffect(() => {
    getAPICounter().then(({ count }) => {
      dispatch(initCounterState(count));
    });
  }, [dispatch]);

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          onClick={handleAdd}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>
        <button
          onClick={handleReset}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          Reset
        </button>
        <button
          onClick={handleSubtract}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </>
  );
}
