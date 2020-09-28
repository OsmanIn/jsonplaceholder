import React, { Component } from 'react';

class SearchBar extends Component {
    gonderr(e){
        e.preventDefault();
        const searchInside=document.getElementById('input').value;
        console.log(searchInside);
    }
    render(){
        return(
            <div>
                <form >
                    <label>
                     Albums:   
                     <input id='input' type='text' placeholder="Search.." />
                     <button  type="submit">Submit</button>
                     {/* <input type='submit' value="Submit"/> */}
                     </label>
                </form>
            </div>

        )
    }
}

export default SearchBar;