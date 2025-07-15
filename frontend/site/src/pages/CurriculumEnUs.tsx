import {
    Box,
    Container,
    Flex,
    Heading,
    Icon,
    Image,
    List,
    Text,
} from '@chakra-ui/react';
import {
    FaBusinessTime,
    FaEnvelope,
    FaLaptopCode,
    FaPhone,
    FaSchool,
} from 'react-icons/fa';

const CurriculumEnUs = () => {
    return (
        <Container maxW="container.lg" py={8}>
            {/* Header */}
            <Flex>
                <Box w="30%">
                    <Image
                        src="efernandes-tech.png"
                        alt="Éderson Fernandes"
                        boxSize="150px"
                        objectFit="cover"
                        borderRadius="full"
                    />
                </Box>
                <Box w="70%">
                    <Heading size="lg" borderBottom="1px solid" pb={1} mb={3}>
                        Éderson Fernandes
                    </Heading>
                    <Flex align="center" mb={1}>
                        <Icon boxSize={6} mr={2}>
                            <FaLaptopCode />
                        </Icon>
                        <Text>Software Engineer | .NET | React | Azure</Text>
                    </Flex>
                    <Flex align="center" mb={1}>
                        <Icon boxSize={6} mr={2}>
                            <FaPhone />
                        </Icon>
                        <Text>(XX) XXXXX-XXXX</Text>
                    </Flex>
                    <Flex align="center" mb={1}>
                        <Icon boxSize={6} mr={2}>
                            <FaEnvelope />
                        </Icon>
                        <Text>efernandes.tech@gmail.com</Text>
                    </Flex>
                </Box>
            </Flex>

            {/* Objective */}
            <Box mt={8}>
                <Heading size="md" borderBottom="1px solid" pb={1} mb={3}>
                    Objective
                </Heading>
                <Text>
                    Work as a [XXXXXXXXXX] in challenging projects, contributing
                    with efficient and scalable solutions.
                </Text>
            </Box>

            {/* Experience */}
            <Box mt={8}>
                <Heading size="md" borderBottom="1px solid" pb={1} mb={3}>
                    Professional Experience
                </Heading>

                {/* Company 1 */}
                <Box mb={6} gap={2}>
                    <Flex align="center" mb={2}>
                        <Icon boxSize={6} mr={2}>
                            <FaBusinessTime />
                        </Icon>
                        <Heading size="md">
                            DBC Company - Bem Promotora Project
                        </Heading>
                    </Flex>
                    <Text fontWeight="bold">Tech Lead</Text>
                    <Text fontStyle="italic">Dec/2023 - Present</Text>
                    <Text fontWeight="bold">Full Stack Developer</Text>
                    <Text fontStyle="italic">Sep/2022 - Nov/2023</Text>
                    <List.Root gap={1} mt={2}>
                        <List.Item>
                            Development of systems focused on payroll loans and
                            insurance.
                        </List.Item>
                        <List.Item>
                            Technologies: React.js, Next.js, .NET Core, SQL
                            Server, Azure.
                        </List.Item>
                        <List.Item>
                            Technical leadership:
                            <List.Root pl={4} gap={1}>
                                <List.Item>
                                    Code reviews following established
                                    standards.
                                </List.Item>
                                <List.Item>
                                    Validation of new technology adoption.
                                </List.Item>
                                <List.Item>
                                    Promotion of best development and security
                                    practices.
                                </List.Item>
                                <List.Item>
                                    Team support for deployments and issue
                                    resolution.
                                </List.Item>
                            </List.Root>
                        </List.Item>
                    </List.Root>
                </Box>

                {/* Company 2 */}
                <Box mb={6} gap={2}>
                    <Flex align="center" mb={2}>
                        <Icon boxSize={6} mr={2}>
                            <FaBusinessTime />
                        </Icon>
                        <Heading size="md">
                            Br Supply – Corporate Supplies
                        </Heading>
                    </Flex>
                    <Text fontWeight="bold">Senior Software Developer</Text>
                    <Text fontStyle="italic">Mar/2021 - Sep/2022</Text>
                    <Text fontWeight="bold">Mid-level</Text>
                    <Text fontStyle="italic">Sep/2018 - Mar/2021</Text>
                    <Text fontWeight="bold">Junior</Text>
                    <Text fontStyle="italic">Sep/2017 - Aug/2018</Text>
                    <List.Root gap={1} mt={2}>
                        <List.Item>
                            Development of the "Cotações Online" system (PHP7,
                            HTML5, CSS3).
                        </List.Item>
                        <List.Item>
                            Integration with payment gateways and external APIs.
                        </List.Item>
                        <List.Item>
                            Participated in the development of the Oceano B2B
                            e-commerce platform:
                            <List.Root pl={4} gap={1}>
                                <List.Item>
                                    ASP.NET Core, SQL Server, Docker,
                                    microservices architecture.
                                </List.Item>
                            </List.Root>
                        </List.Item>
                    </List.Root>
                </Box>

                {/* Company 3 */}
                <Box mb={6} gap={2}>
                    <Flex align="center" mb={2}>
                        <Icon boxSize={6} mr={2}>
                            <FaBusinessTime />
                        </Icon>
                        <Heading size="md">
                            Segure - Occupational Safety
                        </Heading>
                    </Flex>
                    <Text fontWeight="bold">Software Developer</Text>
                    <Text fontStyle="italic">Mar/2016 - Aug/2017</Text>
                    <Text fontWeight="bold">Software Development Intern</Text>
                    <Text fontStyle="italic">Mar/2014 - Feb/2016</Text>
                    <List.Root gap={1} mt={2}>
                        <List.Item>Development of internal systems.</List.Item>
                        <List.Item>
                            Technologies: PHP, MySQL, JavaScript, HTML, CSS,
                            Git.
                        </List.Item>
                    </List.Root>
                </Box>
            </Box>

            {/* Education */}
            <Box mt={8}>
                <Heading size="md" borderBottom="1px solid" pb={1} mb={3}>
                    Education
                </Heading>
                {/* University 1 */}
                <Box mb={6}>
                    <Flex align="center">
                        <Icon boxSize={6} mr={2}>
                            <FaSchool />
                        </Icon>
                        <Heading size="md">
                            Postgraduate in Software Engineering
                        </Heading>
                    </Flex>
                    <Text fontStyle="italic">
                        Universidade do Vale do Rio dos Sinos - UNISINOS
                    </Text>
                    <Text>Aug/2021 - Oct/2022</Text>
                </Box>

                {/* University 2 */}
                <Box mb={6}>
                    <Flex align="center">
                        <Icon boxSize={6} mr={2}>
                            <FaSchool />
                        </Icon>
                        <Heading size="md">
                            Technologist in Systems Analysis and Development
                        </Heading>
                    </Flex>
                    <Text fontStyle="italic">
                        Universidade Luterana do Brasil - ULBRA
                    </Text>
                    <Text>Jul/2016 - Dec/2020</Text>
                </Box>
            </Box>
        </Container>
    );
};

export default CurriculumEnUs;
