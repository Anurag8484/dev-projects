import { Pet } from "./Pet";



export function OwnerData({data}){
    console.log(data)
    
    return (
      <div className="cardContainer">
        <div className="card">
          <p>Pet Name: {data[0].petName}</p>
          <p>Type: {data[0].type}</p>
          <p>Breed: {data[0].breed}</p>
          <p>Owner Name: {data[0].ownerName}</p>
          <p>Email: {data[0].email}</p>
          <p>Phone: {data[0].phone}</p>
        </div>
      </div>
    );
}