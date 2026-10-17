# Guardrails (Português (Brasil))

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Fonte da verdade:** `src/lib/guardrails/`
> **Última atualização:** 2026-08-29 — v3.8.51 (A proveniência da transcrição da Video Bridge é declarada pelo chamador,
> ainda não verificada pelo servidor — esclarecido conforme #11661)

Guardrails impõem segurança, política e transformações de conteúdo na fronteira
entre o OmniRoute e os provedores upstream. Cada guardrail pode inspecionar (e
opcionalmente rejeitar, transformar ou anotar) cargas de solicitação (`preCall`) e
respostas upstream (`postCall`).

O sistema é **fail-open**: se um guardrail falhar durante a execução, o registro
registra o erro e continua com o próximo guardrail em vez de falhar a
solicitação. O bloqueio é uma decisão explícita (`block: true`), nunca um acidente.

## Proteções integradas

O registro carrega automaticamente seis proteções em ordem de prioridade durante a importação
(consulte `registry.ts` → `registerDefaultGuardrails()`):

| Prioridade | Nome                | Estágio(s)     | Arquivo               |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Números de prioridade mais baixos são executados **primeiro**.

### Ponte de visão (`visionBridge.ts`) — Ponte de modalidade PR-1

Intercepta solicitações contendo imagens destinadas a **modelos sem visão** e
redireciona a solicitação inteira para um modelo com capacidade de visão ou
substitui as partes de imagem por descrições em texto produzidas por um modelo
de visão configurável antes da chamada upstream. Isso permite que provedores
somente de texto processem payloads multimodais de forma transparente.

Fluxo:

1. Ignorar se o modelo de destino já oferecer suporte a visão (a menos que ele
   apareça na lista de ponte forçada `isVisionBridgeForcedModel`).
2. Extrair partes de imagem por meio de `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), que delega ao **detector unificado de mídia**
   `detectMediaParts()` em `open-sse/utils/mediaParts.ts` — a única fonte da
   verdade compartilhada com o filtro de compatibilidade de combo. A extração
   usa uma lista de permissões limitada às partes de nível superior nos formatos
   que `replaceImageParts` pode reinserir (o contrato de extração↔substituição):
   `image_url` da OpenAI, `source.type:"base64"` em base64 da Anthropic,
   `source.type:"url"` da Anthropic e `input_image` da Responses API.
   Ocorrências aninhadas e formatos somente indicadores são material para o
   filtro de combo e nunca são extraídos. Ignorar se nenhuma for encontrada.
3. Resolver a configuração de runtime por meio de `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): as novas chaves de
   configuração `modalityBridge*` prevalecem; as chaves legadas
   `visionBridge*` permanecem como **fallback por um ciclo** (janela de
   rollback). Ignorar antes de qualquer varredura de mídia quando a ponte
   estiver desativada.
4. O seletor de modo (`modalityBridgeVisionMode`, consulte a tabela abaixo)
   decide entre redirecionar e descrever. O redirecionamento retorna
   `modifiedPayload` apenas com `model` substituído, além dos metadados
   `{ rerouted, fromModel, toModel, imagesKept }`.
