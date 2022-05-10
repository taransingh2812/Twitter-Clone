import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import { GetServerSideProps } from 'next';
import { fetchTweets } from '../utils/fetchTweets'
import { Tweet } from '../typings'
import {Toaster} from "react-hot-toast";

interface Props{ 
  tweets: Tweet[]
}

const Home = ({tweets}:Props) => {
  
  return (
    <div className="mx-auto lg: max-w-6xl overflow-hidden">
      <Head>
        <title>Twitter 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Toaster/>

    <main className="grid grid-cols-9">
      {/* SideBar */}
      <Sidebar/>

      {/* Feed */}
      <Feed tweets={tweets}/>


      {/* Widgets */}
      <Widgets/>
      </main>
    </div>
  )
}

export default Home


export const getServerSideProps:GetServerSideProps = async(context)=>{
  const tweets = await fetchTweets();

  return {
    props:{
      tweets,
    }
  }
}