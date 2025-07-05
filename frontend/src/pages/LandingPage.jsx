import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ReviewSection from '../components/ReviewSection'
import StatsSection from '../components/StatsSection'
import PopularCourses from '../components/PopularCourses'
import PricingPlans from '../components/PricingPlans'
import FAQ from '../components/FAQ'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'
import TutorialHighlightSection from '../components/TutorialHighlightSection'
import HowItWorks from '../components/HowItWorks'

const LandingPage = () => {
    return (
        <div className=''>
            <HeroSection />
            <div className='w-full p-5 max-w-6xl mx-auto'>
                <ReviewSection />
                <StatsSection />
                <PopularCourses />
                <HowItWorks />
                <PricingPlans />
                <TutorialHighlightSection />
                <FAQ />
                <CallToAction />
                <Footer />
            </div>
        </div>
    )
}

export default LandingPage