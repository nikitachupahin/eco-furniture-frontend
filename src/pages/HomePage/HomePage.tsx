import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { AppDispatch, RootState } from '../../app/store';
import { logout } from '../../features/auth/authSlice';
import toast from 'react-hot-toast';

export const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const handleLogOut = () => {
    dispatch(logout());
    toast.success('Logout successful');
    navigate('/login');
  };

  const handleLogIn = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">EcoFurniture</h1>
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLogOut}
                className="px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition"
              >
                Log out
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogIn}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Log in
            </button>
          )}
        </div>
      </header>
    </div>
  );
};
