import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { Categories } from '../components/Categories';
import { NewArrivals } from '../components/NewArrivals';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';
export function Home() {
  return <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <Categories />
        <NewArrivals />
        <Newsletter />
      </main>
      <Footer />
    </div>;
}