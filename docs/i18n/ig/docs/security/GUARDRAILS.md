# Guardrails (Igbo)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Isi mmalite nke eziokwu:** `src/lib/guardrails/`
> **Emelitere ikpeazụ:** 2026-08-29 — v3.8.51 (Video Bridge transcript provenance bụ nke onye kpọrọ ọrụ kwupụtara,
> sava enyochabeghị ya — akọwapụtara nke ọma dịka #11661)

Guardrails na-amanye nchekwa, amụma, na mgbanwe ọdịnaya n'ókè dị
n'etiti OmniRoute na ndị na-eweta ọrụ upstream. Guardrail ọ bụla nwere ike inyocha (ma
ọ bụrụ na achọrọ, jụ, gbanwee, ma ọ bụ tinye nkọwa na) payload arịrịọ (`preCall`) na
nzaghachi upstream (`postCall`).

Sistemụ ahụ bụ **fail-open**: ọ bụrụ na guardrail atụpụta njehie mgbe ọ na-arụ ọrụ, registry
na-edekọ njehie ahụ ma gaa n'ihu na guardrail na-esote kama ime ka
arịrịọ ahụ daa. Igbochi bụ mkpebi doro anya (`block: true`), ọ bụghị ihe mberede.

## Nchedo Ndị E Wuru N’ime Ya

Ndebanye aha ahụ na-ebunye ihe nchedo isii na-akpaghị aka dịka usoro mkpa ha si dị mgbe a na-eme mbubata
(lee `registry.ts` → `registerDefaultGuardrails()`):

| Mkpa | Aha                 | Oge            | Faịlụ                 |
| ---- | ------------------- | -------------- | --------------------- |
| `5`  | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`  | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`  | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10` | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20` | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95` | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nọmba mkpa ndị dị ala na-arụ ọrụ **mbụ**.

### Àkwà Mmiri Ọhụụ (`visionBridge.ts`) — Àkwà Mmiri Ụdị Data PR-1

Ọ na-egbochi arịrịọ nwere onyonyo ndị ezubere maka **ụdịdị na-enweghị ọhụụ**, ma
bugharịa arịrịọ ahụ niile gaa na ụdịdị nwere ike ịhụ, ma ọ bụ dochie akụkụ
onyonyo ndị ahụ na nkọwa ederede nke ụdịdị ọhụụ a na-ahazi mepụtara tupu
oku gaa n’elu. Nke a na-eme ka ndị na-eweta ọrụ ederede-naanị nwee ike ijikwa
payload nwere ọtụtụ ụdị data n’enweghị ihe onye ọrụ ga-ahụ.

Usoro:

1. Mafere ya ma ọ bụrụ na ụdịdị ebumnuche ahụ akwadolarị ọhụụ (ọ gwụla ma ọ pụtara na
   ndepụta àkwà mmiri amanyere `isVisionBridgeForcedModel`).
2. Wepụta akụkụ onyonyo site na `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), nke na-enyefe ọrụ ahụ n’aka **onye nchọpụta mgbasa ozi
   jikọrọ ọnụ** `detectMediaParts()` dị na `open-sse/utils/mediaParts.ts` — nke bụ
   naanị isi iyi eziokwu a na-ekekọrịta ya na nzacha ndakọrịta combo.
   Mwepụta ahụ na-eji ndepụta ihe ekwere naanị maka akụkụ ọkwa-elu nwere ọdịdị
   `replaceImageParts` nwere ike ịtinyeghachi (nkwekọrịta extract↔replace): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, na Responses API `input_image`. Ihe achọpụtara n’ime ihe
   ndị ọzọ na ọdịdị ndị na-egosi naanị ihe bụ ihe nzacha-combo ga-eji, a naghịkwa ewepụta ha.
   Mafere ya ma ọ bụrụ na ahụghị nke ọ bụla.
3. Kpebie nhazi oge-arụ ọrụ site na `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): igodo nhazi `modalityBridge*`
   ọhụrụ na-ebute ụzọ; igodo `visionBridge*` ochie ka bụ **ndabere nke otu okirikiri**
   (oghere oge iweghachi azụ). Mafere ya tupu agagharị mgbasa ozi ọ bụla ma ọ bụrụ na
   agbanyụrụ àkwà mmiri ahụ.
4. Onye nhọpụta ọnọdụ (`modalityBridgeVisionMode`, lee tebụl dị n’okpuru) na-ekpebi
   ma a ga-ebugarị ya ka a ga-akọwa ya. Mbugharị na-eweghachi `modifiedPayload` nke naanị
   `model` ka agbanwere, tinyere meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Ụzọ nkọwa: kpachie onyonyo na `maxImages`, hazie prompt maara ọrụ ahụ,
   lelee cache nkọwa, kpọọ ụdịdị ọhụụ **n’otu oge**
   (`Promise.allSettled`), ma tinye akụkụ ederede `[Image N]: <description>` n’ọnọdụ
   ha. Nkọwa dara ada na-enye `null`, a na-**echekwa** akụkụ onyonyo mbụ
   (#4012) — ma e wezụga n’ụzọ nkọwa combo mgbe nkọwa niile dara ada, ebe onye
   na-eweta ọrụ elu nke ekwenyela na ọ nweghị ọhụụ na-enweta stub
   `(adịghị — enweghị onye na-eweta ọrụ nwere ike ịhụ ejikọrọ)` kama (#8430).
6. Weghachi `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Onye nhọpụta ọnọdụ (`modalityBridgeVisionMode`)

