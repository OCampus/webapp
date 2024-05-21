"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {  PopularArticlesExamples } from '../utils/constants';
import { ChevronRight, ChevronDown } from "lucide-react";

const Accordion = ({ i, expanded, setExpanded, trigger, content } : any) => {
  const isOpen = i === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <div className="border-b my-3 py-2">
      <motion.header
        initial={false}
        animate={{ textDecoration: isOpen ? 'underline': 'none' }}
        onClick={() => setExpanded(isOpen ? false : i)}
        className=""
      > 
        <div className="flex justify-between">
            <div className="font-[500] text-content-1">
                {trigger}
            </div>

            {/* <ChevronRight /> */}
            {
                isOpen != false ?  <ChevronDown  height={15}/> : <ChevronRight height={15}/>
            }

        </div>
        </motion.header>
      
      <AnimatePresence
        initial={false}
      >
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="py-2"
          >
           <p className="text-sm text-content-1 text-opacity-70">
                {content}
            </p>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export const PopularArticlesAccordion = () => {
  
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expanded, setExpanded] = useState<false | number>(0);

  return (
    PopularArticlesExamples.map((article, idx) => (
        <Accordion key={article.title} i={idx} expanded={expanded} setExpanded={setExpanded} trigger={article.title} content={article.content} />
    )
  )
  )
}