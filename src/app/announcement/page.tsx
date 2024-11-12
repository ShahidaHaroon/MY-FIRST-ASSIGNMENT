import NavBar from "../components/navbar";

export default function Announcement() {
  return (
    <div className="bg-white min-h-screen">
      <NavBar />
      <h1 className="text-center font-bold text-red-800 text-5xl mt-10 ">
        SHAHIDA M.HAROON
      </h1>
      <div className="flex items-center justify-center">
        <p className="p-8 text-left font-bold text-center text-gray-700 text-4xl mt-20">
          WELCOME TO THE ANNOUNCEMENT PAGE!
        </p>
      </div>
    </div>
  );
}
