import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="mt-32">
      <div className="mb-16 text-center">
        <h2 className="md:text-4xl text-3xl font-extrabold">
          What our client say
        </h2>
      </div>
      <div className="grid md:grid-cols-3 md:py-16 gap-8 max-w-7xl max-md:max-w-lg mx-auto relative">
        <div className="bg-blue-100 lg:max-w-[70%] max-w-[80%] h-full w-full inset-0 mx-auto rounded-3xl absolute max-md:hidden"></div>
        <div className="h-auto lg:p-6 p-4 rounded-md mx-auto bg-white relative max-md:shadow-md">
          <div>
            <Image
              src="/images/user.jpg"
              className="w-12 h-12 rounded-full"
              width={60}
              height={60}
              alt="logo"
            />
            <h4 className="whitespace-nowrap font-semibold mt-2">Jeck Doe</h4>
            <p className="mt-1 text-xs">Founder of Name</p>
          </div>
          <div className="mt-4">
            <p>
              The service was amazing. I never had to wait that long for my
              food. The staff was friendly and attentive, and the delivery was
              impressively prompt.
            </p>
          </div>
        </div>
        <div className="h-auto lg:p-6 p-4 rounded-md mx-auto bg-white relative max-md:shadow-md">
          <div>
            <Image
              src="/images/user.jpg"
              className="w-12 h-12 rounded-full"
              width={60}
              height={60}
              alt="logo"
            />
            <h4 className="whitespace-nowrap font-semibold mt-2">
              Mark Basten
            </h4>
            <p className="mt-1 text-xs">Founder of Games</p>
          </div>
          <div className="mt-4">
            <p>
              The service was amazing. I never had to wait that long for my
              food. The staff was friendly and attentive, and the delivery was
              impressively prompt.
            </p>
          </div>
        </div>
        <div className="h-auto lg:p-6 p-4 rounded-md mx-auto bg-white relative max-md:shadow-md">
          <div>
            <Image
              src="/images/user.jpg"
              className="w-12 h-12 rounded-full"
              width={60}
              height={60}
              alt="logo"
            />
            <h4 className="whitespace-nowrap font-semibold mt-2">Sahib Kadi</h4>
            <p className="mt-1 text-xs">Founder of Monolit</p>
          </div>
          <div className="mt-4">
            <p>
              The service was amazing. I never had to wait that long for my
              food. The staff was friendly and attentive, and the delivery was
              impressively prompt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
