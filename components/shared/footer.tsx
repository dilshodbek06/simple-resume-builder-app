const Footer = () => {
  return (
    <footer className="bg-white px-4 sm:px-10 py-12 mt-32">
      <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-5 lg:gap-14 max-lg:gap-8">
        <div className="lg:col-span-2">
          <h4 className="text-xl font-semibold mb-6">About Us</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            gravida, mi eu pulvinar cursus, sem elit interdum mauris.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-6">Services</h4>
          <ul className="space-y-5">
            <li>
              <a className="hover:text-blue-600">Web Development</a>
            </li>
            <li>
              <a className="hover:text-blue-600">Mobile App Development</a>
            </li>
            <li>
              <a className="hover:text-blue-600">UI/UX Design</a>
            </li>
            <li>
              <a className="hover:text-blue-600">Digital Marketing</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-6">Resources</h4>
          <ul className="space-y-5">
            <li>
              <a className="hover:text-blue-600">Webinars</a>
            </li>
            <li>
              <a className="hover:text-blue-600">Ebooks</a>
            </li>
            <li>
              <a className="hover:text-blue-600">Templates</a>
            </li>
            <li>
              <a className="hover:text-blue-600">Tutorials</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-6">About Us</h4>
          <ul className="space-y-5">
            <li>
              <a className="hover:text-blue-600">Our Story</a>
            </li>
            <li>
              <a className="hover:text-blue-600">Mission and Values</a>
            </li>
            <li>
              <a className="hover:text-blue-600">Team</a>
            </li>
            <li>
              <a className="hover:text-blue-600">Testimonials</a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-2" />
    </footer>
  );
};

export default Footer;
