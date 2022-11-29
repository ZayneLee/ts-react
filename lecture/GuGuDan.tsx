import * as React from "react";

const GuGuDan = () => {
  return (
    <>
      <div>
        {first} 곱하기 {second}는?
      </div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputEl} />
      </form>
    </>
  );
};

export default GuGuDan;
