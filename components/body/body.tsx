import { useState } from "react";

export default function Body() {
  const [state, setState] = useState(0);

  const Login = (
    <div>
      <div>
        <label className=" font-semibold text-sm">*Mobile-no</label>
        <div className=" border-2 border-grey rounded-lg h-12 w-[350px] flex items-center px-2 py-1">
          <h1>+91</h1>
          <input
            type="number"
            placeholder="Enter Number"
            className=" w-400px p-2 h-10 mx-1 "
          ></input>
          <button className=" border-2 border-lightgreen px-2 py-1 hover:scale-95 font-semibold w-[100px] bg-white text-sm">
            Get Code
          </button>
        </div>
        <div>
          <center>
            <button className=" px-2 py-1 rounded-lg border-2 border-white bg-grey my-8 hover:scale-105 hover:brightness-110 font-semibold text-xl">
              Connect to wallet
            </button>
          </center>
        </div>
      </div>
    </div>
  );

  const Signup = (
    <div>
      <h1>This is a signup tab.</h1>
    </div>
  );

  const data = [
    {
      name: "Login",
      value: Login,
    },
    {
      name: "Signup",
      value: Signup,
    },
  ];

  return (
    <div className=" flex lg:flex-row flex-col justify-around  lg:px-16 px-5 my-auto lg:py-16 py-8">
      <div className=" w-3/6">
        <h1 className=" text-7xl font-semibold py-5">This is a Quote</h1>
        <h3 className=" text-3xl font-semibold py-5">This is a Sub-quote</h3>
      </div>
      <div className=" border-2 border-green p-5 rounded-lg">
        <div className=" w-full flex flex-row justify-around flex-nowrap items-center bg-grey ">
          {data.map((value, index) => {
            return (
              <div key={index}>
                <button
                  className="px-2 py-1 hover:brightness-105 bg-white rounded-sm m-2 font-semibold hover:scale-105"
                  onClick={() => setState(index)}
                >
                  {value.name}
                </button>
              </div>
            );
          })}
        </div>
        <div className=" w-full py-5">{data[state].value}</div>
      </div>
    </div>
  );
}
