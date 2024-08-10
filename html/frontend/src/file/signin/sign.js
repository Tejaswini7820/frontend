
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Flex,
    Box,
    Heading,
    } from '@chakra-ui/react'
    
    export const SignIn = () => {
    return (
    <>
    <Flex 
    align={"center"}
    direction={"column"}
    height={"100vh"}
    justify={"center"}

    >
    <Box
    width={"lg"}
    borderWidth={2}
    borderRadius={4}
    maxWidth={"md"}
    >
    
        <Heading textAlign="center">
            SignIn
        </Heading>
        <FormControl id="email" isRequired mb={4}>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
        <FormControl id="password" isRequired mb={4}>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" />
                    <FormHelperText>Your password should be at least 8 characters long.</FormHelperText>
                </FormControl>
    </Box>
    </Flex>
    </>
    )
    }