import { useState } from "react";

function Form() {

  const [input, setInput] = useState([{ firstName: "" , lastName: "", email: ""} ]);
  const [view, setView] = useState("Hide");
 
  let getValue = (i, e) => {
    let newInput = [...input];
    newInput[i][e.target.name] = e.target.value;
    setInput(newInput);
  }
  let addFormFields = () => {
    setInput([...input, { firstName: "" , lastName: "", email: ""}])
  }

  let removeFormFields = (i) => {
    let newInput = [...input];
    newInput.splice(i, 1);
    setInput(newInput);
  }

    let formSubmit = (event) => {
      event.preventDefault();
      setView("Show")

    }

  return (
    <>
    <div className='form-box'>

      <form onSubmit={formSubmit} >

        {input.map((element, index) => (
          <div className="form" key={index}>
          
            <label>First Name</label>
           <input type="text" name="firstName" value={element.firstName || ""} onChange={(e) => getValue(index, e)}
            />
            <label>Last Name</label>
           <input type="text" name="lastName" value={element.lastName || ""} onChange={(e) => getValue(index, e)}
            />
            <label>Email</label>
            <input type="email" name="email" value={element.email || ""} onChange={(e) => getValue(index, e)}
            />
            {index ? (
              <button
                type="button"
                className="btn-danger btn-sm mt-2 "
                onClick={() => removeFormFields(index)}
              >
                Remove
              </button>
            ) : null}
          </div>
        ))}
          <button
            className="btn btn-info m-2"
            type="button"
            onClick={() => addFormFields()}
          > Add</button>
          <button className="btn btn-success m-2" type="submit">
            Submit
          </button>
      </form>
      </div>
      {view === "Show" ? <Table TableData={input}/> : null}
      </>
  )
}

function Table(props) {
  return (
    <div>
      <div class="table-data">
        <table class="table ">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name </th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {props.TableData.map((list) => {
              return (
                <tr>
                  <td>{list.firstName}</td>
                  <td>{list.lastName}</td>
                  <td>{list.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Form