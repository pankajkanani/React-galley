import { GalleryData } from "./GalleryData";
import { category } from "./database/category";

import { useEffect, useState } from "react";
function App() {

  const [data,setData] = useState([]);
  const [collection,setCollection] = useState([]);

  useEffect(()=>{
    setData(shuffleArray(GalleryData.filter((item)=> item.isVideo == "false")));
    setCollection([... new Set(GalleryData.map((item)=> item.sub_category_id))])
  },[]) 

  const gallery_filter = (itemData) =>{
    const filterData = GalleryData.filter((item)=> item.sub_category_id == itemData && item.isVideo == "false");
    setData(shuffleArray(filterData));
  }
  const category_filter = (itemid) =>{
    let catname = category.filter((item)=> item.id == itemid);
    
    return catname.length > 0 ? catname[0]?.sub_category_name : itemid;
    
  }
  const shuffleArray = (array) => {
    // create a copy of the array so that the original array is not mutated
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  return (
    <div className="App">
      <div className="galleryWrapper">
        <div className="filterItem">
          <ul>
            <li><button onClick={()=> setData(shuffleArray(GalleryData))}>All</button></li>
            {
              collection.map((item)=> <li><button onClick={()=>{gallery_filter(item)}}>{category_filter(item) }</button></li>)
            }
          </ul>
        </div>
        <div className="galleryContainer">
          {
            data.map((item)=> <div  key={item.id} className="galleryItem"><img src={item.background_image_path  }  name={category_filter(item.id)}/></div> )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
