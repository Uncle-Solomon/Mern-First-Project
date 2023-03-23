import React from "react";
import { Link } from "react-router-dom";

import BreadCrumbs from "../../components/BreadCrumbs";
import MainLayout from "../../components/MainLayout";

import { images } from "../../constants";
import SuggestedPosts from "./container/SuggestedPosts";

const BreadCrumbsData = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/blog" },
  { name: "Article Titile", link: "/blog/1" },
];

const postsData = [
  {
    _id: "1",
    image: images.Post1,
    title: "Help Children get better education",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
  {
    _id: "2",
    image: images.Post1,
    title: "Help Children get better education",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
  {
    _id: "3",
    image: images.Post1,
    title: "Help Children get better education",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
  {
    _id: "4",
    image: images.Post1,
    title: "Help Children get better education",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
];

const tagsData = [
  "Medical",
  "Lifestyle",
  "Learn",
  "Healthy",
  "Food",
  "Diet",
  "Education",
];

const ArticleDetailPage = () => {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5">
        <article className="flex-1">
          <BreadCrumbs data={BreadCrumbsData} />

          <img
            src={images.Post1}
            className="rounded-xl w-full"
            alt="A Post picture"
          />
          <Link
            to="/blog?category=selectedCategory"
            className="text-primary text-sm font-roboto inline-block mt-4"
          >
            EDUCATION
          </Link>
          <h1 className="text-xl font-medium font-roboto text-dark-hard mt-4">
            Help children get better education.
          </h1>
          <div className="mt-4 text-dark-soft">
            <p className="leading-7">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
              tempora eaque molestias repellat quos, tempore neque impedit
              inventore adipisci ad, reprehenderit sed mollitia aut similique
              perspiciatis dolor voluptatem accusantium? Nisi.
            </p>
          </div>
        </article>
        <SuggestedPosts
          header="Latest Article"
          posts={postsData}
          tags={tagsData}
        />
      </section>
    </MainLayout>
  );
};

export default ArticleDetailPage;
