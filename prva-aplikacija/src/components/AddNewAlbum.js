import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Modal, Button, FormControl } from 'react-bootstrap'
import { insertNewAlbum } from '../redux/albums/albums'

const AddNewAlbum = (props) => {
  const { show, handleClose } = props
  const [albumName, setName] = useState('')
  const [year, setYear] = useState('')
  const [artist, setArtist] = useState('')
  const [photo, setPhoto] = useState('')
  const dispatch = useDispatch()

  const saveNewAlbum = () => {
    const data = { albumName, year, artist, photo }
    dispatch(insertNewAlbum(data))
    handleClose()
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Album</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormControl
          name='albumName'
          type='text'
          placeholder='Album Name'
          value={albumName}
          onChange={(e) => setName(e.target.value)}
        />
        <FormControl
          name='year'
          placeholder='Year'
          type='number'
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <FormControl
          name='artist'
          type='text'
          placeholder='Artist'
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <FormControl
          name='photo'
          type='file'
          placeholder='Photo'
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='primary' onClick={saveNewAlbum}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddNewAlbum