import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Check, ChevronDown, Calendar, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";

/**
 * ASL (After Sales Letter) - Post-Booking Page
 * 
 * Design System: Cinematic Luxury Minimalism
 * - Pure black backgrounds with deep charcoal cards
 * - Warm gold (#d4af37) accents for CTAs and highlights
 * - Bold Montserrat typography with generous spacing
 * - Liquid glass buttons with subtle glow effects
 * - Smooth scroll animations and hover interactions
 * 
 * Purpose: Confirm the call, increase show-up rate, build trust, and pre-sell the coaching program.
 */

interface ObjectionVideo {
  id: number;
  title: string;
  description: string;
  videoId: string;
}

const objectionVideos: ObjectionVideo[] = [
  {
    id: 1,
    title: "Will this work for me?",
    description: "Learn how our system adapts to your unique situation and goals.",
    videoId: "dBzUhEX1weI",
  },
  {
    id: 2,
    title: "I don't have enough time",
    description: "Discover how busy professionals fit this into their schedule.",
    videoId: "dBzUhEX1weI",
  },
  {
    id: 3,
    title: "I've tried programs before",
    description: "See what makes our approach different from other coaching programs.",
    videoId: "dBzUhEX1weI",
  },
  {
    id: 4,
    title: "I can't afford it",
    description: "Understand the investment and ROI of premium coaching.",
    videoId: "dBzUhEX1weI",
  },
  {
    id: 5,
    title: "Why now?",
    description: "Why taking action today matters for your transformation.",
    videoId: "dBzUhEX1weI",
  },
  {
    id: 6,
    title: "What if I'm too busy?",
    description: "How our system works specifically for demanding schedules.",
    videoId: "dBzUhEX1weI",
  },
  {
    id: 7,
    title: "How does the coaching actually work?",
    description: "A detailed walkthrough of our coaching process and support.",
    videoId: "dBzUhEX1weI",
  },
  {
    id: 8,
    title: "What kind of ROI should I expect?",
    description: "Real results and timelines from our clients.",
    videoId: "dBzUhEX1weI",
  },
];

