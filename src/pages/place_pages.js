import { Link } from "react-router-dom";
import AccountNav from "../AccountNav";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function PlacePages(selected, onChange) {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/places")
      .then(({ data }) => {
        setPlaces(data);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }, []);

  return (
    <div>
      <AccountNav />

      <div className="text-center">
        list of all plcase
        <br></br>
        <Link
          className="inline-flex gap-1 text-center bg-primary text-white py-0.5 px-0.5 rounded-full"
          to="/account/places/new"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add New Places
        </Link>
        <div className="mt-4">
          {places.length > 0 &&
            places.map((place) => (
              <Link
                to={"/account/places/" + place._id}
                className="cursor-pointer flex gap-4 bg-gray-200 p-4 mt-4 rounded-2xl"
              >
                {place.photos.length > 0 && (
                  <div className="w-32 h-32 shrink-0 bg-gray-300">
                    {console.log(place.photos?.[0], "bvv")}
                    <img
                      className="object-cover h-full w-full"
                      src={`http://localhost:4000/uploads/${place.photos?.[0]}`}
                      alt=""
                    />
                  </div>
                )}
                <div className="justify-left grow-0 shrink">
                  <h2 className="text-xl text-left">{place.title}</h2>
                  <p className="text-sm mt-2 text-left">{place.description}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
