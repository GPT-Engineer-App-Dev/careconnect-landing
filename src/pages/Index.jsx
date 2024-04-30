import { Box, Flex, Text, Button, Heading, Image } from '@chakra-ui/react';
import { FaRegHospital, FaRobot, FaUsers } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex direction="column" align="center" p={10}>
        <Heading as="h1" size="2xl" mb={6}>Welcome to CloudNurse</Heading>
        <Text fontSize="xl" mb={4}>Enhancing communication in nursing homes with AI technology.</Text>
        <Image src="/images/healthcare-tech.jpg" alt="Healthcare Technology" boxSize="500px" mb={6} />
        <Button colorScheme="blue" size="lg" mb={6}>Request a Demo</Button>
      </Flex>
      <Flex justify="space-around" p={10} bg="gray.100">
        <Box textAlign="center" p={5}>
          <FaRegHospital size="3em" />
          <Heading as="h3" size="lg" my={2}>Healthcare Integration</Heading>
          <Text>Seamlessly integrates with existing healthcare systems for smooth operation.</Text>
        </Box>
        <Box textAlign="center" p={5}>
          <FaRobot size="3em" />
          <Heading as="h3" size="lg" my={2}>AI Assistance</Heading>
          <Text>Utilizes AI to help generate appropriate responses and manage communications.</Text>
        </Box>
        <Box textAlign="center" p={5}>
          <FaUsers size="3em" />
          <Heading as="h3" size="lg" my={2}>Family Communication</Heading>
          <Text>Improves communication with family members through integration with LINE.</Text>
        </Box>
      </Flex>
      <Flex direction="column" align="center" p={10} bg="blue.100">
        <Heading as="h2" size="xl" mb={4}>Testimonials</Heading>
        <Text fontSize="lg" mb={2}>"CloudNurse has transformed how we communicate with our residents' families."</Text>
        <Text fontSize="lg" mb={2}>"The AI features save us time and help us provide better care."</Text>
        <Text fontSize="lg">"Highly recommend CloudNurse for any nursing home looking to improve their services."</Text>
      </Flex>
    </Box>
  );
};

export default Index;