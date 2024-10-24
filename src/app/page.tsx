import React from "react";
import { ArrowRight, Github, Brain, Book, Lightbulb } from "lucide-react"; 
import Link from "next/link";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="bg-gray-900/50 p-6 border border-gray-700 transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-700/50">
    <Icon size={36} className="text-white mb-4" />
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-8 font-mono relative overflow-hidden">
      <div className="max-w-5xl w-full relative z-10">
        <div className="mb-16 flex flex-col md:flex-row items-center justify-between">
          <div className="text-left mb-8 md:mb-0">
            <h1 className="text-6xl font-bold mb-2 tracking-tighter font-sans">NPTEL</h1>
            <h2 className="text-2xl font-light">Psychology Of Learning Quiz</h2>
          </div>
          <div className="h-0.5 w-24 bg-white md:hidden"></div>
          <div className="hidden md:flex space-x-4">
            <Brain className="text-purple-400" size={48} /> {/* Brain icon */}
            <Book className="text-yellow-400" size={48} /> {/* Book icon */}
            <Lightbulb className="text-blue-400" size={48} /> {/* Lightbulb icon */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <FeatureCard
            icon={Brain}
            title="Comprehensive Coverage"
            description="In-depth questions covering all aspects of the NPTEL Psychology Of Learning course"
          />
          <FeatureCard
            icon={Book}
            title="Adaptive Learning"
            description="Questions tailored to your knowledge level"
          />
          <FeatureCard
            icon={Lightbulb}
            title="Precision"
            description="Identify and improve weak areas"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 mb-12">
          <Link
            href="/quiz"
            className="inline-flex items-center bg-[#cf6bdd] text-white font-bold py-3 px-8 text-lg transition-all duration-300 hover:bg-[#b17bbf] group"
          >
            Start One-Day Preparation :)
            <ArrowRight
              className="ml-2 transform group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </Link>
          <a
            href="https://github.com/sr2echa/wildlife-nptel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white hover:text-gray-300 transition-colors duration-300"
          >
            <Github className="mr-2" size={24} />
            View on GitHub
          </a>
        </div>

        <div className="text-left">
          <p className="text-gray-500 text-sm">
            Master the NPTEL Psychology Of Learning course material and ace your MOOC exam with the
            specialized quiz app. (Revamp by Varun, OC:Sreecharan)
          </p>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black"></div>
        <div className="absolute -left-64 -top-64 w-128 h-128 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -right-64 -bottom-64 w-128 h-128 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>
    </div>
  );
}
