import { useState } from "react";

export function Preview() {
  const [isPreviewActive, setIsPreviewActive] = useState(false);

  return (
    <div className="flex flex-col items-end">
      <div className="relative">
        <button
          className="absolute right-10"
          onClick={() => {
            setIsPreviewActive(!isPreviewActive);
          }}
        >
          <img
            src={isPreviewActive ? "/icons/x.svg" : "/icons/360.svg"}
            alt={
              isPreviewActive
                ? "fechar previsualização"
                : "abrir previsualização"
            }
          />
        </button>
        <img
          className="w-[449px]"
          src={isPreviewActive ? "/images/sofa.gif" : "/images/sofa.png"}
          alt="Sofá Margot II - Rosé"
        />
      </div>
    </div>
  );
}
