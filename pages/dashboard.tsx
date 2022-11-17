import { useState } from "react";
import Entry from "../components/body/entry";
import Profile from "../components/body/profile";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();
  const [state, setState] = useState(0);
  const data = [
    {
      name: "New Entry",
      value: <Entry />,
    },
    {
      name: "Profile",
      value: <Profile />,
    },
  ];

  return (
    <div className=" bg-grey h-auto w-screen py-4 px-8">
      <div className=" flex flex-row justify-between">
        <div>
          <h1 className="block text-green h-8 w-auto font-bold text-2xl">
            Medipass<span className=" text-black">.</span>
          </h1>
        </div>
        <div>Doctor id</div>
      </div>
      <div className=" flex lg:flex-row flex-col mx-auto lg:px-4 w-full m-2 justify-start">
        <div className="lg:w-1/6 flex flex-col w-full  items-center border-2 border-green">
          {data.map((value, index) => {
            return (
              <div
                key={index}
                className=" w-full flex justify-center items-center"
              >
                <button
                  className="px-2 w-5/6 bg-lightgreen rounded-sm py-1 hover:brightness-105 m-2 font-semibold hover:scale-105"
                  onClick={() => setState(index)}
                >
                  {value.name}
                </button>
              </div>
            );
          })}
          <button
            onClick={() => router.push("/")}
            className="px-2 py-1 w-5/6 bg-lightgreen hover:brightness-105 rounded-sm m-2 font-semibold hover:scale-105"
          >
            Logout
          </button>
        </div>
        <div className="lg:w-5/6 flex flex-col justify-start border-2 border-green ml-1 min-h-[90vh] ">
          {" "}
          <h1 className=" flex justify-start mx-auto font-semibold text-2xl py-2 text-black text-left w-full px-2">
            Welcome, Doctor Name
          </h1>
          <div className=" flex flex-col justify-around mx-auto font-semibold text-lg">
            {data[state].value}
          </div>
        </div>
      </div>
    </div>
  );
}
