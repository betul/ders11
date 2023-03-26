function Person({ data }) {


    return (
        <div className="card col-md-2 my-2 mx-2 py-2">
        <p>{data.name.first} {data.name.last} </p> 
        <p> {new Date(data.dob.date).getFullYear()}   </p>
        <img  className="img-thumbnail" src={data.picture.large} alt="person" />
    </div>
    )
}

export default Person