import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import UserCard from "./components/UserCard";

var flowers = [
  {
    name: "Kalo golap",
    price: 50,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/037/529/397/small_2x/ai-generated-black-roses-with-water-drops-on-the-background-of-the-sea-and-sky-photo.jpg",
    description: "Onek kalo golap",
  },
  {
    name: "Water lily",
    price: 10,
    image:
      "https://cdn.mos.cms.futurecdn.net/sMWQVM3mnZnVmSdGRszgrk-1280-80.jpg",
    description: "Jatiyo ful",
  },
  {
    name: "Surjomukhi",
    price: 100,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0TvoTWv0SDv20nirbknBQsGVlyUwu2SEpFQ&s",
    description: "Amar priyo ful",
  },
  {
    name: "Joba",
    price: 40,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Hibiscus_Brilliant.jpg/640px-Hibiscus_Brilliant.jpg",
    description: "Joba ful "
  }
];

function App() {

  const [users, setUsers]= useState();

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=> setUsers(data))
  }, [])

  console.log(users)

  return (
    <>
      <Navbar />
      <h3 className="text-center">Products</h3>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "start",
          flexWrap: "wrap",
        }}
      >
        {flowers.map((fl) => (
          <Card
            key={fl.name}
            flowerName={fl.name}
            price={fl.price}
            description={fl.description}
            image={fl.image}
          />
        ))}
      </div>

      <div>
        <h2 className="text-center">Friend List</h2>
        <div style={{
           display: "flex",
           gap: "1rem",
           justifyContent: "start",
           flexWrap: "wrap",
        }}>
        {
          users?.map(usr=> <UserCard key={usr.id} name={usr.name} email={usr.email} phone={usr.phone} company={usr.company.name} address={usr.address.city}/>)
        }
        </div>
      </div>
    </>
  );
}

export default App;
