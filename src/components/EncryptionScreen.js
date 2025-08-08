import React, { useState } from "react";
import { AES, enc, lib } from "crypto-js";
import { Loader } from "rsuite";


function EncryptionScreen() {
  const [plainText, setPlainText] = useState("");
  const [cipherText, setCipherText] = useState("");
  const [key, setKey] = useState("");
  const [loading, setLoading] = useState(false);


  const generateKey = () => {
    const key = lib.WordArray.random(16).toString();
    setKey(key);
    return key;
  }

  const handleEncryption = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const key = generateKey();
      const enctypted = AES.encrypt(plainText, key).toString();
      setCipherText(enctypted);
      setLoading(false);

    }, 1000);
  }

  return (
    <div className="flex flex-row gap-20 p-5 mt-20 justify-center ">
      <div className=" p-4 w-1/2 rounded-3xl">
        <input
          type="text"
          placeholder="Enter plain text"
          value={plainText}
          onChange={(e) => setPlainText(e.target.value)}
          className="w-full h-16 rounded-2xl border border-[#d1d5db] bg-[#f9f9f9] text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 p-4"
        />
      </div>

      <div className="w-20 justify-center items-center">
        <button
          onClick={handleEncryption}
          disabled={loading || !plainText}
          className={`h-16 px-6 rounded-xl text-white font-semibold transition-all duration-200 ease-in-out 
     ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#E55050] hover:bg-[#ae3e3e] hover:scale-105"}`}
        >
          {loading ? <Loader inverse size="sm" content="Encrypting..." /> : "Encrypt"}
        </button>
      </div>

      <div className="bg-white p-4 w-1/2 rounded-lg">
        <p className="w-full h-20 rounded-xl border border-[#d1d5db] bg-[#f9f9f9] text-gray-800 p-3 mt-5 break-all">
          {cipherText || "Encrypted text will appear here after encryption."}
        </p>


        <div className="text-start mt-4 flex flex-row gap-2">
          <p className="mb-1 text-gray-600 font-medium">Key used:</p>
          <p className="w-full bg-[#f9f9f9] p-3 rounded-xl border border-[#d1d5db] text-sm text-gray-800 break-all">
            {key || "Key will appear here after encryption."}
          </p>


        </div>


      </div>

    </div>
  )

}

export default EncryptionScreen;