import { useState } from "react";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
import Perks from "../Perks";
import PhotoUploader from "../PhotoUploader";
import AccountNav from "../AccountNav";
import { useEffect } from "react";

export default function PlacesFormPage() {
  const { id } = useParams();
  console.log(id, "id");

  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);

  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extrainfo, setExtrainfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuest] = useState(1);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    } else {
      axios
        .get("http://localhost:4000/places/" + id)
        .then((response) => {
          const { data } = response;
          console.log("response", data);
          setTitle(data.title);
          setAddress(data.address);
          setAddedPhotos(data.photos);
          setMaxGuest(data.maxGuest);
          setCheckIn(data.checkIn);
          setCheckOut(data.checkOut);
          setDescription(data.description);
          setPerks(data.perks);
          setExtrainfo(data.extraInfo);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);
  function input_header(text) {
    return <h2 className="text-lg mt-4">{text}</h2>;
  }
  function input_description(text) {
    return <p className="text-sm text-gray-400">{text}</p>;
  }

  async function savePlace(ev) {
    ev.preventDefault();
    const place_data = {
      title: title,
      address: address,
      addedPhotos: addedPhotos,
      description: description,
      perks: perks,
      extraInfo: extrainfo,
      checkIn: checkIn,
      checkOut: checkOut,
      maxGuest: maxGuests,
    };
    if (id) {
      await axios.put("http://localhost:4000/places", {
        id,
        ...place_data,
      });
      setRedirect(true);
    } else {
      console.log(place_data, "place_data");
      await axios.post("http://localhost:4000/places", place_data);
      setRedirect(true);
    }
  }

  function pre_input(header, description) {
    return (
      <>
        {input_header(header)}
        {input_description(description)}
      </>
    );
  }
  if (redirect) {
    return <Navigate to={"/account/places"} />;
  }
  console.log(addedPhotos, "added");
  return (
    <div>
      <AccountNav />
      <form onSubmit={savePlace}>
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
        <PhotoUploader
          addedPhotos={addedPhotos}
          setAddedPhotos={setAddedPhotos}
        />
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

        {pre_input("Check In & Check Out", "Add Check In and Check Out time")}
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
  );
}
