import { useState } from "react"
function App() {
  const [inputs, inputsUpdate] = useState({})

  function formUpdate(event) {
    const name = event.target.name;
    const value = event.target.value;
    inputsUpdate(values => ({ ...values, [name]: value }))
  }

  function formSubmit(event) {
    event.preventDefault()

    if( inputs.age < 18 ) {
        alert("age not suitable ")
    } else {
        event.target.submit()
    }
}


  return (
    <form className="col-md-4" onSubmit={formSubmit}>
      <label className="mt-3 mx-3">Enter your name:
        <input
          className="form-control"
          type="text"
          name="name"
          value={inputs.name || ""}
          onChange={formUpdate}
        />
      </label>

      <label className="mt-3 mx-3"> Enter your age:
        <input
          className="form-control"
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={formUpdate}
        />
      </label>

      <div className="col-md-4">
        <input className="btn btn-success" type="submit" />
      </div> 
   </form>
  )
}

export default App