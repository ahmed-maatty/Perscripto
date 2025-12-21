import React from "react";

interface IProps {
  labelTxt: string;
  inputType: string;
  inputPlaceHolder: string;
  inputName: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  labelTxt,
  inputType,
  inputPlaceHolder,
  inputName,
  onChange,
  value,
}: IProps) {
  return (
    <div className="input_container flex flex-col items-start mb-4">
      <label htmlFor="" className="mb-1 capitalize w-full">
        {labelTxt}
      </label>
      <input
        type={inputType}
        placeholder={inputPlaceHolder}
        name={inputName}
        className="w-full"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default Input;
