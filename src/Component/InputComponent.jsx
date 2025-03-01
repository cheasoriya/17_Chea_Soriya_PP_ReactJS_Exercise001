import React, { useState } from "react";
import DatesComponent from "./dateComponent";
import CardsComponent from "./cardComponent";
export default function InputedComponent() {
  const [stu, setStu] = useState({});
  const [students, setStudents] = useState([]);

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStu((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(stu);
  };

  //   handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents((prev) => [...prev, { id: students?.length + 4, ...stu }]);
  };

  return (
    <>
      <section className="flex flex-col mx-10">
        <h1 className="text-purple-500 text-3xl">React JS</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-row-wrap justify-between gap-5">
            <div className="flex flex-col w-full">
              <label>Book Title</label>
              <input
                type="text"
                name="inputTitle"
                className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Atomic"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col  w-full">
              <label>Author</label>
              <input
                type="author"
                name="InputText"
                className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John Doe"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-row-wrap justify-between gap-5">
            <div className="flex flex-col w-full">
              <label>Book Title</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                  datepicker
                  id="default-datepicker"
                  name="datepick"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label>Book Title</label>
              <input
                type="number"
                name="edition"
                className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Atomic"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col  w-full">
              <label>Author</label>
              <input
                type="number"
                name="quantity"
                className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John Doe"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="p-2 rounded-lg text-white bg-blue-600 w-1/5"
          >
            Submit
          </button>
        </form>
        <div className="py-10">
          {/* Card Table  */}
          <CardsComponent students={students} />
        </div>
      </section>
    </>
  );
}
