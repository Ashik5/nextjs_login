import { useEffect, useState } from "react";
import { put, ref as storageref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
function User({ user }) {
  const [imageurl, setUserurl] = useState("");
  useEffect(() => {
      const storageRef = storageref(
        storage,
        `images/${user.phone}_${user.name}`
      );
      getDownloadURL(storageRef).then((downloadURL) => {
        setUserurl(downloadURL);
      });
    });
  return (
    <div className="flex justify-center mt-20">
      <div className="py-20 px-12 bg-gray-100 shadow rounded-md">
        <div className="flex justify-center">
          <img className="w-32 h-32 mb-8 rounded-full" src={imageurl} />
        </div>
        <p className="flex justify-center">Name: {user.name}</p>
        <p className="flex justify-center">Address: {user.address}</p>
        <p className="flex justify-center">Email: {user.email}</p>
        <p className="flex justify-center">Phobe: {user.phone}</p>
        <p className="flex justify-center">Gender: {user.gender}</p>
      </div>
    </div>
  );
}

export default User;
