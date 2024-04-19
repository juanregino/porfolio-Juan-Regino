import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_m1fl0fu", "template_b47rhek", form.current, {
        publicKey: "zpmk_xAuHxs1sVy_s",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-y-5">
      {/* <label>Name</label>
      <input type="text" name="user_name" className="rounded-full" />
      <label>Email</label>
      <input type="email" name="user_email" className="text-black" />
      <label>Message</label>
      <textarea name="message" className="text-black" />
      <input type="submit" value="Send" /> */}
      <div className="flex flex-col gap-y-3">
        <div className="relative">
          <input
            type="text"
            id="floating_filled"
            name="user_name"
            className="block  px-2.5 pb-2.5 pt-5 w-full text-sm   bg-gray-700 border-0 rounded-lg appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0  peer"
            placeholder=" "
          />
          <label
            for="floating_filled"
            className="absolute text-sm text-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5  peer-focus:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Nombre
          </label>
        </div>
        <div className="relative">
          <input
            type="email"
            id="floating_email"
            name="user_email"
            className="block  px-2.5 pb-2.5 pt-5 w-full text-sm   bg-gray-700 border-0 rounded-lg appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0  peer"
            placeholder=" "
          />
          <label
            for="floating_email"
            className="absolute text-sm text-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5  peer-focus:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            email
          </label>
        </div>
      </div>
      <div className="relative">
        <textarea
          id="floating_message"
          name="message"
          className="block  px-2.5 pb-2.5 pt-5 w-full text-sm   bg-gray-700 border-0 rounded-lg appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0  peer"
          placeholder=" "
        />
        <label
          for="floating_message"
          className="absolute text-sm text-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5  peer-focus:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Message
        </label>
      </div>
      <input
        type="submit"
        value="Enviar"
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      />
    </form>
  );
};
