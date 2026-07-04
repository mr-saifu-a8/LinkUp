import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageBackground from "../layouts/PageBackground";
import Button from "../components/Button";
import ProgressDots from "../components/ProgressDots";
import {
  SocialIllustration,
  ConnectIllustration,
  FeaturesIllustration,
} from "../components/Illustrations";

const SLIDES = [
  {
    Illustration: SocialIllustration,
    title: "The Best Social Media App of the Century",
    desc: "Share moments, follow your favorite creators, and stay close to the people who matter most to you.",
  },
  {
    Illustration: ConnectIllustration,
    title: "Let's Connect with Everyone in the World",
    desc: "Discover communities built around your interests and start meaningful conversations today.",
  },
  {
    Illustration: FeaturesIllustration,
    title: "Everything You Can Do in the App",
    desc: "Messaging, groups, live updates and more — everything you need, in a single beautifully simple app.",
  },
];

export default function OnboardingPage() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const slide = SLIDES[index];
  const isLast = index === SLIDES.length - 1;

  const next = () => {
    if (isLast) navigate("/welcome");
    else setIndex((i) => i + 1);
  };

  return (
    <PageBackground>
      <div className="flex-1 min-h-screen lg:min-h-0 flex flex-col bg-white px-6 sm:px-10 lg:px-16 pt-10 lg:pt-16 pb-8 lg:pb-16 screen-transition">
        <div className="flex-1 flex items-center justify-center lg:max-w-md lg:mx-auto lg:w-full">
          <div key={index} className="animate-scaleIn lg:scale-125">
            <slide.Illustration />
          </div>
        </div>

        <div
          key={`text-${index}`}
          className="text-center animate-fadeIn space-y-3 mb-6 lg:max-w-lg lg:mx-auto"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-ink leading-snug px-2">
            {slide.title}
          </h2>
          <p className="text-sm lg:text-base text-ink-light leading-relaxed max-w-sm lg:max-w-md mx-auto">
            {slide.desc}
          </p>
        </div>

        <div className="mb-6">
          <ProgressDots total={SLIDES.length} active={index} />
        </div>

        <div className="space-y-3 lg:max-w-xs lg:mx-auto lg:w-full">
          <Button onClick={next}>{isLast ? "Get Started" : "Next"}</Button>
          {!isLast && (
            <Button variant="secondary" onClick={() => navigate("/welcome")}>
              Skip
            </Button>
          )}
        </div>
      </div>
    </PageBackground>
  );
}
