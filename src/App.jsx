import { GrValidate } from "react-icons/gr";
import Img from "./assets/img2.png";
import Background from "./components/Background";
import { useState } from "react";
import Form from "./components/Form.jsx";
function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <Background>
      <div className="px-[0.6rem] md:px-[1rem] lg:px-[2rem] max-w-7xl mx-auto min-h-screen text-shadow-[1px_1px_1.5px_2px_#000] pb-24 md:pb-0">
        {/* ismi va uning vazifasi */}
        <div className="absolute p-2 md:py-5 md:px-10 text-white md:bottom-30 bottom-65 md:-rotate-9 md:right-40 right-2 z-50 border-1 border-[#831896] shadow-2xl shadow-[#5f196cd3] rounded-2xl bg-[#331d3793] md:bg-[#331d37ce] backdrop-blur-xs">
          <h3 className="font-rubik text-sm md:text-xl font-bold">
            Rustambek Mamadaliyev
          </h3>
          <p className="font-rubik text-xs md:text-sm font-bold">
            Senior dasturchi
          </p>
        </div>
        <div className="w-[14rem] md:w-[28rem] lg:w-[28rem] absolute top-[22%] sm:top-[25%] md:top-[15%] lg:top-[10%] -right-0 sm:right-5 lg:right-5">
          <div className="relative">
            <div className="absolute inset-15 bg-[#a200dd90] blur-3xl rounded-full -z-10"></div>
            <img
              src={Img}
              alt=""
              className="w-full h-auto"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 80%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 80%, transparent 100%)",
              }}
            />
          </div>
        </div>

        <div className="relative">
          <div className="lg:max-w-[40rem]">
            <ul className="text-white grid grid-cols-2 gap-2 md:gap-5 ">
              <li className="text-center bg-gray-900/50 py-2 md:py-5 rounded-b-4xl backdrop-blur-2xl shadow-[#9816c75c] shadow-2xl">
                <h2 className="font-rubik text-gray-300 max-[550px]:text-sm">
                  10-11-Avgust
                </h2>
                <h2 className="font-rubik text-lg md:text-4xl font-bold">
                  20:30
                </h2>
              </li>
              <li className="text-center bg-gray-900/50 py-2 md:py-5 rounded-b-4xl backdrop-blur-2xl shadow-[#9816c75c] shadow-2xl">
                <h2 className="font-rubik max-[550px]:text-sm text-gray-300 line-through">
                  500 000 so'm
                </h2>
                <h2 className="font-rubik text-lg md:text-4xl font-bold">
                  BEPUL
                </h2>
              </li>
            </ul>
          </div>
          {/* telefon versiya -------------------- */}
          {/* <div className="lg:max-w-[40rem] w-full hidden">
            <ul className="text-white w-full bg-none rounded-2xl flex items-center flex-col md:gap-5 shadow-[#9816c75c] shadow-2xl">
              <li className="text-center w-full px-2 bg-gray-800/50 py-2 md:py-5 backdrop-blur-2xl flex items-center justify-between">
                <h2 className="font-rubik text-gray-300">10-11-Avgust</h2>
                <h2 className="font-rubik text-xl md:text-4xl font-bold">
                  20:30
                </h2>
              </li>
              <li className="text-center w-full px-2 rounded-b-2xl bg-gray-800/50 pb-3 backdrop-blur-2xl flex items-center justify-between">
                <h2 className="font-rubik text-gray-300 line-through">
                  500 000 so'm
                </h2>
                <h2 className="font-rubik text-xl md:text-4xl font-bold">
                  BEPUL
                </h2>
              </li>
            </ul>
          </div> */}

          {/* cards --------------------  */}

          <h2 className="text-white font-rubik text-xl sm:text-3xl md:text-5xl font-bold text-center uppercase mt-5 md:mt-9 mb-10 block md:hidden">
            DASTURLASHDA 0 DAN NATIJAGACHA
          </h2>
          <div className="relative">
            <div className="max-w-[70%] ">
              <h2 className="text-white font-rubik text-4xl font-bold uppercase mt-9 mb-10 hidden md:block">
                DASTURLASHDA 0 DAN NATIJAGACHA
              </h2>
              <h2 className="text-white font-rubik text-sm sm:text-xl md:text-2xl font-bold uppercase md:mb-8 mb-5 relative">
                BEPUL VEBINAR DAVOMIDA NIMALARNI O'RGANASIZ?
              </h2>
              <ul className="md:space-y-4 space-y-3 max-w-[80%] text-shadow-[1px_1px_1px_#000]">
                <li className="text-white  flex items-start gap-2 md:items-center">
                  <span className="min-w-5 md:max-w-[25px]">
                    <GrValidate className="text-3xl w-full md:text-4xl text-fuchsia-600" />
                  </span>
                  <p className="font-rubik text-[12px] md:text-xl">
                    Dasturlashda soha tanlash va daromadgacha chiqish
                    qadamlarini
                  </p>
                </li>
                <li className="text-white flex items-start gap-2 md:items-center">
                  <span className="min-w-5 md:max-w-[25px]">
                    <GrValidate className="text-3xl w-full md:text-4xl text-fuchsia-600" />
                  </span>
                  <p className="font-rubik text-[12px] md:text-xl">
                    Dasturlashni 0 dan qisqa vaqtda o'rganish qadamlarini
                  </p>
                </li>
                <li className="text-white flex items-start gap-2 md:items-center">
                  <span className="min-w-5 md:max-w-[25px]">
                    <GrValidate className="text-3xl w-full md:text-4xl text-fuchsia-600" />
                  </span>
                  <p className="font-rubik text-[12px] md:text-xl">
                    Birinchi 1000$ topish uslublarini o'rganasiz
                  </p>
                </li>
              </ul>

              <div className="mt-20 max-w-[60%] relative hidden md:block">
                <div className="text-white flex items-start gap-2 md:items-center mb-4">
                  <div className="min-w-10 min-h-10 flex items-center justify-center bg-[#c53bf79a] backdrop-blur-xs text-white rounded-md text-xl font-bold">
                    <p className="font-bold text-3xl">!</p>
                  </div>
                  <p className="font-rubik text-sm md:text-xl">
                    Darsda qatnashish uchun joyingizni band qiling.
                  </p>
                </div>
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="cursor-pointer bg-gradient-to-t from-[#520078] to-[#9500b7] hover:from-[#9500b7] hover:to-[#520078] duration-500 text-white py-6 mb-4 text-2xl font-bold font-rubik rounded-full w-full"
                >
                  RO'YXATDAN O'TISH
                </button>

                <Form
                  isOpen={isFormOpen}
                  onClose={() => setIsFormOpen(false)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:hidden">
          <div className="fixed bottom-10 left-0 right-0 px-4 pb-4 bg-gradient-to-t from-black/70 to-transparent pt-8">
            <button
              onClick={() => setIsFormOpen(true)}
              className="cursor-pointer bg-gradient-to-t from-[#520078] to-[#9500b7] 
    hover:from-[#9500b7] hover:to-[#520078] 
    text-white py-6 text-[25px] rounded-full w-full attention-button"
            >
              RO'YXATDAN O'TISH
            </button>

            <div className="text-white flex gap-2 items-center mt-4 justify-center">
              <div className=" px-3 py-1 min-[700px]:w-8 min-[700px]:h-8 flex items-center justify-center bg-[#c53bf79a] backdrop-blur-xs text-white rounded-md text-xl font-bold">
                <p className="text-sm md:text-2xl">!</p>
              </div>
              <p className="font-rubik text-sm md:text-xl">
                Darsda qatnashish uchun joyingizni band qiling.
              </p>
            </div>
          </div>
          <Form isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        </div>
      </div>
    </Background>
  );
}

export default App;
