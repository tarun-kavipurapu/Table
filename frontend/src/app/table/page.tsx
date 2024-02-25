"use client";
import { use, useEffect, useState } from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import AddEntry from "@/components/AddEntry";
import { postData, getData, deleteData } from "@/lib/api";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setUpdateSerial,
  setSaveData,
  setPersonData,
} from "@/store/personSlice";
// import DeleteEntry from "@/components/DeleteEntry"; // Import the DeleteEntry component

function DemoPage() {
  const dispatch = useAppDispatch();
  const personData = useAppSelector((state) => state.person.personData);
  useEffect(() => {
    // Fetch data from the server
    const fetchData = async () => {
      const data = await getData();
      const formattedData = data.map((item: any) => {
        return {
          _id: item._id,
          name: item.name,
          phone: item.phone,
          email: item.email,
          hobbies: item.hobbies,
          isSaved: true,
        };
      });
      dispatch(setPersonData(formattedData));
    };
    fetchData();
  }, [dispatch]);
  useEffect(() => {
    dispatch(setUpdateSerial());
  }, [dispatch, personData]);

  // Function to add an entry to personData array
  return (
    <div className="container mx-auto py-5">
      <DataTable columns={columns} data={personData} />
      <span className="flex flex-row gap-1">
        {/* Pass addEntry function to AddEntry component */}
        <AddEntry />

        <Button onClick={() => dispatch(setSaveData())}>Save</Button>
      </span>
    </div>
  );
}

export default DemoPage;
