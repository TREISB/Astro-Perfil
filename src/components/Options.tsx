import React from "react";

export const Options = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (value: boolean) => void }) => {
  return isOpen ? (
    <div className="fixed w-screen h-screen z-50 bg-black bg-opacity-40 fill-mode-forwards top-auto bottom-0 left-0 right-0 mt-auto mb-0 onClick={() => setIsOpen(false)}">
      <div className="undefined flex flex-col gap-4 w-screen bottom-0 left-1/2 !-translate-x-1/2 fixed py-4 px-6 items-center rounded-t-lg text-black z-50">
        <div className="bg-white w-full rounded-default flex flex-col max-w-lg mx-auto items-center">
          <p className="text-red font-medium py-4">Denunciar</p>
          <hr className="border-gray w-11/12" />
          <p className="text-red font-medium py-4">Bloquear</p>
        </div>
        <div className="bg-white w-full rounded-default flex flex-col max-w-lg mx-auto items-center">
          <button className="bg-white rounded-2xl font-medium py-4 max-w-lg mx-auto" onClick={() => setIsOpen(false)}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  ) : null;
};