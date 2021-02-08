const initialState = {
  albums: [
    {
      albumName: "Master of puppets",
      artist: "Metallcia",
      photo: null,
      year: "1995",
    },
    {
      albumName: "Frozen",
      artist: "Madonna",
      photo: null,
      year: "1975",
    },
    {
      albumName: " Baby",
      artist: "Justin Bieber",
      photo: null,
      year: "1925",
    },
  ],
  filtredAlbums: [],
  searchBarText: "",
};

const insertNewAlbum = (data) => {
  return {
    type: "INSERT_NEW_ALBUM",
    payload: data,
  };
};

const removeAlbum = (index) => {
  return {
    type: "REMOVE_ALBUM",
    payload: index,
  };
};

const updateAlbum = (data) => {
  return {
    type: "UPDATE_ALBUM",
    payload: data,
  };
};

const searchAlbumByName = (searchBarText) => {
  return {
    type: "SEARCH_ALBUM_BY_NAME",
    payload: searchBarText,
  };
};

const searchAlbumByArtist = (searchBarText) => {
  return {
    type: "SEARCH_ALBUM_BY_ARTIST",
    payload: searchBarText,
  };
};

const searchAlbumByYear = (searchBarText) => {
  return {
    type: "SEARCH_ALBUM_BY_YEAR",
    payload: searchBarText,
  };
};

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INSERT_NEW_ALBUM": {
      return {
        // na site albumi sto veke se vneseni, dodagi go i noviot album
        ...state,
        albums: [...state.albums, action.payload],
      };
    }

    case "REMOVE_ALBUM": {
      const indexToRemove = action.payload; // pozicijata na elementot vo nizata
      const newAlbumsArray = state.albums.filter((a, i) => i !== indexToRemove);

      return {
        ...state,
        albums: newAlbumsArray,
      };
    }

    case "UPDATE_ALBUM": {
      const { rowId, albumName, year, artist, photo } = action.payload;

      const updatedAlbum = { albumName, year, artist, photo };

      const newArray = state.albums.map((album, index) => {
        if (index === rowId) return updatedAlbum;
        else return album;
      });

      return {
        ...state,
        albums: newArray,
      };
    }

    case "SEARCH_ALBUM_BY_NAME": {
      const searchBarText = action.payload;

      const newAlbumArray = state.albums.filter((album) => {
        if (
          album.albumName.toLowerCase().indexOf(searchBarText.toLowerCase()) >=
          0
        )
          return true;
        return false;
      });

      return {
        ...state,
        searchBarText,
        filtredAlbums: newAlbumArray,
      };
    }

    case "SEARCH_ALBUM_BY_ARTIST": {
      const searchBarText = action.payload;

      const newAlbumArray = state.albums.filter((album) => {
        if (
          album.artist.toLowerCase().indexOf(searchBarText.toLowerCase()) >= 0
        )
          return true;
        return false;
      });

      return {
        ...state,
        searchBarText,
        filtredAlbums: newAlbumArray,
      };
    }

    case "SEARCH_ALBUM_BY_YEAR": {
      const searchBarText = action.payload;

      const newAlbumArray = state.albums.filter((album) => {
        if (album.year.toLowerCase().indexOf(searchBarText.toLowerCase()) >= 0)
          return true;
        return false;
      });

      return {
        ...state,
        searchBarText,
        filtredAlbums: newAlbumArray,
      };
    }

    default: {
      return state;
    }
  }
};

export {
  insertNewAlbum,
  removeAlbum,
  updateAlbum,
  albumsReducer,
  searchAlbumByName,
  searchAlbumByArtist,
  searchAlbumByYear,
};
