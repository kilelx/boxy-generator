import { useDispatch, useSelector } from "react-redux"
import { updateCheckbox } from "../../features/shadows"

export default function ShadowCheckbox({name, shadowID}) {

    // We select the good shadow
    const checkboxShadow = useSelector(state => state.shadows.find(shadow => shadow.id === shadowID));

    const dispatch = useDispatch();

  return (
    <>
        <input
        type="checkbox"
        // We give the shadowID, and the name of the checkbox
        onChange={() => dispatch(updateCheckbox({shadowID, name}))}
        // Is the checkbox checked in shadows.js ?
        checked={checkboxShadow[name]}
        id={`checkbox-${name}-${shadowID}`}
        className="h-4 w-4 border-gray-300 rounded mr-2 -pt-2"
        />
        <label
        htmlFor={`checkbox-${name}-${shadowID}`}
        className="capitalize leading-4 mr-5">
            {name}
        </label>
    </>
  )
}