import persons from './data'
import Person from './Person'

function PersonList() {

    let PersonElem = persons.find(elem => elem.name.last === "Wagner")
    let WomanElem = persons.some(elem => elem.gender === "female")
    let BirthFunction= persons.every(elem => {
        let year = new Date(elem.dob.data).getFullYear()
        return year >= 1995
})
let women= persons.filter(elem=> elem.gender === "female")

let men= persons.filter(elem=> elem.gender === "male")
return (
    <>

        <div className="row">
            {BirthFunction ? <p> Tüm üyeler 1995'dan büyük</p> :  <p>En az 1 kişi 1995'li.</p>}
            {WomanElem ? <p> En az 1 kadın üye mevcut </p> : <p>Hiç kadın yok</p>}
            {<Person data={PersonElem} /> }
            {men.map((person, index) => { return <Person data={person} key={index} /> })}
            {women.map((person, index) => { return <Person data={person} key={index} /> })}

            {persons.map((person, index) => { return <Person data={person} key={index} /> })}

        </div>
    </>
)
}
export default PersonList