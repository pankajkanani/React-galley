import { GalleryData } from "./GalleryData";
import { useEffect, useState } from "react";
function App() {

  const [data,setData] = useState([]);
  const [collection,setCollection] = useState([]);

  useEffect(()=>{
    setData(GalleryData.filter((item)=> item.isVideo == "false"));
    setCollection([... new Set(GalleryData.map((item)=> item.sub_category_id))])
  },[]) 

  const gallery_filter = (itemData) =>{
    const filterData = GalleryData.filter((item)=> item.sub_category_id == itemData && item.isVideo == "false");
    setData(filterData);
  }

  return (
    <div className="App">
      <div className="galleryWrapper">
        <div className="filterItem">
          <ul>
            <li><button onClick={()=> setData(GalleryData)}>All</button></li>
            {
              collection.map((item)=> <li><button onClick={()=>{gallery_filter(item)}}>{item}</button></li>)
            }
          </ul>
        </div>
        <div className="galleryContainer">
          {
            data.map((item)=> <div  key={item.id} className="galleryItem"><img src={item.background_image_path  } /></div> )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
