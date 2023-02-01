import React from "react";
import { Box, Center, Divider, Flex, Heading } from "@chakra-ui/react";
import Stopwatch1 from "./components/Stopwatch1";
import Stopwatch2 from "./components/Stopwatch2";
import Stopwatch3 from "./components/Stopwatch3";
import Posts from "./components/Posts/Posts";
import useToggle from "./components/customhook/useToggle";

function App() {
  const[value,setToggle]=useToggle(false)
  const[value1,setToggle1]=useToggle(true)
  
  return (
    <>
     
     <Box>
      <Center>
        <Heading>StopWatchs</Heading>
      </Center>
      <Center>
        <Flex rowGap={6}>
          <Stopwatch1 />
           <Stopwatch2 />
          <Stopwatch3 />
        </Flex>
     </Center>
       <Divider my={4} />
       <Center>
         <Posts />
      </Center>
     </Box> 
     <h1>{value?"True":"False"}</h1>
     <button onClick={()=>setToggle()}>Click me</button>
     <h1>{value1?"True":"False"}</h1>
     <button onClick={()=>setToggle1()}>Click me</button>
    
    </>
  );
}

export default App;
