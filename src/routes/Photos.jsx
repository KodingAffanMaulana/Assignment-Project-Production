import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../components/Card';

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [sort, setSort] = useState('asc');
  const [submited, setSubmited] = useState('');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deletePhoto = (id) => {
    fetch(`https://gallery-app-server.vercel.app/photos/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((error) => {
        if (!error.error) {
          setPhotos(photos.filter((obj) => obj.id !== id));
        } else {
          setError(error.error);
          console.log(error);
        }
      });
  };

  useEffect(() => {
    setLoading(true);
    fetch(`https://gallery-app-server.vercel.app/photos?_sort=id&_order=${sort}&q=${search}`)
      .then((response) => response.json())
      .then((json) => {
        setPhotos(json);
        setLoading(false);
      });
  }, [sort, search, submited]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://gallery-app-server.vercel.app/photos`)
      .then((response) => response.json())
      .then((json) => {
        setPhotos(json);
        setLoading(false);
      });
  }, []);

  if (error)
    return <h1 style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>Error!</h1>;

  return (
    <div className="text-white min-h-[90vh] relative bg-gradient-to-r from-blue-500 from-10% via-sky-500 via-30% to-pink-500 to-90% ... bg-opacity-20 backdrop-blur-xl">
      <div className="container">
        <div className="options">
          <select
            onChange={(e) => setSort(e.target.value)}
            data-testid="sort"
            className="form-select text-black relative bg-white bg-opacity-50 backdrop-blur-sm"
            style={{}}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmited(search);
            }}>
            <input
              type="text"
              data-testid="search"
              onChange={(e) => setSearch(e.target.value)}
              className="form-input text-black px-4 relative bg-white bg-opacity-100 backdrop-blur-sm"
            />
            <input
              type="submit"
              value="Search"
              data-testid="submit"
              className="form-btn px-4 py-2 rounded-xl hover:cursor-pointer relative bg-white bg-opacity-50 backdrop-blur-sm"
            />
          </form>
        </div>
        <div className="content">
          {loading ? (
            <h1 style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>Loading...</h1>
          ) : (
            photos.map((photo) => {
              return <Card key={photo.id} photo={photo} deletePhoto={deletePhoto} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Photos;
