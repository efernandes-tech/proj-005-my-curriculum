import React from 'react';
import {
    Box,
    Container,
    Flex,
    Heading,
    Icon,
    Image,
    Text,
} from '@chakra-ui/react';
import {
    FaPhone,
    FaBusinessTime,
    FaSchool,
    FaLaptopCode,
    FaEnvelope,
} from 'react-icons/fa';

const App: React.FC = () => {
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
                <Text>XXXXXXXXXX YYYYYYYYYY ZZZZZZZZZZ</Text>
            </Box>

            {/* Experience */}
            <Box mt={8}>
                <Heading size="md" borderBottom="1px solid" pb={1} mb={3}>
                    Experiência
                </Heading>

                {/* Company 1 */}
                <Box mb={6}>
                    <Flex align="center">
                        <Icon boxSize={6} mr={2}>
                            <FaBusinessTime />
                        </Icon>
                        <Heading size="md">
                            DBC Company | Bem Promotora (2 anos e 8 meses)
                        </Heading>
                    </Flex>
                    <Text fontWeight="bold">
                        Referência Técnica e Desenvolvedor Full Stack - dezembro
                        de 2023 - atual
                    </Text>
                    <Text>
                        Desenvolvedor Full Stack - setembro de 2022 - novembro
                        de 2023
                    </Text>
                    <Text mt={2} textAlign="justify">
                        A DBC Company é uma das principais fornecedoras de
                        serviços em TI do Brasil, e premiada com o selo Great
                        Place to Work desde 2012.
                    </Text>
                    <Text textAlign="justify">
                        Trabalho com o time responsável pelo desenvolvimento de
                        sistemas para a Bem Promotora, que é especializada em
                        crédito consignado e seguros.
                    </Text>
                    <Text textAlign="justify">
                        Utilizamos as técnologias mais atualizadas na criação da
                        plataforma para o cliente final, como React.js, Next.js,
                        .NET Core, SQL Server e Azure.
                    </Text>
                    <Text textAlign="justify">
                        Atuo como referência técnica dentro do time de
                        desenvolvedores, realizando atividades como:
                    </Text>
                    <Text textAlign="justify">
                        - Revisão de código entregue de acordo com os padrões
                        estabelecidos;
                    </Text>
                    <Text textAlign="justify">
                        - Evitar a adoção de novas tecnologias sem a validação
                        prévia;
                    </Text>
                    <Text textAlign="justify">
                        - Acompanhamento e disseminação de boas práticas de
                        desenvolvimento e segurança;
                    </Text>
                    <Text textAlign="justify">
                        - Apoio aos times de sistemas nas publicações de novas
                        funcionalidades e correções;
                    </Text>
                    <Text textAlign="justify">
                        - Suporte aos demais desenvolvedores do time.
                    </Text>
                </Box>

                {/* Company 2 */}
                <Box mb={6}>
                    <Flex align="center">
                        <Icon boxSize={6} mr={2}>
                            <FaBusinessTime />
                        </Icon>
                        <Heading size="md">
                            Br Supply – Suprimentos Corporativos (5 anos e 1
                            mês)
                        </Heading>
                    </Flex>
                    <Text>
                        Desenvolvedor de Software III - abril de 2021 - setembro
                        de 2022
                    </Text>
                    <Text>
                        Desenvolvedor de Software II - setembro de 2018 - março
                        de 2021
                    </Text>
                    <Text>
                        Desenvolvedor de Software I - setembro de 2017 - agosto
                        de 2018
                    </Text>
                    <Text mt={2} textAlign="justify">
                        A Br Supply é uma empresa especializada em suprimentos
                        corporativos, com foco em oferecer soluções múltiplas
                        para o mercado B2B.
                    </Text>
                    <Text textAlign="justify">
                        Iniciei na empresa trabalhando como desenvolvedor full
                        stack na equipe de TI, utilizando tecnologias web como
                        PHP, JavaScript, HTML, CSS, SQL Server e Git.
                    </Text>
                    <Text textAlign="justify">
                        Trabalhei no desenvolvimento do sistema Cotações Online,
                        com tecnologias como PHP7, HTML5 e CSS3. E realizando
                        integrações com gateways de pagamento e APIs externas.
                    </Text>
                    <Text textAlign="justify">
                        Trabalhei com o time de desenvolvimento da nova
                        plataforma de e-commerce da Oceano B2B, que é uma
                        empresa do grupo Br Supply, focada no fornecimento de
                        suprimentos corporativos para pequenas e médias
                        empresas. Utilizei as tecnologias mais atualizadas na
                        criação da nova plataforma, como ASP.NET Core, SQL
                        Server e Docker, em um arquitetura de microserviços.
                    </Text>
                </Box>

                {/* Company 3 */}
                <Box>
                    <Flex align="center">
                        <Icon boxSize={6} mr={2}>
                            <FaBusinessTime />
                        </Icon>
                        <Heading size="md">
                            Segure - Segurança do Trabalho (3 anos e 6 meses)
                        </Heading>
                    </Flex>
                    <Text>
                        Desenvolvedor de Software - março de 2016 - agosto de
                        2017
                    </Text>
                    <Text>
                        Estagiário de Desenvolvimento de Software - março de
                        2014 - fevereiro de 2016
                    </Text>
                    <Text mt={2} textAlign="justify">
                        A Segure é uma empresa especializada em segurança do
                        trabalho, atuando em clientes de diversos segmentos.
                    </Text>
                    <Text textAlign="justify">
                        Trabalhei com a equipe de desenvolvimento de sistemas,
                        utilizando tecnologias como PHP, MySQL, Javascript,
                        HTML, CSS e Git. Sempre buscando aprimorar os meus
                        conhecimentos para proporcionar os melhores resultados
                        para a empresa.
                    </Text>
                </Box>
            </Box>

            {/* Education */}
            <Box mt={8}>
                <Heading size="md" borderBottom="1px solid" pb={1} mb={3}>
                    Formação
                </Heading>
                {/* University 1 */}
                <Box mb={6}>
                    <Flex align="center">
                        <Icon boxSize={6} mr={2}>
                            <FaSchool />
                        </Icon>
                        <Heading size="md">
                            Universidade do Vale do Rio dos Sinos
                        </Heading>
                    </Flex>
                    <Text fontWeight="bold">
                        Especialização em Engenharia de Software
                    </Text>
                    <Text>
                        Pós-graduação Lato Sensu iniciada em agosto de 2021 e
                        conclusão em outubro de 2022.
                    </Text>
                </Box>

                {/* University 2 */}
                <Box mb={6}>
                    <Flex align="center">
                        <Icon boxSize={6} mr={2}>
                            <FaSchool />
                        </Icon>
                        <Heading size="md">
                            Universidade Luterana do Brasil
                        </Heading>
                    </Flex>
                    <Text fontWeight="bold">
                        Análise e Desenvolvimento de Sistemas
                    </Text>
                    <Text>
                        Tecnólogo iniciado em Julho de 2016 e concluído em
                        Dezembro de 2020.
                    </Text>
                </Box>
            </Box>
        </Container>
    );
};

export default App;
