'use client';
import NewsList from "@/components/news-list";
 import { useEffect, useState } from "react";
 
export default function NewsPage() {

  const [isLoading,setIsLoading] = useState(false);
  const [error,setError] = useState();
  const [news,setNews] = useState([]);

  useEffect(()=>{

    async function fetchNews() {
      setIsLoading(true)

     const res = await fetch('http://localhost:8080/news')

     setIsLoading(false)
     if(!res.ok){
      setError('Failed to load the data.')
     }
     setNews(await res.json())
    }
    fetchNews()

  },[])

  if(isLoading){
    return <p> Loading....</p>
  }
  if(error){
    return <p> {error}</p>
  }

  let newsContent ;

  if(news){
    newsContent =  <NewsList news={news} />
  }

  return (
    <div>
      <h1>News</h1>
     {newsContent}
    </div>
  );
}
