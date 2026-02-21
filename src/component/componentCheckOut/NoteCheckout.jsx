import { Pencil } from "lucide-react";
const NoteCheckout = () => {
  return (
    <div className="p-10 rounded-2xl bg-white shadow">
      <h1 className="text-[18px] font-semibold mb-10 text-[#222222]">Note</h1>
      <div className="relative">
        <Pencil
          size={18}
          className="absolute top-5 left-5 text-gray-400 pointer-events-none"
        />
        <textarea
          placeholder="Add note"
          className="
          w-full
          bg-gray-50
          min-h-45
          border
          border-[#22222233]
          rounded-md
          py-4
          px-12.5
          
          focus:outline-none
          focus:border-[#22222280]
          resize-none
        "
        />
      </div>
    </div>
  );
};

export default NoteCheckout;
