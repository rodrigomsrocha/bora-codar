export function Info() {
  return (
    <div className="text-primary">
      <div className="flex flex-col gap-3 mb-5">
        <span className="text-[10px] leading-none font-light">
          CÓDIGO: 42404
        </span>
        <h1 className="text-[32px] leading-none font-serif font-semibold">
          Sofá Margot II - Rosé
        </h1>
        <strong className="text-base text-secondary font-normal leading-none">
          R$ 4.000
        </strong>
      </div>
      <button className="px-4 py-2 border border-primary rounded-full">
        ADICIONAR À CESTA
      </button>
    </div>
  );
}
