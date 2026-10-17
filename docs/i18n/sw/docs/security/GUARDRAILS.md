# Guardrails (Kiswahili)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Chanzo rasmi:** `src/lib/guardrails/`
> **Ilisasishwa mwisho:** 2026-08-29 — v3.8.51 (asili ya nakala ya Video Bridge hutangazwa na mpigaji,
> bado haijathibitishwa na seva — imefafanuliwa kulingana na #11661)

Vizuizi vya ulinzi hutekeleza usalama, sera na mageuzi ya maudhui kwenye mpaka
kati ya OmniRoute na watoa huduma wa ngazi ya juu. Kila kizuizi cha ulinzi kinaweza kukagua (na
kwa hiari kukataa, kubadilisha au kuweka ufafanuzi kwenye) data za ombi (`preCall`) na
majibu ya mtoa huduma wa ngazi ya juu (`postCall`).

Mfumo ni wa **fail-open**: ikiwa kizuizi cha ulinzi kitatupa hitilafu kinapotekelezwa, sajili
hurekodi hitilafu hiyo na kuendelea na kizuizi kinachofuata badala ya kusababisha
ombi lishindwe. Kuzuia ni uamuzi wa moja kwa moja (`block: true`), kamwe si ajali.

## Vizuizi Vilivyojengewa Ndani

Rejista hupakia kiotomatiki vizuizi sita kwa mpangilio wa kipaumbele wakati wa kuingiza
(angalia `registry.ts` → `registerDefaultGuardrails()`):

| Kipaumbele | Jina                | Hatua          | Faili                 |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nambari ndogo za kipaumbele hutekelezwa **kwanza**.

### Daraja la Maono (`visionBridge.ts`) — Daraja la Modali PR-1

Hunasa maombi yenye picha yanayoelekezwa kwa **miundo isiyo na uwezo wa maono** na ama
huelekeza upya ombi zima kwa muundo wenye uwezo wa maono au hubadilisha sehemu za picha
kwa maelezo ya maandishi yanayotolewa na muundo wa maono unaoweza kusanidiwa kabla ya
mwito wa mfumo wa juu. Hii huwezesha watoa huduma wa maandishi pekee kushughulikia
mizigo yenye modali nyingi kwa uwazi.

Mtiririko:

1. Ruka ikiwa muundo lengwa tayari una uwezo wa maono (isipokuwa ikiwa upo katika
   orodha ya kulazimisha daraja `isVisionBridgeForcedModel`).
2. Toa sehemu za picha kupitia `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), ambayo hukabidhi kazi kwa **kitambuzi kilichounganishwa
   cha midia** `detectMediaParts()` katika `open-sse/utils/mediaParts.ts` — chanzo
   kimoja cha ukweli kinachoshirikiwa na kichujio cha uoanifu wa combo.
   Utoaji unaruhusiwa tu kwa sehemu za kiwango cha juu zenye miundo ambayo
   `replaceImageParts` inaweza kuingiza tena (mkataba wa toa↔badilisha): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, na Responses API `input_image`. Matokeo yaliyopachikwa ndani
   na miundo ya viashiria pekee ni nyenzo za kichujio cha combo na kamwe hazitolewi.
   Ruka ikiwa hakuna iliyopatikana.
3. Amua usanidi wa wakati wa utekelezaji kupitia `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): vitufe vipya vya mipangilio ya
   `modalityBridge*` vina kipaumbele; vitufe vya zamani vya `visionBridge*` vinaendelea
   kutumika kama **mbadala wa mzunguko mmoja** (kipindi cha kurudisha nyuma). Ruka kabla
   ya kupitia midia yoyote wakati daraja limezimwa.
4. Kiteuzi cha modi (`modalityBridgeVisionMode`, angalia jedwali hapa chini) huamua
   kati ya kuelekeza upya na kuelezea. Uelekezaji upya hurejesha `modifiedPayload`
   huku `model` pekee ikiwa imebadilishwa, pamoja na meta
   `{ rerouted, fromModel, toModel, imagesKept }`.
5. Njia ya kuelezea: punguza picha hadi `maxImages`, unda kidokezo kinachozingatia
   jukumu, kagua akiba ya maelezo, ita muundo wa maono **kwa sambamba**
   (`Promise.allSettled`), na uingize sehemu za maandishi
   `[Image N]: <description>` mahali pake. Uelezaji ulioshindwa hutoa `null` na sehemu
   asili ya picha **inahifadhiwa** (#4012) — isipokuwa kwenye njia ya maelezo ya combo
   wakati maelezo yote yalishindwa, ambapo mfumo wa juu uliothibitishwa kuwa hauna
   uwezo wa maono hupokea kibadala
   `(unavailable — no vision-capable provider connected)` badala yake (#8430).
6. Rejesha `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Kiteuzi cha modi (`modalityBridgeVisionMode`)

| Modi       | Chaguomsingi | Tabia                                                                                                                                                                                                                                                                                                                |
| ---------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔            | Mbinu ya zamani ya kubashiri, haijabadilishwa (#6640/#7204): miundo isiyo ya combo/`auto/` huelekezwa upya kwa muundo bora zaidi wa maono isipokuwa muundo asili tayari una vitambulisho vinavyoweza kutumika (kisha huelezea); malengo ya combo daima huelezea.                                                     |
| `describe` |              | Elezea kila wakati — kizuizi cha uelekezaji upya hurukwa kabisa; muundo uliochaguliwa na mtumiaji daima hujibu.                                                                                                                                                                                                      |
| `reroute`  |              | Lazimisha uelekezaji upya: kinga ya kuhifadhi muundo wenye vitambulisho hupitwa. Kinga ya vitambulisho vya **lengo** la uelekezaji upya bado hutumika — wakati hakuna lengo la maono linaloweza kutumika, ombi huendelea kwenye uelezaji ili picha ghafi zisiwahi kufikia mfumo wa nyuma wa maandishi pekee (#8430). |

Modi zilizolazimishwa hukatiza mchakato **kabla** ya mbinu ya kiotomatiki ya kubashiri
kutekelezwa; tabia ya `auto` inafanana baiti kwa baiti na kizuizi cha kabla ya PR-1.

#### Upeo wa ufunguo wa API (`visionBridgeKeyScope.ts`)

Wakati ufunguo wa API wa mpigaji unapoweka vikwazo kwa `allowedConnections`, makundi ya
kiasi (`allowedQuotas`) au miundo (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), daraja huchagua tu miundo
ya kuelekeza upya na kuelezea ambayo ufunguo unaruhusiwa kutumia, kwenye miunganisho
ambayo ufunguo unaruhusiwa kutumia. Kisha mwito wa kuelezea daima hupitia mzunguko wa
kujirejelea wa OmniRoute ukiwa na kichwa cha `x-omniroute-self-loop-key-id`, ili ombi
la gumzo linalopokea litekeleze tena sera ya muunganisho na muundo ya ufunguo huo.
`enforceApiKeyPolicy()` huheshimu kichwa hicho tu pamoja na kibeba cha mzunguko wa
kujirejelea, kwa hivyo kinaweza tu kupunguza ufikiaji, na kitambulisho ambacho
hakipatikani hukataliwa.

Ikiwa hakuna muundo wa maono unaoruhusiwa kwa ufunguo huo, njia ya kuelezea hujiondoa
na ombi hupita bila kubadilishwa, sawa na tabia ya kuruhusu ombi liendelee wakati wa
hitilafu ya kizuizi kilichozimwa (meta
`{ skipped: true, reason: "no_permitted_vision_model" }`).
Maombi yasiyo na ufunguo, na funguo zisizo na vikwazo hivi, hutenda sawasawa kabisa na
hapo awali.

#### Kidokezo cha kuelezea kinachozingatia jukumu (`modalityBridgeVisionTaskAware`)

Chaguomsingi ni **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) huambatisha
maandishi ya **ujumbe wa mwisho wa mtumiaji** (yaliyokatwa hadi vibambo 500) kwenye kidokezo
cha msingi cha maelezo, ili kuelekeza maelezo kwenye kile ambacho mtumiaji aliuliza hasa
(muundo wa codex-vision-proxy), na kuiomba modeli ya kuona inukuu maandishi yanayoonekana.
Wakati alama hiyo imezimwa — au hakuna maandishi ya mtumiaji — kidokezo cha msingi hutumiwa
bila kubadilishwa.

Ombi la self-loop ya maelezo linalooana na OpenAI (`callVisionModelSingle()`
katika `visionBridgeHelpers.ts`) huomba `image_url.detail: "high"` kila wakati —
bila masharti, kwa kila kipigaji/mtoa huduma, na bila kutegemea ishara yoyote ya mteja.
Sampuli zenye kiwango cha chini cha maelezo hupunguza usahihi wa OCR kwa jukumu hili hasa
la kunukuu maandishi ambalo kidokezo hiki huomba, kwa hiyo mwito wenyewe wa maelezo huomba
kiwango cha juu cha maelezo kila wakati, bila kujali kiwango cha maelezo ambacho ombi asili
lililoingia lilitumia. Hili huathiri tu mwili wa ombi la ndani la maelezo; halibadilishi jinsi
OmniRoute inavyosambaza `image_url.detail` ya mpigaji kwenye ombi kuu —
chaguomsingi hilo hutumika kando, na kwa viteja vya OpenCode vilivyotambuliwa pekee, katika
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Tawi la umbizo la waya
la Anthropic la self-loop ya maelezo halina uga wa `detail` na haliathiriwi na chaguomsingi
lolote kati ya hayo.

#### Kikomo cha matokeo ya maelezo (`modalityBridgeVisionMaxChars`)

| Ufunguo                        | Chaguomsingi | Masafa           |
| ------------------------------ | ------------ | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`          | `0` au 100–50000 |

`0` (chaguomsingi) humaanisha **hakuna kikomo** — maelezo yanayorejeshwa na
`callVisionModel()` hupitishwa bila kubadilishwa, hivyo kuhifadhi tabia iliyopo.
Thamani yoyote katika masafa ya 100–50000 hukata maelezo na kuongeza kiambishi
`…` kabla hayajaingizwa tena kama `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` katika `src/lib/guardrails/visionBridge.ts`).
Ongeza thamani hii kwa majukumu mazito ya OCR yenye maelezo mengi ambapo modeli ya
hatua inayofuata inahitaji nukuu kamili; ipunguze ili kudhibiti matumizi ya tokeni
kwa modeli za kuona zinazotoa maelezo mengi. Uga wa dashibodi upo kwenye paneli ya
Advanced ya kichupo cha Vision
(`modality-bridge-max-chars` katika `ModalityBridgeVisionTab.tsx`) na huongeza
thamani yoyote kati ya 1 na 99 hadi kiwango cha chini cha 100, huku ukiacha `0`
iliyowekwa wazi bila kuguswa — `0` yenyewe ni thamani halali ya Zod
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), si tu
chaguomsingi la "haijawekwa".

