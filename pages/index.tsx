import Head from "next/head";
import { useState } from "react";

import type { NextPage } from "next";

 function useNabeatsu(): [number, () => void, string] {
  const [count, setCount] = useState(0);
  
  const countUp = () => setCount((prevCount) => prevCount + 1);

  const initialState = count === 0;
  const countMultipleOfThree = count % 3 === 0;
  const countHasThree = Boolean(count.toString().match(/3/));
  const isAho = !initialState && (countMultipleOfThree || countHasThree);

  const nabeatsu = isAho ? "アホ" : "アホじゃない";

    return [count, countUp, nabeatsu];
   }

const Home: NextPage = () => {
  const [count, countUp, nabeatsu] = useNabeatsu();

    return (
      <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-0 min-h-screen">
    		<p>{nabeatsu}</p>
        <h1>{count}</h1>
        <button onClick={countUp}>Count Up!</button>
      </main>
    </div>
  );
};

export default Home;
