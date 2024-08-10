import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Flex,
    Box,
    Heading,
    Button,
} from '@chakra-ui/react';

export const SignUp = () => {
    return (
        <Flex
            direction="column"
            align="center"
            justify="center"
            height="100vh"
            bg="gray.100"
            p={4}
        >
            <Box
                maxWidth="md"
                width="full"
                p={6}
                borderWidth={1}
                borderRadius="md"
                bg="white"
                boxShadow="md"
            >
                <Heading as="h2" size="lg" mb={6} textAlign="center">
                    Sign Up
                </Heading>

                <FormControl id="name" isRequired mb={4}>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" />
                </FormControl>

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

                <FormControl id="confirm-password" isRequired mb={6}>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input type="password" />
                    <FormHelperText>Make sure both passwords match.</FormHelperText>
                </FormControl>

                <Button
                    colorScheme="teal"
                    width="full"
                    type="submit"
                >
                    Sign Up
                </Button>
            </Box>
        </Flex>
    );
};
