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

const CurriculumPtBr = () => {
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
                        <Text>
                            Engenheiro de Software | .NET | React | Azure
                        </Text>
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
                    Objetivo
                </Heading>
                <Text>
                    Atuar como XXXXXXXXXX em projetos desafiadores, contribuindo
                    com soluções eficientes e escaláveis.
                </Text>
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
                            DBC Company - Projeto Bem Promotora
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
                            Server, Azure.
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
                            Br Supply – Suprimentos Corporativos
                        </Heading>
                    </Flex>
                    <Text fontWeight="bold">
                        Desenvolvedor de Software Senior
                    </Text>
                    <Text fontStyle="italic">Mar/2021 - Set/2022</Text>
                    <Text fontWeight="bold">Pleno</Text>
                    <Text fontStyle="italic">Set/2018 - Mar/2021</Text>
                    <Text fontWeight="bold">Junior</Text>
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

            {/* Education */}
            <Box mt={8}>
                <Heading size="md" borderBottom="1px solid" pb={1} mb={3}>
                    Formação Acadêmica
                </Heading>
                {/* University 1 */}
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

                {/* University 2 */}
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
        </Container>
    );
};

export default CurriculumPtBr;
