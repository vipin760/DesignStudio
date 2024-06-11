import React from "react";

const WhyChoose = () => {
  return (
    <div className="flex items-center justify-center">
    <div className="p-2 md:w-2/3">
        <h1 className="text-2xl text-center m-2">OUR ASSISTANCE</h1>
        {/* lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 */}
        <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-black text-center gap-16 justify-items-center p-1">
      <div className="w-64 h-96 border border-yellow-300 rounded-lg p-3 flex flex-col items-center justify-center">
        <lord-icon
          src="https://cdn.lordicon.com/kthelypq.json"
          trigger="loop"
           delay="1000"
          colors="primary:#ffffff"
          style={{width:'35px',height:'35px'}}
        ></lord-icon>
        <h1 className="text-2xl mt-3">User Experience</h1>
        <p className="text-justify m-3">
        User experience is everything. It always has been, but it’s undervalued and underinvested in. If you don’t know user-centered design, study it. Hire people who know it. Obsess over it. Live and breathe it. Get your whole team involved.
        </p>
      </div>

      <div className="w-64 h-96 border border-yellow-300 rounded-lg p-3 flex flex-col items-center justify-center">
        <lord-icon
          src="https://cdn.lordicon.com/wkvacbiw.json"
          trigger="loop"
           delay="1000"
          colors="primary:#ffffff"
          style={{width:'35px',height:'35px'}}
        ></lord-icon>
        <h1 className="text-2xl mt-3">Quick Support</h1>
        <p className="text-justify m-3">In the fast-paced world of IT, quick support is not just a service; it’s a lifeline that keeps businesses running smoothly. Effective IT support isn't about fixing problems; it's about preventing them with speed and precision. 
        </p>
      </div>

      <div className="w-64 h-96 border border-yellow-300 rounded-lg p-3 flex flex-col items-center justify-center">
        <lord-icon
          src="https://cdn.lordicon.com/mqdkoaef.json"
          trigger="loop"
           delay="1000"
          colors="primary:#ffffff"
          style={{width:'35px',height:'35px'}}
        ></lord-icon>
        <h1 className="text-2xl mt-3">Digital marketing</h1>
        <p className="text-justify m-3">
        Digital marketing is not an art of selling a product. It is an art of making people buy the product that you sell. Digital marketing is the bridge that connects technology with the consumer, transforming innovation into solutions.
        </p>
      </div>

      <div className="w-64 h-96 border border-yellow-300 rounded-lg p-3 flex flex-col items-center justify-center">
        <lord-icon
          src="https://cdn.lordicon.com/uwinmnkh.json"
          trigger="loop"
           delay="1000"
          colors="primary:#ffffff"
          style={{width:'35px',height:'35px'}}
        ></lord-icon>
        <h1 className="text-2xl mt-3">Industrial standards</h1>
        <p className="text-justify m-3">
        Industrial standards in IT companies are the bedrock of quality, ensuring consistency, reliability, and interoperability across systems and platforms. Embracing industrial standards in IT is not just about compliance.
        </p>
      </div>

      <div className="w-64 h-96 border border-yellow-300 rounded-lg p-3 flex flex-col items-center justify-center">
        <lord-icon
          src="https://cdn.lordicon.com/qnpnzlkk.json"
          trigger="loop"
           delay="1000"
          colors="primary:#ffffff"
          style={{width:'35px',height:'35px'}}
        ></lord-icon>
        <h1 className="text-2xl mt-3">Unique Designs</h1>
        <p className="text-justify m-3">
        In the world of IT, unique designs are the signature of innovation, transforming complex code into elegant solutions. In the digital age, unique designs are the heart of user engagement and satisfaction
        </p>
      </div>

      <div className="w-64 h-96 border border-yellow-300 rounded-lg p-3 flex flex-col items-center justify-center">
        <lord-icon
          src="https://cdn.lordicon.com/ifsxxxte.json"
          trigger="loop"
           delay="1000"
          colors="primary:#ffffff"
          style={{width:'35px',height:'35px'}}
        ></lord-icon>
        <h1 className="text-2xl mt-3">Customized Services</h1>
        <p className="text-justify m-3">
        In the world of IT, customized service isn’t just a luxury; it’s a necessity. Every client has unique needs, and personalized solutions ensure their technology supports their business goals seamlessly.
        </p>
      </div>


    </div>
    </div>

    </div>
  );
};

export default WhyChoose;
