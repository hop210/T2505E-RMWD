import React, { useEffect, useState } from "react";

function ObjectList() {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    fetch("/json/objects.json")
      .then((res) => res.json())
      .then((data) => setObjects(data));
  }, []);

  return (
    <section id="objects" className="p-10">
      <h2 className="text-2xl font-bold mb-8 text-center uppercase">
        Should who learn programming in FPT Aptech?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {objects.map((obj) => (
          <div key={obj.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={obj.image}
              alt={obj.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-blue-700">{obj.title}</h3>
              <p className="text-sm text-gray-700 mt-2">{obj.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ObjectList;
