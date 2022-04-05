//load useState and useEffect hooks for state managenment to consume the Open Library API
import react, {useState, useEffect} from "react";
import './App.css';
import Search from "./search";


function App() {

     const [data, setData] = useState("");
     const [error, setError] = useState("");
     const [search, setSearch] = useState("");
     const [searchResults, setSearchResults] = useState([]);


   
  
     //return data
     const searchHandler = (search) => {
       setSearch(search);
       if(search !== ""){
         const newBookList = array.filter((name) => {
           return Object.values(name)
         });
         setSearchResults(newBookList);
       } else{
         setSearchResults (array);
       }
     };

     console.log (searchResults);

     function handleClick() {
      console.log('Click');
  } 


     useEffect (() => {
      fetch ("https://openlibrary.org/search/authors.json?q="+search)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch(setError);

      console.log(data);
 //Add empty [] to fetch data only once
  }, [search.length]);
   //If error show an Error state
  if (error){
        return <pre>{JSON.stringify(error, null, 2)}</pre>
  }
  //If no data return message of no data
  if (!data) {
   return <h2>No data to display</h2>;
  }
  let array = data.docs;
   

      return  (
        <div className="container"> 
            <Search term={search} searchKeyword={searchHandler} />
            {search.length < 10 ?
           <ul className ="list">
             {array.map((item, i) => {
               return(
                 <li>
                  <i>
                  <div onClick={() => handleClick()} style={{cursor : 'pointer'}}>
                    {item.name}
                    </div>
                   
                  </i>
                 </li>
               );
             })}
           </ul>
           :
           <ul className ="list">
             {searchResults.map((item, i) => {

               return(
                 <li>
                  <i>
                  <div onClick={() => handleClick()} style={{cursor : 'pointer'}}>
                    {item.name}
                    </div>
                  </i>
                 </li>
               );
             })}
           </ul>
            }

        </div>
        );
     }

export default App;
 