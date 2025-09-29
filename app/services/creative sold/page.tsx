import React from "react";

const Page: React.FC = () => {
  const items = [
    {
      title: "LOGOS & BRAND IDENTITY",
      img: "https://images.unsplash.com/photo-1581092914564-2f6cfaebd8c5?w=500", // Logo placeholder
    },
    {
      title: "POSTERS, BOOKLETS & FLYERS",
      img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=500", // Posters placeholder
    },
    {
      title: "BROCHURES & CATALOGUES",
      img: "https://images.unsplash.com/photo-1607082349566-187342bbfc23?w=500", // Brochures placeholder
    },
    {
      title: "EDUCATIONAL VISUALS & PROMOTIONAL COLLATERAL",
      img: "https://images.unsplash.com/photo-1522202222201-4b9f6f2c4e77?w=500", // Visuals placeholder
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4 text-center">
        Designs that Speak Education
      </h1>
      <p className="text-gray-600 text-center max-w-3xl mb-10">
        Our in-house creative studio brings your institution’s vision to life
        through impactful design. We craft visually engaging materials that
        communicate clearly, inspire trust, and enhance your educational brand.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-blue-800 text-white flex flex-col items-center rounded-lg p-6 shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-32 w-auto mb-4 rounded-md shadow-md object-cover"
            />
            <h2 className="text-lg font-semibold text-center">{item.title}</h2>
          </div>
        ))}
      </div>

      <p className="mt-12 text-blue-600 font-medium text-center">
        From concept to completion, we ensure every design reflects
        professionalism, purpose, and creativity.
      </p>
    </div>
  );
};

export default Page;
