import React, { useEffect } from "react";
import { useRouter } from "next/router";
const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      console.log("Hitting");
      router.push("/");
    });
  }, []);
  return (
    <div>
      <h1>Sorry page not Found.....🙁🙁🙁🙁</h1>
    </div>
  );
};

export default NotFound;
