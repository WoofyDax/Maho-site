import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Check, Users, Zap, Target, Award } from "lucide-react";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { CallBenefitsAnimation } from "@/components/CallBenefitsAnimation";

/**
 * ESL (Entry Sales Letter) - Main Landing Page
 * 
 * Design System: Cinematic Luxury Minimalism
 * - Pure black backgrounds with deep charcoal cards
 * - Warm gold/yellow (#fbbf24) accents for CTAs and highlights
 * - Bold Montserrat typography with generous spacing
 * - Liquid glass buttons with subtle glow effects
 * - Smooth scroll animations and hover interactions
 */

export default function ESL() {
  const [, setLocation] = useLocation();
  const [scrollY, setScrollY] = useState(0);

  // Smooth scroll to Calendly section
  const scrollToCalendly = () => {
    const element = document.getElementById("calendly-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header />

      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 opacity-0 animate-fade-in bg-black grid-bg">
        {/* Background gradient glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-yellow-600/10 to-transparent rounded-full blur-3xl"
            style={{ transform: `translate(-50%, calc(-50% + ${scrollY * 0.3}px))` }}
          ></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-12" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
            <img src="/manus-storage/maho-logo_64d5e184.png" alt="Maho Fitness" className="w-20 h-20 rounded-full shadow-lg shadow-yellow-500/30" />
          </div>

          {/* Main headline with gold accent and underline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 leading-tight" style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
            We Help Busy Men{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-lg -skew-x-12 opacity-25 blur-sm"></span>
              <span style={{ fontFamily: 'var(--font-cursive)' }} className="relative text-yellow-400 text-7xl md:text-8xl font-light underline-animated">Transform</span>
            </span>
            {" "}Their Physique In{" "}
            <span style={{ fontFamily: 'var(--font-cursive)' }} className="text-yellow-400 text-7xl md:text-8xl font-light underline-animated">180 Days</span>
          </h1>

          {/* Subheadline - smaller text */}
          <p className="text-sm md:text-base text-gray-400 text-center mb-12 max-w-2xl mx-auto leading-relaxed">
            A premium coaching system built for men with demanding schedules who want to lose fat, build muscle, and regain confidence without guessing what to do next.
          </p>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-yellow-400 stagger-1">
              <Users className="w-5 h-5" />
              <span className="font-semibold text-sm">100+ Clients Helped</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-yellow-400 stagger-2">
              <Zap className="w-5 h-5" />
              <span className="font-semibold text-sm">Busy-Schedule Friendly</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-yellow-400 stagger-3">
              <Target className="w-5 h-5" />
              <span className="font-semibold text-sm">Personalized Coaching</span>
            </div>
          </div>

          {/* Hero video */}
          <div className="relative mb-16 opacity-0 animate-fade-in" style={{ transform: `translateY(${scrollY * 0.15}px)` }}>
            <div className="glass-card p-1 border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300">
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dBzUhEX1weI?quality=hd&vq=hd720"
                  title="180-Day Transformation System"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
            <p className="text-center text-gray-400 text-sm mt-4">Watch how the 180-day transformation system works</p>
          </div>

          {/* CTA Section - Calendly Embed */}
          <div id="calendly-section" className="flex justify-center opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-full max-w-2xl">
              {/* Section Header */}
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-bold mb-3">Ready to Start Your Transformation?</h3>
                <p className="text-gray-400 text-lg">Pick a time that works best for you</p>
                <div className="flex items-center justify-center gap-3 mt-4">
                  <div className="h-px w-12 bg-gradient-to-r from-yellow-500 to-transparent"></div>
                  <span className="text-yellow-400 font-semibold text-sm">30-Minute Strategy Call</span>
                  <div className="h-px w-12 bg-gradient-to-l from-yellow-500 to-transparent"></div>
                </div>
              </div>
              
              {/* Calendly Embed */}
              <div className="glass-card p-1 border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300">
                <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg overflow-hidden">
                  <iframe
                    title="Calendly Booking"
                    src="https://calendly.com/aleksandrharrison0/aleksandr-harrison-1-1-call?hide_event_type_details=1&hide_gdpr_block=1"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent"></div>

      {/* SECTION 2: WHAT YOU GET ON THE CALL - ANIMATED SOFTWARE INTERFACE */}
      <section data-animate className="py-32 px-4 bg-black grid-bg relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-b from-yellow-600/8 to-transparent rounded-full blur-3xl parallax-element"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-t from-yellow-600/8 to-transparent rounded-full blur-3xl parallax-element" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What You'll Get On The Call
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              An interactive breakdown of your personalized strategy
            </p>
          </div>

          {/* Animated Software Interface */}
          <CallBenefitsAnimation />
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent"></div>

      {/* SECTION 3: TESTIMONIALS */}
      <section data-animate className="py-32 px-4 bg-black grid-bg">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Real Client Results
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="glass-card p-8 border-yellow-500/20 stagger-1 hover:shadow-lg hover:shadow-yellow-500/20 transition-all">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Down 24 lbs while working 60-hour weeks. I never thought I could maintain consistency with my schedule, but this system made it possible."
              </p>
              <p className="font-bold text-yellow-300">Client Testimonial</p>
              <p className="text-gray-500 text-sm">Placeholder - Replace with real testimonial</p>
            </div>

            {/* Testimonial 2 */}
            <div className="glass-card p-8 border-yellow-500/20 stagger-2 hover:shadow-lg hover:shadow-yellow-500/20 transition-all">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Finally built a plan I could actually stick to. No more guessing, just clear direction and accountability."
              </p>
              <p className="font-bold text-yellow-300">Client Testimonial</p>
              <p className="text-gray-500 text-sm">Placeholder - Replace with real testimonial</p>
            </div>

            {/* Testimonial 3 */}
            <div className="glass-card p-8 border-yellow-500/20 stagger-3 hover:shadow-lg hover:shadow-yellow-500/20 transition-all">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "I stopped guessing and started seeing measurable progress every week. The coaching is exactly what I needed."
              </p>
              <p className="font-bold text-yellow-300">Client Testimonial</p>
              <p className="text-gray-500 text-sm">Placeholder - Replace with real testimonial</p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 text-lg mb-4">
              100+ men transformed • Results without extreme routines • Built for busy professionals
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent"></div>

      {/* SECTION 4: CASE STUDY VIDEO */}
      <section data-animate className="py-32 px-4 bg-black grid-bg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Real Client Wins
          </h2>

          {/* Video frame */}
          <div className="glass-card p-1 border-yellow-500/30 mb-8">
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/tsLz3ohswow?start=1&quality=hd&vq=hd720"
                title="Client Case Study"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <p className="text-center text-gray-400">
            Watch how one of our clients transformed his physique while managing a demanding career.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent"></div>

      {/* SECTION 5: FINAL CTA */}
      <section data-animate className="py-32 px-4 bg-black grid-bg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready To Build A Physique That Matches Your Ambition?
          </h2>

          <p className="text-lg text-gray-300 mb-4">
            Book your 1:1 strategy call and see exactly what your 180-day transformation could look like.
          </p>

          <p className="text-yellow-400 font-semibold mb-8">
            Limited weekly call slots available.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToCalendly}
            className="relative px-10 py-4 text-lg text-black font-bold rounded-xl overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 rounded-xl"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
            <span className="absolute inset-0 rounded-xl overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-pulse transform -skew-x-12 group-hover:translate-x-full transition-all duration-500"></span>
            </span>
            <span className="relative flex items-center gap-2 justify-center">
              <span>Book Your Call</span>
              <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
            <span className="absolute inset-0 rounded-xl shadow-lg shadow-yellow-500/0 group-hover:shadow-yellow-500/70 transition-shadow duration-300"></span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-8 px-4 border-t border-gray-800">
        <div className="max-w-5xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2026 Maho Fitness. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
