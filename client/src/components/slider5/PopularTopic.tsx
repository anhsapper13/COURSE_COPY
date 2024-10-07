import React from "react";
import { listPopularTopic } from "../../models/listTopic";
const PopularTopic = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-8">Popular topics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {listPopularTopic.map((topic, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-6 bg-gray-100 hover:shadow-md transition-shadow"
          >
            <img
              src={topic.icon}
              alt={topic.name}
              className="w-20 h-20 object-cover mx-auto mb-4"
            />
            <p className="text-center font-semibold">{topic.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTopic;
