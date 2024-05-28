
const Modal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? "" : "hidden"
        }`}
    >
      <div className="modal-container">
        <div className="bg-indigo-700 text-center p-5 h-96 lg:w-[500px] rounded shadow-md">
          {/* modal content */}

          <h2 className="text-xl font-semibold mb-4 mt-6 mb-5 uppercase">
            Please Login Here!
          </h2>
          <div className="mb-5">
            <form className="px-4">
              {/* email */}
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium 
                    text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-md"
              />
            </form>
          </div>

          <div>
            <form className="px-4">
              {/* password */}
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium 
                    text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-md"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
