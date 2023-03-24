import React from "react";
import { Link } from "react-router-dom";

import BreadCrumbs from "../../components/BreadCrumbs";
import CommentsContainer from "../../components/comments/CommentsContainer";
import MainLayout from "../../components/MainLayout";
import SocialShareButtons from "../../components/SocialShareButtons";

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
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1">
          <BreadCrumbs data={BreadCrumbsData} />

          <img src={images.Post1} className="rounded-xl w-full" alt="A Post" />
          <Link
            to="/blog?category=selectedCategory"
            className="text-primary text-sm font-roboto inline-block mt-4 md:text-base"
          >
            EDUCATION
          </Link>
          <h1 className="text-xl font-medium font-roboto text-dark-hard mt-4 md:text-[26px]">
            Help children get better education.
          </h1>
          <div className="mt-4 text-dark-soft">
            <p className="leading-7  my-5 text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
              tempora eaque molestias repellat quos, tempore neque impedit
              inventore adipisci ad, reprehenderit sed mollitia aut similique
              perspiciatis dolor voluptatem accusantium? Nisi. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Fugit vitae officia
              veritatis. Tempore, neque eaque eos iure voluptas, saepe natus
              fuga rem, temporibus ipsam quas quaerat ullam cum ea officiis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              nostrum facere praesentium eaque recusandae sed adipisci dicta
              quisquam porro placeat necessitatibus distinctio fuga harum et,
              voluptate earum, similique voluptates ipsum.
            </p>
            <p className="leading-7 my-5 text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
              tempora eaque molestias repellat quos, tempore neque impedit
              inventore adipisci ad, reprehenderit sed mollitia aut similique
              perspiciatis dolor voluptatem accusantium? Nisi. Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Quae rem eum illo facere
              ab, officia pariatur amet dolores? Magni omnis fugiat aliquid odit
              adipisci ipsa porro laboriosam molestiae explicabo ducimus.
            </p>
            <p className="leading-7  my-5 text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
              tempora eaque molestias repellat quos, tempore neque impedit
              inventore adipisci ad, reprehenderit sed mollitia aut similique
              perspiciatis dolor voluptatem accusantium? Nisi. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Non quos cumque deserunt
              ratione eum exercitationem saepe aliquid fugiat. Necessitatibus
              autem cum sequi commodi eum temporibus vitae odio pariatur, sit
              odit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium placeat obcaecati error temporibus ex est quis dolores
              dolore praesentium expedita molestiae omnis unde iure quaerat,
              inventore nostrum eos quibusdam autem!
            </p>
          </div>
          <CommentsContainer className="mt-10" loggedInUserId="a" />
        </article>
        <div>
          <SuggestedPosts
            header="Latest Article"
            posts={postsData}
            tags={tagsData}
            className="mt-8 lg:mt-0 lg:max-w-xs"
          />
          <div className="mt-7">
            <h2 className="font-roboto font-medium text-dak-hard mb-4 md:text-xl">
              Share On:
            </h2>
            <SocialShareButtons
              url={encodeURI("https://www.instagram.com/")}
              title={encodeURIComponent("Instagram")}
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ArticleDetailPage;
