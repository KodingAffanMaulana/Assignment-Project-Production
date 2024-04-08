import { Link } from 'react-router-dom';

const Card = ({ photo, deletePhoto }) => {
  return (
    <div className="card">
      <img className="card-image" src={photo.imageUrl} alt={photo.id} />
      <div className="card-content">
        <p className="captions" data-testid="photo-caption">
          {photo.captions}
        </p>
        <div className="flex gap-2">
          <button className="px-4 py-2  rounded-xl hover:cursor-pointer relative bg-white bg-opacity-50 backdrop-blur-sm">
            <Link to={`${photo.id}`}>Edit</Link>
          </button>
          <button
            className="px-4 py-2 rounded-xl hover:cursor-pointer relative bg-white bg-opacity-50 backdrop-blur-sm text-red-500 font-semibold"
            onClick={() => deletePhoto(photo.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
