const Sidebar = ({ isOpen, setIsSidebarOpen }) => {
  return (
    <aside
      className={`h-full transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{
        backgroundImage: "url('/path/to/your/background-image.jpg')", // مسیر تصویر دلخواه
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative py-10 h-full overflow-y-auto">
        {/* محتوای سایدبار */}
        <div className="flex items-center justify-center">
          <img
            src="/image/userMy.webp"
            alt="Profile"
            className="w-20 h-20 rounded-full border-2 border-white"
          />
          <h1 className="text-xs me-1 bg-white/50 backdrop-blur-lg rounded-lg px-4 py-2">
            نام کاربری : A.h.h
          </h1>
          <h1 className="text-xs bg-white/50 backdrop-blur-lg rounded-lg px-4 py-2 items-center">
            آیدی : 810804
          </h1>
        </div>
        <nav className="py-24">
          <ul className="space-y-6">
            <li className="my-hover-sidebar">
              <a
                href="#skills"
                className="hover:text-blue-400 flex items-center"
              >
                <i className="fas fa-code text-red-500 ms-2 ps-2"></i>
                <span className="ps-1 text-lg">مهارت‌ها</span>
              </a>
            </li>
            <li className="my-hover-sidebar">
              <a
                href="#projects"
                className="hover:text-blue-400 flex items-center"
              >
                <i className="fas fa-code-branch text-yellow-500 ms-2 ps-2"></i>
                <span className="ps-1 text-lg">پروژه‌ها</span>
              </a>
            </li>
            <li className="my-hover-sidebar">
              <a
                href="#contact"
                className="hover:text-blue-400 flex items-center"
              >
                <i className="fas fa-address-book text-green-500 ms-2 ps-2"></i>
                <span className="ps-1 text-lg">تماس</span>
              </a>
            </li>
            <li>
              <a href="#coming-soon" className="flex items-center">
                <span className="ps-1 text-lg">به زودی منتشر میشود...</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
