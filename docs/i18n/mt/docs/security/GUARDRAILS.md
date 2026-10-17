# Guardrails (Malti)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sors awtorevoli:** `src/lib/guardrails/`
> **Aġġornat l-aħħar:** 2026-08-29 — v3.8.51 (il-provenjenza tat-traskrizzjoni ta’ Video Bridge tiġi ddikjarata minn min isejjaħ,
> u għadha mhix ivverifikata mis-server — iċċarat skont #11661)

Il-guardrails jinfurzaw is-sikurezza, il-politiki u t-trasformazzjonijiet tal-kontenut fil-konfini
bejn OmniRoute u l-fornituri upstream. Kull guardrail jista’ jispezzjona (u,
b’mod fakultattiv, jirrifjuta, jittrasforma jew jannota) il-payloads tat-talbiet (`preCall`) u
r-risposti upstream (`postCall`).

Is-sistema hija **fail-open**: jekk guardrail jitfa’ eċċezzjoni waqt l-eżekuzzjoni, ir-reġistru
jirreġistra l-iżball u jkompli bil-guardrail li jmiss minflok ifalli
t-talba. L-imblukkar huwa deċiżjoni espliċita (`block: true`), qatt aċċident.

## Salvagwardji Inkorporati

Ir-reġistru jgħabbi awtomatikament sitt salvagwardji skont l-ordni ta’ prijorità waqt l-importazzjoni
(ara `registry.ts` → `registerDefaultGuardrails()`):

| Prijorità | Isem                | Stadju/i       | Fajl                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Numri ta’ prijorità aktar baxxi jitħaddmu **l-ewwel**.

### Pont tal-Viżjoni (`visionBridge.ts`) — Pont tal-Modalità PR-1

Jinterċetta talbiet li jkun fihom immaġnijiet u li jkunu mmirati lejn **mudelli mingħajr viżjoni**, u jew
jerġa’ jidderieġi t-talba kollha lejn mudell li għandu kapaċità ta’ viżjoni, jew jissostitwixxi l-partijiet
tal-immaġnijiet b’deskrizzjonijiet testwali prodotti minn mudell tal-viżjoni konfigurabbli qabel
is-sejħa upstream. Dan jippermetti lill-fornituri li jaħdmu bit-test biss jipproċessaw
payloads multimodali b’mod trasparenti.

Fluss:

1. Aqbeż jekk il-mudell fil-mira diġà jappoġġja l-viżjoni (sakemm ma jidhirx fil-
   lista ta’ pontijiet sfurzati `isVisionBridgeForcedModel`).
2. Oħroġ il-partijiet tal-immaġnijiet permezz ta’ `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), li tiddelega lid-**ditekter unifikat tal-midja**
   `detectMediaParts()` f’`open-sse/utils/mediaParts.ts` — is-sors uniku
   tal-verità kondiviż mal-filtru tal-kompatibbiltà combo.
   L-estrazzjoni hija limitata b’lista ta’ permessi għall-partijiet tal-ogħla livell tal-forom
   li `replaceImageParts` jista’ jerġa’ jdaħħal (il-kuntratt extract↔replace): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, u Responses API `input_image`. Sejbiet annidati u
   forom b’indikaturi biss huma materjal għall-filtru combo u qatt ma jiġu estratti.
   Aqbeż jekk ma jinstab xejn.
3. Irrisolvi l-konfigurazzjoni waqt it-tħaddim permezz ta’ `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): iċ-ċwievet il-ġodda tas-settings
   `modalityBridge*` jieħdu preċedenza; iċ-ċwievet legati `visionBridge*` jibqgħu bħala
   **fallback għal ċiklu wieħed** (tieqa ta’ rollback). Aqbeż qabel kwalunkwe traversar
   tal-midja meta l-pont ikun diżattivat.
4. Is-selettur tal-modalità (`modalityBridgeVisionMode`, ara t-tabella hawn taħt) jiddeċiedi
   bejn direzzjoni mill-ġdid u deskrizzjoni. Id-direzzjoni mill-ġdid tirritorna `modifiedPayload`
   fejn jinbidel biss `model`, flimkien mal-meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Perkors tad-deskrizzjoni: illimita l-immaġnijiet għal `maxImages`, ikkomponi l-prompt konxju tal-kompitu,
   ikkonsulta l-cache tad-deskrizzjonijiet, sejjaħ il-mudell tal-viżjoni **b’mod parallel**
   (`Promise.allSettled`), u daħħal partijiet testwali `[Image N]: <description>` minflokhom.
   Deskrizzjoni li tfalli tipproduċi `null` u l-parti oriġinali tal-immaġni tiġi
   **ppreservata** (#4012) — ħlief fil-perkors tad-deskrizzjoni combo meta kull
   deskrizzjoni tkun falliet, fejn upstream ikkonfermat bħala mingħajr viżjoni jirċievi stub
   `(mhux disponibbli — ebda fornitur b’kapaċità ta’ viżjoni mhu konness)` minflok (#8430).
6. Irritorna `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selettur tal-modalità (`modalityBridgeVisionMode`)

| Modalità   | Predefinita | Imġiba                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔           | Euristika legata, mhux mibdula (#6640/#7204): mudelli mhux combo/`auto/` jiġu diretti mill-ġdid lejn l-aħjar mudell tal-viżjoni sakemm il-mudell oriġinali ma jkollux diġà kredenzjali li jistgħu jintużaw (f’dak il-każ issir deskrizzjoni); il-miri combo dejjem jiġu deskritti.                                                                                                      |
| `describe` |             | Dejjem iddeskrivi — il-blokka tad-direzzjoni mill-ġdid tinqabeż kompletament; il-mudell magħżul mill-utent dejjem iwieġeb.                                                                                                                                                                                                                                                              |
| `reroute`  |             | Sforza d-direzzjoni mill-ġdid: il-gwardja li żżomm il-mudell bil-kredenzjali tiġi evitata. Il-gwardja tal-kredenzjali tal-**mira** tad-direzzjoni mill-ġdid xorta tapplika — meta ma teżisti ebda mira tal-viżjoni li tista’ tintuża, it-talba tgħaddi għall-proċess ta’ deskrizzjoni sabiex immaġnijiet mhux ipproċessati qatt ma jaslu għand backend li jaħdem bit-test biss (#8430). |

Il-modalitajiet sfurzati jagħmlu short-circuit **qabel** ma titħaddem l-euristika awtomatika; l-imġiba
`auto` hija identika byte b’byte għas-salvagwardja ta’ qabel PR-1.

#### Ambitu taċ-ċavetta API (`visionBridgeKeyScope.ts`)

Meta ċ-ċavetta API tas-sejjieħ tirrestrinġi `allowedConnections`, il-pools tal-kwoti
(`allowedQuotas`) jew il-mudelli (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), il-pont jagħżel biss
mudelli ta’ direzzjoni mill-ġdid u ta’ deskrizzjoni li ċ-ċavetta tista’ tuża, fuq konnessjonijiet li ċ-ċavetta tista’
tuża. Is-sejħa tad-deskrizzjoni mbagħad dejjem tgħaddi mis-self-loop ta’ OmniRoute bl-header
`x-omniroute-self-loop-key-id`, sabiex it-talba chat li tirċeviha terġa’ tinforza
l-politika tal-konnessjonijiet u tal-mudelli ta’ dik iċ-ċavetta. `enforceApiKeyPolicy()`
jirrispetta dak l-header biss flimkien mal-bearer tas-self-loop, għalhekk jista’ biss
jirrestrinġi l-aċċess, u id li ma jiġix riżolt jiġi rrifjutat.

Jekk ebda mudell tal-viżjoni ma jkun permess għaċ-ċavetta, il-perkors tad-deskrizzjoni ma jintervjenix u
t-talba tgħaddi mingħajr tibdil, bl-istess imġiba fail-open bħal salvagwardja diżattivata
(meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Talbiet mingħajr ċavetta, u ċwievet mingħajr dawn ir-restrizzjonijiet, jaġixxu eżattament bħal
qabel.

#### Prompt tad-deskrizzjoni konxju tal-kompitu (`modalityBridgeVisionTaskAware`)

Default **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) iżżid
it-test tal-**aħħar messaġġ tal-utent** (imqassar għal 500 karattru) mal-prompt
bażi tad-deskrizzjoni, biex tidderieġi d-deskrizzjoni lejn dak li fil-fatt talab
l-utent (il-mudell codex-vision-proxy) u titlob lill-mudell tal-viżjoni
jittraskrivi t-test viżibbli. Meta l-flag ikun mitfi — jew ma jkun hemm l-ebda
test tal-utent — il-prompt bażi jintuża mingħajr tibdil.

It-talba proprja kompatibbli ma’ OpenAI tas-self-loop tad-deskrizzjoni
(`callVisionModelSingle()` f’`visionBridgeHelpers.ts`) dejjem titlob
`image_url.detail: "high"` — mingħajr kundizzjonijiet, għal kull
caller/provider, u mhux ikkontrollata minn xi sinjal tal-klijent. Kampjunar
b’dettall baxx inaqqas il-preċiżjoni tal-OCR eżattament għall-kompitu ta’
traskrizzjoni tat-test li jitlob dan il-prompt, għalhekk is-sejħa tad-deskrizzjoni
nnifisha dejjem titlob dettall għoli irrispettivament mil-livell ta’ dettall
użat mit-talba oriġinali li daħlet. Dan jaffettwa biss il-body tat-talba interna
tad-deskrizzjoni; ma jibdilx kif OmniRoute jgħaddi `image_url.detail` tal-caller
stess fit-talba primarja — dak id-default jiġi applikat separatament, u biss
għal klijenti OpenCode identifikati, f’`defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`). Il-fergħa bil-wire format ta’
Anthropic tas-self-loop tad-deskrizzjoni ma għandhiex field `detail` u mhijiex
affettwata minn ebda wieħed miż-żewġ defaults.

#### Limitu tal-output tad-deskrizzjoni (`modalityBridgeVisionMaxChars`)

| Ċavetta                        | Default | Medda             |
| ------------------------------ | ------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`     | `0` jew 100–50000 |

`0` (id-default) ifisser **l-ebda limitu** — id-deskrizzjoni rritornata minn
`callVisionModel()` tgħaddi mingħajr tibdil, u b’hekk tinżamm l-imġiba
eżistenti. Kwalunkwe valur fil-medda 100–50000 iqassar id-deskrizzjoni b’suffiss
`…` qabel ma tiddaħħal lura bħala `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` f’`src/lib/guardrails/visionBridge.ts`).
Għolli dan għal kompiti tal-OCR b’ħafna dettalji fejn il-mudell downstream
jeħtieġ it-traskrizzjoni sħiħa; baxxih biex tillimita l-użu tat-tokens fuq
mudelli tal-viżjoni li jipproduċu ħafna test. Il-field tad-dashboard jinsab
fil-panel Avvanzat tat-tab Vision (`modality-bridge-max-chars`
f’`ModalityBridgeVisionTab.tsx`) u jgħolli kwalunkwe valur bejn 1 u 99
għall-minimu ta’ 100 filwaqt li jħalli `0` espliċitu mhux mibdul — `0` huwa
valur Zod validu fih innifsu
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), mhux sempliċement
id-default ta’ “mhux issettjat”.

