# Guardrails (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Fonte fidedigna:** `src/lib/guardrails/`
> **Última atualização:** 2026-08-29 — v3.8.51 (a proveniência da transcrição do Video Bridge é declarada pelo chamador,
> ainda não é verificada pelo servidor — clarificado de acordo com #11661)

As guardrails aplicam transformações de segurança, políticas e conteúdo na fronteira
entre o OmniRoute e os fornecedores a montante. Cada guardrail pode inspecionar (e
opcionalmente rejeitar, transformar ou anotar) os payloads dos pedidos (`preCall`) e
as respostas a montante (`postCall`).

O sistema é **fail-open**: se uma guardrail lançar uma exceção durante a execução, o registo
regista o erro e prossegue para a guardrail seguinte, em vez de fazer o pedido
falhar. O bloqueio é uma decisão explícita (`block: true`), nunca um acidente.

## Salvaguardas integradas

O registo carrega automaticamente seis salvaguardas por ordem de prioridade aquando da importação
(consulte `registry.ts` → `registerDefaultGuardrails()`):

| Prioridade | Nome                | Fase(s)        | Ficheiro              |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Os números de prioridade mais baixos são executados **primeiro**.

### Ponte de visão (`visionBridge.ts`) — Ponte de modalidade PR-1

Interceta pedidos que contêm imagens e se destinam a **modelos sem capacidade de visão**, e
redireciona o pedido completo para um modelo com capacidade de visão ou substitui as partes
de imagem por descrições textuais produzidas por um modelo de visão configurável antes
da chamada a montante. Isto permite que os fornecedores apenas de texto processem
payloads multimodais de forma transparente.

Fluxo:

1. Ignorar se o modelo de destino já suportar visão (a menos que conste na
   lista de ponte forçada `isVisionBridgeForcedModel`).
2. Extrair as partes de imagem através de `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), que delega no **detetor de multimédia
   unificado** `detectMediaParts()` em `open-sse/utils/mediaParts.ts` — a
   única fonte de verdade partilhada com o filtro de compatibilidade combo.
   A extração é limitada por uma lista de permissões às partes de nível superior com os formatos
   que `replaceImageParts` consegue reinserir (o contrato extract↔replace): OpenAI
   `image_url`, `source.type:"base64"` em base64 da Anthropic, URL da Anthropic
   `source.type:"url"` e `input_image` da Responses API. As correspondências
   aninhadas e os formatos apenas indicativos são material para o filtro combo e nunca são extraídos.
   Ignorar se nenhum for encontrado.
3. Resolver a configuração de runtime através de `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): as novas chaves de definições
   `modalityBridge*` têm precedência; as chaves legadas `visionBridge*` permanecem como
   **fallback durante um ciclo** (janela de reversão). Ignorar antes de qualquer
   análise de multimédia quando a ponte estiver desativada.
4. O seletor de modo (`modalityBridgeVisionMode`, consulte a tabela abaixo) decide
   entre redirecionar e descrever. O redirecionamento devolve `modifiedPayload` apenas com `model`
   substituído, juntamente com os metadados `{ rerouted, fromModel, toModel, imagesKept }`.
