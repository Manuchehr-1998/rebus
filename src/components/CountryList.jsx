import { Link } from "react-router-dom";

function CountryList({ countries }) {
  if (!countries || countries.length === 0) {
    return <div>No countries found</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {countries.map((country) => (
        <div
          key={country.cca3}
          className="bg-white rounded-lg shadow-md hover:shadow-lg duration-300 cursor-pointer"
        >
          <Link to={`/country/${country.name.common}`}>
            <img
              src={country.flags.png}
              alt={`${country.name.common} flag`}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{country.name.common}</h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CountryList;