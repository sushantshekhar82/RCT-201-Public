import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Center,
  CircularProgress,
  Flex,
  Heading,
  useToast,
} from "@chakra-ui/react";

import AddPost from "./AddPost";
import Post from "./Post";
import { getPosts } from "./posts.api";
import useApi from "../customhook/useApi";

const Posts = () => {
  const toast = useToast();
 const {loading,success,execute,error,setData,data}=useApi(getPosts)

  
    
    const onAddPost = (post) => {
      setData([...data, post]);
    };
    const onDelete = (id) => {
      setData(data.filter((p) => p.id !== id));
    };
    
    useEffect(() => {
    if(error){
      toast({
        title: "Error Occurred while fetching data",
        description: error,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      })
    }
      
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error,toast]);

  return (
    <Box>
      <Center my={2} gap={4}>
        <Heading>Posts</Heading>
        <Button isLoading={loading} loadingText="Fetching..." onClick={execute}>
          Refresh
        </Button>
      </Center>
      <AddPost onAddPost={onAddPost} />
      {loading && <CircularProgress isIndeterminate color="green.300" />}
      <Flex direction="column" gap={2} my={2}>
        {success &&
          data.map((post) => (
            <Post key={post.id} {...post} onDelete={onDelete} />
          ))}
      </Flex>
    </Box>
  );
};

export default Posts;
