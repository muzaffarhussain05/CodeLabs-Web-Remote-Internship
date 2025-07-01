// src/App.jsx
import React from "react";
import ProfileCard from "./components/ProfileCard";

const profiles = [
  {
    name: "Kazim Ali",
    role: "Frontend Developer",
    bio: `"Building beautiful web experiences."`,
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    buttonText: "Follow",
    buttonColor: "bg-blue-500 hover:bg-blue-600"
  },
  {
    name: "Muzaffar Hussain",
    role: "UI/UX Designer",
    bio: `"Designing with purpose and passion."`,
    image: "https://randomuser.me/api/portraits/men/48.jpg",
    buttonText: "Message",
    buttonColor: "bg-green-500 hover:bg-green-600"
  },
  {
    name: "Ali Raza",
    role: "Backend Developer",
    bio: `"Loves scalable server-side code."`,
    image: "https://randomuser.me/api/portraits/men/79.jpg",
    buttonText: "Follow",
    buttonColor: "bg-purple-500 hover:bg-purple-600"
  },
];

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Responsive Profile Card Grid</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default App;