export default function ASL() {
  const [, setLocation] = useLocation();
  const [expandedVideo, setExpandedVideo] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<ObjectionVideo | null>(null);

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

      {/* SECTION 1: CONFIRMATION HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4">
        {/* Background gradient glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-green-600/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* Logo placeholder */}
          <div className="flex justify-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">AH</span>
            </div>
          </div>

          {/* Success indicator */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center">
              <Check className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your Call Is Now Confirmed
          </h1>

          {/* Confirmation message */}
          <p className="text-xl text-gray-300 mb-8">
            You're officially booked for your 1:1 strategy call.
          </p>

          {/* Next steps */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 mb-12 border border-amber-600/20">
            <h3 className="text-2xl font-bold mb-4">Before The Call</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Watch the short video below so you know exactly what to expect and how to get the most value from your session. This will help us make the most of our time together.
            </p>
          </div>

          {/* CTA */}
          <button
            onClick={() => {
              document.getElementById("prep-video-section")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-liquid-gold text-lg px-10 py-5 inline-flex items-center gap-2"
          >
            Watch The Prep Video
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-green-600/30 to-transparent"></div>

      {/* SECTION 2: PREP / PROGRAM VIDEO */}
      <section id="prep-video-section" data-animate className="py-32 px-4 bg-gradient-to-b from-background to-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            How To Prepare For Your Call
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Watch this video to understand our process and get maximum value from your session.
          </p>

          {/* Video frame */}
          <div className="glass-card p-1 mb-8">
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dBzUhEX1weI"
                title="Coaching Program Explanation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Preparation tips */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <span className="text-amber-400">✓</span> Be In A Quiet Place
              </h3>
              <p className="text-gray-400 text-sm">
                Take this call where you can turn on your camera and have a focused conversation.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <span className="text-amber-400">✓</span> Watch This Video
              </h3>
              <p className="text-gray-400 text-sm">
                Understand our process and funnel so we save time on the call.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <span className="text-amber-400">✓</span> Have Your Goals Ready
              </h3>
              <p className="text-gray-400 text-sm">
                Think about your biggest challenges and what you want to achieve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-green-600/30 to-transparent"></div>

      {/* SECTION 3: OBJECTION HANDLING VIDEOS */}
      <section data-animate className="py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Common Questions Answered
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Watch these videos to address any concerns before your call.
          </p>

          {/* Video grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectionVideos.map((video) => (
              <div
                key={video.id}
                className="glass-card p-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedVideo(video)}
              >
                {/* Thumbnail placeholder */}
                <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-transparent rounded-lg"></div>
                  <div className="relative z-10 w-16 h-16 bg-amber-600/30 rounded-full flex items-center justify-center group-hover:bg-amber-600/50 transition-colors">
                    <span className="text-amber-400 text-2xl">▶</span>
                  </div>
                </div>

                {/* Video info */}
                <h3 className="font-bold text-lg mb-2">{video.title}</h3>
                <p className="text-gray-400 text-sm">{video.description}</p>
              </div>
            ))}
          </div>

          {/* Video modal */}
          {selectedVideo && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
              <div className="bg-gray-900 rounded-lg max-w-4xl w-full">
                <div className="flex justify-between items-center p-6 border-b border-gray-800">
                  <h3 className="text-xl font-bold">{selectedVideo.title}</h3>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    ✕
                  </button>
                </div>
                <div className="aspect-video bg-gray-800 overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-green-600/30 to-transparent"></div>

      {/* SECTION 4: MORE TESTIMONIALS / CLIENT WINS */}
      <section data-animate className="py-32 px-4 bg-gradient-to-b from-background to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            What Our Clients Achieve
          </h2>

          {/* Featured testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Testimonial 1 */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic text-lg">
                "I went from feeling stuck to having a clear roadmap. The accountability and personalized approach is exactly what I needed."
              </p>
              <div>
                <p className="font-bold">Client Success Story</p>
                <p className="text-gray-500 text-sm">Placeholder - Replace with real client name and result</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic text-lg">
                "Results without extreme routines. I'm building muscle, losing fat, and actually enjoying the process. This is sustainable."
              </p>
              <div>
                <p className="font-bold">Client Success Story</p>
                <p className="text-gray-500 text-sm">Placeholder - Replace with real client name and result</p>
              </div>
            </div>
          </div>

          {/* Case study video */}
          <div className="glass-card p-1 mb-8">
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/tsLz3ohswow?start=1"
                title="Featured Client Case Study"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Stats */}
          <div className="text-center">
            <p className="text-gray-400 text-lg">
              <span className="text-amber-400 font-bold">100+ men helped</span> • Built for busy professionals • Results without extreme routines
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-green-600/30 to-transparent"></div>

      {/* SECTION 5: FINAL REMINDER */}
      <section data-animate className="py-32 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Show Up On Time And Ready To Execute
            </h2>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              This call is designed to give you clarity on your goals, your current bottlenecks, and the exact steps required to transform your physique in the next 180 days.
            </p>

            {/* Call details */}
            <div className="bg-gray-800/50 rounded-lg p-6 mb-8 border border-amber-600/20">
              <p className="text-gray-400 text-sm mb-2">Your booking confirmation has been sent to your email.</p>
              <p className="text-gray-400 text-sm">Check your calendar for the exact time and Zoom link.</p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  window.open("https://calendly.com/aleksandrharrison0/aleksandr-harrison-1-1-call", "_blank");
                }}
                className="btn-liquid-gold px-8 py-4 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Add To Calendar
              </button>
              <button
                onClick={() => {
                  window.open("https://calendly.com/aleksandrharrison0/aleksandr-harrison-1-1-call", "_blank");
                }}
                className="px-8 py-4 rounded-lg border border-amber-600/50 text-amber-400 font-semibold hover:bg-amber-600/10 transition-colors"
              >
                View Call Details
              </button>
            </div>
          </div>

          {/* Additional info */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm mb-4">
              Questions before your call? Reply to your confirmation email and we'll get back to you within 24 hours.
            </p>
            <p className="text-gray-600 text-xs">
              We're excited to help you transform your physique in the next 180 days.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation back to main site */}
      <section className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <button
            onClick={() => setLocation("/")}
            className="text-amber-400 hover:text-amber-300 font-semibold flex items-center justify-center gap-2 mx-auto"
          >
            ← Back To Home
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-8 px-4 border-t border-gray-800">
        <div className="max-w-5xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2026 Aleksandr Harrison Coaching. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
