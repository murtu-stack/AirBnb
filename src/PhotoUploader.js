import { useState } from "react";
import axios from "axios";

export default function PhotoUploader({ addedPhotos, setAddedPhotos }) {
  const [photolink, setPhotoLink] = useState("");

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

  function removePhoto(filename) {
    setAddedPhotos([...addedPhotos.filter((name) => name !== filename)]);
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
  return (
    <>
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
            <div className="h-36 relative" key={index}>
              <img
                className="rounded-2xl w-full h-full object-cover"
                src={`http://localhost:4000/uploads/${link}`}
                alt={`Photo ${index + 1}`}
              />
              <button
                onClick={() => removePhoto(link)}
                className="absolute bottom-1 right-1 px-2 py-1 bg-opacity-60 rounded-xl text-white bg-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
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
    </>
  );
}
