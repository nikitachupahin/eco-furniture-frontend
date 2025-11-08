import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link
        to="/login"
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded font-bold
            transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
      >
        Login
      </Link>
    </div>
  );
};
