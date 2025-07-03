import React from "react";

const cardBase =
  "bg-white rounded-xl shadow-md overflow-hidden flex-1 transform transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:bg-gray-50";

const ProjectsSection = () => (
  <section className="py-16 px-4">
    <h2 className="text-center font-bold text-4xl mb-12">Recent Projects</h2>

    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
      {/* --- Card 1 --- */}
      <article className={cardBase}>
        <img
          src="/src/assets/Restaurant.jpg"
          alt="Restaurant Website"
          className="w-full h-56 object-cover rounded-t-xl"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Restaurant Website</h3>
          <p className="text-gray-600">
            A restaurant website may sound simple and common, but it’s an
            excellent project to practice and understand full‑stack
            development in detail.
          </p>
        </div>
      </article>

      {/* --- Card 2 --- */}
      <article className={cardBase}>
        <img
          src="/src/assets/jobportal.jpg"
          alt="Job Portal"
          className="w-full h-56 object-cover rounded-t-xl"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Job Portal</h3>
          <p className="text-gray-600">
            Explore the latest job opportunities tailored to your skills,
            upload a resume, track applications, and connect with top
            employers – all in one place.
          </p>
        </div>
      </article>

      {/* --- Card 3 --- */}
      <article className={cardBase}>
        <img
          src="/src/assets/plantcare.jpg"
          alt="Plant Care Assistant"
          className="w-full h-56 object-cover rounded-t-xl"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Plant Care Assistant</h3>
          <p className="text-gray-600">
            GreenBuddy helps you track watering schedules, get care tips, and
            diagnose issues with AI so your plants always thrive.
          </p>
        </div>
      </article>
    </div>
  </section>
);

export default ProjectsSection;
