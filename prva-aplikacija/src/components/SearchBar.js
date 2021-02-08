import React, { useState } from "react";

import { Dropdown, FormControl, Button } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { searchAlbumByName } from "../redux/albums/albums.js";
import { searchAlbumByArtist } from "../redux/albums/albums.js";
import { searchAlbumByYear } from "../redux/albums/albums.js";

const SearchBar = () => {
  const [searchText, saveSearchText] = useState("");
  const dispatch = useDispatch();

  // const saveText = (event) => {
  //   const { value } = event.target;
  //   saveSearchText(value);

  //   dispatch(searchAlbumByName(value));
  // };

  const searchByArtist = () => {
    dispatch(searchAlbumByArtist(searchText));
  };
  const searchByName = () => {
    dispatch(searchAlbumByName(searchText));
  };

  const searchByYear = () => {
    dispatch(searchAlbumByYear(searchText));
  };
  const resetInputValue = () => {
    saveSearchText("");
    dispatch(searchAlbumByName(""));
  };
  return (
    <InputGroup className="mb-3">
      <FormControl
        value={searchText}
        onChange={(event) => saveSearchText(event.target.value)}
        placeholder="Search album by name"
      />
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Filter by
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item type="name" onClick={searchByName}>
            Name
          </Dropdown.Item>
          <Dropdown.Item type="year" onClick={searchByYear}>
            Year
          </Dropdown.Item>
          <Dropdown.Item type="artist" onClick={searchByArtist}>
            Artist
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button onClick={resetInputValue}>Reset</Button>
    </InputGroup>
  );
};

export default SearchBar;
