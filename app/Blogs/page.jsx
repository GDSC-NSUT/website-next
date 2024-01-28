import React from 'react'
import "./TrendingBlogsSection"
import TrendingBlogsSection from './TrendingBlogsSection'
import LatestBlogsSection from './LatestBlogsSection'
import supabase from "../../utils/supabase";

export default async function Blogs() {
  const { data: posts } = await supabase.from('blogs').select();
  return (
    <div>     
      <TrendingBlogsSection data={posts.slice(0,5)}/>
      <LatestBlogsSection blogData={posts}/>
    </div>
  )
}