#### Cache tad-deskrizzjoni (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL fil-memorja għall-outputs tad-deskrizzjoni, kondiviża
mal-proċess kollu. Ċavetta =
`sha256(imageRef + composedPrompt + configuredBridgeModel)` bi framing
ipprefissat bit-tul (mingħajr kolliżjonijiet fil-konfini tal-fields).
Il-komponent tal-mudell huwa l-mudell tal-bridge **ikkonfigurat**, mhux il-mudell
li fil-fatt wieġeb — `callVisionModel` jista’ jaqleb internament għal fallback,
u l-ħolqien ta’ ċavetta għal kull tentattiv jifframmenta l-cache.
Deskrizzjonijiet li jfallu qatt ma jinħażnu fil-cache. Settings:

| Ċavetta                         | Default | Medda   |
| ------------------------------- | ------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`  | —       |
| `modalityBridgeCacheTtlMinutes` | `60`    | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`   | 10–5000 |

#### Normalizzazzjoni ta’ immaġnijiet remoti (self-loop tad-deskrizzjoni/fetch base64)

Meta l-bridge jiffetchja immaġni **remota** huwa stess — is-self-call
tad-deskrizzjoni ta’ Anthropic u l-konverżjoni għal base64 bil-claude-wire-format
(`ensureBase64ImagesForClaudeWire`), it-tnejn permezz ta’
`fetchRemoteImageAsDataUri()` f’`visionBridgeHelpers.ts` — id-data URI
riżultanti tgħaddi minn `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) qabel ma tiġi inkorporata fit-talba
lill-mudell tal-viżjoni. Immaġnijiet kbar wisq jitnaqqsu għal **tarf twil ta’
2048px** (b’konformità mal-limitu tar-resize li OpenAI/Anthropic diġà japplikaw
fuq in-naħa tas-server), u dan inaqqas il-bytes/latency tal-upload mingħajr ma
jibdel dak li jara l-mudell tal-viżjoni. Ir-resize juża `sharp`, mgħobbi permezz
ta’ dynamic import: fuq pjattaforma fejn il-binary nattiv tiegħu jonqos milli
jitgħabba, `normalizeDataUri()` **qatt ma jitfa’ eċċezzjoni** — jaqleb għal
passthrough tal-bytes oriġinali, sabiex il-fluss tad-deskrizzjoni/konverżjoni
għal base64 jibqa’ dejjem jaħdem. Bytes li mhumiex immaġni (fetch li ma
rritornax immaġni li tista’ tiġi dekodifikata) jgħaddu wkoll mingħajr tibdil.
Din in-normalizzazzjoni hija limitata għall-immaġnijiet li l-bridge jiffetchja
għas-self-call tiegħu stess — qatt ma tiġi applikata għall-payload raw
passthrough tal-caller, b’mod konsistenti mal-prinċipju ta’ modifika
opt-in biss (Regola Stretta #20).

#### Schema tas-settings + migrazzjoni

Iċ-ċwievet il-ġodda `modalityBridge*` jiġu vvalidati minn Zod
f’`updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`):
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
it-trio `modalityBridgeCache*`, u l-grupp `modalityBridgeAudio*` użat
mill-Audio Bridge. Il-migrazzjoni `141_modality_bridge_settings.sql` tikkopja
l-valuri legacy eżistenti `visionBridge*` lejn iċ-ċwievet il-ġodda
korrispondenti (idempotenti, u qatt ma tissostitwixxi valur
`modalityBridge*` issettjat minn operatur); iċ-ċwievet legacy jibqgħu aċċettati
bħala fallback għall-qari għal ċiklu wieħed ta’ release.

#### Header tat-trasparenza + statistika

Ir-responses trasformati mid-deskrizzjoni jġorru
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(mibni minn `buildModalityBridgeHeader()` f’`modalityBridge/bridgeStats.ts`,
u miżjud minn `withModalityBridgeHeader()`
f’`src/sse/handlers/chatHelpers.ts`). Talbiet rerouted ma jirċievu **l-ebda**
header — il-payload ma ntmessx u l-bidla tal-mudell diġà tidher fil-field
`model` tal-body tar-response.

`GET /api/modality-bridge/stats` (awtentikazzjoni ta' ġestjoni, fl-istess livell bħal
`GET /api/settings`) jirritorna l-counters fil-memorja għal kull modalità
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` għal `vision`, `audio`, u
`video`. `averageLatencyMs` juża `latencySamples`, mhux it-tentattivi kollha, bħala
d-diviżur tiegħu; operazzjoni mingħajr kejl tal-ħin ma toħloqx kampjun falz ta'
żero millisekondi. `bridged` jibqa' l-alias kompatibbli mal-verżjonijiet preċedenti għal
konverżjonijiet li rnexxew; tentattivi falluti ma jżiduhx.
Il-counters jiġu rrisettjati meta l-proċess jerġa' jibda, skont id-disinn
(telemetrija, mhux kontabbiltà).

#### Konfigurazzjoni tad-dashboard

