import searchIcon from './assets/searchIcon.png'
function SearchBar(props){
    function submitAction(event){
        event.preventDefault();
        props.change(document.getElementById("search"))
    }
    return(
        <div className='container'>
            <h1>Image Searcher</h1>
            <form onSubmit={submitAction}>
            <input type="text" name="search" id="search" /> <button id='searchButton'><img id='searchIcon' src={searchIcon}></img></button>
            </form>
           
        </div>
    )
}
export default SearchBar