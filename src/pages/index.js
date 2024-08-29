import AboutUs from "@mahdion/components/aboutus";
import BlogsPage from "@mahdion/components/blogs";
import DetailPage from "@mahdion/components/detailpage";
import HomePage from "@mahdion/components/homepage";
import ProductPage from "@mahdion/components/product";
import Services from "@mahdion/components/services";
import TrainingPage from "@mahdion/components/trainingpage";

export default function Home() {
  return (
    <>
      <HomePage />
      <p className="text-3xl font-extrabold text-center bg-purple w-full mb-10 text-neutral-50 p-5 -rotate-2">
        همه می خواهند بدنساز باشند اما کسی نمی خواهد وزنه های سنگین بلند کند!
      </p>
      <Services />
      <ProductPage />
      <DetailPage />
      <BlogsPage />
      <TrainingPage />
      <AboutUs />
    </>
  );
}
