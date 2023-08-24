import {SiGooglemarketingplatform } from 'react-icons/si'
import {PiStrategyFill} from 'react-icons/pi'
import {LuNetwork} from 'react-icons/lu'
const Homepage = () => {
  return (
    <div>
     <div className="bg-cover bg-center text-black text-center py-20 md:py-40">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">The Venture Strategist</h1>
          <p className="text-lg md:text-xl">Transforming your brand with innovative marketing solutions.</p>
          <button className="mt-6 bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md md:text-lg">Get Started</button>
        </div>
      </div>
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
            <SiGooglemarketingplatform className="h-16 mx-auto mb-4"/>
              <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
              <p className="text-gray-600">Maximize your online presence and reach your target audience.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <PiStrategyFill className="h-16 mx-auto mb-4"/>
              <h3 className="text-xl font-semibold mb-2">Content Strategy</h3>
              <p className="text-gray-600">Craft engaging and valuable content that resonates with your customers.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <LuNetwork className="h-16 mx-auto mb-4"/>
              <h3 className="text-xl font-semibold mb-2">Social Media</h3>
              <p className="text-gray-600">Build strong connections with your audience through social media platforms.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-700 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">Get in Touch</h2>
          <p className="text-white text-lg mb-8">Ready to take your brand to the next level? Contact us now!</p>
          <a href="#" className="bg-white text-blue-700 hover:bg-blue-600 hover:text-white font-semibold py-2 px-6 rounded-md md:text-lg">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
