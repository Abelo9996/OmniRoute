# Guardrails (Latviešu)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Patiesības avots:** `src/lib/guardrails/`
> **Pēdējoreiz atjaunināts:** 2026-08-29 — v3.8.51 (Video Bridge transkripta izcelsmi deklarē izsaucējs,
> serveris to vēl nepārbauda — precizēts saskaņā ar #11661)

Aizsargmehānismi nodrošina drošības, politiku un satura transformāciju ievērošanu uz robežas
starp OmniRoute un augšupējiem pakalpojumu sniedzējiem. Katrs aizsargmehānisms var pārbaudīt (un
pēc izvēles noraidīt, transformēt vai anotēt) pieprasījumu lietderīgo slodzi (`preCall`) un
augšupējās atbildes (`postCall`).

Sistēma ir **kļūmju gadījumā atvērta**: ja aizsargmehānisma izpildes laikā rodas izņēmums, reģistrs
reģistrē kļūdu un turpina ar nākamo aizsargmehānismu, nevis izraisa pieprasījuma
kļūmi. Bloķēšana ir apzināts lēmums (`block: true`), nevis nejaušība.

## Iebūvētie aizsargmehānismi

Importēšanas laikā reģistrs prioritāšu secībā automātiski ielādē sešus aizsargmehānismus
(skatiet `registry.ts` → `registerDefaultGuardrails()`):

| Prioritāte | Nosaukums           | Posms(-i)      | Fails                 |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Mazāki prioritātes skaitļi tiek izpildīti **vispirms**.

### Attēlu tilts (`visionBridge.ts`) — modalitāšu tilts PR-1

Pārtver attēlus saturošus pieprasījumus, kas paredzēti **modeļiem bez attēlu apstrādes iespējām**, un vai nu
novirza visu pieprasījumu uz modeli ar attēlu apstrādes iespējām, vai pirms
augšupstraumes izsaukuma aizstāj attēlu daļas ar teksta aprakstiem, ko izveido
konfigurējams attēlu modelis. Tas ļauj tikai tekstu apstrādājošiem nodrošinātājiem
caurskatāmi apstrādāt multimodālas lietderīgās slodzes.

Plūsma:

1. Izlaist, ja mērķa modelis jau atbalsta attēlu apstrādi (ja vien tas nav iekļauts
   piespiedu tilta sarakstā `isVisionBridgeForcedModel`).
2. Izgūt attēlu daļas, izmantojot `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), kas deleģē darbu **vienotajam multivides
   detektoram** `detectMediaParts()` failā `open-sse/utils/mediaParts.ts` — tas ir
   vienīgais patiesības avots, ko izmanto arī kombināciju saderības filtrs.
   Izgūšana, izmantojot atļauto sarakstu, tiek ierobežota līdz augstākā līmeņa daļām ar tādām
   formām, kuras `replaceImageParts` var ievietot atpakaļ (izgūšanas↔aizstāšanas līgums): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` un Responses API `input_image`. Ligzdoti trāpījumi un
   tikai indikatorus saturošas formas ir paredzētas kombināciju filtram un nekad netiek izgūtas.
   Izlaist, ja nekas nav atrasts.
3. Noteikt izpildlaika konfigurāciju, izmantojot `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): jaunajām `modalityBridge*`
   iestatījumu atslēgām ir priekšroka; mantotās `visionBridge*` atslēgas paliek kā **viena cikla
   atkāpšanās variants** (atritināšanas logs). Ja tilts ir atspējots, izlaist pirms jebkādas
   multivides pārskatīšanas.
4. Režīma atlasītājs (`modalityBridgeVisionMode`, skatiet tālāk esošo tabulu) nosaka,
   vai veikt novirzīšanu vai aprakstīšanu. Novirzīšana atgriež `modifiedPayload`, kurā nomainīts tikai `model`,
   kā arī metadatus `{ rerouted, fromModel, toModel, imagesKept }`.
5. Aprakstīšanas ceļš: ierobežo attēlu skaitu līdz `maxImages`, izveido uzdevumam pielāgotu uzvedni,
   pārbauda aprakstu kešatmiņu, izsauc attēlu modeli **paralēli**
   (`Promise.allSettled`) un to vietā ievieto teksta daļas `[Image N]: <description>`.
   Ja aprakstīšana neizdodas, tiek iegūts `null`, un sākotnējā attēla daļa tiek
   **saglabāta** (#4012), izņemot kombinētās aprakstīšanas ceļu, kad nav izdevies
   neviens aprakstīšanas mēģinājums; šādā gadījumā apstiprināta augšupstraume bez attēlu apstrādes iespējām saņem
   aizstājējtekstu `(unavailable — no vision-capable provider connected)` (#8430).
6. Atgriezt `modifiedPayload` un metadatus (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Režīma atlasītājs (`modalityBridgeVisionMode`)

| Režīms     | Noklusējums | Darbība                                                                                                                                                                                                                                                                                                                                                   |
| ---------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔           | Mantotā heiristika bez izmaiņām (#6640/#7204): modeļi, kas nav kombinētie modeļi vai `auto/` modeļi, tiek novirzīti uz labāko attēlu modeli, ja vien sākotnējam modelim jau nav izmantojamu akreditācijas datu (tad tiek veikta aprakstīšana); kombinētajiem mērķiem vienmēr tiek veikta aprakstīšana.                                                    |
| `describe` |             | Vienmēr veikt aprakstīšanu — novirzīšanas bloks tiek pilnībā izlaists; vienmēr atbild lietotāja izvēlētais modelis.                                                                                                                                                                                                                                       |
| `reroute`  |             | Piespiedu novirzīšana: aizsardzība, kas patur modeli ar akreditācijas datiem, tiek apieta. Novirzīšanas **mērķa** akreditācijas datu aizsardzība joprojām ir spēkā — ja nav pieejams izmantojams attēlu apstrādes mērķis, pieprasījums pāriet uz aprakstīšanu, lai neapstrādāti attēli nekad nenonāktu tikai tekstu apstrādājošā aizmugursistēmā (#8430). |

Piespiedu režīmi veic īsslēguma atgriešanu **pirms** automātiskās heiristikas izpildes; `auto` darbība
baitu līmenī ir identiska aizsargmehānismam pirms PR-1.

#### API atslēgas tvērums (`visionBridgeKeyScope.ts`)

Ja izsaucēja API atslēga ierobežo `allowedConnections`, kvotu kopas
(`allowedQuotas`) vai modeļus (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), tilts novirzīšanai
un aprakstīšanai izvēlas tikai tādus modeļus un savienojumus, kurus atslēga drīkst izmantot.
Pēc tam aprakstīšanas izsaukums vienmēr tiek veikts, izmantojot OmniRoute pašcilpu ar
galveni `x-omniroute-self-loop-key-id`, lai saņemošais tērzēšanas pieprasījums
vēlreiz piemērotu šīs atslēgas savienojumu un modeļu politiku. `enforceApiKeyPolicy()`
ņem vērā šo galveni tikai kopā ar pašcilpas nesēja pilnvarojumu, tāpēc tā var
tikai sašaurināt piekļuvi, un identifikators, kuru nevar atrisināt, tiek noraidīts.

Ja atslēgai nav atļauts neviens attēlu modelis, aprakstīšanas ceļš atkāpjas un
pieprasījums tiek pārsūtīts bez izmaiņām — tā ir tā pati kļūmes gadījumā atvērtā darbība kā atspējotam
aizsargmehānismam (metadati `{ skipped: true, reason: "no_permitted_vision_model" }`).
Pieprasījumi bez atslēgas un atslēgas bez šiem ierobežojumiem darbojas tieši tāpat
kā iepriekš.

#### Uzdevumam pielāgota aprakstīšanas uzvedne (`modalityBridgeVisionTaskAware`)

Noklusējums ir **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) pamata
aprakstīšanas uzvednei pievieno **pēdējā lietotāja ziņojuma** tekstu (saīsinātu
līdz 500 rakstzīmēm), ievirzot aprakstu uz to, ko lietotājs patiesībā vaicāja
(codex-vision-proxy paraugs), un lūdzot redzes modelim transkribēt redzamo
tekstu. Ja karodziņš ir izslēgts vai lietotāja teksta nav, pamata uzvedne tiek
izmantota bez izmaiņām.

Aprakstīšanas pašcilpa savā OpenAI saderīgajā pieprasījumā (`callVisionModelSingle()`
failā `visionBridgeHelpers.ts`) vienmēr pieprasa `image_url.detail: "high"` —
bez nosacījumiem, katram izsaucējam/pakalpojumu sniedzējam un neatkarīgi no
jebkāda klienta signāla. Zemas detalizācijas paraugošana pasliktina OCR
precizitāti tieši tam teksta transkribēšanas uzdevumam, kuru pieprasa šī
uzvedne, tāpēc pats aprakstīšanas izsaukums vienmēr pieprasa augstu
detalizāciju neatkarīgi no tā, kāds detalizācijas līmenis tika izmantots
sākotnējā ienākošajā pieprasījumā. Tas ietekmē tikai iekšējā aprakstīšanas
pieprasījuma pamattekstu; tas nemaina veidu, kā OmniRoute pārsūta izsaucēja
`image_url.detail` primārajā pieprasījumā — šī noklusējuma vērtība tiek
piemērota atsevišķi un tikai noteiktajiem OpenCode klientiem funkcijā
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Aprakstīšanas pašcilpas Anthropic vadu formāta atzarā nav lauka `detail`, un
neviens no šiem noklusējumiem to neietekmē.

#### Apraksta izvades ierobežojums (`modalityBridgeVisionMaxChars`)

| Atslēga                        | Noklusējums | Diapazons         |
| ------------------------------ | ----------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`         | `0` vai 100–50000 |

`0` (noklusējums) nozīmē, ka **ierobežojuma nav** — `callVisionModel()`
atgrieztais apraksts tiek nodots tālāk bez izmaiņām, saglabājot esošo
darbību. Jebkura vērtība diapazonā 100–50000 saīsina aprakstu, pievienojot
sufiksu `…`, pirms tas tiek ievietots atpakaļ kā
`[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` failā
`src/lib/guardrails/visionBridge.ts`). Palieliniet šo vērtību detalizētiem OCR
uzdevumiem, kuros pakārtotajam modelim nepieciešama pilna transkripcija;
samaziniet to, lai ierobežotu tokenu lietojumu runīgiem redzes modeļiem.
Informācijas paneļa lauks atrodas cilnes Vision panelī Advanced
(`modality-bridge-max-chars` failā `ModalityBridgeVisionTab.tsx`) un jebkuru
vērtību no 1 līdz 99 paaugstina līdz minimālajai vērtībai 100, vienlaikus
atstājot skaidri norādītu `0` neskartu — `0` pati par sevi ir derīga Zod
vērtība (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`),
nevis tikai noklusējums „nav iestatīts”.

#### Aprakstu kešatmiņa (`modalityBridge/bridgeCache.ts`)

Procesa mērogā koplietota atmiņas LRU + TTL kešatmiņa aprakstu izvadei.
Atslēga = `sha256(imageRef + composedPrompt + configuredBridgeModel)` ar
garuma prefiksa ietvarošanu (bez lauku robežu kolīzijām). Modeļa komponents
ir **konfigurētais** tilta modelis, nevis modelis, kas faktiski atbildēja —
`callVisionModel` iekšēji var izmantot rezerves variantu, un atslēgu veidošana
katram mēģinājumam sadrumstalotu kešatmiņu. Neizdevušies aprakstīšanas
mēģinājumi nekad netiek kešoti. Iestatījumi:

| Atslēga                         | Noklusējums | Diapazons |
| ------------------------------- | ----------- | --------- |
| `modalityBridgeCacheEnabled`    | `true`      | —         |
| `modalityBridgeCacheTtlMinutes` | `60`        | 1–1440    |
| `modalityBridgeCacheMaxEntries` | `200`       | 10–5000   |

#### Attālo attēlu normalizēšana (pašcilpas aprakstīšana/base64 iegūšana)

Kad tilts pats iegūst **attālu** attēlu — Anthropic aprakstīšanas
pašizsaukumam un claude vadu formāta base64 pārveidošanai
(`ensureBase64ImagesForClaudeWire`), abos gadījumos izmantojot
`fetchRemoteImageAsDataUri()` failā `visionBridgeHelpers.ts` — iegūtais datu
URI pirms iegulšanas redzes modeļa pieprasījumā tiek nodots funkcijai
`normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`). Pārāk lieli attēli
tiek samazināti līdz **2048px garākajai malai** (atbilstoši izmēra
ierobežojumam, kuru OpenAI/Anthropic jau piemēro servera pusē), tādējādi
samazinot augšupielādes datu apjomu/latentumu, nemainot to, ko redz redzes
modelis. Izmēru maiņai tiek izmantots `sharp`, kas tiek ielādēts ar dinamisku
importēšanu: platformā, kurā neizdodas ielādēt tā vietējo bināro failu,
`normalizeDataUri()` **nekad neizmet kļūdu** — tā izmanto sākotnējo baitu
nemainītu pārsūtīšanu, tāpēc aprakstīšanas/base64 pārveidošanas ceļš vienmēr
turpina darboties. Arī dati, kas nav attēls (iegūšanas rezultāts, kurā nav
atkodējama attēla), tiek pārsūtīti bez izmaiņām. Šī normalizēšana attiecas
tikai uz attēliem, kurus tilts iegūst savam pašizsaukumam — tā nekad netiek
piemērota izsaucēja neapstrādātajai tranzīta datu slodzei, ievērojot tikai
pēc izvēles veiktu izmaiņu principu (stingrais noteikums Nr. 20).

#### Iestatījumu shēma + migrācija

Jaunās `modalityBridge*` atslēgas tiek validētas ar Zod shēmā
`updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`):
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCache*` trijotne un Audio Bridge izmantotā
`modalityBridgeAudio*` grupa. Migrācija `141_modality_bridge_settings.sql`
kopē esošās mantotās `visionBridge*` vērtības uz atbilstošajām jaunajām
atslēgām (idempotenti, nekad nepārrakstot operatora iestatītu
`modalityBridge*` vērtību); mantotās atslēgas vēl viena laidiena cikla laikā
joprojām tiek pieņemtas kā lasīšanas rezerves variants.

#### Caurspīdīguma galvene + statistika

Aprakstīšanas pārveidotajās atbildēs ir galvene
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(to izveido `buildModalityBridgeHeader()` failā
`modalityBridge/bridgeStats.ts`, un pievieno `withModalityBridgeHeader()`
failā `src/sse/handlers/chatHelpers.ts`). Pārmaršrutēti pieprasījumi
**nesaņem** galveni — datu slodze netika mainīta, un modeļa nomaiņa jau ir
redzama atbildes pamatteksta laukā `model`.

`GET /api/modality-bridge/stats` (pārvaldības autentifikācija, tāds pats līmenis kā
`GET /api/settings`) atgriež atmiņā glabātos katras modalitātes skaitītājus
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` modalitātēm `vision`, `audio` un
`video`. `averageLatencyMs` kā saucēju izmanto `latencySamples`, nevis visus
mēģinājumus; darbība bez laika mērījuma nerada mākslīgu nulles milisekunžu
paraugu. `bridged` joprojām ir atpakaļsaderīgs sekmīgu
konvertēšanu aizstājvārds; neveiksmīgi mēģinājumi to nepalielina.
Pēc procesa restartēšanas skaitītāji pēc noklusējuma tiek atiestatīti
(telemetrija, nevis uzskaite).

#### Informācijas paneļa konfigurācija

Īpašā informācijas paneļa lapa ir
`/dashboard/settings/modality-bridge`. Tās ar URL adresējamās cilnes `Vision`, `Audio`
un `Video`, pārslēdzot `tab` vērtību, saglabā vaicājuma parametrus.
Cilnē Vision ir pieejama iespējošana, režīms, modeļa atlase (tostarp automātiskais
noklusējums), uzdevumu ņemoša vērā uzvedņu veidošana, papildu taimauta, attēla,
apraksta garuma un kešatmiņas ierobežojumi, izpildlaika
skaitītāji un aizsargāts parauga pieprasījums. Arī cilne Audio ir aktīva: tajā ir
pieejama iespējošana, tikai STT modeļu atlasītājs ar opciju Auto, taimauta un
maksimālā klipa ierobežojumi, audio
skaitītāji un `input_audio` parauga tests. Cilne Video ir funkcionāla: tā parāda
FFmpeg/ffprobe izpildlaika stāvokli — vienu no četriem precīzi definētiem lietotāja
saskarnes stāvokļiem (`unknown`, kamēr pārbaude tiek veikta vai to nevarēja pabeigt,
`restricted`, ja informācijas paneļa resursdators nav atgriezeniskās cilpas
resursdators un pārbaude tiek izlaista klienta pusē, `unavailable`, kad pārbaude
ir pabeigta un ir apstiprināts, ka rīki nav pieejami, vai `available` ar
FFmpeg/ffprobe versijām) —, pastāvīgi saglabā iespjošanas, modeļa, kadru, video un
taimauta ierobežojumus, filtrē modeļu atlasītāju, atstājot modeļus ar attēlu
apstrādes iespējām, un parāda video skaitītājus.

Iepriekšējā Vision Bridge kartīte AI iestatījumos ir saderības saite uz
jauno lapu; tajā vairs nav otras veidlapas kopijas. Sadaļā Media Providers arī
ir saites no Image-to-Text un Speech-to-Text darbplūsmām uz attiecīgajām Modality
Bridge cilnēm, nenoņemot esošo Speech-to-Text izmēģinājumu vidi.

**Pašcilpas piekļuves pārbaudes apiešana:** ja aprakstīšanas izsaukums tiek maršrutēts caur paša OmniRoute
`/v1` pašcilpu (nestandarta nodrošinātāja modelis), apakšpieprasījums nosūta
`x-omniroute-admission-bypass: internal` un tiek autentificēts ar atrisināto
pašcilpas akreditācijas informāciju — lokālo `sk_omniroute` marķieri lokālajā režīmā vai
operatora konfigurēto `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` vides atslēgu (#1350), lai
izvietojumi ar `REQUIRE_API_KEY=true` joprojām varētu izpildīt aprakstīšanas izsaukumu. Apiešana
tiek pieņemta tikai ar tieši šo akreditācijas informāciju, tāpēc ārējie klienti nevar izmantot
galveni, lai izlaistu piekļuves pārbaudi.

Mantotās noklusējuma vērtības atrodas `src/shared/constants/visionBridgeDefaults.ts`;
jaunās režīma, uzdevumu ņemošās vērā darbības un kešatmiņas noklusējuma vērtības, kā arī iestatījumu atrisinātājs atrodas
`src/shared/constants/modalityBridgeDefaults.ts`. Aizsargmehānisms nodrošina
`deps` konstruktora opciju, lai testos varētu ievadīt viltotas `getSettings` un
`callVisionModel` implementācijas.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Pārtver tērzēšanas pieprasījumus ar audio, pirms tie sasniedz mērķi, par kuru nav
zināms, ka tas pieņem audio ievadi. Tas nekad nepārmaršrutē tērzēšanas pieprasījumu: audio daļas tiek
transkribētas, izmantojot esošo ar OpenAI saderīgo vairākdaļu galapunktu, un
izvēlētais tērzēšanas modelis turpina darbu ar teksta transkriptiem.

Plūsma:

1. Atrisiniet `supportsAudio`, izmantojot `getResolvedModelCapabilities()`. Vispirms tiek ņemti vērā
   precīzi definēti nodrošinātāju reģistra metadati, pēc tam statiskie modeļa metadati un visbeidzot sinhronizētie
   `modalities_input` dati. Deklarēts ievades saraksts bez `audio` nozīmē `false`; ja nav
   iespēju apliecinošu datu, vērtība paliek `null`. Gan `false`, gan `null` aktivizē
   konservatīvo tiltu, savukārt `true` to apiet.
2. Atrisiniet `modalityBridgeAudio*` iestatījumus un no katra ziņojuma iegūstiet savienojamas augstākā līmeņa
   audio daļas, izmantojot koplietoto `detectMediaParts()`
   detektoru. Atbalstītie datu formāti ir OpenAI `input_audio`, `audio_url` un
   `source.media_type: "audio/*"`. Ligzdots audio tiek konstatēts maršrutēšanai, bet
   savienošanas ceļš to nenoņem. Darba apjomu ierobežo `modalityBridgeAudioMaxClips`;
   vēlākās daļas paliek neskartas.
3. Izmantojiet konfigurēto `provider/model` vai ļaujiet `selectAudioBridgeModel()` secīgi pārbaudīt
   `AUDIO_TRANSCRIPTION_PROVIDERS` stabilā kataloga secībā un atlasīt pirmo
   modeli ar izmantojamu, aktīvu nodrošinātāja akreditācijas informāciju.
4. `callAudioTranscription()` pārveido base64/datu URI audio par vairākdaļu
   `file` vai lejupielādē attālo `audio_url`, izmantojot tikai publiskiem resursiem paredzēto izejošo savienojumu
   aizsargu ar DNS piesaisti un 25 MB ierobežojumu. Pēc tam tas ar POST nosūta failu un atlasīto
   modeli lokālajai `/v1/audio/transcriptions` pašcilpai, autentificējoties ar
   `resolveSelfLoopBearer()`. Esošais transkribēšanas maršruts veic parasto
   akreditācijas informācijas uzmeklēšanu, gaidstāves/rate-limit apstrādi un nosūtīšanu nodrošinātājam.
5. Sekmīgi izsaukumi aizstāj attiecīgās daļas ar `[Audio N]: <transcript>`. Izsaukumi
   tiek izpildīti ar `Promise.allSettled`: atsevišķas kļūmes gadījumā sākotnējā
   audio daļa tiek saglabāta (#4012 līgums). Ja neizdodas visi izsaukumi un ir pierādīts, ka mērķa
   `supportsAudio === false`, daļas tiek aizstātas ar
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 līgums). Nezināma
   mērķa (`null`) gadījumā pēc visu izsaukumu kļūmes saturs paliek neskarts. Pierādīti
   tikai tekstu atbalstošs mērķis bez izmantojamas STT akreditācijas informācijas saņem tādu pašu skaidru
   aizstājējtekstu, neveicot tīkla izsaukumu.

Sekmīgiem transkriptiem tiek izmantota visa procesa mēroga Modality Bridge LRU/TTL kešatmiņa.
Atslēga apvieno audio atsauci, stabilo `audio-transcription` darbības
etiķeti un atlasīto STT modeli; kļūmes nekad netiek kešotas. Audio mēģinājumi atjaunina
koplietotos `bridged`, `cacheHits`, `failures` un `lastUsedAt` skaitītājus.
Pārveidotajās atbildēs ir
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; neskarti
pieprasījumi nesaņem Audio Bridge segmentu.

Izpildlaika iestatījumi tiek glabāti datubāzē un validēti ar Zod:

| Atslēga                       | Noklusējums | Diapazons              |
| ----------------------------- | ----------- | ---------------------- |
| `modalityBridgeAudioEnabled`  | `true`      | —                      |
| `modalityBridgeAudioModel`    | `""`        | Automātiski vai STT ID |
| `modalityBridgeAudioTimeout`  | `60000`     | 1000–300000            |
| `modalityBridgeAudioMaxClips` | `3`         | 1–10                   |

Koplietojamo kešatmiņu joprojām kontrolē `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` un `modalityBridgeCacheMaxEntries`.

### Video tilts (`videoBridge.ts`, `videoBridgePipeline.ts`)

Pārtver augstākā līmeņa video daļas Chat Completions `messages` un Responses
API `input`, pirms tiek izsaukts mērķis bez zināma vietējā video atbalsta.
Atbalstītie formāti ir `input_video`, `video_url`, `video_source`, HTTPS URL
un `data:video/*;base64,...` datu URI. Vienkārši failu nosaukumi tekstā netiek
uzskatīti par video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) pārvalda pieprasījuma apstaigāšanu,
iespēju/politikas pārbaudi, katra pieprasījuma apkopošanu un atbildes lietderīgo slodzi.
Katra video apstrāde — iegūšana, visa rezultāta kešatmiņa, kadru secības
aprakstīšana (apvienojot to ar jebkuru izsaucēja norādītu audio transkripciju), kā
arī katra mēģinājuma metrika/pārtraukšana/tīrīšana — ir paslēpta aiz `processVideoPart`
modulī `videoBridgePipeline.ts`, kas `preCall` ciklā tiek izsaukta vienreiz katrai
video daļai. Šis modulis definē arī skaidri noteiktās portu robežas:
`VideoMediaBrokerPort` (baitu iegūšanai un atlasīto kadru izgūšanai),
`VideoAudioTranscriptionPort` (izsaucēja norādītas audio transkripcijas apvienošanai
ar atlasīto kadru parakstiem) un `VideoDrilldownPort` (kadru detalizētās izpētes
saglabāšanas robeža; tā vēl nav pieslēgta `processVideoPart` — pašlaik detalizētās
izpētes ierakstus veido tikai atsevišķais maršruts
`/api/modality-bridge/video/drilldown`).

Publiskais `/v1` pieprasījuma ceļš nekad neimportē un neizsauc apakšprocesu. Attālie
video tiek lejupielādēti ar 50 MiB ierobežojumu; iekļautajiem base64 video ir
konservatīvs 36 MiB atkodēto datu ierobežojums katram video, lai
modeļa/ziņojumu/kadrēšanas ietvars iekļautos publiskā JSON pieprasījuma pieņemšanas
ierobežojumā — 50 MiB. Iekļauto datu garums un aplēstais atkodētais izmērs tiek
pārbaudīts pirms atmiņas piešķiršanas. HTTPS ir obligāts gan sākotnējam attālajam
URL, gan katrai pāradresācijai, izmantojot esošo tikai publiskiem resursiem paredzēto
izejošo savienojumu aizsardzību ar DNS piesaisti. Pēc tam baiti šķērso precīzo
iekšējā starpnieka robežu `POST /api/modality-bridge/video/extract`. Šis maršruts ir
gan `LOCAL_ONLY`, gan `SPAWN_CAPABLE`, pieņem tikai katram procesam autentificētu
pieprasījumu no uzticamas lokālās atgriezeniskās cilpas un nekad nepieņem URL, failu
sistēmas ceļu, izpildāmo failu vai argumentu sarakstu. API ķermeņa izmēra apstrādes
konveijers un apdarinātāja inkrementālais ķermeņa lasītājs neatkarīgi viens no otra
ievieš starpnieka ievades ierobežojumu — 50 MiB. Tā ierobežotā rinda vienlaikus
izpilda vienu izgūšanas darbu, pieļauj četrus gaidošus darbus un ierobežo gaidošo
ievades datu apjomu līdz 100 MiB.

Starpnieka iekšienē `ffprobe` nolasa privātu lokālu failu; fiksētais formātu
atļaušanas saraksts neietver atskaņošanas sarakstu un manifestu formātus. Atļautajiem
MOV saimes konteineriem ārējās MOV datu atsauces pēc noklusējuma paliek atspējotas,
un fiksētā komanda tās neiespējo. Gan `ffprobe`, gan `ffmpeg` izmanto tikai `file`
protokolu atļaušanas sarakstu, vienu pavedienu, fiksētus argumentu masīvus, neizmanto
čaulu un izpildāmos failus atrod, izmantojot `PATH`. Pievienoto vāka attēlu straumes
netiek uzskatītas par atskaņojamām kandidātēm. Visām atskaņojamajām straumēm jāatbilst
ierobežojumiem, un pirms deterministiskas atkāpšanās uz straumi ar zemāko indeksu
priekšroka tiek dota skaidri norādītai noklusējuma straumei. Video ilgums ir
ierobežots līdz 600 sekundēm, katra dimensija — līdz 8,192 pikseļiem, bet avota
pikseļu skaits — līdz 33,554,432. FFmpeg atlasa 1–16 JPEG kadrus intervālu viduspunktos,
samazina garāko malu līdz ne vairāk kā 1,024 pikseļiem, nepalielinot mazākus ievades
attēlus, un nekad nesaņem URL. Pēc noklusējuma atlases politika ir `uniform`.
Neobligātās `scene_aware` un eksperimentālā `segment_aware` politikas veic vienu
papildu fiksētu FFmpeg gājienu pār jau validēto lokālo straumi, atlasa ierobežotu
skaitu `showinfo` ainu laikspiedolu un detektora kļūmes, taimauta, nederīgas izvades
vai tukšas kandidātu kopas gadījumā deterministiski atkāpjas uz tiem pašiem
vienmērīgajiem viduspunktiem. Segmentus ņemošais režīms piešķir viduspunktu paraugus
proporcionāli validētajiem ainu intervāliem; segmentus ņemošā režīma pierādījumi un
atkāpšanās darbība ir detalizēti aprakstīti tālāk. Stingrais 16 kadru ierobežojums
pēc atlases tiek piemērots katrai politikai. Ja ainas ņemošam pieprasījumam ir tikai
viena kadra budžets, tas izmanto aktīvā pilna video vai fokusa loga vienmērīgo
viduspunktu un ziņo `policyEffective: uniform`: viens atlasīts ainas kadrs nevar
saglabāt abus laika diapazona galus. Izsaucējs pēc izvēles var norādīt galīgu fokusa
logu (`start`/`end` sekundēs); robežas tiek ierobežotas līdz multivides ilgumam,
apgriezti vai neierobežoti logi tiek noraidīti, un visas atlases politikas tiek
izpildītas tikai normalizētajā intervālā. Iegūtais logs tiek iekļauts atlases
metadatos un neuzticamajā apraksta prefiksā, lai lejupstreama modeļi varētu atšķirt
fokusētu fragmentu no pilnas laika skalas.

Semantiskais parakstu fokuss ir atsevišķs, skaidri norādīts iestatījums. Noklusējuma
`full` analīzes režīms saglabā esošo kadru uzvedni un nekad nepārsūta pieprasījuma
tekstu parakstu modelim. Režīmā `focused` tilts nolasa tikai jaunāko netukšo lietotāja
izveidoto `text`/`input_text` no tā paša Chat vai Responses konteinera, normalizē to
NFC formā, sakļauj vadības rakstzīmes un atstarpes un ierobežo to līdz 500 Unicode
koda punktiem. Tukša rezultāta gadījumā tiek izmantota precīza `full` uzvedne.
Izmantojama norāde tiek serializēta JSON formātā īpašā neuzticama lietotāja konteksta
blokā, un tā drīkst tikai piešķirt prioritāti novērojamām detaļām; tā nevar ignorēt
atsevišķo brīdinājumu nesekot multivides saturā redzamiem vai dzirdamiem
norādījumiem. Teksta fokuss nekad neizsecina `start`/`end` un nemaina laika atlases
mehānismu.

#### FU-07 strukturālie segmentu pierādījumi

`segment_aware` izmanto vienu ierobežotu priekšanalīzes gājienu jau validētajai
lokālajai video straumei. Fiksētā filtru ķēde vispirms mērogo video līdz ne vairāk
kā 320 pikseļu platumam, nosaka ainu maiņas un sastingušus intervālus, pēc tam
ņem paraugus ar ātrumu 1 kadrs sekundē, lai noteiktu izplūdumu, vidējo spožuma
komponenti un telpisko/temporālo informāciju. Gājiens ir ierobežots līdz
600 strukturālajiem paraugiem, vienam FFmpeg/filtra pavedienam, tiem pašiem tikai
`file` protokola un konteineru atļauto vērtību sarakstiem, 1 MiB procesa izvades
ierobežojumam un ne vairāk kā 30 sekundēm brokera kopīgajā pārtraukšanas/termiņa
intervālā. Tas nekad nepieņem komandu, filtru, ceļu vai URL no pieprasījuma.

Strukturālās vērtības ir deterministiski paraugu ņemšanas pierādījumi, nevis
video semantiskā izpratne. Tās neizsecina subjektus, darbības, parakstus, runu vai
lietotāja nolūku. Ainu un sastinguma robežas veido segmentus; sastinguma pārklājums,
izplūdums, ekspozīcija, telpiskā detalizācija un temporālās izmaiņas ietekmē tikai
to, kā tiek sadalīts esošais 1–16 kadru budžets. Pilnībā sastingušam segmentam
tiek piešķirts ne vairāk kā viens kadrs, savukārt nesastingušie segmenti sacenšas
par atlikušo budžetu. Ja robežu ir vairāk nekā kadru, tiek saglabāts vienmērīgs
laika skalas pārklājums, lai straujas sākuma pārejas nevarētu paslēpt garu beigu
segmentu. Ainu robežas, kas atrodas 1 sekundes analīzes izšķirtspējas robežās no
sastinguma robežas, tiek apvienotas.

Trūkstošu filtru, nepareizi veidotu/tukšu pierādījumu, detektora kļūdas vai
ierobežotās priekšanalīzes taimauta gadījumā notiek atvērta atteice, precīzi
izmantojot vienmērīgo viduspunktu politiku. Izsaucēja veikta pārtraukšana vai
brokera termiņš neizraisa atvērtu atteici: tas izbeidz izpildē esošo apakšprocesu,
novērš turpmāku kadru izgūšanu, un privātais pagaidu koks tiek noņemts blokā
`finally`.

`scripts/perf/video-bridge-fu07-eval.ts` ģenerē deterministiskas reālas FFmpeg
testa datnes parakstu izsaukumu ietaupījumu novērtēšanai pēc dublikātu noņemšanas,
blīvas kustības budžeta sadalei, izplūduma/ekspozīcijas/SI-TI pierādījumiem,
straujām pārejām ar garu beigu daļu un pakāpeniskas pārejas viltus pozitīvajiem
rezultātiem. Tas reģistrē priekšanalīzes izpildes faktisko laiku un, ja ir pieejams
`/usr/bin/time`, arī bērnprocesa CPU laiku un maksimālo RSS. Tā kvalitātes
pārbaudes ir tikai strukturāli etaloni. Reālā parakstu modeļa kvalitāte paliek
`HOLD` statusā, jo šim testēšanas rīkam nav autorizēta galapunkta vai fiksēta
vērtētāja. Arī monetārie ietaupījumi paliek `HOLD` statusā, ja vien
`--caption-cost-per-call-usd` nenorāda skaidru pozitīvu izmaksu aplēsi par
izsaukumu; skripts nekad nefabricē nevienu no šiem rezultātiem.

Katrs kadrs ir ierobežots līdz 4 MiB, visi neapstrādātie kadri kopā — līdz
23 MiB, bet serializētā brokera atbilde — līdz 32 MiB. Privātais pagaidu
direktorijs tiek noņemts blokā `finally`. OmniRoute neietver FFmpeg komplektācijā
un nepieņem pielāgotu izpildāmā faila ceļu. Pirms parakstu veidošanas tilts
izmanto konservatīvu vizuālo dublikātu noņemšanas gājienu: katrs JPEG tiek
samazināts līdz 16×16 pelēktoņu buferim un salīdzināts tikai ar pēdējo saglabāto
kadru. Ja pieprasītais parakstu budžets pārsniedz vienu kadru, izgūšana nodrošina
ierobežotu kandidātu kopu, kas nepārsniedz divkāršu budžetu un nekad nepārsniedz
16 kadrus. Pieprasītais ierobežojums tiek piemērots tikai pēc dublikātu
noņemšanas, un galīgās retināšanas laikā tiek saglabāts pirmais un pēdējais
atlasītais kandidāts, ja budžets ir vismaz divi kadri. Versijotā
`grayscale-16x16-mean-cells-v2` politika izmanto lielāko no vidējās spožuma
komponentes starpības un to sīktēla šūnu īpatsvara, kuru normalizētā starpība ir
vismaz 0.05. Dublikātu slieksnis ir konstante 0.04, kas izvēlēta paredzamības dēļ,
nevis piedāvāta kā izpildlaika iestatījums. Šis sekundārais augsta kontrasta
signāls saglabā nelielas kustības un redzamā teksta izmaiņas, kuras salīdzinājums
tikai pēc vidējās vērtības var paslēpt. Salīdzinātāja vai dekodētāja kļūdu
gadījumā notiek atvērta atteice un tiek saglabāts pārklājums. Izvades metadati
atsevišķi norāda izgūtos kandidātus, sekmīgi izmantotos kadrus un atmestos
vizuālos dublikātus.

Skaidri atzīmēta video daļa var pieprasīt kontaktlapu ar laika zīmogiem. Tilts
izveido JPEG režģi ar ne vairāk kā 4 kolonnām un 16 kadriem. Katrā 512 pikseļu
šūnā avota laika zīmogs tiek iestrādāts augsta kontrasta apakšējā joslā, un tie
paši laika zīmogi tiek saglabāti teksta metadatos turpmākai sasaistīšanai un
auditam. Pilnā JPEG faila ierobežojums joprojām ir 32 MiB. Ja `sharp` nevar
atkodēt vai izveidot režģi, tilts atkāpjas uz atsevišķajiem JPEG kadriem;
klienta pārtraukšana joprojām tiek izplatīta kontaktlapas operācijā.

Paaugstināšanas pierādījumi ir apzināti nodalīti no sintētiskā kompozīcijas
mikroetalonuzdevuma. `scripts/perf/video-bridge-contact-sheet-eval.ts` definē
ar shēmas versiju apzīmētu A/B testēšanas rīku reāliem ar OpenAI saderīgiem
redzes modeļiem. Tas mēra pakalpojuma sniedzēja uzrādīto tokenu skaitu, kopējo
faktisko latentumu (tostarp kontaktlapas izveidi), modeļa izsaukumu skaitu un
manifestā definēto faktu saglabāšanu. Neapstrādātās modeļa atbildes netiek
ierakstītas pārskatā; tiek saglabāti tikai SHA-256 jaucējkodi un atbilstošo faktu
ID. Testēšanas rīks neveic nevienu tīkla vai maksas modeļa izsaukumu, ja vien nav
norādīts `--execute-real` un konfigurēti `--model`, `OMNIROUTE_BASE_URL` un
`OMNIROUTE_API_KEY`. Bez šādas skaidri norādītas reālas izpildes tā
mašīnlasāmais spriedums paliek `HOLD`; sintētiskie derīgās slodzes/izsaukumu
skaita mērījumi vien nav paaugstināšanas pierādījums.

Izsaucēji var atbalstītai video daļai pievienot neobligātu `transcript.cues`
masīvu, ja tiem jau ir sinhronizēts teksts. Katrā norādē jābūt `text`, galīgai
`start`/`end` vērtību intervālam pārbaudītā ilguma robežās un atļauto vērtību
sarakstā iekļautam `source` (`client`, `embedded` vai `audio-bridge`);
`confidence` noklusējuma vērtība ir `1`, un tai jāpaliek intervālā no `0` līdz
`1`. Pilnīgi identiskas norādes tiek apvienotas. OmniRoute nekad nesāk
transkripciju, pamatojoties uz šiem metadatiem: validētās norādes kopā ar avotu,
ticamību un intervālu tiek kopētas aprakstītajā rezultātā un attēlotas kā
neuzticami novērojumi līdzās kadru parakstiem. Nederīgs, ārpus diapazona esošs
teksts vai teksts bez izcelsmes informācijas tiek noraidīts, nevis sajaukts ar
parakstu straumi. Abi pieprasījuma pamatteksta transkripta kanāli normalizē
norādīto izcelsmi uz `client`, tostarp pašdeklarētās `embedded` vai
`audio-bridge` etiķetes. Tikai servera pārvaldīts adapteris var piešķirt šīs
uzticamās etiķetes, izmantojot tikai kodā pieejamo `trustedSource` argumentu;
pieprasījuma JSON lauks nevar sasniegt šo argumentu. Transkripta teksts neatkarīgi
no tā izcelsmes joprojām ir neuzticams, no multivides atvasināts saturs un nekad
nedrīkst noteikt autorizāciju.

Pieredzējis izsaucējs tam pašam video var nodrošināt `audioTranscript` celiņu;
tas tiek uzskatīts par klienta nodrošinātu tekstu, nevis servera veiktas transkripcijas apliecinājumu.
Apvienošanas robežslānis apstrādā vizuālos un audio novērojumus ar
vienu izpildes termiņu un pārtraukšanas signālu, sakārto tos kopīgā laika skalā, apvieno
precīzus dublikātus un ziņo daļēju rezultātu, ja sekmīga ir tikai viena puse.
Nederīgs `audioTranscript` izraisa pāreju uz šo daļējo rezultātu — vizuālais
apraksts tiek saglabāts, bet audio atzars reģistrē sanitizētu kļūmes kodu —
nevis izraisa visa video apstrādes kļūmi. Katra atzara pieejamība, daļēja rezultāta karodziņš
un sanitizētie kļūmju kodi tiek saglabāti aprakstītajā rezultātā,
aizsargmehānisma metadatos (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), rezultātu kešatmiņas metadatos un tilta
apvienošanas skaitītājos. Noklusējuma Video Bridge ceļš neizsauc runas pārvēršanu tekstā
un nelejupielādē otru multivides kopiju; bez šī nepārprotami norādītā celiņa tas paliek
tikai video režīmā.

**Transkripta saglabāšana (#12150 P1).** Tas tiek piemērots automātiski ikreiz, kad
Video Bridge (kas pats ir izvēles funkcija) atveido transkripta norādi — atsevišķa
saglabāšanas karodziņa nav. Kad pieprasījums atveido jebkādu transkripta norādi (izsaucēja deklarētu
`transcript` vai apvienotu `audioTranscript`), aizsargmehānisms to atzīmē kā
`videoBridgeObserved` un izveido rediģētu video apraksta ēnkopiju —
identisku atveidojumu, kurā katras norādes brīvā teksta pamatdaļa ir aizstāta ar
`[redacted-video-transcript]`; tā tiek izveidota, aizstājot strukturēto norādes lauku
pirms virknes salikšanas (nekad neparsējot saplacināto tekstu, tāpēc nekāds norādes
saturs — ne ļaunprātīgs, ne parasts, tostarp pamatdaļas, kas satur `]`, piemēram,
`[inaudible]`/`[music]` — nevar saglabāties). Saglabātā izsaukuma žurnāla pieprasījuma pamatdaļā
katra no video atvasinātā teksta daļa tiek aizstāta ar šo rediģēto ēnkopiju, to
salīdzinot pēc satura vienādības; `fullText` enkurs tiek atkārtoti nolasīts no pabeigtās pirmsizsaukuma aizsargmehānisma
lietderīgās slodzes, tāpēc atbilstības noteikšana joprojām izdodas pēc tam, kad vēlākie ķēdes aizsargmehānismi (PII un
akreditācijas datu maskētāji ar prioritātēm 10/95) pārraksta apraksta tekstu turpat,
kā arī pēc tam, kad sistēmas uzvednes/nodošanas/atmiņas ievietošana pārveido ziņojumu masīvu. Uz
modeli nosūtītā pamatdaļa paliek nemainīta. Novērots pieprasījums arī neaizpilda
pastāvīgo Memory (tiek izlaista gan no pieprasījuma, gan no atbildes atvasināta izvilkšana),
tāpēc paša modeļa atbilde nevar atkārtoti ievietot transkripta tekstu Memory.

**Neapstrādātie video lauki (#12430).** Kad tilts ir iespējots un vietējais video atbalsts nav zināms vai nav pieejams, definēti `transcript`/`audioTranscript` lauki arī aktivizē `videoBridgeObserved` pat pēc aprakstīšanas kļūmes vai `maxVideos` ierobežojuma sasniegšanas. `null` un tukšas virknes tiek ņemtas vērā; neesoši lauki un metadati, kas nav saistīti ar video, netiek ņemti vērā. Saglabātajās kopijās šie lauki tiek rediģēti vai pieprasījums tiek izlaists, un kešatmiņas/Memory tiek apietas.

Šajos atkāpšanās ceļos derīgas izsaucēja norādes kļūst par atbalstītām `text`/`input_text`
daļām, nevis nestandarta nodrošinātāja laukiem. Abi pieprasījumā norādītie celiņi
paliek neuzticami `client` novērojumi ar skaidru brīdinājumu, ka video
netika aprakstīts un laikspiedoli netika pārbaudīti attiecībā pret multividi. Esošie
256 norāžu/64 KiB kopējie un katras norādes budžeti tiek piemēroti abiem celiņiem kopā;
laikspiedoliem jāiekļaujas brokera 600 sekunžu maksimālajā robežā un jebkurā norādītajā fokusa
logā. Nederīgi celiņi tiek atmesti, nevis pārsūtīti kā patvaļīgs teksts; derīgs
paralēlais celiņš joprojām var tikt izmantots, ja vien to kopējais budžets netiek pārsniegts. Nulles/tukši
lauki nepievieno tekstu. Šis atkāpšanās mehānisms nepievieno multivides ielādi vai transkripciju.
Transkripta paplašinājuma lauki tiek noņemti no atkāpšanās video nesēja un tā
`video_url`/`source` objektiem. OpenAI pārsūtīšanas atļauto elementu saraksts paliek stingrs; video nesēji ar nezināmu vietējo
atbalstu joprojām ir pieejami, un zināmi tikai teksta mērķi saglabā drošus marķierus.
Strukturētas rediģēšanas ēnkopijas aizsargā pievienoto transkripta tekstu, savukārt
sākotnējais izsaucējam piederošais pieprasījums paliek nemainīts. Mērķi ar vietējo atbalstu un
atspējoti tilti saglabā savu esošo apiešanas darbību.

Papildu saglabātās kopijas izmanto to pašu novērota pieprasījuma signālu. Neapstrādātais
pirmsaizsargmehānisma klienta pieprasījuma momentuzņēmums, atmiņā esošais neizpildītais pieprasījums un agrīnais
noraidīta pieprasījuma žurnāls strukturāli aizstāj transkripta laukus video daļās;
konveijera posmu un konteksta nodošanas sintezētās virkņu uzvednes tiek rediģētas
saglabātās pieprasījuma pamatdaļas saņēmējā. Saglabātais `video_content_removed` marķieris
liek `previous_response_id` turpinājumam droši atteikties, nevis rekonstruēt
tekstu, kas tika apzināti atmests. Ja novērots pieprasījums pirms reģistrēšanas zaudē savu
katras daļas rediģēšanas ēnkopiju vai kaut viena no vairākām video ēnkopijām
pēc vēlākām pieprasījuma izmaiņām vairs neatbilst, saglabātā pieprasījuma pamatdaļa tiek
pilnībā izlaista, nevis tiek saglabāts daļēji rediģēts transkripts.

Novērota pieprasījuma gadījumā modeļa atbilde var citēt jebkuru
transkripta daļu bez strukturētas norādes robežas. Tāpēc tās saglabātā izsaukuma žurnāla
`responseBody` tiek aizstāta ar izlaišanas marķieri; detalizētais
konveijera artefakts (kas var ietvert augšupstraumes/klienta pamatdaļas un straumes fragmentus)
netiek saglabāts. Semantiskās, idempotences un spriešanas atkārtošanas kešatmiņas
šim pieprasījumam neveic ne lasīšanu, ne rakstīšanu. Nodrošinātāja pieprasījums un klientam redzamā
atbilde paliek nemainīti. Agrīnie savienojuma uzturēšanas baiti tiek iztukšoti no pagaidu
bufera, kad detalizētais artefakts tiek izlaists. Kiro kļūdaini formatēta EventStream
brīdinājums ziņo tikai lietderīgās slodzes baitu skaitu, nekad ne tās saturu vai JSON
parsētāja neapstrādāto kļūdu.
Tas neapgalvo, ka būtu auditēta ikviena nesaistīta nodrošinātāja/spraudņa diagnostika;
plašākā saglabāto saņēmēju pārbaude tiek izsekota #11658.

Iekšējais `/api/modality-bridge/video/drilldown` dzīves cikls ir atsevišķs,
atgriezeniskās cilpas/tokena autentificēts kešatmiņas substrāts. Katrai operācijai ir nepieciešams arī
kanonisks necaurredzams principāla ID. Pirms tiek iespējots produkcijas izsaucējs, tam
šis ID ir jāatvasina no autentificētā nomnieka un tas nekad nedrīkst pārsūtīt
klienta izvēlētu vērtību. Kešatmiņas atslēgas sasaista šo principālu ar kanoniskajiem sesijas un
video atsauces ID, glabā tikai to no SHA-256 atvasinātās atslēgas un ierobežo gan lasīšanu,
gan dzēšanu ar to pašu principālu. Kešatmiņā katram ierakstam tiek glabāti ne vairāk kā 16 atvasināti JPEG
kadri, kuru derīguma termiņš beidzas pēc desmit minūtēm, un tā atbalsta ierobežotu
`start`/`end` lasīšanu vai tiešu sesijas dzēšanu.

Katram principālam ir atļauti ne vairāk kā 16 ieraksti un 64 MiB kanonisko JPEG datu. Šie
ierobežojumi nav atkarīgi no globālā 64 ierakstu/256 MiB sliekšņa: principāla kvotas
pārsniegšanas gadījumā vispirms tiek izstumti tikai šī principāla visilgāk neizmantotie ieraksti, un tikai pēc tam
tiek apsvērta globālā LRU izstumšana. Kešatmiņas darbības laikā ieraksti ar beigušos derīguma termiņu tiek izņemti gan no principāla,
gan globālās uzskaites, savukārt atcelšanas un validācijas kļūmes gadījumā
daļēja aizstāšana netiek saglabāta.

Kešatmiņa noraida nekanonisku Base64, pārmērīgu aizpildījumu, multividi, kas nav JPEG formātā, bojātus vai
aprautus JPEG failus, kā arī JPEG failus, kas ierobežotas pilna attēla `sharp`
dekodēšanas laikā rada brīdinājumu. Katrs pieņemtais attēls tiek atkārtoti kodēts kā kanonisks JPEG, platums un augstums
tiek atvasināts no dekodētajiem baitiem, nevis uzticoties izsaucēja laukiem, un visi beigu daļā pievienotie
poliglota baiti tiek atmesti, nevis saglabāti. Abās kvotās tiek ieskaitīts tikai ierobežotais kanoniskais saspiestais buferis.
JSON pārraides ierobežojumā ir iekļauts Base64 papildu apjoms 32 MiB
dekodētās ievades slieksnim. Katram
saglabātajam atvasinājumam tiek reģistrēts tā validētais JPEG formāts/izšķirtspēja, iztveršanas politika,
atvasinājuma versija, izveides laiks, servera aprēķinātais satura jaucējkods un jauktā vecākelementa
atsauce kopā ar uzticamā izsaucēja norādīto vecākelementa satura jaucējkodu. Atcelšana tiek pārbaudīta
starp asinhronajām dekodēšanas/jaucējkoda aprēķināšanas fāzēm pirms atomārās saglabāšanas kešatmiņā.

Šī laidiena daļa vēl nesavieno produkcijas ģenerētāju ar maršrutu un nenodrošina
vairāku izšķirtspēju variantu atlasi. Tādēļ caurspīdīgais Video Bridge pieprasījumu
ceļš nerada nekādu papildu darbu, savukārt nomniekam piesaistīta principāla atvasināšana un
pilnais FU-08 vairāku izšķirtspēju dzīves cikls paliek skaidri norādīti kā turpmāk veicami darbi,
nevis tiek dokumentēti kā pabeigta funkcionalitāte.

Kadri tiek secīgi aprakstīti ar konfigurēto Video modeli. Tukšs
Video pārrakstījums pārmanto Vision iestatījumu; ja abi ir tukši, Vision
automātiskais maršrutētājs izvēlas atbilstošo modeli ar attēlu apstrādes spējām. Veiksmīgi izveidoti apraksti
aizstāj sākotnējo daļu ar stabilu `[Video description:` prefiksu, kas arī
atzīmē tekstu kā neuzticamu, no multivides atvasinātu novērojumu un norāda pakārtotajiem
modeļiem neizpildīt multividē atrastās instrukcijas. Kadru aprakstu kešatmiņas atslēgas
ietver JPEG baitus, uzvedni, laikspiedolu un faktiski izmantoto modeli; kešatmiņā tiek saglabāti tikai veiksmīgi
apraksti. Kešatmiņas ierakstos tiek saglabāts faktiskais veiksmīgais ģenerētāja modelis,
tostarp atkāpšanās modelis; ja dažādus kadrus izveidojuši dažādi
modeļi, tilts ziņo `mixed`. Kešatmiņas trāpījums atkārtoti izmanto šo ģenerētāja identitāti,
nevis pārmarķē to kā pieprasīto maršrutēšanas plānu. Visa video rezultātu
kešatmiņas atslēgā tiek iekļauta katra ievade, kas maina izvadi — uzvedne, faktiski izmantotais
modelis, iztveršanas politika, kadru skaits, semantiskās analīzes režīms, normalizētās fokusa norādes SHA-256
nospiedums, fokusa logs, `transcript`,
`audioTranscript` un kontaktlapas karodziņš — tādēļ jebkuras šīs
dimensijas maiņa izraisa kešatmiņas netrāpījumu, nevis novecojuša rezultāta atkārtotu izmantošanu. Vizuālās dublikātu noņemšanas politikas
versija, slieksnis un ierobežotais kandidātkadru skaits arī ir skaidri ietverti
rezultātu kešatmiņas atslēgā un metadatos; tādēļ politikas maiņa nevar atkārtoti izmantot novecojušu
visa video aprakstu. Rezultātu kešatmiņas v4 metadatos tiek saglabāts režīms un
nospiedums, bet nekad netiek saglabāts neapstrādāts lietotāja uzdevums. Drošības mehānisma metadati ziņo gan
pieprasīto, gan faktiski izmantoto analīzes režīmu; pieprasītais `focused` režīms bez
izmantojama lietotāja teksta tiek ziņots kā faktiski `full`.

Drošības mehānisms izgūst katru atbalstīto video daļu, bet apraksta ne vairāk par
`modalityBridgeVideoMaxVideos`. Mērķim, par kuru ir pierādīts, ka tam ir
`supportsVideo === false`, neveiksmīgi apstrādātie un ierobežojumu pārsniegušie video kļūst par skaidriem drošiem
teksta marķieriem, lai neviens neapstrādāts video netiktu saglabāts. Ja spēja nav zināma, šīs daļas
saglabā savu video nesēju; jebkurš atkāpšanās transkripts tiek apstrādāts atbilstoši iepriekš aprakstītajai ierobežotajai teksta
pārveidošanai. Mērķi ar `supportsVideo === true` apiet tiltu.
Klienta pieprasījuma pārtraukšanas signāls tiek izplatīts caur lejupielādi, brokera rindu,
apakšprocesiem un aprakstu izsaukumiem; pārtraukšana aptur apstrādi starp video un nekad kļūmes gadījumā neatļauj
neapstrādātu multividi.

Izpildlaika iestatījumi tiek glabāti datubāzē un validēti ar Zod:

| Atslēga                             | Noklusējums | Diapazons / darbība                                                                                       |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Neobligāta izpildlaika funkcija, kas jāiespējo                                                            |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` saglabā vispārīgus aprakstus; `focused` izmanto ierobežotu, neuzticamu jaunāko lietotāja kontekstu |
| `modalityBridgeVideoModel`          | `""`        | Manto Vision Bridge modeli                                                                                |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                      |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` vai proporcionāls `segment_aware`; detektora kļūmes gadījumā izmanto `uniform`   |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                       |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                            |

Iepriekš saglabātās Video taimauta vērtības, kas pārsniedz 120 sekundes, tiek ierobežotas līdz
starpnieka termiņam; jauni iestatījumu ieraksti, kas pārsniedz šo ierobežojumu, tiek noraidīti.
`GET /api/modality-bridge/video/runtime` pirms autentifikācijas vai izpildlaika pārbaudes
pieprasa uzticamu, apzīmogotu lokālās atgriezeniskās saites izcelsmi un pēc tam pieprasa pārvaldības
autentifikāciju. Tas atgriež tikai `available`, attīrītas FFmpeg/ffprobe versijas un fiksētu
iemeslu, ja izpildlaiks nav pieejams. Iekšējais izgūšanas galapunkts nav
publiska augšupielādes API: rindas pārslodze atgriež `503` kopā ar `Retry-After`, zvanītāja
atvienošanās atgriež `499`, bet fiksētā starpnieka termiņa pārsniegšana atgriež `504`. Pārveidotās atbildes centrālajai
`x-omniroute-modality-bridge` galvenei pievieno
`video->text;model=<visionModel>;parts=<videos>`, nenoņemot Vision vai Audio segmentus.

### PII maskētājs (`piiMasker.ts`)

Darbojas **abos** posmos.

- **`preCall`** klonē derīgo slodzi, apstrādā `system`, `messages`, `input` un
  `prompt` (tostarp vienkārša teksta virkņu vienumus) un virkņu `content`/`text` laukiem
  piemēro `processPII()` (no `@/shared/utils/inputSanitizer`). Ja
  `PII_REDACTION_ENABLED=true`, konstatētie PII izejošajā
  derīgajā slodzē tiek aizklāti. Tas nav atkarīgs no `INPUT_SANITIZER_MODE` (kas kontrolē tikai
  uzvedņu injekcijas politiku). Ja aizklāšana ir izslēgta, izsaukums reģistrē konstatējumu
  skaitu, nepārrakstot saturu.
- **`postCall`** izveido atbildes dziļo kopiju, izpilda `sanitizePIIResponse()`, kā arī
  Responses API formas maskētāju (`maskResponsesOutput` — aptver
  `output_text` un `output[].content[].text`). Ja notiek jebkāda aizklāšana,
  modificētā atbilde aizstāj sākotnējo.

Aizsargmehānisms nekad nebloķē; tas tikai pievieno anotācijas (`meta.detections`,
`meta.redacted`) vai pārraksta saturu.

### Uzvedņu injekcija (`promptInjection.ts`)

Konstatē pretinieciskas struktūras lietotāja nodrošinātajā saturā un piemēro
konfigurēto politiku. Darbību nosaka vides mainīgie un konstruktora
opcijas:

| Iestatījums          | Vides mainīgais                                                                                              | Noklusējums | Ietekme                                                                                                                                                                                         |
| -------------------- | ------------------------------------------------------------------------------------------------------------ | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Iespējots            | `INPUT_SANITIZER_ENABLED`                                                                                    | `true`      | Ja `false`, aizsargmehānisms nekavējoties beidz izpildi.                                                                                                                                        |
| Režīms               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                              | `warn`      | Injekcijas politika: `block`, `warn` vai `log`. (`redact` tiek pieņemts atpakaļsaderībai, taču **neizņem** injekcijas tekstu; pieprasījuma PII pārrakstīšanu kontrolē `PII_REDACTION_ENABLED`.) |
| Bloķēšanas slieksnis | `blockThreshold` opcija / `INPUT_SANITIZER_BLOCK_THRESHOLD` (aizstājvārds `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`      | Minimālā nopietnības pakāpe, kas nepieciešama bloķēšanai. Ar noklusējuma iestatījumiem vidēja pakāpe tiek tikai novērota.                                                                       |

**Režīma prioritāte** (`getMode`): izsaucēja `options.mode` →
`INJECTION_GUARD_MODE` **DB funkcijas karodziņa pārrakstījums** (Dashboard → Settings →
Feature Flags) → `INJECTION_GUARD_MODE` vides mainīgais → `INPUT_SANITIZER_MODE` vides mainīgais →
`warn`. Tādēļ informācijas paneļa pārrakstījums ir prioritārāks par vides mainīgajiem, un Feature
Flags lietotāja saskarne kontrolē darbojošos aizsargmehānismu reāllaikā (bez restartēšanas). DB nolasīšana ir kļūmdroša:
ja rodas kļūda, aizsargmehānisms atgriežas pie uz vides mainīgajiem balstītas darbības, bet, ja
pārrakstījums nav iestatīts, darbība ir identiska izšķiršanai tikai pēc vides mainīgajiem.

Noteikšanas avoti:

1. `sanitizeRequest()` no `@/shared/utils/inputSanitizer` (koplietota detektoru
   kopa, ko izmanto arī citviet konveijerā).
2. Iebūvētie `DEFAULT_GUARD_PATTERNS` (pašlaik `system_override_inline` un
   `markdown_system_block`, abiem nopietnības pakāpe ir `high`).
3. Neobligāti `customPatterns`, kas nodoti konstruktora opcijās (virknes, regulārās izteiksmes
   vai `{ name, pattern, severity }` ieraksti).

Ja `mode === "block"` **un** vismaz viena noteikšana sasniedz nopietnības
slieksni, `preCall` atgriež `{ block: true, message: "Request rejected:
suspicious content detected" }`. `warn`/`log` režīmos aizsargmehānisms veic
žurnālierakstu, bet atļauj izsaukumu. Koplietojamā palīgfunkcija
`evaluatePromptInjection()` arī tiek eksportēta izsaucējiem, kuriem jānovērtē
uzvednes, neizmantojot reģistru.

**Skenēšanas ierobežojums (v3.8.20):** detektors pārbauda tikai apvienotā uzvednes
teksta **pirmos 16 KB** — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 baiti)
failā `src/shared/utils/inputSanitizer.ts`. Gan `detectInjection()`, gan
`evaluatePromptInjection()` pirms šablonu cikla izpildes izmanto
`slice(0, MAX_INJECTION_SCAN_BYTES)`. Injekcijas direktīvas atrodas ievades
sākuma tuvumā, tāpēc tas ierobežo regulāro izteiksmju CPU/GC patēriņu vairāku
simtu KB datu slodzēm, nevājinot noteikšanu (sk. #3932, #4041).

### Akreditācijas datu maskētājs (`credentialMasker.ts`)

Darbojas **abos** posmos un noklusējuma ķēdē ir pēdējais (prioritāte `95`).
Rediģē labi zināmus API atslēgu / slepeno pilnvaru šablonus izejošajā datu slodzē
(ziņojumu saturā, rīku izsaukumu argumentos, rīku rezultātos) **un** pakalpojuma
sniedzēja atbildē, lai uzvednē ielīmēti akreditācijas dati (vai rīka rezultātā
atbalsoti dati) netiktu nopludināti augšupējam pakalpojuma sniedzējam vai atpakaļ
klientam.

- **Tikai pēc izvēles**, ievērojot to pašu principu kā PII rediģēšanai (blakus
  stingrajam noteikumam #20): atspējots, ja vien
  `settings.credentialRedactionEnabled === true` **vai**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kad tas ir izslēgts, aizsargmehānisms
  neveic nekādas darbības — tas nekad nebloķē un neko nepārraksta.
- `redactCredentials()` apstaigā visu datu slodzes/atbildes koku (`walkValue()`,
  droši pret prototipa piesārņošanu, droši pret cikliem, izmantojot `WeakSet`)
  un aizstāj atbilstības ar vietturi `[REDACTED:<type>]`, klonējot tikai tos
  zarus, kas faktiski mainīti.
- `CREDENTIAL_PATTERNS` aptver LLM pakalpojumu sniedzēju atslēgas (OpenAI,
  OpenAI-proj, Anthropic, Google, Hugging Face, Replicate), VCS/SaaS pilnvaras
  (GitHub, Slack, Linear, Notion, npm, Postman, Discord), maksājumu atslēgas
  (Stripe, Square), mākoņpakalpojumu atslēgas (AWS piekļuves atslēga, Twilio,
  SendGrid, Mailgun), privātās atslēgas / JWT, savienojumu virknes, kas satur
  akreditācijas datus (`mongodb://user:pass@...` utt.), un vispārīgu
  `Authorization`/`x-api-key`/`api-key`/`apikey` galvenes vērtības šablonu.
  Galveņu formas atslēgas (`authorization`, `x-api-key`, `api-key`, `apikey`)
  tiek rediģētas strukturāli (tikai vērtība, saglabājot shēmas prefiksu,
  piemēram, `Bearer `/`Basic `), nevis ar vispārīgo teksta regulāro izteiksmi.
- Aizsargmehānisms nekad nebloķē; tas tikai pārraksta (`modifiedPayload` /
  `modifiedResponse`) un pievieno anotācijas (`meta.credentialsRedacted`,
  `meta.count`).

Regresiju aizsardzība: `tests/unit/credential-masker-guardrail.test.ts`.

## Pamatkontrakts (`base.ts`)

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
  block?: boolean; // true pārtrauc ķēdes izpildi
  message?: string; // tiek parādīts bloķēšanas gadījumā
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // preCall atgriež šo vērtību, lai pārrakstītu pieprasījumu
  modifiedResponse?: TValue; // postCall atgriež šo vērtību, lai pārrakstītu atbildi
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

Drošības mehānisms norāda, ka „nav izmaiņu”, atgriežot `void`, `{}` vai
`{ block: false }`. Atgriežot `modifiedPayload`/`modifiedResponse`, tiek aizstāta
vērtība, kas ķēdē tiek nodota tālāk nākamajiem drošības mehānismiem.
`signal?: AbortSignal` nodod izsaucēja dzīves ciklu drošības mehānismiem. Pieprasījuma pārtraukšana ir apzināts atvērtas kļūmes izņēmums: multivides tilti pārtrauc darbu un veic tīrīšanu, neatjaunojot sākotnējo multividi mērķim, par kuru ir zināms, ka tas to neatbalsta.

## Reģistrs (`registry.ts`)

Vienīgā `guardrailRegistry` instance nodrošina:

- `register(guardrail)` — pievieno drošības mehānismu (vai aizstāj to pēc normalizētā nosaukuma) un
  atkārtoti sakārto pēc `priority` augošā secībā.
- `clear()` / `list()` — administratīvas palīgfunkcijas.
- `runPreCallHooks(payload, context)` — secīgi izpilda aktīvos drošības mehānismus, nododot
  lietderīgo slodzi caur `modifiedPayload`, un apstājas pie pirmā `block: true`.
- `runPostCallHooks(response, context)` — tāda pati plūsma atbildes pusē.
- `resetGuardrailsForTests({ registerDefaults })` — notīra stāvokli un pēc izvēles
  atkārtoti reģistrē noklusējuma mehānismus tīrai testu izolācijai.

Abas izpildfunkcijas atgriež `{ blocked, payload|response, results, guardrail?, message? }`,
kur `results` ir `GuardrailExecutionResult` ierakstu masīvs, kas ietver katra
drošības mehānisma laukus `blocked`, `skipped`, `modified`, `error` un `meta`,
kas ir noderīgi trasēšanai.

### Drošības mehānismu atspējošana katram pieprasījumam

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` apkopo
drošības mehānismu nosaukumu sarakstu bez dublikātiem, kuri pašreizējam
pieprasījumam ir jāizlaiž. Avoti (visi neobligāti, visi tiek apvienoti):

- `apiKeyInfo.disabledGuardrails`
- Pieprasījuma ķermeņa `disabledGuardrails` (augšējā līmenī)
- Pieprasījuma ķermeņa `metadata.disabledGuardrails`
- Galvene `x-omniroute-disabled-guardrails` (vai mantotā
  `x-disabled-guardrails`)

Vērtības var būt virkņu masīvi vai ar komatiem atdalīta virkne; nosaukumi tiek
normalizēti uz mazo burtu kebab-case formātu (`pii_masker` → `pii-masker`). Rezultāts
caur `context.disabledGuardrails` tiek nodots reģistram, kas izlaiž
atbilstošos drošības mehānismus (`skipped: true` laukā `results`).

## Izpildes secība

Katram pieprasījumam, kas tiek apstrādāts caur `src/sse/handlers/chat.ts` un
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` izveido izlaižamo aizsargmehānismu sarakstu no API atslēgas, pieprasījuma pamatteksta
   un galvenēm.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` izpilda aizsargmehānismus augošā
   prioritātes secībā:
   - Atspējotie aizsargmehānismi tiek reģistrēti kā `skipped`.
   - Katra aizsargmehānisma `preCall` var pārrakstīt lietderīgo slodzi, izmantojot `modifiedPayload`.
   - Pirmais `block: true` priekšlaicīgi pārtrauc ķēdi, un apstrādātājs atgriež
     aizsargmehānisma noraidījuma atbildi.
3. (Iespējams, pārrakstītā) lietderīgā slodze tiek nodota kombinētajai maršrutēšanai un augšupstraumes
   nosūtīšanai.
4. Pēc atbildes izveides `guardrailRegistry.runPostCallHooks(...)`
   izpilda to pašu ķēdi atbildei. `block: true` šajā posmā atmet augšupstraumes
   atbildi.

Aizsargmehānismi, kas izmet kļūdu, tiek reģistrēti ar `error: <message>` un ierakstīti žurnālā, izmantojot
`logger.warn`, taču ķēdes izpilde turpinās — pēc konstrukcijas kļūmes gadījumā pieprasījums tiek atļauts.

## Konfigurācija

Iebūvēto aizsargmehānismu nolasītie vides mainīgie:

| Mainīgais                             | Izmanto                     | Ietekme                                                                                                                    |
| ------------------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`          | Iestatiet uz `false`, lai pilnībā atspējotu noteikšanu.                                                                    |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`          | Injekciju politika: `warn`, `block` vai `log`. Mantotā vērtība `redact` nepārraksta injekcijas tekstu.                     |
| `INJECTION_GUARD_MODE`                | `prompt-injection`          | Injekciju aizsargmehānisma režīms; arī DB funkcionalitātes karodziņš, kas **ignorē un aizstāj** vides mainīgos (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`          | Minimālais nopietnības līmenis, kuru `MODE=block` noraida: `high` (noklusējums), `medium` vai `low`.                       |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`          | Mantots `INPUT_SANITIZER_BLOCK_THRESHOLD` aizstājvārds.                                                                    |
| `PII_REDACTION_ENABLED`               | `pii-masker`                | Ja vērtība ir `true`, pieprasījumā esošā PII tiek aizklāta (neatkarīgi no injekciju režīma).                               |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (lejupstraume) | Kontrolē maskētāja darbību atbildes pusē.                                                                                  |

Modalitātes tilta aizsargmehānismi izpildlaika konfigurāciju nolasa no DB nodrošinātās iestatījumu
krātuves (`getSettings()`), nevis no vides mainīgajiem. Attēlu apstrādes primārās atslēgas ir
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` un
`modalityBridgeCacheMaxEntries`. Mantotās
`visionBridge*` atslēgas tiek pieņemtas tikai kā dokumentētā viena cikla lasīšanas
atkāpšanās iespēja; informācijas paneļa veiktajai rakstīšanai tiek izmantotas primārās atslēgas. Noklusējuma vērtības un atkāpšanās
risinātājs atrodas `src/shared/constants/modalityBridgeDefaults.ts`, bet mantotās
konstantes ir saglabātas failā `src/shared/constants/visionBridgeDefaults.ts`.

Audio apstrāde izmanto `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` un `modalityBridgeAudioMaxClips`, kā arī koplietotos
`modalityBridgeCache*` iestatījumus. Audio apstrādei nav mantoto atslēgu atkāpšanās iespējas, jo šīs
atslēgas tika ieviestas kopā ar Modalitātes tilta shēmu.

Video apstrāde izmanto `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` un
`modalityBridgeVideoTimeout`, kā arī koplietotos `modalityBridgeCache*` iestatījumus.
Tā pēc noklusējuma ir atspējota, jo FFmpeg/ffprobe ir neobligātas darbības
atkarības, bet kadru aprakstu ģenerēšana palielina latentumu un modeļa izmaksas.

## Pielāgotas aizsargbarjeras

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

Darbības:

1. Izveidojiet `src/lib/guardrails/myGuardrail.ts`, paplašinot `BaseGuardrail`.
2. Implementējiet `preCall` un/vai `postCall`.
3. Vai nu reģistrējiet importēšanas laikā (pievienojiet no `registerDefaultGuardrails`), vai
   izsauciet `guardrailRegistry.register(...)` izpildlaikā — reģistrs aizstāj
   jebkuru iepriekšējo aizsargbarjeru ar tādu pašu normalizēto nosaukumu.
4. Pievienojiet testus direktorijā `tests/unit/` (esošie piemēri:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testēšana

Starp testiem izmantojiet `resetGuardrailsForTests()`, lai sāktu no zināma stāvokļa.
Nododiet `{ registerDefaults: false }`, lai sāktu ar tukšu reģistru un
reģistrētu tikai testējamās aizsargbarjeras. Vision Bridge atbalsta atkarību
ievadīšanu (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge nodrošina
līdzvērtīgus paplašinājuma punktus iestatījumiem, iespējām, STT modeļa atlasei, akreditācijas datu
pārbaudēm un transkripcijai. Tādēļ testos var pārbaudīt abas plūsmas bez piekļuves
DB vai tīklam.

## Skatiet arī

- `src/lib/guardrails/` — implementācija
- `src/shared/utils/inputSanitizer.ts` — koplietots detektors, kas nodrošina
  uzvedņu injekciju noteikšanu un PII maskēšanu
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge noklusējuma vērtības un
  piespiedu tilta modeļu saraksts
- `src/shared/constants/modalityBridgeDefaults.ts` — koplietoti Vision/Audio izpildlaika noklusējumi
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonāls slānis (ķēdes pārtraucējs, nogaidīšanas periodi)
- `docs/reference/ENVIRONMENT.md` — pilna vides mainīgo atsauce

## Injekciju aizsarga maršrutu pārklājums un red-team testēšana (8. posms · D bloks)

Injekciju aizsargs (`createInjectionGuard` / `withInjectionGuard`) aptver visus maršrutus,
kas pieņem lietotāju uzvednes. Tas ievēro `INJECTION_GUARD_MODE` (noklusējuma vērtība `warn` = tikai reģistrē žurnālā;
`block` = atgriež HTTP 400 `SECURITY_001`).

| Tips            | Maršruti                                                                                                                                             | Noklusējuma režīms |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| Teksts (esošie) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn               |
| Ģeneratīvie     | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn               |
| Dati            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn               |

Teksta izgūšana (`extractMessageContents`) aptver `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team testēšana (katru nakti, `nightly-llm-security.yml`):** promptfoo pārbauda, vai katrs maršruts bloķē
OWASP-LLM korpusu režīmā `INJECTION_GUARD_MODE=block`; garak izpilda pārbaudes (izlaiž, ja nav noslēpuma).
`moderations` ir iekļauts konsekvences labad — operatori bloķēšanas režīmā to var izslēgt, izmantojot
`resolveDisabledGuardrails`.

Nakts darbplūsmai (`.github/workflows/nightly-llm-security.yml`, cron + manuāla
palaišana) ir divi darbi:

- **`promptfoo-guard` (bloķējošs)** — izpilda `promptfoo eval -c promptfooconfig.yaml`
  ar `INJECTION_GUARD_MODE=block`. Katrs pretiniecisks gadījums (piemēram, "ignorē visus
  iepriekšējos norādījumus…", DAN stila ierobežojumu apiešanas mēģinājumi) pārbauda, vai atbilde satur
  `error.code === "SECURITY_001"`, proti, vai aizsargs patiešām noraidīja pieprasījumu.
- **`garak` (konsultatīvs)** — izpilda garak `--probes promptinject,dan,leakreplay`
  pret lokālu OmniRoute instanci (`http://localhost:20128/v1`). Tā izpilde ir atkarīga no
  pakalpojumu sniedzēja noslēpuma (`PROMPTFOO_PROVIDER_KEY`); ja tā nav, darbs tiek korekti izlaists, un tam ir pievienots
  `|| true`, tādēļ tas sniedz pārskatu, neizraisot CI kļūmi.

Aizsarga palīgfunkcijas (`createInjectionGuard` / `withInjectionGuard`) pārklājums
aptver katru `/v1` maršrutu, kas pieņem uzvednes; uzvednes teksts tiek iegūts no
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`, izmantojot
`extractMessageContents()` failā `src/shared/utils/inputSanitizer.ts`.
