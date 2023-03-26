import { useState } from "react"

function ContactForm() {
    const [name, nameUpdate] = useState("")
    const [surname, surnameUpdate] = useState("")
    const [birth, birthUpdate] = useState("")
    const [phone, phoneUpdate] = useState("")

    function nameChange(event) {
        nameUpdate(event.target.value)
    }

    function birthChange(event) {
        birthUpdate(event.target.value)
    }

    function SurnameChange(event) {
        surnameUpdate(event.target.value)
    }

    function phoneChange(event) {
        phoneUpdate(event.target.value)
    }


    let Error = name.includes(".")
    let Error1 = surname.includes(".")
    let Error2 = birth.includes(".")
    let Error3 = phone.includes(".")

    function formSubmit(eventE){
        eventE.preventDefault()

        if (birth.length !== 4 ) {
            alert("Year of birth must be 4 characters. ")
        }
        else {
            eventE.target.submit()
        }
    }
    return (

        <form className="row" onSubmit={formSubmit}>
            <div className="col-md-6 my-5">

                <input value={name} onChange={nameChange} type="text" className="form-control" placeholder="Name" />
                <label> {Error ? "name . cannot contain" : ""} </label>

                <input value={surname} onChange={SurnameChange} type="text" className="form-control mt-2" placeholder="Surname" />
                <label> {Error1 ? "surname . cannot contain" : ""} </label>

                <input value={birth} onChange={birthChange} type="text" className="form-control mt-2" placeholder="Year of Birth" />
                <label> {Error2 ? "birth . cannot contain" : ""} </label>

                <input value={phone} onChange={phoneChange} type="text" className="form-control mt-2" placeholder="Phone" />
                <label> {Error3 ? "phone . cannot contain" : ""} </label>

                <button className="btn btn-success mt-4" type="Submit"> Submit </button>


            </div>

            <div className="col-md-6 my-5">
                <p> Name : {name} </p>
                <p> Surname : {surname} </p>
                <p>Birth Date: {birth} </p>
                <p>Phone: {phone} </p>
            </div>
        </form>




    )
}


export default ContactForm


/* import { useState } from "react"

function ContactForm() {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [birth, setBirth] = useState("")
    const [phone, setPhone] = useState("")

    const handleNameChange = (event) => setName(event.target.value)
    const handleSurnameChange = (event) => setSurname(event.target.value)
    const handleBirthChange = (event) => setBirth(event.target.value)
    const handlePhoneChange = (event) => setPhone(event.target.value)

    const nameError = name.includes(".")
    const surnameError = surname.includes(".")
    const birthError = birth.includes(".")
    const phoneError = phone.includes(".")

    const handleSubmit = (event) => {
        event.preventDefault()

        if (birth.length !== 4) {
            alert("Year of birth must be 4 characters.")
        } else {
            event.target.submit()
        }
    }

    return (
        <form className="row" onSubmit={handleSubmit}>
            <div className="col-md-6 my-5">
                <input
                    value={name}
                    onChange={handleNameChange}
                    type="text"
                    className="form-control"
                    placeholder="Name"
                />
                <label>{nameError ? "Name cannot contain '.'" : ""}</label>

                <input
                    value={surname}
                    onChange={handleSurnameChange}
                    type="text"
                    className="form-control mt-2"
                    placeholder="Surname"
                />
                <label>{surnameError ? "Surname cannot contain '.'" : ""}</label>

                <input
                    value={birth}
                    onChange={handleBirthChange}
                    type="text"
                    className="form-control mt-2"
                    placeholder="Year of Birth"
                />
                <label>{birthError ? "Birth cannot contain '.'" : ""}</label>

                <input
                    value={phone}
                    onChange={handlePhoneChange}
                    type="text"
                    className="form-control mt-2"
                    placeholder="Phone"
                />
                <label>{phoneError ? "Phone cannot contain '.'" : ""}</label>

                <button className="btn btn-success mt-4" type="submit">Submit</button>
            </div>

            <div className="col-md-6 my-5">
                <p>Name: {name}</p>
                <p>Surname: {surname}</p>
                <p>Birth Date: {birth}</p>
                <p>Phone: {phone}</p>
            </div>
        </form>
    )
}

export default ContactForm
*/