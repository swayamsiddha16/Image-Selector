import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Mainboard from "./component/Mainboard";
import Pin from "./component/Pin";
import Unsplash from "./api/unsplash";
import { useState } from "react";
import { color } from "@mui/system";
import CancelIcon from '@mui/icons-material/Cancel';
function App() {
  const [pins, setNewPins] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const [selectedImage,setSelectedImage] = useState("");


  const getImages = async (term) => {
   
    const { data } = await Unsplash.get(
      "https://api.unsplash.com/search/photos",
      {
        params: { query: term, per_page: 35 },
      }
    );
    console.log(data);
    setNewPins(data.results);
    return data.results;
  };

  const onSearchSubmit = (term) => {
    setSearchQuery(term);
   
    getImages(term);

  
  };

  

  const [hover, setHover] = useState(false);
  console.log("searchQuery", searchQuery);
  return (
    <div
      className="app"
      style={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {selectedImage?<div
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "50vw",
          height: "70vh",
          backgroundColor: "white",
          zIndex: 8,
          overflow: "scroll",
          borderRadius: "10px",
          padding:"10px",
          paddingTop:"10px",
        }} 
        
      >
        <CancelIcon style={{fontSize:"40px", position:"absolute" ,top:"10px" ,color:"#5c615d"}} onClick={()=>setSelectedImage("")}/>
        <img src={selectedImage} style={{ width: "48vw" }} />
      </div>:null}
      <Header onSubmit={onSearchSubmit} />

      {!searchQuery ? (
        <div
          style={{
            width: "100%",
            height: "90vh",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <button
            type="text"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              backgroundColor: !hover ? "#555" : "#aaa",
              msTransform: "translate(-50%,-50%)",
              color: "white",
              fontSize: "16px",
              padding: "12px 24px",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => onSearchSubmit("random")}
          >
            click here to view more
          </button>

          <img
            src="https://picsum.photos/1200/900?random=1"
            style={{ width: "100vw" }}
          />
        </div>
      ) : null}

      <h1 style={{ marginRight: "auto", marginLeft: "10vw" }}>{searchQuery}</h1>
      <Mainboard pins={pins} setSelectedImage={setSelectedImage}/>
     
    </div>
  );
}

export default App;
