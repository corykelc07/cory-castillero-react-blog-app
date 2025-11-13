

function IndividualComment({name, content}) {
    return (
        <div className="border-b">
            <p>Name: {name}</p>
            <p>"{content}"</p>
        </div>
    )
}

export default IndividualComment