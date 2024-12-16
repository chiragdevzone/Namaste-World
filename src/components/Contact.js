const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-2 text-center">Contact Us</h1>
      <form className="flex flex-col items-center">
        <input
          type="text"
          placeholder="name"
          className="border border-black p-2 m-2"
        />
        <input
          type="text"
          placeholder="message"
          className="border border-black p-2 m-2"
        />
        <button
          type="submit"
          className="border border-black p-2 m-2 bg-gray-100 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
