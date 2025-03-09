import React from "react";
import {
  Star,
  Search,
  Home,
  Map,
  Calendar,
  User,
  ChevronRight,
} from "lucide-react";

interface CategoryProps {
  icon: React.ReactNode;
  label: string;
}

const Category: React.FC<CategoryProps> = ({ icon, label }) => {
  const handleClick = () => {
    alert(`Categoría seleccionada: ${label}`);
    // Aquí puedes agregar cualquier acción que desees realizar
  };

  return (
    <div className="flex-1 flex flex-col items-center gap-[9px] pb-px">
      <div
        className="w-14 h-14 rounded-full bg-[#ff00d4]/10 flex justify-center items-center cursor-pointer hover:bg-[#ff00d4]/20 transition-colors"
        onClick={handleClick}
      >
        {icon}
      </div>
      <div className="text-white text-xs font-normal font-inter leading-3 text-center">
        {label}
      </div>
    </div>
  );
};

interface PlaceCardProps {
  image: string;
  title: string;
  category: string;
  rating: string;
}

const PlaceCard: React.FC<PlaceCardProps> = ({
  image,
  title,
  category,
  rating,
}) => (
  <div className="min-w-[160px] h-[212px] bg-gray-800/50 rounded-xl shadow-lg flex flex-col shrink-0">
    <img
      src={image}
      alt={title}
      className="w-36 h-32 m-2 rounded-lg object-cover"
    />
    <div className="h-6 pr-7 pt-[3px] pb-1 flex items-center">
      <div className="text-white text-base font-medium font-inter">{title}</div>
    </div>
    <div className="h-4 pr-[91px] py-px flex items-center">
      <div className="text-gray-400 text-xs font-normal font-inter">
        {category}
      </div>
    </div>
    <div className="w-36 pr-[108.50px] py-px flex items-start gap-1">
      <Star className="w-[13.50px] h-3 text-yellow-400" />
      <div className="text-white text-xs font-normal font-inter leading-3">
        {rating}
      </div>
    </div>
  </div>
);

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => (
  <div className="px-4 py-[3px] flex justify-between items-start">
    <div className="text-white text-xl font-bold font-inter leading-tight">
      {title}
    </div>
    <div className="flex justify-end items-center px-4 py-0.5">
      <div className="text-center text-[#ff00d4] text-sm font-normal font-inter">
        Ver todos
      </div>
    </div>
  </div>
);

interface EventCardProps {
  day: string;
  month: string;
  title: string;
  location: string;
  time: string;
}

const EventCard: React.FC<EventCardProps> = ({
  day,
  month,
  title,
  location,
  time,
}) => (
  <div className="grow p-4 bg-gray-800/50 rounded-xl flex justify-center items-center gap-4">
    <div className="w-[60px] px-2 pt-3 pb-2 bg-[#ff00d4]/10 rounded-lg flex-col justify-end items-center gap-1 inline-flex">
      <div className="text-center text-[#ff00d4] text-lg font-bold font-inter">
        {day}
      </div>
      <div className="text-center text-[#ff00d4] text-xs font-normal font-inter">
        {month}
      </div>
    </div>
    <div className="w-[250px] pt-[3px] flex-col justify-center items-start gap-1.5 inline-flex">
      <div className="text-white text-base font-medium font-inter leading-none">
        {title}
      </div>
      <div className="text-gray-400 text-sm font-normal font-inter leading-[14px]">
        {location}
      </div>
      <div className="self-stretch h-4 pr-[157px] py-px flex items-start gap-1">
        <Calendar className="w-3 h-3 text-gray-400" />
        <div className="text-gray-400 text-xs font-normal font-inter leading-3">
          {time}
        </div>
      </div>
    </div>
  </div>
);

