import React, { useState } from "react";

const Form = () => {
  // const [name , setName ] = useState()
  // const [rollno , setRollno ] = useState()

  // const handleChange = (e) => {
  //     setName(e.target.value)
  // }

  // const handlerollChange = (e) => {
  //     setRollno(e.target.value)
  // }
  const obj = { name: "", rollno: "", FSD: false, AOS: false, Gender: "" };
  const select = ["C","C++"]
  const [form, setForm] = useState(obj);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form.name);
    console.log(form.rollno);
    console.log(form.FSD);
    console.log(form.AOS);
    console.log(form.Gender);
  };

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };
  return (
    <>
      <form>
        Name :{" "}
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        ></input>
        <br></br>
        Roll No :{" "}
        <input
          type="text"
          name="rollno"
          value={form.rollno}
          onChange={handleChange}
        ></input>
        <br></br>
        FSD{" "}
        <input
          type="checkbox"
          name="FSD"
          onChange={handleChange}
          checked={form.FSD}
        />
        AOS{" "}
        <input
          type="checkbox"
          name="AOS"
          onChange={handleChange}
          checked={form.AOS}
        />
        <br></br>
        Male <input type="radio" name="Gender" value = 'Male' onChange={handleChange} checked={form.Gender === 'Male'} />
        Female <input type="radio" name="Gender" value = 'Female' onChange={handleChange} checked={form.Gender === 'Female'}/><br></br>
        <select name = "skills" >
          <option ></option>
          <option></option>
        </select>
        <input type="submit" onSubmit={handleSubmit}></input>
      </form>

      

      <p>
        <h2>information</h2><br></br>
        name : {form.name} <br></br> Roll No : {form.rollno}
        <br></br>
        FSD : {form.FSD ? "Selected" : ""}
        <br></br> AOS : {form.AOS ? "Selected" : ""}
        <br></br>
        Gender : {form.Gender}
      </p>
    </>
  );
};

export default Form;
