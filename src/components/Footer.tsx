const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p>&copy; 2025 RetroCorp. All rights reserved.</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="btn btn-square btn-primary">
              <span className="material-icons">facebook</span>
            </a>
            <a href="#" className="btn btn-square btn-primary">
              <span className="material-icons">twitter</span>
            </a>
            <a href="#" className="btn btn-square btn-primary">
              <span className="material-icons">instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
