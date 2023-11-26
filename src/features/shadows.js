import { createSlice, current } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
  // One object = one shadow
  {
    id: nanoid(8),
    active: true,
    inset: false,
    inputs: [
      {
        inputNumber: 1,
        name: "Horizontal offset",
        value: 10,
        type: "range",
        minMax: [-250, 250],
      },
      {
        inputNumber: 2,
        name: "Vertical offset",
        value: 10,
        type: "range",
        minMax: [-250, 250],
      },
      {
        inputNumber: 3,
        name: "Blur radius",
        value: 15,
        type: "range",
        minMax: [0, 250],
      },
      {
        inputNumber: 4,
        name: "Spread radius",
        value: -3,
        type: "range",
        minMax: [-250, 250],
      },
      {
        inputNumber: 5,
        name: "Color",
        value: "#4f4f4f",
        type: "color",
      },
    ],
  },
];

export const shadowSlice = createSlice({
  name: "shadowSlice",
  initialState,
  reducers: {
    removeShadow: (state, action) => {

      const shadowIndexToRemove = state.findIndex(
        // action.payload = shadow.id
        (shadow) => shadow.id === action.payload
      )

      state.splice(shadowIndexToRemove, 1);

      console.log(current(state));
    },
    addShadow: (state, action) => {
      // We create an object with the basics parameters
      state.push({
        id: nanoid(8),
        active: true,
        inset: false,
        inputs: [
          {
            inputNumber: 1,
            name: "Horizontal offset",
            value: 10,
            type: "range",
            minMax: [-250, 250],
          },
          {
            inputNumber: 2,
            name: "Vertical offset",
            value: 10,
            type: "range",
            minMax: [-250, 250],
          },
          {
            inputNumber: 3,
            name: "Blur radius",
            value: 15,
            type: "range",
            minMax: [0, 250],
          },
          {
            inputNumber: 4,
            name: "Spread radius",
            value: -3,
            type: "range",
            minMax: [-250, 250],
          },
          {
            inputNumber: 5,
            name: "Color",
            value: "#4f4f4f",
            type: "color",
          },
        ],
      });
    },
    updateShadowValue: (state, action) => {
      // We select the good shadow
      const currentShadow = state.find(
        (shadow) => shadow.id === action.payload.shadowID
      );

      // We select the good input
      const currentInput = currentShadow.inputs.find(
        (input) => input.inputNumber === action.payload.inputNumber
      );

      // We update the value
      currentInput.value = action.payload.value;
    },
    updateCheckbox: (state, action) => {

      console.log(action.payload);

      const currentShadow = state.find(
        shadow => shadow.id === action.payload.shadowID
      )

      currentShadow[action.payload.name] = !currentShadow[action.payload.name]
    },
  },
});

export const { removeShadow, addShadow, updateShadowValue, updateCheckbox } =
  shadowSlice.actions;
export default shadowSlice.reducer;