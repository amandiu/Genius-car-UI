import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";

const MechanicCard = ({ mechanic }) => {
  if (!mechanic) return null; // safety check

  const {
    id,
    name,
    image,
    experience,
    skills = [],
    rating,
    available,
  } = mechanic;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300">
      <figure>
        <img
          src={image || "https://via.placeholder.com/400x300"}
          alt={name || "Mechanic"}
          className="h-48 w-full object-cover"
        />
      </figure>

      <div className="card-body p-4">
        <h2 className="card-title text-lg">{name}</h2>

        <p className="text-sm text-gray-500">
          {experience}+ years experience
        </p>

        {/* Skills */}
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2 my-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="badge badge-outline badge-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Rating */}
        <RatingStars rating={rating || 0} />

        {/* Availability */}
        <span
          className={`badge mt-2 ${
            available ? "badge-success" : "badge-error"
          }`}
        >
          {available ? "Available" : "Busy"}
        </span>

        {/* Actions */}
        <div className="card-actions mt-4 flex gap-2">
          <Link
            to={`/mechanics/${id}`}
            className="btn btn-sm btn-outline w-full"
          >
            View
          </Link>

          <Link
            to={`/book-mechanic/${id}`}
            className="btn btn-sm btn-primary w-full"
          >
            Book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MechanicCard;
