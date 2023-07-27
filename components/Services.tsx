const Services = () => {
  return (
    <div
      className="w-full relative bg-pink-300 backdrop-blur-md shadow-lg z-9 p-4"
      id="Services"
    >
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-semibold text-white">Usługi</h1>
      </div>
      <div className="flex flex-col items-center justify-evenly py-8 md:grid md:gap-2 gap-4 grid-cols-3 grid-rows-3 text-white">
        <div className="text-center shadow-lg bg-black/5 rounded-lg p-2">
          <h1 className="text-xl font-semibold ">PEELINGI CHEMICZNE+MASKA</h1>
          <ul>
            <li>Peeling PRX T33 - 300 zł</li>
            <li>Peeling PQ AGE - 270 zł</li>
            <li>Peeling BioRePeel CI3 - 300 zł</li>
            <li>Peeling migdałowy - 160 zł</li>
            <li>Peeling glikolowy - 200 zł</li>
            <li>Acneout peel do terapii skór trądzikowych - 200 zł</li>
            <li>Peeling na bazie kwasu lekowego i DMAE - 200 zł</li>
          </ul>
        </div>
        <div className="text-center shadow-lg bg-black/5 rounded-lg p-2">
          <h1 className="text-xl font-semibold">
            KOSMETOLOGIA PIELĘGNACYJNA I ESTETYCZNA
          </h1>
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </div>
        <div className="text-center shadow-lg bg-black/5 rounded-lg p-2">
          <h1 className="text-xl font-semibold">STYLIZACJA PAZNOKCI</h1>
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </div>
        <div className="text-center shadow-lg bg-black/5 rounded-lg p-2">
          <h1 className="text-xl font-semibold">SYMULATORY TKANKOWE</h1>
          <ul>
            <li>Profhilo - 900 zł</li>
            <li>Nucleofill - 800 zł</li>
            <li>Sunekos 200 - 400 zł</li>
          </ul>
        </div>
        <div className="text-center shadow-lg bg-black/5 rounded-lg p-2">
          <h1 className="text-xl font-semibold">STYLIZACJA RZĘS</h1>
          <ul>
            <li>Lifting/laminacja rzęs - 150 zł</li>
          </ul>
        </div>
        <div className="text-center shadow-lg bg-black/5 rounded-lg p-2">
          <h1 className="text-xl font-semibold">STYLIZACJA BRWI</h1>
          <ul>
            <li>Regulacja brwi z farbką - 60 zł</li>
            <li>Laminacja brwi - 110 zł</li>
            <li>Laminacja brwi z farbką - 130 zł</li>
          </ul>
        </div>
        <div className="text-center shadow-lg bg-black/5 rounded-lg p-2">
          <h1 className="text-xl font-semibold">PEDICURE</h1>
          <ul>
            <li>Pedicure kosmetyczny z odżywką - 120 zł</li>
            <li>Pedicure kosmetyczny z hybrydą - 170 zł</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
