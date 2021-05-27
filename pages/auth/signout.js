import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default () => {
  const router = useRouter();

  useEffect( () => {
    try {
      const response =  axios.post("/api/signout", {});
      router.push("/");
    } catch (err) {
      console.log("Error:" + err);
    }
  }, []);

  return <div>Signing you out...</div>;
};
