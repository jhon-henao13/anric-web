import React from 'react';
import Hero from '../components/Hero';
import AdviceSection from '../components/AdviceSection';
import StatsSection from '../components/StatsSection';
import CategoriesSection from '../components/CategoriesSection';
import BestSellersSection from '../components/BestSellersSection';
import WhyUsSection from '../components/WhyUsSection';
import InstagramSection from '../components/InstagramSection';

export default function Home() {
  return (
    <>
      <Hero />
      <AdviceSection />
      <StatsSection />
      <CategoriesSection />
      <BestSellersSection />
      <WhyUsSection />
      <InstagramSection />
    </>
  );
}