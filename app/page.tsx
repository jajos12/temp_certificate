"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { studentList } from "./constants";

export default function Home() {
  const [valid, setValid] = useState<Boolean>();
  const [nameInput, setNameInput] = useState("");
  const router = useRouter();
  const handleSubmit = () => {
    if (nameInput) {
      studentList.map((item) => {
        item.name == nameInput ? setValid(true) : setValid(false);
        item.name == nameInput
          ? router.push(
              `/${item.name.replaceAll(" ", "_").toLocaleLowerCase()}`
            )
          : "";
      });
    }
  };
  return (
    <main>
      {/* Input field */}
      <section
        className={clsx(
          "flex flex-col items-center input gap-10 w-screen h-screen text-white p-10 justify-center"
        )}
      >
        <div className="flex flex-col gap-5 items-center">
          <Image src="logo.svg" alt="logo" width={120} height={40} />
          <h1 className="text-3xl font-extrabold">
            <span className="text-[#ffba07]">Yotor</span> Academy
          </h1>
        </div>
        <div className="flex justify-center items-center bg-[#ffb90781] px-8 py-2 rounded-xl text-sm">
          Temporary page for verifying claimed certificates
        </div>
        <div className="flex flex-col items-center justify-center gap-5 mt-10 font-thin">
          <h1 className="text-2xl font-bold">Welcome There ✋</h1>
          <p className="flex justify-center items-center">
            You can Enter the name of the person you want to verify has
            successfully finished our front end boot camp cohort-1
          </p>
          <div className="flex flex-col gap-4 mt-3">
            <h3 className="text-xl font-bold text-[#ffba07]">Full Name</h3>
            <label htmlFor="name" className="flex gap-5">
              <input
                type="text"
                name="name"
                id="name"
                className="bg-[#eee] rounded-lg w-[100%] h-12 text-black p-3"
                onChange={(e) => setNameInput(e.target.value)}
              />
            </label>
            <button
              onClick={handleSubmit}
              className="bg-[#ffba07] text-center px-4 py-2 font-medium rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
        {!valid && (
          <section className="flex flex-col items-center gap-3 bg-green-600 rounded-md px-10 py-3">
            Seems like you have entered Invalid or persons name that hasn't
            learnt in yotor, make sure to write in the format -{`>`} John Doe
            Bob
            <button
              className="bg-red-600 w-[200px] rounded-lg"
              onClick={(e) => {
                setValid(true);
              }}
            >
              close
            </button>
          </section>
        )}
      </section>

      {/* Error Display field */}
    </main>
  );
}
