
//  pros are imutable

const Props=(props)=>{
    console.log(props);
    console.log(props.data);
    return(
        <div>
            {/* <h1>Hello {props.data}</h1> */}
            {/* <h1>{props.data[0]}</h1>
            <h1>{props.data[1]}</h1>
            <h1>{props.data[2]}</h1>
            <h1>{props.data[3]}</h1>
            <h1>{props.data[4]}</h1> */}


            {/* <h1>{}</h1>
            <h1>{props.data.name}</h1>
            <h1>{props.data.id}</h1> */}
        </div>
    )
}
export default Props