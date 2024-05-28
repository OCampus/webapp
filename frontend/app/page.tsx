'use client';
import { Signin, SignUp, FeedSearch, Feed } from "@/components/index";
import { useState } from "react";
import { RecoilRoot } from "recoil";

export default function Home() {
  const feedType = [
    {
      _id : 0,
      type :  'hostels'
    },
    {
      _id : 1,
      type : 'roommates'
    }
  ]
  const [feedActive, setFeedActive] = useState(0);
  return (
    <main className="section py-4">

    <RecoilRoot>
    <Signin />
    </RecoilRoot>

      {/* hostels/roomate section */}
      <div className="feed-type-wrap">
        {feedType.map((type) => (
            <button 
              key={type?._id}
              className={`${type?._id == feedActive ? 'active' : '' } feed-type`}
              onClick={() => setFeedActive(type?._id)}
            >
              {type.type}
            </button>
        ) )}
      </div>

      {/* searchBar */}
      <FeedSearch/>

      {/* Feed */}
      <Feed />
      {/* <Signin /> */}
      <SignUp/>
    </main>
  );
}