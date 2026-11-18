# Inventário da interface — LUDUS V2

Este documento registra os elementos da interface para que cada parte possa ser identificada com precisão durante o desenvolvimento.

## Padrão de identificação

- Landing Page: prefixo `LP`.
- Cada elemento recebe um código único e estável.
- Códigos não são reutilizados depois que um elemento é removido.
- Ao reorganizar um elemento que mantém sua função, seu código permanece.
- Novas telas terão prefixos próprios quando forem implementadas.

## Inventário — Landing Page

| Código | Tela | Elemento | Função | Arquivo |
|---|---|---|---|---|
| LP-001 | Landing Page | Página inteira | Estrutura da Landing Page | src/pages/LandingPage.jsx |
| LP-003 | Landing Page | Primeira dobra | Apresentação inicial | src/pages/LandingPage.jsx |
| LP-004 | Landing Page | Bloco de apresentação | Texto conceitual e chamadas | src/pages/LandingPage.jsx |
| LP-005 | Landing Page | Logotipo textual | Identidade e retorno ao início | src/pages/LandingPage.jsx |
| LP-006 | Landing Page | Prévia do Feed | Demonstração visual da plataforma | src/pages/LandingPage.jsx |
| LP-009 | Landing Page | Cabeçalho global | Logo, entrar e criar conta; oculta ao rolar para baixo e reaparece ao subir | src/pages/LandingPage.jsx |
| LP-020 | Landing Page | Seção social | Avaliações e mosaico da comunidade | src/pages/LandingPage.jsx |
| LP-021 | Landing Page | Avaliação principal | Avaliação com comentário completo | src/pages/LandingPage.jsx |
| LP-022 | Landing Page | Avaliação secundária 1 | Trecho de avaliação | src/pages/LandingPage.jsx |
| LP-023 | Landing Page | Avaliação secundária 2 | Trecho de avaliação | src/pages/LandingPage.jsx |
| LP-041 | Landing Page | Perfil demonstrativo 1 | Mosaico editorial da comunidade | src/pages/LandingPage.jsx |
| LP-042 | Landing Page | Lista demonstrativa | Mosaico editorial da comunidade | src/pages/LandingPage.jsx |
| LP-043 | Landing Page | Perfil demonstrativo 2 | Mosaico editorial da comunidade | src/pages/LandingPage.jsx |
| LP-044 | Landing Page | Frase conceitual | Encerramento do mosaico social | src/pages/LandingPage.jsx |
| LP-055 | Landing Page | Encerramento e CTA | Síntese emocional e chamada para participar | src/pages/LandingPage.jsx |
| LP-056 | Landing Page | Rodapé | Identidade e link do repositório | src/pages/LandingPage.jsx |

## Códigos aposentados

Os códigos LP-002, LP-007, LP-008, LP-020A, LP-040, LP-050 a LP-054 e LP-061 a LP-062 pertenciam a elementos da composição anterior e não serão reutilizados. Os códigos LP-030 a LP-032 já estavam aposentados antes desta revisão.

## Observações

- Os perfis, avaliações e listas exibidos são conteúdo demonstrativo, não dados reais.
- As artes são composições tipográficas em CSS, não capas oficiais.
- Os botões de cadastro e entrada são pontos de navegação reservados para as páginas próprias de autenticação, ainda não implementadas.
- A Landing Page não realiza autenticação nem consulta dados reais.
- As fontes DM Sans, DM Mono e Playfair Display são carregadas pelo Google Fonts.

## Histórico de alterações

| Data | Alteração |
|---|---|
| 2026-11-17 | Criado o padrão de identificação e inventário inicial. |
| 2026-11-18 | Landing Page reformulada conforme o planejamento: cabeçalho retrátil, primeira dobra com prévia do Feed, seção social editorial, mosaico assimétrico da comunidade e encerramento emocional. A seção genérica de funcionalidades foi removida. |
