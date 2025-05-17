"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { DISCOVER_DATA } from "@/mock/DISCOVER_DATA";

interface TypesFeatureCard {
  title: string;
  description: string;
  imgSrc: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function DiscoverSection() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={containerVariants}
      className="py-12 bg-white mb-16"
    >
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <motion.div variants={itemsVariants} className="my-12 text-center">
          <h2 className="text-3xl font-semibold leading-tight text-gray-800">
            {" "}
            Discover{" "}
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Find your Dream Rental Property Today!
          </p>

          <p className="mt-2 text-gray-500 max-w-3xl mx-auto">
            Searching for a rental property can be overwhelming. Our platform
            simplifies the process, allowing you to browse through a wide range
            of rental options and find the perfect place to call home.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 text-center">
          {DISCOVER_DATA.map((item, index) => (
            <motion.div key={index} variants={itemsVariants}>
              <DiscoverCard
                imgSrc={item.imageSrc}
                title={item.title}
                description={item.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const DiscoverCard = ({ title, description, imgSrc }: TypesFeatureCard) => {
  return (
    <div className="px-4 py-12 shadow-lg rounded-lg bg-primary-50 md:h-72">
      <div className="bg-primary-700 p-[0.6rem] rounded-full mb-4 h-10 w-10 mx-auto">
        <Image
          src={imgSrc}
          alt={title}
          width={30}
          height={30}
          className="w-full h-full "
        />
      </div>
      <h4 className="mt-4 text-xl font-medium text-gray-800 ">{title}</h4>

      <p className="mt-2 text-base text-gray-500">{description}</p>
    </div>
  );
};

export default DiscoverSection;
