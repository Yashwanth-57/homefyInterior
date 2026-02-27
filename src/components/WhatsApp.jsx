import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp() {

  return (

    <a
      href="https://wa.me/917799448384"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-[999]
        w-16 h-16
        flex items-center justify-center
        bg-green-500
        text-white
        rounded-full
        shadow-[0_10px_30px_rgba(0,0,0,0.25)]
        hover:scale-110
        hover:shadow-[0_15px_40px_rgba(0,0,0,0.35)]
        transition duration-300
      "
    >

      <FaWhatsapp size={30} />

    </a>

  );

}