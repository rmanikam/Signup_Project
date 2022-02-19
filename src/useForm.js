import { useState } from "react";

function useForm(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    const new_value = e.target.value;
    // e.target.type === "checkbox" ? e.target.check : e.target.value;

    setValue(new_value);
  }

  return {
    value,
    onChange: handleChange,
  };
}
export default useForm;
