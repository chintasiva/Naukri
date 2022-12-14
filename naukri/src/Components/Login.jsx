

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  AlertIcon,
  AlertDescription,
  AlertTitle,
  Button,
  Heading,
  Alert,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from "react-router-dom"
import Footer from './Footer';
import Navbar from './Navbar';



export default function Login() {
  const [al, setAl] = useState(false)




  return (
    <>
     <div>
      <Navbar/>
     </div>
      
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>

          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Link to={"/"}> 
                <Button   bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} onClick={()=>alert("Login Successful !")}>
                  Log In
                  </Button></Link>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <div>
        <Footer/>
      </div>
    </>
  );
}