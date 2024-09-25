import { FC } from 'react';

const Newsletter: FC = () => {
  return (
    <section className="bg-black relative overflow-hidden">
      {/* Shapes */}
      <div className="shape shape-one absolute top-0 left-0 z-0">
        <span className="block"></span>
      </div>
      <div className="shape shape-two absolute top-0 right-0 z-0">
        <span className="block"></span>
      </div>
      <svg
        className="shape shape-three absolute bottom-0 left-0 z-0"
        viewBox="0 0 894 143"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M375.455 760.013C334.267 696.324 308.253 649.707 257.672 604.403C206.367 559.755 130.494 515.764 75.5768 443.54C20.6594 371.317 -14.0254 269.546 5.48474 174.999C24.9949 81.1077 98.7 -6.21765 195.528 0.348145C291.634 6.25739 411.585 106.058 524.31 117.22C637.758 127.725 743.258 50.2484 820.575 54.1879C897.171 58.1274 944.862 144.796 990.386 228.182C1035.91 311.568 1079.99 391.671 1058.31 461.268C1036.63 530.209 949.198 587.988 874.77 626.07C799.62 663.495 738.199 681.879 682.559 738.345C627.642 795.468 579.95 891.329 527.201 898.551C474.451 905.774 417.366 824.358 375.455 760.013Z"
          fill="currentColor"
        />
      </svg>

      {/* Container */}
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <div className="lg:w-1/2">
            <div
              className="text-wrapper pt-24 pb-24"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <div className="section-title">
                <h2 className="text-white text-3xl font-bold">Subscribe now to Our Newsletter</h2>
              </div>
              <form>
                <div className="flex flex-col md:flex-row mt-6">
                  <input
                    type="email"
                    className="form-control w-full md:w-3/4 p-3 rounded-l-md border border-gray-300"
                    placeholder="Email Address...."
                    name="email"
                    required
                  />
                  <button className="main-btn btn-blue-dark md:ml-2 p-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
                    Subscribe Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
