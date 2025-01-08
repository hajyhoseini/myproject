// components/Contact.js
const Contact = () => (
    <section id="contact" className="relative w-full text-white py-16 px-10">
      <h3 className="text-3xl font-extrabold text-center mb-8 text-white bg-white/20 backdrop-blur-md py-3 px-6 rounded-lg shadow-md border border-white/30">تماس با من</h3>
      <form className="max-w-md mx-auto">
        <input type="text" placeholder="نام شما" className="w-full px-4 py-2 mb-4 rounded-lg" />
        <input type="email" placeholder="ایمیل شما" className="w-full px-4 py-2 mb-4 rounded-lg" />
        <textarea placeholder="پیام شما" rows="4" className="w-full px-4 py-2 mb-4 rounded-lg"></textarea>
        <button type="submit" className="w-full px-6 py-3 bg-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-600">
          ارسال
        </button>
      </form>
    </section>
  );
  
  export default Contact;
  