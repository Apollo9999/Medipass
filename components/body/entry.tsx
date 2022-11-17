import { useState } from "react";

export default function Entry() {
  const [medicines, updateMedicines] = useState([]);
  const [medicine, addMedicine] = useState();
  const [tests, updateTests] = useState([]);
  const [test, addTest] = useState();
  const [qr, setQR] = useState(false);

  const patient = (
    <div className=" w-full">
      <h1>New Patient Entry</h1>
      <label className=" font-mono text-sm pt-8 underline">
        Patient Details
      </label>
      <div className=" border-2 border-green p-5 w-[130vh] flex flex-wrap my-2">
        <input placeholder="Patient name:" className=" mx-3 my-2 h-8"></input>
        <input placeholder="Aadhar:" className=" mx-3 my-2 h-8"></input>
        <input placeholder="Age:" className=" mx-3 my-2 h-8"></input>
        <input placeholder="Sex:" className=" mx-3 my-2 h-8"></input>
        <input placeholder="Father/Spouse" className=" mx-3 my-2 h-8"></input>
        <input placeholder="City:" className=" mx-3 my-2 h-8"></input>
      </div>
      <label className=" font-mono text-sm pt-8 underline">
        Doctor Details
      </label>
      <div className=" border-2 border-green p-5 w-[130vh] flex flex-wrap my-2">
        <input
          placeholder="Doctor name & id:"
          className=" mx-3 my-2 h-8"
        ></input>
        <input placeholder="Aadhar:" className=" mx-3 my-2 h-8"></input>
        <input
          placeholder="Practice Location:"
          className=" mx-3 my-2  h-8"
        ></input>
        <input placeholder="Designation:" className=" mx-3 my-2 h-8"></input>
        <input placeholder="Address:" className=" mx-3 my-2 h-8"></input>
      </div>
      <label className=" font-mono text-sm pt-8 underline">Diagonosis</label>
      <div className=" border-2 border-green p-5 w-[130vh] flex flex-wrap my-2">
        <textarea
          rows={5}
          cols={5}
          placeholder="Symtoms:"
          className=" mx-3 w-full  my-2 resize-none"
        ></textarea>
        <textarea
          rows={5}
          cols={5}
          placeholder="Prescription:"
          className=" mx-3 w-full  my-2 resize-none"
        ></textarea>
      </div>
      <label className=" font-mono text-sm pt-8 underline">Medicines</label>
      <div className=" border-2 border-green p-5 w-[130vh] flex flex-row m-2 flex-wrap my-2">
        {medicines.map((item, i) => {
          return (
            <div className=" bg-white m-2 px-2 py-1 min-w-[35vh]" key={i}>
              {item}
              <br />
            </div>
          );
        })}
        <br />
        <div>
          <input
            onChange={(e) => addMedicine(e.target.value)}
            placeholder="Designation:"
            className=" mx-3 my-2 px-2 h-8"
          ></input>{" "}
          <button
            onClick={() => updateMedicines((array) => [...array, medicine])}
            className="px-2 left-0 bottom-0 bg-lightgreen hover:brightness-105 rounded-sm m-2 font-semibold hover:scale-105"
          >
            +
          </button>
        </div>
      </div>
      <label className=" font-mono text-sm pt-8 underline">Tests</label>
      <div className=" border-2 border-green p-5 w-[130vh] flex flex-wrap my-2">
        {tests.map((item, i) => {
          return (
            <div className=" bg-white m-2 px-2 py-1 min-w-[35vh]" key={i}>
              {item}
              <br />
            </div>
          );
        })}
        <br />
        <div>
          <input
            onChange={(e) => addTest(e.target.value)}
            placeholder="Designation:"
            className=" mx-3 my-2 px-2 h-8"
          ></input>{" "}
          <button
            onClick={() => updateTests((array) => [...array, test])}
            className="px-2 left-0 bottom-0 bg-lightgreen hover:brightness-105 rounded-sm m-2 font-semibold hover:scale-105"
          >
            +
          </button>
        </div>
      </div>
      <div className=" flex justify-end">
        <button className="px-2 py-1 left-0 bottom-0 bg-lightgreen hover:brightness-105 rounded-sm m-2 font-semibold hover:scale-105">
          Esign & Confirm
        </button>
      </div>
    </div>
  );

  const scan = (
    <div className=" w-full">
      <h1>Patient Entry</h1>
      <div className=" flex flex-row">
        <div
          onClick={() => setQR(true)}
          className=" h-36 w-36 m-5 p-2 hover:scale-105 bg-lightgreen text-center cursor-pointer"
        >
          {" "}
          Login via mobile OTP
        </div>
        <div className=" h-36 w-36 m-5 p-2 bg-lightgreen opacity-50 text-center">
          Login via QR (in future)
        </div>
        <div className=" h-36 w-36 m-5 p-2 bg-lightgreen opacity-50 text-center">
          <button>Login via unique code (In future)</button>
        </div>
      </div>
    </div>
  );

  return qr ? patient : scan;
}
