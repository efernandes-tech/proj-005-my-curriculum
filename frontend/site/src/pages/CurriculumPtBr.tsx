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

const STORAGE_KEY = 'curriculum-ptbr';

const defaultFields = {
    phone: '(XX) XXXXX-XXXX',
    summary:
        'Engenheiro de Software Sênior com sólida experiência no desenvolvimento de aplicações escaláveis, seguras e de alta performance, utilizando React, .NET, TypeScript, Azure e SQL Server. Atuo como desenvolvedor full stack e líder técnico, transformando ideias em soluções confiáveis, com foco em qualidade, código limpo e entrega contínua. Já implementei arquiteturas baseadas em microsserviços, colaborei na melhoria de pipelines com Docker e Azure DevOps, e atuei na evolução da performance de aplicações em ambientes críticos. Tenho me aprofundado em Web3 e Blockchain, buscando compreender as tecnologias descentralizadas e suas aplicações práticas.',
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
    Banco: ['SQL Server', 'MySQL'],
    Cloud: ['Azure', 'Azure DevOps'],
    DevOps: ['Docker', 'Microservices', 'Git', 'Scrum'],
    Blockchain: ['Web3', 'Solidity', 'Smart Contracts'],
    IA: ['Claude Code', 'ChatGPT', 'Cursor'],
    Outros: ['React Native', 'NodeJS', 'PHP7'],
};