Il-paġna ddedikata tad-dashboard hija
`/dashboard/settings/modality-bridge`. It-tabs tagħha `Vision`, `Audio`,
u `Video`, li jistgħu jiġu indirizzati permezz tal-URL, jippreservaw il-parametri tal-query waqt li
jibdlu l-valur `tab`.
It-tab Vision jesponi l-attivazzjoni, il-modalità, l-għażla tal-mudell (inkluża l-għażla
awtomatika predefinita), prompts konxji tal-kompitu, limiti avvanzati għat-timeout/l-immaġni/it-tul
tad-deskrizzjoni/il-cache, counters waqt l-eżekuzzjoni, u talba kampjun protetta.
It-tab Audio huwa wkoll attiv: jesponi l-attivazzjoni, selettur tal-mudell għal STT biss b'Auto,
limiti tat-timeout/tat-tul massimu tal-klipp, counters tal-awdjo, u test kampjun
`input_audio`. It-tab Video huwa funzjonali: jirrapporta l-istat waqt l-eżekuzzjoni
ta' FFmpeg/ffprobe — wieħed minn erba' stati espliċiti tal-UI (`unknown` waqt li
l-probe jkun għaddej jew ma setax jitlesta, `restricted` fuq host tad-dashboard li
mhux loopback fejn il-probe jinqabeż min-naħa tal-klijent, `unavailable` ladarba jkun sar il-probe
u tkun ġiet ikkonfermata l-assenza, jew `available` bil-verżjonijiet ta' FFmpeg/ffprobe) — jippersisti
l-limiti tal-attivazzjoni/tal-mudell/tal-frejms/tal-vidjo/tat-timeout, jiffiltra s-selettur tal-mudell għal
mudelli kapaċi jipproċessaw il-viżjoni, u jesponi counters tal-vidjo.

Il-kard preċedenti Vision Bridge taħt is-settings tal-AI hija link ta' kompatibbiltà għall-
paġna l-ġdida; ma għadx għandha t-tieni kopja tal-formola. Media Providers ukoll
jillinkja l-flussi tax-xogħol Image-to-Text u Speech-to-Text mat-tabs korrispondenti ta'
Modality Bridge mingħajr ma jneħħi l-playground eżistenti ta' Speech-to-Text.

**Bypass tal-ammissjoni għas-self-loop:** meta s-sejħa describe tgħaddi mis-
self-loop `/v1` ta' OmniRoute stess (mudell mhux standard tal-provider), is-sottotalba tibgħat
`x-omniroute-admission-bypass: internal` u tiġi awtentikata bil-kredenzjali riżolta
tas-self-loop — is-sentinel lokali `sk_omniroute` fil-modalità lokali, jew iċ-ċavetta env
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` kkonfigurata mill-operatur (#1350) sabiex
deployments b'`REQUIRE_API_KEY=true` xorta jkunu jistgħu jwettqu s-sejħa describe. Il-bypass
jiġi rrispettat biss għal dawk il-kredenzjali eżatti, għalhekk klijenti esterni ma jistgħux jużaw
il-header biex jaqbżu l-ammissjoni.

Il-valuri predefiniti legacy jinsabu f'`src/shared/constants/visionBridgeDefaults.ts`; il-
valuri predefiniti l-ġodda għall-modalità/għarfien tal-kompitu/cache u r-resolver tas-settings jinsabu f'
`src/shared/constants/modalityBridgeDefaults.ts`. Il-guardrail jesponi għażla tal-kostruttur
`deps` sabiex it-testijiet ikunu jistgħu jinjettaw implimentazzjonijiet foloz ta' `getSettings` u
`callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Jinterċetta talbiet taċ-chat li fihom awdjo qabel ma jaslu għand mira li mhijiex
magħrufa li taċċetta input tal-awdjo. Qatt ma jerġa' jidderieġi t-talba taċ-chat: il-partijiet tal-awdjo jiġu
traskritti permezz tal-endpoint multipart eżistenti kompatibbli ma' OpenAI u l-
mudell taċ-chat magħżul ikompli bit-traskrizzjonijiet testwali.

Fluss:

1. Irrisolvi `supportsAudio` permezz ta' `getResolvedModelCapabilities()`. Il-metadata espliċita
   tar-reġistru tal-provider tieħu preċedenza, segwita mill-metadata statika tal-mudell, u mbagħad minn
   `modalities_input` sinkronizzat. Lista ddikjarata tal-input mingħajr `audio` hija `false`; jekk ma jkunx
   hemm evidenza tal-kapaċità, il-valur jibqa' `null`. Kemm `false` kif ukoll `null` jattivaw il-
   bridge konservattiv, filwaqt li `true` jaqbżu.
2. Irrisolvi s-settings `modalityBridgeAudio*` u estratta partijiet tal-awdjo tal-ogħla livell li
   jistgħu jiġu konnessi minn kull messaġġ permezz tad-detector kondiviż `detectMediaParts()`.
   Il-formati appoġġjati fuq il-wire huma `input_audio` ta' OpenAI, `audio_url`, u
   `source.media_type: "audio/*"`. Awdjo nested jiġi identifikat għar-routing iżda ma
   jitneħħiex mill-passaġġ ta' splice. Ix-xogħol huwa limitat minn `modalityBridgeAudioMaxClips`;
   partijiet sussegwenti jibqgħu mhux mibdula.
3. Irrispetta `provider/model` ikkonfigurat, jew ħalli lil `selectAudioBridgeModel()` jgħaddi
   minn `AUDIO_TRANSCRIPTION_PROVIDERS` fl-ordni stabbli tal-katalgu u jagħżel l-ewwel
   mudell bi kredenzjali attiva u li tista' tintuża tal-provider.
4. `callAudioTranscription()` jikkonverti awdjo base64/data-URI f'`file` multipart,
   jew iniżżel `audio_url` remot permezz tal-protezzjoni outbound għal riżorsi pubbliċi biss
   b'DNS pinning u limitu ta' 25 MB. Imbagħad jibgħat POST bil-fajl u l-mudell magħżul
   lis-self-loop lokali `/v1/audio/transcriptions`, awtentikat b'
   `resolveSelfLoopBearer()`. Ir-rotta eżistenti tat-traskrizzjoni twettaq it-tfittxija normali
   tal-kredenzjali, l-immaniġġjar tal-cooldown/tal-limitu tar-rata, u d-dispaċċ lill-provider.
5. Sejħiet li jirnexxu jissostitwixxu l-partijiet tagħhom b'`[Audio N]: <transcript>`. Is-sejħiet
   jitwettqu b'`Promise.allSettled`: falliment individwali jippreserva dik il-parti oriġinali
   tal-awdjo (kuntratt #4012). Jekk kull sejħa tfalli u jkun ippruvat li l-mira għandha
   `supportsAudio === false`, il-partijiet isiru
   `[Audio N]: (unavailable — no STT provider connected)` (kuntratt #8430). Għal
   mira mhux magħrufa (`null`), riżultat fejn ifallu kollha jibqa' mhux mibdul. Mira li jkun ippruvat
   li taċċetta test biss u li ma jkollha l-ebda kredenzjali STT li tista' tintuża tirċievi l-istess stub
   espliċitu mingħajr ma tinħareġ sejħa tan-network.

Traskrizzjonijiet li jirnexxu jużaw il-cache LRU/TTL ta' Modality Bridge għall-proċess kollu. Iċ-
ċavetta tikkombina r-referenza tal-awdjo, it-tikketta stabbli tal-operazzjoni `audio-transcription`,
u l-mudell STT magħżul; il-fallimenti qatt ma jiġu cached. It-tentattivi tal-awdjo jaġġornaw
il-counters kondiviżi `bridged`, `cacheHits`, `failures`, u `lastUsedAt`.
Risposti trasformati jġorru
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; talbiet
mhux mibdula ma jirċevux segment ta' Audio Bridge.

Is-settings waqt l-eżekuzzjoni huma sostnuti mid-DB u vvalidati b'Zod:

| Ċavetta                       | Valur awtomatiku | Firxa                     |
| ----------------------------- | ---------------- | ------------------------- |
| `modalityBridgeAudioEnabled`  | `true`           | —                         |
| `modalityBridgeAudioModel`    | `""`             | Awtomatiku jew ID tal-STT |
| `modalityBridgeAudioTimeout`  | `60000`          | 1000–300000               |
| `modalityBridgeAudioMaxClips` | `3`              | 1–10                      |

Il-cache kondiviż jibqa’ kkontrollat minn `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, u `modalityBridgeCacheMaxEntries`.

### Pont tal-Vidjo (`videoBridge.ts`, `videoBridgePipeline.ts`)

Jinterċetta l-partijiet tal-vidjo tal-ogħla livell fil-`messages` ta’ Chat Completions u fl-`input`
tal-API Responses qabel ma tissejjaħ destinazzjoni mingħajr appoġġ nattiv magħruf għall-vidjo.
Il-forom appoġġati huma `input_video`, `video_url`, `video_source`, URLs HTTPS,
u URIs tad-data `data:video/*;base64,...`. Ismijiet sempliċi ta’ fajls fit-test ma jiġux ittrattati
bħala vidjo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) jieħu ħsieb il-perkors tat-talba,
il-verifika tal-kapaċità/politika, l-aggregazzjoni għal kull talba, u l-payload tar-rispons.
Ix-xogħol għal kull vidjo — l-akkwist, il-cache tar-riżultat sħiħ, id-deskrizzjoni ta’ sekwenza ta’
frejms (li tintegra kwalunkwe traskrizzjoni tal-awdjo ddikjarata minn min jagħmel is-sejħa), u
l-metriċi/interruzzjoni/tindif għal kull tentattiv — huwa moħbi wara `processVideoPart` f’
`videoBridgePipeline.ts`, li jissejjaħ darba għal kull parti tal-vidjo fil-loop ta’ `preCall`.
Dak il-modulu jiddefinixxi wkoll il-konfini espliċiti tal-ports `VideoMediaBrokerPort`
(l-akkwist tal-bytes u l-estrazzjoni ta’ frejms meħuda bħala kampjun), `VideoAudioTranscriptionPort`
(l-integrazzjoni ta’ traskrizzjoni tal-awdjo ddikjarata minn min jagħmel is-sejħa mal-captions tal-kampjuni), u
`VideoDrilldownPort` (il-konfini tal-persistenza għall-analiżi dettaljata tal-frejms; għadu mhux imqabbad ma’
`processVideoPart` — illum hija biss ir-rotta separata `/api/modality-bridge/video/drilldown`
li tikteb entrati ta’ analiżi dettaljata).

Il-perkors pubbliku tat-talba `/v1` qatt ma jimporta jew jinvoka subprocess. Vidjos remoti
jitniżżlu b’limitu ta’ 50 MiB; vidjos inline b’base64 għandhom limitu konservattiv ta’
36 MiB dekodifikati għal kull vidjo sabiex l-invilupp tal-mudell/messages/framing
ikun jista’ jibqa’ fil-limitu pubbliku ta’ ammissjoni għal talbiet JSON ta’ 50 MiB. It-tul inline
u l-istimi tad-daqs dekodifikat jiġu vverifikati qabel l-allokazzjoni. HTTPS huwa
meħtieġ fil-URL remot inizjali u f’kull ridirezzjoni, bl-użu tal-protezzjoni eżistenti
għal konnessjonijiet ħerġin pubbliċi biss b’DNS pinning. Imbagħad il-bytes jaqsmu eżattament il-konfini interni
tal-broker `POST /api/modality-bridge/video/extract`. Dik ir-rotta hija kemm
`LOCAL_ONLY` kif ukoll `SPAWN_CAPABLE`, taċċetta biss talba awtentikata għal kull proċess
minn loopback fdat, u qatt ma taċċetta URL, perkors tas-sistema tal-fajls, eżegwibbli,
jew lista ta’ argumenti. Il-pipeline tal-limitu tad-daqs tal-body tal-API u l-qarrej inkrementali tal-body
tal-handler jinfurzaw b’mod indipendenti limitu ta’ input ta’ 50 MiB għall-broker. Il-kju limitat tiegħu
jeżegwixxi estrazzjoni waħda kull darba, jippermetti erba’ xogħlijiet pendenti, u jillimita l-input pendenti għal
100 MiB.

Ġewwa l-broker, `ffprobe` jaqra fajl lokali privat; il-lista fissa ta’
formati permessi teskludi formati ta’ playlists u manifests. Għall-containers permessi tal-familja MOV,
ir-referenzi esterni għad-data MOV jibqgħu diżattivati b’mod awtomatiku, u l-kmand fiss
ma jagħżilx li jattivahom. Kemm `ffprobe` kif ukoll `ffmpeg` jużaw il-lista ta’ permessi tal-protokolli
`file` biss, thread wieħed, arrays fissi ta’ argumenti, l-ebda shell,
u eżegwibbli riżolti minn `PATH`. Streams ta’ stampi tal-qoxra mehmuża mhumiex
kandidati li jistgħu jintlagħbu. L-istrims kollha li jistgħu jintlagħbu jridu jissodisfaw il-limiti, u
stream predefinit espliċitu jingħata preferenza qabel il-fallback deterministiku bl-aktar indiċi baxx.
Il-vidjos huma limitati għal 600 sekonda, 8,192 pixel għal kull dimensjoni, u
33,554,432 pixel tas-sors. FFmpeg jieħu kampjun ta’ 1–16-il frejm JPEG mill-punti tan-nofs, inaqqas
ix-xifer it-twil għal mhux aktar minn 1,024 pixel mingħajr ma jkabbar inputs iżgħar, u
qatt ma jirċievi URL. It-teħid tal-kampjuni huwa `uniform` b’mod awtomatiku. Il-politiki fakultattivi
`scene_aware` u sperimentali `segment_aware` iwettqu pass fiss addizzjonali wieħed
ta’ FFmpeg fuq l-istream lokali diġà vvalidat, jagħżlu timestamps tax-xeni `showinfo`
b’limiti, u jirrikorru b’mod deterministiku għall-istess punti tan-nofs uniformi jekk id-detector ifalli,
jiskadi ż-żmien, l-output ikun iffurmat ħażin, jew is-sett tal-kandidati jkun vojt.
Il-modalità segment-aware talloka kampjuni tal-punti tan-nofs proporzjonalment għall-intervalli tax-xeni
vvalidati; l-evidenza segment-aware u l-imġiba tal-fallback huma
dettaljati hawn taħt. Il-limitu massimu ta’ 16-il frejm
jiġi applikat wara l-għażla f’kull politika. Meta talba scene-aware jkollha biss
baġit ta’ frejm wieħed, tuża l-punt tan-nofs uniformi tal-vidjo sħiħ attiv jew tat-tieqa ta’ fokus
u tirrapporta `policyEffective: uniform`: frejm wieħed magħżul minn xena
ma jistax jippreserva ż-żewġt itruf temporali. Min jagħmel is-sejħa jista’ b’mod fakultattiv jipprovdi
tieqa ta’ fokus finita (`start`/`end` f’sekondi); il-limiti jiġu ristretti għad-durata tal-midja,
twieqi maqlubin jew mhux finiti jiġu rrifjutati, u l-politiki kollha tat-teħid tal-kampjuni
jitwettqu biss fl-intervall normalizzat. It-tieqa li tirriżulta
tiġi inkluża fil-metadata tat-teħid tal-kampjuni u fil-prefiss tad-deskrizzjoni mhux fdat sabiex
il-mudelli downstream ikunu jistgħu jiddistingwu silta ffukata mil-linja kronoloġika sħiħa.

Il-fokus semantiku tal-captions huwa setting separat u espliċitu. Il-modalità ta’ analiżi
predefinita `full` tippreserva l-prompt eżistenti tal-frejms u qatt ma tibgħat it-test tat-talba
lill-mudell tal-captions. Fil-modalità `focused`, il-pont jaqra biss l-aħħar
`text`/`input_text` mhux vojt miktub mill-utent mill-istess container ta’ Chat jew Responses,
jinnormalizzah għal NFC, jgħaqqad il-karattri ta’ kontroll u l-ispazji,
u jillimitah għal 500 punt ta’ kodiċi Unicode. Riżultat vojt jirrikorri għall-
prompt eżatt ta’ `full`. Ħjiel li jista’ jintuża jiġi sserializzat bħala JSON fi blokka ddedikata
ta’ kuntest tal-utent mhux fdat u jista’ biss jagħti prijorità lil dettalji osservabbli; ma jistax
jissostitwixxi t-twissija separata kontra s-segwitu ta’ struzzjonijiet viżibbli
jew li jinstemgħu fil-midja. Il-fokus testwali qatt ma jiddeduċi `start`/`end` jew ibiddel
is-sampler temporali.

#### Evidenza strutturali tas-segment FU-07

`segment_aware` juża pass wieħed limitat ta’ preanaliżi fuq il-fluss lokali tal-vidjo li jkun diġà ġie vvalidat. Il-katina fissa tal-filtri l-ewwel tiskala għal wisa’ massimu ta’ 320 pixel, tindividwa bidliet fix-xena u intervalli ffriżati, u mbagħad tieħu kampjun ta’ frame wieħed kull sekonda biex tkejjel iċ-ċajpir, il-luma medja, u l-informazzjoni spazjali/temporali. Il-pass huwa limitat għal 600 kampjun strutturali, thread wieħed ta’ FFmpeg/filtru, l-istess allowlists tal-protokoll `file` biss u tal-containers, limitu ta’ 1 MiB għall-output tal-proċess, u massimu ta’ 30 sekonda fi ħdan l-abort/skadenza kondiviżi tal-broker. Hu qatt ma jaċċetta kmand, filtru, path, jew URL mit-talba.

Il-valuri strutturali huma evidenza deterministika mill-kampjunar, mhux fehim semantiku tal-vidjo. Ma jiddeduċux suġġetti, azzjonijiet, captions, diskors, jew l-intenzjoni tal-utent. Il-konfini tax-xeni u tal-iffriżar jiffurmaw segmenti; il-kopertura tal-iffriżar, iċ-ċajpir, l-esponiment, id-dettall spazjali, u l-bidla temporali jinfluwenzaw biss kif jitqassam il-baġit eżistenti ta’ 1–16-il frame. Segment kompletament iffriżat huwa limitat għal frame wieħed, filwaqt li segmenti mhux iffriżati jikkompetu għall-baġit li jifdal. Meta jkun hemm aktar konfini milli frames, tinżamm kopertura uniformi tat-timeline sabiex qtugħ rapidu fil-bidu ma jkunx jista’ jaħbi segment twil fl-aħħar. Il-konfini tax-xeni li jkunu fir-riżoluzzjoni ta’ analiżi ta’ sekonda waħda minn konfini tal-iffriżar jingħaqdu.

Filtri neqsin, evidenza malformata/vojta, żball fid-detector, jew timeout tal-preanaliżi limitata jfallu b’mod miftuħ għall-politika eżatta u uniformi tal-punt tan-nofs. Abort minn min jagħmel is-sejħa jew skadenza tal-broker ma jfallux b’mod miftuħ: itemmu s-subprocess li jkun għadu għaddej, jipprevjenu estrazzjoni sussegwenti tal-frames, u s-siġra temporanja privata titneħħa fi `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` jiġġenera fixtures reali u deterministiċi ta’ FFmpeg għall-iffrankar ta’ sejħiet tal-caption wara d-deduplicazzjoni, l-allokazzjoni tal-baġit għal moviment dens, evidenza ta’ ċajpir/esponiment/SI-TI, qtugħ rapidu b’parti twila fl-aħħar, u pożittivi foloz minn fade gradwali. Jirreġistra l-ħin reali tal-preanaliżi u, fejn `/usr/bin/time` ikun disponibbli, is-CPU tal-proċess child u l-ogħla RSS. Il-verifiki tal-kwalità tiegħu huma orakli strutturali biss. Il-kwalità tal-mudell reali tal-captions tibqa’ `HOLD` għax dan il-harness ma għandu l-ebda endpoint awtorizzat jew ġudikatur fiss. L-iffrankar monetarju wkoll jibqa’ `HOLD` sakemm `--caption-cost-per-call-usd` ma jipprovdix stima espliċita u pożittiva għal kull sejħa; l-iskript qatt ma jiffabrika ebda wieħed minn dawn ir-riżultati.

Kull frame huwa limitat għal 4 MiB, il-frames mhux ipproċessati kollha flimkien għal 23 MiB, u r-risposta serjalizzata tal-broker għal 32 MiB. Direttorju temporanju privat jitneħħa fi `finally`. OmniRoute ma jinkludix FFmpeg u ma jaċċettax path personalizzat għall-eżekutibbli. Qabel il-ħolqien tal-captions, il-bridge japplika pass konservattiv ta’ deduplicazzjoni viżiva: kull JPEG jitnaqqas għal buffer grayscale ta’ 16×16 u jitqabbel biss mal-aħħar frame li jkun inżamm. Għal baġit mitlub ta’ captions ta’ aktar minn frame wieħed, l-estrazzjoni tipprovdi pool limitat ta’ kandidati sa darbtejn dak il-baġit u qatt aktar minn 16-il frame. Il-limitu mitlub jiġi applikat biss wara d-deduplicazzjoni, bil-kandidati magħżula tal-bidu u tal-aħħar jinżammu waqt it-tnaqqis finali meta l-baġit ikun ta’ mill-inqas tnejn. Il-politika verżjonata
`grayscale-16x16-mean-cells-v2` tuża l-akbar wieħed bejn id-delta medja tal-luma u l-proporzjon taċ-ċelloli tat-thumbnail li d-delta normalizzata tagħhom tkun mill-inqas 0.05. Il-livell limitu għad-duplikati huwa l-kostanti 0.04, magħżul għall-prevedibbiltà aktar milli espost bħala setting waqt ir-runtime. Dan is-sinjal sekondarju
b’kuntrast għoli jippreserva moviment żgħir u bidliet fit-test viżibbli li tqabbil ibbażat biss fuq il-medja jista’ jaħbi. Żbalji fil-comparator jew fid-decoder ifallu b’mod miftuħ u jżommu l-kopertura. Il-metadata tal-output tissepara l-kandidati estratti, il-frames użati b’suċċess, u d-duplikati viżivi eliminati.

Parti tal-vidjo mmarkata b’mod espliċitu tista’ titlob contact sheet b’timestamps. Il-bridge jibni grilja JPEG b’massimu ta’ 4 kolonni u 16-il frame. Kull ċellola ta’ 512-il pixel tintegra t-timestamp tas-sors tagħha f’faxxa t’isfel b’kuntrast għoli, filwaqt li l-istess timestamps jibqgħu fil-metadata testwali għall-assoċjazzjoni u l-awditjar downstream. Il-JPEG komplut jibqa’ limitat għal 32 MiB. Jekk `sharp` ma jkunx jista’ jiddekowdja jew jikkomponi l-grilja, il-bridge jaqa’ lura għall-frames JPEG individwali; abort mill-client xorta jiġi propagat matul l-operazzjoni tas-sheet.

L-evidenza għall-promozzjoni hija deliberatament separata mill-mikrobenchmark sintetiku tal-kompożizzjoni. `scripts/perf/video-bridge-contact-sheet-eval.ts` jiddefinixxi harness A/B b’verżjoni tal-iskema għal mudelli reali tal-viżjoni kompatibbli ma’ OpenAI. Hu jkejjel it-tokens irrappurtati mill-provider, il-latency reali minn tarf sa tarf (inkluża l-kompożizzjoni tas-sheet), l-għadd ta’ sejħiet tal-mudell, u ż-żamma ta’ fatti ddefiniti mill-manifest. Ir-risposti mhux ipproċessati tal-mudell ma jinkitbux fir-rapport; jinżammu biss id-digests SHA-256 u l-IDs tal-fatti li jkunu qablu. Il-harness ma jagħmel ebda sejħa lin-network jew lil mudell bi ħlas sakemm ma jiġix mgħoddi `--execute-real` u ma jkunux ikkonfigurati `--model`, `OMNIROUTE_BASE_URL`, u `OMNIROUTE_API_KEY`. Mingħajr dik l-eżekuzzjoni reali u espliċita, il-verdett tiegħu li jista’ jinqara mill-magni jibqa’ `HOLD`; il-kejl sintetiku tal-payload/għadd ta’ sejħiet waħdu mhuwiex evidenza għall-promozzjoni.

Min jagħmel is-sejħa jista’ jehmeż array fakultattiv `transcript.cues` ma’ parti tal-vidjo appoġġjata meta diġà jkollu test allinjat. Kull cue jrid ikollu `text`, intervall finit `start`/`end` fi ħdan id-durata eżaminata, u `source` f’allowlist (`client`, `embedded`, jew `audio-bridge`); `confidence` għandu valur default ta’
`1` u jrid jibqa’ bejn `0` u `1`. Cues eżattament duplikati jingħaqdu. OmniRoute qatt ma jibda traskrizzjoni minn din il-metadata: cues ivvalidati jiġu kkupjati fir-riżultat deskritt flimkien mas-sors, il-kunfidenza, u l-intervall, u jiġu rrappreżentati bħala osservazzjonijiet mhux fdati flimkien mal-captions tal-frames. Test invalidu, barra mill-medda, jew mingħajr provenjenza jiġi miċħud minflok jitħallat fil-fluss tal-captions. Iż-żewġ kanali tat-traskrizzjoni fil-body tat-talba jinnormalizzaw il-provenjenza pprovduta għal `client`, inklużi labels `embedded` jew `audio-bridge` iddikjarati mill-klijent stess. Adapter proprjetà tas-server biss jista’ jassenja dawk il-labels fdati permezz tal-argument `trustedSource` disponibbli biss fil-code; field JSON tat-talba ma jistax jilħaq dak l-argument. It-test tat-traskrizzjoni jibqa’ kontenut mhux fdat derivat mill-media,
irrispettivament mill-provenjenza tiegħu, u qatt ma għandu jiddetermina l-awtorizzazzjoni.

Sejjieħ avvanzat jista’ jipprovdi track `audioTranscript` għall-istess video;
dan jiġi ttrattat bħala test ipprovdut mill-klijent, mhux bħala prova ta’ traskrizzjoni mis-server.
Il-punt ta’ fużjoni jmexxi l-osservazzjonijiet viżivi u awdjo taħt
skadenza waħda u sinjal ta’ abort wieħed, jordnahom fuq timeline komuni, jgħaqqad
duplikati eżatti, u jirrapporta riżultat parzjali meta jirnexxi naħa waħda biss.
`audioTranscript` invalidu jwassal għal dak ir-riżultat parzjali — id-deskrizzjoni
viżiva tinżamm u l-fergħa awdjo tirreġistra kodiċi ta’ falliment sanitizzat —
minflok ifalli l-video kollu. Id-disponibbiltà għal kull fergħa, il-bandiera ta’
riżultat parzjali, u l-kodiċijiet ta’ falliment sanitizzati jinżammu fir-riżultat
deskritt, fil-metadata tal-guardrail (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), fil-metadata tal-cache tar-riżultati, u fil-counters
tal-fużjoni tal-bridge. Il-mogħdija default tal-Video Bridge ma tinvokax speech-to-text
u lanqas ma tniżżel kopja oħra tal-media; mingħajr dak it-track espliċitu, tibqa’
video-only.

**Żamma tat-traskrizzjoni (#12150 P1).** Dan japplika awtomatikament kull meta
l-Video Bridge (li huwa nnifsu opt-in) jirrendi cue ta’ traskrizzjoni — ma hemm
ebda bandiera separata għaż-żamma. Meta request jirrendi kwalunkwe cue ta’
traskrizzjoni (`transcript` iddikjarat mis-sejjieħ jew `audioTranscript` magħqud),
il-guardrail jimmarkah bħala `videoBridgeObserved` u jipproduċi kopja parallela
redatta tad-deskrizzjoni tal-video — rendering identiku li fih il-body b’test
liberu ta’ kull cue jinbidel b’`[redacted-video-transcript]`, mibni billi jiġi
sostitwit il-field strutturat tal-cue qabel ma tintrama s-string (qatt billi jiġi
pparsjat it-test iċċattjat, sabiex ebda kontenut tal-cue — avversarju jew ordinarju,
inklużi bodies li fihom `]` bħal `[inaudible]`/`[music]` — ma jkun jista’ jibqa’).
Il-body tar-request fil-call log persistit jibdel kull parti ta’ test derivata
mill-video b’dik il-kopja parallela redatta, imqabbla skont l-ugwaljanza tal-kontenut;
l-anchor `fullText` jerġa’ jinqara mill-payload komplut tal-guardrail ta’ qabel
is-sejħa, sabiex it-tqabbil jibqa’ jirnexxi wara li guardrails sussegwenti
fil-katina (il-maskers tal-PII u tal-kredenzjali, prijoritajiet 10/95) jiktbu
mill-ġdid it-test tad-deskrizzjoni fil-post u wara li l-injezzjoni ta’
system-prompt/handoff/memory tfassal mill-ġdid l-array tal-messaġġi. Il-body
mibgħut upstream lill-mudell jibqa’ l-istess. Request osservat lanqas ma jimla
Memory durabbli (kemm l-estrazzjoni derivata mir-request kif ukoll dik derivata
mir-response jinqabżu), sabiex ir-risposta tal-mudell stess ma tkunx tista’
tirrepeti t-test tat-traskrizzjoni fil-Memory.

**Fields mhux ipproċessati tal-video (#12430).** Meta l-bridge ikun attivat u
s-support nattiv għall-video ma jkunx magħruf jew ikun nieqes, fields definiti
`transcript`/`audioTranscript` jattivaw ukoll `videoBridgeObserved`, anke wara
falliment fid-deskrizzjoni jew limitu `maxVideos`. `null` u strings vojta jgħoddu;
fields assenti u metadata mhux relatata mal-video ma jgħoddux. Kopji miżmuma
jirredattaw dawn il-fields jew iħallu barra r-request, u l-caches/Memory
jinqabżu.

F’dawk il-mogħdijiet ta’ fallback, cues validi tas-sejjieħ isiru partijiet
appoġġjati `text`/`input_text` minflok fields mhux standard tal-provider.
Iż-żewġ tracks ipprovduti mir-request jibqgħu osservazzjonijiet `client` mhux
fdati, bi twissija espliċita li l-video ma ġiex deskritt u li t-timestamps ma
ġewx ivverifikati mal-media. Il-limiti eżistenti ta’ 256 cue/64-KiB b’kollox u
għal kull cue japplikaw għaż-żewġ tracks flimkien; it-timestamps iridu joqogħdu
fil-limitu ta’ 600 sekonda tal-broker u fi kwalunkwe tieqa ta’ fokus ipprovduta.
Tracks invalidi jintremew u ma jiġux mgħoddija bħala test arbitrarju; track
ieħor validu xorta jista’ jintuża sakemm il-baġit ikkombinat tagħhom ma jinqabiżx.
Fields null/vojta ma jżidu ebda test. Dan il-fallback ma jżid ebda fetch tal-media
jew traskrizzjoni. Fields ta’ estensjoni tat-traskrizzjoni jitneħħew mill-carrier
tal-video tal-fallback u mill-oġġetti `video_url`/`source` tiegħu. L-allowlist
tal-wire ta’ OpenAI tibqa’ stretta; carriers tal-video b’appoġġ nattiv mhux
magħruf jibqgħu disponibbli u targets magħrufa bħala text-only iżommu markers
sikuri. Kopji paralleli ta’ redazzjoni strutturata jipproteġu t-test tat-traskrizzjoni
miżjud, filwaqt li r-request oriġinali tal-klijent jibqa’ l-istess. Targets
b’appoġġ nattiv u bridges diżattivati jżommu l-imġiba eżistenti tagħhom ta’
bypass.

Kopji miżmuma addizzjonali jużaw l-istess sinjal ta’ request osservat. L-istampa
mhux ipproċessata tar-request tal-klijent ta’ qabel il-guardrail, ir-request
pendenti fil-memory, u l-log bikri tar-request miċħud jissostitwixxu b’mod
strutturali l-fields tat-traskrizzjoni fil-partijiet tal-video; prompts fi
strings iġġenerati mill-istadji tal-pipeline u mill-context handoff jiġu redatti
fis-sink tal-body tar-request persistit. Il-marker persistit
`video_content_removed` jagħmel il-kontinwazzjoni b’`previous_response_id`
tagħlaq b’mod sikur minflok tirrikostitwixxi test li twarrab intenzjonalment.
Jekk request osservat jitlef il-kopja parallela tar-redazzjoni tiegħu għal kull
parti qabel il-logging, jew jekk anke waħda minn diversi kopji paralleli tal-video
ma jirnexxilhiex taqbel wara mutazzjonijiet sussegwenti tar-request, il-body
tar-request miżmum jitħalla barra għalkollox minflok tinżamm traskrizzjoni
parzjalment redatta.

Għal request osservat, response tal-mudell tista’ tikkwota kwalunkwe parti
mit-traskrizzjoni mingħajr konfini strutturati ta’ cue. Għalhekk, il-`responseBody`
tagħha fil-call log persistit jiġi sostitwit b’marker ta’ ommissjoni; l-artifact
dettaljat tal-pipeline (li jista’ jinkludi bodies upstream/tal-klijent u chunks
tal-stream) ma jinżammx. Il-caches semantiċi, tal-idempotency, u tar-reasoning-replay
jaqbżu l-qari u l-kitba għal dak ir-request. Ir-request tal-provider u r-response
viżibbli għall-klijent jibqgħu l-istess. Bytes bikrija tal-keepalive jitbattlu
mill-buffer temporanju meta l-artifact dettaljat jitħalla barra. It-twissija ta’
Kiro dwar EventStream iffurmat ħażin tirrapporta biss l-għadd ta’ bytes
tal-payload, qatt il-kontenut tiegħu jew l-iżball mhux ipproċessat tal-parser
tal-JSON.
Dan ma jallegax li kull dijanjostika mhux relatata ta’ provider/plugin ġiet
awditjata; l-istħarriġ usa’ tas-sinks miżmuma qed jiġi segwit f’#11658.

Iċ-ċiklu tal-ħajja intern ta’ `/api/modality-bridge/video/drilldown` huwa substrat separat
tal-cache, awtentikat permezz ta’ loopback/token. Kull operazzjoni teħtieġ ukoll
ID prinċipali opak u kanoniku. Qabel ma jiġi attivat komponent li jsejjaħlu fil-produzzjoni, dan irid
jidderiva dak l-ID mit-tenant awtentikat u qatt ma għandu jgħaddi
valur magħżul mill-klijent. Iċ-ċwievet tal-cache jorbtu dak il-prinċipal ma’ IDs kanoniċi tas-sessjoni u
tar-referenza tal-vidjo, jaħżnu biss iċ-ċwievet tagħhom idderivati permezz ta’ SHA-256, u jillimitaw kemm il-qari
kif ukoll it-tħassir għall-istess prinċipal. Il-cache taħżen mhux aktar minn 16-il frame JPEG idderivat
għal kull entrata, tiskadihom wara għaxar minuti, u tappoġġja qari limitat permezz ta’
`start`/`end` jew tħassir espliċitu tas-sessjoni.

Kull prinċipal huwa limitat għal 16-il entrata u 64 MiB ta’ data JPEG kanonika. Dawn
il-limiti huma indipendenti mil-limitu globali ta’ 64 entrata/256 MiB: il-pressjoni tal-kwota
tal-prinċipal tkeċċi biss l-entrati l-inqas użati reċentement ta’ dak il-prinċipal qabel ma
titqies l-evizzjoni LRU globali. L-entrati skaduti jitneħħew kemm mill-kontabilità tal-prinċipal kif ukoll
minn dik globali waqt l-attività tal-cache, filwaqt li l-kanċellazzjoni u l-falliment tal-validazzjoni ma
jikkonfermawx sostituzzjoni parzjali.

Il-cache tirrifjuta Base64 mhux kanoniku, padding eċċessiv, media mhux JPEG, JPEGs iffurmati ħażin jew
maqtugħin, u JPEGs li jipproduċu twissija waqt dekodifikazzjoni limitata tal-immaġni sħiħa b’`sharp`.
Din terġa’ tikkodifika kull immaġni aċċettata bħala JPEG kanoniku, tidderiva l-wisa’ u l-għoli
mill-bytes dekodifikati minflok ma tafda l-fields tal-komponent li jsejjaħ, u tarmi kwalunkwe
bytes polyglot żejda minflok ma żżommhom. Huwa biss il-buffer ikkompressat kanoniku u limitat
li jingħadd maż-żewġ kwoti. Il-limitu tal-wire JSON jinkludi l-overhead ta’ Base64 għal-limitu massimu ta’
32 MiB tal-input dekodifikat. Kull
derivazzjoni maħżuna tirreġistra l-format/riżoluzzjoni JPEG validati tagħha, il-politika ta’
sampling, il-verżjoni tad-derivazzjoni, il-ħin tal-ħolqien, il-hash tal-kontenut ikkalkulat mis-server,
u r-referenza ġenitur bil-hash flimkien mal-hash tal-kontenut ġenitur tal-komponent fdat li jsejjaħ.
Il-kanċellazzjoni tiġi ċċekkjata bejn il-fażijiet asinkroniċi ta’ dekodifikazzjoni/hash qabel il-commit
atomiku fil-cache.

Din il-porzjon għadha ma tikkonnettjax produttur tal-produzzjoni mar-route u ma
tipprovdix għażla ta’ varjanti b’riżoluzzjonijiet multipli. Għalhekk, il-path trasparenti tat-talba
tal-Video Bridge ma jġarrab ebda xogħol addizzjonali, filwaqt li d-derivazzjoni tal-prinċipal marbut
mat-tenant u ċ-ċiklu tal-ħajja sħiħ b’riżoluzzjonijiet multipli ta’ FU-08 jibqgħu xogħol ta’ segwitu
espliċitu minflok ma jiġu ddokumentati bħala mġiba kompluta.

Il-frames jingħataw captions b’mod sekwenzjali bil-mudell Video kkonfigurat. Override Video vojt
jiret is-setting Vision; jekk it-tnejn ikunu vojta, l-auto-router ta’ Vision
jagħżel il-mudell effettiv li jappoġġja l-viżjoni. Captions li jirnexxu
jissostitwixxu l-parti oriġinali bi prefiss stabbli `[Video description:` li wkoll
jimmarka t-test bħala osservazzjoni mhux fdata dderivata mill-media u jgħid lill-mudelli
downstream biex ma jsegwux struzzjonijiet misjuba fil-media. Iċ-ċwievet tal-cache tal-captions tal-frames
jinkludu l-bytes JPEG, il-prompt, it-timestamp, u l-mudell effettiv; huma biss
il-captions li jirnexxu li jinħażnu fil-cache. L-entrati tal-cache jżommu l-mudell produttur reali
li rnexxa, inkluż mudell ta’ fallback; il-bridge jirrapporta `mixed` meta frames differenti
jkunu ġew prodotti minn mudelli differenti. Cache hit jerġa’ juża dik l-identità tal-produttur
minflok ma jerġa’ jtikkettaha bħala l-pjan ta’ routing mitlub. Il-cache tar-riżultat tal-vidjo sħiħ
għandha ċavetta bbażata fuq kull input li jibdel l-output — il-prompt, il-mudell effettiv,
il-politika ta’ sampling, l-għadd ta’ frames, il-modalità tal-analiżi semantika, il-fingerprint SHA-256
tal-focus hint normalizzat, il-focus window, `transcript`,
`audioTranscript`, u l-flag tal-contact sheet — għalhekk, bidla fi kwalunkwe waħda minn dawk
id-dimensjonijiet hija cache miss, u qatt użu mill-ġdid ta’ data skaduta. Il-verżjoni tal-politika
tad-dedup viżwali, it-threshold, u l-għadd limitat ta’ candidate frames huma wkoll espliċiti fiċ-ċavetta
u l-metadata tal-cache tar-riżultati; għalhekk, bidla fil-politika ma tistax terġa’ tuża deskrizzjoni
skaduta tal-vidjo sħiħ. Il-metadata v4 tal-cache tar-riżultati żżomm il-modalità u
l-fingerprint, u qatt il-kompitu mhux ipproċessat tal-utent. Il-metadata tal-guardrail tirrapporta kemm
il-modalità tal-analiżi mitluba kif ukoll dik effettiva; modalità `focused` mitluba mingħajr
test tal-utent li jista’ jintuża tiġi rrappurtata bħala effettivament `full`.

Il-guardrail jestratta kull parti tal-vidjo appoġġjata iżda ma jiddeskrivix aktar minn
`modalityBridgeVideoMaxVideos`. Għal target li jkun ġie ppruvat li għandu
`supportsVideo === false`, vidjows li jfallu u dawk lil hinn mil-limitu jsiru markers espliċiti ta’
test sikur sabiex ma jibqa’ ebda vidjo mhux ipproċessat. Meta l-kapaċità ma tkunx magħrufa, dawk il-partijiet
iżommu l-video carrier tagħhom; kwalunkwe transcript ta’ fallback isegwi l-konverżjoni limitata
għal test imsemmija hawn fuq. Targets b’`supportsVideo === true` jevitaw il-bridge.
Is-sinjal ta’ abort tat-talba tal-klijent jiġi propagat matul id-download, il-kju tal-broker,
is-subprocesses, u s-sejħiet għall-captions; l-aborts jieqfu bejn vidjo u ieħor u qatt ma jfallu b’mod
li jippermettu media mhux ipproċessata.

Is-settings waqt ir-runtime huma sostnuti mid-DB u validati b’Zod:

| Ċavetta                             | Valur predefinit | Medda / imġiba                                                                                          |
| ----------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`          | Runtime fakultattiv, attivat b’mod espliċitu                                                            |
| `modalityBridgeVideoAnalysisMode`   | `"full"`         | `full` iżomm captions ġeneriċi; `focused` juża kuntest limitat u mhux fdat tal-aħħar utent              |
| `modalityBridgeVideoModel`          | `""`             | Jiret il-mudell tal-Vision Bridge                                                                       |
| `modalityBridgeVideoFrameCount`     | `8`              | 1–16                                                                                                    |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`      | `uniform`, `scene_aware`, jew `segment_aware` proporzjonali; jekk id-detettur ifalli, jintuża `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`              | 1–4                                                                                                     |
| `modalityBridgeVideoTimeout`        | `120000`         | 1000–120000 ms                                                                                          |

Il-valuri persistiti legacy tat-timeout tal-Vidjo li jaqbżu l-120 sekonda
jiġu limitati sad-deadline tal-broker; tentattivi ġodda biex jinkitbu settings
’il fuq minn dak il-limitu jiġu miċħuda.
`GET /api/modality-bridge/video/runtime` jeħtieġ lokalità loopback fdata u
ttimbrata qabel l-awtentikazzjoni jew l-ittestjar tar-runtime, u mbagħad jeħtieġ
awtentikazzjoni tal-ġestjoni. Jirritorna biss `available`, verżjonijiet
sanitizzati ta’ FFmpeg/ffprobe, u raġuni fissa meta r-runtime ma jkunx
disponibbli. L-endpoint intern tal-estrazzjoni mhuwiex API pubblika għat-tlugħ:
is-saturazzjoni tal-kju tirritorna `503` flimkien ma’ `Retry-After`, skonnessjoni
min-naħa tas-sejjieħ tirritorna `499`, u d-deadline fiss tal-broker jirritorna
`504`. It-tweġibiet ikkonvertiti jżidu
`video->text;model=<visionModel>;parts=<videos>` mal-header ċentrali
`x-omniroute-modality-bridge` mingħajr ma jneħħu s-segmenti tal-Vision jew
tal-Audio.

### Maskatur tal-PII (`piiMasker.ts`)

Jaħdem fiż-**żewġ** stadji.

- **`preCall`** jikklona l-payload, jgħaddi minn `system`, `messages`, `input`, u
  `prompt` (inklużi elementi li huma strings sempliċi), u japplika `processPII()` (minn
  `@/shared/utils/inputSanitizer`) għall-fields string `content`/`text`. Meta
  `PII_REDACTION_ENABLED=true`, il-PII identifikata tiġi redatta fil-payload
  li jintbagħat. Dan huwa indipendenti minn `INPUT_SANITIZER_MODE` (li jikkontrolla
  biss il-politika tal-injezzjoni fil-prompt). Meta r-redazzjoni tkun mitfija,
  is-sejħa tirreġistra l-għadd ta’ detezzjonijiet mingħajr ma tikteb mill-ġdid il-kontenut.
- **`postCall`** jagħmel deep clone tat-tweġiba, iħaddem `sanitizePIIResponse()` flimkien
  mal-maskatur għall-istruttura tal-Responses API (`maskResponsesOutput` — ikopri
  `output_text` u `output[].content[].text`). Jekk isseħħ xi redazzjoni,
  it-tweġiba modifikata tissostitwixxi dik oriġinali.

Il-guardrail qatt ma jimblokka; huwa biss jannota (`meta.detections`,
`meta.redacted`) jew jikteb mill-ġdid.

### Injezzjoni fil-Prompt (`promptInjection.ts`)

Jidentifika strutturi avversarjali f’kontenut ipprovdut mill-utent u jinforza
l-politika kkonfigurata. L-imġiba hija ddeterminata mill-varjabbli tal-ambjent u
mill-opzjonijiet tal-kostruttur:

| Setting              | Varjabbli tal-ambjent                                                                                  | Valur predefinit | Effett                                                                                                                                                                                                                                         |
| -------------------- | ------------------------------------------------------------------------------------------------------ | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Attivat              | `INPUT_SANITIZER_ENABLED`                                                                              | `true`           | Meta jkun `false`, il-guardrail jieqaf minnufih.                                                                                                                                                                                               |
| Modalità             | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                        | `warn`           | Politika tal-injezzjoni: `block`, `warn`, jew `log`. (`redact` huwa aċċettat għall-kompatibbiltà retroattiva iżda **ma** jneħħix it-test tal-injezzjoni; il-kitba mill-ġdid tal-PII fit-talba hija kkontrollata minn `PII_REDACTION_ENABLED`.) |
| Limitu tal-imblukkar | opzjoni `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`           | Is-severità minima meħtieġa għall-imblukkar. B’mod predefinit, severità medja tiġi osservata biss.                                                                                                                                             |

**Preċedenza tal-modalità** (`getMode`): `options.mode` tas-sejjieħ →
override tal-**feature flag fid-DB** għal `INJECTION_GUARD_MODE` (Dashboard →
Settings → Feature Flags) → varjabbli tal-ambjent `INJECTION_GUARD_MODE` →
varjabbli tal-ambjent `INPUT_SANITIZER_MODE` → `warn`. Għalhekk, override
mid-dashboard jieħu preċedenza fuq il-varjabbli tal-ambjent, sabiex l-UI tal-Feature
Flags tikkontrolla l-guard waqt li jkun qed jaħdem (mingħajr restart). Il-qari
mid-DB huwa fail-safe: jekk iseħħ żball, il-guard jerġa’ lura għall-imġiba bbażata
fuq l-ambjent, u meta ma jkun issettjat ebda override, l-imġiba tkun identika
għar-riżoluzzjoni bbażata biss fuq l-ambjent.

Sorsi tad-detezzjoni:

1. `sanitizeRequest()` minn `@/shared/utils/inputSanitizer` (sett kondiviż ta’
   detetturi li jintuża f’partijiet oħra tal-pipeline).
2. `DEFAULT_GUARD_PATTERNS` integrati (bħalissa `system_override_inline` u
   `markdown_system_block`, it-tnejn b’severità `high`).
3. `customPatterns` fakultattivi mgħoddija permezz tal-opzjonijiet tal-kostruttur
   (strings, regex, jew rekords `{ name, pattern, severity }`).

Meta `mode === "block"` **u** mill-inqas detezzjoni waħda tilħaq il-livell limitu
tas-severità, `preCall` jirritorna `{ block: true, message: "Request rejected:
suspicious content detected" }`. Fil-modi `warn`/`log`, il-guardrail jirreġistra
fil-log iżda jippermetti s-sejħa. Il-funzjoni awżiljarja kondiviża
`evaluatePromptInjection()` tiġi esportata wkoll għal min ikollu bżonn jevalwa
l-prompts mingħajr ma jgħaddi mir-reġistru.

**Limitu tal-iskannjar (v3.8.20):** id-ditekter jispezzjona biss l-**ewwel 16 KB**
tat-test magħqud tal-prompt — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes)
f’`src/shared/utils/inputSanitizer.ts`. Kemm `detectInjection()` kif ukoll
`evaluatePromptInjection()` jużaw `slice(0, MAX_INJECTION_SCAN_BYTES)` qabel ma
jħaddmu ċ-ċiklu tal-patterns. Id-direttivi tal-injezzjoni jkunu qrib il-bidu ta’
input, għalhekk dan jillimita l-użu tas-CPU/GC mir-regex fuq payloads ta’ mijiet
ta’ KB mingħajr ma jdgħajjef id-detezzjoni (ara #3932, #4041).

### Masker tal-Kredenzjali (`credentialMasker.ts`)

Jitħaddem fiż-**żewġ** stadji, l-aħħar fil-katina predefinita (prijorità `95`).
Jaħbi patterns magħrufa sew ta’ API keys / tokens sigrieti mill-payload li jkun
ħiereġ (il-kontenut tal-messaġġi, l-argumenti tas-sejħiet tal-għodod, ir-riżultati
tal-għodod) **u** mir-rispons tal-fornitur, sabiex kredenzjali mwaħħla fi prompt
(jew ripetuta lura minn riżultat ta’ għodda) ma tiġix żvelata lill-fornitur
upstream jew lura lill-klijent.

- **Biss b’opt-in**, bl-istess konvenzjoni bħall-ħabi tal-PII (qrib ir-Regola
  Stretta #20): diżattivat sakemm `settings.credentialRedactionEnabled === true`
  **jew** `CREDENTIAL_REDACTION_ENABLED=true`. Meta jkun mitfi, il-guardrail ma
  jagħmel xejn — qatt ma jimblokka u qatt ma jerġa’ jikteb.
- `redactCredentials()` jgħaddi mis-siġra kollha tal-payload/rispons
  (`walkValue()`, sikur kontra l-prototype pollution, sikur kontra ċ-ċikli
  permezz ta’ `WeakSet`) u jissostitwixxi l-qbil b’placeholder
  `[REDACTED:<type>]`, filwaqt li jikklona biss il-fergħat li fil-fatt inbidlu.
- `CREDENTIAL_PATTERNS` ikopri keys tal-fornituri tal-LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokens ta’ VCS/SaaS (GitHub,
  Slack, Linear, Notion, npm, Postman, Discord), keys tal-pagamenti (Stripe,
  Square), keys tal-cloud (AWS access key, Twilio, SendGrid, Mailgun), private
  keys / JWTs, connection strings li jkun fihom kredenzjali
  (`mongodb://user:pass@...`, eċċ.), u pattern ġeneriku għall-valur tal-header
  `Authorization`/`x-api-key`/`api-key`/`apikey`. Keys fil-forma ta’ headers
  (`authorization`, `x-api-key`, `api-key`, `apikey`) jinħbew strutturalment
  (il-valur biss, filwaqt li jinżamm il-prefiss tal-iskema bħal
  `Bearer `/`Basic `) minflok permezz tar-regex ġenerika tat-test.
- Il-guardrail qatt ma jimblokka; jerġa’ jikteb biss (`modifiedPayload` /
  `modifiedResponse`) u jannota (`meta.credentialsRedacted`, `meta.count`).

Kontroll kontra r-rigressjonijiet: `tests/unit/credential-masker-guardrail.test.ts`.

## Kuntratt Bażiku (`base.ts`)

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
  block?: boolean; // true jwaqqaf il-katina immedjatament
  message?: string; // jintwera meta jsir imblukkar
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // jiġi rritornat minn preCall biex jerġa' jikteb it-talba
  modifiedResponse?: TValue; // jiġi rritornat minn postCall biex jerġa' jikteb ir-rispons
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

Guardrail jindika "l-ebda bidla" billi jirritorna jew `void`, `{}`, jew
`{ block: false }`. Ir-ritorn ta' `modifiedPayload`/`modifiedResponse` jissostitwixxi
l-valur li jgħaddi mill-katina għall-guardrails sussegwenti.
`signal?: AbortSignal` jittrasmetti ċ-ċiklu tal-ħajja ta' min jagħmel is-sejħa lill-guardrails. L-abort ta' talba huwa l-eċċezzjoni intenzjonata ta' fail-open: il-pontijiet tal-midja jwaqqfu x-xogħol u jagħmlu t-tindif mingħajr ma jirrestawraw il-midja mhux ipproċessata lejn mira li hu magħruf li ma tappoġġjahiex.

## Reġistru (`registry.ts`)

Is-singleton `guardrailRegistry` jesponi:

- `register(guardrail)` — iżid guardrail (jew jissostitwih skont l-isem normalizzat) u
  jerġa' jordna skont `priority` axxendenti.
- `clear()` / `list()` — għodod ta' għajnuna amministrattivi.
- `runPreCallHooks(payload, context)` — jgħaddi mill-guardrails attivi, jgħaddi l-
  payload minn `modifiedPayload`, u jieqaf mal-ewwel `block: true`.
- `runPostCallHooks(response, context)` — l-istess fluss fuq in-naħa tar-rispons.
- `resetGuardrailsForTests({ registerDefaults })` — ineħħi l-istat u, b'mod fakultattiv,
  jerġa' jirreġistra l-valuri predefiniti għal iżolament nadif tat-testijiet.

Iż-żewġ runners jirritornaw `{ blocked, payload|response, results, guardrail?, message? }`
fejn `results` huwa array ta' rekords `GuardrailExecutionResult` li jinkludu
l-fields `blocked`, `skipped`, `modified`, `error`, u `meta` għal kull guardrail,
utli għat-traċċar.

### Diżattivazzjoni tal-Guardrails Għal Kull Talba

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` jiġbor lista
mingħajr duplikati ta' ismijiet ta' guardrails li għandhom jinqabżu għat-talba
attwali. Is-sorsi (kollha fakultattivi, kollha magħquda) huma:

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` fil-body tat-talba (fl-ogħla livell)
- `metadata.disabledGuardrails` fil-body tat-talba
- Il-header `x-omniroute-disabled-guardrails` (jew dak legat
  `x-disabled-guardrails`)

Il-valuri jistgħu jkunu arrays ta' strings jew string separata b'virgoli; l-ismijiet jiġu
normalizzati għal kebab-case b'ittri żgħar (`pii_masker` → `pii-masker`). Ir-riżultat
jgħaddi permezz ta' `context.disabledGuardrails` lir-reġistru, li jaqbeż
il-guardrails korrispondenti (`skipped: true` f'`results`).

## Ordni tal-Eżekuzzjoni

Għal kull talba li tgħaddi minn `src/sse/handlers/chat.ts` u
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` jibni l-lista ta’ elementi li għandhom jinqabżu mill-API key, mill-body,
   u mill-headers.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` iħaddem il-guardrails f’ordni axxendenti
   ta’ prijorità:
   - Il-guardrails diżattivati jiġu rreġistrati bħala `skipped`.
   - Il-`preCall` ta’ kull guardrail jista’ jerġa’ jikteb il-payload permezz ta’ `modifiedPayload`.
   - L-ewwel `block: true` iwaqqaf il-katina immedjatament u l-handler jirritorna
     risposta ta’ rifjut mill-guardrail.
3. Il-payload (li potenzjalment ikun inkiteb mill-ġdid) jgħaddi għar-routing ikkombinat u
   għad-dispatch upstream.
4. Wara li tiġi assemblata r-risposta, `guardrailRegistry.runPostCallHooks(...)`
   iħaddem l-istess katina fuq ir-risposta. `block: true` hawnhekk iwarrab ir-risposta
   upstream.

Guardrails li joħolqu eċċezzjoni jiġu rreġistrati b’`error: <message>` u jiddaħħlu fil-log permezz ta’
`logger.warn`, iżda l-katina tkompli — bid-disinn, f’każ ta’ falliment tippermetti li l-proċess ikompli.

## Konfigurazzjoni

Varjabbli tal-ambjent moqrija mill-guardrails integrati:

| Varjabbli                             | Użata minn                | Effett                                                                                                                        |
| ------------------------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Issettja għal `false` biex tiddiżattiva kompletament id-detezzjoni.                                                           |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Politika tal-injezzjoni: `warn`, `block`, jew `log`. Il-valur legacy `redact` ma jerġax jikteb it-test tal-injezzjoni.        |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Modalità għall-guard tal-injezzjoni; huwa wkoll feature flag fid-DB li **jissostitwixxi** l-varjabbli tal-ambjent (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Is-severità minima li `MODE=block` jirrifjuta: `high` (default), `medium`, jew `low`.                                         |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Alias legacy għal `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                          |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Meta jkun `true`, il-PII tat-talba jiġi redatt (indipendentement mill-modalità tal-injezzjoni).                               |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Jikkontrolla l-imġiba tal-masker fuq in-naħa tar-risposta.                                                                    |

Il-guardrails tal-Modality Bridge jaqraw il-konfigurazzjoni waqt l-eżekuzzjoni mill-ħażna tas-settings
ibbażata fuq id-DB (`getSettings()`), mhux mill-varjabbli tal-ambjent. Il-keys primarji ta’ Vision huma
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, u
`modalityBridgeCacheMaxEntries`. Il-keys legacy
`visionBridge*` jiġu aċċettati biss bħala l-fallback dokumentat għall-qari għal ċiklu wieħed;
il-kitbiet mid-dashboard jużaw il-keys primarji. Il-valuri default u r-resolver tal-fallback
jinsabu f’`src/shared/constants/modalityBridgeDefaults.ts`, filwaqt li l-kostanti legacy
jinżammu f’`src/shared/constants/visionBridgeDefaults.ts`.

Audio juża `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, u `modalityBridgeAudioMaxClips`, flimkien mas-settings kondiviżi
`modalityBridgeCache*`. Audio m’għandux fallback għal keys legacy minħabba li dawn
il-keys ġew introdotti mal-iskema tal-Modality Bridge.

Video juża `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, u
`modalityBridgeVideoTimeout`, flimkien mas-settings kondiviżi `modalityBridgeCache*`.
Huwa diżattivat b’mod default minħabba li FFmpeg/ffprobe huma dipendenzi operazzjonali
fakultattivi u l-ħolqien ta’ captions għall-frames iżid il-latenza u l-ispiża tal-mudell.

## Guardrails Personalizzati

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

Passi:

1. Oħloq `src/lib/guardrails/myGuardrail.ts` li jestendi `BaseGuardrail`.
2. Implimenta `preCall` u/jew `postCall`.
3. Jew irreġistrah waqt l-importazzjoni (żidu minn `registerDefaultGuardrails`) jew
   sejjaħ `guardrailRegistry.register(...)` waqt l-eżekuzzjoni — ir-reġistru jissostitwixxi
   kwalunkwe guardrail preċedenti bl-istess isem normalizzat.
4. Żid testijiet taħt `tests/unit/` (eżempji eżistenti:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Ittestjar

Uża `resetGuardrailsForTests()` bejn it-testijiet biex tibda minn stat magħruf.
Għaddi `{ registerDefaults: false }` biex tibda b’reġistru vojt u
rreġistra biss il-guardrails li qed jiġu ttestjati. Vision Bridge jaċċetta l-injezzjoni
tad-dipendenzi (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge jesponi
l-punti ta’ separazzjoni ekwivalenti għas-settings, il-kapaċitajiet, l-għażla tal-mudell STT, il-kontrolli
tal-kredenzjali, u t-traskrizzjoni. Għalhekk, it-testijiet jistgħu jeżerċitaw iż-żewġ flussi mingħajr aċċess
għad-DB jew għan-network.

## Ara Wkoll

- `src/lib/guardrails/` — implimentazzjoni
- `src/shared/utils/inputSanitizer.ts` — detettur kondiviż li jħaddem
  il-protezzjoni kontra l-injezzjoni fil-prompt u l-maskra tal-PII
- `src/shared/constants/visionBridgeDefaults.ts` — valuri predefiniti ta’ Vision Bridge u
  lista ta’ mudelli b’bridge obbligatorju
- `src/shared/constants/modalityBridgeDefaults.ts` — valuri predefiniti kondiviżi waqt l-eżekuzzjoni għal Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — saff ortogonali (circuit breaker, perjodi ta’ stennija)
- `docs/reference/ENVIRONMENT.md` — referenza sħiħa tal-varjabbli tal-ambjent

## Kopertura tar-rotot tal-protezzjoni kontra l-injezzjoni u red-team (Fażi 8 · Blokka D)

Il-protezzjoni kontra l-injezzjoni (`createInjectionGuard` / `withInjectionGuard`) tkopri r-rotot kollha
li jaċċettaw prompts tal-utenti. Tirrispetta `INJECTION_GUARD_MODE` (il-valur predefinit `warn` = tirreġistra biss;
`block` = tirritorna HTTP 400 `SECURITY_001`).

| Tip              | Rotot                                                                                                                                                | Modalità predefinita |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| Test (eżistenti) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                 |
| Ġenerattiv       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                 |
| Data             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                 |

L-estrazzjoni tat-test (`extractMessageContents`) tkopri `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (kull lejl, `nightly-llm-security.yml`):** promptfoo jivvalida li kull rotta timblokka
l-korpus OWASP-LLM meta `INJECTION_GUARD_MODE=block`; garak iħaddem probes (jinqabeż mingħajr secret).
`moderations` huwa inkluż għall-konsistenza — l-operaturi fil-modalità ta’ mblukkar jistgħu jeżentawh permezz ta’
`resolveDisabledGuardrails`.

Il-workflow ta’ kull lejl (`.github/workflows/nightly-llm-security.yml`, cron + attivazzjoni
manwali) għandu żewġ jobs:

- **`promptfoo-guard` (blokkanti)** — iħaddem `promptfoo eval -c promptfooconfig.yaml`
  b’`INJECTION_GUARD_MODE=block`. Kull każ avversarju (eż. "ignore all
  previous instructions…", jailbreaks tal-istil DAN) jivverifika li r-risposta ġġorr
  `error.code === "SECURITY_001"`, jiġifieri li l-protezzjoni fil-fatt irrifjutat it-talba.
- **`garak` (konsultattiv)** — iħaddem garak `--probes promptinject,dan,leakreplay`
  kontra istanza lokali ta’ OmniRoute (`http://localhost:20128/v1`). Huwa kkundizzjonat minn
  secret tal-fornitur (`PROMPTFOO_PROVIDER_KEY`); jinqabeż mingħajr problemi u għandu s-suffiss
  `|| true`, għalhekk jirrapporta mingħajr ma jfalli s-CI.

Il-kopertura tal-helper tal-protezzjoni (`createInjectionGuard` / `withInjectionGuard`)
testendi għal kull rotta `/v1` li ġġorr prompt; it-test tal-prompt jittieħed minn
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` minn
`extractMessageContents()` f’`src/shared/utils/inputSanitizer.ts`.
