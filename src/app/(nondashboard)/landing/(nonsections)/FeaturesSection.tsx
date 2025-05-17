"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface TypesFeatureCard {
  title: string;
  description: string;
  imgSrc: string;
  linkText: string;
  linkUrl: string;
}

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function FeaturesSection() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-white"
    >
      <div className="max-w-4xl xl:max-w-6xl mx-auto">
        <motion.h1
          variants={itemsVariants}
          className="text-3xl font-bold text-center mb-12 w-full sm:w-2/3 mx-auto"
        >
          Quickly find your perfect rental apartment
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          {Array.from({ length: 3 }, (_, index) => (
            <motion.div
              key={index}
              variants={itemsVariants}
              /* className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center" */
            >
              <FeatureCard
                imgSrc={`/landing-search${3 - index}.png`}
                title={
                  [
                    "Trustworthy and Verified Listings",
                    "Brose Rental Apartment ",
                    "Simplify Your Rentall Experience",
                  ][index]
                }
                description={
                  [
                    "Discover the best rental options with our verified listings, ensuring you find the perfect place to call home.",
                    "Browse rental apartments that suit your needs and preferences, making your search easier and more efficient.",
                    "Simplify your rental experience with our user-friendly platform, designed to help you find your ideal apartment effortlessly.",
                  ][index]
                }
                linkText={["Explore", "Search", "Discover"][index]}
                linkUrl={["/explore", "/search", "/discover"][index]}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const FeatureCard = ({
  title,
  description,
  imgSrc,
  linkText,
  linkUrl,
}: TypesFeatureCard) => {
  return (
    <div className="text-center">
      <div className="p-4 rounded-lg mb-4 flex items-center justify-center  h-48">
        <Image
          src={imgSrc}
          alt={title}
          width={400}
          height={400}
          className="w-full h-full object-contain "
        />
      </div>
      <h4 className="text-xl font-semibold mb-2 ">{title}</h4>

      <p className="mb-4">{description}</p>

      <Link
        href={linkUrl}
        className="inline-block border border-gray-300 rounded px-4 py-2 hover:bg-gray-100"
        scroll={false}
      >
        {linkText}
      </Link>
    </div>
  );
};

export default FeaturesSection;
