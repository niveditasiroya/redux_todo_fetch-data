import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFav, updateData } from "./store/slice/userSlice";

const Users = () => {
  const users = useSelector((state) => state.users);
  const [selectedUser, setSelectedUser] = useState();
  const dispatch = useDispatch();

  const updateHandler = (id) => {
    setSelectedUser(...users.filter((item) => item.id === id));
  };

  // const [value, setValue] = useState("");
  const inputHandler = (e) => {
    const { name, value } = e.target;
    if (name === "city") {
      setSelectedUser({
        ...selectedUser,
        address: {
          city: value,
        },
      });
    } else {
      setSelectedUser({
        ...selectedUser,
        [name]: value,
      });
    }
  };

  const saveUpdateHandler = () => {
    dispatch(updateData(selectedUser));
    setSelectedUser('')
  }

  return (
    <div>
      {/* <input onChange={inputHandler} className="border-2 " /> */}

      {console.log(users)}
      {users?.map(
        (data) =>
          // console.log(data.id , value, data.id == value)
          data.id && (
            <div
              className={`p-5 border-2 flex ${
                data.isfav == true && "bg-yellow-400"
              }`}
            >
              <div className="p-5 w-2/10 border-2">
                ID : {data.id}
                <button
                  onClick={() => dispatch(addToFav(data.id))}
                  className="border-2 rounded-md bg-green-500 px-5"
                >
                  FAV
                </button>
                <button
                  onClick={() => updateHandler(data.id)}
                  className="border-2 rounded-md bg-blue-300 px-5"
                >
                  UPDATE
                </button>
                {selectedUser?.id === data.id && (
                  <button
                    onClick={() => saveUpdateHandler()}
                    className="border-2 rounded-md bg-blue-300 px-5"
                  >
                    SAVE UPDATE Changes
                  </button>
                )}
              </div>
              <div className="w-8/10">
                <div className="p-5 w-full border-2">
                  Name :{" "}
                  <input
                    value={
                      selectedUser && selectedUser.id === data.id
                        ? selectedUser?.username
                        : data.username
                    }
                    onChange={inputHandler}
                    name="username"
                    className="px-3"
                    disabled={selectedUser?.id !== data.id}
                  />
                </div>
                <div className="p-5 w-full border-2">
                  City :{" "}
                  <input
                    value={
                      selectedUser && selectedUser.id === data.id
                        ? selectedUser?.address?.city
                        : data.address.city
                    }
                    onChange={inputHandler}
                    name="city"
                    className="px-3"
                    disabled={selectedUser?.id !== data.id}
                  />
                </div>
                <div className="p-5 w-full border-2">
                  Email :{" "}
                  <input
                    value={
                      selectedUser && selectedUser.id === data.id
                        ? selectedUser?.email
                        : data.email
                    }
                    className="px-3"
                    onChange={inputHandler}
                    name="email"
                    disabled={selectedUser?.id !== data.id}
                  />
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Users;
