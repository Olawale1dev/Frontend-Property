import './pages/My.css';

export default function FetchPropertyForRent(props) {
    const displayPropertyRent = (props) =>{

        const {property} = props;

        if (property.length > 0){

            return (
                property.map((property, index) =>{
                    console.log(property);

                    return(
                        <div className="PostPropertyBackground" key={property._id}>
                            <h3 className="">{property.title}</h3>
                            <image>{property.url}</image>
                            <h4>{property.price}</h4>
                            <h4>{property.purpose}</h4>
                            <h4>{property.type}</h4>
                            <h4>{property.subType}</h4>
                            <h4>{property.bedroomNo}</h4>
                            <h4>{property.bathroomNo}</h4>
                            <h4>{property.toiletNo}</h4>
                            <h4>{property.size}</h4>
                            <h4>{property.statuse}</h4>
                            <h4>{property.state}</h4>
                            <h4>{property.locality}</h4>
                            <h4>{property.area}</h4>
                            <h4>{property.street}</h4>
                            <h4>{property.agentName}</h4>
                            <h4>{property.agentNumber}</h4>
                            <p>{property.ddescription}</p>
                            <a href={property.youtubeLink} target="_blank>">Youtube video Link</a>

                        </div>
                   )
                })
                

            )

            
        }else{
            return (<h3>No property yet</h3>)
        }

    }
    return(
        <>
        {displayPropertyRent(props)}
        </>
    )
    
    }