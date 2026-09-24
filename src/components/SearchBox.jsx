import React from "react";
import { Search } from "lucide-react";

export default function SearchBox({ value, onChange, placeholder = "Search..." }) {
  return (
    <div className="relative max-w-md">
      <Search size={19} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
}