import { ref, onValue, remove, child } from "firebase/database";
import { useState, useEffect } from "react";
import { database } from "../firebase";
import User from "../components/user";
import { useRouter } from "next/router";

export default function Home() {
  const [users,setUsers]=useState()
  const router = useRouter();
  const queryLength=Object.keys(router.query).length
  

  //reading data
  useEffect(()=>{
    if(queryLength===0){
      router.push("/login")
    }else{
      setUsers(router.query);
    }
  },[])
  return (
    <div className="flex flex-col justify-center h-screen w-screen">
      <div className="mt-8 flex justify-center text-purple-500 font-bold text-3xl border-b-4 border-purple-500">
          User Information
      </div>
      <div className="flex-1 justify-center bg-green-300">
       {users?<User user={users}/>:"No User Found"}
      </div>
    </div>
  );
}
