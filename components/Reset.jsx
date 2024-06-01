import React from "react";
import { RotateCcw } from "lucide-react";

const Reset = () => {
  return (
    <div className="text-orange-1 flex gap-2 items-center cursor-pointer">
      <span>
        <RotateCcw size={20} />
      </span>
      <p>Reset Filter</p>
    </div>
  );
};

export default Reset;
