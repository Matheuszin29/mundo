

import {statesData} from "./data";


export default  statesData.features.map((state)=>{
     const cordinates = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);
});
