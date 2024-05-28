"use client";
import { useState,useEffect } from "react";
import { Search } from "lucide-react";
import { CardContainer,CardBody,CardItem } from "@/components/ui/3d-card";
const FeedSearch = () => {
  const [search,setSearch] = useState('hj')
  return (
    <CardContainer className=" w-full">
        <CardBody className="feed-search-wrap">
            <CardItem className="bg-primary-1 max-sm:p-1.5 p-2 w-fit rounded-full">
                <Search className="text-white"/>
            </CardItem>
            <CardItem className="flex-grow bgblack">
                <input 
                    type="search"
                    onChange={(e) => setSearch('jf')}
                    placeholder="Search for school"
                    className="text-sm px-3 w-full bg-white outline-none flex-grow rounded-3xl h-full" />
            </CardItem>
            <CardItem>
              {search}
            </CardItem>
        </CardBody>
    </CardContainer>
  )
}

export default FeedSearch