import {
    Badge,
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Image,
    Input,
    Link,
    List,
    Text,
    Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';
import {
    FaBusinessTime,
    FaCode,
    FaEnvelope,
    FaGlobe,
    FaLaptopCode,
    FaMapMarkerAlt,
    FaPhone,
    FaSchool,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const STORAGE_KEY = 'curriculum-enus';

const defaultFields = {
    phone: '(XX) XXXXX-XXXX',
    summary:
        'Senior Software Engineer with solid experience building scalable, secure, and high-performance applications using React, .NET, TypeScript, Azure, and SQL Server. I work as a full stack developer and technical lead, turning ideas into reliable solutions with a focus on quality, clean code, and continuous delivery. I have implemented microservices architectures, improved build and deployment pipelines with Docker and Azure DevOps, and driven performance and stability improvements in critical environments. I have been deepening my knowledge in Web3 and Blockchain, exploring decentralized technologies and their practical applications.',
};

type CurriculumFields = typeof defaultFields;

function loadFields() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved
            ? { ...defaultFields, ...JSON.parse(saved) }
            : defaultFields;
    } catch {
        return defaultFields;
    }
}

const skills = {
    Backend: ['.NET Core', 'ASP.NET Core', 'C#'],
    Frontend: ['React.js', 'Next.js', 'TypeScript', 'HTML5', 'CSS3'],
    Database: ['SQL Server', 'MySQL'],
    Cloud: ['Azure', 'Azure DevOps'],
    DevOps: ['Docker', 'Microservices', 'Git', 'Scrum'],
    Blockchain: ['Web3', 'Solidity', 'Smart Contracts'],
    AI: ['Claude Code', 'ChatGPT', 'Cursor'],
    Other: ['React Native', 'NodeJS', 'PHP7'],
};

