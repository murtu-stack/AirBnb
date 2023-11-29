import { Link, useParams } from "react-router-dom";

export default function PlacePages() {
  const { action } = useParams();
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
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
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
            <h2 className="text-lg">Title</h2>
            <p className="text-sm text-gray-400">
              Title for your place should be short and catch as in advertisement
            </p>
            <input
              type="text"
              placeholder="title, for example My Lovely Apartment"
            ></input>
            <h2 className="text-lg">Address</h2>
            <p className="text-sm text-gray-400">Addresses to this place</p>
            <input type="text" placeholder="add1ress"></input>
            <h2 className="text-lg">Photos</h2>
            <p className="text-sm text-gray-400">
              Please provide more photos of it{" "}
            </p>
            <button className=" border bg-transparent p-4 rounded-2xl">
              +
            </button>
          </form>
        </div>
      )}
      My Places
    </div>
  );
}
