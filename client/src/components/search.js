// Imported react libraries and hooks.
import React, { useState, useEffect } from "react";
// Imported Axios.
import axios from "axios";
// Imported Link from React Router Dom.
import { Link } from "react-router-dom";
// Imported components from React Bootstrap.
import { Row, Dropdown, ButtonGroup, DropdownButton } from "react-bootstrap";
// Imported icons from FontAwesome.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// Imported components.
import Results from "./results.js";
// Imported Swal from sweetalert2.
import Swal from "sweetalert2";

/**
 * Created a search component with an input area, dropdown menu for the categories and a search button.
 * Set the initial states of the prop values using the useState() hook.
 *
 * Created a function, taking into consideration the below parameters, that once the search button is clicked on (onClick()) the relevant data
 * will be returned to be handled by setting the results's state. Making use of the useEffect() hook to accomplish this.
 * Name - Created a function to get the search query (name of the query). Set for it to be empty at first and, once a search query is submitted, for
 * the value to be returned using "e.target.value". The state will thus be updated upon change (onChange()).
 * Type - For setting the type/ genre an object array has been created with the name as the key and the value to be submitted as the genre.
 * Utilizing the map() method to iterate over the data and returning the key (name) as the dropdown item's name. Set for the category value to
 * equal type and for the state to be set onClick(). Added a key to identify the data.
 * Getting - Utilizing Axios and the get() method to get the content from the search api. Added a header to set the content type to JSON. Assigned an
 * event.preventDefault() method to ensure that the page is not refreshed once the update function is executed.
 * If the request is successful the response will be return all the search results.
 * If the request is unsuccessful the response will return an error.
 *
 * Results - Checking whether results does not equal to 0. If it does not, using the map() method to iterate over the data and return the
 * results' content. Added a key to identify the data.
 *
 * Favourites - Setting for the addFavourites functionality to be available once the results are returned. Favourites may be added utilizing
 * "Add Fav" button (onClick()). Stringifying the added favourites' data to local storage. A modal (Sweetalert2 - Swal.fire) will appear to
 * confirm success adding a favourite to list.
 *
 * @returns Search component with input area, category dropdown menu and search button.
 */

const Search = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("allTrack");
  const [results, setResults] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (favourite) => {
    setFavourites([...favourites, favourite]);
    Swal.fire({
      background: "#252525",
      width: 400,
      icon: "success",
      iconColor: "#2b8492",
      title: "Added to Favourites",
      confirmButtonColor: "#303030",
    });
  };

  useEffect(() => {
    localStorage.setItem("Favourites", JSON.stringify(favourites));
  }, [favourites]);

  let nameEntry = "";
  const nameSubmit = (e) => {
    const entry = e.target.value;
    nameEntry = entry;
    setName(nameEntry);
  };

  const categories = {
    "CATEGORIES": "allTrack",
    "MUSIC": "song",
    "MUSIC VIDEOS": "musicVideo",
    "APPS": "software",
    "EBOOKS": "ebook",
    "AUDIO BOOKS": "audiobook",
    "PODCASTS": "podcast",
    "MOVIES": "movie",
    "TV SHOWS": "tvSeason",
    "SHORT FILMS": "shortFilm",
  };

  const submitSearch = (e) => {
    e.preventDefault();

    axios
      .get(`http://localhost:8080/search?name=${name}&type=${type}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const queryAdded = res.data.results;
        setResults(queryAdded ? queryAdded : []);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="searchcontainer">
      <div id="searchcontent">
        <div id="searchinput">
          <input
            type="text"
            placeholder="Search..."
            name="name"
            onChange={(e) => nameSubmit(e)}
          />
          <Link to={`/search`}>
            <button
              id="searchbutton"
              type="submit"
              onClick={(e) => submitSearch(e)}
            >
              <FontAwesomeIcon icon={faSearch} title="Search" />
            </button>
          </Link>
        </div>

        <DropdownButton
          as={ButtonGroup}
          variant="info"
          id="dropdown-basic"
          drop="right"
          title="CATEGORIES"
          size="md"
        >
          {Object.keys(categories).map((category, i) => (
            <Dropdown.Item
              as="button"
              key={i}
              type="submit"
              name="category"
              title="Categories"
              id="searchcategories"
              value={category.value}
              active={type === category.value}
              onClick={(e) => setType(categories[category])}
            >
              {category}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>

      <div className="search-page">
        <div className="container-fluid">
          <Row md={4}>
            {results.length !== 0 ? (
              results.map((content, i) => (
                <Results
                  key={i}
                  addFavourite={addFavourite}
                  content={content}
                />
              ))
            ) : (
              <div></div>
            )}
          </Row>
        </div>
      </div>
    </div>
  );
};

// Exported search.js to landing.js.
export default Search;
