import { useEffect } from "react";
import { Link } from "react-router-dom";

export const PageNotFound = () => {

  useEffect(() => {
    document.title = `Page Not Found / RevMechanics`;
  });

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404, Oops!</p>
          <div className="max-w-lg">
            <img className="rounded" src="/pagenotfound.png" alt="404 Page Not Found" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link 
            to="/"
            className="px-6 py-3 bg-gradient-to-r from-red-500 to-yellow-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 transform transition duration-300"
          >
            Back To RevMechanics
          </Link>
        </div>
      </section>
    </main>
  )
}