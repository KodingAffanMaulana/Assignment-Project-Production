import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPhoto = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [captions, setCaptions] = useState('');
  const [secret, setSecret] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const date = new Date();

  const addPhoto = (e) => {
    e.preventDefault();
    const newDatas = {
      imageUrl: imageUrl,
      captions: captions,
      createdAt: date,
      updatedAt: date,
      secret: secret,
    };

    fetch('https://gallery-app-server.vercel.app/photos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newDatas),
    })
      .then((response) => response.json())
      .then((error) => {
        if (!error.error) {
          navigate('/photos');
        } else {
          setError(error.error);
          console.log(error);
        }
      });
  };

  return (
    <div className="min-h-[88vh] relative bg-gradient-to-r from-blue-500 from-10% via-sky-500 via-30% to-pink-500 to-90% ... bg-opacity-20 backdrop-blur-xl">
      <div className="container text-white">
        {error && <div className="error-msg">{error}</div>}
        <form className="add-form" onSubmit={addPhoto}>
          <label>
            Image Url:
            <input
              className="add-input text-black"
              type="text"
              data-testid="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </label>
          <label>
            Captions:
            <input
              className="add-input text-black"
              type="text"
              data-testid="captions"
              value={captions}
              onChange={(e) => setCaptions(e.target.value)}
            />
          </label>
          <label>
            Secret:
            <input
              className="add-input text-black"
              type="text"
              value={secret}
              data-testid="secret"
              onChange={(e) => setSecret(e.target.value)}
            />
          </label>
          <input
            className="submit-btn hover:bg-blue-500 cursor-pointer"
            type="submit"
            value="Submit"
            data-testid="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddPhoto;
