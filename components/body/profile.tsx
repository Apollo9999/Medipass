export default function Profile() {
  return (
    <div className=" w-full">
      <h1> Profile</h1>
      <label className=" font-mono text-sm pt-8 underline">
        Name: Dr. Hardik Agarwal
      </label>
      <div className=" border-2 border-green p-5 w-[130vh] flex flex-row flex-wrap my-2 justify-around">
        <div
          placeholder="Image:"
          className=" rounded-full h-36 w-36 bg-green"
        ></div>
        <div className=" flex flex-col flex-wrap">
          <div>
            <input
              placeholder="Patient name:"
              className=" mx-3 my-2 h-8"
            ></input>
            <input placeholder="Aadhar:" className=" mx-3 my-2 h-8"></input>
          </div>
          <div>
            <input placeholder="Age:" className=" mx-3 my-2 h-8"></input>
            <input placeholder="Sex:" className=" mx-3 my-2 h-8"></input>
          </div>
          <div>
            <input
              placeholder="Father/Spouse"
              className=" mx-3 my-2 h-8"
            ></input>
            <input placeholder="City:" className=" mx-3 my-2 h-8"></input>
          </div>
          <input placeholder="College:" className=" mx-3 my-2 h-8"></input>
          <input placeholder="Degree:" className=" mx-3 my-2 h-8"></input>
          <input placeholder="CV link:" className=" mx-3 my-2 h-8"></input>
        </div>
      </div>
    </div>
  );
}
