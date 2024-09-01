import { useState } from "react";
import { motion } from "framer-motion";
import { SiCodemagic } from "react-icons/si";
import { MdArrowBackIosNew } from "react-icons/md";

const generateRandomKhodamName = () => {
  const khodams = [
    "Ayam Beras",
    "Kambing",
    "Mbah Pomed",
    "Kutilanak",
    "Mulyono",
    "Kucing Birahi",
    "Bakso Borax",
    "Siluman Babi Guling",
    "Hello Kitty",
    "Harimau Hitam",
    "Tuyul Goreng",
    "Belut Sungai ",
    "Naga Putih",
    "Cogil"
  ];
  return khodams[Math.floor(Math.random() * khodams.length)];
};


const formatInputText = (text: string) => {
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [inputName, setInputName] = useState("");
  const [khodamName, setKhodamName] = useState("");

  const handleCheck = () => {
    setIsLoading(true);

    setTimeout(() => {
      setKhodamName(generateRandomKhodamName());
      setIsLoading(false);
    }, 2000);
  };

  const handleInputChange = (e: { target: { value: string; }; }) => {
    const formattedText = formatInputText(e.target.value);
    setInputName(formattedText);
  };

  return (
    <>
      <div className="w-full h-screen bg-[#070707] flex flex-col justify-center items-center">
        <motion.div
          className="mx-4  lg:flex p-10 flex-col items-center justify-evenly rounded-lg max-w-[500px] shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {isLoading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="flex gap-2 justify-center">
                <h2 className=" font-bold text-white">Check </h2>
                <h2 className=" font-bold text-green-400">Khodam </h2>
              </span>
              <br /><br />
              <h6 className=" bg-white p-3 rounded-md">Sedang memeriksa khodam anda..</h6>
            </motion.div>
          ) : khodamName ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="flex gap-2 justify-center">
                <h2 className=" font-bold text-white">Check </h2>
                <h2 className=" font-bold text-green-400">Khodam </h2>
              </span>
              <br />
              <h5 className="text-lg text-gray-400 font-semibold">Khodam {inputName} adalah... </h5>
              <br />
              <h1 className="text-green-500 text-4xl font-bold">{khodamName}</h1>
              <br /><br /><br />
              <div className="w-full flex justify-end">
                <button
                  onClick={() => { setInputName(""); setKhodamName(""); }}
                  className="flex items-center gap-2 bg-gray-200 p-2 rounded-lg text-gray-700 hover:bg-gray-300"
                >
                  <MdArrowBackIosNew />
                  Kembali
                </button>
              </div>
            </motion.div>
          ) : (
            <>
              <label className="text-center flex flex-col gap-10">
                <span className="flex gap-2 justify-center">
                  <h2 className=" font-bold text-white">Check </h2>
                  <h2 className=" font-bold text-green-400">Khodam </h2>
                </span>
                <h6 className="text-gray-400">Masukan nama kamu</h6>
              </label>
              <form onSubmit={handleCheck} className="items-center flex flex-col justify-center gap-4">
                <input
                  type="text"
                  value={inputName}
                  onChange={handleInputChange}
                  className="border-2 focus:outline-none w-[300px] border-green-600 rounded-lg p-2 shadow-md"
                  placeholder="Nama Kamu"
                  required
                />
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-green-500 p-2 rounded-lg text-white shadow-lg hover:bg-green-600"
                >
                  <SiCodemagic />
                  Check
                </button>
              </form>
            </>
          )}
        </motion.div>
        <footer className="absolute bottom-4 text-white">
          <p>&copy; 2024 Figo Ferdyian</p>
        </footer>
      </div>
    </>
  );
}