5. Caminho de descrição: limitar as imagens a `maxImages`, compor o prompt sensível à tarefa,
   consultar a cache de descrições, chamar o modelo de visão **em paralelo**
   (`Promise.allSettled`) e inserir partes de texto `[Image N]: <description>`
   nos respetivos lugares. Uma descrição falhada produz `null` e a parte de imagem original é
   **preservada** (#4012) — exceto no caminho de descrição combo quando todas as
   descrições falham, caso em que um serviço a montante confirmado como não tendo capacidade de visão recebe um
   substituto `(unavailable — no vision-capable provider connected)` (#8430).
6. Devolver `modifiedPayload` + metadados (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Seletor de modo (`modalityBridgeVisionMode`)

| Modo       | Predefinição | Comportamento                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔            | Heurística legada, inalterada (#6640/#7204): os modelos que não são combo/`auto/` são redirecionados para o melhor modelo de visão, a menos que o modelo original já tenha credenciais utilizáveis (nesse caso, é feita a descrição); os destinos combo usam sempre a descrição.                                                               |
| `describe` |              | Descrever sempre — o bloco de redirecionamento é totalmente ignorado; o modelo escolhido pelo utilizador responde sempre.                                                                                                                                                                                                                      |
| `reroute`  |              | Forçar o redirecionamento: a proteção que mantém o modelo com credenciais é ignorada. A proteção de credenciais do **destino** do redirecionamento continua a aplicar-se — quando não existe um destino de visão utilizável, o pedido passa para a descrição, para que as imagens em bruto nunca cheguem a um backend apenas de texto (#8430). |

Os modos forçados terminam antecipadamente **antes** de a heurística automática ser executada; o comportamento de `auto`
é idêntico, byte por byte, ao da salvaguarda anterior ao PR-1.

#### Âmbito da chave de API (`visionBridgeKeyScope.ts`)

Quando a chave de API do autor da chamada restringe `allowedConnections`, conjuntos de quotas
(`allowedQuotas`) ou modelos (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), a ponte apenas
seleciona modelos de redirecionamento e descrição que a chave pode utilizar, em ligações que a chave pode
utilizar. A chamada de descrição passa então sempre pelo ciclo interno do OmniRoute com
o cabeçalho `x-omniroute-self-loop-key-id`, para que o pedido de chat recetor
volte a impor a política de ligações e modelos dessa chave. `enforceApiKeyPolicy()`
respeita esse cabeçalho apenas em conjunto com o bearer do ciclo interno, pelo que apenas pode
restringir o acesso, e um id que não seja resolvido é rejeitado.

Se nenhum modelo de visão for permitido para a chave, o caminho de descrição não intervém e
o pedido passa sem alterações, mantendo o mesmo comportamento fail-open de uma
salvaguarda desativada (metadados `{ skipped: true, reason: "no_permitted_vision_model" }`).
Os pedidos sem uma chave e as chaves sem estas restrições comportam-se exatamente como
antes.

#### Prompt de descrição sensível à tarefa (`modalityBridgeVisionTaskAware`)

Predefinição: **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) acrescenta
o texto da **última mensagem do utilizador** (truncado a 500 carateres) ao prompt
base de descrição, orientando a descrição para aquilo que o utilizador realmente
pediu (padrão codex-vision-proxy) e solicitando ao modelo de visão que transcreva
o texto visível. Com a opção desativada — ou sem texto do utilizador — o prompt
base é utilizado sem alterações.

O pedido compatível com OpenAI do próprio ciclo de descrição (`callVisionModelSingle()`
em `visionBridgeHelpers.ts`) solicita sempre `image_url.detail: "high"` —
incondicionalmente, para todos os chamadores/fornecedores, sem depender de qualquer
sinal do cliente. A amostragem com pouco detalhe degrada a precisão do OCR
precisamente na tarefa de transcrição de texto solicitada por este prompt, pelo
que a própria chamada de descrição pede sempre um nível elevado de detalhe,
independentemente do nível de detalhe utilizado pelo pedido original recebido.
Isto afeta apenas o corpo do pedido interno de descrição; não altera a forma como
o OmniRoute encaminha o `image_url.detail` do próprio chamador no pedido principal —
essa predefinição é aplicada separadamente, e apenas para clientes OpenCode
detetados, em `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
O ramo do ciclo de descrição com o formato de comunicação da Anthropic não tem
nenhum campo `detail` e não é afetado por nenhuma das predefinições.

#### Limite da saída da descrição (`modalityBridgeVisionMaxChars`)

| Chave                          | Predefinição | Intervalo        |
| ------------------------------ | ------------ | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`          | `0` ou 100–50000 |

`0` (predefinição) significa **sem limite** — a descrição devolvida por
`callVisionModel()` é transmitida sem alterações, preservando o comportamento
existente. Qualquer valor no intervalo 100–50000 trunca a descrição com um
sufixo `…` antes de esta ser reinserida como `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` em `src/lib/guardrails/visionBridge.ts`).
Aumente este valor para tarefas de OCR com muito detalhe, nas quais o modelo a
jusante necessita da transcrição completa; reduza-o para limitar a utilização
de tokens por modelos de visão demasiado prolixos. O campo do painel de controlo
encontra-se no painel Avançado do separador Visão
(`modality-bridge-max-chars` em `ModalityBridgeVisionTab.tsx`) e ajusta qualquer
valor entre 1 e 99 para o limite mínimo de 100, mantendo um `0` explícito
inalterado — `0` é, por si só, um valor Zod válido
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), e não apenas
a predefinição de «não definido».

#### Cache de descrições (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL em memória para resultados de descrição, partilhado por todo o processo.
Chave = `sha256(imageRef + composedPrompt + configuredBridgeModel)` com
enquadramento por prefixo de comprimento (sem colisões entre limites de campos).
O componente do modelo é o modelo de ponte **configurado**, e não o modelo que
efetivamente respondeu — `callVisionModel` pode recorrer internamente a uma
alternativa, e a criação de chaves por tentativa fragmentaria a cache. As
descrições falhadas nunca são armazenadas em cache. Definições:

| Chave                           | Predefinição | Intervalo |
| ------------------------------- | ------------ | --------- |
| `modalityBridgeCacheEnabled`    | `true`       | —         |
| `modalityBridgeCacheTtlMinutes` | `60`         | 1–1440    |
| `modalityBridgeCacheMaxEntries` | `200`        | 10–5000   |

#### Normalização de imagens remotas (ciclo de descrição/obtenção em base64)

Quando a ponte obtém por si própria uma imagem **remota** — a chamada interna
de descrição da Anthropic e a conversão para base64 no formato de comunicação
do Claude (`ensureBase64ImagesForClaudeWire`), ambas através de
`fetchRemoteImageAsDataUri()` em `visionBridgeHelpers.ts` — o URI de dados
resultante é processado por `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) antes de ser incorporado no pedido ao
modelo de visão. As imagens de tamanho excessivo são reduzidas para uma
**aresta maior de 2048px** (correspondendo ao limite de redimensionamento que
a OpenAI/Anthropic já aplica do lado do servidor), o que reduz os bytes e a
latência do carregamento sem alterar aquilo que o modelo de visão vê. O
redimensionamento utiliza `sharp`, carregado através de importação dinâmica:
numa plataforma em que o respetivo binário nativo não consiga ser carregado,
`normalizeDataUri()` **nunca lança uma exceção** — recorre à passagem inalterada
dos bytes originais, para que o fluxo de descrição/conversão para base64
continue sempre a funcionar. Os bytes que não correspondam a uma imagem (uma
obtenção que não tenha devolvido uma imagem descodificável) também são
transmitidos sem alterações. Esta normalização está limitada às imagens que a
ponte obtém para a sua própria chamada interna — nunca é aplicada à carga útil
bruta do chamador transmitida sem alterações, em conformidade com o princípio
de mutação apenas mediante adesão explícita (Regra Rígida n.º 20).

#### Esquema das definições + migração

As novas chaves `modalityBridge*` são validadas pelo Zod em `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, o trio `modalityBridgeCache*` e o grupo
`modalityBridgeAudio*` utilizado pela Ponte de Áudio. A migração
`141_modality_bridge_settings.sql` copia os valores legados existentes de
`visionBridge*` para as novas chaves correspondentes (é idempotente e nunca
substitui um valor `modalityBridge*` definido por um operador); as chaves
legadas continuam a ser aceites como alternativa de leitura durante um ciclo
de lançamento.

#### Cabeçalho de transparência + estatísticas

As respostas transformadas por descrição incluem
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(criado por `buildModalityBridgeHeader()` em `modalityBridge/bridgeStats.ts`,
aplicado por `withModalityBridgeHeader()` em `src/sse/handlers/chatHelpers.ts`).
Os pedidos reencaminhados **não** recebem qualquer cabeçalho — a carga útil não
foi alterada e a mudança de modelo já é visível no campo `model` do corpo da
resposta.

`GET /api/modality-bridge/stats` (autenticação de gestão, mesmo nível que
`GET /api/settings`) devolve os contadores em memória por modalidade
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` para `vision`, `audio` e
`video`. `averageLatencyMs` utiliza `latencySamples`, e não todas as tentativas,
como denominador; uma operação sem medição de tempo não cria artificialmente
uma amostra de zero milissegundos. `bridged` mantém-se como o alias retrocompatível
para conversões bem-sucedidas; as tentativas falhadas não o incrementam.
Por definição, os contadores são repostos quando o processo é reiniciado
(telemetria, não contabilização).

#### Configuração do dashboard

A página dedicada do dashboard é
`/dashboard/settings/modality-bridge`. Os respetivos separadores `Vision`, `Audio`
e `Video`, acessíveis por URL, preservam os parâmetros de consulta ao alterar o
valor de `tab`. O separador Vision disponibiliza ativação, modo, seleção de modelo
(incluindo a predefinição automática), instruções adaptadas à tarefa, limites
avançados de tempo de espera/imagem/comprimento da descrição/cache, contadores
de execução e um pedido de exemplo protegido. O separador Audio também está
funcional: disponibiliza ativação, um seletor de modelos exclusivo para STT com
Auto, limites de tempo de espera/duração máxima do clip, contadores de áudio e
um teste de exemplo `input_audio`. O separador Video está funcional: apresenta
o estado de execução do FFmpeg/ffprobe — um de quatro estados explícitos da IU
(`unknown` enquanto a verificação está em curso ou não pôde ser concluída,
`restricted` num anfitrião de dashboard que não seja de loopback, onde a
verificação é ignorada no lado do cliente, `unavailable` depois de ser verificado
e confirmada a ausência, ou `available` com as versões do FFmpeg/ffprobe) —,
guarda os limites de ativação/modelo/fotogramas/vídeo/tempo de espera, filtra o
seletor de modelos para modelos compatíveis com visão e disponibiliza contadores
de vídeo.

O antigo cartão Vision Bridge nas definições de IA é uma ligação de
compatibilidade para a nova página; já não contém uma segunda cópia do
formulário. Media Providers também liga os fluxos de trabalho Image-to-Text e
Speech-to-Text aos separadores Modality Bridge correspondentes, sem remover o
playground Speech-to-Text existente.

**Contorno da admissão em auto-loop:** quando a chamada de descrição é
encaminhada através do próprio auto-loop `/v1` do OmniRoute (modelo de fornecedor
não padrão), o subpedido envia `x-omniroute-admission-bypass: internal` e é
autenticado com a credencial de auto-loop resolvida — o sentinela local
`sk_omniroute` no modo local ou a chave de ambiente `OMNIROUTE_API_KEY` /
`ROUTER_API_KEY` configurada pelo operador (#1350), para que as implementações
com `REQUIRE_API_KEY=true` continuem a poder executar a chamada de descrição.
O contorno só é aceite para essas credenciais exatas, pelo que os clientes
externos não podem utilizar o cabeçalho para ignorar a admissão.

As predefinições legadas encontram-se em
`src/shared/constants/visionBridgeDefaults.ts`; as novas predefinições de
modo/adaptação à tarefa/cache e o resolvedor de definições encontram-se em
`src/shared/constants/modalityBridgeDefaults.ts`. O mecanismo de proteção
disponibiliza uma opção de construtor `deps`, para que os testes possam injetar
implementações falsas de `getSettings` e `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Interceta pedidos de chat que contenham áudio antes de estes chegarem a um destino
que não seja reconhecido como capaz de aceitar entrada de áudio. Nunca reencaminha
o pedido de chat: as partes de áudio são transcritas através do endpoint multipart
existente compatível com OpenAI, e o modelo de chat escolhido prossegue com as
transcrições em texto.

Fluxo:

1. Resolve `supportsAudio` através de `getResolvedModelCapabilities()`. Os
   metadados explícitos do registo de fornecedores têm prioridade, seguidos
   pelos metadados estáticos do modelo e, depois, por `modalities_input`
   sincronizado. Uma lista de entradas declarada sem `audio` é `false`; a
   ausência de indícios sobre a capacidade mantém o valor `null`. Tanto `false`
   como `null` ativam a ponte conservadora, enquanto `true` a ignora.
2. Resolve as definições `modalityBridgeAudio*` e extrai partes de áudio de nível
   superior, passíveis de substituição, de todas as mensagens através do detetor
   partilhado `detectMediaParts()`. Os formatos de transmissão suportados são
   `input_audio` e `audio_url` do OpenAI, bem como
   `source.media_type: "audio/*"`. O áudio aninhado é detetado para efeitos de
   encaminhamento, mas não é removido pelo caminho de substituição. O trabalho
   é limitado por `modalityBridgeAudioMaxClips`; as partes posteriores permanecem
   inalteradas.
3. Respeita um `provider/model` configurado ou permite que
   `selectAudioBridgeModel()` percorra `AUDIO_TRANSCRIPTION_PROVIDERS` pela ordem
   estável do catálogo e selecione o primeiro modelo com uma credencial de
   fornecedor ativa e utilizável.
4. `callAudioTranscription()` converte áudio base64/data-URI num `file` multipart
   ou transfere um `audio_url` remoto através do mecanismo de proteção de saída
   apenas para endereços públicos, com fixação de DNS e um limite de 25 MB. Em
   seguida, envia através de POST o ficheiro e o modelo selecionado para o
   auto-loop local `/v1/audio/transcriptions`, autenticado com
   `resolveSelfLoopBearer()`. A rota de transcrição existente efetua a pesquisa
   normal de credenciais, o tratamento de períodos de espera/limites de taxa e
   o despacho para o fornecedor.
5. As chamadas bem-sucedidas substituem as respetivas partes por
   `[Audio N]: <transcript>`. As chamadas são executadas com
   `Promise.allSettled`: uma falha individual preserva a parte de áudio original
   (contrato #4012). Se todas as chamadas falharem e estiver comprovado que o
   destino tem `supportsAudio === false`, as partes passam a ser
   `[Audio N]: (unavailable — no STT provider connected)` (contrato #8430). Para
   um destino desconhecido (`null`), um resultado em que todas as chamadas falham
   permanece inalterado. Um destino comprovadamente apenas de texto, sem uma
   credencial STT utilizável, recebe a mesma indicação explícita sem que seja
   efetuada uma chamada de rede.

As transcrições bem-sucedidas utilizam a cache LRU/TTL do Modality Bridge comum
a todo o processo. A chave combina a referência de áudio, o rótulo estável de
operação `audio-transcription` e o modelo STT selecionado; as falhas nunca são
colocadas em cache. As tentativas de áudio atualizam os contadores partilhados
`bridged`, `cacheHits`, `failures` e `lastUsedAt`. As respostas transformadas
incluem
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; os pedidos
inalterados não recebem um segmento Audio Bridge.

As definições de execução são armazenadas na BD e validadas pelo Zod:

| Chave                         | Predefinição | Intervalo               |
| ----------------------------- | ------------ | ----------------------- |
| `modalityBridgeAudioEnabled`  | `true`       | —                       |
| `modalityBridgeAudioModel`    | `""`         | Automático ou ID de STT |
| `modalityBridgeAudioTimeout`  | `60000`      | 1000–300000             |
| `modalityBridgeAudioMaxClips` | `3`          | 1–10                    |

A cache partilhada continua a ser controlada por `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` e `modalityBridgeCacheMaxEntries`.

### Ponte de vídeo (`videoBridge.ts`, `videoBridgePipeline.ts`)

Interceta partes de vídeo de nível superior em `messages` das Chat Completions
e em `input` da API Responses antes de ser chamado um destino sem suporte nativo
de vídeo conhecido. Os formatos suportados são `input_video`, `video_url`,
`video_source`, URLs HTTPS e URIs de dados `data:video/*;base64,...`. Nomes de
ficheiros simples em texto não são tratados como vídeo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) é responsável pela travessia
do pedido, pela verificação de capacidade/política, pela agregação por pedido e
pela carga útil da resposta. O trabalho por vídeo — aquisição, cache do
resultado completo, descrição de uma sequência de fotogramas (que combina
qualquer transcrição de áudio declarada pelo chamador) e
métricas/cancelamento/limpeza por tentativa — fica oculto atrás de
`processVideoPart` em `videoBridgePipeline.ts`, chamado uma vez por cada parte
de vídeo dentro do ciclo de `preCall`. Esse módulo também define os limites
explícitos das portas `VideoMediaBrokerPort` (aquisição de bytes e extração de
fotogramas amostrados), `VideoAudioTranscriptionPort` (combinação de uma
transcrição de áudio declarada pelo chamador com as legendas amostradas) e
`VideoDrilldownPort` (o limite de persistência da análise detalhada de
fotogramas; ainda não está ligado a `processVideoPart` — atualmente, apenas a
rota separada `/api/modality-bridge/video/drilldown` escreve entradas de análise
detalhada).

O caminho público de pedidos `/v1` nunca importa nem invoca um subprocesso.
Os vídeos remotos são descarregados com um limite de 50 MiB; os vídeos inline
em base64 têm um limite conservador de 36 MiB descodificados por vídeo, para
que o envelope de modelo/mensagens/enquadramento possa permanecer dentro do
limite de admissão de 50 MiB para pedidos JSON públicos. O comprimento inline
e as estimativas do tamanho descodificado são verificados antes da alocação.
É obrigatório utilizar HTTPS no URL remoto inicial e em todos os
redirecionamentos, usando a proteção de saída existente, restrita a destinos
públicos e com fixação de DNS. Em seguida, os bytes atravessam exatamente o
limite interno do broker `POST /api/modality-bridge/video/extract`. Essa rota é
simultaneamente `LOCAL_ONLY` e `SPAWN_CAPABLE`, aceita apenas um pedido de
loopback fidedigno, autenticado por processo, e nunca aceita um URL, caminho do
sistema de ficheiros, executável ou lista de argumentos. O pipeline de tamanho
do corpo da API e o leitor incremental do corpo do processador impõem, de forma
independente, um limite de entrada de 50 MiB no broker. A respetiva fila
limitada executa uma extração de cada vez, permite quatro tarefas pendentes e
limita os dados de entrada pendentes a 100 MiB.

Dentro do broker, o `ffprobe` lê um ficheiro local privado; a lista fixa de
formatos permitidos exclui formatos de listas de reprodução e manifestos. Para
contentores permitidos da família MOV, as referências externas a dados MOV
permanecem desativadas por predefinição e o comando fixo não as ativa. Tanto o
`ffprobe` como o `ffmpeg` utilizam uma lista de protocolos permitidos restrita
a `file`, uma thread, matrizes fixas de argumentos, nenhuma shell e executáveis
resolvidos a partir de `PATH`. Os fluxos de imagens de capa anexadas não são
candidatos reproduzíveis. Todos os fluxos reproduzíveis têm de cumprir os
limites, sendo dada preferência a um fluxo predefinido explícito antes de se
recorrer, de forma determinística, ao índice mais baixo. Os vídeos estão
limitados a 600 segundos, 8 192 píxeis por dimensão e 33 554 432 píxeis de
origem. O FFmpeg recolhe 1–16 fotogramas JPEG nos pontos médios, reduz a
dimensão da aresta mais longa para, no máximo, 1 024 píxeis sem aumentar
entradas mais pequenas e nunca recebe um URL. Por predefinição, a amostragem é
`uniform`. As políticas opcionais `scene_aware` e a política experimental
`segment_aware` executam uma passagem fixa adicional do FFmpeg sobre o fluxo
local já validado, selecionam marcas temporais de cenas `showinfo` limitadas e
recorrem, de forma determinística, aos mesmos pontos médios uniformes em caso
de falha do detetor, tempo limite excedido, saída malformada ou conjunto de
candidatos vazio. O modo com reconhecimento de segmentos atribui amostras de
pontos médios proporcionalmente aos intervalos de cenas validados; as
evidências com reconhecimento de segmentos e o comportamento de contingência
são descritos abaixo. O limite estrito de 16 fotogramas é aplicado após a
seleção em todas as políticas. Quando um pedido com reconhecimento de cenas
tem um orçamento de apenas um fotograma, utiliza o ponto médio uniforme do
vídeo completo ativo ou da janela de foco e comunica
`policyEffective: uniform`: um único fotograma de cena selecionado não
consegue preservar ambas as extremidades temporais. Um chamador pode,
opcionalmente, fornecer uma janela de foco finita (`start`/`end` em segundos);
os limites são restringidos à duração do conteúdo multimédia, as janelas
invertidas ou não finitas são rejeitadas e todas as políticas de amostragem
são executadas apenas dentro do intervalo normalizado. A janela resultante é
incluída nos metadados de amostragem e no prefixo da descrição não fidedigna,
para que os modelos a jusante possam distinguir um excerto focado da linha
temporal completa.

O foco semântico das legendas é uma definição separada e explícita. O modo de
análise predefinido `full` preserva o pedido de fotogramas existente e nunca
encaminha o texto do pedido para o modelo de legendagem. No modo `focused`, a
ponte lê apenas o `text`/`input_text` não vazio mais recente, criado pelo
utilizador, a partir do mesmo contentor Chat ou Responses, normaliza-o para
NFC, agrega caracteres de controlo e espaços em branco e limita-o a 500 pontos
de código Unicode. Um resultado vazio recorre ao pedido `full` exato. Uma
indicação utilizável é serializada como JSON num bloco dedicado de contexto
não fidedigno do utilizador e apenas pode dar prioridade a detalhes
observáveis; não pode sobrepor-se ao aviso separado contra o seguimento de
instruções visíveis ou audíveis no conteúdo multimédia. O foco textual nunca
infere `start`/`end` nem altera o amostrador temporal.

#### Evidências estruturais de segmentos FU-07

`segment_aware` utiliza uma única passagem limitada de pré-análise sobre o fluxo
de vídeo local já validado. A cadeia fixa de filtros começa por reduzir a escala
para uma largura máxima de 320 píxeis, deteta mudanças de cena e intervalos
congelados e, em seguida, recolhe amostras a 1 fotograma por segundo para avaliar
a desfocagem, a luminância média e a informação espacial/temporal. A passagem
está limitada a 600 amostras estruturais, uma thread de FFmpeg/filtro, às mesmas
listas de permissões de contentores e do protocolo exclusivo `file`, a um limite
de 1 MiB para a saída do processo e a, no máximo, 30 segundos dentro do
cancelamento/prazo partilhado do broker. Nunca aceita um comando, filtro,
caminho ou URL proveniente do pedido.

Os valores estruturais constituem evidências de amostragem determinísticas, não
uma compreensão semântica do vídeo. Não inferem sujeitos, ações, legendas, fala
ou intenção do utilizador. Os limites de cenas e congelamentos formam segmentos;
a cobertura de congelamento, a desfocagem, a exposição, o detalhe espacial e a
mudança temporal apenas influenciam a forma como é distribuído o orçamento
existente de 1–16 fotogramas. Um segmento totalmente congelado fica limitado a
um fotograma, enquanto os segmentos não congelados competem pelo orçamento
restante. Quando o número de limites excede o número de fotogramas, é mantida
uma cobertura uniforme da linha temporal, para que cortes rápidos no início não
possam ocultar um segmento final longo. Os limites de cenas que se encontrem
dentro da resolução de análise de 1 segundo de um limite de congelamento são
agregados.

Filtros em falta, evidências malformadas/vazias, um erro do detetor ou o tempo
limite da pré-análise limitada resultam na utilização da política exata de
pontos médios uniformes. Um cancelamento pelo chamador ou o prazo do broker não
resultam nessa recuperação: terminam o subprocesso em curso, impedem a posterior
extração de fotogramas e a árvore temporária privada é removida em `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` gera fixtures reais e determinísticas
do FFmpeg para avaliar a redução de chamadas de legendagem após a
desduplicação, a distribuição do orçamento em movimento denso, as evidências de
desfocagem/exposição/SI-TI, cortes rápidos com uma cauda longa e falsos positivos
causados por transições graduais. Regista o tempo decorrido da pré-análise e,
quando `/usr/bin/time` está disponível, a CPU do processo-filho e o pico de RSS.
As respetivas verificações de qualidade são apenas oráculos estruturais. A
qualidade real do modelo de legendagem permanece como `HOLD`, porque este
harness não dispõe de um endpoint autorizado nem de um avaliador fixo. As
poupanças monetárias também permanecem como `HOLD`, a menos que
`--caption-cost-per-call-usd` forneça uma estimativa positiva e explícita do
custo por chamada; o script nunca inventa nenhum destes resultados.

Cada fotograma está limitado a 4 MiB, o conjunto de todos os fotogramas em bruto
a 23 MiB e a resposta serializada do broker a 32 MiB. Um diretório temporário
privado é removido em `finally`. O OmniRoute não inclui o FFmpeg nem aceita um
caminho personalizado para o executável. Antes da legendagem, a ponte aplica
uma passagem conservadora de desduplicação visual: cada JPEG é reduzido a um
buffer de 16×16 em escala de cinzentos e comparado apenas com o último fotograma
retido. Para um orçamento de legendagem solicitado superior a um fotograma, a
extração fornece um conjunto limitado de candidatos de até duas vezes esse
orçamento e nunca superior a 16 fotogramas. O limite solicitado só é aplicado
depois da desduplicação, sendo preservados o primeiro e o último candidatos
selecionados durante a redução final quando o orçamento é de, pelo menos, dois.
A política com versão
`grayscale-16x16-mean-cells-v2` utiliza o maior valor entre a diferença média de
luminância e a proporção de células da miniatura cuja diferença normalizada é,
pelo menos, 0,05. O limiar de duplicação é a constante 0,04, escolhida pela sua
previsibilidade em vez de ser disponibilizada como uma definição em tempo de
execução. Este sinal secundário de
alto contraste preserva movimentos pequenos e alterações de texto visível que
uma comparação baseada apenas na média pode ocultar. Os erros do comparador ou
do descodificador resultam na manutenção da cobertura. Os metadados de saída
distinguem os candidatos extraídos, os fotogramas utilizados com êxito e os
duplicados visuais removidos.

Uma parte de vídeo explicitamente assinalada pode solicitar uma folha de
contacto com marcas temporais. A ponte cria uma grelha JPEG com, no máximo, 4
colunas e 16 fotogramas. Cada célula de 512 píxeis grava a marca temporal da sua
origem numa faixa inferior de alto contraste, enquanto as mesmas marcas
temporais permanecem nos metadados textuais para associação e auditoria a
jusante. O JPEG completo continua limitado a 32 MiB. Se `sharp` não conseguir
descodificar ou compor a grelha, a ponte reverte para os fotogramas JPEG
individuais; um cancelamento pelo cliente continua a propagar-se através da
operação da folha.

As evidências de promoção são deliberadamente separadas do microbenchmark de
composição sintética. `scripts/perf/video-bridge-contact-sheet-eval.ts` define
um harness A/B com versão de esquema para modelos de visão reais compatíveis com
a OpenAI. Mede os tokens comunicados pelo fornecedor, a latência total
(incluindo a composição da folha), o número de chamadas ao modelo e a retenção
de factos definida no manifesto. As respostas em bruto do modelo não são
gravadas no relatório; apenas são retidos os resumos SHA-256 e os IDs dos factos
correspondentes. O harness não efetua qualquer chamada de rede ou a um modelo
pago, a menos que `--execute-real` seja indicado e `--model`,
`OMNIROUTE_BASE_URL` e `OMNIROUTE_API_KEY` estejam configurados. Sem essa
execução real explícita, o veredito legível por máquina permanece como `HOLD`;
as medições sintéticas do payload/número de chamadas, por si só, não constituem
evidências de promoção.

Os chamadores podem anexar um array opcional `transcript.cues` a uma parte de
vídeo suportada quando já possuem texto alinhado. Cada cue tem de incluir
`text`, um intervalo finito `start`/`end` dentro da duração detetada e uma
`source` incluída na lista de permissões (`client`, `embedded` ou
`audio-bridge`); `confidence` assume por predefinição o valor `1` e tem de
permanecer entre `0` e `1`. As cues exatamente duplicadas são agregadas. O
OmniRoute nunca inicia uma transcrição a partir destes metadados: as cues
validadas são copiadas para o resultado descrito com a origem, a confiança e o
intervalo, e são apresentadas como observações não fidedignas juntamente com as
legendas dos fotogramas. Texto inválido, fora do intervalo ou sem proveniência é
rejeitado em vez de ser misturado no fluxo de legendas. Ambos os canais de
transcrição do corpo do pedido normalizam a proveniência fornecida para
`client`, incluindo etiquetas `embedded` ou `audio-bridge` autodeclaradas.
Apenas um adaptador controlado pelo servidor pode atribuir essas etiquetas
fidedignas através do argumento exclusivo de código `trustedSource`; um campo
JSON do pedido não consegue chegar a esse argumento. O texto da transcrição
continua a ser conteúdo não fidedigno derivado dos conteúdos multimédia,
independentemente da respetiva proveniência, e nunca pode determinar a
autorização.

Um chamador avançado pode fornecer uma faixa `audioTranscript` para o mesmo vídeo;
esta é tratada como texto fornecido pelo cliente, não como prova de transcrição pelo servidor.
O ponto de fusão executa as observações visuais e de áudio sob
um único prazo e sinal de cancelamento, ordena-as numa linha temporal comum, agrega
duplicados exatos e comunica um resultado parcial quando apenas um dos lados é bem-sucedido.
Um `audioTranscript` inválido degrada-se para esse resultado parcial — a descrição
visual é mantida e o ramo de áudio regista um código de falha sanitizado —
em vez de provocar a falha de todo o vídeo. A disponibilidade por ramo, o indicador de resultado parcial
e os códigos de falha sanitizados são preservados no resultado descrito, nos
metadados do mecanismo de proteção (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), nos metadados da cache de resultados e nos contadores
de fusão da ponte. O caminho predefinido da Video Bridge não invoca conversão de voz em texto
nem transfere uma segunda cópia do conteúdo multimédia; sem essa faixa explícita, permanece
apenas como vídeo.

**Retenção de transcrições (#12150 P1).** Isto aplica-se automaticamente sempre que a
Video Bridge (que é, por si só, opcional) renderiza um apontamento de transcrição — não existe um
indicador de retenção separado. Quando um pedido renderiza qualquer apontamento de transcrição (um
`transcript` declarado pelo chamador ou um `audioTranscript` fundido), o mecanismo de proteção marca-o como
`videoBridgeObserved` e produz uma cópia expurgada da descrição do vídeo —
uma renderização idêntica na qual o corpo de texto livre de cada apontamento é substituído por
`[redacted-video-transcript]`, criada através da substituição do campo estruturado do apontamento
antes de a cadeia ser montada (nunca através da análise do texto consolidado, pelo que nenhum
conteúdo do apontamento — malicioso ou normal, incluindo corpos que contenham `]`, como
`[inaudible]`/`[music]` — pode subsistir). O corpo do pedido no registo de chamadas persistido substitui
cada parte de texto derivada do vídeo por essa cópia expurgada, com correspondência por
igualdade de conteúdo; a âncora `fullText` é novamente lida a partir da carga útil concluída do mecanismo de proteção
anterior à chamada, pelo que a correspondência continua a ser bem-sucedida depois de mecanismos de proteção posteriores na cadeia
(os mascaradores de PII e credenciais, prioridades 10/95) reescreverem diretamente o texto da descrição e
de a injeção de instruções do sistema/transferência de contexto/memória remodelar a matriz de mensagens. O
corpo enviado a montante para o modelo permanece inalterado. Um pedido observado também não preenche
qualquer Memory duradoura (a extração derivada tanto do pedido como da resposta é ignorada),
pelo que a própria resposta do modelo não pode reproduzir texto da transcrição na Memory.

**Campos de vídeo em bruto (#12430).** Quando a ponte está ativada e o suporte nativo de vídeo é desconhecido ou inexistente, os campos `transcript`/`audioTranscript` definidos também ativam `videoBridgeObserved`, mesmo após uma falha de descrição ou um limite `maxVideos`. `null` e cadeias vazias contam; campos ausentes e metadados que não sejam de vídeo não contam. As cópias retidas expurgam estes campos ou omitem o pedido, e as caches/Memory são ignoradas.

Nesses caminhos de contingência, os apontamentos válidos do chamador tornam-se partes `text`/`input_text`
suportadas, em vez de campos não padronizados do fornecedor. Ambas as faixas fornecidas no pedido
permanecem observações `client` não fidedignas, com um aviso explícito de que o vídeo
não foi descrito e os carimbos de data/hora não foram verificados em relação ao conteúdo multimédia. Os limites existentes
de 256 apontamentos/64 KiB no total e por apontamento aplicam-se às duas faixas em conjunto;
os carimbos de data/hora têm de respeitar o limite máximo de 600 segundos do intermediário e qualquer janela de foco
fornecida. As faixas inválidas são descartadas, não sendo encaminhadas como texto arbitrário; uma
faixa irmã válida pode continuar a ser utilizada, salvo se o orçamento combinado for excedido. Campos nulos/vazios
não adicionam texto. Este mecanismo de contingência não adiciona qualquer obtenção ou transcrição de conteúdo multimédia.
Os campos de extensão da transcrição são removidos do contentor de vídeo de contingência e dos respetivos
objetos `video_url`/`source`. A lista de permissões da interface OpenAI permanece restrita; os contentores de vídeo
com suporte nativo desconhecido continuam disponíveis e os destinos que se sabe aceitarem apenas texto mantêm marcadores seguros.
As cópias expurgadas estruturadas protegem o texto de transcrição anexado, enquanto o
pedido original pertencente ao chamador permanece inalterado. Os destinos com suporte nativo e as
pontes desativadas mantêm o comportamento de omissão existente.

As cópias retidas adicionais utilizam o mesmo sinal de pedido observado. O instantâneo do
pedido do cliente em bruto anterior ao mecanismo de proteção, o pedido pendente em memória e o registo inicial
de pedidos rejeitados substituem estruturalmente os campos de transcrição nas partes de vídeo;
os pedidos de cadeia sintetizados pelas fases do pipeline e pela transferência de contexto são expurgados
no destino do corpo do pedido persistido. O marcador `video_content_removed` persistido
faz com que a continuação por `previous_response_id` falhe de forma segura, em vez de reconstruir
texto que foi intencionalmente descartado. Se um pedido observado perder a respetiva
cópia expurgada por parte antes do registo, ou se até uma de várias cópias de vídeo
não encontrar correspondência após mutações posteriores do pedido, o corpo do pedido retido é
inteiramente omitido, em vez de se reter uma transcrição apenas parcialmente expurgada.

Para um pedido observado, uma resposta do modelo pode citar qualquer parte da
transcrição sem um limite de apontamento estruturado. Por conseguinte, o respetivo `responseBody`
no registo de chamadas persistido é substituído por um marcador de omissão; o artefacto detalhado
do pipeline (que pode incluir corpos do fornecedor/cliente a montante e fragmentos de transmissão)
não é retido. As caches semântica, de idempotência e de repetição do raciocínio ignoram
leituras e escritas para esse pedido. O pedido ao fornecedor e a resposta visível para o cliente
permanecem inalterados. Os bytes iniciais de manutenção de ligação são removidos do buffer temporário
quando o artefacto detalhado é omitido. O aviso de EventStream malformado do Kiro
comunica apenas a contagem de bytes da carga útil, nunca o respetivo conteúdo nem o erro em bruto
do analisador JSON.
Isto não afirma que todos os diagnósticos não relacionados de fornecedores/plugins tenham sido
auditados; a revisão mais abrangente dos destinos de retenção é acompanhada em #11658.

O ciclo de vida interno de `/api/modality-bridge/video/drilldown` constitui uma infraestrutura de cache separada, autenticada por loopback/token. Cada operação exige também um ID principal opaco canónico. Antes de um chamador de produção ser ativado, este tem de derivar esse ID do inquilino autenticado e nunca deve reencaminhar um valor selecionado pelo cliente. As chaves de cache associam esse principal a IDs canónicos de sessão e de referência de vídeo, armazenam apenas as respetivas chaves derivadas por SHA-256 e restringem tanto as leituras como a eliminação ao mesmo principal. A cache armazena, no máximo, 16 fotogramas JPEG derivados por entrada, expira-os após dez minutos e suporta leituras limitadas por `start`/`end` ou a eliminação explícita da sessão.

Cada principal está limitado a 16 entradas e 64 MiB de dados JPEG canónicos. Esses limites são independentes do limite global de 64 entradas/256 MiB: a pressão da quota de um principal remove apenas as entradas utilizadas menos recentemente desse principal antes de ser considerada a remoção LRU global. As entradas expiradas são removidas da contabilização do principal e da contabilização global durante a atividade da cache, enquanto um cancelamento ou uma falha de validação não confirma uma substituição parcial.

A cache rejeita Base64 não canónico, preenchimento excessivo, conteúdo multimédia que não seja JPEG, JPEGs malformados ou truncados e JPEGs que produzam um aviso durante uma descodificação limitada da imagem completa com `sharp`. Cada imagem aceite é recodificada como JPEG canónico, sendo a largura e a altura derivadas dos bytes descodificados em vez de se confiar nos campos fornecidos pelo chamador, e quaisquer bytes poliglotas finais são descartados em vez de serem retidos. Apenas o buffer comprimido canónico e limitado é contabilizado em ambas as quotas. O limite da transmissão JSON inclui a sobrecarga de Base64 para o limite máximo de 32 MiB da entrada descodificada. Cada derivação armazenada regista o formato/resolução JPEG validados, a política de amostragem, a versão da derivação, a hora de criação, o hash de conteúdo calculado pelo servidor, a referência principal com hash e o hash do conteúdo principal fornecido pelo chamador fidedigno. O cancelamento é verificado entre as fases assíncronas de descodificação/hash, antes da confirmação atómica na cache.

Esta tranche ainda não liga um produtor de produção à rota nem fornece seleção de variantes com várias resoluções. Por conseguinte, o caminho transparente de pedidos da Ponte de Vídeo não incorre em trabalho adicional, enquanto a derivação do principal associada ao inquilino e o ciclo de vida completo de várias resoluções FU-08 continuam a ser trabalho de seguimento explícito, em vez de serem documentados como comportamento concluído.

Os fotogramas são legendados sequencialmente com o modelo de Vídeo configurado. Uma substituição de Vídeo vazia herda a definição de Visão; se ambas estiverem vazias, o encaminhador automático de Visão seleciona o modelo efetivo com capacidade de visão. As legendas bem-sucedidas substituem a parte original por um prefixo `[Video description:` estável, que também assinala o texto como uma observação não fidedigna derivada de conteúdo multimédia e indica aos modelos subsequentes que não sigam instruções encontradas no conteúdo multimédia. As chaves da cache de legendas de fotogramas incluem os bytes JPEG, o pedido, a marca temporal e o modelo efetivo; apenas as legendas bem-sucedidas são armazenadas em cache. As entradas de cache retêm o modelo produtor efetivamente bem-sucedido, incluindo um modelo de contingência; a ponte comunica `mixed` quando diferentes fotogramas foram produzidos por modelos diferentes. Um acerto na cache reutiliza essa identidade do produtor, em vez de a voltar a identificar como o plano de encaminhamento solicitado. A cache de resultados do vídeo completo é indexada por todos os dados de entrada que alteram o resultado — pedido, modelo efetivo, política de amostragem, número de fotogramas, modo de análise semântica, impressão digital SHA-256 da indicação de foco normalizada, janela de foco, `transcript`, `audioTranscript` e o sinalizador da folha de contactos — pelo que a alteração de qualquer uma dessas dimensões resulta numa falha de cache, nunca numa reutilização obsoleta. A versão, o limiar e o número limitado de fotogramas candidatos da política de desduplicação visual também são explícitos na chave e nos metadados da cache de resultados; assim, uma alteração de política não pode reutilizar uma descrição obsoleta do vídeo completo. Os metadados v4 da cache de resultados mantêm o modo e a impressão digital, mas nunca a tarefa original do utilizador. Os metadados das medidas de proteção comunicam tanto o modo de análise solicitado como o efetivo; um modo `focused` solicitado sem texto de utilizador utilizável é comunicado como sendo efetivamente `full`.

A medida de proteção extrai todas as partes de vídeo suportadas, mas não descreve mais do que `modalityBridgeVideoMaxVideos`. Para um destino comprovadamente com `supportsVideo === false`, os vídeos que falhem ou excedam o limite tornam-se marcadores explícitos de texto seguro, para que nenhum vídeo em bruto subsista. Quando a capacidade é desconhecida, essas partes mantêm o respetivo suporte de vídeo; qualquer transcrição de contingência segue a conversão limitada para texto indicada acima. Os destinos com `supportsVideo === true` ignoram a ponte. O sinal de cancelamento do pedido do cliente propaga-se pela transferência, fila do mediador, subprocessos e chamadas de legendagem; os cancelamentos interrompem o processamento entre vídeos e nunca recorrem de forma permissiva ao conteúdo multimédia em bruto.

As definições de tempo de execução são suportadas pela base de dados e validadas pelo Zod:

| Chave                               | Predefinição | Intervalo / comportamento                                                                                          |
| ----------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`      | Runtime opcional, ativação explícita                                                                               |
| `modalityBridgeVideoAnalysisMode`   | `"full"`     | `full` preserva legendas genéricas; `focused` utiliza contexto limitado e não fidedigno do utilizador mais recente |
| `modalityBridgeVideoModel`          | `""`         | Herda o modelo do Vision Bridge                                                                                    |
| `modalityBridgeVideoFrameCount`     | `8`          | 1–16                                                                                                               |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`  | `uniform`, `scene_aware` ou `segment_aware` proporcional; uma falha do detetor recorre a `uniform`                 |
| `modalityBridgeVideoMaxVideos`      | `1`          | 1–4                                                                                                                |
| `modalityBridgeVideoTimeout`        | `120000`     | 1000–120000 ms                                                                                                     |

Os valores legados persistidos do tempo limite de Vídeo acima de 120 segundos são limitados ao
prazo do broker; novas gravações de definições acima desse limite são rejeitadas.
`GET /api/modality-bridge/video/runtime` exige uma origem loopback
fidedigna e carimbada antes da autenticação ou da sondagem do runtime e, depois, exige
autenticação de gestão. Devolve apenas `available`, versões higienizadas do FFmpeg/ffprobe e um motivo
fixo quando o runtime não está disponível. O endpoint interno de extração não é
uma API pública de carregamento: a saturação da fila devolve `503` juntamente com `Retry-After`, uma
desligação do chamador devolve `499` e o prazo fixo do broker devolve `504`. As respostas convertidas adicionam
`video->text;model=<visionModel>;parts=<videos>` ao cabeçalho central
`x-omniroute-modality-bridge` sem remover os segmentos de Visão ou Áudio.

### Mascarador de PII (`piiMasker.ts`)

É executado em **ambas** as fases.

- **`preCall`** clona a carga útil, percorre `system`, `messages`, `input` e
  `prompt` (incluindo itens de texto simples) e aplica `processPII()` (de
  `@/shared/utils/inputSanitizer`) aos campos `content`/`text` de texto. Quando
  `PII_REDACTION_ENABLED=true`, as PII detetadas são ocultadas na carga útil
  de saída. Isto é independente de `INPUT_SANITIZER_MODE` (que controla apenas
  a política de injeção de prompts). Quando a ocultação está desativada, a chamada regista as
  contagens de deteções sem reescrever o conteúdo.
- **`postCall`** clona profundamente a resposta, executa `sanitizePIIResponse()` juntamente com
  o mascarador do formato da Responses API (`maskResponsesOutput` — abrange
  `output_text` e `output[].content[].text`). Se ocorrer alguma ocultação, a
  resposta modificada substitui a original.

A barreira de proteção nunca bloqueia; apenas anota (`meta.detections`,
`meta.redacted`) ou reescreve.

### Injeção de Prompts (`promptInjection.ts`)

Deteta estruturas adversariais em conteúdo fornecido pelo utilizador e aplica a
política configurada. O comportamento é determinado por variáveis de ambiente e opções do
construtor:

| Definição          | Variável de ambiente                                                                                 | Predefinição | Efeito                                                                                                                                                                                                   |
| ------------------ | ---------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ativado            | `INPUT_SANITIZER_ENABLED`                                                                            | `true`       | Quando é `false`, a barreira de proteção termina imediatamente.                                                                                                                                          |
| Modo               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                      | `warn`       | Política de injeção: `block`, `warn` ou `log`. (`redact` é aceite por retrocompatibilidade, mas **não** remove texto de injeção; a reescrita de PII do pedido é controlada por `PII_REDACTION_ENABLED`.) |
| Limiar de bloqueio | Opção `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`       | Gravidade mínima necessária para bloquear. A gravidade média destina-se apenas a observação por predefinição.                                                                                            |

**Precedência do modo** (`getMode`): `options.mode` do chamador →
substituição por **feature flag da BD** de `INJECTION_GUARD_MODE` (Painel → Definições →
Feature Flags) → variável de ambiente `INJECTION_GUARD_MODE` → variável de ambiente `INPUT_SANITIZER_MODE` →
`warn`. Assim, uma substituição no painel prevalece sobre as variáveis de ambiente, pelo que a IU de Feature
Flags controla a barreira de proteção em execução em tempo real (sem reiniciar). A leitura da BD é tolerante a falhas:
se ocorrer um erro, a barreira de proteção recorre ao comportamento baseado nas variáveis de ambiente e, quando não está
definida qualquer substituição, o comportamento é idêntico à resolução apenas por variáveis de ambiente.

Fontes de deteção:

1. `sanitizeRequest()` de `@/shared/utils/inputSanitizer` (conjunto partilhado de detetores
   utilizado noutras partes do pipeline).
2. `DEFAULT_GUARD_PATTERNS` incorporados (atualmente `system_override_inline` e
   `markdown_system_block`, ambos com gravidade `high`).
3. `customPatterns` opcionais passados através das opções do construtor (strings, expressões regulares
   ou registos `{ name, pattern, severity }`).

Quando `mode === "block"` **e** pelo menos uma deteção atinge o limiar de
gravidade, `preCall` devolve `{ block: true, message: "Request rejected:
suspicious content detected" }`. Nos modos `warn`/`log`, a barreira de proteção regista o evento, mas
permite a chamada. O auxiliar partilhado `evaluatePromptInjection()` também é exportado
para os chamadores que necessitem de avaliar prompts sem passar pelo registo.

**Limite de análise (v3.8.20):** o detetor inspeciona apenas os **primeiros 16 KB** do
texto combinado do prompt — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) em
`src/shared/utils/inputSanitizer.ts`. Tanto `detectInjection()` como
`evaluatePromptInjection()` executam `slice(0, MAX_INJECTION_SCAN_BYTES)` antes de percorrerem
os padrões. As diretivas de injeção encontram-se perto do início de uma entrada, pelo que isto
limita a utilização de CPU/GC por expressões regulares em payloads com várias centenas de KB sem enfraquecer a deteção (cf.
#3932, #4041).

### Mascarador de credenciais (`credentialMasker.ts`)

É executado em **ambas** as fases, em último lugar na cadeia predefinida (prioridade `95`). Oculta
padrões conhecidos de chaves de API/tokens secretos no payload de saída (conteúdo da
mensagem, argumentos de chamadas de ferramentas, resultados de ferramentas) **e** na resposta do fornecedor, para que uma
credencial colada num prompt (ou devolvida por um resultado de ferramenta) não seja exposta
ao fornecedor a montante nem devolvida ao cliente.

- **Apenas por ativação explícita**, seguindo a mesma convenção da ocultação de PII (adjacente à Regra Rígida #20):
  está desativado, exceto se `settings.credentialRedactionEnabled === true` **ou**
  `CREDENTIAL_REDACTION_ENABLED=true`. Quando está desativado, a barreira de proteção não efetua qualquer ação —
  nunca bloqueia nem reescreve.
- `redactCredentials()` percorre toda a árvore do payload/resposta (`walkValue()`,
  protegida contra poluição de protótipos e contra ciclos através de `WeakSet`) e substitui as correspondências por
  um marcador de posição `[REDACTED:<type>]`, clonando apenas os ramos que foram efetivamente
  alterados.
- `CREDENTIAL_PATTERNS` abrange chaves de fornecedores de LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokens de VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), chaves de pagamento (Stripe, Square), chaves de
  serviços de cloud (chave de acesso AWS, Twilio, SendGrid, Mailgun), chaves privadas/JWTs,
  cadeias de ligação que contêm credenciais (`mongodb://user:pass@...`, etc.) e
  um padrão genérico de valor de cabeçalho `Authorization`/`x-api-key`/`api-key`/`apikey`.
  As chaves com formato de cabeçalho (`authorization`, `x-api-key`, `api-key`,
  `apikey`) são ocultadas estruturalmente (apenas o valor, preservando prefixos de esquema como
  `Bearer `/`Basic `), em vez de através da expressão regular genérica de texto.
- A barreira de proteção nunca bloqueia; apenas reescreve (`modifiedPayload` /
  `modifiedResponse`) e adiciona anotações (`meta.credentialsRedacted`, `meta.count`).

Proteção contra regressões: `tests/unit/credential-masker-guardrail.test.ts`.

## Contrato Base (`base.ts`)

```typescript
class BaseGuardrail {
  enabled: boolean;
  name: string;
  priority: number;

  constructor(name: string, options?: { enabled?: boolean; priority?: number });

  async preCall(payload: unknown, context: GuardrailContext): Promise<GuardrailResult | void>;

  async postCall(response: unknown, context: GuardrailContext): Promise<GuardrailResult | void>;
}

interface GuardrailResult<TValue = unknown> {
  block?: boolean; // true interrompe imediatamente a cadeia
  message?: string; // apresentada em caso de bloqueio
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // devolvido por preCall para reescrever o pedido
  modifiedResponse?: TValue; // devolvido por postCall para reescrever a resposta
}

interface GuardrailContext {
  apiKeyInfo?: Record<string, unknown> | null;
  disabledGuardrails?: string[] | null;
  endpoint?: string | null;
  headers?: Headers | Record<string, unknown> | null;
  log?: GuardrailLog | Console | null;
  method?: string | null;
  model?: string | null;
  provider?: string | null;
  signal?: AbortSignal;
  sourceFormat?: string | null;
  stream?: boolean;
  targetFormat?: string | null;
}
```

Uma proteção assinala «sem alterações» devolvendo `void`, `{}` ou
`{ block: false }`. Devolver um `modifiedPayload`/`modifiedResponse` substitui
o valor que percorre a cadeia para as proteções subsequentes.
`signal?: AbortSignal` transmite o ciclo de vida do chamador às proteções. O cancelamento de um pedido é a exceção deliberada de abertura em caso de falha: as pontes multimédia interrompem o trabalho e efetuam a limpeza sem restaurar os dados multimédia em bruto para um destino que se sabe não os suportar.

## Registo (`registry.ts`)

A instância única `guardrailRegistry` expõe:

- `register(guardrail)` — adiciona uma proteção (ou substitui-a pelo nome normalizado) e
  reordena por `priority` ascendente.
- `clear()` / `list()` — auxiliares administrativos.
- `runPreCallHooks(payload, context)` — percorre as proteções ativas, encaminha o
  payload através de `modifiedPayload` e para no primeiro `block: true`.
- `runPostCallHooks(response, context)` — o mesmo fluxo no lado da resposta.
- `resetGuardrailsForTests({ registerDefaults })` — limpa o estado e, opcionalmente,
  regista novamente as predefinições para garantir um isolamento limpo dos testes.

Ambos os executores devolvem `{ blocked, payload|response, results, guardrail?, message? }`,
em que `results` é um array de registos `GuardrailExecutionResult` que incluem
os campos `blocked`, `skipped`, `modified`, `error` e `meta` por proteção,
úteis para rastreio.

### Desativar Proteções por Pedido

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` agrega uma
lista sem duplicados dos nomes das proteções que devem ser ignoradas no pedido
atual. Origens (todas opcionais e combinadas):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` no corpo do pedido (nível superior)
- `metadata.disabledGuardrails` no corpo do pedido
- Cabeçalho `x-omniroute-disabled-guardrails` (ou o antigo
  `x-disabled-guardrails`)

Os valores podem ser arrays de strings ou uma string separada por vírgulas; os nomes são
normalizados para minúsculas em kebab-case (`pii_masker` → `pii-masker`). O resultado
é transmitido através de `context.disabledGuardrails` para o registo, que ignora
as proteções correspondentes (`skipped: true` em `results`).

## Ordem de execução

Para cada pedido que passa por `src/sse/handlers/chat.ts` e
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` cria a lista de exclusão a partir da chave de API, do corpo
   e dos cabeçalhos.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` executa os mecanismos de proteção por ordem
   crescente de prioridade:
   - Os mecanismos de proteção desativados são registados como `skipped`.
   - O `preCall` de cada mecanismo de proteção pode reescrever a carga útil através de `modifiedPayload`.
   - O primeiro `block: true` interrompe a cadeia e o processador devolve
     uma resposta de rejeição do mecanismo de proteção.
3. A carga útil (potencialmente reescrita) segue para o encaminhamento combinado e para o envio
   ao serviço a montante.
4. Depois de a resposta ser preparada, `guardrailRegistry.runPostCallHooks(...)`
   executa a mesma cadeia na resposta. Neste caso, `block: true` descarta a resposta
   do serviço a montante.

Os mecanismos de proteção que geram exceções são registados com `error: <message>` e registados no log através de
`logger.warn`, mas a cadeia prossegue — uma conceção de falha permissiva.

## Configuração

Variáveis de ambiente lidas pelos mecanismos de proteção integrados:

| Variável                              | Utilizada por            | Efeito                                                                                                                                               |
| ------------------------------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`       | Defina como `false` para desativar completamente a deteção.                                                                                          |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`       | Política de injeção: `warn`, `block` ou `log`. O valor legado `redact` não reescreve o texto da injeção.                                             |
| `INJECTION_GUARD_MODE`                | `prompt-injection`       | Modo do mecanismo de proteção contra injeção; é também um sinalizador de funcionalidade da BD que **substitui** as variáveis de ambiente (BD > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`       | Gravidade mínima que `MODE=block` rejeita: `high` (predefinição), `medium` ou `low`.                                                                 |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`       | Alias legado de `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`             | Quando definido como `true`, as PII do pedido são ocultadas (independentemente do modo de injeção).                                                  |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (a jusante) | Controla o comportamento do ocultador no lado da resposta.                                                                                           |

Os mecanismos de proteção do Modality Bridge leem a configuração em tempo de execução a partir do armazenamento
de definições suportado pela BD (`getSettings()`), e não das variáveis de ambiente. As chaves principais da visão são
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` e
`modalityBridgeCacheMaxEntries`. As chaves legadas
`visionBridge*` são aceites apenas como a alternativa de leitura documentada durante um ciclo;
as escritas efetuadas pelo painel utilizam as chaves principais. As predefinições e o resolvedor
alternativo encontram-se em `src/shared/constants/modalityBridgeDefaults.ts`, sendo as constantes
legadas mantidas em `src/shared/constants/visionBridgeDefaults.ts`.

O áudio utiliza `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` e `modalityBridgeAudioMaxClips`, além das definições
`modalityBridgeCache*` partilhadas. O áudio não dispõe de uma alternativa baseada em chaves legadas, uma vez que estas
chaves foram introduzidas com o esquema do Modality Bridge.

O vídeo utiliza `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` e
`modalityBridgeVideoTimeout`, além das definições `modalityBridgeCache*` partilhadas.
Está desativado por predefinição porque o FFmpeg/ffprobe são dependências operacionais
opcionais e a legendagem de fotogramas acrescenta latência e custos de modelo.

## Mecanismos de proteção personalizados

```typescript
import { BaseGuardrail, guardrailRegistry } from "@/lib/guardrails";

class BudgetGuardrail extends BaseGuardrail {
  constructor() {
    super("budget", { priority: 50 });
  }

  async preCall(payload, ctx) {
    if (ctx.apiKeyInfo?.budgetExceeded) {
      return { block: true, message: "Daily budget exceeded" };
    }
    return { block: false };
  }
}

guardrailRegistry.register(new BudgetGuardrail());
```

Passos:

1. Crie `src/lib/guardrails/myGuardrail.ts` como uma extensão de `BaseGuardrail`.
2. Implemente `preCall` e/ou `postCall`.
3. Registe durante a importação (através de `registerDefaultGuardrails`) ou
   chame `guardrailRegistry.register(...)` em tempo de execução — o registo substitui
   qualquer mecanismo de proteção anterior com o mesmo nome normalizado.
4. Adicione testes em `tests/unit/` (exemplos existentes:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testes

Utilize `resetGuardrailsForTests()` entre testes para começar a partir de um estado conhecido.
Passe `{ registerDefaults: false }` para começar com um registo vazio e
registar apenas os mecanismos de proteção em teste. O Vision Bridge aceita injeção de
dependências (`deps.getSettings`, `deps.callVisionModel`); o Audio Bridge disponibiliza os
pontos de integração equivalentes para definições, capacidades, seleção do modelo STT, verificações
de credenciais e transcrição. Desta forma, os testes podem exercitar ambos os fluxos sem acesso à
base de dados ou à rede.

## Consulte também

- `src/lib/guardrails/` — implementação
- `src/shared/utils/inputSanitizer.ts` — detetor partilhado que suporta a
  deteção de injeção de prompts e a ocultação de PII
- `src/shared/constants/visionBridgeDefaults.ts` — predefinições do Vision Bridge e
  lista de modelos com utilização obrigatória do bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — predefinições partilhadas de execução do Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — camada ortogonal (circuit breaker, períodos de espera)
- `docs/reference/ENVIRONMENT.md` — referência completa das variáveis de ambiente

## Cobertura de rotas e red team do mecanismo contra injeção (Fase 8 · Bloco D)

O mecanismo contra injeção (`createInjectionGuard` / `withInjectionGuard`) abrange todas as rotas
que aceitam prompts do utilizador. Respeita `INJECTION_GUARD_MODE` (predefinição `warn` = apenas registo;
`block` = devolve HTTP 400 `SECURITY_001`).

| Tipo              | Rotas                                                                                                                                                | Modo predefinido |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| Texto (existente) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn             |
| Generativo        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn             |
| Dados             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn             |

A extração de texto (`extractMessageContents`) abrange `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red team (todas as noites, `nightly-llm-security.yml`):** o promptfoo valida que cada rota bloqueia
o corpus OWASP-LLM quando `INJECTION_GUARD_MODE=block`; o garak executa sondagens (é ignorado sem o segredo).
`moderations` está incluído por motivos de consistência — os operadores no modo de bloqueio podem isentá-lo através de
`resolveDisabledGuardrails`.

O fluxo de trabalho noturno (`.github/workflows/nightly-llm-security.yml`, cron + execução
manual) tem duas tarefas:

- **`promptfoo-guard` (bloqueante)** — executa `promptfoo eval -c promptfooconfig.yaml`
  com `INJECTION_GUARD_MODE=block`. Cada caso adversarial (por exemplo, "ignore all
  previous instructions…", jailbreaks ao estilo DAN) verifica que a resposta contém
  `error.code === "SECURITY_001"`, ou seja, que o mecanismo rejeitou efetivamente o pedido.
- **`garak` (consultivo)** — executa o garak com `--probes promptinject,dan,leakreplay`
  numa instância local do OmniRoute (`http://localhost:20128/v1`). Está condicionado à existência de um
  segredo do fornecedor (`PROMPTFOO_PROVIDER_KEY`); é ignorado de forma adequada e recebe o sufixo
  `|| true`, pelo que gera um relatório sem causar uma falha na CI.

A cobertura do auxiliar do mecanismo (`createInjectionGuard` / `withInjectionGuard`)
abrange todas as rotas `/v1` que recebem prompts; o texto do prompt é obtido de
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` por
`extractMessageContents()` em `src/shared/utils/inputSanitizer.ts`.
