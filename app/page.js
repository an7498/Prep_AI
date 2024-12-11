import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-10 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Welcome to PrepAI!</h1>
          <p className="mt-4 text-lg">
            Your ultimate platform for AI-driven mock interviews with video and audio capabilities.
          </p>
          <Link href={'/dashboard'}><Button>Get Started</Button></Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Why Choose PrepAI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center p-6 bg-white shadow rounded-lg">
              <Image
                src="/videocall.jpg"
                alt="Video Interview"
                width={200}
                height={200}
                className="mx-auto object-contain"
              />
              <h3 className="text-xl font-semibold mt-4">Video Interviews</h3>
              <p className="mt-2 text-gray-600">
                Simulate real-world interviews with AI-powered video sessions.
              </p>
            </div>

            <div className="text-center p-6 bg-white shadow rounded-lg">
              <Image
                src="/audiocall.jpg"
                alt="Audio Interview"
                width={200}
                height={200}
                className="mx-auto object-contain"
              />
              <h3 className="text-xl font-semibold mt-4">Audio Interviews</h3>
              <p className="mt-2 text-gray-600">
                Practice answering questions with audio-only sessions for focused preparation.
              </p>
            </div>

            <div className="text-center p-6 bg-white shadow rounded-lg">
              <Image
                src="/feedback.jpg"
                alt="Instant Feedback"
                width={200}
                height={200}
                className="mx-auto object-contain"
              />
              <h3 className="text-xl font-semibold mt-4">Instant Feedback</h3>
              <p className="mt-2 text-gray-600">
                Receive detailed AI-driven feedback to improve your performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Take the First Step Towards Your Dream Job</h2>
          <p className="mt-4 text-gray-600 text-lg">
            PrepAI is your trusted partner in cracking your next interview with confidence. Join us today!
          </p>
          <Link href={'/dashboard'}><Button>Get Started</Button></Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 PrepAI. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
