import {useDispatch} from "react-redux"
import {updateBoxValue} from "../../features/boxProperties"

export default function BoxRange({inputData}) {

  const dispatch=useDispatch()

  function handleInputs(e) {
    dispatch(updateBoxValue({
      inputNumber: inputData.inputNumber,
      value: e.target.value
    }))
  }

  return (
    <div className="my-8">
      <div className="flex justify-between">
        <p>{inputData.name}</p>
        <div className="flex items-baseline mb-2">
          <input
          onChange={handleInputs}
          value={inputData.value}
          className="w-14 h-8 mr-2 border border-gray-200 text-center"
          type="number"
          />
          <p>px</p>
        </div>
      </div>
      <div className="relative z-0 w-full flex items-center before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:-z-10 before:content-[''] before:w-0.5 before:h-8 before:bg-gray-300 before:rounded">
        <input
        onChange={handleInputs}
        value={inputData.value}
        type={inputData.type}
        name={inputData.name}
        min={inputData.minMax[0]}
        max={inputData.minMax[1]}
        className="w-full h-[2px] bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </div>
  )
}