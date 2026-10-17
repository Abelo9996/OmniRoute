# Guardrails (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Pinagmumulan ng katotohanan:** `src/lib/guardrails/`
> **Huling na-update:** 2026-08-29 — v3.8.51 (ang pinagmulan ng transcript ng Video Bridge ay idinedeklara ng tumatawag,
> hindi pa bineberipika ng server — nilinaw alinsunod sa #11661)

Ipinapatupad ng mga guardrail ang kaligtasan, patakaran, at mga pagbabago sa content sa hangganan
sa pagitan ng OmniRoute at mga upstream provider. Maaaring suriin ng bawat guardrail (at
opsyonal na tanggihan, baguhin, o lagyan ng anotasyon) ang mga request payload (`preCall`) at
mga upstream response (`postCall`).

Ang system ay **fail-open**: kung mag-throw ang isang guardrail habang isinasagawa, itinatala ng registry
ang error at nagpapatuloy sa susunod na guardrail sa halip na mabigo ang
request. Ang pag-block ay isang tahasang desisyon (`block: true`), at hindi kailanman aksidente.

## Mga Built-in na Guardrail

Awtomatikong nilo-load ng registry ang anim na guardrail ayon sa pagkakasunod-sunod ng priyoridad kapag ini-import
(tingnan ang `registry.ts` → `registerDefaultGuardrails()`):

| Priyoridad | Pangalan            | (Mga) Yugto    | File                  |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Ang mas mababang numero ng priyoridad ang **unang** pinapatakbo.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Sinasalo ang mga request na may larawan na nakatuon sa mga **model na walang vision** at alinman sa
ini-reroute ang buong request patungo sa isang model na may kakayahang vision o pinapalitan ang mga bahagi ng larawan
ng mga tekstuwal na paglalarawang ginawa ng isang nako-configure na vision model bago
ang upstream call. Nagbibigay-daan ito sa mga text-only provider na malinaw at tuluy-tuloy na pangasiwaan ang
mga multimodal payload.

Daloy:

1. Laktawan kung sinusuportahan na ng target na model ang vision (maliban kung kasama ito sa
   listahan ng sapilitang bridge na `isVisionBridgeForcedModel`).
2. I-extract ang mga bahagi ng larawan sa pamamagitan ng `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), na ipinapasa ang gawain sa **pinag-isang media
   detector** na `detectMediaParts()` sa `open-sse/utils/mediaParts.ts` — ang
   nag-iisang mapagkukunan ng katotohanang ginagamit din ng combo compatibility filter.
   Ang extraction ay limitado sa allowlist ng mga top-level na bahagi na may mga anyong
   maaaring muling isingit ng `replaceImageParts` (ang extract↔replace contract): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, at Responses API `input_image`. Ang mga nested na tugma at
   indicator-only na anyo ay materyal para sa combo filter at hindi kailanman ine-extract.
   Laktawan kung walang nahanap.
3. I-resolve ang runtime config sa pamamagitan ng `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): mananaig ang mga bagong setting key na `modalityBridge*`;
   mananatili bilang **fallback sa loob ng isang cycle** ang mga legacy na key na `visionBridge*`
   (rollback window). Lumaktaw bago ang anumang media traversal kapag
   naka-disable ang bridge.
4. Ang mode selector (`modalityBridgeVisionMode`, tingnan ang talahanayan sa ibaba) ang nagpapasya kung
   reroute o describe. Ibinabalik ng reroute ang `modifiedPayload` na ang `model` lamang
   ang pinalitan, kasama ang meta na `{ rerouted, fromModel, toModel, imagesKept }`.
