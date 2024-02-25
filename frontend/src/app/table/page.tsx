"use client";
import { useEffect, useState } from "react";
import { Person, columns } from "./columns";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import AddEntry from "@/components/AddEntry";
import { postData, getData } from "@/lib/api";

// import DeleteEntry from "@/components/DeleteEntry"; // Import the DeleteEntry component
interface PersonAraay {
  _id?: string;
  serial: string;
  name: string;
  phone: string;
  email: string;
  hobbies?: string;
  isSaved?: boolean;
}
function DemoPage() {
  const [personData, setPersonData] = useState<PersonAraay[]>([]); // Initialize personData state as an empty array

  useEffect(() => {
    // Fetch data from the server
    const fetchData = async () => {
      const data = await getData();
      // const data  = data.data
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
      setPersonData(formattedData);
    };
    fetchData();
  }, []);

  // Function to add an entry to personData array
  const addEntry = (entry: any) => {
    setPersonData([...personData, entry]);
  };

  // Function to delete an entry from personData array
  // const deleteEntry = (id: string) => {
  //   setPersonData(personData.filter((person) => person.id !== id));
  // };

  const saveData = () => {
    personData.forEach((item) => {
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
  };
  {
    personData.forEach((person, index) => {
      person.serial = (index + 1).toString();
    });
  }
  return (
    <div className="container mx-auto py-5">
      <DataTable columns={columns} data={personData} />
      <span className="flex flex-row gap-1">
        {/* Pass addEntry function to AddEntry component */}
        <AddEntry addEntry={addEntry} />
        {/* Pass deleteEntry function to DeleteEntry component */}
        {/* <DeleteEntry deleteEntry={deleteEntry} /> */}
        {/* Save button (implement functionality to save data to database) */}
        <Button onClick={saveData}>Save</Button>
      </span>
    </div>
  );
}

export default DemoPage;
