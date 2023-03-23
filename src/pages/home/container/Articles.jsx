import React from "react";
import ArticleCard from "../../../components/ArticleCard";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <section className="container mx-auto flex flex-col md:gap-x-5 gap-y-5 px-5 py-10">
      <div className="flex flex-wrap md:gap-x-5 pb-10">
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
      </div>
      <Link
        to="/blog/1"
        className="mx-auto flex items-center gap-x-2 font-bold text-primary border-2 border-primary px-6 py-3 rounded-lg"
      >
        <span className="">More Articles</span>
        <FaArrowRight className="w-3 h-3" />
      </Link>
    </section>
  );
};

export default Articles;
