import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const ref = useRef();
  const formref = useRef();
  const formnameref = useRef();
  const formemailref = useRef();
  const formmsgref = useRef();
  const formtoemailref=useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const sendEmail = (e) => {
    e.preventDefault();
console.log(formref.current,"formref.current");
    emailjs
      .sendForm("service_6cygz1i", "template_5x8dk6a", formref.current, {
        publicKey: "Y-ApHvZfuWfHPg4k8",
      })
      .then(
        () => {
          setSuccess(true);
          toast.success("Mail sent", { position: "bottom-center" });
          formnameref.current.value = "";
          formemailref.current.value = "";
          formmsgref.current.value = "";
        },
        (error) => {
          setError(true);
          toast.error("Try again later", { position: "bottom-center" });
        }
      );
  };

  return (
    <div className="flex m-auto p-4 flex-col md:flex-row gap-24 justify-center items-center h-full">
      <div className="flex flex-col gap-6 items-center md:items-start ">
        <h1 className="text-3xl md:text-4xl font-bold font-rubik">
          Let's work together
        </h1>
        <div className="w-1/2 items-center md:items-start flex-col md:flex:row flex">
          <h2 className="font-semibold font-montserrat">Mail</h2>
          <span className="text-sm font-palanquin">
            deerajalagarsamyol7xl9@gmail.com
          </span>
        </div>
        <div className="w-1/2 items-center md:items-start flex-col md:flex:row flex">
          <h2 className="font-semibold font-montserrat">LinkedIn</h2>
          <span className="text-sm font-palanquin">
            <a
              href="https://www.linkedin.com/in/deeraj-alagarsamy-153167257/"
              target="_blank"
            >
              www.linkedin.com/in/deeraj-alagarsamy-153167257
            </a>
          </span>
        </div>
        <div className="w-1/2 items-center md:items-start flex-col md:flex:row flex">
          <h2 className="font-semibold font-montserrat">Phone Number</h2>
          <span className="text-sm font-palanquin ">+91 7708247717 </span>
        </div>
      </div>
      <div className="w-[35%] relative">
        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0, zIndex: -1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute m-auto w-5/6 pl-7 items-center hover:-z-10"
          ref={ref}
        >
          <svg viewBox="0 0 32.666 32.666" className=" pl-4">
            <motion.path
              strokeWidth={0.4}
              stroke="#FFC700"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
            M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
            C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
            c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
            c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
            c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
            c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
            c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
            c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
            c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
            c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
            l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
            C32.666,7.326,25.339,0,16.333,0z"
            />
          </svg>
        </motion.div>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="flex flex-col gap-6 items-center "
          ref={formref}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            required
            placeholder="Name"
            name="name"
            className="bg-transparent border-2 border-[#3b83f678] px-2 py-1 rounded-md w-full"
            ref={formnameref}
          />
          <input
            type="text"
            required
            placeholder="Email"
            name="email"
            className="bg-transparent border-2 border-[#3b83f678] px-2 py-1 rounded-md w-full"
            ref={formemailref}
          />
           
          <textarea
            placeholder="Message"
            name="message"
            className="bg-transparent border-2 border-[#3b83f678] px-2 py-1 rounded-md w-full"
            ref={formmsgref}
          />
          <button className="py-1 w-2/6 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-full font-semibold hover:w-full hover:rounded-md duration-300">
            Submit
          </button>

          <ToastContainer />
        </motion.form>
      </div>
    </div>
  );
}

export default Contact;
//#FFC700 width="450px" height="450px"
