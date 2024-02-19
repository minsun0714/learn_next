"use client";

import React, { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div>
      <p>에러 삐융삐융</p>
      <button onClick={() => reset} className='bg-gray-400'>
        다시 시도
      </button>
    </div>
  );
};

export default Error;
