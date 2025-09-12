import React from "react";
import MainCarousel from "../Components/MainCarousel";
import Categories from "../Components/Categories";
import TrendingBrands from "../Components/TrendingBrands";
import Works from "../Components/Works";
import Reviews from "../Components/Reviews";
import FAQs from "../Components/Faqs";
import Features from "../Components/Features";
import Stats from "../Components/Stats";
import Blogs from "../Components/Blogs";
import Cta from "../Components/Cta";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section>
        <MainCarousel />
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-light">
        <Categories />
      </section>

      {/* Trending Brands Section */}
      <section className="section-padding">
        <TrendingBrands />
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-light">
        <Works />
      </section>

      {/* Customer Reviews Section */}
      <section className="section-padding">
        <Reviews />
      </section>

      {/* FAQs Section */}
      <section className="section-padding bg-light">
        <FAQs />
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <Features />
      </section>

      {/* Statistics Section */}
      <section className="section-padding bg-light">
        <Stats />
      </section>

      {/* Blogs Section */}
      <section className="section-padding">
        <Blogs />
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-light">
        <Cta />
      </section>

      {/* Footer Section */}
      <section className="section-padding">
        <Footer />
      </section>
    </>
  );
}

export default Home;
