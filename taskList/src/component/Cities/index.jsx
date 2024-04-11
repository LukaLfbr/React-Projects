// path: taskList/src/component/Cities/index.jsx
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {fetchTown} from "../../store/Slice/citiesSlice.jsx";
import {selectCities, selectCitiesStatus} from "../../store/selector/index.js";

const Cities = () => {

    const dispatch = useDispatch()

    const [city, setCity] = useState('')

    const cities = useSelector(selectCities)
    const cityStatus = useSelector(selectCitiesStatus)

    const handleChange = (e) => {
        const {value} = e.target
        setCity(value)
        if(value.length > 2) {
            dispatch(fetchTown(value))
        }
    }

    return (
        <div>

            <input value={city} onChange={handleChange} type={"text"} />
            <div>
                {
                    cityStatus === 'idle' ?
                        cities.length > 0 &&
                            cities.map((city, index) => <div key={index}>{city}</div>)
                        :
                        <div>Loading...</div>
                }
            </div>
        </div>
    )
}

export default Cities