import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

const PopularArticles = ({trigger, content} : any) => {
  return (
    <div>
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    {trigger}
                </AccordionTrigger>
                <AccordionContent className='text-content-1'>
                    {content}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
  )
}

export default PopularArticles