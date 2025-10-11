import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-scroll';

const highlights: string[] = [
  "PROFESSIONAL EXCELLENCY",
  "INDEPENDENT & BLACK OWNED",
  "CUTTING EDGE SERVICE",
  "QUALIFIED PROFESSIONALS",
];

const MainSection = () => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState(highlights[0]);

    const handleChange = () => {
        setIndex((prev) => (prev + 1) % highlights.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
        handleChange();
        }, 3000); // every 1 second

        return () => clearInterval(interval); // cleanup
    }, []);

    useEffect(() => {
        setText(highlights[index]);
    }, [index]);

  return (
    <div id="Home" className="relative h-screen overflow-hidden justify-center pt-10 before:absolute before:top-0 before:start-1/2 before:bg-[url('/squaredBgElement.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-1 before:transform before:-translate-x-1/2">
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* Announcement Banner */}
        <div className="flex justify-center">
        <span className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 focus:outline-hidden focus:border-gray-300">
            Welcome to
            <span className="flex items-center gap-x-1">
            <span className="border-s border-gray-200 text-blue-600 ps-2">Bavukile Business Administration</span>
            </span>
        </span>
        </div>
        {/* End Announcement Banner */}

        {/* Title */}
        <div className="mt-5 max-w-xl text-center mx-auto">
            <AnimatePresence mode="wait">
                <motion.h1
                key={highlights[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl"
                >
                {highlights[index]}
                </motion.h1>
            </AnimatePresence>
        </div>
        {/* End Title */}

        <div className="mt-5 max-w-3xl text-center mx-auto">
        <p className="text-lg text-gray-600">We are an Independent Fiduciary Black Owned Services Entity and we pride ourselves with offering cutting age accounting and business administration service to our clients.</p>
        </div>

        {/* Buttons */}
        <div className="mt-8 gap-3 flex justify-center">
            <Link to="Services" smooth={true} offset={-30} duration={500}>
                <button className="inline-flex justify-center w-[150px] cursor-pointer items-center gap-x-3 text-center bg-linear-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 focus:outline-hidden focus:from-violet-600 focus:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full py-3 px-4"> 
                    Get Started
                </button>
            </Link>
        </div>
        {/* End Buttons */}
    </div>
    </div>
  )
}

export default MainSection
