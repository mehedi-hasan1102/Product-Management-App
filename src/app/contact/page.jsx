const ContactPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-6">
          Have a question or want to work with us? Feel free to reach out!
        </p>
        <p className="text-md text-gray-500">
          You can reach us at <a href="mailto:info@example.com" className="text-blue-500 hover:underline">info@example.com</a>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
