import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { postData, getData, deleteData } from "@/lib/api";

interface PersonArray {
  _id?: string;
  serial?: string;
  name: string;
  phone: string;
  email: string;
  hobbies?: string;
  isSaved?: boolean;
}

interface InitialState {
  personData: PersonArray[];
  checkedData: PersonArray[];
}

const initialState: InitialState = {
  personData: [],
  checkedData: [],
};

const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    setPersonData: (state, action: PayloadAction<PersonArray[]>) => {
      state.personData = action.payload;
    },
    setAddEntry: (state, action: PayloadAction<PersonArray>) => {
      state.personData.push(action.payload);
    },
    setDeleteEntry: (state, action: PayloadAction<string>) => {
      state.personData = state.personData.filter(
        (item) => item._id !== action.payload
      );
      deleteData(action.payload);
    },
    setSaveData: (state) => {
      state.personData.forEach((item) => {
        if (!item.isSaved) {
          const data = {
            name: item.name,
            phone: item.phone,
            email: item.email,
            hobbies: item.hobbies,
          };
          //@ts-ignore
          postData(data);
          item.isSaved = true; // Update isSaved for the current item
        }
      });
    },
    setUpdateSerial: (state) => {
      state.personData.forEach((person: PersonArray, index: number) => {
        if (!person.serial) {
          person.serial = (index + 1).toString();
        }
      });
    },

    setCheckedData: (state, action: PayloadAction<PersonArray[]>) => {
      state.checkedData = action.payload;
    },
  },
});

export const {
  setAddEntry,
  setDeleteEntry,
  setSaveData,
  setPersonData,
  setUpdateSerial,
} = personSlice.actions;

export default personSlice.reducer;
