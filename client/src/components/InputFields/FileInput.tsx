import React, { useState } from "react";
import { Input, InputProps } from "./Input";
import Label from "../Label";

const FileInput = ({
  label,
  onChange,
  multiple,
  ref,
  ...props
}: InputProps) => {
  const [uploaded, setUploaded] = useState<FileList | null>(null);
  const placeholder = multiple ? "Файлы не выбраны" : "Файл не выбран";
  const uploadedFiles =
    uploaded &&
    Array.from(uploaded)
      .map((file) => file.name)
      .join(", ");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploaded(e.target.files);

    if (onChange) onChange(e);
  };

  return (
    <div className="file-input__container" ref={ref}>
      <Label className="file-input">
        <Input
          type="file"
          multiple={multiple}
          onChange={handleChange}
          {...props}
        />
        {label}
      </Label>
      <div className="file-input__selected">{uploadedFiles || placeholder}</div>
    </div>
  );
};

export default FileInput;
