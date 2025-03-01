import React, { useEffect, useState } from "react";
import { studentList } from "../data/studentList";
export default function CardsComponent({ students }) {
  const [stuList, setStuList] = useState([]);
  const mergeStudents = () => {
    setStuList([...studentList, ...students]);
  };
  useEffect(() => {
    mergeStudents();
  }, [students]);
  return (
    <>
      <section className="grid grid-cols-3 w-full gap-5">
        {stuList?.map((student) => (
          <div className="border rounded">
            <div className="flex justify-end text-end ">
              <p className="bg-blue-500 rounded-l-lg p-2">
                {student?.datepick}
              </p>
            </div>
            <div className="p-4">
              <h1 className="text-2xl font-bold">{student?.inputTitle}</h1>
              <p>Written By: {student?.InputText}</p>
              <p>Editions: {student?.edition}</p>
              <p>Quantity: {student?.quantity}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
