import { useDispatch } from "react-redux";
import { updateBoxValue } from "../../features/boxProperties";

export default function BoxColorPicker({ inputData }) {
  const dispatch = useDispatch();

  function handleInputs(e) {
    dispatch(
      updateBoxValue({
        inputNumber: inputData.inputNumber,
        value: e.target.value,
      })
    );
  }

  return (
    <div className="mt-3">
      <p>{inputData.name}</p>
      <div className="flex mt-2 justify-between">
        <input
          value={inputData.value}
          onChange={handleInputs}
          type="text"
          className="flex-grow h-8 border border-gray-200 px-2 py-1 text-md"
        />
        <input
          value={inputData.value}
          onChange={handleInputs}
          type="color"
          className="h-8 cursor-pointer"
        />
      </div>
    </div>
  );
}
