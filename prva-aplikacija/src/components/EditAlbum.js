import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button, FormControl } from "react-bootstrap";
import { updateAlbum } from "../redux/albums/albums";

const EditAlbum = (props) => {
  const { show, handleClose, album, rowId } = props;

  const [albumName, setName] = useState(album.albumName);
  const [year, setYear] = useState(album.year);
  const [artist, setArtist] = useState(album.artist);
  const [photo, setPhoto] = useState(album.photo);
  const dispatch = useDispatch();

  const editAlbum = () => {
    const data = { albumName, year, artist, photo, rowId };
    dispatch(updateAlbum(data));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Album</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormControl
          name="albumName"
          type="text"
          placeholder="Album Name"
          value={albumName}
          onChange={(e) => setName(e.target.value)}
        />
        <FormControl
          name="year"
          placeholder="Year"
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <FormControl
          name="artist"
          type="text"
          placeholder="Artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <FormControl
          name="photo"
          type="file"
          placeholder="Photo"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={editAlbum}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditAlbum;
