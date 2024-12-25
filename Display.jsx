import React,{useState,useEffect} from "react";
import axios from "axios";
import Elements from "./Elements";
import Search from "./Search";
function Display(){
    const [item,setItem]=useState([]);
    const [menu,setMenu]=useState('');

    useEffect(()=>{
        axios
        .get('https://api.sampleapis.com/beers/ale')
        .then((res)=>setItem(res.data))
        .catch((err)=>console.log(err))
    },[])
    
    function getSearchedItem(inputText){
        setMenu(inputText);
    }

    const result=item.filter((elem)=>
        elem.name.toLowerCase().includes(menu.toLowerCase()) && elem.image);
    
    const [validItems, setValidItems] = useState(item);
    
    useEffect(() => {
        setValidItems(item.filter((elem) => elem.image)); 
    }, [item]);

    function handleImageError(id) {
        setValidItems((prevItems) => prevItems.filter((elem) => elem.id !== id));
    }

    
    return (
        <div>
            <Search onSearch={getSearchedItem}/> 
             {menu 
            ?  result.map((elem)=>(
                <Elements 
                    key={elem.id}
                    id={elem.id}
                    image={elem.image} 
                    name={elem.name} 
                    price={elem.price}
                    onError={handleImageError} 
                />
                ))
                :
                validItems.map((elem)=>(
                    <Elements 
                    key={elem.id}
                    id={elem.id}
                    image={elem.image} 
                    name={elem.name} 
                    price={elem.price}
                    onError={handleImageError} 
                />
                  )  )
           }
            
        </div>
    ) 
}
export default Display;