import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Perks from "../Perks";
import axios from "axios";

export default function PlacePages(selected, onChange) {
  const { action } = useParams();

  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photolink, setPhotoLink] = useState("");
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extrainfo, setExtrainfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuest] = useState(1);

  async function add_photo_by_link(ev) {
    ev.preventDefault();
    const { data: filename } = await axios.post(
      "http://localhost:4000/upload_by_link",
      {
        link: photolink,
      }
    );
    setAddedPhotos((prev) => {
      return [...prev, filename];
    });
    setPhotoLink("");
  }

  function uploadPhoto(ev) {
    ev.preventDefault();
    const target_files = ev.target.files;
    const data = new FormData();
    for (let i = 0; i < target_files.length; i++) {
      data.append("photos", target_files[i]);
    }
    axios
      .post("http://localhost:4000/upload", data, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then((response) => {
        const { data: filenames } = response;
        setAddedPhotos((prev) => {
          return [...prev, ...filenames];
        });
      });
  }
  function input_header(text) {
    return <h2 className="text-lg mt-4">{text}</h2>;
  }
  function input_description(text) {
    return <p className="text-sm text-gray-400">{text}</p>;
  }

  function pre_input(header, description) {
    return (
      <>
        {input_header(header)}
        {input_description(description)}
      </>
    );
  }
  return (
    <div>
      {action !== "new" && (
        <div className="text-center">
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
        </div>
      )}
      {action === "new" && (
        <div>
          <form>
            {pre_input(
              "Title",
              " Title for your place should be short and catch as in advertisement"
            )}
            <input
              type="text"
              value={title}
              onChange={(ev) => {
                setTitle(ev.target.value);
              }}
              placeholder="title, for example My Lovely Apartment"
            ></input>
            {pre_input("Address", " Addresses to this place")}
            <input
              type="text"
              value={address}
              onChange={(ev) => {
                setAddress(ev.target.value);
              }}
              placeholder="address"
            ></input>
            {pre_input("Photos", "Please provide more photos of it")}
            <div className="flex items-center gap-2 ">
              <input
                type="text"
                value={photolink}
                onChange={(ev) => {
                  setPhotoLink(ev.target.value);
                }}
                placeholder="Add photo using link"
                className="border p-2 rounded"
              />
              <button
                onClick={add_photo_by_link}
                className="bg-gray rounded-xl p-2  text-sm"
              >
                Add&nbsp;Photo
              </button>
            </div>

            <div className="mt-2 gap-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ">
              {console.log(addedPhotos)}
              {addedPhotos?.length > 0 &&
                addedPhotos?.map((link, index) => (
                  <div key={index}>
                    <img
                      className="rounded-2xl w-full h-full object-cover"
                      src={`http://localhost:4000/uploads/${link}`}
                      alt={`Photo ${index + 1}`}
                    />
                  </div>
                ))}

              <label className=" cursor-pointer flex justify-center gap-4 border bg-transparent items-center  py-8 rounded-xl">
                <input
                  type="file"
                  multiple
                  onChange={uploadPhoto}
                  className="hidden"
                />
                Upload
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
                    d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
                  />
                </svg>
              </label>
            </div>
            {pre_input("Description", "Description to this place")}
            <textarea
              value={description}
              onChange={(ev) => {
                setDescription(ev.target.value);
              }}
            />
            <Perks selected={perks} onChange={setPerks} />
            {pre_input("Extra Info", "House Rules etc")}
            <textarea
              value={extrainfo}
              onChange={(ev) => {
                setExtrainfo(ev.target.value);
              }}
            />

            {pre_input(
              "Check In & Check Out",
              "Add Check In and Check Out time"
            )}
            <div className="grid gap-2 sm:grid-cols-3">
              <div>
                <h3 className="mt-2 mb-1">Check in Time</h3>
                <input
                  type="text"
                  value={checkIn}
                  onChange={(ev) => {
                    setCheckIn(ev.target.value);
                  }}
                  placeholder="14:00"
                ></input>
              </div>
              <div>
                <h3 className="mt-2 mb-1">Check Out Time</h3>
                <input
                  type="text"
                  vlaue={checkOut}
                  onChange={(ev) => {
                    setCheckOut(ev.target.value);
                  }}
                  placeholder="19:00"
                />
              </div>
              <div>
                <h3 className="mt-2 mb-1">Max Number of Guests</h3>
                <input
                  type="number"
                  value={maxGuests}
                  onChange={(ev) => {
                    setMaxGuest(ev.target.value);
                  }}
                  placeholder="3"
                />
              </div>
            </div>
            <button className="primary my-4">Save</button>
          </form>
        </div>
      )}
    </div>
  );
}
