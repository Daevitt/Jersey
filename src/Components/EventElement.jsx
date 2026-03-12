import "./style.css"
import { NavLink } from "react-router-dom"

const EventElement = ({ item, accessLevel, isOwned, onDemoBuy }) => {
  const lowResImage = item.lowResImage || item.Image
  const highResImages = Array.isArray(item.highResImages)
    ? item.highResImages
    : item.Image
    ? [item.Image]
    : []

  return (
    <div className="flex justify-center items-center">
      <div className="flex h-screen w-8/12 lg:pt-20 md:pt-12 sm:pt-8">
        <div className="w-1/2 relative">
          <img
            src={lowResImage}
            alt="Error"
            className="leftpic h-7/12 aspect-2/3"
          />
        </div>
        <div className="flex flex-col gap-y-8 absolute right-64 top-[18%] w-5/12 justify-between h-4/6">
          <div>
            <div className="text-[#FF9011] text-3xl font-semibold">
              {item.EventName}
            </div>
          </div>
          <div>
            <div className="text-white text-justify text-lg">
              {item.Description}
            </div>
            <div className="text-white flex flex-col gap-y-2 mt-8">
              <div className="text-2xl">
                Artist : <span className="text-[#00FF6A]">{item.Artist}</span>
              </div>
              <div className="text-2xl">
                Venue : <span className="text-[#00FF6A]">{item.Venue}</span>
              </div>
              <div className="text-2xl">
                Date : <span className="text-[#00FF6A]">{item.Date}</span>
              </div>
              <div className="text-2xl">
                Price : <span className="text-[#00FF6A]">{item.Price}</span>
              </div>

              {/* Botones originales (no se toca la estética) */}
              <button className="bg-[#FF9011] w-40 h-10 rounded-md mt-4 text-black font-semibold text-xl hover:scale-105 transition-all">
                <NavLink to={`/Billing/${item.id}`}>BOOK NOW!!</NavLink>
              </button>
              <button className="bg-[#FF9011] w-40 h-10 rounded-md mt-4 text-black text-xl">
                <NavLink to={`/Events`}>Go Back</NavLink>
              </button>

              {/* Mensaje y botón demo según acceso */}
              {accessLevel !== "wallet_has_nft" && (
                <div className="mt-4 text-sm text-gray-300">
                  Conecta tu wallet y compra el NFT de esta sala para ver las
                  camisetas en alta calidad.
                  <div className="mt-3">
                    <button
                      className="bg-[#FF9011] w-48 h-10 rounded-md text-black text-sm font-semibold hover:scale-105 transition-all"
                      type="button"
                      onClick={onDemoBuy}
                    >
                      Demo: Unlock Room
                    </button>
                  </div>
                </div>
              )}

              {accessLevel === "wallet_has_nft" && highResImages.length > 0 && (
                <div className="mt-6">
                  <div className="text-xl text-[#00FF6A] mb-2">
                    High quality jerseys
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {highResImages.map((src, index) => (
                      <img
                        key={index}
                        src={src}
                        alt={`High quality jersey ${index + 1}`}
                        className="h-40 rounded-md"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventElement
