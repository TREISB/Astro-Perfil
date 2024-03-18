import { useState } from "react";
import { Options } from "./Options";
import optionsIcon from "../icons/shared/ic_more_options.svg";

export const OptionsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenOptionsMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen, "isOpen");
  };

  return (
    <div className="ml-auto mr-0 cursor-pointer">
      <img
        src={optionsIcon.src}
        alt="Mais Opções"
        width={18}
        height={18}
        className="ml-auto mr-0 cursor-pointer"
        onClick={handleOpenOptionsMenu}
      />
      <Options isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}