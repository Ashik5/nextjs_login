import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import { database } from "../firebase";
import { ref, query, orderByChild, equalTo, onValue } from "firebase/database";

function About() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const router = useRouter();

  //phone
  const handlePhoneChange = (event) => {
    const value = event.target.value;
    setPhone(value);
  };
  //password
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  //user loggin
  const login = () => {
    const dbRef = query(
      ref(database, "users"),
      orderByChild("phone"),
      equalTo(phone)
    );
    onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        //getting data
        const userData = [];
        const user = snapshot.val();
        for (let id in user) {
          userData.push({ id, ...user[id] });
        }
        //data validation
        if (userData[0].phone === phone && userData[0].password === password) {
          //redirecting
          router.push(
            `/?id=${userData[0].id}&&name=${userData[0].name}&&phone=${userData[0].phone}&&email=${userData[0].email}&&address=${userData[0].address}&&gender=${userData[0].gender}`
          );
        } else {
          setInvalid(true);
        }
      } else {
        setInvalid(true);
      }
    });
  };

  return (
    <div className="flex flex-col mt-32 justicy-center place-items-center space-y-10">
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
            Please Enter Valid Value Or SIGNUP
          </div>
        ) : (
          ""
        )}
        <h1 className="text-bold text-xl">PLEASE LOG IN</h1>
        <input
          className="outline-none py-2.5 px-6"
          placeholder="Enter Phone Number"
          onChange={handlePhoneChange}
          type="text"
        />
        <input
          className="outline-none py-2.5 px-6"
          placeholder="Enter Password"
          onChange={handlePasswordChange}
          type="text"
        />
        <button className="px-10 py-2 bg-black text-white flex" onClick={login}>
          LOG IN
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
        <Link href="/signup">
          <button className="px-10 py-2 bg-black text-white flex">
            OR SIGN UP
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

export default About;
