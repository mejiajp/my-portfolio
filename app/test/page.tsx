"use client";

import React, { useEffect } from "react";

function Page() {
  const thisFunction = (string: string) => {
    const array = string.split("");
    console.log(array);
  };

  useEffect(() => {
    thisFunction("1111010");
  }, []);

  return <div>page</div>;
}

export default Page;
