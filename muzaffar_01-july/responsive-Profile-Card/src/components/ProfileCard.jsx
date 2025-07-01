
import React from "react";

const ProfileCard = ({ profile }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <img
        src={profile.image}
        alt={profile.name}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold text-center">{profile.name}</h2>
      <p className="text-center text-gray-500">{profile.role}</p>
      <p className="text-sm text-center text-gray-600 mt-2">{profile.bio}</p>
      <button className={`mt-4 block mx-auto px-4 py-2 rounded-full text-white cursor-pointer transition-colors ${profile.buttonColor}`}>
        {profile.buttonText}
      </button>
    </div>
  );
};

export default ProfileCard;