5. Caminho de descrição: limitar as imagens a `maxImages`, compor o prompt
   ciente da tarefa, consultar o cache de descrições, chamar o modelo de visão
   **em paralelo** (`Promise.allSettled`) e inserir partes de texto
   `[Image N]: <description>` em seus lugares. Uma falha na descrição produz
   `null`, e a parte de imagem original é **preservada** (#4012) — exceto no
   caminho de descrição de combo quando todas as descrições falham; nesse caso,
   um upstream confirmado como sem visão recebe em vez disso um stub
   `(indisponível — nenhum provedor com capacidade de visão conectado)` (#8430).
6. Retornar `modifiedPayload` + metadados (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Seletor de modo (`modalityBridgeVisionMode`)

| Modo       | Padrão | Comportamento                                                                                                                                                                                                                                                                                                                            |
| ---------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔      | Heurística legada, inalterada (#6640/#7204): modelos que não são combo/`auto/` são redirecionados para o melhor modelo de visão, a menos que o modelo original já tenha credenciais utilizáveis (nesse caso, descreve); destinos combo sempre descrevem.                                                                                 |
| `describe` |        | Sempre descreve — o bloco de redirecionamento é totalmente ignorado; o modelo escolhido pelo usuário sempre responde.                                                                                                                                                                                                                    |
| `reroute`  |        | Força o redirecionamento: a proteção que mantém o modelo com credenciais é ignorada. A proteção de credenciais do **destino** do redirecionamento ainda se aplica — quando não existe um destino de visão utilizável, a solicitação segue para a descrição, para que imagens brutas nunca cheguem a um backend somente de texto (#8430). |

Os modos forçados encerram o fluxo **antes** da execução da heurística
automática; o comportamento de `auto` é idêntico, byte por byte, ao da proteção
anterior à PR-1.

#### Escopo da chave de API (`visionBridgeKeyScope.ts`)

Quando a chave de API do chamador restringe `allowedConnections`, pools de
cota (`allowedQuotas`) ou modelos (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), a ponte escolhe
apenas modelos de redirecionamento e descrição que a chave possa usar, em
conexões que a chave possa usar. A chamada de descrição sempre passa pelo
self-loop do OmniRoute com o cabeçalho `x-omniroute-self-loop-key-id`, para que
a solicitação de chat receptora aplique novamente a política de conexões e
modelos dessa chave. `enforceApiKeyPolicy()` respeita esse cabeçalho somente
em conjunto com o bearer do self-loop; portanto, ele só pode restringir o
acesso, e um id que não seja resolvido é rejeitado.

Se nenhum modelo de visão for permitido para a chave, o caminho de descrição
não interfere, e a solicitação passa inalterada, com o mesmo comportamento
fail-open de uma proteção desativada (metadados
`{ skipped: true, reason: "no_permitted_vision_model" }`). Solicitações sem
chave e chaves sem essas restrições se comportam exatamente como antes.

#### Prompt de descrição ciente da tarefa (`modalityBridgeVisionTaskAware`)

Padrão **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) acrescenta
o texto da **última mensagem do usuário** (truncado em 500 caracteres) ao prompt
base de descrição, direcionando a descrição para o que o usuário realmente
solicitou (padrão codex-vision-proxy) e pedindo ao modelo de visão que transcreva
o texto visível. Com a flag desativada — ou sem texto do usuário — o prompt base
é usado sem alterações.

A própria solicitação compatível com OpenAI do ciclo de autodescrição (`callVisionModelSingle()`
em `visionBridgeHelpers.ts`) sempre solicita `image_url.detail: "high"` —
incondicionalmente, para cada chamador/provedor, sem depender de nenhum sinal
do cliente. A amostragem com baixo nível de detalhe prejudica a precisão do OCR
justamente na tarefa de transcrição de texto solicitada por esse prompt; portanto,
a própria chamada de descrição sempre solicita um alto nível de detalhe,
independentemente do nível de detalhe usado pela solicitação original recebida.
Isso afeta apenas o corpo da solicitação interna de descrição; não altera como o
OmniRoute encaminha o `image_url.detail` do próprio chamador na solicitação
principal — esse padrão é aplicado separadamente e apenas para clientes OpenCode
detectados, em `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
A ramificação do ciclo de autodescrição no formato de transmissão da Anthropic
não possui o campo `detail` e não é afetada por nenhum dos dois padrões.

#### Limite da saída de descrição (`modalityBridgeVisionMaxChars`)

| Chave                          | Padrão | Intervalo        |
| ------------------------------ | ------ | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`    | `0` ou 100–50000 |

`0` (padrão) significa **sem limite** — a descrição retornada por
`callVisionModel()` é repassada sem modificações, preservando o comportamento
existente. Qualquer valor no intervalo de 100–50000 trunca a descrição com um
sufixo `…` antes que ela seja reinserida como `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` em `src/lib/guardrails/visionBridge.ts`).
Aumente esse valor para tarefas de OCR com muitos detalhes, nas quais o modelo
subsequente precisa da transcrição completa; reduza-o para limitar o uso de
tokens por modelos de visão prolixos. O campo do painel fica no painel Advanced
da aba Vision (`modality-bridge-max-chars` em `ModalityBridgeVisionTab.tsx`) e
ajusta qualquer valor entre 1 e 99 para o limite mínimo de 100, preservando
inalterado um `0` explícito — `0` é um valor Zod válido por si só
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), e não apenas
o padrão de valor "não definido".

#### Cache de descrição (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL em memória para saídas de descrição, compartilhado em todo o
processo. Chave = `sha256(imageRef + composedPrompt + configuredBridgeModel)`,
com enquadramento por prefixo de comprimento (sem colisões entre limites de
campos). O componente de modelo é o modelo de bridge **configurado**, não o
modelo que efetivamente respondeu — `callVisionModel` pode recorrer internamente
a um fallback, e criar uma chave para cada tentativa fragmentaria o cache.
Descrições com falha nunca são armazenadas em cache. Configurações:

| Chave                           | Padrão | Intervalo |
| ------------------------------- | ------ | --------- |
| `modalityBridgeCacheEnabled`    | `true` | —         |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440    |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000   |

#### Normalização de imagens remotas (autodescrição/conversão base64)

Quando a bridge busca por conta própria uma imagem **remota** — tanto na
autochamada de descrição da Anthropic quanto na conversão para base64 no formato
de transmissão do Claude (`ensureBase64ImagesForClaudeWire`), ambas por meio de
`fetchRemoteImageAsDataUri()` em `visionBridgeHelpers.ts` — o URI de dados
resultante é processado por `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) antes de ser incorporado à solicitação do
modelo de visão. Imagens grandes demais são reduzidas para uma **borda maior de
2048px** (correspondendo ao limite de redimensionamento que OpenAI/Anthropic já
aplicam no lado do servidor), o que reduz os bytes enviados e a latência sem
alterar o que o modelo de visão vê. O redimensionamento usa `sharp`, carregado
por meio de importação dinâmica: em uma plataforma na qual seu binário nativo
não possa ser carregado, `normalizeDataUri()` **nunca lança uma exceção** — ele
recorre ao repasse dos bytes originais, de modo que o caminho de
descrição/conversão para base64 continue sempre funcionando. Bytes que não
representam imagens (uma busca que não retornou uma imagem decodificável) também
são repassados sem alterações. Essa normalização está restrita às imagens que a
bridge busca para sua própria autochamada — ela nunca é aplicada à carga bruta
do chamador repassada diretamente, de acordo com o princípio de mutação somente
por adesão explícita (Regra Rígida nº 20).

#### Esquema de configurações + migração

As novas chaves `modalityBridge*` são validadas pelo Zod em
`updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`):
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, o trio
`modalityBridgeCache*` e o grupo `modalityBridgeAudio*` usado pela Audio Bridge.
A migração `141_modality_bridge_settings.sql` copia os valores legados existentes
de `visionBridge*` para as novas chaves correspondentes (de forma idempotente,
sem nunca sobrescrever um valor `modalityBridge*` definido pelo operador); as
chaves legadas continuam sendo aceitas como fallback de leitura durante um ciclo
de lançamento.

#### Cabeçalho de transparência + estatísticas

As respostas transformadas por descrição incluem
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(construído por `buildModalityBridgeHeader()` em `modalityBridge/bridgeStats.ts`
e aplicado por `withModalityBridgeHeader()` em `src/sse/handlers/chatHelpers.ts`).
Solicitações redirecionadas **não** recebem cabeçalho — a carga não foi alterada,
e a troca de modelo já é visível no campo `model` do corpo da resposta.

`GET /api/modality-bridge/stats` (autenticação de gerenciamento, mesmo nível de
`GET /api/settings`) retorna os contadores por modalidade mantidos em memória
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` para `vision`, `audio` e
`video`. `averageLatencyMs` usa `latencySamples`, e não todas as tentativas, como
denominador; uma operação sem medição de tempo não cria artificialmente uma
amostra de zero milissegundo. `bridged` permanece como o alias retrocompatível
para conversões bem-sucedidas; tentativas com falha não o incrementam.
Por design, os contadores são redefinidos quando o processo é reiniciado
(telemetria, não contabilização).

#### Configuração do painel

A página dedicada do painel é
`/dashboard/settings/modality-bridge`. Suas abas `Vision`, `Audio` e
`Video`, acessíveis por URL, preservam os parâmetros de consulta ao alternar o
valor de `tab`.
A aba Vision oferece ativação, modo, seleção de modelo (incluindo o padrão
automático), geração de prompts orientada à tarefa, limites avançados de
tempo limite/imagem/tamanho da descrição/cache, contadores de
execução e uma solicitação de amostra protegida. A aba Audio também está
funcional: ela oferece ativação, um seletor de modelos exclusivos para STT com
Auto, limites de tempo limite/duração máxima do clipe, contadores de áudio e um
teste de amostra `input_audio`. A aba Video está funcional: ela informa o estado
de execução do FFmpeg/ffprobe — um dentre quatro estados explícitos da interface
(`unknown` enquanto a sondagem está em andamento ou não pôde ser concluída,
`restricted` em um host do painel que não seja loopback, no qual a sondagem é
ignorada no lado do cliente, `unavailable` após a sondagem confirmar a ausência,
ou `available` com as versões do FFmpeg/ffprobe) —, persiste limites de
ativação/modelo/quadros/vídeo/tempo limite, filtra o seletor de modelos para
modelos compatíveis com visão e exibe contadores de vídeo.

O antigo cartão Vision Bridge nas configurações de IA agora é um link de
compatibilidade para a nova página; ele não mantém mais uma segunda cópia do
formulário. Media Providers também vincula os fluxos de trabalho Image-to-Text
e Speech-to-Text às abas correspondentes do Modality Bridge sem remover o
playground existente de Speech-to-Text.

**Desvio de admissão para autorreferência:** quando a chamada de descrição é
roteada pelo próprio endpoint de autorreferência `/v1` do OmniRoute (modelo de
provedor não padrão), a subs solicitação envia
`x-omniroute-admission-bypass: internal` e é autenticada com a credencial de
autorreferência resolvida — o sentinela local `sk_omniroute` no modo local ou a
chave de ambiente `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` configurada pelo
operador (#1350), para que implantações com `REQUIRE_API_KEY=true` ainda possam
executar a chamada de descrição. O desvio só é aceito para essas credenciais
exatas, portanto clientes externos não podem usar o cabeçalho para ignorar a
admissão.

Os padrões legados ficam em `src/shared/constants/visionBridgeDefaults.ts`; os
novos padrões de modo/orientação à tarefa/cache e o resolvedor de configurações
ficam em `src/shared/constants/modalityBridgeDefaults.ts`. A proteção oferece
uma opção de construtor `deps` para que os testes possam injetar implementações
falsas de `getSettings` e `callVisionModel`.

### Bridge de Áudio (`audioBridge.ts`) — Modality Bridge PR-3

Intercepta solicitações de chat que contêm áudio antes que elas cheguem a um
destino que não seja conhecido por aceitar entrada de áudio. Ele nunca
redireciona a solicitação de chat: as partes de áudio são transcritas pelo
endpoint multipart compatível com OpenAI existente, e o modelo de chat escolhido
continua com as transcrições em texto.

Fluxo:

1. Resolve `supportsAudio` por meio de `getResolvedModelCapabilities()`. Os
   metadados explícitos do registro de provedores têm precedência, seguidos
   pelos metadados estáticos do modelo e, depois, por `modalities_input`
   sincronizado. Uma lista de entradas declarada sem `audio` resulta em `false`;
   a ausência de evidências de capacidade resulta em `null`. Tanto `false`
   quanto `null` ativam o bridge conservador, enquanto `true` faz com que ele
   seja ignorado.
2. Resolve as configurações `modalityBridgeAudio*` e extrai partes de áudio de
   nível superior que podem ser removidas de cada mensagem por meio do detector
   compartilhado `detectMediaParts()`. Os formatos de transporte compatíveis são
   `input_audio` do OpenAI, `audio_url` e `source.media_type: "audio/*"`. Áudios
   aninhados são detectados para roteamento, mas não são removidos pelo caminho
   de recorte. O trabalho é limitado por `modalityBridgeAudioMaxClips`; as partes
   posteriores permanecem inalteradas.
3. Respeita um `provider/model` configurado ou permite que
   `selectAudioBridgeModel()` percorra `AUDIO_TRANSCRIPTION_PROVIDERS` na ordem
   estável do catálogo e selecione o primeiro modelo com uma credencial de
   provedor ativa e utilizável.
4. `callAudioTranscription()` converte áudio base64/URI de dados em um `file`
   multipart ou baixa um `audio_url` remoto por meio da proteção de saída
   exclusiva para destinos públicos, com fixação de DNS e limite de 25 MB. Em
   seguida, ele envia via POST o arquivo e o modelo selecionado para o endpoint
   de autorreferência local `/v1/audio/transcriptions`, autenticado com
   `resolveSelfLoopBearer()`. A rota de transcrição existente realiza a busca
   normal de credenciais, o tratamento de períodos de espera/limites de taxa e
   o despacho para o provedor.
5. Chamadas bem-sucedidas substituem suas partes por
   `[Audio N]: <transcript>`. As chamadas são executadas com
   `Promise.allSettled`: uma falha individual preserva a parte de áudio original
   correspondente (contrato #4012). Se todas as chamadas falharem e estiver
   comprovado que o destino tem `supportsAudio === false`, as partes se tornam
   `[Audio N]: (unavailable — no STT provider connected)` (contrato #8430). Para
   um destino desconhecido (`null`), um resultado em que todas as chamadas
   falham permanece inalterado. Um destino comprovadamente somente de texto sem
   uma credencial STT utilizável recebe o mesmo marcador explícito sem emitir
   uma chamada de rede.

As transcrições bem-sucedidas usam o cache LRU/TTL do Modality Bridge para todo
o processo. A chave combina a referência do áudio, o rótulo estável da operação
`audio-transcription` e o modelo STT selecionado; falhas nunca são armazenadas
em cache. As tentativas de áudio atualizam os contadores compartilhados
`bridged`, `cacheHits`, `failures` e `lastUsedAt`.
As respostas transformadas incluem
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; solicitações
inalteradas não recebem um segmento do Audio Bridge.

As configurações de execução são armazenadas no banco de dados e validadas pelo Zod:

| Chave                         | Padrão  | Intervalo               |
| ----------------------------- | ------- | ----------------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                       |
| `modalityBridgeAudioModel`    | `""`    | Automático ou ID de STT |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000             |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10                    |

O cache compartilhado continua sendo controlado por `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` e `modalityBridgeCacheMaxEntries`.

### Ponte de Vídeo (`videoBridge.ts`, `videoBridgePipeline.ts`)

Intercepta partes de vídeo de nível superior em `messages` do Chat Completions e
em `input` da Responses API antes que um destino sem suporte nativo conhecido a
vídeo seja chamado. Os formatos compatíveis são `input_video`, `video_url`,
`video_source`, URLs HTTPS e URIs de dados `data:video/*;base64,...`. Nomes de
arquivo simples em texto não são tratados como vídeo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) é responsável pela travessia da
solicitação, pela verificação de capacidade/política, pela agregação por
solicitação e pelo payload da resposta. O trabalho por vídeo — aquisição, cache
do resultado completo, descrição de uma sequência de quadros (que combina
qualquer transcrição de áudio declarada pelo chamador) e
métricas/abortamento/limpeza por tentativa — fica oculto atrás de
`processVideoPart` em `videoBridgePipeline.ts`, chamado uma vez para cada parte
de vídeo dentro do loop de `preCall`. Esse módulo também define os limites de
porta explícitos `VideoMediaBrokerPort` (aquisição de bytes e extração de
quadros amostrados), `VideoAudioTranscriptionPort` (combinação de uma transcrição
de áudio declarada pelo chamador com as legendas amostradas) e
`VideoDrilldownPort` (o limite de persistência do detalhamento de quadros; ainda
não conectado a `processVideoPart` — atualmente, apenas a rota separada
`/api/modality-bridge/video/drilldown` grava entradas de detalhamento).

O caminho público de solicitação `/v1` nunca importa nem invoca um subprocesso.
Vídeos remotos são baixados com um limite de 50 MiB; vídeos base64 inline têm um
limite conservador de 36 MiB decodificados por vídeo, para que o envelope de
modelo/mensagens/enquadramento possa permanecer dentro do limite público de
admissão de solicitações JSON de 50 MiB. O comprimento inline e as estimativas
de tamanho decodificado são verificados antes da alocação. HTTPS é obrigatório
na URL remota inicial e em cada redirecionamento, usando a proteção de saída
existente restrita a destinos públicos com fixação de DNS. Em seguida, os bytes
atravessam o limite exato do broker interno
`POST /api/modality-bridge/video/extract`. Essa rota é `LOCAL_ONLY` e
`SPAWN_CAPABLE`, aceita apenas uma solicitação autenticada por processo e de
loopback confiável, e nunca aceita URL, caminho do sistema de arquivos,
executável ou lista de argumentos. O pipeline de tamanho do corpo da API e o
leitor incremental de corpo do handler impõem independentemente um limite de
entrada de 50 MiB no broker. Sua fila limitada executa uma extração por vez,
permite quatro trabalhos pendentes e limita a entrada pendente a 100 MiB.

Dentro do broker, `ffprobe` lê um arquivo local privado; a lista fixa de formatos
permitidos exclui formatos de playlist e manifesto. Para contêineres permitidos
da família MOV, as referências externas a dados MOV permanecem desabilitadas
por padrão, e o comando fixo não as habilita. Tanto `ffprobe` quanto `ffmpeg`
usam a lista de protocolos permitidos restrita a `file`, uma thread, arrays
fixos de argumentos, nenhum shell e executáveis resolvidos a partir de `PATH`.
Streams de imagem de capa anexada não são candidatos reproduzíveis. Todos os
streams reproduzíveis devem atender aos limites, e um stream padrão explícito é
preferido antes do fallback determinístico para o menor índice. Os vídeos são
limitados a 600 segundos, 8.192 pixels por dimensão e 33.554.432 pixels de
origem. O FFmpeg captura de 1 a 16 quadros JPEG em pontos médios, reduz a escala
da borda mais longa para no máximo 1.024 pixels sem ampliar entradas menores e
nunca recebe uma URL. A amostragem é `uniform` por padrão. As políticas opcionais
`scene_aware` e experimental `segment_aware` executam uma passagem fixa
adicional do FFmpeg sobre o stream local já validado, selecionam timestamps de
cena limitados de `showinfo` e fazem fallback de forma determinística para os
mesmos pontos médios uniformes em caso de falha do detector, timeout, saída
malformada ou conjunto de candidatos vazio. O modo com reconhecimento de
segmentos aloca amostras de pontos médios proporcionalmente aos intervalos de
cena validados; as evidências do modo com reconhecimento de segmentos e o
comportamento de fallback são detalhados abaixo. O limite rígido de 16 quadros é
aplicado após a seleção em todas as políticas. Quando uma solicitação com
reconhecimento de cena tem orçamento de apenas um quadro, ela usa o ponto médio
uniforme da janela ativa do vídeo completo ou de foco e informa
`policyEffective: uniform`: um único quadro de cena selecionado não consegue
preservar ambas as extremidades temporais. Opcionalmente, o chamador pode
fornecer uma janela de foco finita (`start`/`end` em segundos); os limites são
restringidos à duração da mídia, janelas invertidas ou não finitas são
rejeitadas, e todas as políticas de amostragem são executadas somente dentro do
intervalo normalizado. A janela resultante é incluída nos metadados de
amostragem e no prefixo não confiável da descrição, para que os modelos
subsequentes possam distinguir um trecho em foco da linha do tempo completa.

O foco semântico de legendas é uma configuração separada e explícita. O modo de
análise padrão `full` preserva o prompt de quadros existente e nunca encaminha o
texto da solicitação ao modelo de legendas. No modo `focused`, a ponte lê apenas
o `text`/`input_text` mais recente, não vazio e criado pelo usuário no mesmo
contêiner de Chat ou Responses, normaliza-o para NFC, reduz caracteres de
controle e espaços em branco e limita-o a 500 pontos de código Unicode. Um
resultado vazio faz fallback para o prompt `full` exato. Uma dica utilizável é
serializada como JSON em um bloco dedicado de contexto de usuário não confiável
e pode apenas priorizar detalhes observáveis; ela não pode substituir o aviso
separado contra seguir instruções visíveis ou audíveis na mídia. O foco textual
nunca infere `start`/`end` nem altera o amostrador temporal.

#### Evidências estruturais de segmentos da FU-07

`segment_aware` usa uma única passagem limitada de pré-análise sobre o fluxo de vídeo local já validado. A cadeia fixa de filtros primeiro redimensiona o vídeo para, no máximo, 320 pixels de largura, detecta mudanças de cena e intervalos congelados e, em seguida, realiza uma amostragem de 1 quadro por segundo para avaliar desfoque, luma média e informações espaciais/temporais. A passagem é limitada a 600 amostras estruturais, uma thread de FFmpeg/filtro, as mesmas listas de permissões exclusivas para o protocolo `file` e para contêineres, um limite de 1 MiB para a saída do processo e, no máximo, 30 segundos dentro do cancelamento/prazo compartilhado do broker. Ela nunca aceita um comando, filtro, caminho ou URL proveniente da solicitação.

Os valores estruturais são evidências de amostragem determinísticas, não uma compreensão semântica do vídeo. Eles não inferem sujeitos, ações, legendas, fala ou intenção do usuário. Os limites de cenas e congelamentos formam segmentos; a cobertura de congelamento, o desfoque, a exposição, os detalhes espaciais e as mudanças temporais influenciam apenas como o orçamento existente de 1–16 quadros é alocado. Um segmento totalmente congelado é limitado a um quadro, enquanto os segmentos não congelados competem pelo orçamento restante. Quando há mais limites do que quadros, a cobertura uniforme da linha do tempo é mantida para que cortes rápidos no início não possam ocultar um segmento final longo. Limites de cena dentro da resolução de análise de 1 segundo de um limite de congelamento são combinados.

Filtros ausentes, evidências malformadas/vazias, um erro do detector ou o tempo limite da pré-análise limitada recorrem à política exata de pontos médios uniformes. Um cancelamento pelo chamador ou o prazo do broker não recorre a essa política: ele encerra o subprocesso em andamento, impede a extração posterior de quadros e a árvore temporária privada é removida em `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` gera fixtures determinísticas reais do FFmpeg para economia de chamadas de legendagem após a desduplicação, alocação de orçamento para movimento denso, evidências de desfoque/exposição/SI-TI, cortes rápidos com um trecho final longo e falsos positivos de transições graduais. Ele registra o tempo decorrido da pré-análise e, quando `/usr/bin/time` está disponível, o uso de CPU do processo filho e o pico de RSS. Suas verificações de qualidade são apenas oráculos estruturais. A qualidade de modelos reais de legendagem permanece como `HOLD`, pois esse harness não tem um endpoint autorizado nem um avaliador congelado. A economia monetária também permanece como `HOLD`, a menos que `--caption-cost-per-call-usd` forneça uma estimativa positiva explícita de custo por chamada; o script nunca fabrica nenhum dos dois resultados.

Cada quadro é limitado a 4 MiB, todos os quadros brutos em conjunto são limitados a 23 MiB e a resposta serializada do broker é limitada a 32 MiB. Um diretório temporário privado é removido em `finally`. O OmniRoute não inclui o FFmpeg e não aceita um caminho de executável personalizado. Antes da legendagem, a ponte aplica uma etapa conservadora de desduplicação visual: cada JPEG é reduzido a um buffer em escala de cinza de 16×16 e comparado somente com o último quadro retido. Para um orçamento de legendagem solicitado superior a um quadro, a extração fornece um conjunto limitado de candidatos de até duas vezes esse orçamento, sem nunca exceder 16 quadros. O limite solicitado é aplicado somente após a desduplicação, com o primeiro e o último candidatos selecionados preservados durante o refinamento final quando o orçamento é de pelo menos dois. A política versionada `grayscale-16x16-mean-cells-v2` usa o maior valor entre a diferença média de luma e a proporção de células da miniatura cuja diferença normalizada é de pelo menos 0,05. O limite de duplicidade é a constante 0,04, escolhida por sua previsibilidade em vez de ser exposta como uma configuração de tempo de execução. Esse sinal secundário de alto contraste preserva pequenos movimentos e alterações de texto visíveis que uma comparação baseada somente na média pode ocultar. Erros do comparador ou do decodificador recorrem à manutenção da cobertura. Os metadados de saída distinguem os candidatos extraídos, os quadros usados com sucesso e as duplicatas visuais descartadas.

Uma parte de vídeo marcada explicitamente pode solicitar uma folha de contatos com registros de data e hora. A ponte cria uma grade JPEG de, no máximo, 4 colunas e 16 quadros. Cada célula de 512 pixels incorpora o registro de data e hora de sua origem em uma faixa inferior de alto contraste, enquanto os mesmos registros permanecem nos metadados textuais para associação e auditoria posteriores. O JPEG completo permanece limitado a 32 MiB. Se `sharp` não conseguir decodificar ou compor a grade, a ponte recorre aos quadros JPEG individuais; um cancelamento pelo cliente ainda é propagado pela operação da folha.

As evidências de promoção são deliberadamente separadas do microbenchmark de composição sintética. `scripts/perf/video-bridge-contact-sheet-eval.ts` define um harness A/B com versão de esquema para modelos de visão reais compatíveis com a OpenAI. Ele mede os tokens informados pelo provedor, a latência de ponta a ponta (incluindo a composição da folha), a contagem de chamadas ao modelo e a retenção de fatos definida pelo manifesto. As respostas brutas do modelo não são gravadas no relatório; somente resumos SHA-256 e IDs de fatos correspondentes são mantidos. O harness não realiza nenhuma chamada de rede ou a modelos pagos, a menos que `--execute-real` seja fornecido e `--model`, `OMNIROUTE_BASE_URL` e `OMNIROUTE_API_KEY` estejam configurados. Sem essa execução real explícita, seu veredito legível por máquina permanece como `HOLD`; as medições sintéticas de payload/contagem de chamadas, por si sós, não constituem evidências de promoção.

Os chamadores podem anexar um array opcional `transcript.cues` a uma parte de vídeo compatível quando já possuem texto alinhado. Cada sinalização deve conter `text`, um intervalo finito `start`/`end` dentro da duração detectada e um `source` presente na lista de permissões (`client`, `embedded` ou `audio-bridge`); `confidence` assume `1` por padrão e deve permanecer entre `0` e `1`. Sinalizações exatamente duplicadas são combinadas. O OmniRoute nunca inicia uma transcrição a partir desses metadados: as sinalizações validadas são copiadas para o resultado descrito com origem, confiança e intervalo e são renderizadas como observações não confiáveis junto às legendas dos quadros. Textos inválidos, fora do intervalo ou sem proveniência são rejeitados em vez de serem misturados ao fluxo de legendas. Ambos os canais de transcrição do corpo da solicitação normalizam a proveniência fornecida como `client`, incluindo rótulos `embedded` ou `audio-bridge` autodeclarados. Somente um adaptador controlado pelo servidor pode atribuir esses rótulos confiáveis por meio do argumento exclusivo de código `trustedSource`; um campo JSON da solicitação não pode alcançar esse argumento. O texto da transcrição continua sendo conteúdo não confiável derivado da mídia, independentemente de sua proveniência, e nunca deve determinar a autorização.

Um chamador avançado pode fornecer uma faixa `audioTranscript` para o mesmo vídeo;
ela é tratada como texto fornecido pelo cliente, não como prova de transcrição pelo servidor.
A camada de fusão executa as observações visuais e de áudio sob
um único prazo e sinal de cancelamento, ordena-as em uma linha do tempo comum, consolida
duplicatas exatas e relata um resultado parcial quando apenas um dos lados é bem-sucedido.
Um `audioTranscript` inválido é degradado para esse resultado parcial — a descrição
visual é mantida e a ramificação de áudio registra um código de falha sanitizado —
em vez de causar a falha do vídeo inteiro. A disponibilidade por ramificação, o indicador de resultado parcial
e os códigos de falha sanitizados são preservados no resultado descrito, nos
metadados de guardrail (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), nos metadados do cache de resultados e nos contadores
de fusão da ponte. O caminho padrão da Video Bridge não invoca conversão de fala em texto
nem baixa uma segunda cópia da mídia; sem essa faixa explícita, ele permanece
apenas com vídeo.

**Retenção de transcrições (#12150 P1).** Isso se aplica automaticamente sempre que a
Video Bridge (que é opcional) renderiza uma indicação de transcrição — não há um
indicador de retenção separado. Quando uma solicitação renderiza qualquer indicação de transcrição (um
`transcript` declarado pelo chamador ou um `audioTranscript` combinado), o guardrail a marca como
`videoBridgeObserved` e produz uma versão expurgada da descrição do vídeo —
uma renderização idêntica na qual o corpo de texto livre de cada indicação é substituído por
`[redacted-video-transcript]`, criada pela substituição do campo estruturado da indicação
antes da montagem da string (nunca pela análise do texto consolidado, de modo que nenhum
conteúdo da indicação — malicioso ou comum, incluindo corpos que contenham `]`, como
`[inaudible]`/`[music]` — possa sobreviver). O corpo da solicitação persistido no log de chamadas substitui
cada parte de texto derivada do vídeo por essa versão expurgada, com correspondência
por igualdade de conteúdo; a âncora `fullText` é relida da carga útil finalizada do guardrail
pré-chamada, de modo que a correspondência continue funcionando depois que guardrails posteriores da cadeia
(os mascaradores de PII e credenciais, prioridades 10/95) reescrevem o texto da descrição localmente e
depois que a injeção de prompt do sistema/handoff/memória remodela a matriz de mensagens. O
corpo enviado ao modelo upstream permanece inalterado. Uma solicitação observada também não preenche
nenhuma Memory durável (a extração derivada tanto da solicitação quanto da resposta é ignorada),
portanto, a própria resposta do modelo não pode repetir o texto da transcrição na Memory.

**Campos brutos de vídeo (#12430).** Quando a ponte está habilitada e o suporte nativo a vídeo é desconhecido ou inexistente, campos `transcript`/`audioTranscript` definidos também ativam `videoBridgeObserved`, mesmo após uma falha na descrição ou um limite de `maxVideos`. `null` e strings vazias contam; campos ausentes e metadados que não sejam de vídeo não contam. As cópias retidas expurgam esses campos ou omitem a solicitação, e caches/Memory são ignorados.

Nesses caminhos de fallback, indicações válidas fornecidas pelo chamador tornam-se partes
`text`/`input_text` compatíveis, em vez de campos não padronizados do provedor. As duas faixas
fornecidas na solicitação permanecem como observações `client` não confiáveis, com um aviso explícito
de que o vídeo não foi descrito e os timestamps não foram verificados em relação à mídia. Os limites existentes
de 256 indicações/64 KiB no total e por indicação se aplicam às duas faixas em conjunto;
os timestamps devem respeitar o teto de 600 segundos do broker e qualquer janela de foco
fornecida. Faixas inválidas são descartadas, não encaminhadas como texto arbitrário; uma
faixa irmã válida ainda pode ser usada, a menos que o orçamento combinado seja excedido. Campos nulos/vazios
não adicionam texto. Nenhuma busca de mídia ou transcrição é adicionada por esse fallback.
Os campos de extensão da transcrição são removidos do contêiner de vídeo de fallback e de seus
objetos `video_url`/`source`. A lista de permissões do protocolo OpenAI permanece rígida; contêineres de vídeo
com suporte nativo desconhecido continuam disponíveis e destinos que sabidamente aceitam apenas texto mantêm marcadores seguros.
Versões expurgadas estruturadas protegem o texto de transcrição anexado, enquanto a
solicitação original pertencente ao chamador permanece inalterada. Destinos com suporte nativo e
pontes desabilitadas mantêm seu comportamento existente de desvio.

Cópias retidas adicionais usam o mesmo sinal de solicitação observada. O snapshot bruto
da solicitação do cliente anterior ao guardrail, a solicitação pendente na memória e o log de
solicitações rejeitadas antecipadamente substituem estruturalmente os campos de transcrição nas partes de vídeo;
prompts em string sintetizados pelos estágios do pipeline e pelo handoff de contexto são expurgados
no destino do corpo persistido da solicitação. O marcador `video_content_removed` persistido
faz com que a continuação de `previous_response_id` falhe de modo seguro, em vez de reconstruir
texto que foi descartado intencionalmente. Se uma solicitação observada perder sua
versão expurgada por parte antes do registro, ou se até mesmo uma entre várias versões expurgadas de vídeo
não corresponder após mutações posteriores da solicitação, o corpo retido da solicitação será
totalmente omitido, em vez de reter uma transcrição parcialmente expurgada.

Para uma solicitação observada, uma resposta do modelo pode citar qualquer parte da
transcrição sem um limite estruturado de indicação. Portanto, seu `responseBody` persistido
no log de chamadas é substituído por um marcador de omissão; o artefato detalhado do
pipeline (que pode incluir corpos do upstream/cliente e fragmentos do stream)
não é retido. Os caches semântico, de idempotência e de replay de raciocínio ignoram
leituras e gravações para essa solicitação. A solicitação ao provedor e a
resposta visível ao cliente permanecem inalteradas. Os bytes de keepalive antecipados são drenados do buffer
temporário quando o artefato detalhado é omitido. O aviso de EventStream malformado da Kiro
informa apenas a contagem de bytes da carga útil, nunca seu conteúdo nem o erro bruto
do analisador JSON.
Isso não afirma que todos os diagnósticos não relacionados de provedores/plugins tenham sido
auditados; a verificação mais ampla de destinos de retenção é acompanhada em #11658.

O ciclo de vida interno de `/api/modality-bridge/video/drilldown` é uma camada de cache separada, autenticada por token/loopback. Cada operação também exige um ID principal opaco canônico. Antes que um chamador de produção seja habilitado, ele deve derivar esse ID do tenant autenticado e jamais encaminhar um valor selecionado pelo cliente. As chaves de cache vinculam esse principal a IDs canônicos de sessão e de referência de vídeo, armazenam apenas as chaves derivadas por SHA-256 e restringem tanto as leituras quanto a exclusão ao mesmo principal. O cache armazena no máximo 16 quadros JPEG derivados por entrada, os expira após dez minutos e permite leituras limitadas por `start`/`end` ou a exclusão explícita da sessão.

Cada principal é limitado a 16 entradas e 64 MiB de dados JPEG canônicos. Esses limites são independentes do teto global de 64 entradas/256 MiB: a pressão sobre a cota do principal remove apenas as entradas usadas menos recentemente desse principal antes que a remoção LRU global seja considerada. As entradas expiradas são removidas tanto da contabilização por principal quanto da global durante a atividade do cache, enquanto o cancelamento e a falha de validação não confirmam uma substituição parcial.

O cache rejeita Base64 não canônico, preenchimento excessivo, mídia que não seja JPEG, JPEGs malformados ou truncados e JPEGs que produzam um aviso durante uma decodificação de imagem completa e limitada com `sharp`. Ele recodifica cada imagem aceita como um JPEG canônico, obtém a largura e a altura a partir dos bytes decodificados em vez de confiar nos campos fornecidos pelo chamador e descarta quaisquer bytes poliglotas finais, em vez de retê-los. Somente o buffer comprimido canônico e limitado é contabilizado em ambas as cotas. O limite de transmissão JSON inclui a sobrecarga do Base64 para o teto de 32 MiB de entrada decodificada. Cada
derivação armazenada registra o formato e a resolução JPEG validados, a política de amostragem, a versão da derivação, o momento de criação, o hash de conteúdo calculado pelo servidor, além da referência pai com hash e do hash do conteúdo pai fornecido pelo chamador confiável. O cancelamento é verificado entre as fases assíncronas de decodificação/hash, antes da confirmação atômica no cache.

Esta etapa ainda não conecta um produtor de produção à rota e não oferece seleção de variantes com múltiplas resoluções. Portanto, o caminho transparente de solicitação do Video Bridge não incorre em trabalho adicional, enquanto a derivação do principal vinculada ao tenant e o ciclo de vida completo de múltiplas resoluções do FU-08 permanecem como trabalho de acompanhamento explícito, em vez de serem documentados como comportamento concluído.

Os quadros recebem legendas sequencialmente com o modelo de Video configurado. Uma substituição de Video vazia herda a configuração de Vision; se ambas estiverem vazias, o roteador automático de Vision seleciona o modelo efetivo compatível com visão. As legendas bem-sucedidas substituem a parte original por um prefixo estável `[Video description:` que também marca o texto como uma observação não confiável derivada de mídia e instrui os modelos subsequentes a não seguir instruções encontradas na mídia. As chaves do cache de legendas dos quadros incluem os bytes JPEG, o prompt, o carimbo de data/hora e o modelo efetivo; somente legendas bem-sucedidas são armazenadas em cache. As entradas de cache mantêm o modelo produtor que efetivamente obteve sucesso, incluindo um modelo de fallback; o bridge informa `mixed` quando quadros diferentes foram produzidos por modelos diferentes. Um acerto de cache reutiliza essa identidade do produtor, em vez de reclassificá-la como o plano de roteamento solicitado. O cache de resultados do vídeo inteiro usa como chave todas as entradas que alteram a saída — prompt, modelo efetivo, política de amostragem, quantidade de quadros, modo de análise semântica, a impressão digital SHA-256 da dica de foco normalizada, a janela de foco, `transcript`, `audioTranscript` e o sinalizador da folha de contato — portanto, a alteração de qualquer uma dessas dimensões resulta em uma falha de cache, nunca na reutilização de dados obsoletos. A versão, o limite e a quantidade limitada de quadros candidatos da política de deduplicação visual também são explícitos na chave e nos metadados do cache de resultados; portanto, uma mudança de política não pode reutilizar uma descrição obsoleta do vídeo inteiro. Os metadados v4 do cache de resultados mantêm o modo e a impressão digital, nunca a tarefa bruta do usuário. Os metadados da proteção informam tanto o modo de análise solicitado quanto o efetivo; um modo `focused` solicitado sem texto útil do usuário é informado como efetivamente `full`.

A proteção extrai todas as partes de vídeo compatíveis, mas não descreve mais do que `modalityBridgeVideoMaxVideos`. Para um destino comprovadamente com `supportsVideo === false`, vídeos com falha ou acima do limite tornam-se marcadores de texto seguros e explícitos, de modo que nenhum vídeo bruto permaneça. Quando a capacidade é desconhecida, essas partes mantêm seu contêiner de vídeo; qualquer transcrição de fallback segue a conversão de texto limitada descrita acima. Destinos com `supportsVideo === true` ignoram o bridge. O sinal de cancelamento da solicitação do cliente se propaga pelo download, pela fila do broker, pelos subprocessos e pelas chamadas de legendagem; os cancelamentos interrompem o processamento entre os vídeos e nunca permitem que a mídia bruta passe em caso de falha.

As configurações de runtime são mantidas no banco de dados e validadas pelo Zod:

| Chave                               | Padrão      | Intervalo / comportamento                                                                                      |
| ----------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Runtime opcional, ativado explicitamente                                                                       |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` preserva legendas genéricas; `focused` usa um contexto limitado e não confiável do usuário mais recente |
| `modalityBridgeVideoModel`          | `""`        | Herda o modelo do Vision Bridge                                                                                |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                           |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` ou `segment_aware` proporcional; falha do detector recorre a `uniform`                |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                            |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                 |

Valores legados persistidos de timeout de vídeo acima de 120 segundos são limitados ao
prazo do broker; novas gravações de configurações acima desse limite são rejeitadas.
`GET /api/modality-bridge/video/runtime` exige localidade de loopback
confiável e carimbada antes da autenticação ou sondagem do runtime e, em seguida, exige
autenticação de gerenciamento. Ele retorna apenas `available`, versões sanitizadas do FFmpeg/ffprobe e um motivo
fixo quando o runtime está indisponível. O endpoint interno de extração não é
uma API pública de upload: a saturação da fila retorna `503` mais `Retry-After`, uma desconexão
do chamador retorna `499`, e o prazo fixo do broker retorna `504`. As respostas convertidas adicionam
`video->text;model=<visionModel>;parts=<videos>` ao cabeçalho central
`x-omniroute-modality-bridge` sem remover os segmentos de Visão ou Áudio.

### Mascarador de PII (`piiMasker.ts`)

É executado em **ambos** os estágios.

- **`preCall`** clona o payload, percorre `system`, `messages`, `input` e
  `prompt` (incluindo itens que são strings simples) e aplica `processPII()` (de
  `@/shared/utils/inputSanitizer`) aos campos string `content`/`text`. Quando
  `PII_REDACTION_ENABLED=true`, as PII detectadas são ocultadas no payload
  de saída. Isso é independente de `INPUT_SANITIZER_MODE` (que controla apenas
  a política de injeção de prompt). Quando a ocultação está desativada, a chamada registra contagens
  de detecções sem reescrever o conteúdo.
- **`postCall`** clona profundamente a resposta, executa `sanitizePIIResponse()` mais
  o mascarador do formato da Responses API (`maskResponsesOutput` — abrange
  `output_text` e `output[].content[].text`). Se ocorrer qualquer ocultação, a
  resposta modificada substituirá a original.

O guardrail nunca bloqueia; ele apenas anota (`meta.detections`,
`meta.redacted`) ou reescreve.

### Injeção de prompt (`promptInjection.ts`)

Detecta estruturas adversariais no conteúdo fornecido pelo usuário e aplica a
política configurada. O comportamento é determinado por variáveis de ambiente e opções
do construtor:

| Configuração       | Variável de ambiente                                                                                 | Padrão | Efeito                                                                                                                                                                                                           |
| ------------------ | ---------------------------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ativado            | `INPUT_SANITIZER_ENABLED`                                                                            | `true` | Quando `false`, o guardrail encerra antecipadamente.                                                                                                                                                             |
| Modo               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                      | `warn` | Política de injeção: `block`, `warn` ou `log`. (`redact` é aceito para retrocompatibilidade, mas **não** remove o texto da injeção; a reescrita de PII da solicitação é controlada por `PII_REDACTION_ENABLED`.) |
| Limite de bloqueio | Opção `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | Severidade mínima necessária para bloquear. A severidade média é apenas observada por padrão.                                                                                                                    |

**Precedência de modo** (`getMode`): `options.mode` do chamador →
**substituição por feature flag do BD** para `INJECTION_GUARD_MODE` (Painel → Configurações →
Feature Flags) → variável de ambiente `INJECTION_GUARD_MODE` → variável de ambiente `INPUT_SANITIZER_MODE` →
`warn`. Portanto, uma substituição pelo painel prevalece sobre as variáveis de ambiente, de modo que a interface de
Feature Flags controla o guard em execução em tempo real (sem reinicialização). A leitura do BD é à prova de falhas:
se ocorrer um erro, o guard retorna ao comportamento baseado nas variáveis de ambiente e, quando nenhuma
substituição está definida, o comportamento é idêntico à resolução baseada apenas nas variáveis de ambiente.

Fontes de detecção:

1. `sanitizeRequest()` de `@/shared/utils/inputSanitizer` (conjunto compartilhado de detectores
   usado em outros pontos do pipeline).
2. `DEFAULT_GUARD_PATTERNS` integrados (atualmente `system_override_inline` e
   `markdown_system_block`, ambos com severidade `high`).
3. `customPatterns` opcionais passados por meio das opções do construtor (strings, expressões regulares
   ou registros `{ name, pattern, severity }`).

Quando `mode === "block"` **e** pelo menos uma detecção atende ao limite de
severidade, `preCall` retorna `{ block: true, message: "Request rejected:
suspicious content detected" }`. Nos modos `warn`/`log`, a barreira de proteção
registra o evento, mas permite a chamada. O helper compartilhado
`evaluatePromptInjection()` também é exportado para chamadores que precisam
avaliar prompts sem passar pelo registro.

**Limite de varredura (v3.8.20):** o detector inspeciona apenas os **primeiros 16 KB**
do texto combinado do prompt — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) em
`src/shared/utils/inputSanitizer.ts`. Tanto `detectInjection()` quanto
`evaluatePromptInjection()` aplicam `slice(0, MAX_INJECTION_SCAN_BYTES)` antes de executar
o loop de padrões. As diretivas de injeção ficam próximas ao início de uma entrada, portanto isso
limita o uso de CPU/GC pelas expressões regulares em payloads com centenas de KB sem enfraquecer a detecção (cf.
#3932, #4041).

### Mascarador de credenciais (`credentialMasker.ts`)

É executado em **ambos** os estágios, por último na cadeia padrão (prioridade `95`). Oculta
padrões conhecidos de chaves de API / tokens secretos no payload de saída (conteúdo da
mensagem, argumentos de chamadas de ferramentas, resultados de ferramentas) **e** na resposta do provedor, para que uma
credencial colada em um prompt (ou retornada por um resultado de ferramenta) não seja vazada
para o provedor upstream nem de volta para o cliente.

- **Somente mediante ativação**, seguindo a mesma convenção da ocultação de PII (adjacente à Hard Rule #20):
  desativado, a menos que `settings.credentialRedactionEnabled === true` **ou**
  `CREDENTIAL_REDACTION_ENABLED=true`. Quando desativada, a barreira de proteção não faz nada —
  nunca bloqueia nem reescreve.
- `redactCredentials()` percorre toda a árvore do payload/resposta (`walkValue()`,
  com proteção contra poluição de protótipo e ciclos via `WeakSet`) e substitui as correspondências por
  um placeholder `[REDACTED:<type>]`, clonando apenas as ramificações que realmente
  foram alteradas.
- `CREDENTIAL_PATTERNS` abrange chaves de provedores de LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokens de VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), chaves de pagamento (Stripe, Square), chaves de
  nuvem (chave de acesso da AWS, Twilio, SendGrid, Mailgun), chaves privadas / JWTs,
  strings de conexão contendo credenciais (`mongodb://user:pass@...` etc.) e
  um padrão genérico para valores de cabeçalhos `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Chaves em formato de cabeçalho (`authorization`, `x-api-key`, `api-key`,
  `apikey`) são ocultadas estruturalmente (somente o valor, preservando prefixos de esquema como
  `Bearer `/`Basic `), em vez de usar a expressão regular genérica de texto.
- A barreira de proteção nunca bloqueia; ela apenas reescreve (`modifiedPayload` /
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
  message?: string; // exibida quando há bloqueio
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // retornado por preCall para reescrever a solicitação
  modifiedResponse?: TValue; // retornado por postCall para reescrever a resposta
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

Um guardrail sinaliza "nenhuma alteração" retornando `void`, `{}` ou
`{ block: false }`. Retornar um `modifiedPayload`/`modifiedResponse` substitui
o valor que percorre a cadeia para os guardrails subsequentes.
`signal?: AbortSignal` leva o ciclo de vida do chamador até os guardrails. O cancelamento de uma solicitação é a exceção deliberada de fail-open: as pontes de mídia interrompem o trabalho e realizam a limpeza sem restaurar a mídia bruta para um destino que sabidamente não oferece suporte a ela.

## Registro (`registry.ts`)

O singleton `guardrailRegistry` expõe:

- `register(guardrail)` — adiciona (ou substitui por nome normalizado) um guardrail e
  reordena por `priority` ascendente.
- `clear()` / `list()` — auxiliares administrativos.
- `runPreCallHooks(payload, context)` — itera sobre os guardrails ativos, passa o
  payload através de `modifiedPayload`, e para no primeiro `block: true`.
- `runPostCallHooks(response, context)` — mesmo fluxo no lado da resposta.
- `resetGuardrailsForTests({ registerDefaults })` — limpa o estado e opcionalmente
  registra novamente os padrões para um isolamento de teste limpo.

Ambos os executores retornam `{ blocked, payload|response, results, guardrail?, message? }`
onde `results` é um array de registros `GuardrailExecutionResult` que incluem
os campos `blocked`, `skipped`, `modified`, `error` e `meta` por guardrail,
úteis para rastreamento.

### Desabilitando Guardrails Por Requisição

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` agrega uma
lista deduplicada de nomes de guardrails que devem ser ignorados para a
requisição atual. Fontes (todas opcionais, todas mescladas):

- `apiKeyInfo.disabledGuardrails`
- Corpo da requisição `disabledGuardrails` (nível superior)
- Corpo da requisição `metadata.disabledGuardrails`
- Cabeçalho `x-omniroute-disabled-guardrails` (ou legado
  `x-disabled-guardrails`)

Os valores podem ser arrays de strings ou uma string separada por vírgulas; os nomes são
normalizados para kebab-case em minúsculas (`pii_masker` → `pii-masker`). O resultado
é passado através de `context.disabledGuardrails` para o registro, que ignora
os guardrails correspondentes (`skipped: true` em `results`).

## Ordem de Execução

Para cada requisição que passa por `src/sse/handlers/chat.ts` e
`open-sse/handlers/chatCore.ts`:

1.  `resolveDisabledGuardrails(...)` constrói a lista de ignorados a partir da chave da API, corpo e cabeçalhos.
2.  `guardrailRegistry.runPreCallHooks(body, ctx)` executa os guardrails em ordem crescente de prioridade:
    - Guardrails desabilitados são registrados como `skipped`.
    - O `preCall` de cada guardrail pode reescrever o payload via `modifiedPayload`.
    - O primeiro `block: true` interrompe a cadeia e o handler retorna uma resposta de rejeição do guardrail.
3.  O payload (potencialmente reescrito) flui para o roteamento combinado e despacho upstream.
4.  Após a resposta ser montada, `guardrailRegistry.runPostCallHooks(...)` executa a mesma cadeia na resposta. `block: true` aqui descarta a resposta upstream.

Guardrails que lançam exceções são registrados com `error: <message>` e logados via
`logger.warn`, mas a cadeia continua — fail-open por design.

## Configuração

Variáveis de ambiente lidas pelos guardrails integrados:

| Variável                              | Usado por                 | Efeito                                                                                                                   |
| :------------------------------------ | :------------------------ | :----------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Defina `false` para desabilitar a detecção completamente.                                                                |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Política de injeção: `warn`, `block`, ou `log`. O valor legado `redact` não reescreve o texto de injeção.                |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Modo para o guardrail de injeção; também uma feature flag do DB que **sobrescreve** as variáveis de ambiente (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Severidade mínima que `MODE=block` rejeita: `high` (padrão), `medium`, ou `low`.                                         |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Alias legado para `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                     |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Quando `true`, PII da requisição é redigida (independente do modo de injeção).                                           |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Controla o comportamento do mascarador no lado da resposta.                                                              |

Os guardrails do Modality Bridge leem a configuração de tempo de execução do armazenamento de configurações baseado em DB (`getSettings()`), e não das variáveis de ambiente. As chaves primárias do Vision são
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, e
`modalityBridgeCacheMaxEntries`. As chaves legadas
`visionBridge*` são aceitas apenas como o fallback de leitura de um ciclo documentado; as escritas do dashboard usam as chaves primárias. Os padrões e o resolvedor de fallback residem em `src/shared/constants/modalityBridgeDefaults.ts`, com as constantes legadas mantidas em `src/shared/constants/visionBridgeDefaults.ts`.

O Áudio usa `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`, `modalityBridgeAudioTimeout`, e `modalityBridgeAudioMaxClips`, além das configurações compartilhadas `modalityBridgeCache*`. O Áudio não possui fallback de chave legada porque essas chaves foram introduzidas com o esquema do Modality Bridge.

O Vídeo usa `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, e
`modalityBridgeVideoTimeout`, além das configurações compartilhadas `modalityBridgeCache*`.
Ele é desabilitado por padrão porque FFmpeg/ffprobe são dependências operacionais opcionais e a legendagem de quadros adiciona latência e custo de modelo.

## Guardrails Personalizados

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

1. Crie `src/lib/guardrails/myGuardrail.ts` estendendo `BaseGuardrail`.
2. Implemente `preCall` e/ou `postCall`.
3. Registre no momento da importação (push de `registerDefaultGuardrails`) ou
   chame `guardrailRegistry.register(...)` em tempo de execução — o registro substitui
   qualquer guardrail anterior com o mesmo nome normalizado.
4. Adicione testes em `tests/unit/` (exemplos existentes:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testando

Use `resetGuardrailsForTests()` entre os testes para começar de um estado conhecido.
Passe `{ registerDefaults: false }` para começar com um registro vazio e
registrar apenas os guardrails em teste. O Vision Bridge aceita injeção de dependência
(`deps.getSettings`, `deps.callVisionModel`); o Audio Bridge expõe as
equivalentes para configurações, capacidades, seleção de modelo STT, verificações de credenciais e transcrição. Os testes podem, portanto, exercitar ambos os fluxos sem acesso a DB ou rede.

## Veja Também

- `src/lib/guardrails/` — implementação
- `src/shared/utils/inputSanitizer.ts` — detector compartilhado que alimenta
  a injeção de prompt e a mascaramento de PII
- `src/shared/constants/visionBridgeDefaults.ts` — Padrões do Vision Bridge e
  lista de modelos de ponte forçada
- `src/shared/constants/modalityBridgeDefaults.ts` — Padrões de tempo de execução compartilhados Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — camada ortogonal (disjuntor, resfriamentos)
- `docs/reference/ENVIRONMENT.md` — referência completa de variáveis de ambiente

## Cobertura de rota de proteção contra injeção e equipe vermelha (Fase 8 · Bloco D)

A proteção contra injeção (`createInjectionGuard` / `withInjectionGuard`) cobre todas as rotas
que aceitam prompts de usuário. Ela respeita `INJECTION_GUARD_MODE` (padrão `warn` = apenas log;
`block` = retorna HTTP 400 `SECURITY_001`).

| Tipo              | Rotas                                                                                                                                                | Modo padrão |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Texto (existente) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn        |
| Generativo        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn        |
| Dados             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn        |

A extração de texto (`extractMessageContents`) cobre `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Equipe vermelha (noturno, `nightly-llm-security.yml`):** promptfoo valida que cada rota bloqueia
o corpus OWASP-LLM em `INJECTION_GUARD_MODE=block`; garak executa sondas (ignora sem segredo).
`moderations` está incluído para consistência — operadores em modo de bloqueio podem isentá-lo via
`resolveDisabledGuardrails`.

O fluxo de trabalho noturno (`.github/workflows/nightly-llm-security.yml`, cron + despacho manual)
tem dois trabalhos:

- **`promptfoo-guard` (bloqueio)** — executa `promptfoo eval -c promptfooconfig.yaml`
  com `INJECTION_GUARD_MODE=block`. Cada caso adversarial (por exemplo, "ignore todas
  as instruções anteriores...", jailbreaks estilo DAN) afirma que a resposta contém
  `error.code === "SECURITY_001"`, ou seja, a proteção realmente rejeitou a solicitação.
- **`garak` (consultivo)** — executa garak `--probes promptinject,dan,leakreplay`
  contra uma instância local do OmniRoute (`http://localhost:20128/v1`). Protegido por um
  segredo do provedor (`PROMPTFOO_PROVIDER_KEY`); ignora graciosamente e é sufixado
  `|| true`, para que ele relate sem falhar o CI.

A cobertura do auxiliar de proteção (`createInjectionGuard` / `withInjectionGuard`)
abrange todas as rotas `/v1` que contêm prompts; o texto do prompt é extraído de
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` por
`extractMessageContents()` em `src/shared/utils/inputSanitizer.ts`.
