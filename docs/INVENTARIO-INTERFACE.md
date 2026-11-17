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

## Inventário

| Código | Tela | Elemento | Elemento pai | Função | Arquivo |
|---|---|---|---|---|---|
| — | — | Ainda não há elementos implementados | — | — | — |

## Histórico de alterações

| Data | Alteração |
|---|---|
| 2026-11-17 | Criado o padrão de identificação e o inventário inicial. |
