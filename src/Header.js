import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";
export default function Header() {
  const { user } = useContext(UserContext);
  // console.log(user);
  return (
    <header className="flex justify-between">
      <Link to={"/"} className="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 200 200"
          id="airbnb"
        >
          <path
            fill="#ff7977"
            d="M156.633 104.602c-.039-3.504-.859-6.964-2.137-10.214-.986-2.516-2.131-4.966-3.249-7.425a1407.959 1407.959 0 0 0-28.003-57.54c-1.374-2.65-2.719-5.316-4.17-7.925-1.426-2.545-3.086-4.995-5.235-6.987-3.429-3.269-8.03-5.218-12.752-5.512h-2.174c-4.861.24-9.606 2.28-13.094 5.68-2.07 1.961-3.672 4.352-5.06 6.826-1.432 2.566-2.758 5.19-4.106 7.798a1418.216 1418.216 0 0 0-19.084 38.464c-3.676 7.73-7.321 15.473-10.827 23.279-1.454 3.252-2.769 6.615-3.264 10.165-.917 5.994.398 12.285 3.6 17.432 2.76 4.471 6.903 8.074 11.732 10.155a26.434 26.434 0 0 0 11.983 2.121c5.483-.291 10.77-2.261 15.409-5.136 5.175-3.176 9.601-7.4 13.722-11.822 3.832 4.13 7.933 8.071 12.667 11.16 4.572 3.008 9.785 5.186 15.268 5.704 5.955.622 12.125-.854 17.123-4.169a26.096 26.096 0 0 0 9.814-12.059 25.814 25.814 0 0 0 1.837-9.995zm-56.684-2.312c-1.495-1.76-2.812-3.664-4.135-5.554-2.226-3.265-4.25-6.678-5.878-10.284-1.334-2.992-2.405-6.133-2.823-9.395-.305-2.588-.232-5.288.718-7.745.85-2.304 2.484-4.3 4.554-5.619 4.932-3.183 11.962-2.839 16.431 1.022 2.262 1.927 3.613 4.776 3.953 7.704.445 3.892-.44 7.801-1.799 11.431-2.566 6.736-6.628 12.774-11.021 18.44zm48.393 8.255c-1.318 4.549-4.486 8.523-8.631 10.816-3.674 2.055-8.059 2.759-12.201 2.067-5.275-.821-10.008-3.62-14.109-6.924-3.014-2.422-5.728-5.19-8.328-8.043 4.105-5.192 7.972-10.624 10.926-16.562 2.578-5.2 4.537-10.834 4.723-16.681.105-3.71-.593-7.488-2.326-10.791-2.269-4.413-6.334-7.803-10.994-9.443-4.353-1.555-9.192-1.694-13.633-.428-4.188 1.185-8.013 3.702-10.634 7.191-2.307 3.042-3.622 6.782-3.927 10.575-.469 5.463.9 10.913 2.971 15.935 3.079 7.338 7.598 13.98 12.589 20.141a68.79 68.79 0 0 1-7.306 7.26c-4.052 3.429-8.688 6.414-13.94 7.55-4.246.953-8.827.479-12.721-1.491-4.561-2.273-8.063-6.554-9.384-11.475-1.01-3.615-.786-7.518.415-11.059.999-2.93 2.354-5.722 3.622-8.541a1408.352 1408.352 0 0 1 27.689-56.927c1.44-2.793 2.858-5.599 4.382-8.346 1.244-2.213 2.691-4.386 4.736-5.94a12.244 12.244 0 0 1 7.749-2.583c2.88-.034 5.743 1.027 7.946 2.878 2.176 1.807 3.646 4.279 4.966 6.743 2.984 5.605 5.85 11.275 8.717 16.939a1379.995 1379.995 0 0 1 23.582 49.054c1.139 2.564 2.358 5.108 3.125 7.814.937 3.337.968 6.941-.004 10.271zM57.249 146.038c2.464-.558 5.156 1.067 5.796 3.513.795 2.503-.785 5.413-3.301 6.137-2.458.864-5.377-.638-6.191-3.092-.772-2.068.054-4.564 1.888-5.787a5.09 5.09 0 0 1 1.808-.771zM73.891 162.195c1.484-1.613 3.575-2.624 5.729-2.946a13.452 13.452 0 0 1 4.295.272c-.018 2.271-.004 4.539-.008 6.811-2.209-.571-4.601-.689-6.769.109a8.062 8.062 0 0 0-3.1 2.037c-.186.159-.141.416-.158.637.013 6.345-.01 12.691.009 19.035-.022.244.037.519-.071.748-2.45.057-4.903.011-7.354.02.001-9.673-.008-19.348.006-29.021 2.064.009 4.129-.008 6.194.004.454-.026.938.207 1.104.65.163.53.111 1.095.123 1.644zM126.719 162.221c1.961-2.029 4.803-3.027 7.592-3.033 2.947-.074 5.967.797 8.244 2.709a8.97 8.97 0 0 1 3.115 4.687c.648 2.261.59 4.636.582 6.965.002 5.124 0 10.249.002 15.374-2.471-.004-4.941.016-7.412-.011.002-5.121 0-10.242.002-15.365 0-1.903.09-3.956-.922-5.651-.705-1.216-2.1-1.822-3.445-1.963-2.562-.41-5.238.609-7.004 2.477-.188.188-.349.426-.328.71-.024.792.096 1.587.028 2.38-.097 1.077.054 2.154.019 3.234a214.498 214.498 0 0 0-.008 6.109c-.14 2.693.104 5.395-.057 8.085-2.461-.008-4.92-.002-7.381-.003-.001-9.678-.018-19.354.009-29.031 1.903.015 3.81 0 5.712.006.492-.031 1.03.244 1.157.744.116.514.081 1.049.095 1.577zM54.539 188.924c-.001-9.677-.015-19.353.005-29.029 2.452.006 4.903.004 7.354.002.019 9.676.005 19.352.007 29.026-2.455 0-4.91-.002-7.366.001zM49.972 159.898c-1.943-.004-3.886.006-5.831-.011-.514-.003-1.17.022-1.421.562-.225.555-.139 1.171-.159 1.755-1.617-1.721-3.896-2.743-6.234-2.965-3.61-.324-7.351.677-10.25 2.869-2.388 1.764-4.153 4.315-5.077 7.125-.445 1.317-.668 2.699-.81 4.08v1.987c.207 4.159 2.057 8.273 5.284 10.954 2.434 2.062 5.562 3.214 8.731 3.415h1.652c2.512-.169 4.992-1.208 6.706-3.08.016.587-.067 1.209.153 1.771.229.455.769.58 1.238.562 2.005-.005 4.013.002 6.02-.009 0-9.669.006-19.342-.002-29.015zm-7.638 19.983c-1.5 1.796-3.843 2.858-6.183 2.784-2.508.019-5.111-.942-6.736-2.909-1.585-1.878-2.064-4.49-1.704-6.877.269-1.932 1.254-3.785 2.81-4.984 1.411-1.114 3.19-1.688 4.971-1.812 2.653-.232 5.45.938 7.046 3.08.09 3.154.002 6.316.042 9.475-.026.416.089.917-.246 1.243zM115.51 168.201c-1.142-2.793-3.168-5.221-5.736-6.805-2.645-1.646-5.817-2.39-8.918-2.179-2.449.161-4.842 1.206-6.542 2.992-.01-5.421 0-10.839-.005-16.26-2.472.001-4.946-.011-7.418.007.013 14.318-.021 28.643.018 42.96 2.047.005 4.096.01 6.144.005.509.04 1.058-.24 1.198-.755.101-.524.064-1.065.067-1.596 1.718 1.911 4.242 2.948 6.78 3.101h1.514c4.109-.206 8.138-2.132 10.717-5.361 3.612-4.429 4.317-10.867 2.181-16.109zm-8.645 12.214c-1.656 1.537-3.948 2.274-6.186 2.252-2.335.054-4.668-1.019-6.147-2.826-.183-.188-.243-.442-.228-.692.002-3.322.005-6.643 0-9.963 1.42-1.852 3.693-3.006 6.018-3.125 2.357-.069 4.83.623 6.56 2.285 1.648 1.529 2.452 3.822 2.4 6.043.048 2.218-.778 4.496-2.417 6.026zM176.503 164.609c-3.144-4.004-8.519-6.024-13.53-5.275-2.093.33-4.076 1.334-5.539 2.874-.016-5.418 0-10.836-.008-16.256-2.468-.003-4.934-.005-7.4.002-.002 14.319 0 28.642 0 42.963 1.945.015 3.895-.003 5.84.015.511.008 1.15-.033 1.412-.555.227-.564.142-1.193.158-1.786 1.705 1.868 4.174 2.9 6.672 3.082h1.666c4.064-.221 8.037-2.118 10.611-5.298 2.102-2.536 3.236-5.784 3.424-9.055v-1.941c-.233-3.158-1.299-6.294-3.306-8.77zm-5.776 14.972c-1.957 2.519-5.41 3.456-8.473 2.967-1.865-.372-3.674-1.379-4.777-2.951-.123-1.219-.012-2.452-.049-3.677.026-2.253-.056-4.513.037-6.762 1.122-1.547 2.918-2.539 4.766-2.949 3.42-.632 7.396.723 9.125 3.881 1.574 2.923 1.417 6.829-.629 9.491z"
          ></path>
        </svg>
        <span className="text-xs">Airbnb</span>
      </Link>
      <div className="flex items-center	 gap-1 border border-gray-300 rounded-full  px-2 shadow-md shadow-gray-500">
        <div className="text-xs"> anywhere</div>
        <div className="border-l border-gray-300"></div>
        <div className="text-xs">any week</div>
        <div className="border-l border-gray-300"></div>
        <div className="text-xs">add guests</div>
        <div>
          <button className="bg-primary text-white p-1 rounded-full">
            <svg
              height="10"
              width="10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="search"
            >
              <g data-name="Layer 2">
                <path
                  d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"
                  data-name="search"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
      <Link
        to={user ? "/account" : "/login"}
        className="flex items-center	 gap-1 border border-gray-300 rounded-full  px-2 shadow-md shadow-gray-500"
      >
        <svg
          width="10px"
          height="10px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 18L20 18"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 12L20 12"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 6L20 6"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="feather feather-users"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>

        {!!user && <div>{user?.email}</div>}
      </Link>
    </header>
  );
}
