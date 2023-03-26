import persons from './data'
import Person from './Person'

function PersonList() {

    return (
        <>

            <div className="row">    
                   {persons.map((person, index) => { return <Person data={person} key={index} /> })}
            </div>
        </>
    )
}
export default PersonList