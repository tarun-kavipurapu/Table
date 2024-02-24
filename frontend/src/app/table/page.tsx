import { Person, columns } from "./columns";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import AddEntry from "@/components/AddEntry";
async function getData(): Promise<Person[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      name: "John Doe",
      phone: "1234567890",
      email: "john@example.com",
      hobbies: "Reading, Swimming",
    },
    {
      id: "2",
      name: "Jane Smith",
      phone: "9876543210",
      email: "jane@example.com",
      hobbies: "Cooking, Painting",
    },
    {
      id: "3",
      name: "Alice Johnson",
      phone: "5551234567",
      email: "alice@example.com",
      hobbies: "Gardening, Cycling",
    },
    {
      id: "4",
      name: "Bob Brown",
      phone: "4447890123",
      email: "bob@example.com",
      hobbies: "Photography, Hiking",
    },
    {
      id: "5",
      name: "Emily Davis",
      phone: "3335678901",
      email: "emily@example.com",
      hobbies: "Dancing, Yoga",
    },
    {
      id: "6",
      name: "Michael Wilson",
      phone: "2223456789",
      email: "michael@example.com",
      hobbies: "Skiing, Traveling",
    },
    {
      id: "7",
      name: "Sophia Martinez",
      phone: "1119012345",
      email: "sophia@example.com",
      hobbies: "Painting, Cooking",
    },
    {
      id: "8",
      name: "William Anderson",
      phone: "9996781234",
      email: "william@example.com",
      hobbies: "Fishing, Reading",
    },
    {
      id: "9",
      name: "Olivia Thomas",
      phone: "8884567890",
      email: "olivia@example.com",
      hobbies: "Singing, Writing",
    },
    {
      id: "10",
      name: "James Taylor",
      phone: "7772345678",
      email: "james@example.com",
      hobbies: "Playing guitar, Cooking",
    },
    {
      id: "11",
      name: "Emma Jackson",
      phone: "6668901234",
      email: "emma@example.com",
      hobbies: "Shopping, Watching movies",
    },
    {
      id: "12",
      name: "Ethan White",
      phone: "5555678901",
      email: "ethan@example.com",
      hobbies: "Gaming, Programming",
    },
    {
      id: "13",
      name: "Ava Harris",
      phone: "4441234567",
      email: "ava@example.com",
      hobbies: "Drawing, Photography",
    },
    {
      id: "14",
      name: "Liam Martin",
      phone: "3337890123",
      email: "liam@example.com",
      hobbies: "Football, Playing instruments",
    },
    {
      id: "15",
      name: "Mia Thompson",
      phone: "2225678901",
      email: "mia@example.com",
      hobbies: "Swimming, Dancing",
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-5">
      <DataTable columns={columns} data={data} />
      <span className="flex flex-row gap-1">
        <AddEntry />
        {/* <DeleteEntry /> */}
      </span>
    </div>
  );
}