#### Akiba ya maelezo (`modalityBridge/bridgeCache.ts`)

Akiba ya ndani ya kumbukumbu ya LRU + TTL kwa matokeo ya maelezo, inayoshirikiwa
katika mchakato mzima. Ufunguo = `sha256(imageRef + composedPrompt + configuredBridgeModel)`
ukiwa na uundaji wa fremu wenye kiambishi cha urefu (hakuna migongano ya mipaka ya uga).
Kipengele cha modeli ni modeli ya daraja **iliyosanidiwa**, si modeli iliyojibu
kihalisi — `callVisionModel` inaweza kutumia modeli mbadala ndani kwa ndani, na kuweka
ufunguo kwa kila jaribio kungegawanya akiba. Maelezo yaliyoshindwa kamwe hayahifadhiwi
kwenye akiba. Mipangilio:

| Ufunguo                         | Chaguomsingi | Masafa  |
| ------------------------------- | ------------ | ------- |
| `modalityBridgeCacheEnabled`    | `true`       | —       |
| `modalityBridgeCacheTtlMinutes` | `60`         | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`        | 10–5000 |

#### Urekebishaji wa picha za mbali (self-loop ya maelezo/upakuaji wa base64)

Daraja linapopakua picha ya **mbali** lenyewe — mwito binafsi wa maelezo wa Anthropic
na ugeuzaji wa base64 wa umbizo la waya la claude
(`ensureBase64ImagesForClaudeWire`), zote kupitia
`fetchRemoteImageAsDataUri()` katika `visionBridgeHelpers.ts` — URI ya data inayotokana
hupitishwa kwenye `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) kabla ya kupachikwa katika ombi la modeli ya kuona.
Picha kubwa kupita kiasi hupunguzwa hadi **2048px kwenye ukingo mrefu** (ikiambatana
na kikomo cha kubadilisha ukubwa ambacho OpenAI/Anthropic tayari hutumia upande wa seva),
jambo linalopunguza baiti/muda wa kusubiri wa upakiaji bila kubadilisha kile ambacho modeli
ya kuona huona. Kubadilisha ukubwa hutumia `sharp`, inayopakiwa kupitia dynamic import:
kwenye jukwaa ambalo faili yake asilia ya binary inashindwa kupakiwa,
`normalizeDataUri()` **kamwe haitupi hitilafu** — hurudi kwenye upitishaji wa baiti
asili bila mabadiliko, ili njia ya maelezo/ugeuzaji wa base64 iendelee kufanya kazi
daima. Baiti ambazo si za picha (upakuaji ambao haukurudisha picha inayoweza kusimbuliwa)
pia hupitishwa bila kuguswa. Urekebishaji huu unatumika tu kwa picha ambazo daraja
hupakua kwa ajili ya mwito wake binafsi — kamwe hautumiki kwa payload ghafi ya mpigaji
inayopitishwa moja kwa moja, kwa kuzingatia kanuni ya mabadiliko ya hiari pekee
(Hard Rule #20).

#### Schema ya mipangilio + uhamishaji

Funguo mpya za `modalityBridge*` huthibitishwa na Zod katika `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, utatu wa `modalityBridgeCache*`, na kundi la
`modalityBridgeAudio*` linalotumiwa na Audio Bridge. Uhamishaji
`141_modality_bridge_settings.sql` hunakili thamani za zamani zilizopo za
`visionBridge*` kwenda kwenye funguo mpya zinazolingana (unaweza kutekelezwa mara nyingi
bila kubadilisha matokeo, na kamwe haubatilishi thamani ya `modalityBridge*` iliyowekwa
na mwendeshaji); funguo za zamani huendelea kukubaliwa kama chaguo mbadala la usomaji
kwa mzunguko mmoja wa toleo.

#### Kijajuu cha uwazi + takwimu

Majibu yaliyobadilishwa kupitia maelezo hubeba
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(kinachoundwa na `buildModalityBridgeHeader()` katika `modalityBridge/bridgeStats.ts`,
na kuwekwa na `withModalityBridgeHeader()` katika `src/sse/handlers/chatHelpers.ts`).
Maombi yaliyoelekezwa upya **hayapati** kijajuu — payload haikuguswa na ubadilishaji
wa modeli tayari unaonekana katika uga wa `model` wa mwili wa jibu.

`GET /api/modality-bridge/stats` (uthibitishaji wa usimamizi, daraja sawa na
`GET /api/settings`) hurejesha vihesabu vya ndani ya kumbukumbu kwa kila modaliti
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` kwa `vision`, `audio`, na
`video`. `averageLatencyMs` hutumia `latencySamples`, si majaribio yote, kama
kigawanyo chake; operesheni isiyo na kipimo cha muda haitengenezi sampuli bandia
ya milisekunde sifuri. `bridged` hubaki kuwa jina mbadala linalooana na matoleo
ya awali kwa ubadilishaji uliofanikiwa; majaribio yaliyoshindwa hayaiongezi.
Vihesabu huwekwa upya mchakato unapoanzishwa upya kwa makusudi
(telemetria, si uhasibu).

#### Usanidi wa dashibodi

Ukurasa maalum wa dashibodi ni
`/dashboard/settings/modality-bridge`. Vichupo vyake vya `Vision`, `Audio`,
na `Video` vinavyoweza kufikiwa kupitia URL huhifadhi vigezo vya hoja huku
vikibadilisha thamani ya `tab`.
Kichupo cha Vision huonyesha uwezeshaji, modi, uteuzi wa modeli (ikiwemo chaguo-msingi
la kiotomatiki), uundaji wa maelekezo unaozingatia jukumu, vikomo vya kina vya
muda wa kusubiri/picha/urefu wa maelezo/kache, vihesabu vya wakati wa utekelezaji,
na ombi la sampuli lenye ulinzi. Kichupo cha Audio pia kinafanya kazi: huonyesha
uwezeshaji, kiteua modeli cha STT pekee chenye Auto, vikomo vya muda wa kusubiri/urefu
wa juu zaidi wa klipu, vihesabu vya sauti, na jaribio la sampuli la `input_audio`.
Kichupo cha Video kinafanya kazi: huripoti hali ya wakati wa utekelezaji ya
FFmpeg/ffprobe — mojawapo ya hali nne bayana za UI (`unknown` wakati uchunguzi
unaendelea au haukuweza kukamilika, `restricted` kwenye seva pangishi ya dashibodi
isiyo ya loopback ambapo uchunguzi unarukwa upande wa mteja, `unavailable` baada
ya kuchunguzwa na kuthibitishwa kuwa haipo, au `available` pamoja na matoleo ya
FFmpeg/ffprobe) — huhifadhi vikomo vya uwezeshaji/modeli/fremu/video/muda wa
kusubiri, huchuja kiteua modeli ili kuonyesha modeli zenye uwezo wa kuona,
na huonyesha vihesabu vya video.

Kadi ya zamani ya Vision Bridge chini ya mipangilio ya AI ni kiungo cha uoanifu
kwenda kwenye ukurasa mpya; haimiliki tena nakala ya pili ya fomu. Media Providers
pia huunganisha mtiririko wa kazi wa Image-to-Text na Speech-to-Text na vichupo
vinavyolingana vya Modality Bridge bila kuondoa mazingira yaliyopo ya majaribio
ya Speech-to-Text.

**Upitaji wa udhibiti wa kuingiza kwa mzunguko binafsi:** simu ya kuelezea
inapoelekezwa kupitia `/v1` self-loop ya OmniRoute yenyewe (modeli ya mtoa huduma
isiyo ya kawaida), ombi dogo hutuma
`x-omniroute-admission-bypass: internal` na huthibitishwa kwa kitambulisho
kilichotatuliwa cha self-loop — sentinel ya ndani `sk_omniroute` katika modi ya
ndani, au ufunguo wa mazingira wa `OMNIROUTE_API_KEY` / `ROUTER_API_KEY`
uliosanidiwa na mwendeshaji (#1350), ili uwekaji wa
`REQUIRE_API_KEY=true` bado uweze kutekeleza simu ya kuelezea. Upitaji huo
hukubaliwa tu kwa vitambulisho hivyo mahususi, hivyo wateja wa nje hawawezi
kutumia kichwa hicho kuruka udhibiti wa kuingiza.

Chaguo-msingi za zamani zipo katika `src/shared/constants/visionBridgeDefaults.ts`;
chaguo-msingi mpya za modi/uzingatiaji wa jukumu/kache na kitatuzi cha mipangilio
vipo katika `src/shared/constants/modalityBridgeDefaults.ts`. Ulinzi huo huonyesha
chaguo la kijenzi la `deps` ili majaribio yaweze kuingiza utekelezaji bandia wa
`getSettings` na `callVisionModel`.

### Daraja la Sauti (`audioBridge.ts`) — Modality Bridge PR-3

Hunasa maombi ya gumzo yenye sauti kabla hayajafikia lengwa ambalo halijulikani
kukubali ingizo la sauti. Kamwe halibadilishi njia ya ombi la gumzo: sehemu za
sauti hunukuliwa kupitia endpoint iliyopo ya multipart inayooana na OpenAI, na
modeli ya gumzo iliyochaguliwa huendelea kwa kutumia nakala za maandishi.

Mtiririko:

1. Tatua `supportsAudio` kupitia `getResolvedModelCapabilities()`. Metadata
   bayana ya sajili ya mtoa huduma hutangulia, kisha metadata tuli ya modeli,
   halafu `modalities_input` iliyosawazishwa. Orodha ya ingizo iliyotangazwa
   isiyo na `audio` ni `false`; kutokuwepo kwa ushahidi wa uwezo hubaki `null`.
   `false` na `null` zote huamilisha daraja la tahadhari, huku `true` ikilipita.
2. Tatua mipangilio ya `modalityBridgeAudio*` na utoe sehemu za sauti za kiwango
   cha juu zinazoweza kuunganishwa kutoka kila ujumbe kupitia kitambuzi cha pamoja
   cha `detectMediaParts()`. Miundo ya waya inayotumika ni `input_audio` ya OpenAI,
   `audio_url`, na `source.media_type: "audio/*"`. Sauti iliyowekwa ndani
   hutambuliwa kwa ajili ya uelekezaji lakini haiondolewi na njia ya kuunganisha.
   Kazi inawekewa kikomo na `modalityBridgeAudioMaxClips`; sehemu zinazofuata
   huachwa bila kubadilishwa.
3. Heshimu `provider/model` iliyosanidiwa, au uruhusu `selectAudioBridgeModel()`
   ipitie `AUDIO_TRANSCRIPTION_PROVIDERS` kwa mpangilio thabiti wa katalogi na
   ichague modeli ya kwanza yenye kitambulisho kinachoweza kutumika cha mtoa
   huduma aliye hai.
4. `callAudioTranscription()` hubadilisha sauti ya base64/data-URI kuwa `file`
   ya multipart, au hupakua `audio_url` ya mbali kupitia ulinzi wa data inayotoka
   wa umma pekee wenye ubanaji wa DNS na kikomo cha 25 MB. Kisha hutuma faili
   kwa POST pamoja na modeli iliyochaguliwa kwenda kwenye self-loop ya ndani ya
   `/v1/audio/transcriptions`, ikithibitishwa kwa `resolveSelfLoopBearer()`.
   Njia iliyopo ya unukuzi hufanya utafutaji wa kawaida wa kitambulisho,
   ushughulikiaji wa muda wa kusubiri/kikomo cha kasi, na usambazaji kwa mtoa
   huduma.
5. Simu zilizofanikiwa hubadilisha sehemu zake kuwa `[Audio N]: <transcript>`.
   Simu hutekelezwa kwa `Promise.allSettled`: hitilafu ya simu moja huhifadhi
   sehemu hiyo asili ya sauti (mkataba wa #4012). Ikiwa kila simu itashindwa na
   lengwa limethibitishwa kuwa `supportsAudio === false`, sehemu hizo huwa
   `[Audio N]: (unavailable — no STT provider connected)` (mkataba wa #8430).
   Kwa lengwa lisilojulikana (`null`), matokeo ambayo yote yameshindwa hubaki
   bila kubadilishwa. Lengwa lililothibitishwa kuwa la maandishi pekee lisilo na
   kitambulisho cha STT kinachoweza kutumika hupokea kishika nafasi hicho hicho
   bayana bila kutuma simu ya mtandao.

Nakala zilizofanikiwa hutumia kache ya LRU/TTL ya Modality Bridge inayotumika
katika mchakato mzima. Ufunguo huunganisha rejeleo la sauti, lebo thabiti ya
operesheni ya `audio-transcription`, na modeli ya STT iliyochaguliwa; hitilafu
kamwe hazihifadhiwi kwenye kache. Majaribio ya sauti husasisha vihesabu vya
pamoja vya `bridged`, `cacheHits`, `failures`, na `lastUsedAt`.
Majibu yaliyobadilishwa hubeba
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; maombi
yasiyobadilishwa hayapokei sehemu ya Audio Bridge.

Mipangilio ya wakati wa utekelezaji imehifadhiwa kwenye DB na kuthibitishwa kwa
Zod:

| Ufunguo                       | Chaguomsingi | Masafa                            |
| ----------------------------- | ------------ | --------------------------------- |
| `modalityBridgeAudioEnabled`  | `true`       | —                                 |
| `modalityBridgeAudioModel`    | `""`         | Otomatiki au kitambulisho cha STT |
| `modalityBridgeAudioTimeout`  | `60000`      | 1000–300000                       |
| `modalityBridgeAudioMaxClips` | `3`          | 1–10                              |

Akiba ya pamoja bado inadhibitiwa na `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, na `modalityBridgeCacheMaxEntries`.

### Daraja la Video (`videoBridge.ts`, `videoBridgePipeline.ts`)

Huingilia sehemu za video za kiwango cha juu katika `messages` za Chat Completions na
`input` ya Responses API kabla ya kuita lengo lisilo na uwezo unaojulikana wa asili wa
video. Miundo inayotumika ni `input_video`, `video_url`, `video_source`, URL za HTTPS,
na URI za data za `data:video/*;base64,...`. Majina ya faili yaliyoandikwa kama
maandishi ya kawaida hayachukuliwi kuwa video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) inasimamia upitiaji wa ombi,
ukaguzi wa uwezo/sera, ujumlishaji wa kila ombi, na mzigo wa data wa jibu.
Kazi ya kila video — upatikanaji, akiba ya matokeo yote, ufafanuzi wa mfuatano
wa fremu (ambao huunganisha nakala yoyote ya sauti iliyotangazwa na mwitaji),
na vipimo/ughairishaji/usafishaji wa kila jaribio — imefichwa nyuma ya
`processVideoPart` katika `videoBridgePipeline.ts`, ambayo huitwa mara moja kwa
kila sehemu ya video ndani ya kitanzi cha `preCall`. Moduli hiyo pia hufafanua
mipaka dhahiri ya violesura `VideoMediaBrokerPort` (kupata baiti na kutoa fremu
zilizochaguliwa), `VideoAudioTranscriptionPort` (kuunganisha nakala ya sauti
iliyotangazwa na mwitaji na maelezo mafupi ya fremu zilizochaguliwa), na
`VideoDrilldownPort` (mpaka wa uhifadhi wa uchunguzi wa kina wa fremu; bado
haujaunganishwa kwenye `processVideoPart` — ni njia tofauti pekee ya
`/api/modality-bridge/video/drilldown` inayoandika maingizo ya uchunguzi wa kina
kwa sasa).

Njia ya ombi ya umma ya `/v1` haiingizi wala kuanzisha mchakato mdogo kamwe.
Video za mbali hupakuliwa chini ya kikomo cha MiB 50; video za base64 zilizopachikwa
zina kikomo cha tahadhari cha MiB 36 baada ya kusimbuliwa kwa kila video ili bahasha
ya modeli/ujumbe/uundaji wa fremu ibaki ndani ya kikomo cha ukubwa wa ombi la JSON
la umma cha MiB 50. Urefu wa data iliyopachikwa na makadirio ya ukubwa baada ya
usimbuaji hukaguliwa kabla ya kutenga kumbukumbu. HTTPS inahitajika kwenye URL ya
awali ya mbali na kila uelekezaji upya, kwa kutumia ulinzi uliopo wa miunganisho ya
nje ya umma pekee pamoja na ubandikaji wa DNS. Kisha baiti huvuka mpaka halisi wa
dalali wa ndani wa `POST /api/modality-bridge/video/extract`. Njia hiyo ni
`LOCAL_ONLY` na `SPAWN_CAPABLE`, inakubali tu ombi lililothibitishwa kwa kila
mchakato kupitia loopback inayoaminika, na haikubali kamwe URL, njia ya mfumo wa
faili, faili tekelezi, au orodha ya hoja. Msururu wa kikomo cha ukubwa wa mwili wa API
na kisomaji cha mwili kinachoendelea cha kishughulikiaji hutekeleza kwa kujitegemea
kikomo cha ingizo la dalali cha MiB 50. Foleni yake yenye mipaka huendesha uchimbaji
mmoja kwa wakati mmoja, inaruhusu kazi nne zinazosubiri, na inaweka kikomo cha ingizo
linalosubiri kuwa MiB 100.

Ndani ya dalali, `ffprobe` husoma faili ya ndani ya faragha; orodha isiyobadilika
ya miundo inayoruhusiwa haijumuishi miundo ya orodha za kucheza na manifesti.
Kwa kontena zinazoruhusiwa za familia ya MOV, marejeleo ya nje ya data ya MOV
hubaki yamezimwa kwa chaguomsingi, na amri isiyobadilika haiyawezeshi. `ffprobe`
na `ffmpeg` zote hutumia orodha ya itifaki zinazoruhusiwa ya `file` pekee, uzi
mmoja, safu zisizobadilika za hoja, bila shell, na faili tekelezi zinazotafutwa
kutoka `PATH`. Mitiririko ya picha za jalada zilizoambatishwa si wagombea
wanaoweza kuchezwa. Mitiririko yote inayoweza kuchezwa lazima itimize vikomo,
na mtiririko chaguomsingi uliobainishwa hupendelewa kabla ya kutumia chaguo
mbadala thabiti lenye faharasa ya chini zaidi. Video zina kikomo cha sekunde
600, pikseli 8,192 kwa kila kipimo, na pikseli chanzo 33,554,432. FFmpeg huchukua
sampuli za fremu 1–16 za JPEG katika sehemu za katikati, hupunguza ukingo mrefu
hadi usiozidi pikseli 1,024 bila kuongeza ukubwa wa ingizo dogo, na haipokei URL
kamwe. Uchukuaji wa sampuli ni `uniform` kwa chaguomsingi. Sera ya hiari ya
`scene_aware` na sera ya majaribio ya `segment_aware` hufanya upitishaji mmoja wa
ziada usiobadilika wa FFmpeg kwenye mtiririko wa ndani ambao tayari umethibitishwa,
huchagua mihuri ya muda ya matukio ya `showinfo` yenye mipaka, na hurudi kwa njia
thabiti kwenye sehemu zilezile za katikati za `uniform` iwapo kigunduzi kitashindwa,
muda utaisha, towe litakuwa na muundo mbovu, au seti ya wagombea itakuwa tupu. Hali
inayozingatia sehemu hugawa sampuli za sehemu za katikati sawia na vipindi vya
matukio vilivyothibitishwa; ushahidi wa hali inayozingatia sehemu na tabia ya
kurudi kwenye chaguo mbadala zimefafanuliwa hapa chini. Kikomo cha lazima cha
fremu 16 hutumika baada ya uteuzi katika kila sera. Ombi linalozingatia matukio
linapokuwa na bajeti ya fremu moja pekee, hutumia sehemu ya katikati ya `uniform`
ya video nzima inayotumika au dirisha la kulenga na kuripoti
`policyEffective: uniform`: fremu moja ya tukio iliyochaguliwa haiwezi kuhifadhi
miisho yote miwili ya muda. Mwaitaji anaweza kutoa kwa hiari dirisha lenye kikomo
la kulenga (`start`/`end` kwa sekunde); mipaka hubanwa kulingana na muda wa midia,
madirisha yaliyogeuzwa au yasiyo na thamani kikomo hukataliwa, na sera zote za
uchukuaji wa sampuli hutekelezwa ndani ya kipindi kilichorekebishwa pekee. Dirisha
linalopatikana hujumuishwa katika metadata ya uchukuaji wa sampuli na katika
kiambishi awali cha maelezo kisichoaminika ili modeli zinazofuata ziweze
kutofautisha dondoo iliyolengwa na rekodi kamili ya muda.

Umakini wa kisemantiki wa maelezo mafupi ni mpangilio tofauti na wa wazi. Hali
chaguomsingi ya uchanganuzi ya `full` huhifadhi kidokezo kilichopo cha fremu na
haitumi kamwe maandishi ya ombi kwa modeli ya maelezo mafupi. Katika hali ya
`focused`, daraja husoma tu `text`/`input_text` ya hivi karibuni isiyo tupu
iliyoandikwa na mtumiaji kutoka kwenye kontena lilelile la Chat au Responses,
huirekebisha kuwa NFC, hukusanya herufi dhibiti na nafasi tupu, na kuiwekea kikomo
cha alama 500 za msimbo wa Unicode. Matokeo tupu hurudi kwenye kidokezo halisi cha
`full`. Kidokezo kinachoweza kutumika huandaliwa kama JSON katika kizuizi maalum
cha muktadha wa mtumiaji kisichoaminika na kinaweza tu kutanguliza maelezo
yanayoonekana; hakiwezi kubatilisha onyo tofauti dhidi ya kufuata maagizo
yanayoonekana au kusikika katika midia. Umakini wa maandishi haukisi `start`/`end`
wala kubadilisha kichukua sampuli cha muda.

#### Ushahidi wa kimuundo wa sehemu wa FU-07

`segment_aware` hutumia pitio moja lenye mipaka la uchanganuzi wa awali kwenye
mtiririko wa video wa ndani ambao tayari umethibitishwa. Mlolongo usiobadilika wa vichujio kwanza hupunguza ukubwa hadi upana wa pikseli 320 kwa kiwango cha juu,
hugundua mabadiliko ya mandhari na vipindi vilivyoganda, kisha huchukua sampuli ya fremu 1 kwa
sekunde ili kupima ukungu, luma wastani, na taarifa za anga/muda. Pitio hili
limewekewa kikomo cha sampuli 600 za kimuundo, nyuzi moja ya FFmpeg/kichujio, orodha zilezile za
itifaki ya `file` pekee na kontena zinazoruhusiwa, kikomo cha pato la mchakato cha MiB 1,
na muda usiozidi sekunde 30 ndani ya ughairishaji/muda wa mwisho wa pamoja wa broker. Kamwe
halikubali amri, kichujio, njia, au URL kutoka kwenye ombi.

Thamani za kimuundo ni ushahidi wa sampuli unaoweza kurudiwa kwa matokeo yale yale, si uelewa wa kisemantiki wa video.
Hazitambui mada, vitendo, manukuu, usemi, au nia ya mtumiaji.
Mipaka ya mandhari na kuganda huunda sehemu; kiwango cha kuganda, ukungu,
mwangaza, maelezo ya anga, na mabadiliko ya muda huathiri tu jinsi bajeti iliyopo ya
fremu 1–16 inavyogawiwa. Sehemu iliyoganda kikamilifu huwekewa kikomo cha fremu moja,
huku sehemu zisizoganda zikishindania bajeti iliyobaki. Idadi ya mipaka
inapozidi idadi ya fremu, usambazaji sawia kwenye mstari wa muda hudumishwa ili mikato ya haraka ya mwanzo
isiweze kuficha sehemu ndefu ya mwisho. Mipaka ya mandhari iliyo ndani ya azimio la uchanganuzi la sekunde 1
kutoka kwenye mpaka wa kuganda huunganishwa.

Vichujio vinavyokosekana, ushahidi wenye muundo mbaya/mtupu, hitilafu ya kigunduzi, au kuisha kwa muda wa
uchanganuzi wa awali wenye mipaka hurudi bila kuzuia kwenye sera halisi ya nukta za katikati zilizosambazwa sawia. Ughairishaji wa mpigaji
au muda wa mwisho wa broker haurudi bila kuzuia: husitisha mchakato mdogo unaoendelea,
huzuia uchimbaji wa fremu baadaye, na mti binafsi wa muda
huondolewa katika `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` huzalisha sampuli halisi za FFmpeg zinazoweza kurudiwa kwa matokeo yale yale
kwa ajili ya kupima upunguzaji wa miito ya manukuu baada ya kuondoa nakala, ugawaji wa bajeti kwa mwendo mwingi,
ushahidi wa ukungu/mwangaza/SI-TI, mikato ya haraka yenye sehemu ndefu ya mwisho, na
matokeo chanya ya uongo ya kufifia taratibu. Hurekodi muda halisi wa uchanganuzi wa awali na, pale ambapo `/usr/bin/time`
inapatikana, CPU ya mchakato-toto na kiwango cha juu cha RSS. Ukaguzi wake wa ubora ni vipimo rejea vya kimuundo
pekee. Ubora wa modeli halisi ya manukuu unasalia `HOLD` kwa sababu zana hii haina
endpoint iliyoidhinishwa au mwamuzi aliyefungiwa. Uokoaji wa gharama pia unasalia `HOLD`
isipokuwa `--caption-cost-per-call-usd` itoe makadirio dhahiri chanya ya gharama kwa kila mwito;
skripti haitungi kamwe mojawapo ya matokeo hayo.

Kila fremu imewekewa kikomo cha MiB 4, fremu zote ghafi kwa pamoja MiB 23, na
jibu la broker lililoserialishwa MiB 32. Saraka binafsi ya muda huondolewa
katika `finally`. OmniRoute haiji na FFmpeg na haikubali njia maalum ya
programu inayotekelezwa. Kabla ya kutengeneza manukuu, daraja hutekeleza pitio la tahadhari la
kuondoa nakala za kuona: kila JPEG hupunguzwa hadi bafa ya kijivu ya 16×16 na
hulinganishwa tu na fremu ya mwisho iliyohifadhiwa. Kwa bajeti ya manukuu iliyoombwa
ya zaidi ya fremu moja, uchimbaji hutoa
mkusanyiko wenye mipaka wa wagombea wa hadi mara mbili ya bajeti hiyo na kamwe usiozidi fremu 16.
Kikomo kilichoombwa hutumika tu baada ya kuondoa nakala, huku wagombea wa kwanza na wa mwisho
waliochaguliwa wakihifadhiwa wakati wa upunguzaji wa mwisho ikiwa bajeti ni angalau
mbili. Sera yenye toleo
`grayscale-16x16-mean-cells-v2` hutumia thamani kubwa zaidi kati ya tofauti ya wastani wa luma na
uwiano wa seli za kijipicha ambazo tofauti yake iliyosawazishwa ni angalau 0.05.
Kizingiti cha nakala ni thamani isiyobadilika 0.04, iliyochaguliwa kwa ajili ya utabirikaji badala ya
kuwekwa wazi kama mpangilio wa wakati wa utekelezaji. Ishara hii ya pili ya
utofautishaji wa juu huhifadhi mwendo mdogo na mabadiliko ya maandishi yanayoonekana ambayo
ulinganishaji wa wastani pekee unaweza kuficha. Hitilafu za kilinganishi au kisimbuaji huruhusu kuendelea na huhifadhi
ufikiaji. Metadata ya pato hutenganisha wagombea waliochimbwa, fremu zilizotumika kwa mafanikio,
na nakala za kuona zilizoondolewa.

Sehemu ya video iliyowekwa alama wazi inaweza kuomba jedwali la picha lenye mihuri ya muda. Daraja
huunda gridi ya JPEG yenye safu wima zisizozidi 4 na fremu zisizozidi 16. Kila seli ya pikseli 512 huweka
muhuri wa muda wa chanzo chake kwenye ukanda wa chini wenye utofautishaji wa juu, huku mihuri hiyohiyo ya muda
ikibaki katika metadata ya maandishi kwa ajili ya uhusishaji na ukaguzi wa baadaye. JPEG kamili
hubaki na kikomo cha MiB 32. Ikiwa `sharp` haiwezi kusimbua au kutunga gridi, daraja
hurudi kwenye fremu mahususi za JPEG; ughairishaji wa mteja bado husambazwa
kupitia operesheni ya jedwali.

Ushahidi wa kupandishwa hadhi umetenganishwa kimakusudi na jaribio dogo sanisi la utendaji wa utungaji.
`scripts/perf/video-bridge-contact-sheet-eval.ts` hufafanua
zana ya A/B yenye toleo la schema kwa modeli halisi za kuona zinazooana na OpenAI. Hupima
tokeni zilizoripotiwa na mtoa huduma, ucheleweshaji halisi kutoka mwanzo hadi mwisho (ikiwemo utungaji wa jedwali),
idadi ya miito ya modeli, na uhifadhi wa taarifa uliobainishwa na manifesti. Majibu ghafi ya modeli hayaandikwi
kwenye ripoti; ni digest za SHA-256 na vitambulisho vya taarifa vilivyolingana pekee vinavyohifadhiwa.
Zana haitumii mtandao wala kufanya mwito wa modeli unaolipiwa isipokuwa `--execute-real` ipitishwe na
`--model`, `OMNIROUTE_BASE_URL`, na `OMNIROUTE_API_KEY` zimesanidiwa. Bila
utekelezaji huo halisi ulioidhinishwa wazi, uamuzi wake unaosomeka na mashine hubaki `HOLD`; vipimo sanisi
vya mzigo/idadi ya miito pekee si ushahidi wa kupandishwa hadhi.

Wapigaji wanaweza kuambatisha safu hiari ya `transcript.cues` kwenye sehemu ya video
inayotumika ikiwa tayari wana maandishi yaliyopangiliwa kwa muda. Kila kidokezo lazima kiwe na `text`, kipindi
chenye ukomo cha `start`/`end` ndani ya muda uliokaguliwa, na `source` iliyo kwenye orodha inayoruhusiwa
(`client`, `embedded`, au `audio-bridge`); `confidence` huwa `1` kwa chaguo-msingi
na lazima ibaki kati ya `0` na `1`. Vidokezo vinavyofanana kabisa huunganishwa.
OmniRoute haianzishi kamwe unukuzi kutoka kwenye metadata hii: vidokezo vilivyothibitishwa
hunakiliwa kwenye matokeo yaliyoelezwa pamoja na chanzo, kiwango cha uhakika, na kipindi, na
huonyeshwa kama uchunguzi usioaminika pamoja na manukuu ya fremu. Maandishi batili,
yaliyo nje ya masafa, au yasiyo na asili inayoweza kuthibitishwa hukataliwa badala ya kuchanganywa kwenye
mtiririko wa manukuu. Njia zote mbili za nakala katika mwili wa ombi husawazisha asili iliyotolewa
kuwa `client`, ikiwemo lebo zinazodaiwa binafsi za `embedded` au `audio-bridge`.
Adapta inayomilikiwa na seva pekee inaweza kuweka lebo hizo zinazoaminika kupitia
hoja ya msimbo pekee ya `trustedSource`; uga wa JSON wa ombi hauwezi kufikia
hoja hiyo. Maandishi ya nakala hubaki kuwa maudhui yasiyoaminika yaliyotokana na midia,
bila kujali asili yake, na kamwe hayapaswi kuamua uidhinishaji.

Mpigaji wa hali ya juu anaweza kutoa mkondo wa `audioTranscript` kwa video hiyo hiyo;
unachukuliwa kuwa maandishi yaliyotolewa na mteja, si uthibitisho wa unukuzi wa seva.
Kiunganishi cha muunganisho huendesha uchunguzi wa picha na sauti chini ya
kikomo kimoja cha muda na ishara moja ya kusitisha, huupanga kwenye ratiba ya pamoja, huunganisha
nakala zinazofanana kabisa, na huripoti matokeo yasiyokamilika wakati upande mmoja tu unapofaulu.
`audioTranscript` batili husababisha matokeo hayo yasiyokamilika — maelezo ya
picha huhifadhiwa na tawi la sauti hurekodi msimbo wa hitilafu uliosafishwa —
badala ya kufanya video nzima ishindwe. Upatikanaji wa kila tawi, alama ya matokeo yasiyokamilika,
na misimbo ya hitilafu iliyosafishwa huhifadhiwa katika matokeo yaliyoelezwa, katika
metadata ya kinga (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), katika metadata ya akiba ya matokeo, na katika vihesabu vya
muunganisho vya daraja. Njia chaguo-msingi ya Video Bridge haitumii ubadilishaji wa matamshi kuwa maandishi
wala kupakua nakala ya pili ya maudhui; bila mkondo huo uliotolewa waziwazi, hubaki
ya video pekee.

**Uhifadhi wa unukuzi (#12150 P1).** Hili hutumika kiotomatiki wakati wowote
Video Bridge (ambayo yenyewe ni ya kuchaguliwa) inapowasilisha kidokezo cha unukuzi — hakuna
alama tofauti ya uhifadhi. Ombi linapowasilisha kidokezo chochote cha unukuzi (`transcript`
iliyotangazwa na mpigaji au `audioTranscript` iliyounganishwa), kinga hukitia alama ya
`videoBridgeObserved` na kutengeneza nakala iliyofichwa ya maelezo ya video —
uwasilishaji unaofanana ambapo kiini cha maandishi huru cha kila kidokezo hubadilishwa na
`[redacted-video-transcript]`, kwa kubadilisha uga wa kidokezo uliopangiliwa
kabla ya tungo kuundwa (kamwe si kwa kuchanganua maandishi yaliyosawazishwa, hivyo hakuna maudhui ya
kidokezo — ya kihasama au ya kawaida, ikiwa ni pamoja na viini vyenye `]` kama vile
`[inaudible]`/`[music]` — yanayoweza kubaki). Kiini cha ombi katika kumbukumbu ya miito kinachohifadhiwa
hubadilisha kila sehemu ya maandishi inayotokana na video kwa nakala hiyo iliyofichwa, kwa kulinganisha
usawa wa maudhui; nanga ya `fullText` husomwa tena kutoka kwenye payload iliyokamilika ya kinga
ya kabla ya mwito, hivyo ulinganifu bado hufaulu baada ya kinga za baadaye kwenye mnyororo (vifichaji vya PII na
vitambulisho vya siri, vipaumbele 10/95) kuandika upya maandishi ya maelezo papo hapo na
baada ya uingizaji wa kidokezo cha mfumo/ukabidhishaji/kumbukumbu kubadilisha muundo wa safu ya ujumbe. Kiini
kinachotumwa juu kwa modeli hakibadilishwi. Ombi lililochunguzwa pia halijazi
Memory yoyote ya kudumu (uchimbaji unaotokana na ombi na majibu hurukwa),
hivyo jibu la modeli haliwezi kurudia maandishi ya unukuzi ndani ya Memory.

**Nyuga ghafi za video (#12430).** Daraja linapowezeshwa na usaidizi asilia wa video haujulikani au haupo, nyuga zilizofafanuliwa za `transcript`/`audioTranscript` pia huwasha `videoBridgeObserved`, hata baada ya kushindwa kwa maelezo au kikomo cha `maxVideos`. `null` na tungo tupu huhesabiwa; nyuga ambazo hazipo na metadata isiyo ya video hazihesabiwi. Nakala zinazohifadhiwa huficha nyuga hizi au huacha ombi, na akiba/Memory hupitwa.

Kwenye njia hizo mbadala, vidokezo halali vya mpigaji huwa sehemu zinazotumika za `text`/`input_text`
badala ya nyuga zisizo sanifu za mtoa huduma. Mikondo yote miwili iliyotolewa kwenye ombi
hubaki kuwa uchunguzi usioaminika wa `client`, pamoja na onyo la wazi kwamba video
haikuelezwa na mihuri ya muda haikuthibitishwa dhidi ya maudhui. Bajeti zilizopo za
vidokezo 256/jumla ya KiB 64 na za kila kidokezo hutumika kwa mikondo hiyo miwili kwa pamoja;
mihuri ya muda lazima itoshee ndani ya kikomo cha sekunde 600 cha dalali na dirisha lolote la
kulenga lililotolewa. Mikondo batili hutupwa, si kutumwa kama maandishi yoyote yale; mkondo mwenza halali
bado unaweza kutumiwa isipokuwa bajeti yao ya pamoja imepitwa. Nyuga batili/tupu
haziongezi maandishi. Uletaji wa maudhui au unukuzi hauongezwi na njia hii mbadala.
Nyuga za upanuzi wa unukuzi huondolewa kutoka kwenye kibeba video cha njia mbadala na vipengee vyake vya
`video_url`/`source`. Orodha ya ruhusa ya waya ya OpenAI hubaki kali; vibeba video
ambavyo uasili wake haujulikani huendelea kupatikana na malengo yanayojulikana kuwa ya maandishi pekee huhifadhi viashiria salama.
Nakala za ufichaji zilizopangiliwa hulinda maandishi ya unukuzi yaliyoongezwa, huku
ombi asili linalomilikiwa na mpigaji likibaki bila kubadilishwa. Malengo yenye usaidizi asilia na
madaraja yaliyolemazwa hudumisha tabia yake iliyopo ya kupita moja kwa moja.

Nakala za ziada zinazohifadhiwa hutumia ishara hiyo hiyo ya ombi lililochunguzwa. Picha ghafi
ya ombi la mteja la kabla ya kinga, ombi linalosubiri ndani ya kumbukumbu, na kumbukumbu ya mapema
ya ombi lililokataliwa hubadilisha kwa muundo nyuga za unukuzi katika sehemu za video;
vidokezo vya tungo vinavyotengenezwa na hatua za mchakato na ukabidhishaji wa muktadha hufichwa
kwenye kituo cha kiini cha ombi kinachohifadhiwa. Kiashiria kinachohifadhiwa cha `video_content_removed`
hufanya mwendelezo wa `previous_response_id` ushindwe kwa usalama badala ya kuunda upya
maandishi yaliyotupwa kimakusudi. Ikiwa ombi lililochunguzwa litapoteza
nakala yake ya ufichaji ya kila sehemu kabla ya kurekodiwa, au hata moja kati ya nakala kadhaa za video
itashindwa kulingana baada ya mabadiliko ya baadaye ya ombi, kiini cha ombi kinachohifadhiwa
huachwa kabisa badala ya kuhifadhi unukuzi uliofichwa kwa sehemu tu.

Kwa ombi lililochunguzwa, jibu la modeli linaweza kunukuu sehemu yoyote ya
unukuzi bila mpaka wa kidokezo uliopangiliwa. Kwa hivyo `responseBody` yake katika kumbukumbu ya miito
inayohifadhiwa hubadilishwa na kiashiria cha kuachwa; artefakti ya kina ya
mchakato (inayoweza kujumuisha viini vya upande wa juu/mteja na vipande vya mtiririko)
haihifadhiwi. Akiba za kisemantiki, za kutorudia athari, na za kurudia ujalili
hupita usomaji na uandishi kwa ombi hilo. Ombi la mtoa huduma na jibu linaloonekana kwa
mteja hubaki bila kubadilishwa. Baiti za mapema za keepalive huondolewa kutoka kwenye bafa ya muda
artefakti ya kina inapoachwa. Onyo la EventStream yenye hitilafu la Kiro
huripoti idadi ya baiti za payload pekee, kamwe si maudhui yake wala hitilafu ghafi ya
kichanganuzi cha JSON.
Hili halidai kwamba kila uchunguzi usiohusiana wa mtoa huduma/programu-jalizi umekaguliwa;
ukaguzi mpana zaidi wa vituo vya data vinavyohifadhiwa unafuatiliwa katika #11658.

Mzunguko wa maisha wa ndani wa `/api/modality-bridge/video/drilldown` ni safu tofauti ya akiba inayotumia loopback na uthibitishaji wa tokeni. Kila operesheni pia inahitaji kitambulisho kanoni kisichoeleza maana cha mhusika mkuu. Kabla ya mpigaji wa uzalishaji kuwezeshwa, lazima atoe kitambulisho hicho kutoka kwa mpangaji aliyethibitishwa na kamwe asisambaze thamani iliyochaguliwa na mteja. Funguo za akiba humfunga mhusika huyo mkuu kwa vitambulisho kanoni vya kipindi na rejeleo la video, huhifadhi tu funguo zake zilizotokana na SHA-256, na huwekea mipaka usomaji na ufutaji kwa mhusika mkuu huyo huyo. Akiba huhifadhi upeo wa fremu 16 za JPEG zilizotolewa kwa kila ingizo, huzifanya ziishe baada ya dakika kumi, na huauni usomaji wenye mipaka wa `start`/`end` au ufutaji bayana wa kipindi.

Kila mhusika mkuu anawekewa kikomo cha maingizo 16 na MiB 64 za data kanoni ya JPEG. Vikomo hivyo ni huru dhidi ya kikomo cha jumla cha maingizo 64/MiB 256: shinikizo la mgao wa mhusika mkuu huondoa kwanza maingizo ya mhusika huyo mkuu ambayo hayajatumiwa kwa muda mrefu zaidi, kabla ya kuzingatia uondoaji wa jumla wa LRU. Maingizo yaliyokwisha muda huondolewa kutoka katika hesabu za mhusika mkuu na za jumla wakati wa shughuli za akiba, huku kughairi na kushindwa kwa uthibitishaji kusipohifadhi ubadilishaji usiokamilika.

Akiba hukataa Base64 isiyo kanoni, ujazo wa ziada, midia isiyo JPEG, JPEG zenye muundo mbovu au zilizokatwa, na JPEG zinazosababisha onyo wakati wa usimbuaji wa picha nzima wenye mipaka kwa kutumia `sharp`. Husimba upya kila picha iliyokubaliwa kama JPEG kanoni, hutoa upana na urefu kutoka kwa baiti zilizosimbuliwa badala ya kuamini sehemu zilizotolewa na mpigaji, na hutupa baiti zozote za ziada za polyglot badala ya kuzihifadhi. Ni bafa iliyobanwa iliyo kanoni na yenye mipaka pekee inayohesabiwa katika migawo yote miwili. Kikomo cha JSON kinachopitishwa kupitia mtandao kinajumuisha ziada ya Base64 kwa kikomo cha ingizo lililosimbuliwa cha MiB 32. Kila toleo lililohifadhiwa hurekodi umbizo/azimio lake la JPEG lililothibitishwa, sera ya usampulishaji, toleo la utoaji, muda wa kuundwa, heshi ya maudhui iliyokokotolewa na seva, na rejeleo kuu lililohashiwa pamoja na heshi ya maudhui kuu kutoka kwa mpigaji anayeaminika. Ughairi hukaguliwa kati ya awamu zisawazishaji za usimbuaji na uhashi kabla ya uwekaji wa atomiki kwenye akiba.

Sehemu hii bado haijaunganisha mzalishaji wa uzalishaji kwenye njia na haitoi uteuzi wa vibadala vya maazimio mengi. Kwa hiyo, njia wazi ya ombi la Video Bridge haiongezi kazi yoyote, huku utoaji wa mhusika mkuu aliyefungwa kwa mpangaji na mzunguko kamili wa FU-08 wa maazimio mengi vikibaki kuwa kazi bayana za ufuatiliaji badala ya kurekodiwa kama tabia iliyokamilika.

Fremu hupewa maelezo kwa mfuatano kwa kutumia modeli ya Video iliyosanidiwa. Ubatilishaji tupu wa Video hurithi mpangilio wa Vision; ikiwa yote mawili ni matupu, kipanga-njia kiotomatiki cha Vision huchagua modeli inayofaa yenye uwezo wa kuona. Maelezo yaliyofaulu hubadilisha sehemu asili kwa kiambishi awali thabiti cha `[Video description:` ambacho pia huashiria maandishi hayo kuwa uchunguzi usioaminika uliotokana na midia na kuziambia modeli za hatua za baadaye zisifuate maagizo yaliyopatikana kwenye midia. Funguo za akiba ya maelezo ya fremu hujumuisha baiti za JPEG, kidokezo, muhuri wa muda na modeli inayotumika; maelezo yaliyofaulu pekee ndiyo huwekwa kwenye akiba. Maingizo ya akiba huhifadhi modeli halisi ya mzalishaji iliyofaulu, ikijumuisha modeli ya akiba; daraja huripoti `mixed` wakati fremu tofauti zilitolewa na modeli tofauti. Kupatikana kwa ingizo kwenye akiba hutumia tena utambulisho huo wa mzalishaji badala ya kuupa upya lebo ya mpango wa uelekezaji ulioombwa. Akiba ya matokeo ya video nzima huwekewa ufunguo kulingana na kila ingizo linalobadilisha tokeo — kidokezo, modeli inayotumika, sera ya usampulishaji, idadi ya fremu, hali ya uchanganuzi wa kisemantiki, alama ya kidijitali ya SHA-256 ya dokezo la lengo lililosawazishwa, dirisha la lengo, `transcript`, `audioTranscript`, na bendera ya karatasi ya picha za mawasiliano — kwa hivyo kubadilisha kipimo chochote kati ya hivyo hukosa akiba, na kamwe hakutumii tena matokeo yaliyopitwa na wakati. Toleo, kizingiti, na idadi yenye kikomo ya fremu teule za sera ya kuondoa picha zinazofanana pia zimebainishwa wazi katika ufunguo na metadata za akiba ya matokeo; kwa hiyo, mabadiliko ya sera hayawezi kutumia tena maelezo yaliyopitwa na wakati ya video nzima. Metadata za v4 za akiba ya matokeo huhifadhi hali na alama ya kidijitali, na kamwe hazihifadhi jukumu ghafi la mtumiaji. Metadata za vizuizi vya usalama huripoti hali za uchanganuzi zilizoombwa na zinazotumika; hali ya `focused` iliyoombwa bila maandishi yanayoweza kutumiwa ya mtumiaji huripotiwa kama `full` inayotumika.

Kizuizi cha usalama hutoa kila sehemu ya video inayotumika lakini hakielezi zaidi ya `modalityBridgeVideoMaxVideos`. Kwa lengwa lililothibitishwa kuwa na `supportsVideo === false`, video zilizoshindwa na zilizozidi kikomo hugeuka kuwa viashiria bayana na salama vya maandishi ili kusiwe na video ghafi inayosalia. Uwezo usipojulikana, sehemu hizo huhifadhi kibebea chake cha video; nakala yoyote mbadala ya maandishi hufuata ubadilishaji wenye mipaka wa maandishi ulioelezwa hapo juu. Malengwa yenye `supportsVideo === true` hulipita daraja. Ishara ya kughairi ombi la mteja husambazwa kupitia upakuaji, foleni ya dalali, michakato tanzu na miito ya maelezo; ughairi husimamisha kati ya video na kamwe hauruhusu midia ghafi ipite bila ukaguzi pale inaposhindwa.

Mipangilio ya wakati wa utekelezaji huhifadhiwa kwenye DB na kuthibitishwa na Zod:

| Ufunguo                             | Chaguomsingi | Masafa / tabia                                                                                                                   |
| ----------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`      | Muda wa utekelezaji wa hiari, unaowashwa kwa kuchagua                                                                            |
| `modalityBridgeVideoAnalysisMode`   | `"full"`     | `full` huhifadhi maelezo mafupi ya jumla; `focused` hutumia muktadha uliowekewa mipaka, usioaminika wa mtumiaji wa hivi karibuni |
| `modalityBridgeVideoModel`          | `""`         | Hurithi modeli ya Vision Bridge                                                                                                  |
| `modalityBridgeVideoFrameCount`     | `8`          | 1–16                                                                                                                             |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`  | `uniform`, `scene_aware`, au `segment_aware` sawia; kushindwa kwa kitambuzi hurudi kwenye `uniform`                              |
| `modalityBridgeVideoMaxVideos`      | `1`          | 1–4                                                                                                                              |
| `modalityBridgeVideoTimeout`        | `120000`     | 1000–120000 ms                                                                                                                   |

Thamani za zamani zilizohifadhiwa za muda wa kuisha wa Video zilizo zaidi ya sekunde 120 hupunguzwa hadi
kikomo cha muda cha wakala; uandikaji wa mipangilio mipya unaozidi kikomo hicho hukataliwa.
`GET /api/modality-bridge/video/runtime` huhitaji eneo la ndani la loopback
lililowekewa muhuri na kuaminika kabla ya uthibitishaji au uchunguzi wa muda wa utekelezaji, kisha huhitaji
uthibitishaji wa usimamizi. Hurejesha tu `available`, matoleo ya FFmpeg/ffprobe yaliyosafishwa, na sababu isiyobadilika
wakati muda wa utekelezaji haupatikani. Endpoint ya ndani ya uchomoaji si
API ya umma ya upakiaji: kujaa kwa foleni hurejesha `503` pamoja na `Retry-After`, kukatika kwa muunganisho wa mpigaji
hurejesha `499`, na kikomo cha muda kisichobadilika cha wakala hurejesha `504`. Majibu yaliyobadilishwa huongeza
`video->text;model=<visionModel>;parts=<videos>` kwenye header kuu ya
`x-omniroute-modality-bridge` bila kuondoa sehemu za Vision au Audio.

### Kifichaji cha PII (`piiMasker.ts`)

Hufanya kazi katika hatua **zote mbili**.

- **`preCall`** hunakili payload, hupitia `system`, `messages`, `input`, na
  `prompt` (ikiwemo vipengee vya mifuatano ya kawaida), na hutumia `processPII()` (kutoka
  `@/shared/utils/inputSanitizer`) kwenye sehemu za mifuatano za `content`/`text`. Wakati
  `PII_REDACTION_ENABLED=true`, PII iliyotambuliwa hufichwa katika payload
  inayotumwa. Hii haitegemei `INPUT_SANITIZER_MODE` (ambayo hudhibiti tu
  sera ya uchomaji wa prompt). Wakati ufichaji umezimwa, ombi hurekodi idadi ya
  utambuzi bila kuandika upya maudhui.
- **`postCall`** hunakili jibu kwa kina, huendesha `sanitizePIIResponse()` pamoja na
  kifichaji cha muundo wa Responses API (`maskResponsesOutput` — hushughulikia
  `output_text` na `output[].content[].text`). Ikiwa ufichaji wowote unatokea,
  jibu lililorekebishwa huchukua nafasi ya la awali.

Kizuizi hakizuii kamwe; kinaweka tu maelezo (`meta.detections`,
`meta.redacted`) au huandika upya.

### Uchomaji wa Prompt (`promptInjection.ts`)

Hutambua miundo hasidi katika maudhui yaliyotolewa na mtumiaji na kutekeleza
sera iliyosanidiwa. Tabia huamuliwa na vigezo vya mazingira na chaguo za
constructor:

| Mpangilio            | Kigezo cha mazingira                                                                                      | Chaguomsingi | Athari                                                                                                                                                                                                    |
| -------------------- | --------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Imewashwa            | `INPUT_SANITIZER_ENABLED`                                                                                 | `true`       | Ikiwa ni `false`, kizuizi hurudi mara moja bila kuendelea.                                                                                                                                                |
| Modi                 | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                           | `warn`       | Sera ya uchomaji: `block`, `warn`, au `log`. (`redact` inakubaliwa kwa uoanifu wa nyuma lakini **haiondoi** maandishi ya uchomaji; uandikaji upya wa PII ya ombi hudhibitiwa na `PII_REDACTION_ENABLED`.) |
| Kizingiti cha kuzuia | Chaguo la `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (lakabu `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`       | Kiwango cha chini cha ukali kinachohitajika ili kuzuia. Kiwango cha kati ni cha uangalizi pekee kwa chaguomsingi.                                                                                         |

**Mpangilio wa kipaumbele wa modi** (`getMode`): `options.mode` ya mpigaji →
ubatilishaji wa **alama ya kipengele ya DB** ya `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → mazingira ya `INJECTION_GUARD_MODE` → mazingira ya `INPUT_SANITIZER_MODE` →
`warn`. Kwa hivyo, ubatilishaji wa dashboard hushinda vigezo vya mazingira, hivyo UI ya Feature
Flags hudhibiti kizuizi kinachoendeshwa moja kwa moja (bila kuwasha upya). Usomaji wa DB ni salama dhidi ya hitilafu:
ukitokea hitilafu, kizuizi hurudi kwenye tabia inayotegemea mazingira, na wakati hakuna
ubatilishaji uliowekwa, tabia hufanana na utatuzi unaotumia mazingira pekee.

Vyanzo vya utambuzi:

1. `sanitizeRequest()` kutoka `@/shared/utils/inputSanitizer` (seti ya kitambuzi iliyoshirikiwa
   inayotumiwa kwingine katika pipeline).
2. `DEFAULT_GUARD_PATTERNS` zilizojengewa ndani (kwa sasa `system_override_inline` na
   `markdown_system_block`, zote zikiwa na ukali wa `high`).
3. `customPatterns` za hiari zinazopitishwa kupitia chaguo za constructor (mifuatano, regex,
   au rekodi za `{ name, pattern, severity }`).

Wakati `mode === "block"` **na** angalau ugunduzi mmoja unafikia kiwango cha
ukali, `preCall` hurejesha `{ block: true, message: "Request rejected:
suspicious content detected" }`. Katika modi za `warn`/`log`, guardrail huandika kumbukumbu lakini
huruhusu wito. Kisaidizi kinachoshirikiwa `evaluatePromptInjection()` pia husafirishwa
kwa waitaji wanaohitaji kutathmini prompt bila kupitia registry.

**Kikomo cha uchanganuzi (v3.8.20):** kigunduzi hukagua tu **KB 16 za kwanza** za
maandishi ya prompt yaliyounganishwa — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (baiti 16 384) katika
`src/shared/utils/inputSanitizer.ts`. `detectInjection()` na
`evaluatePromptInjection()` zote hutumia `slice(0, MAX_INJECTION_SCAN_BYTES)` kabla ya kuendesha
kitanzi cha ruwaza. Maagizo ya injection huwa karibu na sehemu ya juu ya ingizo, kwa hivyo hii
huwekea CPU/GC ya regex kikomo kwenye payload za mamia ya KB bila kudhoofisha ugunduzi (ling.
#3932, #4041).

### Kifichaji cha Vitambulisho (`credentialMasker.ts`)

Huendeshwa katika hatua **zote mbili**, ikiwa ya mwisho katika mnyororo chaguomsingi (kipaumbele `95`). Huficha
ruwaza zinazojulikana za funguo za API / tokeni za siri kutoka kwenye payload inayotumwa (maudhui ya
ujumbe, hoja za wito wa zana, matokeo ya zana) **na** jibu la mtoa huduma, ili
kitambulisho kilichobandikwa kwenye prompt (au kilichorudiwa na matokeo ya zana) kisivuje
kwa mtoa huduma wa upstream au kurudi kwa mteja.

- **Huwashwa kwa hiari pekee**, kwa utaratibu sawa na ufichaji wa PII (karibu na Kanuni Ngumu #20):
  imezimwa isipokuwa `settings.credentialRedactionEnabled === true` **au**
  `CREDENTIAL_REDACTION_ENABLED=true`. Ikiwa imezimwa, guardrail haifanyi chochote —
  haizuii kamwe wala haiandiki upya.
- `redactCredentials()` hupitia mti mzima wa payload/jibu (`walkValue()`,
  salama dhidi ya prototype pollution, salama dhidi ya mizunguko kupitia `WeakSet`) na kubadilisha sehemu zinazolingana kwa
  kishikilia nafasi cha `[REDACTED:<type>]`, huku ikinakili matawi yaliyobadilika pekee.
- `CREDENTIAL_PATTERNS` hujumuisha funguo za watoa huduma wa LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokeni za VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), funguo za malipo (Stripe, Square), funguo za
  cloud (funguo za ufikiaji za AWS, Twilio, SendGrid, Mailgun), funguo binafsi / JWT,
  connection string zenye vitambulisho (`mongodb://user:pass@...`, n.k.), na
  ruwaza ya jumla ya thamani ya header ya `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Funguo zenye muundo wa header (`authorization`, `x-api-key`, `api-key`,
  `apikey`) hufichwa kimuundo (thamani pekee, huku kiambishi cha scheme kama
  `Bearer `/`Basic ` kikihifadhiwa) badala ya kutumia regex ya jumla ya maandishi.
- Guardrail haizuii kamwe; huandika upya tu (`modifiedPayload` /
  `modifiedResponse`) na kuongeza maelezo (`meta.credentialsRedacted`, `meta.count`).

Kinga dhidi ya regression: `tests/unit/credential-masker-guardrail.test.ts`.

## Mkataba wa Msingi (`base.ts`)

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
  block?: boolean; // true husitisha mnyororo mara moja
  message?: string; // huonyeshwa wakati wa kuzuia
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // hurejeshwa na preCall ili kuandika upya ombi
  modifiedResponse?: TValue; // hurejeshwa na postCall ili kuandika upya jibu
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

Kizuizi huashiria "hakuna mabadiliko" kwa kurejesha mojawapo ya `void`, `{}`, au
`{ block: false }`. Kurejesha `modifiedPayload`/`modifiedResponse` hubadilisha
thamani inayopita kwenye mnyororo kwenda kwenye vizuizi vinavyofuata.
`signal?: AbortSignal` hubeba mzunguko wa maisha wa mpigaji hadi kwenye vizuizi. Kughairi ombi ni hali maalumu ya kimakusudi ya kuendelea licha ya hitilafu: madaraja ya midia husimamisha kazi na kufanya usafishaji bila kurejesha midia ghafi kwa lengo linalojulikana kuwa halitumii muundo huo.

## Sajili (`registry.ts`)

`guardrailRegistry` ya singleton hutoa:

- `register(guardrail)` — huongeza kizuizi (au kukibadilisha kulingana na jina lililosawazishwa) na
  kupanga upya kwa `priority` ya kupanda.
- `clear()` / `list()` — zana saidizi za usimamizi.
- `runPreCallHooks(payload, context)` — hupitia vizuizi amilifu, hupitisha
  payload kupitia `modifiedPayload`, na kusimama inapokutana na `block: true` ya kwanza.
- `runPostCallHooks(response, context)` — mtiririko huohuo upande wa jibu.
- `resetGuardrailsForTests({ registerDefaults })` — hufuta hali na kwa hiari
  kusajili upya chaguo-msingi ili kutenga majaribio kwa usafi.

Viendeshaji vyote viwili hurejesha `{ blocked, payload|response, results, guardrail?, message? }`
ambapo `results` ni safu ya rekodi za `GuardrailExecutionResult` zinazojumuisha
sehemu za `blocked`, `skipped`, `modified`, `error`, na `meta` kwa kila kizuizi,
ambazo ni muhimu kwa ufuatiliaji.

### Kuzima Vizuizi kwa Kila Ombi

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` hukusanya orodha
isiyorudiwa ya majina ya vizuizi ambavyo vinapaswa kurukwa kwa ombi la sasa.
Vyanzo (vyote ni vya hiari, vyote vinaunganishwa):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` katika mwili wa ombi (kiwango cha juu)
- `metadata.disabledGuardrails` katika mwili wa ombi
- Kichwa `x-omniroute-disabled-guardrails` (au cha zamani
  `x-disabled-guardrails`)

Thamani zinaweza kuwa safu za mifuatano au mfuatano uliotenganishwa kwa koma; majina
husawazishwa kuwa herufi ndogo za kebab-case (`pii_masker` → `pii-masker`). Tokeo
hupitishwa kupitia `context.disabledGuardrails` hadi kwenye sajili, ambayo huruka
vizuizi vinavyolingana (`skipped: true` katika `results`).

## Mpangilio wa Utekelezaji

Kwa kila ombi linalopitia `src/sse/handlers/chat.ts` na
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` huunda orodha ya kurukwa kutokana na ufunguo wa API, mwili wa ombi,
   na vichwa.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` huendesha vizuizi kwa mpangilio wa kipaumbele
   kuanzia cha chini kwenda juu:
   - Vizuizi vilivyozimwa hurekodiwa kama `skipped`.
   - `preCall` ya kila kizuizi inaweza kuandika upya data ya ombi kupitia `modifiedPayload`.
   - `block: true` ya kwanza husitisha mfuatano mara moja na kishughulikiaji hurejesha
     jibu la kukataliwa na kizuizi.
3. Data ya ombi (ambayo huenda imeandikwa upya) hupelekwa kwenye uelekezaji wa mchanganyiko na
   utumaji kwa huduma ya juu.
4. Baada ya jibu kuundwa, `guardrailRegistry.runPostCallHooks(...)`
   huendesha mfuatano huo huo kwenye jibu. `block: true` hapa huondoa jibu la
   huduma ya juu.

Vizuizi vinavyotupa hitilafu hurekodiwa kwa `error: <message>` na kuandikwa kwenye kumbukumbu kupitia
`logger.warn`, lakini mfuatano huendelea — kwa muundo, mfumo huruhusu ombi kuendelea hitilafu ikitokea.

## Usanidi

Vigeu vya mazingira vinavyosomwa na vizuizi vilivyojengewa ndani:

| Kigeu                                 | Kinachokitumia            | Athari                                                                                                                                     |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Weka `false` ili kuzima utambuzi kabisa.                                                                                                   |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Sera ya udungaji: `warn`, `block`, au `log`. Thamani ya zamani `redact` haiandiki upya maandishi ya udungaji.                              |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Hali ya kizuizi cha udungaji; pia ni alama ya kipengele katika DB ambayo **hupuuza na kuchukua nafasi ya** vigeu vya mazingira (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Kiwango cha chini cha ukali kinachokataliwa na `MODE=block`: `high` (chaguo-msingi), `medium`, au `low`.                                   |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Jina mbadala la zamani la `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                               |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Ikiwa `true`, PII katika ombi hufichwa (bila kutegemea hali ya udungaji).                                                                  |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Hudhibiti tabia ya kifichaji kwenye upande wa jibu.                                                                                        |

Vizuizi vya Modality Bridge husoma usanidi wa wakati wa utekelezaji kutoka kwenye hifadhi ya mipangilio
inayotegemea DB (`getSettings()`), si vigeu vya mazingira. Funguo kuu za Vision ni
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, na
`modalityBridgeCacheMaxEntries`. Funguo za zamani za
`visionBridge*` zinakubaliwa tu kama mbadala wa usomaji wa mzunguko mmoja ulioandikwa
kwenye nyaraka; uandishi kutoka dashibodi hutumia funguo kuu. Chaguo-msingi na kitatuzi cha mbadala
vinapatikana katika `src/shared/constants/modalityBridgeDefaults.ts`, huku konstanti za zamani
zikihifadhiwa katika `src/shared/constants/visionBridgeDefaults.ts`.

Sauti hutumia `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, na `modalityBridgeAudioMaxClips`, pamoja na mipangilio ya pamoja ya
`modalityBridgeCache*`. Sauti haina mbadala wa funguo za zamani kwa sababu funguo hizi
zilianzishwa pamoja na skima ya Modality Bridge.

Video hutumia `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, na
`modalityBridgeVideoTimeout`, pamoja na mipangilio ya pamoja ya `modalityBridgeCache*`.
Imezimwa kwa chaguo-msingi kwa sababu FFmpeg/ffprobe ni vitegemezi vya hiari vya
uendeshaji, na uundaji wa maelezo ya fremu huongeza muda wa kusubiri na gharama ya modeli.

## Vizuizi Maalum

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

Hatua:

1. Unda `src/lib/guardrails/myGuardrail.ts` inayopanua `BaseGuardrail`.
2. Tekeleza `preCall` na/au `postCall`.
3. Ama isajili wakati wa kuingiza (isukume kutoka `registerDefaultGuardrails`) au
   uite `guardrailRegistry.register(...)` wakati wa utekelezaji — sajili hubadilisha
   kizuizi chochote cha awali chenye jina lilelile lililosawazishwa.
4. Ongeza majaribio chini ya `tests/unit/` (mifano iliyopo:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Majaribio

Tumia `resetGuardrailsForTests()` kati ya majaribio ili kuanza kutoka hali inayojulikana.
Pitisha `{ registerDefaults: false }` ili kuanza na sajili tupu na
kusajili tu vizuizi vinavyojaribiwa. Vision Bridge inakubali uingizaji wa vitegemezi
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge hutoa sehemu
sawa za mipangilio, uwezo, uteuzi wa modeli ya STT, ukaguzi wa vitambulisho,
na unukuzi. Kwa hivyo, majaribio yanaweza kutekeleza mitiririko yote miwili bila ufikiaji wa DB
au mtandao.

## Angalia Pia

- `src/lib/guardrails/` — utekelezaji
- `src/shared/utils/inputSanitizer.ts` — kigunduzi kinachoshirikiwa kinachowezesha
  ugunduzi wa udukuzi wa prompt na ufichaji wa PII
- `src/shared/constants/visionBridgeDefaults.ts` — chaguomsingi za Vision Bridge na
  orodha ya modeli zinazolazimishwa kutumia bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — chaguomsingi za pamoja za wakati wa utekelezaji za Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — safu huru (kivunja mzunguko, vipindi vya kusubiri)
- `docs/reference/ENVIRONMENT.md` — rejeleo kamili la vigeu vya mazingira

## Ufikivu wa njia wa kizuizi cha udukuzi na red-team (Awamu ya 8 · Sehemu D)

Kizuizi cha udukuzi (`createInjectionGuard` / `withInjectionGuard`) kinashughulikia njia zote
zinazokubali prompt za watumiaji. Kinaheshimu `INJECTION_GUARD_MODE` (chaguomsingi `warn` = kumbukumbu pekee;
`block` = hurudisha HTTP 400 `SECURITY_001`).

| Aina                 | Njia                                                                                                                                                 | Hali chaguomsingi |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Maandishi (zilizopo) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn              |
| Uzalishaji           | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn              |
| Data                 | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn              |

Uchimbaji wa maandishi (`extractMessageContents`) hushughulikia `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (kila usiku, `nightly-llm-security.yml`):** promptfoo huthibitisha kuwa kila njia huzuia
mkusanyiko wa OWASP-LLM katika `INJECTION_GUARD_MODE=block`; garak huendesha uchunguzi (huruka bila siri).
`moderations` imejumuishwa kwa ajili ya uthabiti — waendeshaji katika hali ya kuzuia wanaweza kuiondoa kupitia
`resolveDisabledGuardrails`.

Mtiririko wa kazi wa kila usiku (`.github/workflows/nightly-llm-security.yml`, cron + uanzishaji wa
mkono) una kazi mbili:

- **`promptfoo-guard` (inayozuia)** — huendesha `promptfoo eval -c promptfooconfig.yaml`
  pamoja na `INJECTION_GUARD_MODE=block`. Kila tukio hasidi (k.m. "puuza
  maagizo yote ya awali…", uvunjaji wa vizuizi wa mtindo wa DAN) huhakikisha kuwa jibu lina
  `error.code === "SECURITY_001"`, yaani, kizuizi kilikataa ombi hilo kwa hakika.
- **`garak` (ya ushauri)** — huendesha garak `--probes promptinject,dan,leakreplay`
  dhidi ya instansi ya ndani ya OmniRoute (`http://localhost:20128/v1`). Hudhibitiwa na
  siri ya mtoa huduma (`PROMPTFOO_PROVIDER_KEY`); huruka kwa utaratibu bila hitilafu na huongezewa
  `|| true`, kwa hivyo huripoti bila kusababisha CI ishindwe.

Ufikivu wa kisaidizi cha kizuizi (`createInjectionGuard` / `withInjectionGuard`)
unahusisha kila njia ya `/v1` yenye prompt; maandishi ya prompt huchukuliwa kutoka
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` na
`extractMessageContents()` katika `src/shared/utils/inputSanitizer.ts`.
