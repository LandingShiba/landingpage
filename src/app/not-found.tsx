"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

// Predefined positions to avoid Math.random() hydration issues
const particlePositions = [
  { left: "10%", top: "20%", delay: "0s" },
  { left: "80%", top: "15%", delay: "1s" },
  { left: "25%", top: "70%", delay: "2s" },
  { left: "75%", top: "60%", delay: "0.5s" },
  { left: "50%", top: "30%", delay: "1.5s" },
  { left: "90%", top: "80%", delay: "2.5s" },
];

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleGoBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      window.history.back();
    } else {
      // Fallback to home page if no history
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-cyan-400/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating particles */}
      {mounted && (
        <>
          {particlePositions.map((particle, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-float-${
                i + 1
              }`}
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
              }}
            />
          ))}
        </>
      )}

      <div className="max-w-md mx-auto text-center px-4 relative z-10">
        <div className="mb-8">
          {/* Animated 404 */}
          <div className="relative">
            {/* Static 404 with gradient */}
            <div className="relative">
              <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                404
              </h1>
            </div>
          </div>

          {/* Animated title */}
          <h2 className="text-2xl font-semibold text-foreground mb-2 animate-fade-in-up">
            <Sparkles className="inline w-6 h-6 mr-2 text-yellow-500 animate-spin-slow" />
            Page Not Found
            <Sparkles className="inline w-6 h-6 ml-2 text-yellow-500 animate-spin-slow" />
          </h2>

          <p className="text-muted-foreground mb-8 animate-fade-in-up delay-200">
            Oops! Looks like you&apos;ve wandered into the digital void.
            Don&apos;t worry, even the best explorers get lost sometimes.
          </p>
        </div>

        <div className="space-y-4 animate-fade-in-up delay-300">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Link href="/">
                <Home className="w-4 h-4 animate-bounce" />
                Go Home
              </Link>
            </Button>

            <Button
              variant="outline"
              onClick={handleGoBack}
              className="flex items-center gap-2 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transform hover:scale-105 transition-all duration-200 border-2 hover:border-purple-300"
            >
              <ArrowLeft className="w-4 h-4 group-hover:animate-bounce-left" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
