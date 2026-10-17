# Guardrails (Hausa)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Madogaran gaskiya:** `src/lib/guardrails/`
> **An sabunta ta karshe:** 2026-08-29 — v3.8.51 (Asalin fassarar Video Bridge an bayyana shi ne ta hanyar mai kiran,
> ba a tabbatar da shi ta server ba tukuna — an yi bayani gwargwadon #11661)

Guardrails suna aiwatar da tsaro, dokoki, da sauye-sauyen abun ciki a iyakar
tsakanin OmniRoute da masu ba da sabis na sama (upstream providers). Kowace guardrail na iya bincika (kuma
da zabi ta ki, ta sauya, ko ta sanya bayani a kan) buƙatun kaya (`preCall`) da
martanin sama (`postCall`).

Tsarin **fail-open** ne: idan wani guardrail ya fadi yayin aiwatarwa, tsarin
rajista (registry) yana rubuta kuskuren kuma ya ci gaba da sauran guardrail maimakon ya sa buƙatar ta fadi.
Tabbatar da block yanke shawara ce ta zahiri (`block: true`), ba ta faru ta kuskure ba.

## Ginannun Matakan Kariya

Registry yana loda matakan kariya guda shida ta atomatik bisa tsarin fifiko lokacin import
(duba `registry.ts` → `registerDefaultGuardrails()`):

| Fifiko | Suna                | Mataki/Matakai | Fayil                 |
| ------ | ------------------- | -------------- | --------------------- |
| `5`    | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`    | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`    | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`   | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`   | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`   | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Lambobin fifiko mafi ƙanƙanta ne suke gudana **da farko**.

### Gadar Hoto (`visionBridge.ts`) — Gadar Nau'in Bayani PR-1

Tana katse buƙatun da ke ɗauke da hotuna waɗanda aka nufa da su zuwa **samfuran da ba sa tallafa wa hoto**, sannan ko dai
ta sake tura buƙatar gaba ɗaya zuwa samfurin da ke iya sarrafa hoto, ko kuma ta maye gurbin sassan hoton
da bayanan rubutu waɗanda wani samfurin hoto mai iya daidaitawa ya samar kafin
kiran upstream. Wannan yana ba masu samar da sabis na rubutu kaɗai damar sarrafa
payloads masu nau'ikan bayanai da yawa ba tare da wata matsala ba.

Tsarin gudana:

1. Tsallake idan samfurin da aka nufa ya riga ya tallafa wa hoto (sai dai idan yana cikin
   jerin tilasta-gada `isVisionBridgeForcedModel`).
2. Ciro sassan hoto ta hanyar `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), wanda ke miƙa aikin ga **haɗaɗɗen mai gano kafofin watsa bayanai**
   `detectMediaParts()` a cikin `open-sse/utils/mediaParts.ts` — tushen gaskiya
   guda ɗaya da ake rabawa tare da combo compatibility filter.
   An iyakance cirar zuwa sassan matakin-sama masu siffofin da
   `replaceImageParts` zai iya sake haɗawa (yarjejeniyar extract↔replace): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, da Responses API `input_image`. Abubuwan da aka samu a cikin
   wasu abubuwa da siffofin da ke nuna alama kawai kayan combo-filter ne kuma ba a taɓa ciro su.
   Tsallake idan ba a sami ko ɗaya ba.
3. Tantance saitunan runtime ta hanyar `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): sabbin maɓallan saitunan `modalityBridge*`
   suna da fifiko; tsoffin maɓallan `visionBridge*` sun ci gaba da kasancewa **madadin zagaye guda**
   (lokacin rollback). Tsallake kafin duk wani bin diddigin kafofin watsa bayanai idan
   an kashe gadar.
4. Mai zaɓar yanayi (`modalityBridgeVisionMode`, duba teburin da ke ƙasa) yana yanke shawarar
   sake tura buƙata ko bayyana ta. Sake turawa yana dawo da `modifiedPayload` wanda aka canza
   `model` kawai, tare da meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Hanyar bayyana: iyakance hotuna zuwa `maxImages`, haɗa prompt mai la'akari da aikin,
   bincika describe cache, kira samfurin hoto **a layi ɗaya**
   (`Promise.allSettled`), sannan saka sassan rubutun `[Image N]: <description>` a
   wurarensu. Idan bayyana ya gaza, yana samar da `null` kuma ana
   **adana** asalin ɓangaren hoton (#4012) — sai dai a hanyar combo describe idan
   duk bayanan sun gaza, inda upstream da aka tabbatar ba ya tallafa wa hoto zai samu
   stub na `(unavailable — no vision-capable provider connected)` a maimakonsa (#8430).
6. Dawo da `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Mai zaɓar yanayi (`modalityBridgeVisionMode`)

