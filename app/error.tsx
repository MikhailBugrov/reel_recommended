"use client";
const ErrorWrapper = ({ error }: { error: Error }) => {
  return (
    <>
      <div>Error {error.message}</div>
    </>
  );
};

export default ErrorWrapper;
