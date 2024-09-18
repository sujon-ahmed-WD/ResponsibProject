import React from "react";
import { GrMapLocation } from "react-icons/gr";

const CardHome = () => {
  return (
    <div>
      <h1 className="text-green-500  text-4xl text-center  ">
        <span className="text-4xl bg-300%   font-bold bg-gradient-to-r from-red-700 via-red-200 to-green-400 text-transparent bg-clip-text animate-gradient">
          Explore Spectacular Tourism Spots
        </span>
      </h1>

      <p className=" text-center text-xl md:text-2xl">
        "Spectacular" refers to something incredibly impressive or striking. It
        captures attention with its grandeur, beauty, or uniqueness. Whether
        it's a stunning natural landscape or a remarkable performance, the term
        describes moments that leave a lasting impression. Spectacular sights or
        experiences often inspire awe and admiration, standing out for their
        extraordinary quality.
      </p>

      <div className="flex justify-center  ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8   ">
          <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-5 shadow-lg dark:bg-[#18181B]">
            <div className="flex flex-col space-y-1.5">
              <h3 className="text-2xl font-semibold ">Ratargul Swamp Forest</h3>
              <p className="text-sm text-gray-500 dark:text-white/60">
                A freshwater swamp forest, often referred to as the "Amazon of
                Bangladesh." It is one of the few swamp forests in the country,
                offering boat rides through its serene, jungle-like waters.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p>
                <GrMapLocation className="h-8 w-6" />
              </p>
              <p className="flex justify-center rounded-lg bg-green-500 p-2 text-center text-sm text-white">
                Location: Sylhet
              </p>
            </div>
            <img
              width={400}
              height={300}
              className="h-[300px] w-full rounded-lg bg-gray-600 object-cover"
              src="https://images.unsplash.com/photo-1724059235272-dc3d431cf6bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fEJhbmdsYWRlc2glMjBOYXRpb25hbCUyME11c2V1bXxlbnwwfHwwfHx8MA%3D%3D"
              alt="card navigate ui"
            />
            <button className="w-full rounded-lg bg-green-500 px-6 py-2 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-sm md:text-base">
              Visiting
            </button>
          </div>
          <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-5 shadow-lg dark:bg-[#18181B]">
            <div className="flex flex-col space-y-1.5">
              <h3 className="text-2xl font-semibold ">Ahsan Manzil</h3>
              <p className="text-sm text-gray-500 dark:text-white/60">
                Ahsan Manzil is a historic palace located in Dhaka, the capital
                city of Bangladesh. It was built in the mid-19th century and
                served as the residence of the Nawab of Dhaka. The palace is an
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p>
                <GrMapLocation className="h-8 w-6" />
              </p>
              <p className="rounded-lg bg-green-500 p-2 text-center text-sm text-white">
                Location: Dhaka
              </p>
            </div>
            <img
              width={400}
              height={300}
              className="h-[300px] w-full rounded-lg bg-gray-600 object-cover"
              src="https://images.unsplash.com/photo-1692599338360-2ed390c060d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEFoc2FuJTIwTWFuemlsfGVufDB8fDB8fHww"
              alt="card navigate ui"
            />
            <button className="w-full rounded-lg bg-green-500 px-6 py-2 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-sm md:text-base">
              Visiting
            </button>
          </div>
          <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-5 shadow-lg dark:bg-[#18181B]">
            <div className="flex flex-col space-y-1.5">
              <h3 className="text-2xl font-semibold ">Brahmaputra</h3>
              <p className="text-sm text-gray-500 dark:text-white/60">
                The Brahmaputra is a trans-boundary river which flows through
                Southwestern China, Northeastern India, and Bangladesh. It is
                known as Brahmaputra or Luit in
              </p>
            </div>
            <div className="flex items-end justify-between">
              <p>
                <GrMapLocation className="h-8 w-6" />
              </p>
              <p className="rounded-lg bg-green-500 p-2 text-center text-sm text-white">
                Location:Coumilla
              </p>
            </div>
            <img
              width={400}
              height={300}
              className="h-[300px] w-full rounded-lg bg-gray-600 object-cover"
              src="https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TW9ucHVyYSUyMElzbGFuZHxlbnwwfHwwfHx8MA%3D%3D"
              alt="card navigate ui"
            />
            <button className="w-full rounded-lg bg-green-500 px-6 py-2 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-sm md:text-base">
              Visiting
            </button>
          </div>
          <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-5 shadow-lg dark:bg-[#18181B]">
            <div className="flex flex-col space-y-1.5">
              <h3 className="text-2xl font-semibold ">Sandwip Island</h3>
              <p className="text-sm text-gray-500 dark:text-white/60">
                The economy of Bhola is largely based on agriculture, with rice,
                jute, and various vegetables being significant crops. Fishing is
              </p>
            </div>
            <div className="flex items-end justify-between">
              <p>
                <GrMapLocation className="h-8 w-6" />
              </p>
              <p className="rounded-lg bg-green-500 p-2 text-center text-sm text-white">
                Location:Bhola
              </p>
            </div>
            <img
              width={400}
              height={300}
              className="h-[300px] w-full rounded-lg bg-gray-600 object-cover"
              src="https://images.unsplash.com/photo-1700376326141-8470baf6172e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fEJhbmdsYWRlc2glMjBOYXRpb25hbCUyME11c2V1bXxlbnwwfHwwfHx8MA%3D%3D"
              alt="card navigate ui"
            />
            <button className="w-full rounded-lg bg-green-500 px-6 py-2 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-sm md:text-base">
              Visiting
            </button>
          </div>
          <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-5 shadow-lg dark:bg-[#18181B]">
            <div className="flex flex-col space-y-1.5">
              <h3 className="text-2xl font-semibold ">
                Notable Mosques in Bhola
              </h3>
              <p className="text-sm text-gray-500 dark:text-white/60">
                Made with genuine leather, our Classic Leather Jacket is the
                perfect addition to every wardrobe.
              </p>
            </div>
            <div className="flex items-end justify-between">
              <p>
                <GrMapLocation className="h-8 w-6" />
              </p>
              <p className="rounded-lg bg-green-500 p-2 text-center text-sm text-white">
                Location: Bhola
              </p>
            </div>
            <img
              width={400}
              height={300}
              className="h-[300px] w-full rounded-lg bg-gray-600 object-cover"
              src="https://images.unsplash.com/flagged/photo-1558113118-e42e558b352a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFNoYWglMjBBbGklMjBCYWdoZGFkaSUyME1vc3F1ZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="card navigate ui"
            />
            <button className="w-full rounded-lg bg-green-500 px-6 py-2 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-sm md:text-base">
              Visiting
            </button>
          </div>
          <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-5 shadow-lg dark:bg-[#18181B]">
            <div className="flex flex-col space-y-1.5">
              <h3 className="text-2xl font-semibold ">Sundarban</h3>
              <p className="text-sm text-gray-500 dark:text-white/60">
                Sundarbans (often spelled "Sundarban" or "Sundarbon") is a vast
                mangrove forest located in the southwestern part of Bangladesh
              </p>
            </div>
            <div className="flex items-end justify-between">
              <p>
                <GrMapLocation className="h-8 w-6" />
              </p>
              <p className="rounded-lg bg-green-500 p-2 text-center text-sm text-white">
                Location:Kulna
              </p>
            </div>
            <img
              width={400}
              height={300}
              className="h-[300px] w-full rounded-lg bg-gray-600 object-cover"
              src="https://plus.unsplash.com/premium_photo-1661913048770-254543a0adec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3VuZGFyYmFuc3xlbnwwfHwwfHx8MA%3D%3D"
              alt="card navigate ui"
            />
            <button className="w-full rounded-lg bg-green-500 px-6 py-2 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-sm md:text-base">
              Visiting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
