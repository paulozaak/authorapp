import react, {useState} from "react";

function Search({term, searchKeyword}) {

     function handleSearch(e) {
        searchKeyword(e.target.value);
     }

     return(
         <>
         <input className= "input-bar"
         type="text" 
         value = {term}
         placeholder= "Enter an author name.." 
         onChange={handleSearch}></input>
      </>
     )

}
export default Search;