5. Describe path: limitahan ang mga larawan sa `maxImages`, buuin ang task-aware na prompt,
   konsultahin ang describe cache, tawagan ang vision model nang **sabay-sabay**
   (`Promise.allSettled`), at ipalit ang mga text part na `[Image N]: <description>` sa
   mga ito. Ang nabigong describe ay nagbabalik ng `null` at **pinapanatili** ang orihinal na bahagi ng larawan
   (#4012) — maliban sa combo describe path kapag nabigo ang lahat ng
   describe, kung saan ang isang kumpirmadong non-vision upstream ay binibigyan ng
   `(unavailable — no vision-capable provider connected)` stub sa halip (#8430).
6. Ibalik ang `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Mode selector (`modalityBridgeVisionMode`)

| Mode       | Default | Gawi                                                                                                                                                                                                                                                                                                             |
| ---------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔       | Legacy na heuristic, hindi binago (#6640/#7204): ang mga non-combo/`auto/` model ay nire-reroute sa pinakamahusay na vision model maliban kung mayroon nang magagamit na credential ang orihinal na model (kung gayon ay describe); palaging describe ang mga combo target.                                      |
| `describe` |         | Palaging describe — ganap na nilalaktawan ang reroute block; palaging ang piniling model ng user ang sumasagot.                                                                                                                                                                                                  |
| `reroute`  |         | Sapilitang reroute: nilalampasan ang keep-credentialed-model guard. Nalalapat pa rin ang credential guard para sa reroute-**target** — kapag walang magagamit na vision target, nagpapatuloy ang request sa describe upang hindi kailanman makarating ang mga raw na larawan sa isang text-only backend (#8430). |

Ang mga sapilitang mode ay nagso-short-circuit **bago** patakbuhin ang auto heuristic; ang gawi ng `auto`
ay byte-identical sa guardrail bago ang PR-1.

#### Saklaw ng API key (`visionBridgeKeyScope.ts`)

Kapag nililimitahan ng API key ng caller ang `allowedConnections`, mga quota pool
(`allowedQuotas`) o mga model (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), pumipili lamang ang bridge
ng mga reroute at describe model na maaaring gamitin ng key, sa mga connection na maaaring
gamitin ng key. Pagkatapos, palaging dumadaan ang describe call sa OmniRoute self-loop na may
`x-omniroute-self-loop-key-id` header, upang muling ipatupad ng tumatanggap na chat request
ang policy ng key na iyon para sa connection at model. Iginagalang lamang ng `enforceApiKeyPolicy()`
ang header na iyon kapag kasama ang self-loop bearer, kaya maaari lamang nitong
higpitan ang access, at tinatanggihan ang isang id na hindi mare-resolve.

Kung walang vision model na pinahihintulutan para sa key, hindi nakikialam ang describe path at
dumadaan ang request nang walang pagbabago, kapareho ng fail-open na gawi ng isang naka-disable na
guardrail (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Ang mga request na walang key, at ang mga key na walang ganitong mga paghihigpit, ay kumikilos nang eksaktong
gaya ng dati.

#### Task-aware na describe prompt (`modalityBridgeVisionTaskAware`)

Default na **true**. Idinaragdag ng `composeVisionPrompt()` (`visionBridgeHelpers.ts`) ang
teksto ng **huling mensahe ng user** (pinuputol sa 500 character) sa batayang
describe prompt, upang ituon ang paglalarawan sa aktuwal na hiniling ng user
(codex-vision-proxy pattern) at hilingin sa vision model na i-transcribe ang
nakikitang teksto. Kapag naka-off ang flag — o walang teksto mula sa user —
ginagamit ang batayang prompt nang walang pagbabago.

Ang sariling OpenAI-compatible na request ng describe self-loop (`callVisionModelSingle()`
sa `visionBridgeHelpers.ts`) ay palaging humihiling ng `image_url.detail: "high"` —
nang walang kondisyon, para sa bawat caller/provider, at hindi nakadepende sa anumang
signal mula sa client. Pinapababa ng low-detail sampling ang katumpakan ng OCR para
mismo sa gawaing pag-transcribe ng teksto na hinihingi ng prompt na ito, kaya palaging
humihiling ng high detail ang mismong describe call, anuman ang detail level na ginamit
ng orihinal na papasok na request. Nakaaapekto lamang ito sa internal na describe
request body; hindi nito binabago kung paano ipinapasa ng OmniRoute ang sariling
`image_url.detail` ng caller sa pangunahing request — hiwalay na inilalapat ang default
na iyon, at para lamang sa mga natukoy na OpenCode client, sa `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`). Walang `detail` field ang
Anthropic wire-format branch ng describe self-loop at hindi ito naaapektuhan ng alinman
sa mga default.

#### Limitasyon ng describe output (`modalityBridgeVisionMaxChars`)

| Key                            | Default | Saklaw          |
| ------------------------------ | ------- | --------------- |
| `modalityBridgeVisionMaxChars` | `0`     | `0` o 100–50000 |

Ang `0` (default) ay nangangahulugang **walang limitasyon** — ipinapasa nang walang
pagbabago ang paglalarawang ibinalik ng `callVisionModel()`, kaya napapanatili ang
kasalukuyang gawi. Puputulin ng anumang value sa saklaw na 100–50000 ang paglalarawan
at lalagyan ito ng `…` suffix bago ito isingit bilang `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` sa `src/lib/guardrails/visionBridge.ts`).
Taasan ito para sa mga OCR task na maraming detalye kung saan kailangan ng downstream
model ang buong transcription; babaan ito upang limitahan ang paggamit ng token sa
madadaldal na vision model. Matatagpuan ang dashboard field sa Advanced panel ng
Vision tab (`modality-bridge-max-chars` sa `ModalityBridgeVisionTab.tsx`) at
itinataas nito sa minimum na 100 ang anumang value mula 1 hanggang 99 habang hindi
binabago ang tahasang `0` — ang `0` ay isang valid na Zod value sa sarili nitong
karapatan (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), at
hindi lamang ang default na "unset".

#### Describe cache (`modalityBridge/bridgeCache.ts`)

In-memory na LRU + TTL cache para sa mga describe output, na ibinabahagi sa buong
process. Key = `sha256(imageRef + composedPrompt + configuredBridgeModel)` na may
length-prefix framing (walang mga banggaan sa hangganan ng field). Ang bahagi para
sa model ay ang **naka-configure** na bridge model, hindi ang model na aktuwal na
sumagot — maaaring internal na mag-fallback ang `callVisionModel`, at ang paggawa
ng key para sa bawat attempt ay magpapira-piraso sa cache. Hindi kailanman kina-cache
ang mga bigong describe. Mga setting:

| Key                             | Default | Saklaw  |
| ------------------------------- | ------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`  | —       |
| `modalityBridgeCacheTtlMinutes` | `60`    | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`   | 10–5000 |

#### Pag-normalize ng remote image (self-loop describe/base64 fetch)

Kapag ang bridge mismo ang kumukuha ng **remote** na image — ang Anthropic describe
self-call at ang claude-wire-format na base64 conversion
(`ensureBase64ImagesForClaudeWire`), na parehong gumagamit ng
`fetchRemoteImageAsDataUri()` sa `visionBridgeHelpers.ts` — ipinapadaan ang
nabubuong data URI sa `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) bago ito i-embed sa request para sa vision model.
Ang mga sobrang laking image ay binabawasan sa **2048px na mahabang gilid** (tumutugma
sa resize cap na inilalapat na ng OpenAI/Anthropic sa server-side), na nagpapababa sa
upload bytes/latency nang hindi binabago ang nakikita ng vision model. Gumagamit ang
pag-resize ng `sharp`, na nilo-load sa pamamagitan ng dynamic import: sa isang platform
kung saan hindi ma-load ang native binary nito, **hindi kailanman nagti-throw** ang
`normalizeDataUri()` — nagfa-fallback ito sa direktang pagpasa ng mga orihinal na byte,
kaya patuloy na gumagana ang describe/base64-conversion path. Hindi rin binabago at
direktang ipinapasa ang mga byte na hindi image (isang fetch na hindi nagbalik ng
nade-decode na image). Nalilimitahan ang normalization na ito sa mga image na
kinukuha ng bridge para sa sarili nitong self-call — hindi ito kailanman inilalapat
sa raw passthrough payload ng caller, alinsunod sa prinsipyo ng pagbabago lamang kapag
nag-opt in (Mahigpit na Panuntunan #20).

#### Settings schema + migration

Zod-validated ang mga bagong `modalityBridge*` key sa `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, ang `modalityBridgeCache*` trio, at ang
`modalityBridgeAudio*` group na ginagamit ng Audio Bridge. Kinokopya ng migration
na `141_modality_bridge_settings.sql` ang mga kasalukuyang legacy na
`visionBridge*` value sa mga katugmang bagong key (idempotent, at hindi kailanman
ino-overwrite ang `modalityBridge*` value na itinakda ng operator); patuloy na
tinatanggap ang mga legacy key bilang read fallback sa loob ng isang release cycle.

#### Transparency header + stats

Ang mga response na binago sa pamamagitan ng describe ay may
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(binuo ng `buildModalityBridgeHeader()` sa `modalityBridge/bridgeStats.ts`,
at inilalagay ng `withModalityBridgeHeader()` sa `src/sse/handlers/chatHelpers.ts`).
**Walang** header ang mga ni-reroute na request — hindi binago ang payload at makikita
na ang pagpapalit ng model sa `model` field ng response body.

Ang `GET /api/modality-bridge/stats` (management auth, kaparehong tier ng
`GET /api/settings`) ay nagbabalik ng mga in-memory counter ayon sa modality
na `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` para sa `vision`, `audio`, at
`video`. Ginagamit ng `averageLatencyMs` ang `latencySamples`, hindi ang lahat ng
attempts, bilang denominator nito; ang isang operasyong walang timing ay hindi
gumagawa ng pekeng zero-millisecond na sample. Nananatili ang `bridged` bilang
backward-compatible na alias para sa matagumpay na mga conversion; hindi ito
dinadagdagan ng mga nabigong attempt.
Sadyang nire-reset ang mga counter kapag nag-restart ang proseso
(telemetry, hindi accounting).

#### Configuration ng dashboard

Ang nakalaang dashboard page ay
`/dashboard/settings/modality-bridge`. Pinapanatili ng mga tab nitong `Vision`,
`Audio`, at `Video` na maaaring tukuyin sa URL ang mga query parameter habang
binabago ang value ng `tab`.
Makikita sa Vision tab ang pag-enable, mode, pagpili ng model (kabilang ang
awtomatikong default), task-aware prompting, mga advanced na limitasyon sa
timeout/image/description-length/cache, mga runtime
counter, at isang sample request na may guard. Live din ang Audio tab: makikita
rito ang pag-enable, STT-only na model picker na may Auto, mga limitasyon sa
timeout/max-clip, mga audio counter, at isang `input_audio` sample test. Ganap na
gumagana ang Video tab: iniuulat nito ang runtime state ng FFmpeg/ffprobe — isa
sa apat na tahasang UI state (`unknown` habang isinasagawa ang probe o kung hindi
ito makumpleto, `restricted` sa isang non-loopback dashboard host kung saan
nilalaktawan ang probe sa client side, `unavailable` matapos ma-probe at
makumpirmang wala ito, o `available` kasama ang mga bersyon ng FFmpeg/ffprobe) —
pine-persist nito ang mga limitasyon sa enable/model/frame/video/timeout,
sinasala ang model picker upang ipakita lamang ang mga model na may kakayahan sa
vision, at inilalantad ang mga video counter.

Ang dating Vision Bridge card sa ilalim ng AI settings ay isa na ngayong
compatibility link patungo sa bagong page; wala na itong hiwalay na pangalawang
kopya ng form. Nagbibigay rin ang Media Providers ng mga link mula sa mga
workflow na Image-to-Text at Speech-to-Text patungo sa kaukulang mga tab ng
Modality Bridge nang hindi inaalis ang umiiral na Speech-to-Text playground.

**Pag-bypass sa admission para sa self-loop:** kapag dumaraan ang describe call
sa sariling `/v1` self-loop ng OmniRoute (non-standard na provider model),
ipinapadala ng sub-request ang `x-omniroute-admission-bypass: internal` at
ina-authenticate ito gamit ang na-resolve na self-loop credential — ang lokal na
`sk_omniroute` sentinel sa local mode, o ang env key na
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` na na-configure ng operator (#1350) upang
magawa pa rin ng mga deployment na may `REQUIRE_API_KEY=true` ang describe call.
Ang bypass ay tinatanggap lamang para sa eksaktong mga credential na iyon, kaya
hindi magagamit ng mga external client ang header upang laktawan ang admission.

Nasa `src/shared/constants/visionBridgeDefaults.ts` ang mga legacy default; nasa
`src/shared/constants/modalityBridgeDefaults.ts` ang mga bagong default para sa
mode/task-aware/cache at ang settings resolver. Naglalantad ang guardrail ng
isang `deps` constructor option upang makapag-inject ang mga test ng mga pekeng
implementation ng `getSettings` at `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Sinasalo nito ang mga chat request na may audio bago makarating ang mga ito sa
isang target na hindi kilalang tumatanggap ng audio input. Hindi nito kailanman
nire-reroute ang chat request: tina-transcribe ang mga audio part sa pamamagitan
ng umiiral na OpenAI-compatible multipart endpoint at nagpapatuloy ang napiling
chat model gamit ang mga text transcript.

Daloy:

1. I-resolve ang `supportsAudio` sa pamamagitan ng
   `getResolvedModelCapabilities()`. Nangunguna ang tahasang metadata ng
   provider-registry, kasunod ang static na model metadata, at pagkatapos ay ang
   naka-sync na `modalities_input`. Ang idineklarang input list na walang
   `audio` ay `false`; kung walang anumang ebidensya ng capability, nananatili
   itong `null`. Parehong ina-activate ng `false` at `null` ang conservative
   bridge, samantalang nilalaktawan naman ito ng `true`.
2. I-resolve ang mga setting na `modalityBridgeAudio*` at kunin ang mga
   spliceable na top-level audio part mula sa bawat message sa pamamagitan ng
   shared na `detectMediaParts()` detector. Ang mga sinusuportahang wire shape
   ay OpenAI `input_audio`, `audio_url`, at `source.media_type: "audio/*"`.
   Natutukoy ang nested audio para sa routing ngunit hindi ito inaalis ng splice
   path. Nililimitahan ang trabaho ng `modalityBridgeAudioMaxClips`; hindi
   ginagalaw ang mga kasunod na part.
3. Sundin ang isang naka-configure na `provider/model`, o hayaang siyasatin ng
   `selectAudioBridgeModel()` ang `AUDIO_TRANSCRIPTION_PROVIDERS` ayon sa stable
   na catalog order at piliin ang unang model na may magagamit na aktibong
   provider credential.
4. Kino-convert ng `callAudioTranscription()` ang base64/data-URI audio sa isang
   multipart na `file`, o dina-download ang isang remote na `audio_url` sa
   pamamagitan ng public-only outbound guard na may DNS pinning at 25 MB na
   limitasyon. Pagkatapos, ipinapadala nito sa pamamagitan ng POST ang file at
   napiling model sa lokal na `/v1/audio/transcriptions` self-loop, na
   ina-authenticate gamit ang `resolveSelfLoopBearer()`. Isinasagawa ng umiiral
   na transcription route ang normal na credential lookup, paghawak sa
   cooldown/rate-limit, at provider dispatch.
5. Pinapalitan ng mga matagumpay na call ang kanilang mga part ng
   `[Audio N]: <transcript>`. Tumatakbo ang mga call gamit ang
   `Promise.allSettled`: pinapanatili ng isang indibidwal na failure ang
   orihinal na audio part na iyon (#4012 contract). Kung mabigo ang lahat ng
   call at napatunayang `supportsAudio === false` ang target, magiging
   `[Audio N]: (hindi available — walang nakakonektang STT provider)` ang mga
   part (#8430 contract). Para sa isang hindi kilalang target (`null`), hindi
   ginagalaw ang resulta kapag nabigo ang lahat. Ang isang napatunayang
   text-only na target na walang magagamit na STT credential ay tumatanggap ng
   parehong tahasang stub nang hindi nagsasagawa ng network call.

Ginagamit ng mga matagumpay na transcript ang process-wide na LRU/TTL cache ng
Modality Bridge. Pinagsasama ng key ang audio reference, ang stable na
`audio-transcription` operation label, at ang napiling STT model; hindi kailanman
kina-cache ang mga failure. Ina-update ng mga audio attempt ang mga shared na
counter na `bridged`, `cacheHits`, `failures`, at `lastUsedAt`.
Ang mga na-transform na response ay may
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; ang mga
request na hindi ginalaw ay hindi nakakatanggap ng Audio Bridge segment.

DB-backed at Zod-validated ang mga runtime setting:

| Key                           | Default | Saklaw              |
| ----------------------------- | ------- | ------------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                   |
| `modalityBridgeAudioModel`    | `""`    | Awtomatiko o STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000         |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10                |

Ang nakabahaging cache ay nananatiling kinokontrol ng `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, at `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Hinaharang ang mga top-level na bahagi ng video sa Chat Completions `messages` at
Responses API `input` bago tawagin ang target na walang kilalang katutubong suporta
para sa video. Ang mga sinusuportahang anyo ay `input_video`, `video_url`,
`video_source`, mga HTTPS URL, at `data:video/*;base64,...` na mga data URI. Ang
mga payak na filename sa teksto ay hindi itinuturing na video.

Ang `VideoBridgeGuardrail.preCall` (`videoBridge.ts`) ang namamahala sa paglalakbay
sa request, pagsusuri ng kakayahan/patakaran, pagsasama-sama kada request, at
response payload. Ang gawain kada video — pagkuha, cache ng buong resulta,
paglalarawan ng pagkakasunod-sunod ng mga frame (na nagsasanib ng anumang audio
transcript na idineklara ng tumatawag), at mga sukatan/pag-abort/paglilinis sa
bawat pagtatangka — ay nakatago sa likod ng `processVideoPart` sa
`videoBridgePipeline.ts`, na tinatawag nang isang beses kada bahagi ng video sa
loob ng loop ng `preCall`. Tinutukoy rin ng module na iyon ang mga tahasang
hangganan ng port na `VideoMediaBrokerPort` (pagkuha ng mga byte at pag-extract
ng mga na-sample na frame), `VideoAudioTranscriptionPort` (pagsasanib ng audio
transcript na idineklara ng tumatawag sa mga na-sample na caption), at
`VideoDrilldownPort` (ang hangganan ng persistence para sa frame drill-down; hindi
pa nakakabit sa `processVideoPart` — tanging ang hiwalay na
`/api/modality-bridge/video/drilldown` route lamang ang nagsusulat ng mga
drill-down entry sa kasalukuyan).

Ang pampublikong `/v1` request path ay hindi kailanman nag-i-import o tumatawag ng
subprocess. Dina-download ang mga remote video sa ilalim ng limitasyong 50 MiB;
ang mga inline base64 video ay may konserbatibong 36 MiB na decoded na limitasyon
kada video upang manatili ang model/messages/framing envelope sa loob ng
pampublikong limitasyon sa pagtanggap ng JSON request na 50 MiB. Sinusuri ang
inline na haba at mga pagtatantya ng decoded na laki bago ang allocation.
Kinakailangan ang HTTPS sa paunang remote URL at sa bawat redirect, gamit ang
umiiral na public-only outbound guard na may DNS pinning. Pagkatapos, tumatawid
ang mga byte sa eksaktong internal na hangganan ng broker na
`POST /api/modality-bridge/video/extract`. Ang route na iyon ay parehong
`LOCAL_ONLY` at `SPAWN_CAPABLE`, tumatanggap lamang ng authenticated kada proseso
at pinagkakatiwalaang loopback request, at hindi kailanman tumatanggap ng URL,
filesystem path, executable, o listahan ng mga argument. Magkahiwalay na
ipinatutupad ng API body-size pipeline at incremental body reader ng handler ang
50 MiB na limitasyon sa input ng broker. Nagpapatakbo ang bounded queue nito ng
isang extraction sa bawat pagkakataon, nagpapahintulot ng apat na nakabinbing
trabaho, at nililimitahan ang nakabinbing input sa 100 MiB.

Sa loob ng broker, nagbabasa ang `ffprobe` ng pribadong lokal na file; hindi
kasama sa nakapirming allowlist ng format ang mga format ng playlist at manifest.
Para sa mga pinapayagang MOV-family container, nananatiling naka-disable bilang
default ang mga external MOV data reference, at hindi ino-opt in ng nakapirming
command ang mga ito. Parehong ginagamit ng `ffprobe` at `ffmpeg` ang
`file`-only na protocol whitelist, isang thread, mga nakapirming array ng
argument, walang shell, at mga executable na niresolba mula sa `PATH`. Ang mga
attached-picture cover stream ay hindi mga kandidatong maaaring i-play. Dapat
matugunan ng lahat ng playable stream ang mga limitasyon, at inuuna ang isang
tahasang default stream bago ang deterministikong fallback na may pinakamababang
index. Nililimitahan ang mga video sa 600 segundo, 8,192 pixel kada dimensiyon,
at 33,554,432 source pixel. Kumukuha ang FFmpeg ng 1–16 midpoint JPEG frame,
pinaliliit ang mahabang gilid sa hindi hihigit sa 1,024 pixel nang hindi
pinalalaki ang mas maliliit na input, at hindi kailanman tumatanggap ng URL.
`uniform` ang sampling bilang default. Gumagawa ang opsyonal na `scene_aware` at
eksperimental na `segment_aware` na mga patakaran ng isang karagdagang nakapirming
FFmpeg pass sa na-validate nang lokal na stream, pumipili ng mga bounded
`showinfo` scene timestamp, at deterministikong bumabalik sa parehong mga
uniform midpoint kapag nabigo ang detector, nag-timeout, may malformed na
output, o walang laman ang candidate set. Ang segment-aware mode ay naglalaan
ng mga midpoint sample nang proporsyonal sa mga na-validate na scene interval;
ang segment-aware na ebidensiya at fallback behavior ay detalyado sa ibaba. Ang
mahigpit na limitasyong 16 frame ay inilalapat pagkatapos ng pagpili sa bawat
patakaran. Kapag ang isang scene-aware request ay may budget na isang frame
lamang, ginagamit nito ang uniform midpoint ng aktibong full-video o focus
window at nag-uulat ng `policyEffective: uniform`: hindi mapananatili ng iisang
napiling scene frame ang parehong temporal na dulo. Maaaring opsyonal na
magbigay ang tumatawag ng finite na focus window (`start`/`end` na mga segundo);
ikinakapit ang mga hangganan sa tagal ng media, tinatanggihan ang mga baligtad o
non-finite na window, at isinasagawa lamang ang lahat ng patakaran sa sampling
sa loob ng normalized na interval. Isinasama ang resultang window sa sampling
metadata at sa untrusted na description prefix upang matukoy ng mga downstream
model ang isang nakatutok na sipi mula sa buong timeline.

Ang semantic caption focus ay isang hiwalay at tahasang setting. Pinapanatili ng
default na `full` analysis mode ang umiiral na frame prompt at hindi kailanman
ipinapasa ang request text sa caption model. Sa `focused` mode, binabasa lamang
ng bridge ang pinakabagong hindi bakanteng `text`/`input_text` na isinulat ng
user mula sa parehong Chat o Responses container, ino-normalize ito sa NFC,
pinagsasama ang mga control character at whitespace, at nililimitahan ito sa
500 Unicode code point. Kapag walang laman ang resulta, babalik ito sa eksaktong
`full` prompt. Ang isang magagamit na hint ay sine-serialize bilang JSON sa
isang nakalaang untrusted-user-context block at maaari lamang nitong unahin ang
mga napagmamasdang detalye; hindi nito maaaring i-override ang hiwalay na babala
laban sa pagsunod sa mga tagubiling nakikita o naririnig sa media. Ang textual
focus ay hindi kailanman naghihinuha ng `start`/`end` o nagbabago sa temporal
sampler.

#### FU-07 na estruktural na ebidensiya ng segment

Gumagamit ang `segment_aware` ng isang bounded na pre-analysis pass sa na-validate nang lokal na video stream. Ang nakapirming filter chain ay nag-i-scale muna sa hindi hihigit sa 320 pixel ang lapad, tumutukoy ng mga pagbabago ng eksena at mga naka-freeze na interval, at pagkatapos ay nagsa-sample sa 1 frame bawat segundo para sa blur, average na luma, at spatial/temporal na impormasyon. Nililimitahan ang pass sa 600 structural sample, isang FFmpeg/filter thread, kaparehong allowlist ng `file`-only na protocol at container, 1 MiB na limitasyon sa process output, at hindi hihigit sa 30 segundo sa loob ng nakabahaging abort/deadline ng broker. Hindi ito kailanman tumatanggap ng command, filter, path, o URL mula sa request.

Ang mga structural value ay deterministic na sampling evidence, hindi semantikong pag-unawa sa video. Hindi ipinapalagay ng mga ito ang mga subject, action, caption, speech, o layunin ng user. Bumubuo ng mga segment ang mga hangganan ng scene at freeze; nakaiimpluwensiya lamang ang freeze coverage, blur, exposure, spatial detail, at temporal change sa kung paano inilalaan ang umiiral na budget na 1–16 frame. Nililimitahan sa isang frame ang isang ganap na naka-freeze na segment, samantalang nagpapaligsahan ang mga hindi naka-freeze na segment para sa natitirang budget. Kapag mas marami ang mga hangganan kaysa sa mga frame, pinananatili ang pantay na timeline coverage upang hindi maitago ng mabilis na mga cut sa simula ang isang mahabang segment sa hulihan. Pinagsasama ang mga scene boundary na nasa loob ng 1-segundong analysis resolution ng isang freeze boundary.

Kapag nawawala ang mga filter, malformed/walang laman ang evidence, may detector error, o nag-timeout ang bounded na pre-analysis, nagfa-fail open ito sa eksaktong uniform midpoint policy. Hindi nagfa-fail open ang abort ng caller o deadline ng broker: itinitigil nito ang kasalukuyang subprocess, pinipigilan ang kasunod na frame extraction, at inaalis ang pribadong temporary tree sa `finally`.

Gumagawa ang `scripts/perf/video-bridge-fu07-eval.ts` ng mga deterministic na tunay na FFmpeg fixture para sa pagtitipid sa caption call pagkatapos ng deduplication, paglalaan ng budget sa dense motion, blur/exposure/SI-TI evidence, mabilis na mga cut na may mahabang tail, at mga false positive mula sa gradual fade. Itinatala nito ang wall time ng pre-analysis at, kapag available ang `/usr/bin/time`, ang child CPU at peak RSS. Mga structural oracle lamang ang mga quality check nito. Nananatiling `HOLD` ang kalidad ng tunay na caption model dahil walang awtorisadong endpoint o nakapirming judge ang harness na ito. Nananatili ring `HOLD` ang matitipid na halaga maliban kung nagbibigay ang `--caption-cost-per-call-usd` ng tahasang positibong pagtatantya ng gastos sa bawat call; hindi kailanman gumagawa-gawa ang script ng alinman sa mga resultang ito.

Nililimitahan sa 4 MiB ang bawat frame, sa 23 MiB ang lahat ng raw frame nang pinagsama, at sa 32 MiB ang serialized broker response. Inaalis ang isang pribadong temporary directory sa `finally`. Hindi kasama sa OmniRoute ang FFmpeg at hindi ito tumatanggap ng custom na executable path. Bago mag-caption, naglalapat ang bridge ng konserbatibong visual deduplication pass: binabawasan ang bawat JPEG sa isang 16×16 grayscale buffer at inihahambing lamang ito sa huling frame na pinanatili. Para sa hinihiling na caption budget na higit sa isang frame, nagbibigay ang extraction ng bounded na candidate pool na hanggang dalawang beses ng budget na iyon at hindi kailanman lalampas sa 16 frame. Inilalapat lamang ang hinihiling na cap pagkatapos ng deduplication, habang pinananatili ang una at huling napiling candidate sa final thinning kapag hindi bababa sa dalawa ang budget. Ginagamit ng versioned na
`grayscale-16x16-mean-cells-v2` policy ang mas malaki sa mean luma delta at sa ratio ng mga thumbnail cell na may normalized delta na hindi bababa sa 0.05. Ang duplicate threshold ay ang constant na 0.04, na pinili para sa pagiging predictable sa halip na ilantad bilang runtime setting. Pinapanatili ng pangalawang high-contrast signal na ito ang maliliit na motion at mga pagbabago sa nakikitang text na maaaring maitago ng mean-only na paghahambing. Nagfa-fail open ang mga comparator o decoder error at pinananatili ang coverage. Pinaghihiwalay ng output metadata ang mga na-extract na candidate, mga frame na matagumpay na ginamit, at mga inalis na visual duplicate.

Maaaring humiling ang isang tahasang minarkahang video part ng contact sheet na may timestamp. Bumubuo ang bridge ng JPEG grid na may hindi hihigit sa 4 na column at 16 na frame. Inilalagay ng bawat 512-pixel na cell ang timestamp ng source nito sa isang high-contrast na band sa ibaba, habang nananatili rin ang parehong mga timestamp sa textual metadata para sa downstream association at audit. Nananatiling limitado sa 32 MiB ang kumpletong JPEG. Kung hindi ma-decode o mabuo ng `sharp` ang grid, bumabalik ang bridge sa mga indibidwal na JPEG frame; patuloy pa ring ipinapasa ang client abort sa sheet operation.

Sadyang nakahiwalay ang promotion evidence mula sa synthetic composition microbenchmark. Tinutukoy ng `scripts/perf/video-bridge-contact-sheet-eval.ts` ang isang schema-versioned na A/B harness para sa mga tunay na OpenAI-compatible na vision model. Sinusukat nito ang mga token na iniulat ng provider, end-to-end wall latency (kabilang ang sheet composition), bilang ng model call, at fact retention na tinukoy ng manifest. Hindi isinusulat sa report ang mga raw model response; mga SHA-256 digest at tumugmang fact ID lamang ang pinananatili. Hindi gumagawa ang harness ng anumang network o bayad na model call maliban kung ipinasa ang `--execute-real` at naka-configure ang `--model`, `OMNIROUTE_BASE_URL`, at `OMNIROUTE_API_KEY`. Kung walang ganoong tahasang tunay na run, nananatiling `HOLD` ang machine-readable verdict nito; hindi sapat na promotion evidence ang mga synthetic na pagsukat ng payload/bilang ng call lamang.

Maaaring mag-attach ang mga caller ng opsyonal na `transcript.cues` array sa isang suportadong video part kapag mayroon na silang naka-align na text. Dapat maglaman ang bawat cue ng `text`, isang finite na `start`/`end` interval sa loob ng na-probe na duration, at isang naka-whitelist na `source` (`client`, `embedded`, o `audio-bridge`); nagde-default ang `confidence` sa `1` at dapat manatili sa pagitan ng `0` at `1`. Pinagsasama ang mga eksaktong duplicate na cue. Hindi kailanman nagsisimula ang OmniRoute ng transcription mula sa metadata na ito: kinokopya ang mga na-validate na cue sa inilalarawang resulta kasama ang source, confidence, at interval, at nire-render ang mga ito bilang hindi pinagkakatiwalaang observation kasabay ng mga frame caption. Tinatanggihan ang invalid, out-of-range, o walang provenance na text sa halip na ihalo ito sa caption stream. Parehong ginagawang `client` ng dalawang request-body transcript channel ang ibinigay na provenance, kabilang ang mga label na `embedded` o `audio-bridge` na mismong idineklara. Tanging server-owned na adapter ang maaaring magtalaga ng mga pinagkakatiwalaang label na iyon sa pamamagitan ng code-only na argument na `trustedSource`; hindi maaabot ng isang request JSON field ang argument na iyon. Nananatiling hindi pinagkakatiwalaang media-derived content ang transcript text, anuman ang provenance nito, at hindi ito kailanman dapat maging batayan ng authorization.

Ang isang advanced na caller ay maaaring magbigay ng `audioTranscript` track para sa parehong video;
itinuturing ito bilang text na ibinigay ng client, hindi bilang patunay ng transcription ng server.
Pinapatakbo ng fusion seam ang mga visual at audio observation sa ilalim ng
iisang deadline at abort signal, inaayos ang mga ito sa isang karaniwang timeline, pinagsasama ang
eksaktong magkakapareho, at nag-uulat ng partial na resulta kapag isang panig lamang ang nagtagumpay.
Ang invalid na `audioTranscript` ay humahantong sa partial na resultang iyon — pinananatili ang visual
na paglalarawan at nagtatala ang audio branch ng sanitized na failure code —
sa halip na mabigo ang buong video. Ang availability ng bawat branch, ang partial flag,
at ang mga sanitized na failure code ay pinananatili sa inilalarawang resulta, sa
guardrail metadata (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), sa result-cache metadata, at sa mga fusion counter
ng bridge. Hindi gumagamit ang default na Video Bridge path ng speech-to-text
o nagda-download ng pangalawang kopya ng media; kung wala ang tahasang track na iyon, nananatili itong
video-only.

**Pagpapanatili ng transcript (#12150 P1).** Awtomatiko itong nalalapat sa tuwing
nagre-render ang Video Bridge (na opt-in mismo) ng transcript cue — walang hiwalay na
retention flag. Kapag nag-render ang isang request ng anumang transcript cue (isang
`transcript` na idineklara ng caller o isang fused na `audioTranscript`), minamarkahan ito ng guardrail bilang
`videoBridgeObserved` at gumagawa ng na-redact na shadow ng paglalarawan ng video —
isang magkaparehong rendering kung saan ang free-text body ng bawat cue ay pinapalitan ng
`[redacted-video-transcript]`, na binubuo sa pamamagitan ng pagpapalit sa structured cue field
bago buuin ang string (hindi kailanman sa pamamagitan ng pag-parse sa flattened text, kaya walang cue
content — adversarial man o karaniwan, kabilang ang mga body na naglalaman ng `]` gaya ng
`[inaudible]`/`[music]` — ang maaaring manatili). Pinapalitan ng persisted call-log request body
ang bawat text part na nagmula sa video ng na-redact na shadow na iyon, na itinutugma ayon sa pagkakapareho ng
content; muling binabasa ang `fullText` anchor mula sa natapos na pre-call guardrail
payload, kaya nagtatagumpay pa rin ang pagtutugma matapos muling isulat ng mga susunod na chain guardrail (ang PII at
credential masker, na may mga priority na 10/95) ang description text sa mismong lugar nito at
matapos baguhin ng system-prompt/handoff/memory injection ang hugis ng message array. Hindi
nagbabago ang body na ipinapadala upstream sa model. Hindi rin naglalagay ang isang observed na request
ng anumang durable na Memory (nilalaktawan ang extraction mula sa request at response),
kaya hindi maaaring mai-echo ng sariling reply ng model ang transcript text papunta sa Memory.

**Mga raw na video field (#12430).** Kapag naka-enable ang bridge at hindi alam o wala ang native video support, ina-activate rin ng mga defined na `transcript`/`audioTranscript` field ang `videoBridgeObserved`, kahit pagkatapos mabigo ang description o malampasan ang limitasyong `maxVideos`. Kasama ang `null` at mga empty string; hindi kasama ang mga absent na field at non-video metadata. Nire-redact ng mga retained na kopya ang mga field na ito o inaalis ang request, at bina-bypass ang mga cache/Memory.

Sa mga fallback path na iyon, nagiging suportadong `text`/`input_text`
part ang mga valid na cue ng caller sa halip na mga nonstandard na provider field. Ang parehong track na
ibinigay ng request ay nananatiling hindi pinagkakatiwalaang `client` observation, na may tahasang babala na ang video
ay hindi inilarawan at hindi na-verify ang mga timestamp laban sa media. Ang kasalukuyang
256-cue/64-KiB na kabuuan at mga budget para sa bawat cue ay sabay na nalalapat sa dalawang track;
dapat magkasya ang mga timestamp sa 600-second ceiling ng broker at sa anumang ibinigay na focus
window. Itinatapon ang mga invalid na track at hindi ipinapasa bilang arbitraryong text; maaari pa ring gamitin ang isang valid
na sibling maliban kung lumampas ang pinagsamang budget ng mga ito. Walang idinadagdag na text ang mga null/empty
field. Walang idinaragdag na media fetch o transcription ng fallback na ito.
Inaalis ang mga transcript extension field mula sa fallback video carrier at sa mga
`video_url`/`source` object nito. Nananatiling mahigpit ang OpenAI wire allowlist; nananatiling available ang mga unknown-native
na video carrier at pinananatili ng mga kilalang text-only target ang mga ligtas na marker.
Pinoprotektahan ng mga structured redaction shadow ang idinagdag na transcript text, habang
nananatiling hindi nababago ang orihinal na request na pag-aari ng caller. Pinananatili ng mga native-supported na target at
disabled na bridge ang kasalukuyan nilang bypass behavior.

Gumagamit ang mga karagdagang retained na kopya ng parehong observed-request signal. Ang raw na
pre-guardrail client-request snapshot, in-memory pending request, at early
rejected-request log ay structurally na pinapalitan ang mga transcript field sa mga video part;
ang mga string prompt na binuo ng mga pipeline stage at context handoff ay nire-redact
sa persisted-request-body sink. Dahil sa persisted na `video_content_removed` marker,
fail closed ang `previous_response_id` continuation sa halip na muling buuin ang
text na sinadyang alisin. Kung mawala sa isang observed na request ang
redaction shadow nito para sa bawat part bago ang pag-log, o kahit isa sa ilang video shadow
ang hindi maitugma pagkatapos ng mga susunod na pagbabago sa request, ganap na inaalis ang retained request body
sa halip na magpanatili ng transcript na bahagya lamang na na-redact.

Para sa isang observed na request, maaaring sipiin ng response ng model ang anumang bahagi ng
transcript nang walang structured cue boundary. Samakatuwid, pinapalitan ang persisted call-log
`responseBody` nito ng isang omission marker; hindi pinananatili ang detalyadong
pipeline artifact (na maaaring magsama ng upstream/client body at stream chunk).
Bina-bypass ng semantic, idempotency, at reasoning-replay cache ang
mga read at write para sa request na iyon. Hindi nagbabago ang provider request at client-visible
response. Dina-drain ang mga early keepalive byte mula sa pansamantalang
buffer kapag inalis ang detalyadong artifact. Ang malformed EventStream
warning ng Kiro ay nag-uulat lamang ng bilang ng payload byte, at hindi kailanman ng mga nilalaman nito o ng raw error
ng JSON parser.
Hindi nito ipinapahayag na na-audit na ang bawat walang-kaugnayang provider/plugin diagnostic;
sinusubaybayan sa #11658 ang mas malawak na pagsusuri sa mga retained sink.

Ang panloob na lifecycle ng `/api/modality-bridge/video/drilldown` ay isang hiwalay na
cache substrate na loopback/token-authenticated. Nangangailangan din ang bawat operasyon ng
canonical opaque principal ID. Bago paganahin ang isang production caller, dapat nitong
kunin ang ID na iyon mula sa authenticated tenant at hindi kailanman mag-forward ng
value na pinili ng client. Itinatali ng mga cache key ang principal na iyon sa mga canonical session at
video-reference ID, iniimbak lamang ang mga key na hinango sa SHA-256 ng mga ito, at nililimitahan sa parehong principal
ang mga read at deletion. Nag-iimbak ang cache ng hindi hihigit sa 16 na hinangong JPEG
frame sa bawat entry, ine-expire ang mga ito pagkalipas ng sampung minuto, at sumusuporta sa mga bounded
na `start`/`end` read o tahasang pag-delete ng session.

Nililimitahan ang bawat principal sa 16 na entry at 64 MiB ng canonical JPEG data. Ang mga
limitasyong iyon ay hiwalay sa pandaigdigang ceiling na 64 na entry/256 MiB: kapag may pressure sa principal quota,
tanging ang least-recently-used na mga entry ng principal na iyon ang ine-evict bago
isaalang-alang ang global LRU eviction. Ang mga expired na entry ay inaalis sa accounting ng principal at
global accounting kapag may aktibidad sa cache, samantalang ang cancellation at validation failure ay
hindi nagko-commit ng bahagyang replacement.

Tinatanggihan ng cache ang hindi canonical na Base64, sobrang padding, media na hindi JPEG, malformed o
truncated na mga JPEG, at mga JPEG na naglalabas ng warning sa panahon ng bounded full-image `sharp`
decode. Muli nitong ine-encode ang bawat tinatanggap na image bilang canonical JPEG, kinukuha ang width at height
mula sa mga decoded byte sa halip na pagkatiwalaan ang mga field ng caller, at itinatapon ang anumang trailing
polyglot byte sa halip na panatilihin ang mga ito. Tanging ang bounded canonical compressed buffer
ang ibinibilang sa parehong quota. Kasama sa JSON wire limit ang Base64 overhead para sa 32 MiB
decoded-input ceiling. Ang bawat
nakaimbak na derivation ay nagtatala ng validated JPEG format/resolution nito, sampling policy,
derivation version, creation time, content hash na kinompyut ng server, at hashed parent
reference kasama ang parent-content hash ng pinagkakatiwalaang caller. Sinusuri ang cancellation
sa pagitan ng mga asynchronous decode/hash phase bago ang atomic cache commit.

Hindi pa ikinokonekta ng tranche na ito ang isang production producer sa route at hindi ito
nagbibigay ng multi-resolution variant selection. Samakatuwid, walang idinadagdag na gawain ang transparent na Video Bridge request
path, habang ang tenant-bound principal derivation at
ang buong FU-08 multi-resolution lifecycle ay nananatiling tahasang follow-up work sa halip
na maidokumento bilang kumpletong behavior.

Sunod-sunod na nilalagyan ng caption ang mga frame gamit ang naka-configure na Video model. Ang walang lamang
Video override ay nagmamana sa Vision setting; kung parehong walang laman ang mga ito, pipiliin ng Vision
auto-router ang epektibong vision-capable model. Pinapalitan ng mga matagumpay na caption
ang orihinal na part gamit ang stable na `[Video description:` prefix na
minamarkahan din ang text bilang hindi pinagkakatiwalaang observation na hinango sa media at nagsasabi sa mga downstream
model na huwag sundin ang mga instruction na matatagpuan sa media. Kasama sa mga frame-caption cache key
ang mga JPEG byte, prompt, timestamp, at effective model; tanging mga matagumpay na
caption ang kino-cache. Pinananatili ng mga cache entry ang aktuwal na matagumpay na producer model,
kabilang ang isang fallback model; nag-uulat ang bridge ng `mixed` kapag ang magkakaibang frame
ay ginawa ng magkakaibang model. Muling ginagamit ng cache hit ang producer identity na iyon
sa halip na muling lagyan ito ng label bilang hiniling na routing plan. Naka-key ang whole-video result
cache sa bawat input na nagbabago sa output — prompt, effective
model, sampling policy, frame count, semantic analysis mode, SHA-256
fingerprint ng normalized focus hint, focus window, `transcript`,
`audioTranscript`, at contact-sheet flag — kaya ang pagbabago sa alinman sa mga
dimension na iyon ay isang cache miss, at hindi kailanman stale reuse. Tahasan ding nakasaad sa
result-cache key at metadata ang visual dedup policy
version, threshold, at bounded candidate-frame count; samakatuwid, hindi makagagamit muli ang
pagbabago sa policy ng stale na whole-video description. Pinananatili ng result-cache v4 metadata ang mode at
fingerprint, at hindi kailanman ang raw user task. Iniuulat ng guardrail metadata ang parehong
requested at effective analysis mode; ang hiniling na `focused` mode na walang
magagamit na user text ay iniuulat bilang epektibong `full`.

Kinukuha ng guardrail ang bawat sinusuportahang video part ngunit naglalarawan ng hindi hihigit sa
`modalityBridgeVideoMaxVideos`. Para sa target na napatunayang may
`supportsVideo === false`, ang mga nabigo at lumampas-sa-limitasyong video ay nagiging tahasang safe
text marker upang walang raw video na manatili. Kapag hindi alam ang capability, pinananatili ng mga part na iyon
ang kanilang video carrier; sinusunod ng anumang fallback transcript ang bounded text
conversion sa itaas. Nilalampasan ng mga target na may `supportsVideo === true` ang bridge.
Ang abort signal ng client request ay ipinapasa sa download, broker queue,
mga subprocess, at caption call; humihinto ang mga abort sa pagitan ng mga video at hindi kailanman nagfa-fail open
sa raw media.

Ang mga runtime setting ay DB-backed at Zod-validated:

| Key                                 | Default     | Saklaw / gawi                                                                                                                                     |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Opsyonal na runtime, kailangang tahasang i-enable                                                                                                 |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | Pinapanatili ng `full` ang mga generic na caption; gumagamit ang `focused` ng limitado at hindi pinagkakatiwalaang konteksto ng pinakabagong user |
| `modalityBridgeVideoModel`          | `""`        | Minamana ang modelo ng Vision Bridge                                                                                                              |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                                              |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, o proporsyonal na `segment_aware`; kapag pumalya ang detector, bumabalik sa `uniform`                                   |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                                               |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                                                    |

Ang mga legacy na naka-persist na halaga ng timeout ng Video na lampas sa 120 segundo ay nililimitahan sa
deadline ng broker; tinatanggihan ang mga bagong pagsusulat ng setting na lampas sa limitasyong iyon.
Nangangailangan ang `GET /api/modality-bridge/video/runtime` ng pinagkakatiwalaang naka-stamp na loopback
locality bago ang authentication o pag-probe sa runtime, at pagkatapos ay nangangailangan ng management
auth. `available`, mga na-sanitize na bersyon ng FFmpeg/ffprobe, at isang nakapirming
dahilan lamang kapag hindi available ang runtime ang ibinabalik nito. Ang internal extraction endpoint ay hindi
isang pampublikong upload API: nagbabalik ang saturation ng queue ng `503` kasama ang `Retry-After`, nagbabalik
ang pag-disconnect ng caller ng `499`, at nagbabalik ang nakapirming deadline ng broker ng `504`. Idinaragdag ng mga na-convert na tugon ang
`video->text;model=<visionModel>;parts=<videos>` sa sentral na
`x-omniroute-modality-bridge` header nang hindi inaalis ang mga segment ng Vision o Audio.

### PII Masker (`piiMasker.ts`)

Gumagana sa **parehong** yugto.

- Kino-clone ng **`preCall`** ang payload, tinatahak ang `system`, `messages`, `input`, at
  `prompt` (kabilang ang mga plain string item), at inilalapat ang `processPII()` (mula sa
  `@/shared/utils/inputSanitizer`) sa mga string na field na `content`/`text`. Kapag
  `PII_REDACTION_ENABLED=true`, nire-redact ang natukoy na PII sa outbound
  payload. Hiwalay ito sa `INPUT_SANITIZER_MODE` (na kumokontrol lamang sa
  patakaran sa prompt injection). Kapag naka-off ang redaction, itinatala ng tawag ang bilang
  ng mga natukoy nang hindi muling isinusulat ang content.
- Gumagawa ang **`postCall`** ng deep clone ng tugon, pinapatakbo ang `sanitizePIIResponse()` kasama
  ang masker para sa anyo ng Responses API (`maskResponsesOutput` — sinasaklaw ang
  `output_text` at `output[].content[].text`). Kung may anumang redaction na maganap,
  papalitan ng binagong tugon ang orihinal.

Hindi kailanman nagba-block ang guardrail; nag-a-annotate lamang ito (`meta.detections`,
`meta.redacted`) o muling nagsusulat.

### Prompt Injection (`promptInjection.ts`)

Tinutukoy ang mga adversarial na istruktura sa content na ibinigay ng user at ipinapatupad ang
naka-configure na patakaran. Ang gawi ay pinapatakbo ng mga environment variable at mga opsyon ng
constructor:

| Setting                | Env var                                                                                                     | Default | Epekto                                                                                                                                                                                                                        |
| ---------------------- | ----------------------------------------------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Naka-enable            | `INPUT_SANITIZER_ENABLED`                                                                                   | `true`  | Kapag `false`, agad na lumalabas ang guardrail.                                                                                                                                                                               |
| Mode                   | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                             | `warn`  | Patakaran sa injection: `block`, `warn`, o `log`. (Tinatanggap ang `redact` para sa backward compatibility ngunit **hindi** nito inaalis ang injection text; kinokontrol ng `PII_REDACTION_ENABLED` ang request PII rewrite.) |
| Threshold sa pag-block | Opsyon na `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias na `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`  | Pinakamababang severity na kinakailangan upang mag-block. Observe-only ang Medium sa default.                                                                                                                                 |

**Precedence ng mode** (`getMode`): `options.mode` ng caller →
**DB feature-flag override** ng `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. Samakatuwid, nangingibabaw ang override ng dashboard sa mga env var, kaya
kinokontrol nang live ng Feature Flags UI ang tumatakbong guard (walang restart). Fail-safe ang pagbasa sa DB:
kung mag-error ito, babalik ang guard sa gawi na nakabatay sa env, at kapag walang
nakatakdang override, kapareho ang gawi ng resolution na env-only.

Mga pinagmumulan ng detection:

1. `sanitizeRequest()` mula sa `@/shared/utils/inputSanitizer` (nakabahaging hanay ng detector
   na ginagamit sa ibang bahagi ng pipeline).
2. Built-in na `DEFAULT_GUARD_PATTERNS` (kasalukuyang `system_override_inline` at
   `markdown_system_block`, na parehong may `high` na severity).
3. Opsyonal na `customPatterns` na ipinasa sa pamamagitan ng mga opsyon ng constructor (mga string, regex,
   o mga record na `{ name, pattern, severity }`).

Kapag `mode === "block"` **at** may kahit isang detection na nakatutugon sa threshold ng severity, ibinabalik ng `preCall` ang `{ block: true, message: "Request rejected:
suspicious content detected" }`. Sa mga mode na `warn`/`log`, nagla-log ang guardrail ngunit
pinapayagan ang call. Naka-export din ang shared helper na `evaluatePromptInjection()`
para sa mga caller na kailangang magsuri ng mga prompt nang hindi dumaraan sa registry.

**Hangganan ng pag-scan (v3.8.20):** sinusuri lamang ng detector ang **unang 16 KB** ng
pinagsamang prompt text — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) sa
`src/shared/utils/inputSanitizer.ts`. Parehong gumagamit ang `detectInjection()` at
`evaluatePromptInjection()` ng `slice(0, MAX_INJECTION_SCAN_BYTES)` bago patakbuhin
ang pattern loop. Karaniwang nasa bandang itaas ng input ang mga injection directive, kaya
nililimitahan nito ang regex CPU/GC sa mga payload na may daan-daang KB nang hindi
pinahihina ang detection (cf. #3932, #4041).

### Pantakip ng Credential (`credentialMasker.ts`)

Tumatakbo sa **parehong** stage, at huli sa default chain (priority `95`). Nire-redact nito
ang mga kilalang pattern ng API key / secret token mula sa outbound payload (nilalaman ng
mensahe, mga argument ng tool call, mga resulta ng tool) **at** sa response ng provider, upang
ang isang credential na na-paste sa prompt (o ibinalik ng isang resulta ng tool) ay hindi
ma-leak sa upstream provider o pabalik sa client.

- **Opt-in lamang**, kaparehong convention ng PII redaction (malapit sa Hard Rule #20):
  naka-disable maliban kung `settings.credentialRedactionEnabled === true` **o**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kapag naka-off ito, walang ginagawa ang guardrail —
  hindi ito kailanman nagba-block o nagre-rewrite.
- Nilalakaran ng `redactCredentials()` ang buong payload/response tree (`walkValue()`,
  ligtas laban sa prototype pollution, at ligtas sa cycle sa pamamagitan ng `WeakSet`) at
  pinapalitan ang mga match ng placeholder na `[REDACTED:<type>]`, na kino-clone lamang
  ang mga branch na talagang nabago.
- Sinasaklaw ng `CREDENTIAL_PATTERNS` ang mga key ng LLM provider (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), mga VCS/SaaS token (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), mga payment key (Stripe, Square), mga cloud
  key (AWS access key, Twilio, SendGrid, Mailgun), mga private key / JWT,
  mga connection string na naglalaman ng credential (`mongodb://user:pass@...`, atbp.), at
  isang generic na pattern ng header-value para sa `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Ang mga key na hugis-header (`authorization`, `x-api-key`, `api-key`,
  `apikey`) ay nire-redact ayon sa istruktura (value lamang, habang pinananatili ang scheme
  prefix tulad ng `Bearer `/`Basic `) sa halip na gamitin ang generic na text regex.
- Hindi kailanman nagba-block ang guardrail; nagre-rewrite lamang ito (`modifiedPayload` /
  `modifiedResponse`) at naglalagay ng annotation (`meta.credentialsRedacted`, `meta.count`).

Regression guard: `tests/unit/credential-masker-guardrail.test.ts`.

## Batayang Kontrata (`base.ts`)

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
  block?: boolean; // kapag true, agad na itinitigil ang chain
  message?: string; // ipinapakita kapag bina-block
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // ibinabalik ng preCall upang baguhin ang request
  modifiedResponse?: TValue; // ibinabalik ng postCall upang baguhin ang response
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

Ipinahihiwatig ng isang guardrail na "walang pagbabago" sa pamamagitan ng pagbabalik ng `void`, `{}`, o
`{ block: false }`. Kapag nagbalik ng `modifiedPayload`/`modifiedResponse`, papalitan nito
ang value na dumadaloy sa chain para sa mga kasunod na guardrail.
Dinadala ng `signal?: AbortSignal` ang lifecycle ng caller papunta sa mga guardrail. Ang pag-abort ng request ang sinasadyang fail-open exception: itinitigil ng mga media bridge ang trabaho at nagsasagawa ng cleanup nang hindi ibinabalik ang raw media sa isang target na alam nang hindi sumusuporta rito.

## Registry (`registry.ts`)

Inilalantad ng singleton na `guardrailRegistry` ang:

- `register(guardrail)` — nagdaragdag ng guardrail (o pinapalitan ito ayon sa normalized na pangalan) at
  muling inaayos ayon sa pataas na `priority`.
- `clear()` / `list()` — mga administratibong helper.
- `runPreCallHooks(payload, context)` — inuulit ang bawat aktibong guardrail, ipinapasa ang
  payload sa pamamagitan ng `modifiedPayload`, at humihinto sa unang `block: true`.
- `runPostCallHooks(response, context)` — kaparehong daloy sa panig ng response.
- `resetGuardrailsForTests({ registerDefaults })` — nililinis ang state at opsyonal na
  muling nirerehistro ang mga default para sa malinis na test isolation.

Ang parehong runner ay nagbabalik ng `{ blocked, payload|response, results, guardrail?, message? }`
kung saan ang `results` ay isang array ng mga record na `GuardrailExecutionResult` na may
mga field na `blocked`, `skipped`, `modified`, `error`, at `meta` para sa bawat guardrail,
na kapaki-pakinabang para sa tracing.

### Pag-disable ng Mga Guardrail sa Bawat Request

Pinagsasama-sama ng `resolveDisabledGuardrails({ apiKeyInfo, body, headers })` ang isang
de-duplicated na listahan ng mga pangalan ng guardrail na dapat laktawan para sa kasalukuyang
request. Mga source (lahat ay opsyonal, lahat ay pinagsasama):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` sa request body (top-level)
- `metadata.disabledGuardrails` sa request body
- Header na `x-omniroute-disabled-guardrails` (o ang legacy na
  `x-disabled-guardrails`)

Maaaring mga array ng string o comma-separated string ang mga value; ang mga pangalan ay
ino-normalize sa lowercase kebab-case (`pii_masker` → `pii-masker`). Ipinapasa
ang resulta sa registry sa pamamagitan ng `context.disabledGuardrails`, na lumalaktaw sa
mga tumutugmang guardrail (`skipped: true` sa `results`).

## Pagkakasunod-sunod ng Pagpapatupad

Para sa bawat request na dumadaan sa `src/sse/handlers/chat.ts` at
`open-sse/handlers/chatCore.ts`:

1. Binubuo ng `resolveDisabledGuardrails(...)` ang listahan ng lalaktawan mula sa API key, body,
   at mga header.
2. Pinapatakbo ng `guardrailRegistry.runPreCallHooks(body, ctx)` ang mga guardrail ayon sa pataas
   na pagkakasunod-sunod ng priority:
   - Itinatala bilang `skipped` ang mga naka-disable na guardrail.
   - Maaaring baguhin ng `preCall` ng bawat guardrail ang payload sa pamamagitan ng `modifiedPayload`.
   - Ang unang `block: true` ay agad na nagpapatigil sa chain at nagbabalik ang handler
     ng tugon ng pagtanggi mula sa guardrail.
3. Ang payload na maaaring nabago ay ipinapasa sa combo routing at upstream
   dispatch.
4. Pagkatapos mabuo ang tugon, pinapatakbo ng `guardrailRegistry.runPostCallHooks(...)`
   ang parehong chain sa tugon. Kapag `block: true` dito, hindi ipinapasa ang upstream
   na tugon.

Ang mga guardrail na nag-throw ay itinatala gamit ang `error: <message>` at nila-log sa pamamagitan ng
`logger.warn`, ngunit nagpapatuloy ang chain — sadyang fail-open ang disenyo.

## Configuration

Mga environment variable na binabasa ng mga built-in na guardrail:

| Variable                              | Ginagamit ng              | Epekto                                                                                                                   |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Itakda sa `false` upang ganap na i-disable ang pagtukoy.                                                                 |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Patakaran sa injection: `warn`, `block`, o `log`. Hindi binabago ng legacy na value na `redact` ang teksto ng injection. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Mode para sa injection guard; isa ring DB feature flag na **nangingibabaw** sa mga env var (DB > ENV).                   |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Pinakamababang severity na tinatanggihan ng `MODE=block`: `high` (default), `medium`, o `low`.                           |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Legacy na alias para sa `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                               |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Kapag `true`, nire-redact ang PII ng request (hiwalay sa injection mode).                                                |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Kinokontrol ang gawi ng masker sa panig ng tugon.                                                                        |

Binabasa ng mga guardrail ng Modality Bridge ang runtime config mula sa DB-backed na settings
store (`getSettings()`), hindi mula sa mga env var. Ang mga pangunahing key ng Vision ay
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, at
`modalityBridgeCacheMaxEntries`. Tinatanggap lamang ang mga legacy na
`visionBridge*` key bilang dokumentadong one-cycle read
fallback; ginagamit ng mga write mula sa dashboard ang mga pangunahing key. Ang mga default at fallback
resolver ay nasa `src/shared/constants/modalityBridgeDefaults.ts`, habang pinananatili ang mga legacy
constant sa `src/shared/constants/visionBridgeDefaults.ts`.

Ginagamit ng Audio ang `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, at `modalityBridgeAudioMaxClips`, kasama ang mga shared na
setting na `modalityBridgeCache*`. Walang fallback para sa legacy key ang Audio dahil ipinakilala ang mga
key na ito kasama ng schema ng Modality Bridge.

Ginagamit ng Video ang `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, at
`modalityBridgeVideoTimeout`, kasama ang mga shared na setting na `modalityBridgeCache*`.
Naka-disable ito bilang default dahil opsyonal na operational
dependency ang FFmpeg/ffprobe at nagdaragdag ng latency at gastos sa model ang paglalagay ng caption sa mga frame.

## Mga Custom na Guardrail

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

Mga hakbang:

1. Gumawa ng `src/lib/guardrails/myGuardrail.ts` na nag-e-extend sa `BaseGuardrail`.
2. Ipatupad ang `preCall` at/o `postCall`.
3. Magrehistro sa oras ng pag-import (i-push mula sa `registerDefaultGuardrails`) o
   tawagin ang `guardrailRegistry.register(...)` sa runtime — pinapalitan ng registry
   ang anumang naunang guardrail na may parehong normalized na pangalan.
4. Magdagdag ng mga test sa ilalim ng `tests/unit/` (mga kasalukuyang halimbawa:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Pagsubok

Gamitin ang `resetGuardrailsForTests()` sa pagitan ng mga test upang magsimula mula sa isang tiyak na state.
Ipasa ang `{ registerDefaults: false }` upang magsimula sa isang walang-lamang registry at
irehistro lamang ang mga guardrail na sinusubok. Tumatanggap ang Vision Bridge ng dependency
injection (`deps.getSettings`, `deps.callVisionModel`); inilalantad ng Audio Bridge ang
mga katumbas na seam para sa mga setting, capability, pagpili ng STT model, pagsusuri ng
credential, at transcription. Dahil dito, maaaring subukan ng mga test ang parehong flow nang walang
access sa DB o network.

## Tingnan Din

- `src/lib/guardrails/` — implementasyon
- `src/shared/utils/inputSanitizer.ts` — nakabahaging detector na nagpapatakbo sa
  prompt-injection at PII masking
- `src/shared/constants/visionBridgeDefaults.ts` — mga default ng Vision Bridge at
  listahan ng mga model na sapilitang gumagamit ng bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — mga nakabahaging runtime default ng Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — orthogonal na layer (circuit breaker, mga cooldown)
- `docs/reference/ENVIRONMENT.md` — kumpletong sanggunian ng env var

## Saklaw ng route at red-team para sa injection-guard (Phase 8 · Block D)

Saklaw ng injection-guard (`createInjectionGuard` / `withInjectionGuard`) ang lahat ng route
na tumatanggap ng mga prompt ng user. Sinusunod nito ang `INJECTION_GUARD_MODE` (default na `warn` = pag-log lamang;
`block` = nagbabalik ng HTTP 400 `SECURITY_001`).

| Uri                | Mga Route                                                                                                                                            | Default na mode |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Text (kasalukuyan) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn            |
| Generative         | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn            |
| Data               | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn            |

Saklaw ng pagkuha ng text (`extractMessageContents`) ang `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (gabi-gabi, `nightly-llm-security.yml`):** bine-validate ng promptfoo na bina-block ng bawat route
ang OWASP-LLM corpus kapag `INJECTION_GUARD_MODE=block`; nagpapatakbo ang garak ng mga probe (nilalaktawan kapag walang secret).
Kasama ang `moderations` para sa consistency — maaari itong i-exempt ng mga operator sa block-mode sa pamamagitan ng
`resolveDisabledGuardrails`.

May dalawang job ang nightly workflow (`.github/workflows/nightly-llm-security.yml`, cron + manual
dispatch):

- **`promptfoo-guard` (blocking)** — pinapatakbo ang `promptfoo eval -c promptfooconfig.yaml`
  gamit ang `INJECTION_GUARD_MODE=block`. Tinitiyak ng bawat adversarial na kaso (hal. "ignore all
  previous instructions…", mga DAN-style jailbreak) na may taglay na
  `error.code === "SECURITY_001"` ang response, ibig sabihin, talagang tinanggihan ng guard ang request.
- **`garak` (advisory)** — pinapatakbo ang garak `--probes promptinject,dan,leakreplay`
  laban sa isang lokal na instance ng OmniRoute (`http://localhost:20128/v1`). Nakadepende ito sa isang
  provider secret (`PROMPTFOO_PROVIDER_KEY`); maayos itong lumalaktaw at nilalagyan ng suffix na
  `|| true`, kaya nag-uulat ito nang hindi pinapabagsak ang CI.

Saklaw ng guard helper (`createInjectionGuard` / `withInjectionGuard`)
ang bawat `/v1` route na may prompt; kinukuha ang text ng prompt mula sa
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` ng
`extractMessageContents()` sa `src/shared/utils/inputSanitizer.ts`.