const CurriculumEnUs = () => {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [fields, setFields] = useState<CurriculumFields>(loadFields);

    const handleChange = (key: keyof typeof defaultFields, value: string) => {
        setFields(prev => ({ ...prev, [key]: value }));
    };

    const handleSave = () => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(fields));
        setIsEditing(false);
    };

    const handleCancel = () => {
        setFields(loadFields());
        setIsEditing(false);
    };

    return (
        <Container maxW="container.lg" py={8}>
            {/* Action bar */}
            <Flex justify="flex-end" mb={4} gap={2} className="no-print">
                <Button
                    onClick={() => navigate('/')}
                    size="sm"
                    variant="outline"
                    style={{ color: '#1a1a1a', borderColor: '#1a1a1a' }}
                    _hover={{
                        bg: '#e8e8e8',
                        color: '#1a1a1a',
                        borderColor: '#1a1a1a',
                    }}
                >
                    PT
                </Button>
                <Button
                    onClick={() => navigate('/en')}
                    size="sm"
                    variant="outline"
                    style={{ color: '#1a1a1a', borderColor: '#1a1a1a' }}
                    _hover={{
                        bg: '#e8e8e8',
                        color: '#1a1a1a',
                        borderColor: '#1a1a1a',
                    }}
                >
                    EN
                </Button>
                {isEditing ? (
                    <>
                        <Button
                            size="sm"
                            colorPalette="green"
                            onClick={handleSave}
                        >
                            Save
                        </Button>
                        <Button
                            size="sm"
                            variant="outline"
                            style={{ color: '#1a1a1a', borderColor: '#1a1a1a' }}
                            _hover={{
                                bg: '#e8e8e8',
                                color: '#1a1a1a',
                                borderColor: '#1a1a1a',
                            }}
                            onClick={handleCancel}
                        >
                            Cancel
                        </Button>
                    </>
                ) : (
                    <>
                        <Button
                            size="sm"
                            variant="outline"
                            style={{ color: '#1a1a1a', borderColor: '#1a1a1a' }}
                            _hover={{
                                bg: '#e8e8e8',
                                color: '#1a1a1a',
                                borderColor: '#1a1a1a',
                            }}
                            onClick={() => setIsEditing(true)}
                        >
                            Edit Fields
                        </Button>
                        <Button
                            size="sm"
                            style={{
                                backgroundColor: '#1a1a1a',
                                color: '#fff',
                            }}
                            _hover={{ bg: '#333', color: '#fff' }}
                            onClick={() => window.print()}
                        >
                            Print / PDF
                        </Button>
                    </>
                )}
            </Flex>

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
                        <Text>
                            Senior Software Engineer | React & .NET | Azure |
                            Web3
                        </Text>
                    </Flex>
                    <Flex align="center" mb={1}>
                        <Icon boxSize={6} mr={2}>
                            <FaMapMarkerAlt />
                        </Icon>
                        <Text>Carlos Barbosa, RS - Brazil</Text>
                    </Flex>
                    <Flex align="center" mb={1}>
                        <Icon boxSize={6} mr={2}>
                            <FaPhone />
                        </Icon>
                        {isEditing ? (
                            <Input
                                size="sm"
                                value={fields.phone}
                                onChange={e =>
                                    handleChange('phone', e.target.value)
                                }
                                placeholder="(XX) XXXXX-XXXX"
                                maxW="200px"
                            />
                        ) : (
                            <Link
                                href={`tel:${fields.phone}`}
                                color="inherit"
                                textDecoration="none"
                                _hover={{ textDecoration: 'underline' }}
                            >
                                {fields.phone}
                            </Link>
                        )}
                    </Flex>
                    <Flex align="center" mb={1}>
                        <Icon boxSize={6} mr={2}>
                            <FaEnvelope />
                        </Icon>
                        <Link
                            href="mailto:efernandes.tech@gmail.com"
                            color="inherit"
                            textDecoration="none"
                            _hover={{ textDecoration: 'underline' }}
                        >
                            efernandes.tech@gmail.com
                        </Link>
                    </Flex>
                    {/* LinkedIn: <Link to="https://linkedin.com/in/efernandes-tech">linkedin.com/in/efernandes-tech</Link> */}
                    {/* GitHub:   <Link to="https://github.com/YOUR-USERNAME">github.com/YOUR-USERNAME</Link>              */}
                </Box>
            </Flex>

            {/* Summary */}
            <Box mt={8}>
                <Heading size="md" borderBottom="1px solid" pb={1} mb={3}>
                    Professional Summary
                </Heading>
                {isEditing ? (
                    <Textarea
                        value={fields.summary}
                        onChange={e => handleChange('summary', e.target.value)}
                        rows={5}
                        resize="vertical"
                    />
                ) : (
                    <Text>{fields.summary}</Text>
                )}
            </Box>

            {/* Skills */}
            <Box mt={8}>
                <Heading size="md" borderBottom="1px solid" pb={1} mb={3}>
                    Technical Skills
                </Heading>
                <Flex direction="column" gap={2}>
                    {Object.entries(skills).map(([group, items]) => (
                        <Flex key={group} align="flex-start" gap={2}>
                            <Text
                                fontWeight="bold"
                                minW="90px"
                                fontSize="sm"
                                pt="2px"
                            >
                                {group}:
                            </Text>
                            <Flex wrap="wrap" gap={1}>
                                {items.map(skill => (
                                    <Badge key={skill} variant="subtle">
                                        {skill}
                                    </Badge>
                                ))}
                            </Flex>
                        </Flex>
                    ))}
                </Flex>
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
                            DBC Company - Customer Bem Promotora
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
                            Server, Azure, Azure DevOps.
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
                            Br Supply - Corporate Supplies
                        </Heading>
                    </Flex>
                    <Text fontWeight="bold">Senior Software Developer</Text>
                    <Text fontStyle="italic">Mar/2021 - Sep/2022</Text>
                    <Text fontWeight="bold">Mid-level Software Developer</Text>
                    <Text fontStyle="italic">Sep/2018 - Mar/2021</Text>
                    <Text fontWeight="bold">Junior Software Developer</Text>
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

            {/* Projects */}
            <Box mt={8}>
                <Heading size="md" borderBottom="1px solid" pb={1} mb={3}>
                    Personal Projects
                </Heading>

                <Box mb={6}>
                    <Flex align="center" mb={2}>
                        <Icon boxSize={6} mr={2}>
                            <FaCode />
                        </Icon>
                        <Heading size="md">Argos TraderBot</Heading>
                    </Flex>
                    <List.Root gap={1} mt={1}>
                        <List.Item>
                            Trading bot platform for cryptocurrency analysis and
                            automated buy/sell strategy execution.
                        </List.Item>
                        <List.Item>
                            Stack: React, TypeScript, .NET Core, Web3.
                        </List.Item>
                    </List.Root>
                </Box>

                <Box mb={6}>
                    <Flex align="center" mb={2}>
                        <Icon boxSize={6} mr={2}>
                            <FaCode />
                        </Icon>
                        <Heading size="md">ContaCoin</Heading>
                    </Flex>
                    <List.Root gap={1} mt={1}>
                        <List.Item>
                            Personal finance application for tracking expenses
                            and income.
                        </List.Item>
                        <List.Item>
                            Stack: React, TypeScript, .NET Core.
                        </List.Item>
                    </List.Root>
                </Box>
            </Box>

            {/* Education */}
            <Box mt={8}>
                <Heading size="md" borderBottom="1px solid" pb={1} mb={3}>
                    Education
                </Heading>
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

            {/* Languages */}
            <Box mt={8}>
                <Heading size="md" borderBottom="1px solid" pb={1} mb={3}>
                    <Flex align="center" gap={2}>
                        <Icon boxSize={5}>
                            <FaGlobe />
                        </Icon>
                        Languages
                    </Flex>
                </Heading>
                <Flex gap={6}>
                    <Text>
                        <Text as="span" fontWeight="bold">
                            Portuguese
                        </Text>{' '}
                        - Native
                    </Text>
                    <Text>
                        <Text as="span" fontWeight="bold">
                            English
                        </Text>{' '}
                        - Intermediate (B1)
                    </Text>
                </Flex>
            </Box>
        </Container>
    );
};

export default CurriculumEnUs;
