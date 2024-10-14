const Navbar = () => {
    return (
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg py-3">
        <ul className="flex justify-around">
          <li>
            <a href="#sessions" className="text-gray-500 hover:text-blue-600 transition duration-300">
              <i className="fas fa-home"></i>
              <p className="text-xs mt-1">Sessions</p>
            </a>
          </li>
          <li>
            <a href="#payments" className="text-gray-500 hover:text-blue-600 transition duration-300">
              <i className="fas fa-money-bill-wave"></i>
              <p className="text-xs mt-1">Payments</p>
            </a>
          </li>
          <li>
            <a href="#users" className="text-gray-500 hover:text-blue-600 transition duration-300">
              <i className="fas fa-users"></i>
              <p className="text-xs mt-1">Users</p>
            </a>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  