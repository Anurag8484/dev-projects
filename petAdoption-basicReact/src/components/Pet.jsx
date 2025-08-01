import { useState } from "react";
import { OwnerData } from "./AdopterData";
import { validation } from "../utils/validation";
export function Pet() {
    const [formData, setformData] = useState([])
    const [values, setValues] = useState({
      petName: "",
      type: "",
      breed: "",
      ownerName: "",
      email: "",
      phone: "",
    });
    const [showTable,setTable] = useState(false)
    const { petName, type, breed, ownerName, email, phone } = values;
    // console.log(petName, type, breed, ownerName, email, phone);

    const [errors, setErrors] = useState({
      petName: "",
      type: "",
      breed: "",
      ownerName: "",
      email: "",
      phone: "",
    });



    function handleChange(event){
        const {name, value} = event.target;
    
        setValues((c)=>({
            ...c,[name]: value,
        }));

        let errorsCopy = { ...errors };
        const errorR = validation(name,value, errorsCopy)
        console.log(errorR)
        setErrors(errorR)

    }

    function handleSubmit(){
        console.log(
          `Pet Name: ${petName} 
            Pet Type: ${type} 
            Breed: ${breed} 
            Adopter Name: ${ownerName} 
            Email: ${email} 
            Phone: ${phone}`
        );
        const data = { petName,type,breed,ownerName,email,phone };
        setformData((pv)=>[...pv,data]);
        console.log(formData)
        setValues({
          petName: "",
          type: "",
          breed: "",
          ownerName: "",
          email: "",
          phone: "",
        });
        setErrors({
          petName: "",
          type: "",
          breed: "",
          ownerName: "",
          email: "",
          phone: "",
        });
    };
    function dataVisible(){
        setTable(c=>!c)
        console.log(showTable)
    
    }
if(!showTable){

    return (
      <div className="top-container">
        <div className="formContainer">
          <div className="formBox">
            <div className="inputs">
              <label htmlFor="petName">Pet Name</label>
              <input
                type="text"
                name="petName"
                id=""
                placeholder="Pet Name"
                value={petName}
                onChange={handleChange}
              />
              <small>{errors.petName}</small>
            </div>
            <div className="inputs">
              <label htmlFor="type">Pet Type</label>
              <select value={type} name="type" id="" onChange={handleChange}>
                <option value="select">Select from options</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="bird">Bird</option>
              </select>
            </div>

            <div className="inputs">
              <label htmlFor="breed">Breed</label>
              <input
                value={breed}
                type="text"
                name="breed"
                id=""
                placeholder="Breed.."
                onChange={handleChange}
              />
              <small>{errors.breed}</small>
            </div>
            <div className="inputs">
              <label htmlFor="ownerName">Owner Name</label>

              <input
                type="text"
                name="ownerName"
                id=""
                placeholder="Owner Name"
                value={ownerName}
                onChange={handleChange}
              />
            <small>{errors.ownerName}</small>
            </div>
            <div className="inputs">
              <label htmlFor="email">Email</label>

              <input
                type="email"
                name="email"
                id=""
                placeholder="Email Address"
                value={email}
                onChange={handleChange}
              />
              <small>{errors.email}</small>
            </div>
            <div className="inputs">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                id=""
                placeholder="Phone"
                value={phone}
                onChange={handleChange}
              />
              <small>{errors.phone}</small>
            </div>
          </div>
          <div className="buttonBox">
            <button className="sbmtbutton" onClick={handleSubmit}>
              Submit
            </button>
            <button onClick={dataVisible}>View Data</button>
          </div>
        </div>
      </div>
    );
}else{
    return (
      <>
        <OwnerData data={formData} dataVisible={dataVisible} />
      </>
    );
}
}
