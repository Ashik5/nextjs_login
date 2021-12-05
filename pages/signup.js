import { React, useState } from "react";
import { useRouter } from "next/router";
import { ref, set, push } from "firebase/database";
import { database, storage } from "../firebase";
import { ref as storageref, uploadBytes } from "firebase/storage";
import Link from "next/link";

export default function signup() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");
  const [invalid, setInvalid] = useState(false);
  //define router
  const router = useRouter();
  //name
  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };
  //address
  const handleAddressChange = (event) => {
    const value = event.target.value;
    setAddress(value);
  };
  //phone
  const handlePhoneChange = (event) => {
    const value = event.target.value;
    setPhone(value);
  };
  //email
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  //gender
  const handleGenderChange = (event) => {
    const value = event.target.value;
    setGender(value);
  };
  //password
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  //file
  const handleFileChange = (e) => {
    const fileValue = e.target.files[0];
    setFile(fileValue);
    console.log(file);
  };

  const postdata = () => {
    //post text
    //post data
    if (
      name !== "" &&
      address !== "" &&
      phone !== "" &&
      email !== "" &&
      gender !== "" &&
      password !== ""
    ) {
      const db = database;
      const postListRef = ref(db, "users");
      const newPostRef = push(postListRef);
      set(newPostRef, {
        name,
        address,
        phone,
        email,
        gender,
        password,
      });
      //post image
      const storageRef = storageref(storage, `images/${phone}_${name}`);
      uploadBytes(storageRef, file).then((snapshot) => {
        console.log("Uploaded a blob or file!");
      });
      router.push("/login");
      //progress
      //end
    } else {
      setInvalid(true);
    }
  };

  return (
    <div className="flex flex-col mt-2 justicy-center place-items-center space-y-10">
      <div className="px-12 py-16 bg-green-300 rounded-md flex flex-col  space-y-5 justicy-center place-items-center">
        {invalid ? (
          <div className="text-red-500 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Please Enter Valid Value Fill the full form
          </div>
        ) : (
          ""
        )}
        <h1 className="text-bold text-xl">WELCOME PLEASE SIGNUP</h1>
        <input
          className="outline-none py-2 px-6"
          onChange={handleNameChange}
          type="text"
          placeholder="Full Name"
        />
        <input
          className="outline-none py-2 px-6"
          onChange={handleAddressChange}
          type="text"
          placeholder="Address"
        />
        <input
          className="outline-none py-2 px-6"
          onChange={handlePhoneChange}
          type="text"
          placeholder="Phone"
        />
        <input
          className="outline-none py-2.5 px-6"
          onChange={handleEmailChange}
          type="text"
          placeholder="Email"
        />
        <div>
          Gender
          <input
            className="ml-4"
            onChange={handleGenderChange}
            type="radio"
            name="gender"
            value="male"
            placeholder="Gender"
          />
          men
          <input
            onChange={handleGenderChange}
            type="radio"
            name="gender"
            value="female"
            placeholder="Gender"
          />
          women
        </div>
        <input
          className="outline-none py-2 px-6"
          onChange={handlePasswordChange}
          type="password"
          placeholder="password"
        />
        <input onChange={handleFileChange} type="file" />
        <button
          className="px-10 py-2 bg-black text-white flex"
          onClick={postdata}
        >
          SIGNUP{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mx-1 my-0.5 h-6 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
        <Link href="/login">
          <button className="px-10 py-2 bg-black text-white flex">
            LOGIN
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mx-1 my-0.5 h-6 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}
