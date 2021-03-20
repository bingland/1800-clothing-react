import FilterArea from './FilterArea/FilterArea'
import CostumeBox from './CostumeBox/CostumeBox'
import './CostumesPage.scss'

// costumes json
import cjson from '../../json/costumes.json'

const CostumesPage = () => {

    console.log(cjson[0])

    return (
        <div className="CostumesPage">
            <FilterArea />
            <div className="CostumesArea">
                {cjson.map(c => (
                    <CostumeBox 
                        key={c.id} 
                        data={c}
                    />
                ))}
            </div>
        </div>
    )
}

export default CostumesPage