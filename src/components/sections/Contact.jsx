import  ContactImage from "../../assets/Contact.jpeg"

const Contact = () => {
  return <section id="contact" className="w-full min-h-screen px-[5%] py-16 bg-gray-50 flex items-center">
      <div className="grid md:grid-cols-2 gap-12 w-full max-w-6xl mx-auto">
        
        {/* Left Side - Image */}
        <div className="flex justify-center items-center">
          <img
            src={ContactImage}
            alt="Contact"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Side - Contact Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Get in <span className="text-[#feb81c]">Touch</span>
          </h2>

          <p className="text-gray-600 mb-6">
            I’d love to hear from you! Whether you have a question, a project idea, 
            or just want to connect, feel free to reach out.
          </p>

          {/* Contact Details */}
          <div className="space-y-4 text-gray-700">
            <p>
              📧 <a href="mailto:yourmail@example.com" className="hover:text-[#feb81c] transition">inbox30@gmail.com</a>
            </p>
            <p>
              📍 Location: Vadakara, Kozhikode, India <br />
              <span className="ml-6 text-sm text-gray-500">(Sometimes: Mumbai, Maharashtra)</span>
            </p>

          </div>

          {/* Social Links */}
          <div className="flex space-x-6 mt-6">
            <a href="https://github.com/harishkurup" target="_blank" className="text-gray-600 hover:text-[#feb81c] text-2xl transition">
              <i className="devicon-github-original"></i>
            </a>
            <a href="https://stackoverflow.com/users/212595/harish-kurup" target="_blank" className="text-gray-600 hover:text-[#feb81c] text-2xl transition">
              <i className="devicon-stackoverflow-plain"></i>
            </a>
            <a href="https://www.instagram.com/harishkurup/?hl=en" target="_blank" className="text-gray-600 hover:text-[#feb81c] text-2xl transition">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
}

export default Contact