const CurriculumPtBr = () => {
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
                            Salvar
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
                            Cancelar
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
                            Editar Campos
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
                            Imprimir / PDF
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
                            Engenheiro de Software Sênior | React & .NET | Azure
                            | Web3
                        </Text>
                    </Flex>
                    <Flex align="center" mb={1}>
                        <Icon boxSize={6} mr={2}>
                            <FaMapMarkerAlt />
                        </Icon>
                        <Text>Carlos Barbosa, RS - Brasil</Text>
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
                    {/* GitHub:   <Link to="https://github.com/SEU-USUARIO">github.com/SEU-USUARIO</Link>                 */}
                </Box>
            </Flex>

            {/* Summary */}
            <Box mt={8}>
                <Heading size="md" borderBottom="1px solid" pb={1} mb={3}>
                    Resumo Profissional
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
                    Habilidades Técnicas
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
                    Experiência Profissional
                </Heading>

                {/* Company 1 */}
                <Box mb={6} gap={2}>
                    <Flex align="center" mb={2}>
                        <Icon boxSize={6} mr={2}>
                            <FaBusinessTime />
                        </Icon>
                        <Heading size="md">
                            DBC Company - Cliente Bem Promotora
                        </Heading>
                    </Flex>
                    <Text fontWeight="bold">Tech Lead</Text>
                    <Text fontStyle="italic">Dez/2023 - Atual</Text>
                    <Text fontWeight="bold">Desenvolvedor Full Stack</Text>
                    <Text fontStyle="italic">Set/2022 - Nov/2023</Text>
                    <List.Root mt={2}>
                        <List.Item>
                            Desenvolvimento de sistemas especializados em
                            crédito consignado e seguros.
                        </List.Item>
                        <List.Item>
                            Tecnologias: React.js, Next.js, .NET Core, SQL
                            Server, Azure, Azure DevOps.
                        </List.Item>
                        <List.Item>
                            Atuação como líder técnico:
                            <List.Root ps={4}>
                                <List.Item>
                                    Code review conforme padrões estabelecidos.
                                </List.Item>
                                <List.Item>
                                    Validação de adoção de novas tecnologias.
                                </List.Item>
                                <List.Item>
                                    Disseminação de boas práticas de
                                    desenvolvimento e segurança.
                                </List.Item>
                                <List.Item>
                                    Suporte ao time em deploys e resolução de
                                    problemas.
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
                            Br Supply - Suprimentos Corporativos
                        </Heading>
                    </Flex>
                    <Text fontWeight="bold">
                        Desenvolvedor de Software Senior
                    </Text>
                    <Text fontStyle="italic">Mar/2021 - Set/2022</Text>
                    <Text fontWeight="bold">
                        Desenvolvedor de Software Pleno
                    </Text>
                    <Text fontStyle="italic">Set/2018 - Mar/2021</Text>
                    <Text fontWeight="bold">
                        Desenvolvedor de Software Junior
                    </Text>
                    <Text fontStyle="italic">Set/2017 - Ago/2018</Text>
                    <List.Root mt={2}>
                        <List.Item>
                            Desenvolvimento do sistema Cotações Online (PHP7,
                            HTML5, CSS3).
                        </List.Item>
                        <List.Item>
                            Integração com gateways de pagamento e APIs
                            externas.
                        </List.Item>
                        <List.Item>
                            Participação no desenvolvimento da nova plataforma
                            de e-commerce (Oceano B2B):
                            <List.Root ps={4}>
                                <List.Item>
                                    ASP.NET Core, SQL Server, Docker,
                                    arquitetura de microserviços.
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
                            Segure - Segurança do Trabalho
                        </Heading>
                    </Flex>
                    <Text fontWeight="bold">Desenvolvedor de Software</Text>
                    <Text fontStyle="italic">Mar/2016 - Ago/2017</Text>
                    <Text fontWeight="bold">Estagiário de Desenvolvimento</Text>
                    <Text fontStyle="italic">Mar/2014 - Fev/2016</Text>
                    <List.Root mt={2}>
                        <List.Item>
                            Atuação no desenvolvimento de sistemas internos.
                        </List.Item>
                        <List.Item>
                            Tecnologias: PHP, MySQL, JavaScript, HTML, CSS, Git.
                        </List.Item>
                    </List.Root>
                </Box>
            </Box>

            {/* Projects */}
            <Box mt={8}>
                <Heading size="md" borderBottom="1px solid" pb={1} mb={3}>
                    Projetos Pessoais
                </Heading>

                <Box mb={6}>
                    <Flex align="center" mb={2}>
                        <Icon boxSize={6} mr={2}>
                            <FaCode />
                        </Icon>
                        <Heading size="md">Argos TraderBot</Heading>
                    </Flex>
                    <List.Root mt={1}>
                        <List.Item>
                            Plataforma de bots de trading e análise de
                            criptomoedas, com automação de estratégias de compra
                            e venda.
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
                    <List.Root mt={1}>
                        <List.Item>
                            Aplicação de finanças pessoais com controle de
                            gastos e receitas.
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
                    Formação Acadêmica
                </Heading>
                <Box mb={6}>
                    <Flex align="center">
                        <Icon boxSize={6} mr={2}>
                            <FaSchool />
                        </Icon>
                        <Heading size="md">
                            Pós-Graduação em Engenharia de Software
                        </Heading>
                    </Flex>
                    <Text fontStyle="italic">
                        Universidade do Vale do Rio dos Sinos - UNISINOS
                    </Text>
                    <Text>Ago/2021 - Out/2022</Text>
                </Box>

                <Box mb={6}>
                    <Flex align="center">
                        <Icon boxSize={6} mr={2}>
                            <FaSchool />
                        </Icon>
                        <Heading size="md">
                            Tecnólogo em Análise e Desenvolvimento de Sistemas
                        </Heading>
                    </Flex>
                    <Text fontStyle="italic">
                        Universidade Luterana do Brasil - ULBRA
                    </Text>
                    <Text>Jul/2016 - Dez/2020</Text>
                </Box>
            </Box>

            {/* Languages */}
            <Box mt={8}>
                <Heading size="md" borderBottom="1px solid" pb={1} mb={3}>
                    <Flex align="center" gap={2}>
                        <Icon boxSize={5}>
                            <FaGlobe />
                        </Icon>
                        Idiomas
                    </Flex>
                </Heading>
                <Flex gap={6}>
                    <Text>
                        <Text as="span" fontWeight="bold">
                            Português
                        </Text>{' '}
                        - Nativo
                    </Text>
                    <Text>
                        <Text as="span" fontWeight="bold">
                            Inglês
                        </Text>{' '}
                        - Intermediário (B1)
                    </Text>
                </Flex>
            </Box>
        </Container>
    );
};

export default CurriculumPtBr;
