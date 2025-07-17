import Navbar from "@/components/shared-component/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="p-6">
        <h1 className="text-2xl font-bold text-gray-900">Welcome to Fresh Harvests</h1>
        <p className="mt-4 text-gray-700">
          Discover the freshest produce and organic products delivered to your door.
        </p>
        <Button className="mt-6 bg-green-600 text-white hover:bg-green-700">
          Shop Now
        </Button>
      </main>
    </div>
  );
}
