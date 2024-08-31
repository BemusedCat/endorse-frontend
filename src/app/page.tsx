import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Endorse - Testimonials Made Easy</title>
        <meta
          name="description"
          content="Collect and display testimonials effortlessly"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Section */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">Endorse</h1>
            <nav>
              <a
                href="#features"
                className="text-gray-900 hover:text-blue-600 px-3"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-gray-900 hover:text-blue-600 px-3"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="text-gray-900 hover:text-blue-600 px-3"
              >
                Pricing
              </a>
              <a
                href="#cta"
                className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded ml-4"
              >
                Get Started
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold">
            Collect and Display Testimonials Effortlessly
          </h2>
          <p className="mt-4 text-lg">
            Endorse helps you build trust by showcasing real customer
            testimonials.
          </p>
          <button className="mt-8 px-6 py-3 bg-white text-blue-600 rounded hover:bg-gray-200">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Features</h2>
          <p className="mt-4 text-lg text-gray-700">
            Everything you need to make your testimonials stand out.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-900">Feature One</h3>
              <p className="mt-2 text-gray-600">
                Placeholder for your first key feature.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-900">Feature Two</h3>
              <p className="mt-2 text-gray-600">
                Placeholder for your second key feature.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-900">Feature Three</h3>
              <p className="mt-2 text-gray-600">
                Placeholder for your third key feature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            What Our Users Say
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Real testimonials from our satisfied customers.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="text-gray-600">
                "Endorse made collecting testimonials so easy! Highly
                recommended!"
              </p>
              <p className="mt-4 font-bold text-gray-900">- John Doe</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="text-gray-600">
                "A game-changer for our business!"
              </p>
              <p className="mt-4 font-bold text-gray-900">- Jane Smith</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="text-gray-600">
                "We saw a significant increase in trust after using Endorse."
              </p>
              <p className="mt-4 font-bold text-gray-900">- Alex Johnson</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Affordable Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Choose a plan that fits your needs.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pricing Plan 1 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-900">Basic Plan</h3>
              <p className="mt-2 text-gray-600">$10/month</p>
              <p className="mt-4 text-gray-600">
                For small businesses just starting out.
              </p>
              <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Choose Plan
              </button>
            </div>

            {/* Pricing Plan 2 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-900">Pro Plan</h3>
              <p className="mt-2 text-gray-600">$30/month</p>
              <p className="mt-4 text-gray-600">
                For growing businesses looking for more features.
              </p>
              <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Choose Plan
              </button>
            </div>

            {/* Pricing Plan 3 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-900">
                Enterprise Plan
              </h3>
              <p className="mt-2 text-gray-600">Custom Pricing</p>
              <p className="mt-4 text-gray-600">
                For large businesses with specific needs.
              </p>
              <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="cta" className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Get Started with Endorse Today</h2>
          <p className="mt-4 text-lg">
            Start building trust with testimonials now.
          </p>
          <button className="mt-8 px-6 py-3 bg-white text-blue-600 rounded hover:bg-gray-200">
            Sign Up Now
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="flex items-center justify-center w-full h-24 border-t bg-white">
        <p className="text-gray-500">
          &copy; 2024 Endorse. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
