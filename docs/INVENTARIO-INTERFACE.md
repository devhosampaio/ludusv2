# Inventário da interface — LUDUS V2

Este documento registra os elementos da interface para que cada parte possa ser identificada com precisão durante o desenvolvimento.

## Padrão de identificação

- Landing Page: prefixo `LP` (ex.: `LP-001`).
- Cada elemento recebe um código único e estável.
- Seções, containers, componentes e elementos internos podem ter códigos próprios.
- Um código não deve ser reutilizado depois que seu elemento for removido.
- Ao renomear ou reorganizar um elemento, manter o código se ele continuar representando o mesmo elemento.
- Novas telas terão prefixos próprios, definidos quando forem criadas.

## Anotação durante o desenvolvimento

Os elementos da interface serão identificados no código com o atributo `data-ui-id`, usando o mesmo código deste inventário. Quando a tela for implementada, também poderemos exibir etiquetas visuais de identificação em modo de desenvolvimento, sem mostrá-las aos visitantes do site publicado.

## Inventário — Landing Page

| Código | Tela | Elemento | Elemento pai | Função | Arquivo |
|---|---|---|---|---|---|
| LP-001 | Landing Page | Página inteira | — | Fundo, estrutura e contexto da Landing Page | src/pages/LandingPage.jsx |
| LP-002 | Landing Page | Textura de granulação | LP-001 | Textura sutil sobre o fundo | src/pages/LandingPage.css |
| LP-003 | Landing Page | Primeira dobra | LP-001 | Apresentação inicial e demonstração do produto | src/pages/LandingPage.jsx |
| LP-004 | Landing Page | Bloco de apresentação | LP-003 | Texto principal e chamadas para ação | src/pages/LandingPage.jsx |
| LP-005 | Landing Page | Logotipo textual | LP-004 | Identidade visual e retorno ao início | src/pages/LandingPage.jsx |
| LP-006 | Landing Page | Composição de demonstração | LP-003 | Prévia ilustrativa de conteúdo do produto | src/pages/LandingPage.jsx |
| LP-007 | Landing Page | Card de avaliação em destaque | LP-006 | Demonstração de avaliação de jogo | src/pages/LandingPage.jsx |
| LP-008 | Landing Page | Notificação flutuante | LP-006 | Demonstração de atividade da comunidade | src/pages/LandingPage.jsx |
| LP-020 | Landing Page | Seção de avaliações recentes | LP-001 | Apresentar três avaliações de exemplo | src/pages/LandingPage.jsx |
| LP-020A | Landing Page | Cabeçalho da seção de avaliações | LP-020 | Título e identificação da seção | src/pages/LandingPage.jsx |
| LP-021 | Landing Page | Avaliação de Hollow Knight | LP-020 | Card demonstrativo de avaliação | src/pages/LandingPage.jsx |
| LP-022 | Landing Page | Avaliação de Celeste | LP-020 | Card demonstrativo de avaliação | src/pages/LandingPage.jsx |
| LP-023 | Landing Page | Avaliação de Outer Wilds | LP-020 | Card demonstrativo de avaliação | src/pages/LandingPage.jsx |
| LP-030 | Landing Page | Seção de resenhas em destaque | LP-001 | Apresentar duas resenhas de exemplo | src/pages/LandingPage.jsx |
| LP-031 | Landing Page | Resenha de Disco Elysium | LP-030 | Card demonstrativo de resenha | src/pages/LandingPage.jsx |
| LP-032 | Landing Page | Resenha de Journey | LP-030 | Card demonstrativo de resenha | src/pages/LandingPage.jsx |
| LP-040 | Landing Page | Seção de listas | LP-001 | Apresentar três listas de exemplo | src/pages/LandingPage.jsx |
| LP-041 | Landing Page | Lista “jogos para sentir” | LP-040 | Card demonstrativo de lista | src/pages/LandingPage.jsx |
| LP-042 | Landing Page | Lista “mundos para perder a hora” | LP-040 | Card demonstrativo de lista | src/pages/LandingPage.jsx |
| LP-043 | Landing Page | Lista “pequenas obras-primas” | LP-040 | Card demonstrativo de lista | src/pages/LandingPage.jsx |
| LP-050 | Landing Page | Seção de funcionalidades | LP-001 | Resumo das funcionalidades do LUDUS | src/pages/LandingPage.jsx |
| LP-051 | Landing Page | Funcionalidade avaliar | LP-050 | Apresentar avaliação de jogos | src/pages/LandingPage.jsx |
| LP-052 | Landing Page | Funcionalidade escrever | LP-050 | Apresentar publicação de resenhas | src/pages/LandingPage.jsx |
| LP-053 | Landing Page | Funcionalidade conectar | LP-050 | Apresentar conexão entre usuários | src/pages/LandingPage.jsx |
| LP-054 | Landing Page | Funcionalidade organizar | LP-050 | Apresentar listas e favoritos | src/pages/LandingPage.jsx |
| LP-055 | Landing Page | Seção sobre o LUDUS | LP-001 | Apresentar propósito da plataforma | src/pages/LandingPage.jsx |
| LP-056 | Landing Page | Rodapé | LP-001 | Marca e links institucionais | src/pages/LandingPage.jsx |
| LP-061 | Landing Page | Fundo do modal de autenticação | LP-001 | Camada de fundo e fechamento externo | src/pages/LandingPage.jsx |
| LP-062 | Landing Page | Modal de autenticação | LP-061 | Interface de entrada e cadastro | src/pages/LandingPage.jsx |

## Observações de implementação

- Os textos, perfis, avaliações e listas exibidos nesta primeira versão são conteúdo demonstrativo, não dados reais de usuários.
- As artes de jogos são composições tipográficas feitas em CSS, não capas oficiais.
- Os formulários de autenticação são apenas a interface visual; ainda não estão conectados a um serviço de autenticação.
- Os links para páginas internas de avaliação, feed e termos serão conectados quando essas telas e funcionalidades forem implementadas.
- As fontes Space Grotesk e Inter são carregadas pelo Google Fonts.

## Histórico de alterações

| Data | Alteração |
|---|---|
| 2026-11-17 | Criado o padrão de identificação e o inventário inicial. |
| 2026-11-17 | Primeira implementação visual da Landing Page e cadastro dos elementos LP-001 a LP-062. |
