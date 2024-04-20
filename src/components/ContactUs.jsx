import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/global.css";
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
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col items-center justify-center gap-y-5"
    >
      <div className="flex px-4 gap-x-3">
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
            Email
          </label>
        </div>
      </div>
      <div className="relative">
        <textarea
          id="floating_message"
          name="message"
          className="block  px-2.5 pb-2.5 pt-5  text-sm   bg-gray-700 border-0 rounded-lg appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0  peer w-[350px] md:w-[400px]"
          placeholder=" "
          rows={1}
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
        className="bg-white/10 rounded-lg py-2 w-1/2 hover:bg-white/30  duration-300 hover:scale-110  border border-white/10 cursor-pointer"
      />
    </form>
  );
};
