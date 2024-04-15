import { useEffect, useState } from "react";
import Estate from "./Estate";


const Estates = () => {
    const [estates, setEstates] = useState([]);
//fetch Data
    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setEstates(data))
    }, [])
    return (
        <div className="lg:grid grid-cols-3 gap-3 mx-auto">
             {   
             
                    estates.map(estate => <Estate key={estate.id} estate={estate}></Estate>)
                }
        </div>
    );
};

export default Estates;