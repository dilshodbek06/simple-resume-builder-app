import { Button } from "../ui/button";

const Pricing = () => {
  return (
    <div className="mt-32 max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="md:text-4xl text-3xl font-extrabold">
          Choose a Subscription
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16 max-md:max-w-lg max-md:mx-auto">
        <div className="bg-white rounded sm:p-6 p-4">
          <h3 className="text-xl font-semibold">Free</h3>
          <p className="mt-2">
            Ideal for individuals who need quick access to basic features.
          </p>
          <div className="mt-6">
            <h2 className="text-4xl font-semibold">
              $0
              <span className="text-gray-500 ml-2 text-[15px]">/ Month</span>
            </h2>
            <Button className="w-full mt-6 px-6 py-6 rounded-xl text-white bg-cyan-900 transition-all hover:bg-cyan-800">
              Get Started
            </Button>
          </div>
          <div className="mt-6">
            <h4 className="text-base font-bold mb-4">Plan Includes</h4>
            <ul className="space-y-5">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="mr-4 fill-green-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                50 Image generations
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="mr-4 fill-green-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                500 Credits
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="mr-4 fill-green-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                Monthly 100 Credits Free
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="mr-4 fill-green-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                Customer Support
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="mr-4 fill-green-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                Dedicated Server
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="mr-4 fill-green-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                Priority Generations
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="mr-4 fill-green-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                50GB Cloud Storage
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-blue-600 rounded sm:p-6 p-4 text-white shadow-lg shadow-blue-300">
          <h3 className="text-xl font-semibold">Professional</h3>
          <p className="mt-2">
            Ideal for individuals who who need advanced features and tools for
            client work.
          </p>
          <div className="mt-6">
            <h2 className="text-4xl font-semibold">
              $25
              <span className="text-gray-200 ml-2 text-[15px]">/ Month</span>
            </h2>
            <Button className="w-full mt-6 px-6 py-6 rounded-xl text-black bg-white transition-all hover:bg-gray-100">
              Get Started
            </Button>
          </div>
          <div className="mt-6">
            <h4 className="text-base font-bold mb-4">Plan Includes</h4>
            <ul className="space-y-5">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="mr-4 fill-white"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                500 Image generations
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="mr-4 fill-white"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                300 Credits
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="mr-4 fill-white"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                Monthly 1000 Credits Free
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="mr-4 fill-white"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                Customer Support
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="mr-4 fill-white"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                Dedicated Server
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="mr-4 fill-white"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                Priority Generations
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="mr-4 fill-white"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                500GB Cloud Storage
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded sm:p-6 p-4">
          <h3 className="text-xl font-semibold">Enterprise</h3>
          <p className="mt-2">
            Ideal for businesses who need personalized services and security for
            large teams.
          </p>
          <div className="mt-6">
            <h2 className="text-4xl font-semibold">
              $50
              <span className="text-gray-500 ml-2 text-[15px]">/ Month</span>
            </h2>
            <Button className="w-full mt-6 px-6 py-6 rounded-xl text-white bg-cyan-900 transition-all hover:bg-cyan-800">
              Get Started
            </Button>
          </div>
          <div className="mt-6">
            <h4 className="text-base font-bold mb-4">Plan Includes</h4>
            <ul className="space-y-5">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="mr-4 fill-green-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                5000 Image generations
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="mr-4 fill-green-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                10000 Credits
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="mr-4 fill-green-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                Monthly 2000 Credits Free
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="mr-4 fill-green-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                Customer Support
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="mr-4 fill-green-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                Dedicated Server
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="mr-4 fill-green-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                Priority Generations
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="mr-4 fill-green-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                1000GB Cloud Storage
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
