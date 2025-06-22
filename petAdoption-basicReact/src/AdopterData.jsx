import { Pet } from "./Pet";



export function OwnerData({data, dataVisible}){
    console.log(data)
    
    return (
      <>
        <div className="cardContainer">
            {data.map((data,index)=>{
          <div className="card" key={index}>
            <p>Pet Name: {data.petName}</p>
            <hr className="hrLine" />
            <p>Type: {data.type}</p>
            <p>Breed: {data.breed}</p>
            <p>Owner Name: {data.ownerName}</p>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
          </div>
            })}
          
        <div className="addbtn">
          <button onClick={dataVisible} className="add">View Form</button>
        </div>
        </div>
      </>
    );
}