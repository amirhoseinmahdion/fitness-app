import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const router = useRouter();
  const { blogId } = router.query;
  return <div className="text-center text-5xl my-20 text-neutral-50 ">درحال توسعه {blogId}</div>;
};

export default index;
