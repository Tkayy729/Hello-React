import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-28">
      <div>
        <h1 className="font-bold text-2xl">Contact Us Page</h1>
      </div>

      <div>
        <form>
          <input placeholder="name" className="border m-2 w-500 outline-none rounded-md" />
          <input placeholder="message" className="border m-2 w-500 outline-none rounded-md" />
          <button className="bg-gray-700 m-2 px-2 rounded-lg">submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
