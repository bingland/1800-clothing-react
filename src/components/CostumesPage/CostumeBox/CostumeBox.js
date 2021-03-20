import './CostumeBox.scss'

const CostumeBox = (props) => {

    const { 
        id,
        caption,
        classtype, // classtype is just class. react gets confused over just "class"
        clothing,
        description,
        image,
        pdf,
        person,
        source,
        thumbnail,
        year_from,
        year_to
    } = props.data

    return (
        <div className="CostumeBox" data-id={id}>
            <div className="costumeUpper">
                <img className="costumeImage" src={`/images/costumes/${image}`} alt={`Costume image ${id}`} />
                <p className="costumeCaption">{caption}</p>
            </div>
            <div className="divider"></div>
            <div className="costumeLower">
                <div className="tag">{`${year_from}-${year_to}`}</div>
                <div className="tag">{person}</div>
                <div className="tag">{clothing}</div>
                <div className="tag">{classtype}</div>
            </div>
        </div>
    )
}

export default CostumeBox