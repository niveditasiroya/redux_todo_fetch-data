import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  increment,
  incrementByAction,
} from "./store/slice/counterSlice";
import { useState } from "react";
import {
  addTodo,
  dltTodo,
  toggleSelected,
  updateInputTodo,
  updateTodo,
} from "./store/slice/todoSlice";
import Users from "./user";

function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  // console.log(count);

  const [value, setValue] = useState("");
  const inputHandler = (e) => {
    setValue(e.target.value);
  };
  const submitHandler = () => {
    console.log(value);
    if (value !== "") {
      console.log({ id: Math.random(), value });
    }
    setValue("");
    dispatch(
      addTodo({ id: Math.random(), value, checked: false, update: value })
    );
  };

  const display = useSelector((state) => state.todo);
  console.log(display);

  const deleteHandler = () => {
    dispatch(dltTodo());
  };

  const updateHandler = () => {
    dispatch(updateTodo({ id: Math.random(), value }));
  };

  const updateInputHandler = (e) => {
    dispatch(updateInputTodo({ id: Math.random(), value }));
  };

  return (
    <div className="App">
      <div className="flex flex-col items-center m-5">
        <h1 className="font-bold text-3xl">{count}</h1>
        <div className="m-3">
          <button
            className="border-2 rounded-md px-7 py-1"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <button
            className="border-2 rounded-md px-7 py-1"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>

          <button
            className="border-2 rounded-md px-7 py-1"
            onClick={() => dispatch(incrementByAction(1))}
          >
            1
          </button>
          <button
            className="border-2 rounded-md px-7 py-1"
            onClick={() => dispatch(incrementByAction(2))}
          >
            2
          </button>
          <button
            className="border-2 rounded-md px-7 py-1"
            onClick={() => dispatch(incrementByAction(3))}
          >
            3
          </button>
          <button
            className="border-2 rounded-md px-7 py-1"
            onClick={() => dispatch(incrementByAction(4))}
          >
            4
          </button>
          <button
            className="border-2 rounded-md px-7 py-1"
            onClick={() => dispatch(incrementByAction(5))}
          >
            5
          </button>
        </div>
      </div>

      <div className="todo flex flex-col justify-center py-5">
        <div className="flex justify-center gap-2">
          <input
            value={value}
            onChange={inputHandler}
            className="border-2 rounded-md px-3 py-1"
          />
          <button
            onClick={submitHandler}
            className="border-2 rounded-md px-5 py-1 bg-green-600"
          >
            ADD
          </button>
        </div>
        {display?.map((item) => {
          return (
            <div
              key={item.id}
              className="flex justify-center items-center gap-7 p-3 mb-5"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => dispatch(toggleSelected(item.id))}
                />

                <input
                  update={item.value}
                  onChange={() => dispatch(updateInputTodo(item.value))}
                  className="border-2 rounded-md px-3 py-1"
                />
              </div>
              <div>
                <button
                  onClick={() => dispatch(updateTodo(item.id))}
                  className="border-2 rounded-md px-5 py-1 bg-yellow-400"
                >
                  UPDATE
                </button>

                <button
                  onClick={() => dispatch(dltTodo(item.id))}
                  className="border-2 rounded-md px-5 py-1 bg-red-500"
                >
                  DELETE
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <Users />
    </div>
  );
}

export default App;
