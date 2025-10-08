import React from "react";

const Profile: React.FC = () => {
  const loggedInUser = localStorage.getItem("loggedInUser");
  const user = loggedInUser ? JSON.parse(loggedInUser) : null;

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "/login"; 
  };

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12">
      {user ? (
        <>
          <h1 className="text-4xl font-bold text-green-main mb-6">Profile</h1>

          <div className="bg-white rounded-2xl p-6 shadow-md mb-8">
            <div className="flex items-center space-x-6">
              {user.profilePic ? (
                <img
                  src={user.profilePic}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover"
                />
              ) : (
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-2xl">P</span>
                </div>
              )}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-lg text-gray-800 mt-2">Points: {user.points}</p>
              </div>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full md:w-auto bg-red-500 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-opacity duration-300"
          >
            Logout
          </button>
        </>
      ) : (
        <div className="text-center">
          <p className="text-xl text-gray-500">You are not logged in.</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