| Yanayi     | Na asali | Halayya                                                                                                                                                                                                                                                                                                                                                              |
| ---------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Tsohuwar hanyar hasashe, ba a taɓa ta ba (#6640/#7204): samfuran da ba combo ba/`auto/` suna sake tura buƙata zuwa mafi kyawun samfurin hoto sai dai idan asalin samfurin ya riga yana da ingantattun takardun shaida (sannan a bayyana); combo targets koyaushe suna bayyana.                                                                                       |
| `describe` |          | Koyaushe a bayyana — ana tsallake sashen sake turawa gaba ɗaya; samfurin da mai amfani ya zaɓa ne koyaushe yake ba da amsa.                                                                                                                                                                                                                                          |
| `reroute`  |          | Tilasta sake turawa: ana tsallake matakin kariyar ci gaba da amfani da samfurin mai takardun shaida. Har yanzu matakin kariyar takardun shaidar **target** na sake turawa yana aiki — idan babu ingantaccen samfurin hoto da ake iya amfani da shi, buƙatar tana koma wa hanyar bayyana domin kada ɗanyen hotuna su isa backend mai tallafa wa rubutu kaɗai (#8430). |

Yanayin da aka tilasta suna dakatar da aiki **kafin** tsohuwar hanyar hasashen ta gudana; halayyar `auto`
daidai take byte-da-byte da matakin kariyar da ya gabaci PR-1.

#### Iyakokin API-key (`visionBridgeKeyScope.ts`)

Lokacin da API key na mai kira ya taƙaita `allowedConnections`, rumbunan quota
(`allowedQuotas`) ko samfura (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), gadar tana zaɓar
samfuran sake turawa da bayyana waɗanda maɓallin yake da izinin amfani da su kawai, a kan connections da maɓallin
yake da izinin amfani da su. Daga nan kiran bayyana koyaushe yana bi ta cikin OmniRoute self-loop tare da
header na `x-omniroute-self-loop-key-id`, domin buƙatar chat da ta karɓa
ta sake aiwatar da manufofin connection da samfurin wannan maɓallin. `enforceApiKeyPolicy()`
yana amincewa da wannan header ne kawai tare da self-loop bearer, don haka zai iya
taƙaita damar shiga kawai, kuma ana ƙin id wanda ba a iya warwarewa.

Idan babu samfurin hoto da aka ba wa maɓallin izini, hanyar bayyana tana janye kanta kuma
buƙatar tana wucewa ba tare da canji ba, irin halayyar fail-open ɗin matakin kariyar
da aka kashe (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Buƙatun da ba su da maɓalli, da maɓallan da ba su da waɗannan ƙuntatawa, suna aiki daidai kamar
yadda suke a baya.

#### Prompt na bayyana mai la'akari da aiki (`modalityBridgeVisionTaskAware`)

Tsoho shi ne **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) yana haɗa
rubutun **saƙon mai amfani na ƙarshe** (wanda aka taƙaita zuwa haruffa 500) da ainihin
umarnin bayyana hoto, yana karkatar da bayanin zuwa ga abin da mai amfani ya nema a zahiri
(tsarin codex-vision-proxy) tare da neman samfurin hangen nesa ya kwafe rubutun da ake iya gani.
Idan an kashe tutar — ko babu rubutun mai amfani — ana amfani da ainihin umarnin ba tare da canji ba.

Buƙatar OpenAI-compatible ta describe self-loop ɗin kansa (`callVisionModelSingle()`
a cikin `visionBridgeHelpers.ts`) koyaushe tana neman `image_url.detail: "high"` —
ba tare da wani sharaɗi ba, ga kowane mai kira/mai bayarwa, kuma ba ta dogara da kowace alamar abokin hulɗa ba.
Samfurin ƙaramin daki-daki yana rage daidaiton OCR musamman ga aikin
kwafar rubutu da wannan umarni yake nema, saboda haka kiran describe ɗin kansa koyaushe yana neman babban
daki-daki ba tare da la’akari da matakin daki-dakin da ainihin buƙatar da ta shigo ta yi amfani da shi ba. Wannan
yana shafar jikin buƙatar describe na cikin gida kawai; ba ya canza yadda
OmniRoute ke tura `image_url.detail` na mai kira a kan babbar buƙatar —
ana amfani da wannan tsohon ƙimar daban, kuma ga abokan hulɗar OpenCode da aka gano kawai, a cikin
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Reshen
Anthropic wire-format na describe self-loop ba shi da filin `detail`
kuma babu ɗaya daga cikin waɗannan tsoffin ƙimomi da ke shafarsa.

#### Iyakar fitowar describe (`modalityBridgeVisionMaxChars`)

| Maɓalli                        | Tsoho | Kewa             |
| ------------------------------ | ----- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`   | `0` ko 100–50000 |

`0` (tsoho) yana nufin **babu iyaka** — bayanin da
`callVisionModel()` ya dawo da shi ana wuce shi ba tare da gyara ba, don kiyaye
halin da ake da shi. Kowace ƙima a kewayon 100–50000 tana taƙaita bayanin tare da
ƙarin `…` a ƙarshensa kafin a saka shi a matsayin `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` a cikin `src/lib/guardrails/visionBridge.ts`).
Ƙara wannan don ayyukan OCR masu cike da daki-daki inda samfurin da ke ƙasa yake buƙatar
cikakkiyar kwafar rubutu; rage shi don iyakance amfani da token a kan samfuran hangen nesa masu yawan bayani.
Filin dashboard yana cikin Advanced panel na Vision tab
(`modality-bridge-max-chars` a cikin `ModalityBridgeVisionTab.tsx`) kuma yana ɗaga kowace
ƙima tsakanin 1 da 99 zuwa mafi ƙarancin 100, yayin da yake barin `0` da aka sa a sarari
ba tare da taɓawa ba — `0` ingantacciyar ƙimar Zod ce da kanta
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ba kawai
tsohuwar ƙimar "unset" ba.

#### Ma’ajiyar describe (`modalityBridge/bridgeCache.ts`)

Ma’ajiyar LRU + TTL ta cikin ƙwaƙwalwa don sakamakon describe, wadda dukkan tsarin aiki ke rabawa.
Maɓalli = `sha256(imageRef + composedPrompt + configuredBridgeModel)` tare da
tsarin shigar da tsawon bayanai a gaba (babu karo a iyakokin filaye). Bangaren samfurin shi ne
samfurin bridge da **aka saita**, ba samfurin da ya amsa a zahiri ba —
`callVisionModel` na iya komawa ga madadin a ciki, kuma yin maɓalli bisa kowane yunƙuri zai
rarraba ma’ajiyar. Ba a taɓa adana describe da ya gaza ba. Saituna:

| Maɓalli                         | Tsoho  | Kewa    |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### Daidaita hoton nesa (self-loop describe/base64 fetch)

Lokacin da bridge ya ɗauko hoton **nesa** da kansa — Anthropic describe
self-call da claude-wire-format base64 conversion
(`ensureBase64ImagesForClaudeWire`), duka ta hanyar
`fetchRemoteImageAsDataUri()` a cikin `visionBridgeHelpers.ts` — ana aika data
URI da aka samu ta cikin `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) kafin a saka shi cikin buƙatar samfurin hangen nesa.
Ana rage girman hotuna masu girma fiye da kima zuwa **2048px a gefen da ya fi tsawo** (daidai da
iyakar sake girman da OpenAI/Anthropic suka riga suka yi a ɓangaren uwar garke), wanda ke rage
bytes na lodawa/lokacin jinkiri ba tare da canza abin da samfurin hangen nesa yake gani ba. Sake girman
yana amfani da `sharp`, wanda ake lodawa ta dynamic import: a kan dandali inda native
binary ɗinsa ya kasa loduwa, `normalizeDataUri()` **ba ya taɓa jefa kuskure** — yana komawa
ga wucewar ainihin bytes ba tare da gyara ba, don haka hanyar describe/base64-conversion
koyaushe tana ci gaba da aiki. Bytes da ba na hoto ba (ɗaukowa da bai dawo da
hoton da za a iya warwarewa ba) su ma ana wuce su ba tare da taɓawa ba. Wannan daidaitawa
ta takaitu ga hotunan da bridge ya ɗauko don self-call ɗinsa — ba a taɓa
amfani da ita ga raw passthrough payload na mai kira ba, daidai da
ƙa’idar gyara bisa opt-in kawai (Hard Rule #20).

#### Tsarin saituna + ƙaura

Sabbin maɓallan `modalityBridge*` ana tantance su da Zod a cikin `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, rukuni uku na `modalityBridgeCache*`, da kuma
rukunin `modalityBridgeAudio*` da Audio Bridge ke amfani da shi. Ƙaurawar
`141_modality_bridge_settings.sql` tana kwafe ƙimomin legacy
`visionBridge*` da ke akwai zuwa sabbin maɓallan da suka dace (idempotent, kuma ba ta taɓa maye gurbin
ƙimar `modalityBridge*` da mai gudanarwa ya saita ba); ana ci gaba da karɓar maɓallan legacy a matsayin
madadin karantawa na zagayen sigar guda ɗaya.

#### Header na fayyacewa + ƙididdiga

Amsoshin da describe ya sauya suna ɗauke da
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(wanda `buildModalityBridgeHeader()` ya gina a cikin `modalityBridge/bridgeStats.ts`,
kuma `withModalityBridgeHeader()` ya liƙa a cikin `src/sse/handlers/chatHelpers.ts`).
Buƙatun da aka sake karkatarwa ba sa samun **wani** header — ba a taɓa payload ɗin ba kuma
ana iya ganin musayar samfurin tuni a filin `model` na jikin amsar.

`GET /api/modality-bridge/stats` (tabbatarwar gudanarwa, mataki ɗaya da
`GET /api/settings`) yana mayar da ƙididdigun kowane modality da ke cikin ƙwaƙwalwa
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` don `vision`, `audio`, da
`video`. `averageLatencyMs` yana amfani da `latencySamples`, ba duk attempts ba, a matsayin
maƙasudinsa; aikin da ba shi da auna lokaci ba ya ƙirƙirar samfurin sifili-millisecond
na bogi. `bridged` ya ci gaba da kasancewa laƙabin da ya dace da tsoffin sigogi don nasarar
juyawa; yunƙurin da ya gaza ba ya ƙara shi.
An tsara ƙididdigun su sake farawa idan tsari ya sake farawa
(telemetry ne, ba lissafin kuɗi ba).

#### Daidaitawar dashboard

Shafin dashboard na musamman shi ne
`/dashboard/settings/modality-bridge`. Shafukansa na `Vision`, `Audio`,
da `Video` waɗanda za a iya samun dama gare su ta URL suna kiyaye query parameters yayin sauya ƙimar `tab`.
Shafin Vision yana nuna kunnawa, mode, zaɓin model (har da tsohon zaɓi na atomatik),
prompting mai la'akari da task, iyakokin timeout/image/description-length/cache
na ci-gaba, ƙididdigun runtime, da buƙatar samfurin da aka tsare. Shafin Audio ma yana aiki:
yana nuna kunnawa, mai zaɓin model na STT kawai tare da Auto, iyakokin timeout/max-clip,
ƙididdigun audio, da gwajin samfurin `input_audio`. Shafin Video yana aiki: yana bayar da rahoton
yanayin runtime na FFmpeg/ffprobe — ɗaya daga cikin bayyanannun yanayi huɗu na UI (`unknown` yayin
da probe ke gudana ko ya kasa kammalawa, `restricted` a kan dashboard host wanda ba na loopback ba
inda ake tsallake probe a ɓangaren client, `unavailable` bayan an yi probe kuma an tabbatar babu shi,
ko `available` tare da sigogin FFmpeg/ffprobe) — yana adana iyakokin
enable/model/frame/video/timeout, yana tace mai zaɓin model zuwa models masu iya vision,
kuma yana nuna ƙididdigun video.

Tsohon katin Vision Bridge da ke ƙarƙashin saitunan AI yanzu hanyar haɗin dacewa ce zuwa
sabon shafin; ba ya ƙara mallakar kwafi na biyu na fom ɗin. Media Providers kuma
yana haɗa hanyoyin aiki na Image-to-Text da Speech-to-Text zuwa shafukan Modality
Bridge da suka dace ba tare da cire wurin gwajin Speech-to-Text da ake da shi ba.

**Tsallake karɓar self-loop:** lokacin da kiran describe ya bi ta self-loop na OmniRoute
na kansa `/v1` (model na provider mara ƙa'ida), ƙaramin request ɗin yana aika
`x-omniroute-admission-bypass: internal` kuma ana tabbatar da shi da credential na self-loop
da aka warware — sentinel na gida `sk_omniroute` a local mode, ko env key da operator ya saita
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350) domin deployments masu
`REQUIRE_API_KEY=true` su ci gaba da gudanar da kiran describe. Ana girmama bypass ɗin
ne kawai ga waɗannan ainihin credentials, saboda haka external clients ba za su iya amfani da
header ɗin don tsallake admission ba.

Legacy defaults suna cikin `src/shared/constants/visionBridgeDefaults.ts`; sabbin
defaults na mode/task-aware/cache da settings resolver suna cikin
`src/shared/constants/modalityBridgeDefaults.ts`. Guardrail ɗin yana samar da
constructor option na `deps` domin tests su iya saka implementations na bogi na `getSettings` da
`callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Yana katse chat requests masu ɗauke da audio kafin su isa target wanda ba a san
yana karɓar audio input ba. Ba ya taɓa sake tura chat request ɗin: ana
juya sassan audio zuwa rubutu ta existing OpenAI-compatible multipart endpoint kuma
chat model da aka zaɓa yana ci gaba da transcripts na rubutu.

Tsari:

1. Warware `supportsAudio` ta `getResolvedModelCapabilities()`. Bayyanannun
   metadata na provider-registry suna da fifiko, sai static model metadata, sannan synced
   `modalities_input`. Jerin input da aka ayyana amma babu `audio` a ciki shi ne `false`; idan
   babu wata shaida ta capability, ya kasance `null`. Duka `false` da `null` suna kunna
   conservative bridge, yayin da `true` ke tsallake shi.
2. Warware saitunan `modalityBridgeAudio*` sannan a ciro spliceable top-level
   audio parts daga kowane message ta shared `detectMediaParts()`
   detector. Wire shapes da ake tallafawa su ne OpenAI `input_audio`, `audio_url`, da
   `source.media_type: "audio/*"`. Ana gano nested audio don routing amma ba a
   cire shi ta splice path. Ana iyakance aikin da `modalityBridgeAudioMaxClips`;
   sassan da ke baya suna nan ba a taɓa su ba.
3. Bi `provider/model` da aka saita, ko bar `selectAudioBridgeModel()` ya bi
   `AUDIO_TRANSCRIPTION_PROVIDERS` bisa tsayayyen catalog order sannan ya zaɓi model na farko
   mai active provider credential da za a iya amfani da shi.
4. `callAudioTranscription()` yana mayar da base64/data-URI audio zuwa multipart
   `file`, ko yana sauke remote `audio_url` ta public-only outbound
   guard tare da DNS pinning da iyakar 25 MB. Daga nan yana POST ɗin file da model da aka zaɓa
   zuwa local `/v1/audio/transcriptions` self-loop, tare da tabbatarwa ta
   `resolveSelfLoopBearer()`. Existing transcription route yana aiwatar da credential lookup,
   sarrafa cooldown/rate-limit, da provider dispatch na yau da kullum.
5. Kira masu nasara suna maye gurbin sassansu da `[Audio N]: <transcript>`. Kiran
   suna gudana da `Promise.allSettled`: gazawar guda tana kiyaye ainihin
   audio part ɗin (#4012 contract). Idan duk kira sun gaza kuma an tabbatar target ɗin yana da
   `supportsAudio === false`, sassan suna zama
   `[Audio N]: (babu shi — babu STT provider da aka haɗa)` (#8430 contract). Ga
   target da ba a san shi ba (`null`), idan duk sun gaza babu abin da ake canzawa. Target
   da aka tabbatar text-only ne kuma ba shi da STT credential mai amfani yana karɓar wannan
   bayyanannen stub ɗin ba tare da yin network call ba.

Transcripts masu nasara suna amfani da Modality Bridge LRU/TTL cache na duk process. Key ɗin
yana haɗa audio reference, tsayayyen operation label na `audio-transcription`,
da STT model da aka zaɓa; ba a taɓa adana failures a cache ba. Audio attempts suna sabunta
shared counters na `bridged`, `cacheHits`, `failures`, da `lastUsedAt`.
Responses da aka sauya suna ɗauke da
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; requests
da ba a taɓa ba ba sa samun segment na Audio Bridge.

Runtime settings suna samun tallafin DB kuma Zod na tabbatar da su:

| Maɓalli                       | Tsoho   | Iyaka                    |
| ----------------------------- | ------- | ------------------------ |
| `modalityBridgeAudioEnabled`  | `true`  | —                        |
| `modalityBridgeAudioModel`    | `""`    | Na atomatik ko ID na STT |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000              |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10                     |

Har yanzu ana sarrafa ma'ajiyar cache ta bai-ɗaya da `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, da `modalityBridgeCacheMaxEntries`.

### Gadar Bidiyo (`videoBridge.ts`, `videoBridgePipeline.ts`)

Tana katse sassan bidiyo na matakin sama a cikin `messages` na Chat Completions da
`input` na Responses API kafin a kira wata manufa da ba a san tana da tallafin
bidiyo na asali ba. Tsarukan da ake tallafawa su ne `input_video`, `video_url`,
`video_source`, URLs na HTTPS, da URIs na bayanai irin
`data:video/*;base64,...`. Ba a ɗauki sunayen fayil kawai da ke cikin rubutu a
matsayin bidiyo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) ne ke kula da ratsa buƙata,
duba iyawa/manufa, tattarawa ta kowace buƙata, da nauyin bayanan amsa.
Aikin kowane bidiyo — samowa, cache na cikakken sakamako, bayyana jerin firam
(wanda ke haɗa duk wani rubutaccen bayanin sauti da mai kira ya bayyana), da
ma'auni/sokewa/tsaftacewa na kowace yunƙuri — yana ɓoye a bayan
`processVideoPart` a cikin `videoBridgePipeline.ts`, wanda ake kira sau ɗaya ga
kowane ɓangaren bidiyo a cikin madauwari ta `preCall`. Wannan module ɗin kuma
yana ayyana bayyanannun iyakokin tashoshin `VideoMediaBrokerPort` (samun bytes
da fitar da firam ɗin da aka ɗauki samfurinsu), `VideoAudioTranscriptionPort`
(haɗa rubutaccen bayanin sauti da mai kira ya bayyana da taken firam ɗin da aka
ɗauki samfurinsu), da `VideoDrilldownPort` (iyakar adana bayanan zurfafawa cikin
firam; har yanzu ba a haɗa shi da `processVideoPart` ba — hanya ta daban ta
`/api/modality-bridge/video/drilldown` ce kawai ke rubuta shigarwar zurfafawa a
yau).

Hanyar buƙata ta jama'a ta `/v1` ba ta taɓa shigo da ko kiran subprocess ba.
Ana sauke bidiyoyin nesa ƙarƙashin iyakar 50 MiB; bidiyoyin base64 na cikin layi
suna da iyakar 36 MiB da aka warware ga kowane bidiyo don ambulan
model/messages/framing ya ci gaba da kasancewa cikin iyakar karɓar buƙatar JSON
ta jama'a ta 50 MiB. Ana duba tsawon bayanan cikin layi da kimanta girman da aka
warware kafin ware ƙwaƙwalwa. Ana buƙatar HTTPS a URL na farko na nesa da
kowane turawa, ta amfani da kariyar fitarwa zuwa wuraren jama'a kawai da ke
akwai tare da ɗaure DNS. Daga nan bytes ɗin sukan ƙetare ainihin iyakar broker
ta ciki ta `POST /api/modality-bridge/video/extract`. Wannan hanyar duka
`LOCAL_ONLY` ce kuma `SPAWN_CAPABLE`, tana karɓar buƙata mai sahihanci ta
kowane process daga trusted-loopback kawai, kuma ba ta taɓa karɓar URL, hanyar
fayil, executable, ko jerin arguments ba. Tsarin iyakar girman body na API da
mai karanta body na handler a hankali suna tilasta iyakar shigar broker ta
50 MiB kowannensu daban. Layinsa mai iyaka yana gudanar da extraction guda ɗaya
a lokaci guda, yana ba da damar ayyuka huɗu masu jiran aiwatarwa, kuma yana
iyakance shigarwar da ke jira zuwa 100 MiB.

A cikin broker, `ffprobe` yana karanta fayil na cikin gida mai zaman kansa;
ƙayyadadden jerin formats da aka yarda da su bai haɗa da formats na playlist da
manifest ba. Ga containers na dangin MOV da aka yarda da su, external MOV data
references suna ci gaba da kasancewa a kashe ta tsohuwa, kuma ƙayyadadden command
ɗin ba ya kunna su. Duka `ffprobe` da `ffmpeg` suna amfani da whitelist na
protocol na `file` kawai, thread guda ɗaya, ƙayyadaddun jerin arguments, babu
shell, kuma ana gano executables daga `PATH`. Cover streams na attached-picture
ba 'yan takarar da za a kunna ba ne. Dole ne duk streams da za a iya kunnawa su
cika iyakokin, kuma ana fifita explicit default stream kafin deterministic
fallback zuwa mafi ƙarancin index. An iyakance bidiyoyi zuwa daƙiƙa 600,
pixels 8,192 a kowace faɗi, da source pixels 33,554,432. FFmpeg yana ɗaukar
samfurin firam JPEG 1–16 na tsakiyar lokaci, yana rage dogon gefen zuwa pixels
1,024 ko ƙasa ba tare da ƙara girman ƙananan bayanai ba, kuma ba ya taɓa karɓar
URL. Sampling yana amfani da `uniform` ta tsohuwa. Manufofin `scene_aware` na
zaɓi da `segment_aware` na gwaji suna aiwatar da ƙarin ƙayyadadden zagayen FFmpeg
guda ɗaya a kan local stream da aka riga aka inganta, suna zaɓar timestamps na
scene na `showinfo` masu iyaka, kuma suna komawa ta hanya mai ƙayyadadden sakamako
zuwa uniform midpoints iri ɗaya idan detector ya gaza, lokacin ya ƙare,
output ya lalace, ko candidate set ya zama babu komai. Yanayin segment-aware
yana rarraba midpoint samples daidai gwargwadon validated scene intervals;
an yi cikakken bayani game da segment-aware evidence da halayen fallback a
ƙasa. Ana amfani da ƙaƙƙarfan iyakar firam 16 bayan zaɓi a kowace manufa. Idan
buƙatar scene-aware tana da kasafin firam guda ɗaya kawai, tana amfani da uniform
midpoint na cikakken bidiyo mai aiki ko focus window kuma tana bayar da rahoton
`policyEffective: uniform`: firam ɗin scene guda ɗaya da aka zaɓa ba zai iya
adana dukkan ƙarshen lokaci biyu ba. Mai kira na iya bayar da finite focus window
na zaɓi (`start`/`end` cikin daƙiƙa); ana daidaita bounds zuwa tsawon media, ana
ƙin windows da aka juya ko marasa finite, kuma ana aiwatar da duk manufofin
sampling ne kawai a cikin normalized interval. Ana haɗa window ɗin da aka samu
a cikin sampling metadata da kuma cikin untrusted description prefix domin
downstream models su iya bambance focused excerpt daga cikakken timeline.

Semantic caption focus wani saitin daban ne kuma bayyananne. Yanayin analysis na
tsoho `full` yana kiyaye frame prompt ɗin da ake da shi kuma ba ya taɓa aika
rubutun buƙata zuwa caption model. A yanayin `focused`, gadar tana karanta sabon
`text`/`input_text` marar komai wanda mai amfani ya rubuta kawai daga wannan
container na Chat ko Responses, tana daidaita shi zuwa NFC, tana dunƙule control
characters da whitespace, sannan tana iyakance shi zuwa Unicode code points 500.
Sakamako marar komai yana komawa zuwa ainihin `full` prompt. Ana serializing
usable hint a matsayin JSON a cikin keɓantaccen untrusted-user-context block,
kuma yana iya fifita observable details kawai; ba zai iya soke gargaɗin daban
game da ƙin bin umarnin da ake iya gani ko ji a cikin media ba. Textual focus ba
ya taɓa gano `start`/`end` ta inference ko sauya temporal sampler.

#### Shaidar segment mai tsari ta FU-07

`segment_aware` yana amfani da zagaye guda na share-fage mai iyaka a kan
rafi na bidiyon gida da aka riga aka inganta. Tsayayyen jerin matatu da farko yana
daidaita faɗin zuwa aƙalla bai wuce pixels 320 ba, yana gano sauye-sauyen fage da
lokutan daskarewa, sannan yana ɗaukar samfurin frame 1 a kowane daƙiƙa domin auna
dusashewa, matsakaicin luma, da bayanan sarari/lokaci. Zagayen yana da iyakar
samfuran tsari 600, thread guda na FFmpeg/matata, ƙa'idojin izinin protocol na
`file`-kaɗai da na container iri ɗaya, iyakar fitowar process ta 1 MiB,
da iyakar daƙiƙa 30 a cikin abort/deadline na gama-gari na broker. Ba ya taɓa
karɓar command, filter, path, ko URL daga buƙatar.

Ƙimomin tsarin hujjojin ɗaukar samfurori ne masu sakamako tabbatacce, ba fahimtar
ma'anar bidiyo ba. Ba sa gano batutuwa, ayyuka, rubutun bayani, magana, ko niyyar
mai amfani. Iyakokin fage da daskarewa suna samar da sassa; yawan daskarewa,
dusashewa, haske, cikakkun bayanan sarari, da sauyin lokaci kawai suke tasiri kan
yadda ake rarraba kasafin frame 1–16 da ake da shi. Ana iyakance sashen da ya
daskare gaba ɗaya zuwa frame guda, yayin da sassan da ba su daskare ba ke gogayya
don samun sauran kasafin. Idan iyakoki sun fi yawan frames, ana ci gaba da
ɗaukar samfurori daidai a kan timeline domin saurin sauyin fage na farko kada ya
ɓoye dogon sashe na ƙarshe. Ana haɗe iyakokin fage da suke cikin ƙudurin nazari
na daƙiƙa 1 daga iyakar daskarewa.

Rashin matatu, hujjoji marasa inganci/marasa komai, kuskuren mai ganowa, ko
ƙarewar lokacin share-fage mai iyaka suna komawa kai tsaye ga ainihin manufar
uniform midpoint. Abort daga mai kira ko deadline na broker ba ya komawa ga
wannan madadin: yana dakatar da subprocess da ke gudana, yana hana cire frames
daga baya, kuma ana cire keɓantacciyar bishiyar wucin gadi a cikin `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` yana samar da fixtures na ainihin FFmpeg
masu sakamako tabbatacce domin adadin kiran caption da aka rage bayan dedup,
rarraba kasafin dense-motion, hujjojin blur/exposure/SI-TI, saurin sauye-sauyen
fage masu dogon ƙarshen bidiyo, da false positives na gradual-fade. Yana rubuta
lokacin agogon share-fage kuma, idan `/usr/bin/time` yana samuwa, CPU na child da
mafi girman RSS. Gwaje-gwajen ingancinsa oracles na tsari ne kawai. Ingancin
ainihin caption-model ya ci gaba da kasancewa `HOLD` saboda wannan harness ba shi
da endpoint mai izini ko frozen judge. Tanadin kuɗi ma yana ci gaba da kasancewa
`HOLD` sai dai idan `--caption-cost-per-call-usd` ya bayar da takamaiman ƙiyasin
kuɗin kowane kira mai ƙima mai kyau; script ɗin ba ya ƙirƙirar ɗaya daga cikin
sakamakon biyu na bogi.

Kowane frame yana da iyakar 4 MiB, duk raw frames tare suna da iyakar 23 MiB,
kuma amsar broker da aka serialized tana da iyakar 32 MiB. Ana cire keɓantaccen
directory na wucin gadi a cikin `finally`. OmniRoute ba ya kunshe FFmpeg kuma ba
ya karɓar executable path na musamman. Kafin yin caption, bridge yana aiwatar da
matakin visual deduplication mai taka-tsantsan: ana rage kowane JPEG zuwa buffer
na grayscale 16×16 sannan a kwatanta shi kawai da frame na ƙarshe da aka riƙe.
Idan kasafin caption da aka nema ya fi frame guda, cirewar tana samar da
candidate pool mai iyaka wanda bai wuce ninki biyu na kasafin ba kuma bai taɓa
wuce frames 16 ba. Ana amfani da iyakar da aka nema ne kawai bayan
deduplication, tare da kiyaye candidates na farko da na ƙarshe da aka zaɓa yayin
ragewa ta ƙarshe idan kasafin ya kai aƙalla biyu. Manufar mai version
`grayscale-16x16-mean-cells-v2` tana amfani da mafi girma tsakanin mean luma
delta da rabon thumbnail cells waɗanda normalized delta ɗinsu ya kai aƙalla
0.05. Threshold na duplicate shi ne constant 0.04, wanda aka zaɓa domin
sakamakon da ake iya hasashe maimakon a bayyana shi a matsayin runtime setting.
Wannan ƙarin siginar high-contrast tana kiyaye ƙananan motsi da sauye-sauyen
rubutun da ake gani waɗanda kwatancin mean-only zai iya ɓoyewa. Kuskuren
comparator ko decoder yana barin aiki ya ci gaba tare da kiyaye coverage.
Metadata na fitarwa yana ware candidates da aka cire, frames da aka yi amfani
da su cikin nasara, da visual duplicates da aka yar.

Sashen bidiyo da aka yi wa alama a sarari na iya neman contact sheet mai
timestamps. Bridge yana gina grid na JPEG mai iyakar columns 4 da frames 16.
Kowane cell mai pixels 512 yana saka source timestamp ɗinsa a cikin bottom band
mai high-contrast, yayin da timestamps iri ɗaya suke ci gaba da kasancewa cikin
textual metadata domin haɗawa da binciken downstream. Cikakken JPEG yana da
iyakar 32 MiB. Idan `sharp` ba zai iya decode ko compose grid ɗin ba, bridge
yana komawa ga JPEG frames ɗin ɗaiɗaiku; abort daga client har yanzu yana
ci gaba ta cikin aikin sheet.

An ware hujjar promotion da gangan daga synthetic composition microbenchmark.
`scripts/perf/video-bridge-contact-sheet-eval.ts` yana ayyana harness na A/B mai
schema-version domin ainihin vision models masu dacewa da OpenAI. Yana auna
tokens da provider ya bayar da rahoto, end-to-end wall latency (ciki har da
sheet composition), yawan model-call, da kiyaye facts da manifest ya ayyana.
Ba a rubuta raw model responses cikin rahoton; SHA-256 digests da matched fact
IDs kawai ake riƙewa. Harness ɗin ba ya yin network ko kiran paid model sai an
wuce `--execute-real` kuma an saita `--model`, `OMNIROUTE_BASE_URL`, da
`OMNIROUTE_API_KEY`. Idan ba a yi wannan ainihin gudu a sarari ba, verdict ɗinsa
da na'ura za ta iya karantawa yana ci gaba da kasancewa `HOLD`; ma'aunin
synthetic payload/call-count kaɗai ba hujjar promotion ba ne.

Masu kira za su iya haɗa optional array na `transcript.cues` zuwa sashen bidiyo
mai goyon baya idan suna da aligned text tuni. Kowane cue dole ne ya ƙunshi
`text`, finite interval na `start`/`end` a cikin tsawon lokacin da aka probe, da
`source` da aka amince da shi (`client`, `embedded`, ko `audio-bridge`);
`confidence` yana komawa ga `1` ta tsohuwa kuma dole ne ya kasance tsakanin `0`
da `1`. Ana haɗe cues masu cikakkiyar maimaituwa. OmniRoute ba ya taɓa fara
transcription daga wannan metadata: ana kwafe cues da aka inganta zuwa sakamakon
da aka bayyana tare da source, confidence, da interval, kuma ana nuna su a
matsayin observations marasa amana tare da frame captions. Ana ƙin rubutu mara
inganci, wanda ya fita daga range, ko mara provenance maimakon haɗa shi cikin
caption stream. Duk request-body transcript channels biyu suna normalize
provenance da aka bayar zuwa `client`, ciki har da labels na `embedded` ko
`audio-bridge` da aka yi iƙirarin kansu. Server-owned adapter kaɗai zai iya
sanya waɗannan trusted labels ta hanyar argument na code-only `trustedSource`;
request JSON field ba zai iya isa ga wannan argument ba. Transcript text yana
ci gaba da kasancewa media-derived content mara amana, ba tare da la'akari da
provenance ɗinsa ba, kuma dole ne kada ya taɓa ƙayyade authorization.

Mai kira na ci-gaba zai iya samar da waƙar `audioTranscript` don bidiyon guda;
ana ɗaukarta a matsayin rubutun da abokin ciniki ya samar, ba hujjar kwafin sauti na sabar ba.
Wurin haɗewar yana gudanar da abubuwan lura na gani da na sauti a ƙarƙashin
wa’adi guda da siginar katsewa guda, yana jera su a kan jadawalin lokaci na bai ɗaya, yana haɗe
kwafi masu daidaito gaba ɗaya, sannan yana bayar da sakamako na ɓangare idan gefe ɗaya kaɗai ya yi nasara.
`audioTranscript` mara inganci yana komawa zuwa wannan sakamakon na ɓangare — ana
riƙe bayanin gani, yayin da reshen sauti ke rubuta tsabtaccen lambar gazawa —
maimakon sa dukan bidiyon ya gaza. Ana adana samuwar kowane reshe, tutar ɓangare,
da tsabtattun lambobin gazawa a cikin sakamakon da aka bayyana, a cikin
metadata na guardrail (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), a cikin metadata na ma’ajiyar sakamako, da kuma a cikin
masu ƙirga haɗewar bridge. Tsohuwar hanyar Video Bridge ba ta kiran speech-to-text
ko sauke kwafin media na biyu; idan babu wannan waƙar da aka bayyana sarai, tana ci gaba
da zama ta bidiyo kaɗai.

**Riƙe transcript (#12150 P1).** Wannan yana aiki ta atomatik duk lokacin da
Video Bridge (wanda shi kansa sai an zaɓi amfani da shi) ya nuna cue na transcript — babu wata
tutar riƙewa ta dabam. Lokacin da buƙata ta nuna kowane cue na transcript (wani
`transcript` da mai kira ya ayyana ko `audioTranscript` da aka haɗe), guardrail yana yi masa alamar
`videoBridgeObserved` sannan ya samar da kwafi mai ɓoye bayanai na bayanin bidiyon —
nuni iri ɗaya wanda a cikinsa aka maye gurbin jikin rubutu marar tsari na kowane cue da
`[redacted-video-transcript]`, wanda aka gina ta hanyar musanya filin cue mai tsari
kafin a haɗa zaren (ba a taɓa yin hakan ta hanyar nazarin rubutun da aka shimfiɗa ba, don haka babu abun cikin cue
— na cutarwa ko na yau da kullum, ciki har da jikin da ke ɗauke da `]` kamar
`[inaudible]`/`[music]` — da zai iya tsira). Jikin buƙatar call-log da ake adanawa yana musanya
kowane ɓangaren rubutu da aka samo daga bidiyo da wannan kwafi mai ɓoye bayanai, ta hanyar daidaiton
abun ciki; ana sake karanta tushen `fullText` daga cikakken payload na guardrail kafin kira,
saboda haka daidaitawar har yanzu tana yin nasara bayan guardrails na gaba a cikin jerin (masu ɓoye PII da
bayanan shaidar shiga, fifiko 10/95) sun sake rubuta bayanin a wurinsa, da kuma
bayan shigar da system-prompt/handoff/memory ya sake fasalta jerin saƙonni. Jikin
da aka aika zuwa sama ga model bai canza ba. Buƙatar da aka lura da ita kuma ba ta cika
Memory mai ɗorewa ba (ana tsallake cire bayanai daga buƙata da kuma daga amsa),
don haka amsar model ɗin kansa ba za ta iya maimaita rubutun transcript zuwa Memory ba.

**Filayen bidiyo marasa sarrafawa (#12430).** Lokacin da aka kunna bridge kuma ba a san goyon bayan bidiyo na asali ba ko babu shi, filayen `transcript`/`audioTranscript` da aka ayyana su ma suna kunna `videoBridgeObserved`, ko da bayan gazawar bayani ko iyakar `maxVideos`. `null` da zaren wofi suna ƙidayuwa; filayen da ba su nan da metadata da ba na bidiyo ba ba sa ƙidayuwa. Kwafe da aka riƙe suna ɓoye waɗannan filayen ko kuma su bar buƙatar gaba ɗaya, kuma ana tsallake caches/Memory.

A waɗannan hanyoyin fallback, cues masu inganci daga mai kira suna zama ɓangarorin
`text`/`input_text` da ake goyon baya maimakon filayen provider marasa ƙa’ida. Duk waƙoƙin biyu
da buƙata ta samar suna ci gaba da kasancewa abubuwan lura na `client` marasa aminci, tare da gargaɗi
bayyananne cewa ba a bayyana bidiyon ba kuma ba a tabbatar da timestamps da media ba. Iyakokin da ake da su
na cues 256/64-KiB gaba ɗaya da na kowane cue suna aiki a kan waƙoƙin biyu tare;
timestamps dole su dace da iyakar daƙiƙa 600 ta broker da duk wata tagar mayar da hankali
da aka samar. Ana watsar da waƙoƙi marasa inganci, ba a tura su a matsayin rubutu marar ƙa’ida ba; har yanzu ana iya
amfani da waƙar ’yar’uwa mai inganci sai dai idan an wuce haɗaɗɗen iyakarsu. Filayen null/wofi
ba sa ƙara wani rubutu. Wannan fallback ba ya ƙara ɗauko media ko transcription.
Ana cire filayen ƙarin transcript daga mai ɗaukar bidiyon fallback da abubuwan
`video_url`/`source` nasa. Allowlist na layin OpenAI yana ci gaba da tsauri; masu ɗaukar
bidiyo waɗanda ba a san goyon bayan asalinsu ba suna ci gaba da samuwa, kuma wuraren da aka san rubutu-kawai ne suna riƙe alamomi masu aminci.
Kwafe na ɓoye bayanai masu tsari suna kare rubutun transcript da aka ƙara, yayin da
buƙatar asali mallakar mai kira ba ta canza ba. Wuraren da ke da goyon bayan asali da
bridges da aka kashe suna ci gaba da halayen bypass da suke da su.

Ƙarin kwafe da aka riƙe suna amfani da siginar buƙatar da aka lura da ita iri ɗaya. Kwafin
buƙatar abokin ciniki marar sarrafawa kafin guardrail, buƙatar da ke jira a cikin memory, da log na
buƙatar da aka ƙi tun da wuri suna maye gurbin filayen transcript a cikin ɓangarorin bidiyo ta tsari;
ana ɓoye string prompts da matakan pipeline da context handoff suka ƙirƙira
a wurin karɓar jikin buƙata da ake adanawa. Alamar `video_content_removed` da aka adana
tana sa ci gaba ta `previous_response_id` ya ƙi aiki cikin aminci maimakon sake gina
rubutun da aka yi niyyar watsarwa. Idan buƙatar da aka lura da ita ta rasa
kwafin ɓoye bayananta na kowane ɓangare kafin logging, ko ma ɗaya daga cikin kwafen bidiyo da yawa
ya kasa daidaituwa bayan sauye-sauyen buƙata na gaba, ana barin jikin buƙatar da ake riƙewa
gaba ɗaya maimakon riƙe transcript da aka ɓoye wani ɓangarensa kawai.

Ga buƙatar da aka lura da ita, amsar model na iya ambaton kowane ɓangare na
transcript ba tare da iyakar cue mai tsari ba. Saboda haka ana maye gurbin
`responseBody` na call-log da ake adanawa da alamar barin bayani; ba a riƙe cikakken
artifact na pipeline (wanda zai iya haɗawa da jikin upstream/client da gutsattsarin stream) ba.
Caches na semantic, idempotency, da reasoning-replay suna tsallake
karatu da rubutu don wannan buƙatar. Buƙatar provider da amsar da abokin ciniki ke gani
ba su canza ba. Ana zubar da bytes na keepalive na farko daga buffer na wucin gadi
lokacin da aka bar cikakken artifact. Gargadin EventStream mara tsari na Kiro
yana bayar da rahoton adadin bytes na payload kawai, ba abun cikinsa ko ɗanyen kuskuren
JSON parser ba.
Wannan ba da’awar cewa an binciki kowane diagnostic na provider/plugin da ba shi da alaƙa ba ne;
ana bibiyar aikin binciken wuraren riƙewa mafi faɗi a cikin #11658.

Tsarin rayuwar cikin gida na `/api/modality-bridge/video/drilldown` wani keɓantaccen tushen ma’aji ne na loopback wanda ake tabbatar da sahihancinsa da token. Kowace aiki kuma tana buƙatar ID na principal mai tsari na canonical wanda ba a bayyana ma’anarsa. Kafin a kunna mai kira na production, dole ne ya samo wannan ID daga tenant ɗin da aka tabbatar da sahihancinsa, kuma kada ya taɓa tura ƙimar da client ya zaɓa. Maɓallan ma’aji suna haɗa wannan principal da ID na session da na video-reference masu canonical, suna adana maɓallansu da aka samo daga SHA-256 kaɗai, sannan suna iyakance karatu da gogewa zuwa principal iri ɗaya. Ma’ajin yana adana aƙalla firamomin JPEG 16 da aka samo a kowace shigarwa, yana sa su ƙare bayan minti goma, kuma yana goyon bayan karatu mai iyaka na `start`/`end` ko gogewar session kai tsaye.

Kowane principal yana da iyaka ta shigarwa 16 da MiB 64 na bayanan JPEG masu canonical. Waɗannan iyakokin ba su dogara da iyakar duniya ta shigarwa 64/MiB 256 ba: matsin quota na principal yana fara fitar da shigarwar principal ɗin nan da ba a daɗe da amfani da su ba kafin a yi la’akari da fitarwar LRU ta duniya. Ana share shigarwar da suka ƙare daga lissafin principal da na duniya yayin ayyukan ma’aji, yayin da sokewa da gazawar tantancewa ba sa tabbatar da wani maye gurbi na ɓangare.

Ma’ajin yana ƙin Base64 marar canonical, padding mai yawa, media da ba JPEG ba, JPEG marar ingantaccen tsari ko wanda aka datse, da kuma JPEG da ke haifar da gargaɗi yayin cikakken decode na hoto mai iyaka ta `sharp`. Yana sake encode kowane hoto da aka karɓa a matsayin JPEG mai canonical, yana samo faɗi da tsawo daga bytes da aka decode maimakon amincewa da filayen mai kira, sannan yana watsar da duk wasu bytes na polyglot da ke biye maimakon riƙe su. Canonical compressed buffer mai iyaka kaɗai ake ƙirga wa duka quota biyun. Iyakar JSON ta hanyar sadarwa ta haɗa da ƙarin girman Base64 don iyakar decoded-input ta MiB 32. Kowace derivation da aka adana tana rubuta ingantaccen tsarin JPEG/ƙudurinsa, sampling policy, derivation version, lokacin ƙirƙira, content hash da server ya lissafo, da parent reference da aka hash tare da parent-content hash na amintaccen mai kira. Ana duba sokewa tsakanin matakan decode/hash masu asynchronous kafin atomic cache commit.

Wannan rukuni bai haɗa production producer da route ba tukuna, kuma bai samar da zaɓin variant mai ƙudurori da yawa ba. Saboda haka hanyar buƙatar Video Bridge mai gaskiya ba ta jawo wani ƙarin aiki, yayin da samar da principal da aka ɗaure da tenant da cikakken tsarin rayuwar FU-08 mai ƙudurori da yawa suke ci gaba da kasancewa aikin da za a bi a gaba a sarari, maimakon a rubuta su a matsayin halayen da aka kammala.

Ana yi wa firamomi caption bi da bi ta amfani da ƙayyadadden samfurin Video. Video override mara komai yana gaji saitin Vision; idan dukansu babu komai, Vision auto-router ne ke zaɓar ingantaccen samfurin da ke iya sarrafa vision. Caption da ya yi nasara yana maye gurbin ɓangaren asali da tsayayyen prefix na `[Video description:` wanda kuma yake nuna rubutun a matsayin abin lura marar aminci da aka samo daga media, tare da umartar samfuran da ke biyo baya kada su bi umarnin da aka samu a cikin media. Maɓallan ma’ajin frame-caption suna haɗa bytes na JPEG, prompt, timestamp, da effective model; caption da suka yi nasara kaɗai ake adanawa. Shigarwar ma’aji suna riƙe ainihin producer model da ya yi nasara, ciki har da fallback model; bridge yana bayar da rahoton `mixed` idan samfurori daban-daban suka samar da firamomi daban-daban. Cache hit yana sake amfani da wannan producer identity maimakon sake sanya masa sunan requested routing plan. Ana gina maɓallin ma’ajin sakamakon cikakken bidiyo bisa kowane input da ke canza output — prompt, effective model, sampling policy, frame count, semantic analysis mode, SHA-256 fingerprint na normalized focus hint, focus window, `transcript`, `audioTranscript`, da contact-sheet flag — don haka canza kowane ɗaya daga cikin waɗannan bangarorin yana haifar da cache miss, ba sake amfani da tsohon sakamako ba. Visual dedup policy version, threshold, da bounded candidate-frame count suma suna bayyana kai tsaye a result-cache key da metadata; saboda haka canjin policy ba zai iya sake amfani da tsohon whole-video description ba. Metadata na result-cache v4 yana riƙe mode da fingerprint, ba ya taɓa riƙe raw user task. Metadata na guardrail yana bayar da rahoton requested analysis mode da effective analysis mode; requested `focused` mode da ba shi da usable user text ana bayar da rahotonsa a matsayin `full` a aikace.

Guardrail yana fitar da kowane supported video part amma ba ya bayyana fiye da `modalityBridgeVideoMaxVideos`. Ga target da aka tabbatar yana da `supportsVideo === false`, bidiyoyin da suka gaza da waɗanda suka wuce iyaka suna zama explicit safe text markers don kada wani raw video ya tsira. Idan ba a san capability ba, waɗannan sassan suna riƙe video carrier nasu; duk wani fallback transcript yana bin bounded text conversion da ke sama. Targets masu `supportsVideo === true` suna tsallake bridge. Client request abort signal yana yaɗuwa ta download, broker queue, subprocesses, da caption calls; aborts suna dakatarwa tsakanin bidiyoyi kuma ba sa taɓa gazawa ta yadda za a bar raw media ya wuce.

Ana adana saitunan runtime a DB kuma ana tantance su da Zod:

| Maɓalli                             | Tsoho       | Iyaka / halayya                                                                                                                           |
| ----------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Lokacin gudu na zaɓi, sai an kunna shi da gangan                                                                                          |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` yana kiyaye bayanan hoto na gama-gari; `focused` yana amfani da iyakantaccen mahallin sabon mai amfani wanda ba a amince da shi ba |
| `modalityBridgeVideoModel`          | `""`        | Yana gado samfurin Vision Bridge                                                                                                          |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                                      |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, ko `segment_aware` mai daidaituwa da kaso; gazawar mai gano abu tana komawa zuwa `uniform`                      |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                                       |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                                            |

Tsofaffin ƙimomin lokacin ƙarewar Video da aka adana waɗanda suka wuce daƙiƙa 120 ana iyakance su zuwa
wa'adin broker; sabbin rubuce-rubucen saituna da suka wuce wannan iyaka ana ƙin karɓarsu.
`GET /api/modality-bridge/video/runtime` yana buƙatar ingantaccen wurin loopback
na gida mai tambarin amincewa kafin tantancewa ko binciken lokacin gudu, sannan yana buƙatar
izinin gudanarwa. Yana dawo da `available` kawai, tsabtattun nau'ikan FFmpeg/ffprobe, da tsayayyen
dalili idan babu lokacin gudun. Wurin ƙarshen cire bayanan na ciki ba
API ne na jama'a don loda fayiloli ba: cikar layin jira yana dawo da `503` tare da `Retry-After`, katsewar
mai kira tana dawo da `499`, kuma tsayayyen wa'adin broker yana dawo da `504`. Amsoshin da aka sauya suna ƙara
`video->text;model=<visionModel>;parts=<videos>` zuwa babban taken
`x-omniroute-modality-bridge` ba tare da cire sassan Vision ko Audio ba.

### Mai Rufe PII (`piiMasker.ts`)

Yana gudana a **dukkan** matakai biyun.

- **`preCall`** yana kwafe payload, yana bi ta `system`, `messages`, `input`, da
  `prompt` (har da abubuwan da suke kirtanin rubutu kai tsaye), sannan yana aiwatar da `processPII()` (daga
  `@/shared/utils/inputSanitizer`) kan filayen `content`/`text` masu nau'in kirtani. Lokacin da
  `PII_REDACTION_ENABLED=true`, ana ɓoye PII da aka gano a cikin payload
  mai fita. Wannan ba ya dogara da `INPUT_SANITIZER_MODE` (wanda ke sarrafa
  manufar kutsen prompt kawai). Lokacin da aka kashe ɓoyewar, kiran yana adana
  ƙididdigar abubuwan da aka gano ba tare da sake rubuta abun ciki ba.
- **`postCall`** yana yin kwafi mai zurfi na amsar, yana gudanar da `sanitizePIIResponse()` tare da
  mai rufe tsarin Responses-API (`maskResponsesOutput` — yana rufe
  `output_text` da `output[].content[].text`). Idan an yi wata ɓoyewa, amsar
  da aka gyara za ta maye gurbin ta asali.

Kariyar ba ta taɓa toshewa; tana yin alama (`meta.detections`,
`meta.redacted`) ko sake rubutawa kawai.

### Kutsen Prompt (`promptInjection.ts`)

Yana gano tsarukan cutarwa a cikin abun ciki da mai amfani ya bayar kuma yana aiwatar da
manufar da aka saita. Ana kayyade halayyar ta hanyar masu sauyin muhalli da zaɓuɓɓukan
constructor:

| Saiti            | Mai sauyin muhalli                                                                                    | Tsoho  | Tasiri                                                                                                                                                                                              |
| ---------------- | ----------------------------------------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| An kunna         | `INPUT_SANITIZER_ENABLED`                                                                             | `true` | Lokacin da yake `false`, kariyar tana katse aiki nan take.                                                                                                                                          |
| Yanayi           | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn` | Manufar kutsen: `block`, `warn`, ko `log`. (Ana karɓar `redact` don dacewa da tsoffin nau'uka amma **ba ya** cire rubutun kutsen; `PII_REDACTION_ENABLED` ne ke sarrafa sake rubuta PII na buƙata.) |
| Iyakacin toshewa | Zaɓin `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (laƙabi `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | Mafi ƙarancin tsanani da ake buƙata don toshewa. A tsohon saiti, matsakaici na lura kawai ne.                                                                                                       |

**Fifikon yanayi** (`getMode`): `options.mode` na mai kira →
sauyin tuta na fasalin DB na `INJECTION_GUARD_MODE` **wanda ke rinjayar sauran saituna** (Dashboard → Settings →
Feature Flags) → muhalli na `INJECTION_GUARD_MODE` → muhalli na `INPUT_SANITIZER_MODE` →
`warn`. Saboda haka, sauyin da aka yi daga dashboard yana rinjayar masu sauyin muhalli, don haka UI na Feature
Flags yana sarrafa kariyar da ke gudana kai tsaye (ba tare da sake farawa ba). Karatun DB yana da kariyar gazawa:
idan ya samu kuskure, kariyar tana komawa ga halayyar da ta dogara da muhalli, kuma idan babu
wani sauyin rinjaye da aka saita, halayyar tana zama daidai da ƙudurin da ya dogara da muhalli kawai.

Tushen ganowa:

1. `sanitizeRequest()` daga `@/shared/utils/inputSanitizer` (tarin masu gano abu na bai ɗaya
   da ake amfani da shi a wasu wurare cikin pipeline).
2. `DEFAULT_GUARD_PATTERNS` da aka gina a ciki (a halin yanzu `system_override_inline` da
   `markdown_system_block`, dukansu suna da tsananin `high`).
3. `customPatterns` na zaɓi waɗanda aka tura ta zaɓuɓɓukan constructor (kirtani, regex,
   ko bayanan `{ name, pattern, severity }`).

Lokacin da `mode === "block"` **kuma** aƙalla gano guda ɗaya ya kai matakin tsanani
da aka saita, `preCall` yana dawo da `{ block: true, message: "Request rejected:
suspicious content detected" }`. A yanayin `warn`/`log`, shingen kariya yana yin rajista amma
yana ƙyale kiran. Hakanan ana fitar da mataimakin gama-gari `evaluatePromptInjection()`
domin masu kira waɗanda suke buƙatar tantance prompts ba tare da bi ta registry ba.

**Iyakar dubawa (v3.8.20):** mai gano yana bincika kawai **16 KB na farko** na
rubutun prompt da aka haɗa — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) a cikin
`src/shared/utils/inputSanitizer.ts`. Dukansu `detectInjection()` da
`evaluatePromptInjection()` suna yin `slice(0, MAX_INJECTION_SCAN_BYTES)` kafin gudanar da
madaukin pattern. Umarnin injection suna kasancewa kusa da saman input, saboda haka wannan
yana iyakance amfani da CPU/GC na regex a kan payloads masu ɗaruruwan KB ba tare da raunana ganowa ba (duba
#3932, #4041).

### Mai Rufe Bayanan Shaida (`credentialMasker.ts`)

Yana aiki a **dukkan** matakai biyu, a ƙarshe cikin jerin tsoho (fifiko `95`). Yana ɓoye
sanannun patterns na API-key / secret-token daga payload mai fita (abun cikin saƙo,
arguments na tool-call, sakamakon tools) **da kuma** martanin provider, ta yadda
bayanan shaida da aka liƙa cikin prompt (ko waɗanda sakamakon tool ya maimaita) ba za su fallasa
ga provider na waje ko kuma su koma ga client ba.

- **Sai an kunna da gangan**, bisa ƙa'ida iri ɗaya da ɓoye PII (kusa da Hard Rule #20):
  a kashe yake sai dai idan `settings.credentialRedactionEnabled === true` **ko**
  `CREDENTIAL_REDACTION_ENABLED=true`. Idan yana kashe, shingen kariyar ba ya yin komai —
  ba ya taɓa toshewa kuma ba ya taɓa sake rubutawa.
- `redactCredentials()` yana bi ta dukkan bishiyar payload/response (`walkValue()`,
  mai kariya daga prototype-pollution, mai jure zagaye ta hanyar `WeakSet`) kuma yana maye gurbin
  abubuwan da suka dace da alamar `[REDACTED:<type>]`, yana kwafe rassan da suka
  canza kawai.
- `CREDENTIAL_PATTERNS` ya ƙunshi maɓallan LLM provider (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokens na VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), maɓallan biyan kuɗi (Stripe, Square), maɓallan
  cloud (AWS access key, Twilio, SendGrid, Mailgun), private keys / JWTs,
  connection strings masu ɗauke da bayanan shaida (`mongodb://user:pass@...`, da sauransu), da
  generic pattern na ƙimar header na `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Ana ɓoye maɓallan da ke da siffar header (`authorization`, `x-api-key`, `api-key`,
  `apikey`) bisa tsari (ƙimar kawai, ana kiyaye scheme prefix kamar
  `Bearer `/`Basic `) maimakon ta hanyar generic text regex.
- Shingen kariyar ba ya taɓa toshewa; yana sake rubutawa kawai (`modifiedPayload` /
  `modifiedResponse`) kuma yana ƙara bayanin alama (`meta.credentialsRedacted`, `meta.count`).

Mai gadin regression: `tests/unit/credential-masker-guardrail.test.ts`.

## Kwangilar Tushe (`base.ts`)

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
  block?: boolean; // true yana dakatar da sarkar nan take
  message?: string; // ana nuna shi lokacin da aka toshe
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // preCall ne ke mayar da shi don sake fasalin buƙatar
  modifiedResponse?: TValue; // postCall ne ke mayar da shi don sake fasalin amsar
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

Guardrail yana nuna cewa “babu canji” ta hanyar mayar da ko dai `void`, `{}`, ko
`{ block: false }`. Mayar da `modifiedPayload`/`modifiedResponse` yana maye gurbin
ƙimar da ke gudana cikin sarkar zuwa guardrails na gaba.
`signal?: AbortSignal` yana isar da zagayowar rayuwar mai kira zuwa guardrails. Soke buƙata shi ne keɓantaccen yanayin fail-open da aka yi da gangan: gadajen kafofin watsa bayanai suna dakatar da aiki kuma su share abubuwan wucin gadi ba tare da dawo da ɗanyen kafofin watsa bayanai zuwa manufa da aka san ba ta goyon bayansu ba.

## Rajista (`registry.ts`)

Singleton `guardrailRegistry` yana bayyana:

- `register(guardrail)` — yana ƙara (ko maye gurbin ta sunan da aka daidaita) guardrail kuma
  yana sake tsarawa ta hanyar hawan `priority`.
- `clear()` / `list()` — masu taimakawa gudanarwa.
- `runPreCallHooks(payload, context)` — yana maimaita guardrails masu aiki, yana wuce da
  payload ta hanyar `modifiedPayload`, kuma yana tsayawa a farkon `block: true`.
- `runPostCallHooks(response, context)` — tsarin guda ɗaya a gefen amsa.
- `resetGuardrailsForTests({ registerDefaults })` — yana share yanayi kuma a zaɓi
  yana sake yin rajistar tsoffin abubuwan don tsabtataccen keɓewar gwaji.

Duk masu gudu suna dawo da `{ blocked, payload|response, results, guardrail?, message? }`
inda `results` shine jerin bayanan `GuardrailExecutionResult` waɗanda suka haɗa da
filayen `blocked`, `skipped`, `modified`, `error`, da `meta` na kowane guardrail,
masu amfani don bin diddigi.

### Kashe Guardrails Ga Kowane Buƙata

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` yana tattara
jerin sunayen guardrail da aka cire kwafi waɗanda ya kamata a tsallake su don
buƙatar yanzu. Tushen (duk na zaɓi, duk an haɗa su):

- `apiKeyInfo.disabledGuardrails`
- Jikin buƙata `disabledGuardrails` (matakin sama)
- Jikin buƙata `metadata.disabledGuardrails`
- Header `x-omniroute-disabled-guardrails` (ko tsohon
  `x-disabled-guardrails`)

Ƙimar na iya zama jerin igiyoyi ko igiya mai raba-koma; ana daidaita sunaye
zuwa ƙananan haruffa kebab-case (`pii_masker` → `pii-masker`). Ana wuce da
sakamakon ta hanyar `context.disabledGuardrails` zuwa rajista, wanda ke
tsallake guardrails masu dacewa (`skipped: true` a cikin `results`).

## Tsarin Aiki

Ga kowane buƙata da ke gudana ta `src/sse/handlers/chat.ts` da
`open-sse/handlers/chatCore.ts`:

1.  `resolveDisabledGuardrails(...)` yana gina jerin abubuwan da za a tsallake daga maɓallin API, jiki,
    da kuma kanun labarai.
2.  `guardrailRegistry.runPreCallHooks(body, ctx)` yana gudanar da guardrails a cikin tsarin fifiko mai hawa:
    - Guardrails da aka kashe ana rubuta su a matsayin `skipped`.
    - Kowane `preCall` na guardrail na iya sake rubuta bayanan da aka ɗora ta hanyar `modifiedPayload`.
    - `block: true` na farko yana dakatar da sarkar kuma mai sarrafawa yana mayar da
      martanin kin amincewa da guardrail.
3.  Bayanan da aka ɗora (watakila an sake rubuta su) suna shiga cikin hanyar haɗin gwiwa da kuma
    aikin aika zuwa sama.
4.  Bayan an haɗa martanin, `guardrailRegistry.runPostCallHooks(...)`
    yana gudanar da sarkar iri ɗaya akan martanin. `block: true` anan yana jefar da martanin daga sama.

Guardrails da suka jefa kuskure ana rubuta su da `error: <message>` kuma ana shigar da su ta hanyar
`logger.warn`, amma sarkar tana ci gaba – an tsara ta don ta ci gaba duk da kuskure.

## Saita

Ma'aunin muhalli da guardrails na ciki ke karantawa:

| Variable                              | Wanda ke amfani da shi      | Tasiri                                                                                              |
| :------------------------------------ | :-------------------------- | :-------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`          | Saita `false` don kashe gano gaba ɗaya.                                                             |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`          | Manufar allura: `warn`, `block`, ko `log`. Tsohon darajar `redact` baya sake rubuta rubutun allura. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`          | Yanayin don kariyar allura; kuma alamar fasalin DB da **ke mamaye** ma'aunin muhalli (DB > ENV).    |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`          | Mafi ƙarancin tsanani da `MODE=block` ke ƙi: `high` (tsoho), `medium`, ko `low`.                    |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`          | Tsohon suna ga `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`                | Lokacin da `true`, PII na buƙata ana gyara shi (mai zaman kansa daga yanayin allura).               |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (ƙasa da ruwa) | Yana sarrafa halayen masker na gefen martani.                                                       |

Guardrails na Modality Bridge suna karanta saitin lokacin aiki daga ma'ajiyar saitunan da DB ke tallafawa
(`getSettings()`), ba ma'aunin muhalli ba. Maɓallan farko na Vision sune
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, da
`modalityBridgeCacheMaxEntries`. Tsoffin maɓallan
`visionBridge*` ana karɓar su ne kawai a matsayin abin da aka rubuta na sake karantawa na zagaye ɗaya;
rubuce-rubucen dashboard suna amfani da maɓallan farko. Abubuwan tsoho da mai warwarewa na sake karantawa suna zaune a
`src/shared/constants/modalityBridgeDefaults.ts`, tare da tsoffin ma'auni da aka riƙe a
`src/shared/constants/visionBridgeDefaults.ts`.

Audio yana amfani da `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, da `modalityBridgeAudioMaxClips`, tare da saitunan
`modalityBridgeCache*` da aka raba. Audio bashi da tsohon maɓallin sake karantawa saboda an gabatar da waɗannan maɓallan tare da tsarin Modality Bridge.

Video yana amfani da `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, da
`modalityBridgeVideoTimeout`, tare da saitunan `modalityBridgeCache*` da aka raba.
An kashe shi ta tsohuwa saboda FFmpeg/ffprobe sune zaɓin dogaro na aiki kuma
ƙara rubutun firam yana ƙara jinkiri da farashin samfuri.

## Tsare-tsare na Musamman

```typescript
import { BaseGuardrail, guardrailRegistry } from "@/lib/guardrails";

class BudgetGuardrail extends BaseGuardrail {
  constructor() {
    super("budget", { priority: 50 });
  }

  async preCall(payload, ctx) {
    if (ctx.apiKeyInfo?.budgetExceeded) {
      return { block: true, message: "An wuce kasafin kuɗi na yau da kullun" };
    }
    return { block: false };
  }
}

guardrailRegistry.register(new BudgetGuardrail());
```

Matakai:

1. Ƙirƙiri `src/lib/guardrails/myGuardrail.ts` yana faɗaɗa `BaseGuardrail`.
2. Aiwatar da `preCall` da/ko `postCall`.
3. Ko dai a yi rajista a lokacin shigo da kaya (tura daga `registerDefaultGuardrails`) ko
   kiran `guardrailRegistry.register(...)` a lokacin gudu — rajistar tana maye gurbin
   kowane tsarin tsaro na baya da suna ɗaya.
4. Ƙara gwaje-gwaje a ƙarƙashin `tests/unit/` (misalai masu akwai:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Gwaji

Yi amfani da `resetGuardrailsForTests()` tsakanin gwaje-gwaje don farawa daga sanannen yanayi.
Wuce `{ registerDefaults: false }` don farawa da rajista mara komai kuma
yi rajistar tsare-tsaren tsaro kawai da ake gwadawa. Vision Bridge yana karɓar allurar dogaro (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge yana bayyana
daidaitattun abubuwan da suka dace don saituna, iyawa, zaɓin samfurin STT, binciken takardun shaida,
da rubutawa. Don haka gwaje-gwaje na iya yin amfani da duka hanyoyin ba tare da DB
ko samun damar hanyar sadarwa ba.

## Duba Kuma

- `src/lib/guardrails/` — aiwatarwa
- `src/shared/utils/inputSanitizer.ts` — mai gano abubuwan da aka raba wanda ke ba da ƙarfi
  allurar saƙo da rufe PII
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge tsoffin saituna da
  jerin samfuran da aka tilasta-gada
- `src/shared/constants/modalityBridgeDefaults.ts` — Vision/Audio tsoffin saitunan lokacin gudu
- `docs/architecture/RESILIENCE_GUIDE.md` — Layer na orthogonal (mai karya kewaye, sanyaya)
- `docs/reference/ENVIRONMENT.md` — cikakken bayanin env var

## Rufin hanyar kariya daga allura & ƙungiyar ja (Mataki na 8 · Block D)

Kariyar allura (`createInjectionGuard` / `withInjectionGuard`) tana rufe duk hanyoyin
da ke karɓar saƙonnin mai amfani. Tana mutunta `INJECTION_GUARD_MODE` (tsoho `warn` = log kawai;
`block` = yana dawo da HTTP 400 `SECURITY_001`).

| Nau'i | Hanyoyi | Yanayin tsoho |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | warn |
| Rubutu (mai akwai) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions` | warn |
| Generative | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn |
| Data | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations` | warn |

Cire rubutu (`extractMessageContents`) yana rufe `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Ƙungiyar ja (dare, `nightly-llm-security.yml`):** promptfoo yana tabbatar da cewa kowace hanya tana toshe
corpus na OWASP-LLM a cikin `INJECTION_GUARD_MODE=block`; garak yana gudanar da bincike (yana tsallake ba tare da sirri ba).
An haɗa `moderations` don daidaito — masu aiki a yanayin toshewa na iya keɓe shi ta hanyar
`resolveDisabledGuardrails`.

Aikin dare (`.github/workflows/nightly-llm-security.yml`, cron + manual
dispatch) yana da ayyuka biyu:

- **`promptfoo-guard` (toshewa)** — yana gudanar da `promptfoo eval -c promptfooconfig.yaml`
  tare da `INJECTION_GUARD_MODE=block`. Kowace shari'ar adawa (misali "yi watsi da duk
  umarnin da suka gabata…", DAN-style jailbreaks) yana tabbatar da cewa amsar tana ɗauke da
  `error.code === "SECURITY_001"`, wato, mai gadi ya ƙi buƙatar.
- **`garak` (shawara)** — yana gudanar da garak `--probes promptinject,dan,leakreplay`
  akan wani misali na OmniRoute na gida (`http://localhost:20128/v1`). An rufe shi da
  sirrin mai bayarwa (`PROMPTFOO_PROVIDER_KEY`); yana tsallake da kyau kuma an haɗa shi da
  `|| true`, don haka yana bayar da rahoto ba tare da gazawar CI ba.

Rufin mai taimakon gadi (`createInjectionGuard` / `withInjectionGuard`)
yana rufe kowace hanyar `/v1` mai ɗauke da saƙo; ana cire rubutun saƙo daga
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` ta hanyar
`extractMessageContents()` a cikin `src/shared/utils/inputSanitizer.ts`.
