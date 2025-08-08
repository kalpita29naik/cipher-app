import { AES, enc } from "crypto-js";
import React, { useState } from "react";
import { Loader } from 'rsuite';

function DecryptionScreen() {
 const [cipherText, setCipherText] = useState("");
 const [inputKey, setInputKey] = useState("");
 const [decryptedText, setDecryptedText] = useState("");
 const [loading, setLoading] = useState(false);

 const handleDecryption = () => {
  setLoading(true);
  setTimeout(() => {

   try {
    const bytes = AES.decrypt(cipherText, inputKey);
    const originalText = bytes.toString(enc.Utf8);
    setDecryptedText(originalText || "Invalid key or cipher");
   } catch (err) {
    setDecryptedText("Decryption failed");
   } finally {
    setLoading(false);
   }

  }, 1000);
 };

 return (
  <div className="flex flex-col lg:flex-row lg:gap-20 gap-10 p-6 mt-20 justify-center">
   {/* Input Section */}
   <div className="bg-white p-6 lg:w-1/2 rounded-3xl shadow-md">
    <input
     type="text"
     placeholder="Encrypted text here"
     className="w-full h-16 rounded-xl border border-[#d1d5db] bg-[#f9f9f9] text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 p-4 mb-5"
     value={cipherText}
     onChange={(e) => setCipherText(e.target.value)}
    />

    <input
     type="text"
     placeholder="Enter encryption key"
     className="w-full h-12 rounded-xl border border-[#d1d5db] bg-[#f9f9f9] text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 p-4"
     value={inputKey}
     onChange={(e) => setInputKey(e.target.value)}
    />
   </div>


   <div className="lg:w-20 justify-center items-center">
    <button onClick={handleDecryption}
     disabled={loading}
     className={`h-16 px-6 rounded-xl text-white font-semibold transition-all duration-200 ease-in-out ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#E55050] hover:bg-[#ae3e3e] hover:scale-105"}`}
    >{loading ? <Loader inverse size="sm" content="Decrypting..." /> : "Decrypt"}</button>
   </div>

   {/* Output Section */}
   <div className="bg-white p-6 w-full lg:w-1/2 rounded-3xl shadow-md">

    <p className="w-full min-h-[4rem] bg-[#f9f9f9] p-4 rounded-xl border border-[#d1d5db] text-gray-800 break-words">
     {decryptedText || "Decrypted text will appear here."}
    </p>
   </div>
  </div>
 );
}

export default DecryptionScreen;
