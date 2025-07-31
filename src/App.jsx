import { GrValidate } from "react-icons/gr";
import Img from "./assets/img3.png";
import Background from "./components/Background";
import { useState } from "react";
import Form from "./components/Form.jsx";
function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <Background>
      <div className="px-[0.6rem] md:px-[1rem] lg:px-[2rem] max-w-7xl mx-auto min-h-screen text-shadow-[1px_1px_1.5px_2px_#000] pb-24 md:pb-0">
        {/* ismi va uning vazifasi */}
        <div className="absolute p-2 md:py-5 md:px-10 text-white md:bottom-30 bottom-70 md:-rotate-9 md:right-40 right-2 z-50 border-1 border-blue-500/20 rounded-2xl bg-[#331d37] md:bg-[#331d37] backdrop-blur-[1px]">
          <h3 className="font-rubik text-sm md:text-xl font-bold">
            Rustambek Mamadaliyev
          </h3>
          <p className="font-rubik text-xs md:text-sm font-bold">
            Senior dasturchi
          </p>
        </div>
        <div className="w-[18rem] md:w-[28rem] lg:w-[28rem] absolute top-[20%] sm:top-[25%] md:top-[15%] lg:top-[10%] -right-0 sm:right-5 lg:right-5">
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
            <ul className="text-white grid grid-cols-2 gap-2 md:gap-5">
              <li className="text-center bg-gray-900/50 py-2 md:py-5 rounded-b-4xl backdrop-blur-2xl ">
                <h2 className="font-rubik text-gray-300">10-Avgust</h2>
                <h2 className="font-rubik text-2xl md:text-4xl font-bold">
                  20:30
                </h2>
              </li>
              <li className="text-center bg-gray-900/50 py-2 md:py-5 rounded-b-4xl backdrop-blur-2xl ">
                <h2 className="font-rubik text-gray-300 line-through">
                  320 000 so'm
                </h2>
                <h2 className="font-rubik text-2xl md:text-4xl font-bold">
                  BEPUL
                </h2>
              </li>
            </ul>
          </div>

          <h2 className="text-white font-rubik text-2xl sm:text-3xl md:text-5xl font-bold text-center uppercase mt-9 mb-10 block md:hidden">
            DASTURLASHDA 0 DAN NATIJAGACHA
          </h2>
          <div className="relative">
            <div className="max-w-[70%] ">
              <h2 className="text-white font-rubik text-4xl font-bold uppercase mt-9 mb-10 hidden md:block">
                DASTURLASHDA 0 DAN NATIJAGACHA
              </h2>
              <h2 className="text-white font-rubik text-md sm:text-xl md:text-2xl font-bold uppercase md:mb-8 mb-5 relative">
                BEPUL VEBINAR DAVOMIDA NIMALARNI O'RGANASIZ?
              </h2>
              <ul className="md:space-y-4 space-y-3 max-w-[80%] text-shadow-[1px_1px_1px_#000]">
                <li className="text-white flex items-start gap-2 md:items-center">
                  <GrValidate className="text-3xl md:text-4xl text-fuchsia-600" />
                  <p className="font-rubik text-sm md:text-xl">
                    Dasturlashni 0 dan qisqa vaqtda o'rganish qadamlarini
                  </p>
                </li>
                <li className="text-white flex items-start gap-2 md:items-center">
                  <GrValidate className="text-3xl md:text-4xl text-fuchsia-600" />
                  <p className="font-rubik text-sm md:text-xl">
                    Dasturlashda soha tanlash va daromadgacha chiqish
                    qadamlarini
                  </p>
                </li>
                <li className="text-white flex items-start gap-2 md:items-center">
                  <GrValidate className="text-3xl md:text-4xl text-fuchsia-600" />
                  <p className="font-rubik text-sm md:text-xl">
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
                  className="cursor-pointer bg-gradient-to-t from-[#520078] to-[#9500b7] hover:from-[#9500b7] hover:to-[#520078] duration-500 text-white py-6 text-2xl font-bold font-rubik rounded-full w-full"
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
          <div className="fixed bottom-0 left-0 right-0 px-4 pb-4 bg-gradient-to-t from-black/70 to-transparent pt-8">
            <div className="text-white flex gap-2 items-center mb-4">
              <div className=" px-3 py-1 min-[700px]:w-8 min-[700px]:h-8 flex items-center justify-center bg-[#c53bf79a] backdrop-blur-xs text-white rounded-md text-xl font-bold">
                <p className="text-sm md:text-2xl">!</p>
              </div>
              <p className="font-rubik text-sm md:text-xl">
                Darsda qatnashish uchun joyingizni band qiling.
              </p>
            </div>
            <button
              onClick={() => setIsFormOpen(true)}
              className="cursor-pointer bg-gradient-to-t from-[#520078] to-[#9500b7] hover:from-[#9500b7] hover:to-[#520078] duration-500 text-white py-4 rounded-full w-full shadow-lg"
            >
              RO'YXATDAN O'TISH
            </button>
          </div>
          <Form isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        </div>
      </div>
    </Background>
  );
}

export default App;