| Ọnọdụ      | Ndabara | Omume                                                                                                                                                                                                                                                                   |
| ---------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔       | Usoro ntụle ochie, agbanweghị ya (#6640/#7204): a na-ebugarị ụdịdị na-abụghị combo/`auto/` gaa na ụdịdị ọhụụ kacha mma, ọ gwụla ma ụdịdị mbụ ahụ enweelarị nzere enwere ike iji (mgbe ahụ a na-akọwa); ebumnuche combo na-akọwa mgbe niile.                             |
| `describe` |         | Na-akọwa mgbe niile — a na-amafe ngọngọ mbugharị kpamkpam; ụdịdị onye ọrụ họọrọ na-aza mgbe niile.                                                                                                                                                                      |
| `reroute`  |         | Manye mbugharị: a na-agabiga ihe nchedo nke na-edobe ụdịdị nwere nzere. Ihe nchedo nzere nke **ebumnuche** mbugharị ka na-arụ ọrụ — mgbe enweghị ebumnuche ọhụụ enwere ike iji, arịrịọ ahụ na-adaba n’ụzọ nkọwa ka onyonyo raw ghara iru backend ederede-naanị (#8430). |

Ọnọdụ ndị amanyere na-akwụsị usoro ahụ ngwa ngwa **tupu** usoro ntụle `auto` amalite; omume `auto`
bụ otu byte n’otu byte na ihe nchedo dị tupu PR-1.

#### Oke API-key (`visionBridgeKeyScope.ts`)

Mgbe API key nke onye na-akpọ na-amachi `allowedConnections`, ọdọ quota
(`allowedQuotas`) ma ọ bụ ụdịdị (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), àkwà mmiri ahụ na-ahọrọ naanị
ụdịdị mbugharị na nkọwa igodo ahụ nwere ike iji, na njikọ igodo ahụ nwere ike
iji. Mgbe ahụ, oku nkọwa na-agafe mgbe niile na self-loop OmniRoute nwere
header `x-omniroute-self-loop-key-id`, ka arịrịọ nkata na-anata ya wee manye
amụma njikọ na ụdịdị nke igodo ahụ ọzọ. `enforceApiKeyPolicy()`
na-asọpụrụ header ahụ naanị mgbe ọ nọkọtara na self-loop bearer, ya mere ọ nwere ike
ibelata ohere naanị, a na-ajụkwa id nke a na-apụghị ịchọta.

Ọ bụrụ na enweghị ụdịdị ọhụụ e nyere igodo ahụ ikike iji, ụzọ nkọwa na-apụ n’ụzọ,
arịrịọ ahụ agafekwa n’enweghị mgbanwe, nke bụ otu omume ịhapụ ka ọ gafee mgbe ihe
nchedo agbanyụrụ (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Arịrịọ na-enweghị igodo, na igodo na-enweghị mmachi ndị a, na-eme kpọmkwem dịka
ọ dị na mbụ.

#### Prompt Nkọwa Maara Ọrụ (`modalityBridgeVisionTaskAware`)

Ndabara bụ **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) na-agbakwunye
ederede nke **ozi onye ọrụ ikpeazụ** (e belatara ya ruo mkpụrụedemede 500) na prompt
ndabere maka nkọwa, na-eduzi nkọwa ahụ n'ihe onye ọrụ jụrụ n'ezie
(usoro codex-vision-proxy) ma na-arịọ vision model ka o depụta ederede a na-ahụ anya.
Mgbe flag ahụ gbanyụrụ — ma ọ bụ na enweghị ederede onye ọrụ — a na-eji prompt ndabere
ahụ dịka ọ dị, na-enweghị mgbanwe.

Arịrịọ nke describe self-loop n'onwe ya nke kwekọrọ na OpenAI (`callVisionModelSingle()`
n'ime `visionBridgeHelpers.ts`) na-arịọ `image_url.detail: "high"` mgbe niile —
n'enweghị ọnọdụ ọ bụla, maka onye na-akpọ/provider ọ bụla, ọ bụghị dabere na mgbaàmà
ọ bụla sitere n'aka client. Nlele nwere nkọwa dị ala na-ebelata izi ezi OCR kpọmkwem
maka ọrụ idegharị ederede prompt a na-arịọ, ya mere describe call n'onwe ya na-arịọ
nkọwa dị elu mgbe niile n'agbanyeghị ọkwa nkọwa arịrịọ mbụ batara ji. Nke a na-emetụta
naanị body nke arịrịọ describe dị n'ime; ọ naghị agbanwe ụzọ OmniRoute si eziga
`image_url.detail` nke onye na-akpọ n'arịrịọ bụ isi — a na-etinye ndabara ahụ iche,
naanịkwa maka client OpenCode achọpụtara, n'ime `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`). Alaka Anthropic wire-format nke
describe self-loop enweghị field `detail`, ndabara abụọ ahụ anaghịkwa emetụta ya.

#### Oke mmepụta describe (`modalityBridgeVisionMaxChars`)

| Key                            | Ndabara | Oke                   |
| ------------------------------ | ------- | --------------------- |
| `modalityBridgeVisionMaxChars` | `0`     | `0` ma ọ bụ 100–50000 |

`0` (ndabara) pụtara **enweghị oke** — a na-ebufe nkọwa nke
`callVisionModel()` weghachiri n'enweghị mgbanwe, na-echekwa omume dị ugbu a.
Uru ọ bụla dị n'oke 100–50000 na-ebipụ nkọwa ahụ ma tinye suffix `…` tupu
etinyeghachi ya dịka `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` n'ime `src/lib/guardrails/visionBridge.ts`).
Bulie nke a maka ọrụ OCR nwere ọtụtụ nkọwa ebe model na-esote chọrọ ederede niile;
wetuo ya iji kpachie ojiji token na vision model na-ewepụta ọtụtụ okwu.
Field dashboard ahụ dị na panel Advanced nke taabụ Vision
(`modality-bridge-max-chars` n'ime `ModalityBridgeVisionTab.tsx`) ma na-ebuli
uru ọ bụla dị n'agbata 1 na 99 ruo opekempe 100, ebe ọ na-ahapụ `0` e dere kpọmkwem
n'enweghị mgbanwe — `0` bụ uru Zod ziri ezi n'onwe ya
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ọ bụghị naanị
ndabara "unset".

#### Cache describe (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL dị na ebe nchekwa, nke usoro niile na-ekekọrịta, maka mmepụta describe.
Key = `sha256(imageRef + composedPrompt + configuredBridgeModel)` site na framing
nwere prefix ogologo (enweghị nkukota n'ókè field). Akụkụ model ahụ bụ bridge model
**ahaziri**, ọ bụghị model zara n'ezie — `callVisionModel` nwere ike ịlaghachi
n'ọrụ na model ọzọ n'ime ya, ma iji mbọ ọ bụla mepụta key ga-ekewa cache ahụ.
A naghị echekwa describe ndị dara ada na cache. Ntọala:

| Key                             | Ndabara | Oke     |
| ------------------------------- | ------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`  | —       |
| `modalityBridgeCacheTtlMinutes` | `60`    | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`   | 10–5000 |

#### Ịhazigharị onyonyo dị anya (self-loop describe/base64 fetch)

Mgbe bridge ahụ n'onwe ya na-eweta onyonyo **dị anya** — Anthropic describe
self-call na ntụgharị base64 nke claude-wire-format
(`ensureBase64ImagesForClaudeWire`), ha abụọ site na
`fetchRemoteImageAsDataUri()` n'ime `visionBridgeHelpers.ts` — a na-ebufe data
URI e mepụtara site na `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) tupu etinye ya n'arịrịọ vision-model.
A na-ebelata onyonyo buru oke ibu ruo **2048px n'akụkụ kachasị ogologo**
(nke kwekọrọ na oke resizing OpenAI/Anthropic tinyerela n'akụkụ server), nke
na-ebelata byte/oge nchere upload n'agbanweghị ihe vision model na-ahụ. Resizing
na-eji `sharp`, nke a na-ebunye site na dynamic import: n'elu platform ebe native
binary ya enweghị ike ibunye, `normalizeDataUri()` **anaghị atụpụ njehie ma ọlị** —
ọ na-alaghachi n'ibufe byte mbụ dịka ọ dị, ka ụzọ describe/base64-conversion
nwee ike ịga n'ihu na-arụ ọrụ mgbe niile. A na-ebufekwa byte na-abụghị onyonyo
(fetch nke eweghachighị onyonyo a pụrụ decode) dịka ọ dị, n'enweghị mgbanwe.
Ịhazigharị a metụtara naanị onyonyo bridge ahụ wetara maka self-call nke ya —
anaghị etinye ya n'ọrụ na raw passthrough payload nke onye na-akpọ, nke kwekọrọ
na ụkpụrụ na mgbanwe ga-abụ naanị site na opt-in (Hard Rule #20).

#### Schema ntọala + migration

A na-eji Zod enyocha key `modalityBridge*` ọhụrụ n'ime `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, atọ `modalityBridgeCache*`, na otu
`modalityBridgeAudio*` nke Audio Bridge na-eji. Migration
`141_modality_bridge_settings.sql` na-edepụta uru legacy
`visionBridge*` dị ugbu a gaa na key ọhụrụ kwekọrọ na ha (ọ bụ idempotent,
ọ naghị edegharị uru `modalityBridge*` onye njikwa setịpụrụ); a ka na-anabata
key legacy dịka read fallback maka otu okirikiri release.

#### Header nghọta + stats

Nzaghachi describe gbanwere na-ebu
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(nke `buildModalityBridgeHeader()` na-ewu n'ime `modalityBridge/bridgeStats.ts`,
ma `withModalityBridgeHeader()` na-etinye n'ime `src/sse/handlers/chatHelpers.ts`).
Arịrịọ e zigara n'ụzọ ọzọ anaghị enweta header **ọ bụla** — payload ahụ agbanwebeghị,
a na-ahụkwa mgbanwe model ahụrịrị n'ime field `model` nke body nzaghachi.

`GET /api/modality-bridge/stats` (njirimara njikwa, otu ọkwa ahụ dị ka
`GET /api/settings`) na-eweghachi ọnụọgụ nke modality ọ bụla dị na ebe nchekwa
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` maka `vision`, `audio`, na
`video`. `averageLatencyMs` na-eji `latencySamples`, ọ bụghị mgbalị niile, dịka
ọnụọgụ nkewa ya; arụmọrụ na-enweghị oge atụpụtara anaghị emepụta nlele efu-millisecond
n'ụzọ ụgha. `bridged` ka bụ aha ọzọ kwekọrọ na ụdị ochie maka mgbanwe ndị
gara nke ọma; mgbalị ndị dara ada anaghị abawanye ya.
A na-emegharị ọnụọgụ ndị ahụ ka ha bụrụ efu mgbe usoro ahụ malitegharịrị dịka e si hazie ya
(telemetry, ọ bụghị ndekọ ego).

#### Nhazi dashboard

Ihu dashboard a raara nye ya bụ
`/dashboard/settings/modality-bridge`. Taabụ `Vision`, `Audio`,
na `Video` ya ndị URL nwere ike ịkpọ ozugbo na-echekwa query parameters mgbe a na-agbanwe uru `tab`.
Taabụ Vision na-enye njikwa ịgbalite, mode, nhọrọ model (gụnyere nke ndabara
akpaka), prompting dabere na task, oke dị elu maka timeout/image/description-length/cache,
ọnụọgụ runtime,
na arịrịọ nlele e chebere. Taabụ Audio dịkwa ndụ: ọ na-enye
njikwa ịgbalite, onye-ahọrọ model naanị maka STT nke nwere Auto, oke timeout/max-clip, ọnụọgụ
audio, na ule nlele `input_audio`. Taabụ Video na-arụ ọrụ: ọ na-akọ
ọnọdụ runtime FFmpeg/ffprobe — otu n'ime ọnọdụ UI anọ akọwapụtara (`unknown` mgbe
probe ka na-aga n'ihu ma ọ bụ enweghị ike imecha, `restricted` n'elu dashboard host na-abụghị loopback
ebe a na-amafe probe n'akụkụ client, `unavailable` mgbe e mechara probe
ma gosi na ọ dịghị, ma ọ bụ `available` nke nwere ụdị FFmpeg/ffprobe) — na-echekwa
oke enable/model/frame/video/timeout, na-enyocha onye-ahọrọ model ka ọ bụrụ naanị
model ndị nwere ikike vision, ma na-enye ọnụọgụ video.

Kaadị Vision Bridge ochie dị n'okpuru ntọala AI bụ njikọ ndakọrịta gaa na
ihu ọhụrụ ahụ; ọ naghịzi enwe oyiri nke abụọ nke fọm ahụ. Media Providers na-ejikọkwa
usoro ọrụ Image-to-Text na Speech-to-Text na taabụ Modality
Bridge kwekọrọ na ha n'ewepụghị ebe nnwale Speech-to-Text dị ugbu a.

**Ịgafe nnabata self-loop:** mgbe oku describe gafere site na
`/v1` self-loop nke OmniRoute n'onwe ya (model provider na-abụghị ọkọlọtọ), sub-request ahụ na-eziga
`x-omniroute-admission-bypass: internal` ma jiri credential self-loop a chọpụtara
mee njirimara — sentinel `sk_omniroute` mpaghara na local mode, ma ọ bụ
igodo env `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` onye na-ahụ maka sistemụ haziri (#1350), ka
deployment nwere `REQUIRE_API_KEY=true` wee ka nwee ike ịrụ oku describe. A na-anabata
bypass ahụ naanị maka credential ndị ahụ kpọmkwem, ya mere client mpụga enweghị ike iji
header ahụ gafee nnabata.

Ndabara ochie dị na `src/shared/constants/visionBridgeDefaults.ts`;
ndabara ọhụrụ maka mode/task-aware/cache na settings resolver dị na
`src/shared/constants/modalityBridgeDefaults.ts`. Guardrail ahụ na-enye
nhọrọ constructor `deps` ka ule wee nwee ike itinye mmejuputa adịgboroja nke `getSettings` na
`callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Ọ na-egbochi arịrịọ chat nwere audio tupu ha eruo target a na-amaghị
na ọ na-anabata ntinye audio. Ọ naghị agbanwe ụzọ arịrịọ chat ahụ ma ọlị: a na-atụgharị
akụkụ audio ka ha bụrụ ederede site na endpoint multipart kwekọrọ na OpenAI dị ugbu a, ebe
model chat ahọrọ na-aga n'ihu na transcript ederede.

Usoro:

1. Chọpụta `supportsAudio` site na `getResolvedModelCapabilities()`. Metadata
   provider-registry akọwapụtara doro anya na-ebute ụzọ, metadata model static na-esote, mgbe ahụ
   `modalities_input` emekọrịtara. Ndepụta ntinye ekwuputara nke na-enweghị `audio` bụ `false`; ma ọ bụrụ na
   enweghị ihe akaebe ikike ọ bụla, ọ na-anọ `null`. Ma `false` ma `null` na-eme ka
   bridge nchedo rụọ ọrụ, ebe `true` na-agafe ya.
2. Chọpụta ntọala `modalityBridgeAudio*` ma wepụ akụkụ audio top-level
   enwere ike ịtinye n'ebe ọzọ site na ozi ọ bụla site na detector `detectMediaParts()`
   a na-ekekọrịta. Ụdị wire akwadoro bụ `input_audio` nke OpenAI, `audio_url`, na
   `source.media_type: "audio/*"`. A na-achọpụta audio nested maka routing mana anaghị
   ewepụ ya site na splice path. `modalityBridgeAudioMaxClips` na-amachi oke ọrụ;
   akụkụ ndị na-esote na-anọ otu ha dị.
3. Soro `provider/model` a haziri, ma ọ bụ kwe ka `selectAudioBridgeModel()` gafee
   `AUDIO_TRANSCRIPTION_PROVIDERS` n'usoro catalog kwụsiri ike wee họrọ model mbụ
   nwere credential provider na-arụ ọrụ nke a pụrụ iji.
4. `callAudioTranscription()` na-atụgharị audio base64/data-URI ka ọ bụrụ `file`
   multipart, ma ọ bụ budata `audio_url` dị anya site na outbound guard nke na-anabata naanị
   nke ọha, tinyere DNS pinning na oke 25 MB. Mgbe ahụ ọ na-ezigara faịlụ ahụ na model
   ahọrọ site na POST gaa na self-loop mpaghara `/v1/audio/transcriptions`, jiri
   `resolveSelfLoopBearer()` mee njirimara. Route transcription dị ugbu a na-arụ nchọta
   credential nkịtị, njikwa cooldown/rate-limit, na iziga ya na provider.
5. Oku ndị gara nke ọma na-eji `[Audio N]: <transcript>` dochie akụkụ ha. Oku ndị ahụ
   na-eji `Promise.allSettled` arụ ọrụ: ọdịda nke otu n'otu na-echekwa akụkụ
   audio mbụ ahụ (nkwekọrịta #4012). Ọ bụrụ na oku niile ada ma egosila na target ahụ bụ
   `supportsAudio === false`, akụkụ ndị ahụ na-aghọ
   `[Audio N]: (unavailable — no STT provider connected)` (nkwekọrịta #8430). Maka
   target a na-amaghị (`null`), nsonaazụ ọdịda-niile na-anọ otu ọ dị. Target
   text-only egosipụtara nke na-enweghị credential STT a pụrụ iji na-enweta otu stub
   doro anya ahụ n'emeghị oku netwọkụ.

Transcript ndị gara nke ọma na-eji cache LRU/TTL Modality Bridge nke usoro dum. Key ahụ
na-ejikọta ntụaka audio, label arụmọrụ `audio-transcription` kwụsiri ike,
na model STT ahọrọ; anaghị echekwa ọdịda na cache ma ọlị. Mgbalị Audio na-emelite
ọnụọgụ `bridged`, `cacheHits`, `failures`, na `lastUsedAt` a na-ekekọrịta.
Nzaghachi agbanwere na-ebu
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; arịrịọ
ndị a na-emetụghị anaghị enweta akụkụ Audio Bridge.

A na-akwado ntọala runtime site na DB ma jiri Zod nyochaa ha:

| Igodo                         | Ndabara | Oke                    |
| ----------------------------- | ------- | ---------------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                      |
| `modalityBridgeAudioModel`    | `""`    | Akpaaka ma ọ bụ ID STT |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000            |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10                   |

`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, na
`modalityBridgeCacheMaxEntries` ka na-achịkwa ebe nchekwa nkekọrịta.

### Njikọ Vidio (`videoBridge.ts`, `videoBridgePipeline.ts`)

Ọ na-ejide akụkụ vidio ndị dị n'ọkwa kachasị elu n'ime `messages` nke Chat Completions na
`input` nke Responses API tupu a kpọọ ebe a na-eziga arịrịọ nke a na-amaghị na ọ na-akwado vidio n'ụzọ ebumpụta ụwa.
Ụdị ndị a na-akwado bụ `input_video`, `video_url`, `video_source`, URL HTTPS,
na URI data `data:video/*;base64,...`. A naghị ewere aha faịlụ nkịtị dị n'ederede
dị ka vidio.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) na-ahụ maka ịgagharị n'arịrịọ,
nyocha ikike/iwu, nchịkọta nke arịrịọ ọ bụla, na payload nzaghachi.
Ọrụ nke vidio ọ bụla — inweta ya, cache nke nsonaazụ zuru ezu, ịkọwa usoro
frame (nke na-ejikọta transcript ọdịyo ọ bụla onye kpọrọ ya kwupụtara), yana
metrik/ịkwụsị/nchịcha nke mgbalị ọ bụla — zoro n'azụ `processVideoPart` n'ime
`videoBridgePipeline.ts`, nke a na-akpọ otu ugboro maka akụkụ vidio ọ bụla n'ime loop nke `preCall`.
Modul ahụ na-akọwakwa oke port doro anya `VideoMediaBrokerPort`
(inweta byte na iwepụta frame ndị a họpụtara), `VideoAudioTranscriptionPort`
(ijikọta transcript ọdịyo onye kpọrọ ya kwupụtara na caption ndị a họpụtara), na
`VideoDrilldownPort` (oke nchekwa frame drill-down; ejikọtabeghị ya
na `processVideoPart` — naanị route `/api/modality-bridge/video/drilldown` dị iche
na-ede ntinye drill-down ugbu a).

Ụzọ arịrịọ `/v1` ọha anaghị ebubata ma ọ bụ kpọọ subprocess.
A na-ebudata vidio ndị dị anya n'okpuru oke 50 MiB; vidio base64 dị inline nwere
oke nchekwa nke 36 MiB e decoded maka vidio ọ bụla ka envelopu model/messages/framing
wee nọgide n'ime oke nnabata arịrịọ JSON ọha nke 50 MiB. A na-enyocha ogologo
inline na atụmatụ nha e decoded tupu e kenye ebe nchekwa. A chọrọ HTTPS
na URL mbụ dị anya nakwa na redirect ọ bụla, site n'iji nchedo mbupụ ọha-naanị
dị ugbu a nke nwere DNS pinning. Byte ndị ahụ ga-agafekwa kpọmkwem n'oke broker ime
`POST /api/modality-bridge/video/extract`. Route ahụ bụ ma
`LOCAL_ONLY` ma `SPAWN_CAPABLE`, ọ na-anabata naanị arịrịọ trusted-loopback
nke usoro ahụ n'onwe ya nyochara, ọ dịghịkwa mgbe ọ na-anabata URL, ụzọ filesystem, executable,
ma ọ bụ ndepụta argument. Pipeline nha body nke API na incremental body reader
nke handler na-amanye oke ntinye broker 50 MiB n'adabereghị onwe ha. Queue ya nwere oke
na-eme otu extraction n'otu oge, na-enye ohere ọrụ anọ na-echere, ma na-amachi
ntinye na-echere na 100 MiB.

N'ime broker ahụ, `ffprobe` na-agụ faịlụ mpaghara nzuzo; allowlist format
a kapịrị ọnụ anaghị etinye format playlist na manifest. Maka container ezinụlọ MOV
ndị a na-ekwe, external MOV data reference ka agbanyụrụ na ndabara, iwu
a kapịrị ọnụ anaghịkwa agbanwu ha. Ma `ffprobe` ma `ffmpeg` na-eji
whitelist protocol `file`-naanị, otu thread, array argument a kapịrị ọnụ, enweghị shell,
yana executable ndị e si na `PATH` chọta. Stream mkpuchi attached-picture abụghị
ndị a ga-ahọrọ ka a kpọọ. Stream niile a pụrụ ịkpọ ga-emezu oke ndị ahụ, a na-ahọrọkwa
stream ndabara ekwuputara tupu deterministic lowest-index fallback.
A machibidoro vidio na sekọnd 600, pikselụ 8,192 n'akụkụ ọ bụla, yana
pikselụ isi mmalite 33,554,432. FFmpeg na-ahọrọ frame JPEG midpoint 1–16, na-ebelata
akụkụ ogologo ruo pikselụ 1,024 kacha elu na-enweghị ime ka ntinye nta too,
ọ dịghịkwa mgbe ọ na-anata URL. Sampling bụ `uniform` na ndabara. Iwu nhọrọ
`scene_aware` na `segment_aware` nke nnwale na-eme otu ngafe FFmpeg ọzọ
a kapịrị ọnụ n'elu stream mpaghara enyocharala, họrọ timestamp scene `showinfo`
nwere oke, wee laghachi n'ụzọ deterministic n'otu midpoint uniform ahụ ma detector daa,
oge agwụ, output nwee nrụrụ, ma ọ bụ candidate set tọgbọ chakoo. Ọnọdụ segment-aware
na-ekenye sample midpoint n'ogo kwekọrọ na interval scene ndị enyocharala;
a kọwara ihe akaebe segment-aware na omume fallback n'ụzọ zuru ezu n'okpuru.
A na-etinye oke siri ike nke frame 16
mgbe emechara nhọrọ n'iwu ọ bụla. Mgbe arịrịọ scene-aware nwere naanị
mmefu otu frame, ọ na-eji midpoint uniform nke windo vidio zuru ezu ma ọ bụ focus
na-arụ ọrụ ma kọọ `policyEffective: uniform`: otu frame scene ahọpụtara
enweghị ike ichekwa nsọtụ oge abụọ ahụ. Onye kpọrọ ya nwere ike ịnye
windo focus nwere njedebe (`start`/`end` n'ime sekọnd); a na-amachi oke ya na oge
media ahụ, a na-ajụ windo ndị tụgharịrị ma ọ bụ ndị na-abụghị finite, a na-emekwa iwu
sampling niile naanị n'ime interval e mere ka ọ bụrụ nke nkịtị. A na-etinye
windo si na ya pụta na metadata sampling na prefix nkọwa na-abụghị nke ntụkwasị obi
ka model ndị na-esote nwee ike ịmata ọdịiche dị n'etiti excerpt e lekwasịrị anya na timeline
zuru ezu.

Ilekwasị anya n'ihe caption pụtara bụ ntọala doro anya dị iche. Ọnọdụ analysis
`full` nke ndabara na-echekwa prompt frame dị ugbu a, ọ dịghịkwa mgbe ọ na-eziga ederede
arịrịọ na model caption. N'ọnọdụ `focused`, njikọ ahụ na-agụ naanị
`text`/`input_text` kachasị ọhụrụ na-adịghị efu nke onye ọrụ dere site n'otu container
Chat ma ọ bụ Responses ahụ, na-eme ka ọ bụrụ NFC, na-ejikọta control character na whitespace,
ma na-amachi ya na code point Unicode 500. Nsonaazụ tọgbọ chakoo na-alaghachi na
prompt `full` kpọmkwem. A na-serialize ntụaka bara uru dị ka JSON n'ime block
untrusted-user-context pụrụ iche, ọ nwekwara ike naanị ibute nkọwa a pụrụ ịhụ ụzọ;
ọ pụghị ịkagbu ịdọ aka ná ntị dị iche megide iso ntụziaka ndị a na-ahụ
ma ọ bụ a na-anụ n'ime media. Focus ederede anaghị echepụta `start`/`end` ma ọ bụ gbanwee
temporal sampler.

#### Ihe akaebe segment nke nhazi FU-07

`segment_aware` na-eji otu ngafe nyocha-mbụ nwere oke n'elu iyi vidio mpaghara nke akwadorola. Usoro nzacha a kapịrị ọnụ na-ebu ụzọ belata nha ka obosara ya ghara ịkarị pikselụ 320, chọpụta mgbanwe ọnọdụ na oge onyonyo jụrụ oyi, ma mesịa were ihe nlele n'ọsọ fremụ 1 kwa sekọnd iji nyochaa nhịahụ, nkezi luma, na ozi gbasara oghere/oge. Ngafe ahụ nwere oke nke ihe nlele nhazi 600, otu eri FFmpeg/nzacha, otu ndepụta ikike maka protokolụ `file` naanị na akpa faịlụ, oke mmepụta prosesụ nke 1 MiB, yana sekọnd 30 kachasị n'ime nkwụsị/oge-ngwụcha nkekọrịta nke broker. Ọ dịghị mgbe ọ na-anabata iwu, nzacha, ụzọ faịlụ, ma ọ bụ URL sitere na arịrịọ ahụ.

Ụkpụrụ nhazi ndị ahụ bụ ihe akaebe nlele a pụrụ imepụtaghachi otu ụdị, ọ bụghị nghọta ihe vidio pụtara. Ha anaghị achọpụta ndị a na-egosi, omume, nkọwa onyonyo, okwu ọnụ, ma ọ bụ ebumnuche onye ọrụ. Ókè mgbanwe ọnọdụ na ókè njụ-oyi na-emepụta ngalaba; mkpuchi njụ-oyi, nhịahụ, mkpughe ọkụ, nkọwa oghere, na mgbanwe oge na-emetụta naanị otu esi ekenye mmefu fremụ 1–16 dị ugbu a. A na-amachi ngalaba jụrụ oyi kpamkpam na otu fremụ, ebe ngalaba ndị na-ajụghị oyi na-asọrịta mpi maka mmefu fọdụrụ. Mgbe ọnụ ọgụgụ ókè karịrị ọnụ ọgụgụ fremụ, a na-edobe mkpuchi ahịrị oge nke hà nhata ka mbepụ ọsọ ọsọ n'oge mmalite ghara izochi ogologo ngalaba dị n'azụ. A na-ejikọta ókè mgbanwe ọnọdụ ndị nọ n'ime mkpebi nyocha sekọnd 1 nke ókè njụ-oyi.

Nzacha na-efu, ihe akaebe mebiri emebi/efu, njehie nchọpụta, ma ọ bụ ngafe oge nke nyocha-mbụ nwere oke na-eme ka usoro ahụ laghachi n'usoro kpọmkwem nke etiti oge hà nhata. Nkwụsị sitere n'aka onye kpọrọ ya ma ọ bụ oge-ngwụcha broker anaghị eme ka ọ laghachi n'usoro ahụ: ọ na-akwụsị subprocess na-aga n'ihu, gbochie iwepụta fremụ ndị ọzọ, ma wepụ osisi nwa oge nzuzo n'ime `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` na-emepụta fixtures FFmpeg n'ezie ndị a pụrụ imepụtaghachi otu ụdị maka mbelata oku nkọwa mgbe mwepụ-oyiri gachara, nkesa mmefu maka mmegharị juru eju, ihe akaebe nhịahụ/mkpughe ọkụ/SI-TI, mbepụ ọsọ ọsọ nwere ogologo ọdụ, na nsonaazụ ụgha sitere na mgbanwe nwayọọ nwayọọ. Ọ na-edekọ oge mgbidi nke nyocha-mbụ na, ebe `/usr/bin/time` dị, CPU nke prosesụ nwa na RSS kacha elu. Nnyocha ogo ya bụ naanị ihe ntụaka nhazi. Ogo nke ezigbo ụdị nkọwa ka bụ `HOLD` n'ihi na ngwa nnwale a enweghị endpoint enyere ikike ma ọ bụ onye ọkaikpe emechiri emechi. Nchekwa ego ka bụkwa `HOLD` belụsọ ma `--caption-cost-per-call-usd` nyere atụmatụ doro anya, dị mma, nke ọnụ ahịa kwa oku; script ahụ anaghị echepụta nke ọ bụla n'ime nsonaazụ ndị ahụ.

A na-amachi fremụ ọ bụla na 4 MiB, fremụ raw niile ọnụ na 23 MiB, na nzaghachi broker a haziri n'usoro na 32 MiB. A na-ewepụ ndekọ nwa oge nzuzo n'ime `finally`. OmniRoute anaghị etinye FFmpeg n'ime ngwugwu ya, ọ naghịkwa anabata ụzọ executable ahaziri iche. Tupu ime nkọwa, bridge ahụ na-etinye usoro mwepụ-oyiri ọhụụ dị akpachapụ anya: a na-ebelata JPEG ọ bụla ka ọ bụrụ buffer grayscale 16×16 ma jiri naanị fremụ ikpeazụ e debere tụnyere ya. Maka mmefu nkọwa a rịọrọ nke karịrị otu fremụ, mwepụta na-enye ọdọ ndị ga-ekwe omume nwere oke ruo ugboro abụọ nke mmefu ahụ ma ghara ịkarị fremụ 16. A na-etinye oke a rịọrọ naanị mgbe mwepụ-oyiri gachara, ebe a na-echekwa ndị mbụ na ndị ikpeazụ ahọpụtara n'oge mbelata ikpeazụ ma ọ bụrụ na mmefu ahụ dịkarịa ala abụọ. Amụma nwere ụdị
`grayscale-16x16-mean-cells-v2` na-eji nke ka ukwuu n'etiti mgbanwe nkezi luma na oke mkpụrụ ndụ thumbnail ndị mgbanwe ha e mere ka ọ bụrụ ọkọlọtọ dịkarịa ala 0.05. Oke e ji amata oyiri bụ konstanti 0.04, nke ahọpụtara maka ịdị mfe ibu amụma kama ikpughe ya dịka ntọala runtime. Ihe mgbaàmà nke abụọ a nwere nnukwu ọdịiche na-echekwa obere mmegharị na mgbanwe ederede a na-ahụ anya nke ntụnyere dabere naanị na nkezi nwere ike izochi. Njehie comparator ma ọ bụ decoder na-eme ka usoro ahụ hapụ ihe niile gafere ma debe mkpuchi. Metadata mmepụta na-ekewa ndị a dọpụtara dịka ndị ga-ekwe omume, fremụ ejiri nke ọma, na oyiri ọhụụ a tụfuru.

Akụkụ vidio e ji akara doro anya nwere ike ịrịọ contact sheet nwere timestamp. Bridge ahụ na-ewu grid JPEG nke nwere kọlụm 4 kachasị na fremụ 16. Mkpụrụ ndụ pikselụ 512 ọ bụla na-etinye timestamp nke isi mmalite ya n'ime eriri ala nwere nnukwu ọdịiche, ebe otu timestamp ndị ahụ ka dị na metadata ederede maka njikọ na nyocha n'usoro ndị na-esote. JPEG zuru ezu ka nwere oke 32 MiB. Ọ bụrụ na `sharp` enweghị ike decode ma ọ bụ jikọta grid ahụ, bridge ahụ na-alaghachi na fremụ JPEG ndị ahụ n'otu n'otu; nkwụsị onye ahịa ka na-agafe n'ime ọrụ sheet ahụ.

A na-ekewa ihe akaebe maka nkwalite kpamkpam na microbenchmark nhazi sịntetik. `scripts/perf/video-bridge-contact-sheet-eval.ts` na-akọwa ngwa nnwale A/B nwere schema-version maka ezigbo ụdị ọhụụ dakọtara na OpenAI. Ọ na-atụ token ndị provider kọrọ, latency mgbidi site na mmalite ruo na njedebe (gụnyere nhazi sheet), ọnụ ọgụgụ oku ụdị, na njigide eziokwu ndị manifest kọwara. A naghị ede nzaghachi raw nke ụdị n'ime akụkọ ahụ; naanị digest SHA-256 na ID eziokwu dakọtara ka a na-edebe. Ngwa nnwale ahụ anaghị eme oku netwọkụ ma ọ bụ oku ụdị akwụ ụgwọ belụsọ ma e nyere `--execute-real` ma hazie `--model`, `OMNIROUTE_BASE_URL`, na `OMNIROUTE_API_KEY`. Na-enweghị ọsọ ezigbo ahụ e nyere n'ụzọ doro anya, mkpebi ya igwe nwere ike ịgụ ka bụ `HOLD`; nha payload/ọnụ ọgụgụ oku sịntetik naanị abụghị ihe akaebe maka nkwalite.

Ndị na-akpọ usoro ahụ nwere ike itinye array `transcript.cues` nhọrọ na akụkụ vidio akwadoro mgbe ha nweelarị ederede ahaziri n'oge. Cue ọ bụla ga-enwerịrị `text`, nkeji `start`/`end` nwere njedebe ma dị n'ime ogologo oge a nyochara, yana `source` dị na ndepụta ikike (`client`, `embedded`, ma ọ bụ `audio-bridge`); uru ndabara nke `confidence` bụ `1`, ọ ga-adịkwa n'etiti `0` na `1`. A na-ejikọta cue ndị bụ otu kpọmkwem. OmniRoute anaghị amalite transcription site na metadata a: a na-edegharị cue ndị akwadoro n'ime nsonaazụ a kọwara, tinyere isi mmalite, ntụkwasị obi, na nkeji oge ha, ma gosipụta ha dịka ihe nlele a na-apụghị ịtụkwasị obi n'akụkụ nkọwa fremụ. A na-ajụ ederede na-ezighi ezi, nke karịrị oke, ma ọ bụ nke na-enweghị ebe o si bịa kama ịgwakọta ya n'ime iyi nkọwa. Ọwa transcript abụọ nke request-body na-eme ka provenance enyere bụrụ `client`, gụnyere akara `embedded` ma ọ bụ `audio-bridge` mmadụ nyere onwe ya. Naanị adapter nke sava nwe nwere ike ịnye akara ndị ahụ a tụkwasịrị obi site na argument `trustedSource` nke koodu naanị; field JSON nke arịrịọ enweghị ike iru argument ahụ. Ederede transcript ka bụ ọdịnaya sitere na mgbasa ozi a na-apụghị ịtụkwasị obi, n'agbanyeghị provenance ya, ọ gaghịkwa ekpebi ikike nnweta ma ọlị.

Onye na-akpọ oku nwere nka dị elu nwere ike ịnye track `audioTranscript` maka otu vidio ahụ;
a na-ewere ya dị ka ederede onye ahịa nyere, ọ bụghị ihe akaebe na sava mere transcript.
Ebe njikọ fusion ahụ na-eme ka nlele anya na nke ọdịyo rụọ ọrụ n'okpuru
otu oge ngwụcha na mgbaama nkwụsị, na-ahazi ha n'otu usoro oge, na-ejikọta
ndekọ ndị yiri onwe ha kpamkpam, ma na-akọ nsonaazụ ezughị ezu mgbe naanị otu akụkụ gara nke ọma.
`audioTranscript` na-adịghị irè na-eweda usoro ahụ gaa na nsonaazụ ezughị ezu ahụ — a na-edobe
nkọwa anya ahụ, ebe ngalaba ọdịyo na-edekọ koodu ọdịda e mere ka ọ ghara ikpughe ozi —
kama ime ka vidio ahụ dum daa. A na-echekwa ịdị adị nke ngalaba ọ bụla, ọkọlọtọ nke nsonaazụ ezughị ezu,
na koodu ọdịda e mere ka ha ghara ikpughe ozi n'ime nsonaazụ akọwara, n'ime
metadata guardrail (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), n'ime metadata cache nsonaazụ, nakwa n'ime counter
fusion nke bridge. Ụzọ Video Bridge ndabara anaghị akpọ speech-to-text
ma ọ bụ budata oyiri mgbasa ozi nke abụọ; ma ọ bụrụ na e nyeghị track ahụ n'ụzọ doro anya, ọ ga-anọgide
na-arụ ọrụ naanị na vidio.

**Idobe transcript (#12150 P1).** Nke a na-emetụta onwe ya mgbe ọ bụla
Video Bridge (nke a na-ahọrọ iji n'onwe ya) gosipụtara cue transcript — enweghị
ọkọlọtọ idobe ọzọ. Mgbe arịrịọ gosipụtara cue transcript ọ bụla (ma ọ bụ
`transcript` onye na-akpọ oku kwupụtara, ma ọ bụ `audioTranscript` e jikọtara), guardrail na-akanye ya
`videoBridgeObserved` ma mepụta onyinyo nkọwa vidio e kpuchiri ozi ya —
ngosi yiri nke mbụ kpamkpam ebe e jiri
`[redacted-video-transcript]` dochie akụkụ ederede nnwere onwe nke cue ọ bụla, nke e wuru site n'iji dochie mpaghara cue ahaziri
tupu e jikọta eriri ahụ (ọ bụghị site n'ịtụgharị ederede e mere larịị, ka ọdịnaya cue ọ bụla —
ma nke e mere iji wakpo usoro ma ọ bụ nke nkịtị, gụnyere akụkụ nwere `]` dịka
`[inaudible]`/`[music]` — ghara ịlanarị). Ahụ arịrịọ call-log a na-adịgide adịgide na-eji
onyinyo e kpuchiri ozi ya dochie akụkụ ederede ọ bụla sitere na vidio, site n'ịtụnyere
ịha nhata ọdịnaya; a na-agụghachi njikọ `fullText` site na payload guardrail tupu oku
emechara, ya mere ntụnyere ahụ ka na-aga nke ọma mgbe guardrail ndị ọzọ n'usoro gasịrị (ihe mkpuchi PII na
credential, priorities 10/95) degharịrị ederede nkọwa ahụ n'otu ebe, nakwa
mgbe ntinye system-prompt/handoff/memory gbanwere nhazi array ozi ahụ. Ahụ
e zigara upstream nye model anaghị agbanwe. Arịrịọ a hụrụ anaghịkwa etinye
Memory ọ bụla na-adịgide adịgide (a na-amafere mwepụta sitere na arịrịọ na nke sitere na nzaghachi),
ya mere nzaghachi model n'onwe ya enweghị ike ikwughachi ederede transcript n'ime Memory.

**Mpaghara vidio raw (#12430).** Mgbe enyere bridge ahụ aka ma amaghị ma nkwado vidio native dị ma ọ bụ na ọ dịghị, mpaghara `transcript`/`audioTranscript` akọwapụtara na-emekwa ka `videoBridgeObserved` rụọ ọrụ, ọbụna mgbe nkọwa dara ma ọ bụ mgbe e ruru oke `maxVideos`. `null` na eriri efu na-agụnye; mpaghara na-anọghị na metadata na-abụghị nke vidio anaghị agụnye. Oyiri e debere na-ekpuchi mpaghara ndị a ma ọ bụ hapụ arịrịọ ahụ, a na-agafekwa caches/Memory.

N'ụzọ fallback ndị ahụ, cue onye na-akpọ oku nyere nke ziri ezi na-aghọ akụkụ `text`/`input_text`
a na-akwado kama ịbụ mpaghara provider na-abụghị ọkọlọtọ. Track abụọ ahụ arịrịọ nyere
ka bụ nlele `client` a na-atụkwasịghị obi, tinyere ịdọ aka ná ntị doro anya na a kọwaghị vidio ahụ
nakwa na enyochaghị timestamps megide mgbasa ozi ahụ. Oke
256-cue/64-KiB mkpokọta na nke cue ọ bụla dị ugbu a na-emetụta track abụọ ahụ ọnụ;
timestamps ga-adaba n'ime oke sekọnd 600 nke broker nakwa n'ime windo focus ọ bụla
e nyere. A na-atụfu track na-adịghị irè, a naghị eziga ha dị ka ederede nkịtị; a ka nwere ike iji
track ibe ya ziri ezi ma ọ bụrụ na mkpokọta ha agafeghị oke. Mpaghara null/efu
anaghị atụkwasị ederede ọ bụla. Fallback a anaghị agbakwunye fetch mgbasa ozi ma ọ bụ transcription.
A na-ewepụ mpaghara mgbakwunye transcript na ihe na-ebu vidio fallback ahụ nakwa n'ime
object `video_url`/`source` ya. Allowlist wire OpenAI ka siri ike; ihe na-ebu
vidio native a na-amaghị ka dị, ebe target a maara na ọ bụ naanị ederede na-edobe marker nchebe.
Onyinyo redaction ahaziri na-echebe ederede transcript agbakwunyere, ebe
arịrịọ mbụ nke onye na-akpọ oku nwere anaghị agbanwe. Target nwere nkwado native na
bridge agbanyụrụ na-ejigide omume bypass ha dị ugbu a.

Oyiri ndị ọzọ e debere na-eji otu mgbaama arịrịọ a hụrụ. Snapshot raw
nke arịrịọ client tupu guardrail, arịrịọ pending dị n'ime memory, na log arịrịọ a jụrụ n'oge
na-eji nhazi dochie mpaghara transcript dị n'akụkụ vidio;
a na-ekpuchi string prompt ndị pipeline stage na context handoff mepụtara
na sink ahụ arịrịọ a na-adịgide adịgide. Marker `video_content_removed`
a na-adịgide adịgide na-eme ka continuation `previous_response_id` mechie mgbe ọ dara kama iwughachi
ederede e kpachaara anya tụfuo. Ọ bụrụ na arịrịọ a hụrụ atụfuo
onyinyo redaction nke akụkụ ya tupu logging, ma ọ bụ ọbụna otu n'ime ọtụtụ onyinyo vidio
enweghị ike ịdakọ mgbe mgbanwe arịrịọ ndị mechara gasịrị, a na-ahapụ ahụ arịrịọ e debere
kpamkpam kama idobe transcript e kpuchiri naanị akụkụ ya.

Maka arịrịọ a hụrụ, nzaghachi model nwere ike ihota akụkụ ọ bụla nke
transcript n'enweghị oke cue ahaziri. Ya mere, a na-eji marker nhapụ dochie
`responseBody` call-log ya na-adịgide adịgide; a naghị edobe artifact pipeline zuru ezu
(nke nwere ike ịgụnye ahụ upstream/client na chunk stream).
Semantic, idempotency, na reasoning-replay caches na-agafe ọgụgụ na ide
maka arịrịọ ahụ. Arịrịọ provider na nzaghachi client na-ahụ anaghị agbanwe.
A na-ekpochapụ byte keepalive mbụ na buffer nwa oge mgbe a hapụrụ artifact zuru ezu.
Ịdọ aka ná ntị EventStream Kiro na-adịghị n'usoro na-akọ naanị ọnụ ọgụgụ byte payload, ọ dịghị mgbe ọ na-akọ ọdịnaya ya
ma ọ bụ njehie raw nke parser JSON.
Nke a anaghị ekwu na enyochala diagnostic provider/plugin ọ bụla ọzọ na-enweghị njikọ;
a na-esochi nyocha sara mbara nke sink ndị a na-edobe na #11658.

Usoro ndụ ime `/api/modality-bridge/video/drilldown` bụ ntọala cache dị iche, nke na-eji loopback/token eme nkwenye njirimara. Ọrụ ọ bụla chọkwara ID principal canonical opaque. Tupu enyere onye na-akpọ usoro production ikike, ọ ga-esi na tenant e nyochara njirimara ya nweta ID ahụ, ọ gaghịkwa ebufe uru onye ahịa họọrọ. Igodo cache na-ejikọta principal ahụ na ID session na video-reference canonical, na-echekwa naanị igodo ndị e wepụtara site na SHA-256, ma na-amachi ma ọgụgụ ma nhichapụ n'otu principal ahụ. Cache ahụ na-echekwa karịa frame JPEG 16 e wepụtaraghị n'otu entry, na-eme ka ha kubie ume mgbe nkeji iri gachara, ma na-akwado ọgụgụ `start`/`end` nwere oke ma ọ bụ nhichapụ session kpọmkwem.

A na-amachi principal ọ bụla na entry 16 na data JPEG canonical 64 MiB. Oke ndị ahụ dị iche na oke zuru ụwa ọnụ nke entry 64/256 MiB: nrụgide quota nke principal na-achụpụ naanị entry nke principal ahụ ejighị eme ihe kemgbe ogologo oge tupu a tụlee nchụpụ LRU zuru ụwa ọnụ. A na-ewepụ entry ndị kubiela ume na ndekọ principal na nke zuru ụwa ọnụ mgbe cache na-arụ ọrụ, ebe ịkagbu na ọdịda validation anaghị edobe nnọchi ezughị ezu.

Cache ahụ na-ajụ Base64 na-abụghị canonical, padding karịrị akarị, media na-abụghị JPEG, JPEG ndị emebiri emebi ma ọ bụ ndị e bepụrụ, nakwa JPEG ndị na-ebute ịdọ aka ná ntị n'oge decode `sharp` nke onyonyo zuru ezu nwere oke. Ọ na-emegharị onyonyo ọ bụla a nabatara ka ọ bụrụ JPEG canonical, na-enweta obosara na ịdị elu site na byte ndị e decode kama ịtụkwasị field onye na-akpọ ya obi, ma na-atụfu byte polyglot ọ bụla dị n'azụ kama idowe ha. Ọ bụ naanị buffer canonical compressed nwere oke ka a na-agụnye na quota abụọ ahụ. Oke JSON wire gụnyere overhead Base64 maka oke decoded-input 32 MiB. Derivation ọ bụla echekwara na-edekọ format/resolution JPEG ya e nyochara, sampling policy, derivation version, oge e kere ya, content hash sava gbakọrọ, yana parent reference e hashiri tinyere parent-content hash nke onye na-akpọ a tụkwasịrị obi. A na-enyocha ịkagbu n'etiti phase decode/hash asynchronous tupu atomic cache commit.

Akụkụ ọrụ a ejikọbeghị onye na-emepụta production na route ahụ, ọ naghịkwa enye nhọrọ variant nwere ọtụtụ resolution. Ya mere, ụzọ arịrịọ Video Bridge na-agafe n'enweghị ihe mgbochi anaghị ebute ọrụ ọzọ, ebe inweta principal dabere na tenant na usoro ndụ FU-08 zuru ezu nwere ọtụtụ resolution ka bụ ọrụ ndị a ga-eme n'ihu n'ụzọ doro anya, kama ịkọwa ha dị ka omume emechara.

A na-enye frame caption n'usoro site na Video model ahaziri. Video override efu na-eketa ntọala Vision; ọ bụrụ na ha abụọ efu, Vision auto-router na-ahọrọ model dị irè nke nwere ikike vision. Caption ndị gara nke ọma na-eji prefix kwụsiri ike `[Video description:` dochie part mbụ; prefix ahụ na-akakwa text ahụ dị ka observation sitere na media a na-atụkwasịghị obi ma gwa model ndị na-esote ka ha ghara iso ntuziaka achọtara n'ime media ahụ. Igodo cache frame-caption gụnyere byte JPEG, prompt, timestamp, na model dị irè; ọ bụ naanị caption ndị gara nke ọma ka a na-echekwa na cache. Entry cache na-edowe model producer nke gara nke ọma n'ezie, gụnyere fallback model; bridge ahụ na-akọ `mixed` mgbe model dị iche iche mepụtara frame dị iche iche. Cache hit na-eji producer identity ahụ ọzọ kama ịkpọgharị ya aha dịka routing plan a rịọrọ. A na-eji input ọ bụla na-agbanwe output mepụta igodo cache nke nsonaazụ vidio dum — prompt, model dị irè, sampling policy, ọnụ ọgụgụ frame, semantic analysis mode, fingerprint SHA-256 nke normalized focus hint, focus window, `transcript`, `audioTranscript`, na contact-sheet flag — ya mere ịgbanwe otu n'ime akụkụ ndị ahụ na-ebute cache miss, ọ bụghị iji data ochie eme ihe ọzọ. A na-etinyekwa visual dedup policy version, threshold, na ọnụ ọgụgụ candidate-frame nwere oke kpọmkwem n'ime result-cache key na metadata; ya mere mgbanwe policy agaghị eji nkọwa vidio dum nke ochie eme ihe ọzọ. Metadata result-cache v4 na-edowe mode na fingerprint, ọ dịghị mgbe ọ na-edowe raw user task. Metadata guardrail na-akọ ma analysis mode a rịọrọ ma nke dị irè; a na-akọ mode `focused` a rịọrọ nke na-enweghị user text bara uru dịka `full` n'ụzọ dị irè.

Guardrail ahụ na-ewepụta video part ọ bụla a na-akwado, mana ọ naghị akọwa karịa `modalityBridgeVideoMaxVideos`. Maka target e gosipụtara na o nwere `supportsVideo === false`, vidio ndị dara ada na ndị gafere oke na-aghọ safe text marker doro anya ka raw video ọ bụla ghara ịlanarị. Mgbe a maghị capability, part ndị ahụ na-edowe video carrier ha; fallback transcript ọ bụla na-agbaso bounded text conversion dị n'elu. Target nwere `supportsVideo === true` na-agafe bridge ahụ. Client request abort signal na-erute download, broker queue, subprocess, na caption call; abort na-akwụsị n'etiti vidio ma ọ dịghị mgbe ọ na-ahapụ raw media ka ọ gafee n'enweghị nchebe.

A na-akwado ntọala runtime site na DB ma jiri Zod mee validation:

| Igodo                               | Ndabara     | Oke / omume                                                                                                         |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Runtime nhọrọ, a ga-ahọrọ ya ka ọ rụọ ọrụ                                                                           |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` na-echekwa nkọwa izugbe; `focused` na-eji ọnọdụ onye ọrụ kachasị ọhụrụ nke nwere oke ma a na-atụkwasịghị obi |
| `modalityBridgeVideoModel`          | `""`        | Keta model Vision Bridge                                                                                            |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, ma ọ bụ `segment_aware` kwekọrọ n’ogo; ọdịda detector na-alaghachi na `uniform`           |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                 |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                      |

A na-amachi ụkpụrụ timeout Video ochie echekwara karịrị sekọnd 120 ka ha kwekọọ na
oge ngwụcha broker; a na-ajụ ide ntọala ọhụrụ karịrị oke ahụ.
`GET /api/modality-bridge/video/runtime` chọrọ locality loopback a tụkwasịrị obi nke e tinyere stampụ
tupu authentication ma ọ bụ nyocha runtime, emesịa ọ chọrọ auth njikwa.
Ọ na-eweghachi naanị `available`, ụdị FFmpeg/ffprobe e mere ka ha dị ọcha, na otu
ihe kpatara edoziri mgbe runtime adịghị. Endpoint extraction dị n’ime abụghị
API upload ọha: njupụta queue na-eweghachi `503` tinyere `Retry-After`, nkwụsị
njikọ nke caller na-eweghachi `499`, ebe oge ngwụcha broker edoziri na-eweghachi `504`. Nzaghachi agbanwere na-agbakwunye
`video->text;model=<visionModel>;parts=<videos>` na header etiti
`x-omniroute-modality-bridge` n’ewepụghị akụkụ Vision ma ọ bụ Audio.

### Ihe mkpuchi PII (`piiMasker.ts`)

Ọ na-arụ ọrụ na nkebi **abụọ ahụ**.

- **`preCall`** na-eme clone payload, na-agafe `system`, `messages`, `input`, na
  `prompt` (gụnyere ihe ndị bụ naanị string), ma tinye `processPII()` (site na
  `@/shared/utils/inputSanitizer`) n’ubi string `content`/`text`. Mgbe
  `PII_REDACTION_ENABLED=true`, a na-ekpuchi PII achọpụtara n’ime payload
  a na-ezipụ. Nke a adabereghị na `INPUT_SANITIZER_MODE` (nke na-achịkwa naanị
  amụma prompt-injection). Mgbe redaction agbanyụrụ, call ahụ na-edekọ ọnụ ọgụgụ
  nchọpụta n’edegharịghị ọdịnaya.
- **`postCall`** na-eme deep-clone nke nzaghachi, na-agba `sanitizePIIResponse()` tinyere
  ihe mkpuchi ọdịdị Responses-API (`maskResponsesOutput` — na-ekpuchi
  `output_text` na `output[].content[].text`). Ọ bụrụ na redaction ọ bụla emee,
  nzaghachi agbanwere ga-anọchi nke mbụ.

Guardrail ahụ anaghị egbochi ihe ọ bụla; ọ na-etinye naanị nkọwa (`meta.detections`,
`meta.redacted`) ma ọ bụ na-edegharị.

### Prompt Injection (`promptInjection.ts`)

Ọ na-achọpụta nhazi mmegide n’ime ọdịnaya onye ọrụ nyere ma na-amanye
amụma ahaziri. Ọ bụ environment variables na nhọrọ constructor na-achịkwa
omume ya:

| Ntọala      | Env var                                                                                                | Ndabara | Mmetụta                                                                                                                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Agbanyere   | `INPUT_SANITIZER_ENABLED`                                                                              | `true`  | Mgbe ọ bụ `false`, guardrail na-akwụsị ozugbo.                                                                                                                                                   |
| Mode        | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                        | `warn`  | Amụma injection: `block`, `warn`, ma ọ bụ `log`. (A na-anabata `redact` maka ndakọrịta ochie, mana ọ **naghị** ewepụ ederede injection; `PII_REDACTION_ENABLED` na-achịkwa idegharị PII arịrịọ.) |
| Oke mgbochi | nhọrọ `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (aha ọzọ `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`  | Ogo ịdị njọ kacha nta achọrọ iji gbochie. N’ụkpụrụ ndabara, Medium bụ naanị maka nlekota.                                                                                                        |

**Usoro mkpa mode** (`getMode`): `options.mode` nke caller →
override feature-flag DB nke `INJECTION_GUARD_MODE` **(Dashboard → Settings →
Feature Flags)** → env `INJECTION_GUARD_MODE` → env `INPUT_SANITIZER_MODE` →
`warn`. Ya mere, override dashboard na-akarị env vars, nke pụtara na UI Feature
Flags na-achịkwa guard na-arụ ọrụ ozugbo (enweghị restart). Ọgụgụ DB ahụ bụ fail-safe:
ọ bụrụ na njehie emee, guard na-alaghachi n’omume dabere na env, ma mgbe enweghị
override edobere, omume ahụ bụ otu ihe ahụ dị ka mkpebi sitere naanị na env.

Isi mmalite nchọpụta:

1. `sanitizeRequest()` sitere na `@/shared/utils/inputSanitizer` (otu set detector
   a na-eji n’ebe ndị ọzọ n’ime pipeline).
2. `DEFAULT_GUARD_PATTERNS` arụnyere n’ime ya (ugbu a bụ `system_override_inline` na
   `markdown_system_block`, ha abụọ nwere ogo ịdị njọ `high`).
3. `customPatterns` nhọrọ ebufere site na nhọrọ constructor (strings, regex,
   ma ọ bụ ndekọ `{ name, pattern, severity }`).

Mgbe `mode === "block"` **ma** opekata mpe otu nchọpụta ruru oke ogo
ize ndụ, `preCall` na-eweghachi `{ block: true, message: "Request rejected:
suspicious content detected" }`. Na ọnọdụ `warn`/`log`, guardrail na-edekọ ihe mana
ọ na-ekwe ka oku ahụ gaa n'ihu. A na-ebupụkwa enyemaka nkekọrịta `evaluatePromptInjection()`
maka ndị na-akpọ ya chọrọ inyocha prompts na-agaghị site na registry.

**Oke nyocha (v3.8.20):** detector na-enyocha naanị **16 KB mbụ** nke
ederede prompt ejikọtara — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) n'ime
`src/shared/utils/inputSanitizer.ts`. Ma `detectInjection()` ma
`evaluatePromptInjection()` na-eji `slice(0, MAX_INJECTION_SCAN_BYTES)` tupu ha amalite
pattern loop. Ntuziaka injection na-adịkarị nso n'elu input, ya mere nke a
na-amachi ojiji regex CPU/GC na payload ndị ruru ọtụtụ narị KB n'emeghị ka nchọpụta ghara ịdị ike (lee
#3932, #4041).

### Ihe Nkpuchi Nzere (`credentialMasker.ts`)

Ọ na-arụ ọrụ na **usoro abụọ ahụ**, ma bụrụ nke ikpeazụ na default chain (priority `95`). Ọ na-ezo
ụkpụrụ API-key / secret-token ndị a ma ama n'ime outbound payload (ọdịnaya ozi,
arụmụka tool-call, nsonaazụ tool) **yana** nzaghachi provider, ka
nzere e tinyere na prompt (ma ọ bụ nke nsonaazụ tool weghachiri) ghara ịpụ
gaa na upstream provider ma ọ bụ laghachikwuru client.

- **A ga-ahọrọrịrị iji ya**, otu ụkpụrụ ahụ dị ka PII redaction (n'akụkụ Hard Rule #20):
  agbanyụrụ ya belụsọ ma `settings.credentialRedactionEnabled === true` **ma ọ bụ**
  `CREDENTIAL_REDACTION_ENABLED=true`. Mgbe agbanyụrụ ya, guardrail anaghị eme ihe ọ bụla —
  ọ naghị egbochi ma ọ naghị edegharị.
- `redactCredentials()` na-agafe osisi payload/response dum (`walkValue()`,
  nke echekwara pụọ na prototype-pollution, ma chekwaa megide cycle site na `WeakSet`) ma jiri
  placeholder `[REDACTED:<type>]` dochie ihe dabara, na-emepụta oyiri naanị nke alaka ndị
  gbanwere n'ezie.
- `CREDENTIAL_PATTERNS` na-ekpuchi igodo provider LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), token VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), igodo ịkwụ ụgwọ (Stripe, Square), igodo
  cloud (AWS access key, Twilio, SendGrid, Mailgun), private keys / JWTs,
  connection strings nwere nzere (`mongodb://user:pass@...`, wdg.), yana
  ụkpụrụ header-value izugbe `Authorization`/`x-api-key`/`api-key`/`apikey`.
  A na-ezo igodo ndị yiri header (`authorization`, `x-api-key`, `api-key`,
  `apikey`) n'ụdị nhazi (naanị value, ebe a na-edobe scheme prefix dịka
  `Bearer `/`Basic `) kama iji generic text regex.
- Guardrail anaghị egbochi mgbe ọ bụla; naanị ihe ọ na-eme bụ idegharị (`modifiedPayload` /
  `modifiedResponse`) na ịgbakwunye nkọwa (`meta.credentialsRedacted`, `meta.count`).

Nchedo regression: `tests/unit/credential-masker-guardrail.test.ts`.

## Nkwekọrịta Ntọala (`base.ts`)

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
  block?: boolean; // true na-akwụsị usoro ahụ ozugbo
  message?: string; // a na-egosi ya mgbe a na-egbochi
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // preCall na-eweghachi ya iji degharịa arịrịọ ahụ
  modifiedResponse?: TValue; // postCall na-eweghachi ya iji degharịa nzaghachi ahụ
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

Guardrail na-egosi “enweghị mgbanwe” site n'ịweghachi `void`, `{}`, ma ọ bụ
`{ block: false }`. Iweghachi `modifiedPayload`/`modifiedResponse` na-eji uru ahụ
dochie uru na-agafe n'usoro ahụ maka guardrail ndị na-esote.
`signal?: AbortSignal` na-ebunye usoro ndụ onye kpọrọ ọrụ ahụ n'ime guardrail. Ịkwụsị arịrịọ bụ ọnọdụ pụrụ iche fail-open e kpachapụrụ anya: àkwà mmiri mgbasa ozi na-akwụsị ọrụ ma na-ehichapụ ihe ndị fọdụrụ n'enweghị iweghachi mgbasa ozi raw n'ebe a maara na ọ naghị akwado ya.

## Ndebanye (`registry.ts`)

Singleton `guardrailRegistry` na-enye:

- `register(guardrail)` — na-agbakwụnye guardrail (ma ọ bụ jiri aha ahaziri dochie nke dị adị) ma
  hazie ha ọzọ dịka `priority` na-arịgo.
- `clear()` / `list()` — ngwa enyemaka nchịkwa.
- `runPreCallHooks(payload, context)` — na-agafe guardrail ndị na-arụ ọrụ, na-ebufe
  payload ahụ site na `modifiedPayload`, ma kwụsị na `block: true` mbụ.
- `runPostCallHooks(response, context)` — otu usoro ahụ n'akụkụ nzaghachi.
- `resetGuardrailsForTests({ registerDefaults })` — na-ehichapụ ọnọdụ ma, ma ọ bụrụ na ahọrọ ya,
  debanyeghachi ntọala ndabara iji kewapụ ule nke ọma.

Ndị na-agba ọsọ abụọ ahụ na-eweghachi `{ blocked, payload|response, results, guardrail?, message? }`
ebe `results` bụ n'usoro ndekọ `GuardrailExecutionResult` nke gụnyere mpaghara
`blocked`, `skipped`, `modified`, `error`, na `meta` maka guardrail ọ bụla,
nke bara uru maka nsuso.

### Ịgbanyụ Guardrail Maka Arịrịọ Ọ Bụla

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` na-achịkọta ndepụta
aha guardrail na-enweghị oyiri nke a ga-awụli maka arịrịọ dị ugbu a. Isi mmalite
(ha niile bụ nhọrọ, a na-ejikọta ha niile):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` dị n'ahụ arịrịọ (n'ọkwa kachasị elu)
- `metadata.disabledGuardrails` dị n'ahụ arịrịọ
- Header `x-omniroute-disabled-guardrails` (ma ọ bụ nke ochie
  `x-disabled-guardrails`)

Uru nwere ike ịbụ n'usoro string ma ọ bụ string nke rikoma kewara; a na-ahazi
aha ka ha bụrụ lowercase kebab-case (`pii_masker` → `pii-masker`). A na-ebufe
nsonaazụ ahụ site na `context.disabledGuardrails` gaa na ndebanye ahụ, nke na-awụli
guardrail ndị dabara (`skipped: true` n'ime `results`).

## Usoro Mmezu

Maka arịrịọ ọ bụla na-agafe na `src/sse/handlers/chat.ts` na
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` na-emepụta ndepụta ihe a ga-amafe site na API key, body,
   na headers.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` na-eme guardrails n'usoro priority
   na-arị elu:
   - A na-edekọ guardrails ndị agbanyụrụ dịka `skipped`.
   - `preCall` nke guardrail ọ bụla nwere ike idegharị payload site na `modifiedPayload`.
   - `block: true` mbụ na-akwụsị usoro ahụ ozugbo, handler ahụ wee weghachite
     nzaghachi ọjụjụ guardrail.
3. Payload ahụ (nke enwere ike idegharị) na-abanye na combo routing na upstream
   dispatch.
4. Mgbe ahaziri nzaghachi ahụ, `guardrailRegistry.runPostCallHooks(...)`
   na-eme otu usoro ahụ na nzaghachi ahụ. `block: true` n'ebe a na-ewepụ nzaghachi
   upstream ahụ.

A na-edekọ guardrails ndị tụbara mperi na `error: <message>`, a na-edekwa ha na log site na
`logger.warn`, mana usoro ahụ na-aga n'ihu — nke a bụ nhazi fail-open e mere ụma.

## Nhazi

Environment variables ndị guardrails arụnyere n'ime sistemụ na-agụ:

| Variable                              | Ihe na-eji ya             | Mmetụta                                                                                                 |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Tọọ ya ka ọ bụrụ `false` iji gbanyụọ nchọpụta kpamkpam.                                                 |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Iwu injection: `warn`, `block`, ma ọ bụ `log`. Legacy value `redact` anaghị edegharị ederede injection. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Mode maka injection guard; ọ bụkwa DB feature flag nke **na-akagbu** env vars (DB > ENV).               |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Severity kacha nta nke `MODE=block` na-ajụ: `high` (ndabara), `medium`, ma ọ bụ `low`.                  |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Legacy alias maka `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                    |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Mgbe ọ bụ `true`, a na-ekpuchi PII dị na request (n'adabereghị na injection mode).                      |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Na-achịkwa omume masker n'akụkụ response.                                                               |

Guardrails nke Modality Bridge na-agụ runtime config site na settings store
nke DB na-akwado (`getSettings()`), ọ bụghị env vars. Primary keys nke Vision bụ
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, na
`modalityBridgeCacheMaxEntries`. A na-anabata legacy
`visionBridge*` keys naanị dịka documented one-cycle read
fallback; ihe dashboard na-ede na-eji primary keys. Defaults na fallback
resolver dị na `src/shared/constants/modalityBridgeDefaults.ts`, ebe a ka na-edobe legacy
constants na `src/shared/constants/visionBridgeDefaults.ts`.

Audio na-eji `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, na `modalityBridgeAudioMaxClips`, tinyere settings
`modalityBridgeCache*` ndị a na-ekekọrịta. Audio enweghị legacy-key fallback n'ihi na e
webatara keys ndị a na schema nke Modality Bridge.

Video na-eji `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, na
`modalityBridgeVideoTimeout`, tinyere settings `modalityBridgeCache*` ndị a na-ekekọrịta.
A na-agbanyụ ya na ndabara n'ihi na FFmpeg/ffprobe bụ operational
dependencies ndị nhọrọ, na frame captioning na-agbakwunye latency na model cost.

## Guardrail Ahaziri

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

Nzọụkwụ:

1. Mepụta `src/lib/guardrails/myGuardrail.ts` nke na-agbatị `BaseGuardrail`.
2. Mejuputa `preCall` na/ma ọ bụ `postCall`.
3. Debanye ya n'oge mbubata (tinye site na `registerDefaultGuardrails`) ma ọ bụ
   kpọọ `guardrailRegistry.register(...)` n'oge sistemụ na-arụ ọrụ — ndekọ ahụ na-eji
   guardrail ọhụrụ dochie nke ọ bụla dịbu nke nwere otu aha ahaziri ahazi.
4. Tinye ule n'okpuru `tests/unit/` (ihe atụ ndị dị ugbu a:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Nnwale

Jiri `resetGuardrailsForTests()` n'etiti ule iji malite site n'ọnọdụ a maara.
Nyefee `{ registerDefaults: false }` iji malite na ndekọ efu ma
debanye naanị guardrail ndị a na-anwale. Vision Bridge na-anabata ntinye
ndabere (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge na-ekpughe
ebe ntinye yiri ya maka ntọala, ike, nhọrọ ụdị STT, nyocha
nzere, na ntụgharị okwu ọdịyo gaa na ederede. Ya mere, ule nwere ike ịnwale usoro abụọ ahụ na-enweghị ohere
ịnweta DB ma ọ bụ netwọkụ.

## Hụkwa

- `src/lib/guardrails/` — mmejuputa
- `src/shared/utils/inputSanitizer.ts` — ihe nchọpụta a na-ekekọrịta nke na-akwado
  igbochi ntinye prompt na ikpuchi PII
- `src/shared/constants/visionBridgeDefaults.ts` — ndabara Vision Bridge na
  ndepụta ụdị nke a na-amanye iji bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — ndabara runtime Vision/Audio a na-ekekọrịta
- `docs/architecture/RESILIENCE_GUIDE.md` — oyi akwa kwụụrụ onwe ya (circuit breaker, oge nchere)
- `docs/reference/ENVIRONMENT.md` — ntụaka zuru ezu nke env var

## Mkpuchi route nke injection-guard & red-team (Oge 8 · Blọk D)

Injection-guard (`createInjectionGuard` / `withInjectionGuard`) na-ekpuchi route niile
na-anabata prompt ndị ọrụ. Ọ na-asọpụrụ `INJECTION_GUARD_MODE` (ndabara `warn` = naanị dekọọ;
`block` = weghachite HTTP 400 `SECURITY_001`).

| Ụdị                 | Route                                                                                                                                                | Ọnọdụ ndabara |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Ederede (dị ugbu a) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Mmepụta             | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Data                | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Mwepụta ederede (`extractMessageContents`) na-ekpuchi `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (kwa abalị, `nightly-llm-security.yml`):** promptfoo na-akwado na route ọ bụla na-egbochi
corpus OWASP-LLM mgbe `INJECTION_GUARD_MODE=block`; garak na-agba probes (ọ na-awụfe ma ọ bụrụ na secret adịghị).
Agụnyere `moderations` maka ịdị n'otu — ndị na-ahụ maka sistemụ nọ na block-mode nwere ike iwepụ ya site na
`resolveDisabledGuardrails`.

Workflow nke abalị (`.github/workflows/nightly-llm-security.yml`, cron + iji aka
malite) nwere ọrụ abụọ:

- **`promptfoo-guard` (na-egbochi)** — na-agba `promptfoo eval -c promptfooconfig.yaml`
  na `INJECTION_GUARD_MODE=block`. Ọnọdụ mmegide ọ bụla (dịka "leghara
  ntuziaka niile gara aga anya…", jailbreak ụdị DAN) na-akwado na nzaghachi ahụ nwere
  `error.code === "SECURITY_001"`, ya bụ, na guard ahụ jụrụ arịrịọ ahụ n'ezie.
- **`garak` (ndụmọdụ)** — na-agba garak `--probes promptinject,dan,leakreplay`
  megide instance OmniRoute mpaghara (`http://localhost:20128/v1`). A na-achịkwa ya site na
  secret onye na-eweta (`PROMPTFOO_PROVIDER_KEY`); ọ na-awụfe n'enweghị nsogbu ma tinye
  `|| true` na njedebe, ya mere ọ na-enye akụkọ na-emeghị ka CI daa.

Mkpuchi nke ihe enyemaka guard (`createInjectionGuard` / `withInjectionGuard`)
na-erute route `/v1` ọ bụla nwere prompt; a na-ewepụta ederede prompt site na
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` site na
`extractMessageContents()` dị na `src/shared/utils/inputSanitizer.ts`.
