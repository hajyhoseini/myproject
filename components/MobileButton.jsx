// components/MobileButton.js
const MobileButton = ({ setIsSidebarOpen }) => (
    <button
      className="sm:hidden fixed top-4 right-4 z-60 bg-blue-500 text-white p-2 rounded-full"
      onClick={() => setIsSidebarOpen((prev) => !prev)}
    >
      <i className="fas fa-bars"></i>
    </button>
  );
  
  export default MobileButton;
  