const TravelApp: React.FC = () => {
  return (
    <div className="min-h-screen w-full max-w-md mx-auto bg-gray-900 flex flex-col justify-start items-start">
      {/* Header */}
      <div className="w-full h-14 px-4 py-3 bg-gray-900/80 flex justify-center items-center sticky top-0 z-10">
        <div className="grow flex justify-between items-center">
          <div className="text-white text-2xl font-bold font-inter leading-normal">
            Explora Yucatán
          </div>
          <div className="w-[30px] h-8 px-2 pt-2 pb-[7px] bg-gray-800/50 rounded-full shadow-lg flex-col justify-center items-center">
            <User className="w-3.5 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full pt-4 pb-20 flex flex-col justify-start items-start gap-6">
        {/* Search Bar */}
        <div className="self-stretch h-11 px-4 flex justify-center items-center w-full">
          <div className="w-full h-11 relative flex-col justify-start items-start">
            <div className="h-11 w-full pl-10 pr-4 bg-gray-800/50 rounded-xl flex justify-start items-center">
              <div className="text-[#adaebc] text-sm font-normal font-inter leading-tight">
                ¿Qué quieres explorar?
              </div>
            </div>
            <Search className="w-4 h-4 absolute left-4 top-3.5 text-[#adaebc]" />
          </div>
        </div>

        {/* Featured Banner */}
        <div className="self-stretch h-48 px-4 flex justify-center items-center w-full">
          <div className="w-full h-48 relative bg-black rounded-2xl shadow-lg overflow-hidden">
            <img
              src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C64444939-1741481386830-node-1%3A48-1741481386007.png"
              alt="Festival Cultural Maya"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 pl-4 pr-[147px] pt-5 pb-[18px] bg-gradient-to-r from-black to-transparent flex-col justify-center items-start gap-1.5">
              <div className="text-white text-lg font-bold font-inter leading-[18px]">
                Festival Cultural Maya
              </div>
              <div className="text-gray-300 text-sm font-normal font-inter leading-[14px]">
                Este fin de semana
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="self-stretch h-20 flex justify-center items-center">
          <div className="grow px-4 flex justify-center items-start gap-4">
            <Category
              icon={<Search className="w-3.5 h-4 text-[#ff00d4]" />}
              label="Restaurantes"
            />
            <Category
              icon={<Map className="w-4 h-4 text-[#ff00d4]" />}
              label="Museos"
            />
            <Category
              icon={<Home className="w-4 h-4 text-[#ff00d4]" />}
              label="Hoteles"
            />
            <Category
              icon={<Map className="w-[18px] h-4 text-[#ff00d4]" />}
              label="Playas"
            />
          </div>
        </div>

        {/* Restaurants Section */}
        <div className="w-full flex flex-col justify-start items-start">
          <SectionHeader title="Top 10 Restaurantes" />

          <div className="w-full h-[212px] pl-4 pr-2 flex items-start gap-4 overflow-x-auto scrollbar-hide">
            <PlaceCard
              image="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C64444939-1741481387685-node-1%3A153-1741481387170.png"
              title="La Chaya Maya"
              category="Yucateca"
              rating="4.8"
            />
            <PlaceCard
              image="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C64444939-1741481388586-node-1%3A157-1741481388025.png"
              title="Kuuk"
              category="Gourmet"
              rating="4.9"
            />
            <PlaceCard
              image="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C64444939-1741481389527-node-1%3A161-1741481388956.png"
              title="Nectar"
              category="Fusión"
              rating="4.7"
            />
          </div>

          <div className="w-full h-48 px-4 flex justify-center items-center">
            <div className="w-full h-48 relative bg-black rounded-xl overflow-hidden">
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src="https://xiimbal.s3.us-central-1.wasabisys.com/waCs3iCvcFad6R06ADCtO8xHAJH2_1739403190728.mp4?AWSAccessKeyId=IV4VEGXIH64DX78HVUT4&Expires=3789763550&Signature=VLjoGozMVBU8OCUOMiDHol6NJjU%3D"
                  type="video/mp4"
                />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          </div>
        </div>

        {/* Museums Section */}
        <div className="w-full flex flex-col justify-start items-start">
          <SectionHeader title="Top 10 Museos" />

          <div className="w-full h-[212px] pl-4 pr-2 flex items-start gap-4 overflow-x-auto scrollbar-hide">
            <PlaceCard
              image="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C64444939-1741481391409-node-1%3A166-1741481390842.png"
              title="Gran Museo Maya"
              category="Historia"
              rating="4.9"
            />
            <PlaceCard
              image="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C64444939-1741481392341-node-1%3A170-1741481391739.png"
              title="Palacio Cantón"
              category="Arte"
              rating="4.7"
            />
            <PlaceCard
              image="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C64444939-1741481393450-node-1%3A174-1741481392872.png"
              title="Casa Montejo"
              category="Historia"
              rating="4.6"
            />
          </div>

          <div className="w-full h-48 px-4 flex justify-center items-center">
            <div className="w-full h-48 relative bg-black rounded-xl overflow-hidden">
              <img
                src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C64444939-1741481394375-node-1%3A130-1741481393786.png"
                alt="Museum promotion"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex justify-center items-center">
                <div className="grow shrink basis-0 self-stretch pl-[25px] pr-[21px] py-5 bg-white/30 rounded-full flex justify-end items-center">
                  <ChevronRight className="w-[18px] h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hotels Section */}
        <div className="w-full flex flex-col justify-start items-start">
          <SectionHeader title="Top 10 Hoteles" />

          <div className="w-full h-[212px] pl-4 pr-2 flex items-start gap-4 overflow-x-auto scrollbar-hide">
            <PlaceCard
              image="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C64444939-1741481395411-node-1%3A179-1741481394806.png"
              title="Rosas & Xocolate"
              category="Boutique"
              rating="4.9"
            />
            <PlaceCard
              image="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C64444939-1741481396375-node-1%3A183-1741481395778.png"
              title="Hacienda Xcanatún"
              category="Lujo"
              rating="4.8"
            />
            <PlaceCard
              image="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C64444939-1741481397302-node-1%3A187-1741481396743.png"
              title="Casa Lecanda"
              category="Boutique"
              rating="4.7"
            />
          </div>

          <div className="w-full h-48 px-4 flex justify-center items-center">
            <div className="w-full h-48 relative bg-black rounded-xl overflow-hidden">
              <img
                src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C64444939-1741481398527-node-1%3A137-1741481397688.png"
                alt="Hotel promotion"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex justify-center items-center">
                <div className="grow shrink basis-0 self-stretch pl-[25px] pr-[21px] py-5 bg-white/30 rounded-full flex justify-end items-center">
                  <ChevronRight className="w-[18px] h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Beaches Section */}
        <div className="self-stretch flex flex-col justify-center items-start gap-3">
          <SectionHeader title="Top 10 Playas" />

          <div className="w-full px-4 mb-4">
            <video
              className="w-full h-48 rounded-xl object-cover"
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="https://xiimbal.s3.us-central-1.wasabisys.com/waCs3iCvcFad6R06ADCtO8xHAJH2_1739403053644.mp4?AWSAccessKeyId=IV4VEGXIH64DX78HVUT4&Expires=3789763411&Signature=XohnFfq%2BGq75F0QNfB0NWbYqq6c%3D"
                type="video/mp4"
              />
              Tu navegador no soporta el elemento de video.
            </video>
            <div className="mt-2 text-white text-base font-medium font-inter">
              Descubre las playas de Yucatán
            </div>
            <div className="text-gray-400 text-xs font-normal font-inter">
              Un recorrido por los mejores destinos costeros
            </div>
          </div>

          <div className="w-full h-[212px] pl-4 pr-2 flex items-start gap-4 overflow-x-auto scrollbar-hide">
            <PlaceCard
              image="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C64444939-1741481399535-node-1%3A192-1741481398842.png"
              title="Playa Norte"
              category="Progreso"
              rating="4.8"
            />
            <PlaceCard
              image="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C64444939-1741481400533-node-1%3A196-1741481399971.png"
              title="Celestún"
              category="Natural"
              rating="4.9"
            />
            <PlaceCard
              image="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C64444939-1741481401445-node-1%3A200-1741481400869.png"
              title="San Crisanto"
              category="Tranquila"
              rating="4.7"
            />
          </div>
        </div>

        {/* Events Section */}
        <div className="self-stretch flex flex-col justify-center items-start gap-3">
          <div className="self-stretch h-7 pl-4 py-[3px] flex justify-start items-center">
            <div className="text-white text-xl font-bold font-inter leading-tight">
              Próximos eventos
            </div>
          </div>

          <div className="self-stretch flex flex-col gap-4 px-4">
            <EventCard
              day="15"
              month="MAR"
              title="Noche de Trova Yucateca"
              location="Centro Histórico de Mérida"
              time="19:00 - 22:00"
            />
            <EventCard
              day="20"
              month="MAR"
              title="Festival Gastronómico Maya"
              location="Parque de Santa Lucía"
              time="16:00 - 23:00"
            />
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="w-full max-w-md h-[41px] pt-px bg-gray-900/80 border-t border-gray-800 fixed bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center z-10">
        <div className="grow px-[31px] py-3 flex justify-center items-start gap-[62px]">
          <Home className="w-[18px] h-4 text-white" />
          <Map className="w-4 h-4 text-white" />
          <Calendar className="w-3.5 h-4 text-white" />
          <Search className="w-[18px] h-4 text-white" />
          <User className="w-3.5 h-4 text-white" />
        </div>
      </div>
    </div>
  );
};

export default TravelApp;
