import iconAntena from "../../../assets/icons/sinal-icon-minutos-telecom.svg";

const planos = [
  {
    title: "Plano 800Mb",
    mega: 800,
    price: 199,
    cents: 90,
  },
  {
    title: "Plano 600Mb",
    mega: 600,
    price: 159,
    cents: 90,
  },
  {
    title: "Plano 500Mb",
    mega: 500,
    price: 129,
    cents: 90,
  },
];

function PlanosOutros() {
  return (
    <div className="text-white lg:max-h-[410px] lg:mt-6 m-auto">
      <div className="w-full md:flex md:gap-6">
        {planos.map((plano, index) => (
          <div
            key={index}
            className={`p-4 md:p-3 flex-1 w-full mb-6 shadow-2xl md:mb-0 md:rounded-lg overflow-hidden ${
              index % 2 === 0 ? "bg-azulMarinho" : "bg-azulBg"
            }`}
          >
            {/* header */}
            <div className="flex items-center gap-2 mb-2">
              <img src={iconAntena} alt="Icone Plano" className="h-6 md:h-4" />
              <p className="text-azulAgua font-bold text-sm md:text-xs uppercase">
                {plano.title}
              </p>
            </div>

            {/* mega + price */}
            <div className="flex justify-between items-center gap-4">
              {/* mega */}
              <div className="font-bold leading-none">
                <p className="text-5xl md:text-3xl lg:text-4xl">{plano.mega}</p>
                <p className="text-xl md:text-sm">MEGA</p>
              </div>

              {/* price */}
              <div className="flex items-end gap-1 font-bold leading-none">
                <div className="text-sm md:text-xs">
                  <p>por</p>
                  <p>R$</p>
                </div>

                <p className="text-5xl md:text-3xl text-azulAgua">
                  {plano.price}
                </p>

                <div>
                  <p className="text-azulAgua text-lg md:text-sm">
                    ,{plano.cents}
                  </p>
                  <p className="text-xs md:text-[10px]">/mês</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlanosOutros;

// import iconAntena from "../../../assets/icons/sinal-icon-minutos-telecom.svg";

// const planos = [
//   {
//     title: "Plano 800Mb",
//     mega: 800,
//     price: 199,
//     cents: 90,
//   },
//   {
//     title: "Plano 600Mb",
//     mega: 600,
//     price: 159,
//     cents: 90,
//   },
//   {
//     title: "Plano 500Mb",
//     mega: 500,
//     price: 129,
//     cents: 90,
//   },
// ];

// function PlanosOutros() {
//   return (
//     <div className="text-white shadow-2xl mb-6 lg:max-h-[410px] lg:mt-6 m-auto md:bg-azulBg">
//       <div className="w-full gap-4">
//         {planos.map((plano, index) => (
//           <div
//             key={index}
//             className={`p-4 flex-1 w-full mb-6 md:rounded-lg ${
//               index % 2 === 0 ? "bg-azulMarinho" : "bg-azulBg"
//             }`}
//           >
//             {/* header */}
//             <div className="flex items-center gap-2 mb-2">
//               <img src={iconAntena} alt="Icone Plano" className="h-6" />
//               <p className="text-azulAgua font-bold text-sm uppercase">
//                 {plano.title}
//               </p>
//             </div>

//             {/* mega */}
//             <div className="flex justify-between items-center gap-4">
//               <div className="font-bold">
//                 <p className="text-5xl md:text-6xl leading-none">
//                   {plano.mega}
//                 </p>
//                 <p className="text-xl">MEGA</p>
//               </div>

//               {/* price */}
//               <div className="flex items-end gap-1 font-bold">
//                 <div className="text-sm">
//                   <p>por</p>
//                   <p>R$</p>
//                 </div>

//                 <p className="text-5xl text-azulAgua leading-none">
//                   {plano.price}
//                 </p>

//                 <div>
//                   <p className="text-azulAgua text-lg">,{plano.cents}</p>
//                   <p className="text-xs">/mês</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default PlanosOutros;
