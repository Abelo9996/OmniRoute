# Guardrails (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sandhedskilde:** `src/lib/guardrails/`
> **Senest opdateret:** 2026-08-29 — v3.8.51 (herkomsten af Video Bridge-transskriptioner deklareres af kalderen,
> men er endnu ikke verificeret af serveren — præciseret i henhold til #11661)

Guardrails håndhæver sikkerhed, politikker og indholdstransformationer ved grænsen
mellem OmniRoute og upstream-udbydere. Hver guardrail kan inspicere (og
eventuelt afvise, transformere eller annotere) request-payloads (`preCall`) og
upstream-svar (`postCall`).

Systemet er **fail-open**: Hvis en guardrail kaster en fejl under kørsel, registrerer
registreringsdatabasen fejlen og fortsætter med den næste guardrail i stedet for at lade
requesten fejle. Blokering er en eksplicit beslutning (`block: true`), aldrig et uheld.

## Indbyggede sikkerhedsforanstaltninger

Registret indlæser automatisk seks sikkerhedsforanstaltninger i prioritetsrækkefølge ved import
(se `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Navn                | Fase(r)        | Fil                   |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Lavere prioritetstal kører **først**.

### Vision Bridge (`visionBridge.ts`) — Modalitetsbro PR-1

Opfanger forespørgsler med billeder, der er rettet mod **modeller uden understøttelse af billeder**, og omdirigerer enten hele forespørgslen til en model med billedunderstøttelse eller erstatter billeddelene med tekstbeskrivelser, som genereres af en konfigurerbar billedmodel, før det opstrøms kald. Dette gør det muligt for udbydere, der kun understøtter tekst, at håndtere multimodale nyttelaster transparent.

Forløb:

1. Spring over, hvis målmodellen allerede understøtter billeder (medmindre den findes på listen over modeller, hvor broen gennemtvinges, `isVisionBridgeForcedModel`).
2. Udtræk billeddele via `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), som delegerer til den **samlede mediedetektor**
   `detectMediaParts()` i `open-sse/utils/mediaParts.ts` — den fælles
   autoritative kilde, som deles med combo-kompatibilitetsfilteret.
   Udtrækning er begrænset til godkendte dele på øverste niveau med de former,
   som `replaceImageParts` kan indsætte igen (udtræk↔erstat-kontrakten): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic-URL
   `source.type:"url"` og Responses API `input_image`. Indlejrede fund og
   former, der kun fungerer som indikatorer, er materiale til combo-filteret
   og udtrækkes aldrig. Spring over, hvis der ikke findes nogen.
3. Find kørselskonfigurationen via `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nye indstillingsnøgler
   med `modalityBridge*` har forrang; ældre nøgler med `visionBridge*` forbliver
   en **reserve i én cyklus** (tilbagerulningsvindue). Spring over før enhver
   gennemgang af medier, når broen er deaktiveret.
4. Tilstandsvælgeren (`modalityBridgeVisionMode`, se tabellen nedenfor) afgør,
   om der skal omdirigeres eller beskrives. Omdirigering returnerer
   `modifiedPayload`, hvor kun `model` er udskiftet, samt metadata
   `{ rerouted, fromModel, toModel, imagesKept }`.
5. Beskrivelsesforløb: Begræns billeder til `maxImages`, sammensæt den
   opgavebevidste prompt, slå op i beskrivelsescachen, kald billedmodellen
   **parallelt** (`Promise.allSettled`), og indsæt tekstdele af typen
   `[Billede N]: <beskrivelse>` i stedet. En mislykket beskrivelse giver
   `null`, og den oprindelige billeddel **bevares** (#4012) — undtagen i
   combo-beskrivelsesforløbet, når alle beskrivelser mislykkedes, hvor en
   bekræftet opstrømsmodel uden billedunderstøttelse i stedet modtager
   pladsholderen `(ikke tilgængelig — ingen udbyder med billedunderstøttelse er tilsluttet)` (#8430).
6. Returner `modifiedPayload` + metadata (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Tilstandsvælger (`modalityBridgeVisionMode`)

| Tilstand   | Standard | Adfærd                                                                                                                                                                                                                                                                                                                                                         |
| ---------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Ældre heuristik, uændret (#6640/#7204): modeller, der ikke er combo-modeller, samt `auto/`-modeller omdirigeres til den bedste billedmodel, medmindre den oprindelige model allerede har brugbare legitimationsoplysninger (så beskrives der); combo-mål beskrives altid.                                                                                      |
| `describe` |          | Beskriv altid — omdirigeringsblokken springes helt over; brugerens valgte model svarer altid.                                                                                                                                                                                                                                                                  |
| `reroute`  |          | Gennemtving omdirigering: Beskyttelsen, der beholder modellen med legitimationsoplysninger, tilsidesættes. Beskyttelsen af legitimationsoplysninger for omdirigerings-**målet** gælder stadig — når der ikke findes et brugbart billedmål, fortsætter forespørgslen til beskrivelse, så rå billeder aldrig når en backend, der kun understøtter tekst (#8430). |

Gennemtvungne tilstande afslutter tidligt, **før** auto-heuristikken kører; `auto`-adfærden
er byte-identisk med sikkerhedsforanstaltningen før PR-1.

#### API-nøglens omfang (`visionBridgeKeyScope.ts`)

Når kalderens API-nøgle begrænser `allowedConnections`, kvotepuljer
(`allowedQuotas`) eller modeller (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), vælger broen kun
omdirigerings- og beskrivelsesmodeller, som nøglen må bruge, på forbindelser,
som nøglen må bruge. Beskrivelseskaldet går derefter altid gennem OmniRoute-selvsløjfen med
headeren `x-omniroute-self-loop-key-id`, så den modtagende chatforespørgsel
håndhæver nøglens forbindelses- og modelpolitik igen. `enforceApiKeyPolicy()`
respekterer kun denne header sammen med selvsløjfens bearer-token, så den kan
kun begrænse adgangen, og et id, der ikke kan slås op, afvises.

Hvis ingen billedmodel er tilladt for nøglen, træder beskrivelsesforløbet til side,
og forespørgslen passerer uændret igennem med samme fail-open-adfærd som en
deaktiveret sikkerhedsforanstaltning (metadata
`{ skipped: true, reason: "no_permitted_vision_model" }`).
Forespørgsler uden en nøgle og nøgler uden disse begrænsninger fungerer præcis
som før.

#### Opgavebevidst beskrivelsesprompt (`modalityBridgeVisionTaskAware`)

Standard er **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) føjer
teksten fra den **seneste brugermeddelelse** (afkortet til 500 tegn) til den
grundlæggende beskrivelsesprompt, så beskrivelsen styres mod det, brugeren
faktisk spurgte om (codex-vision-proxy-mønstret), og beder visionmodellen om at
transskribere synlig tekst. Når flaget er slået fra — eller der ikke findes
nogen brugertekst — bruges grundprompten uændret.

Describe-selvsløjfens egen OpenAI-kompatible anmodning (`callVisionModelSingle()`
i `visionBridgeHelpers.ts`) anmoder altid om `image_url.detail: "high"` —
ubetinget, for alle kaldere/udbydere og uden at være styret af noget klientsignal.
Sampling med lav detaljegrad forringer OCR-nøjagtigheden netop for den
teksttransskriptionsopgave, som denne prompt anmoder om, så selve describe-kaldet
anmoder altid om høj detaljegrad, uanset hvilket detaljeniveau den oprindelige
indgående anmodning brugte. Dette påvirker kun brødteksten i den interne
describe-anmodning; det ændrer ikke, hvordan OmniRoute videresender kalderens
egen `image_url.detail` i den primære anmodning — denne standard anvendes
separat og kun for registrerede OpenCode-klienter i `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`). Anthropic-wireformatgrenen i
describe-selvsløjfen har intet `detail`-felt og påvirkes ikke af nogen af
standarderne.

#### Grænse for describe-output (`modalityBridgeVisionMaxChars`)

| Nøgle                          | Standard | Interval            |
| ------------------------------ | -------- | ------------------- |
| `modalityBridgeVisionMaxChars` | `0`      | `0` eller 100–50000 |

`0` (standard) betyder **ingen grænse** — beskrivelsen, der returneres af
`callVisionModel()`, sendes videre uændret, så den eksisterende adfærd
bevares. Enhver værdi i intervallet 100–50000 afkorter beskrivelsen med
suffikset `…`, før den indsættes igen som `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` i `src/lib/guardrails/visionBridge.ts`).
Hæv værdien til detaljetunge OCR-opgaver, hvor downstream-modellen har brug
for hele transskriptionen; sænk den for at begrænse tokenforbruget for
snakkesalige visionmodeller. Dashboardfeltet findes i panelet Advanced på
fanen Vision (`modality-bridge-max-chars` i `ModalityBridgeVisionTab.tsx`) og
hæver enhver værdi mellem 1 og 99 til minimumsværdien 100, mens et eksplicit
`0` forbliver uændret — `0` er i sig selv en gyldig Zod-værdi
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`) og ikke blot
standardværdien for "ikke angivet".

#### Describe-cache (`modalityBridge/bridgeCache.ts`)

Procesdækkende, delt LRU- og TTL-cache i hukommelsen til describe-output.
Nøgle = `sha256(imageRef + composedPrompt + configuredBridgeModel)` med
længdepræfiksindramning (ingen kollisioner mellem feltgrænser). Modelkomponenten
er den **konfigurerede** bridge-model, ikke den model, der faktisk svarede —
`callVisionModel` kan internt falde tilbage til en anden model, og nøgleinddeling
pr. forsøg ville fragmentere cachen. Mislykkede describe-kald caches aldrig.
Indstillinger:

| Nøgle                           | Standard | Interval |
| ------------------------------- | -------- | -------- |
| `modalityBridgeCacheEnabled`    | `true`   | —        |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440   |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000  |

#### Normalisering af fjernbilleder (describe-selvsløjfe/base64-hentning)

Når bridgen selv henter et **fjernbillede** — Anthropic-describe-selvkaldet
og base64-konverteringen til claude-wireformat
(`ensureBase64ImagesForClaudeWire`), begge via
`fetchRemoteImageAsDataUri()` i `visionBridgeHelpers.ts` — sendes den
resulterende data-URI gennem `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`), før den indlejres i anmodningen til
visionmodellen. For store billeder nedskaleres til en **langside på 2048 px**
(svarende til den størrelsesgrænse, som OpenAI/Anthropic allerede anvender på
serversiden), hvilket reducerer uploadmængden og latenstiden uden at ændre det,
visionmodellen ser. Skaleringen bruger `sharp`, som indlæses via dynamisk
import: På en platform, hvor dens native binære fil ikke kan indlæses, kaster
`normalizeDataUri()` **aldrig en fejl** — den falder tilbage til at sende de
oprindelige bytes uændret videre, så describe-/base64-konverteringsforløbet
altid fortsætter med at fungere. Bytes, der ikke repræsenterer et billede
(en hentning, som ikke returnerede et afkodeligt billede), sendes også videre
uændret. Denne normalisering er begrænset til billeder, som bridgen henter til
sit eget selvkald — den anvendes aldrig på kalderens rå passthrough-payload,
hvilket er i overensstemmelse med princippet om, at ændringer kun må foretages
efter aktivt tilvalg (ufravigelig regel nr. 20).

#### Indstillingsskema + migrering

De nye `modalityBridge*`-nøgler Zod-valideres i `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, `modalityBridgeCache*`-trioen og
`modalityBridgeAudio*`-gruppen, der bruges af Audio Bridge. Migreringen
`141_modality_bridge_settings.sql` kopierer eksisterende ældre
`visionBridge*`-værdier til de tilsvarende nye nøgler (idempotent og overskriver
aldrig en `modalityBridge*`-værdi, som en operatør har angivet); de ældre nøgler
accepteres fortsat som fallback ved læsning i én udgivelsescyklus.

#### Transparensheader + statistik

Describe-transformerede svar indeholder
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(oprettet af `buildModalityBridgeHeader()` i `modalityBridge/bridgeStats.ts`
og påført af `withModalityBridgeHeader()` i `src/sse/handlers/chatHelpers.ts`).
Omdirigerede anmodninger får **ingen** header — payloaden blev ikke ændret, og
modelskiftet er allerede synligt i svarbrødtekstens `model`-felt.

`GET /api/modality-bridge/stats` (administrationsgodkendelse, samme niveau som
`GET /api/settings`) returnerer tællerne pr. modalitet i hukommelsen
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` for `vision`, `audio` og
`video`. `averageLatencyMs` bruger `latencySamples`, ikke alle forsøg, som
nævner; en handling uden tidsmåling opretter ikke en kunstig prøve på nul
millisekunder. `bridged` forbliver det bagudkompatible alias for vellykkede
konverteringer; mislykkede forsøg øger det ikke.
Tællerne nulstilles som tilsigtet, når processen genstartes
(telemetri, ikke bogføring).

#### Konfiguration af dashboard

Den dedikerede dashboardside er
`/dashboard/settings/modality-bridge`. Dens URL-adresserbare faner `Vision`, `Audio`
og `Video` bevarer forespørgselsparametrene, mens værdien `tab` ændres.
Fanen Vision viser aktivering, tilstand, modelvalg (inklusive den automatiske
standard), opgavebevidst prompting, avancerede grænser for timeout/billede/beskrivelseslængde/cache,
kørselstællere
og en beskyttet prøveanmodning. Fanen Audio er også aktiv: Den viser
aktivering, en modelvælger udelukkende til STT med Auto, grænser for timeout/maksimal kliplængde,
lydtællere og en `input_audio`-prøvetest. Fanen Video er funktionel: Den viser
kørselstilstanden for FFmpeg/ffprobe — én af fire eksplicitte UI-tilstande (`unknown`, mens
sonderingen er i gang eller ikke kunne fuldføres, `restricted` på en dashboardvært, der ikke er
loopback, hvor sonderingen springes over på klientsiden, `unavailable`, når der er sonderet,
og værktøjerne er bekræftet som manglende, eller `available` med versionerne af FFmpeg/ffprobe) — gemmer
grænser for aktivering/model/billedantal/video/timeout, filtrerer modelvælgeren til modeller
med understøttelse af billeddata og viser videotællere.

Det tidligere Vision Bridge-kort under AI-indstillinger er et kompatibilitetslink til den
nye side; det har ikke længere sin egen ekstra kopi af formularen. Media Providers
linker også arbejdsgangene Image-to-Text og Speech-to-Text til de tilsvarende faner i Modality
Bridge uden at fjerne det eksisterende Speech-to-Text-testmiljø.

**Omgåelse af adgangskontrol for selv-loop:** Når describe-kaldet routes gennem OmniRoutes
eget `/v1`-selv-loop (udbydermodel, der ikke er standard), sender underanmodningen
`x-omniroute-admission-bypass: internal` og godkendes med de fastlagte
selv-loop-legitimationsoplysninger — den lokale `sk_omniroute`-sentinel i lokal tilstand eller
den operatørkonfigurerede miljønøgle `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350), så
installationer med `REQUIRE_API_KEY=true` stadig kan udføre describe-kaldet. Omgåelsen
accepteres kun for præcis disse legitimationsoplysninger, så eksterne klienter ikke kan bruge
headeren til at springe adgangskontrollen over.

Ældre standardværdier findes i `src/shared/constants/visionBridgeDefaults.ts`; de
nye standardværdier for tilstand/opgavebevidsthed/cache samt indstillingsresolveren findes i
`src/shared/constants/modalityBridgeDefaults.ts`. Beskyttelsesmekanismen stiller en
`deps`-konstruktørindstilling til rådighed, så tests kan injicere falske implementeringer af
`getSettings` og `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Opsnapper chatanmodninger med lyd, før de når et mål, der ikke
vides at acceptere lydinput. Den omdirigerer aldrig chatanmodningen: Lyddele
transskriberes via det eksisterende OpenAI-kompatible multipart-endpoint, og den
valgte chatmodel fortsætter med teksttransskriptioner.

Forløb:

1. Fastlæg `supportsAudio` via `getResolvedModelCapabilities()`. Eksplicitte
   metadata fra udbyderregistret har forrang, efterfulgt af statiske modelmetadata og derefter synkroniserede
   `modalities_input`. En deklareret inputliste uden `audio` er `false`; hvis der ikke
   findes evidens for egenskaben, forbliver værdien `null`. Både `false` og `null` aktiverer den
   konservative bro, mens `true` omgår den.
2. Fastlæg indstillingerne `modalityBridgeAudio*`, og udtræk splejsbare lyddele på øverste
   niveau fra hver meddelelse via den delte detektor `detectMediaParts()`.
   Understøttede wire-formater er OpenAI `input_audio`, `audio_url` og
   `source.media_type: "audio/*"`. Indlejret lyd registreres med henblik på routing, men
   fjernes ikke via splejsningsforløbet. Arbejdet begrænses af `modalityBridgeAudioMaxClips`;
   senere dele forbliver urørte.
3. Respekter en konfigureret `provider/model`, eller lad `selectAudioBridgeModel()` gennemgå
   `AUDIO_TRANSCRIPTION_PROVIDERS` i stabil katalogrækkefølge og vælge den første
   model med brugbare, aktive legitimationsoplysninger til udbyderen.
4. `callAudioTranscription()` konverterer base64-/data-URI-lyd til en multipart-
   `file` eller downloader en ekstern `audio_url` via den offentlige udgående
   beskyttelsesmekanisme med DNS-fastlåsning og en grænse på 25 MB. Derefter POSTer den filen og den valgte
   model til det lokale `/v1/audio/transcriptions`-selv-loop, godkendt med
   `resolveSelfLoopBearer()`. Den eksisterende transskriptionsrute udfører det normale
   opslag af legitimationsoplysninger, håndtering af nedkøling/hastighedsbegrænsning og dispatch til udbyderen.
5. Vellykkede kald erstatter deres dele med `[Audio N]: <transcript>`. Kaldene
   kører med `Promise.allSettled`: En individuel fejl bevarer den oprindelige
   lyddel (#4012-kontrakt). Hvis alle kald mislykkes, og målet beviseligt har
   `supportsAudio === false`, bliver delene til
   `[Audio N]: (unavailable — no STT provider connected)` (#8430-kontrakt). For
   et ukendt mål (`null`) forbliver resultatet urørt, hvis alle kald mislykkes. Et beviseligt
   mål, der kun understøtter tekst, og som ikke har brugbare STT-legitimationsoplysninger, modtager den samme eksplicitte
   pladsholder uden at foretage et netværkskald.

Vellykkede transskriptioner bruger den procesomfattende LRU-/TTL-cache for Modality Bridge. Nøglen
kombinerer lydreferencen, den stabile handlingsetiket `audio-transcription`
og den valgte STT-model; fejl caches aldrig. Lydforsøg opdaterer de delte
tællere `bridged`, `cacheHits`, `failures` og `lastUsedAt`.
Transformerede svar indeholder
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; urørte
anmodninger modtager ikke et Audio Bridge-segment.

Kørselsindstillinger lagres i databasen og valideres med Zod:

| Nøgle                         | Standardværdi | Interval                |
| ----------------------------- | ------------- | ----------------------- |
| `modalityBridgeAudioEnabled`  | `true`        | —                       |
| `modalityBridgeAudioModel`    | `""`          | Automatisk eller STT-ID |
| `modalityBridgeAudioTimeout`  | `60000`       | 1000–300000             |
| `modalityBridgeAudioMaxClips` | `3`           | 1–10                    |

Den delte cache styres fortsat af `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` og `modalityBridgeCacheMaxEntries`.

### Videobro (`videoBridge.ts`, `videoBridgePipeline.ts`)

Opfanger videodele på øverste niveau i Chat Completions-`messages` og Responses
API-`input`, før et mål uden kendt indbygget videounderstøttelse kaldes.
Understøttede formater er `input_video`, `video_url`, `video_source`, HTTPS-URL'er
og `data:video/*;base64,...`-data-URI'er. Almindelige filnavne i tekst behandles
ikke som video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) håndterer gennemgang af
anmodningen, kontrollen af funktionalitet/politik, aggregering pr. anmodning og
svarpayloaden. Arbejdet pr. video — indhentning, cachen for hele resultatet,
beskrivelse af en billedsekvens (som integrerer enhver lydtransskription,
anroberen har angivet) samt målinger/afbrydelse/oprydning pr. forsøg — er skjult
bag `processVideoPart` i `videoBridgePipeline.ts`, som kaldes én gang pr. videodel
i `preCall`'s løkke. Modulet definerer også de eksplicitte portgrænser
`VideoMediaBrokerPort` (indhentning af bytes og udtrækning af samplede billeder),
`VideoAudioTranscriptionPort` (integration af en lydtransskription angivet af
anroberen med de samplede billedtekster) og `VideoDrilldownPort`
(persistensgrænsen for detaljeanalyse af billeder; endnu ikke forbundet med
`processVideoPart` — i dag er det kun den separate
`/api/modality-bridge/video/drilldown`-rute, der skriver poster til
detaljeanalyse).

Den offentlige `/v1`-anmodningssti importerer eller starter aldrig en
underproces. Fjernvideoer downloades med en grænse på 50 MiB; indlejrede
base64-videoer har en konservativ grænse på 36 MiB for den afkodede størrelse
pr. video, så model-/meddelelses-/indramningskonvolutten kan holde sig inden for
den offentlige JSON-anmodningsgrænse på 50 MiB. Indlejret længde og estimeret
afkodet størrelse kontrolleres før allokering. HTTPS er påkrævet for den
oprindelige fjern-URL og hver omdirigering ved hjælp af den eksisterende
beskyttelse for udelukkende offentlige udgående forbindelser med DNS-fastlåsning.
Bytene krydser derefter præcis den interne
`POST /api/modality-bridge/video/extract`-brokergrænse. Denne rute er både
`LOCAL_ONLY` og `SPAWN_CAPABLE`, accepterer kun en proceslokalt godkendt
anmodning fra en betroet loopback-adresse og accepterer aldrig en URL, en
filsystemsti, en eksekverbar fil eller en argumentliste. API'ets pipeline for
grænser på brødtekststørrelsen og handlerens trinvise læsning af brødteksten
håndhæver uafhængigt af hinanden en grænse på 50 MiB for brokerinput. Den
begrænsede kø kører én udtrækning ad gangen, tillader fire ventende job og
begrænser ventende input til 100 MiB.

I brokeren læser `ffprobe` en privat lokal fil; den faste tilladelsesliste over
formater udelukker afspilningsliste- og manifestformater. For tilladte
MOV-familiecontainere er eksterne MOV-datareferencer som standard fortsat
deaktiveret, og den faste kommando aktiverer dem ikke. Både `ffprobe` og `ffmpeg`
bruger en protokoltilladelsesliste, der kun indeholder `file`, én tråd, faste
argumentarrays, ingen shell og eksekverbare filer fundet via `PATH`.
Coverstreams med vedhæftede billeder er ikke afspilningskandidater. Alle
afspilningsbare streams skal overholde grænserne, og en eksplicit standardstream
foretrækkes før det deterministiske fallback til det laveste indeks. Videoer er
begrænset til 600 sekunder, 8.192 pixels pr. dimension og 33.554.432
kildepixels. FFmpeg sampler 1–16 JPEG-billeder ved midtpunkter, nedskalerer den
lange kant til højst 1.024 pixels uden at opskalere mindre input og modtager
aldrig en URL. Sampling er som standard `uniform`. De valgfrie politikker
`scene_aware` og den eksperimentelle `segment_aware` udfører ét yderligere fast
FFmpeg-gennemløb over den allerede validerede lokale stream, vælger et begrænset
antal `showinfo`-scenetidsstempler og falder deterministisk tilbage til de samme
ensartede midtpunkter ved detektorfejl, timeout, fejlformateret output eller et
tomt kandidatsæt. Segmentbevidst tilstand tildeler midpoint-samples proportionalt
med de validerede sceneintervaller; evidens og fallbackadfærd for segmentbevidst
tilstand beskrives nærmere nedenfor. Den faste grænse på 16 billeder anvendes
efter udvælgelsen i alle politikker. Når en scenebevidst anmodning kun har et
budget på ét billede, bruger den det ensartede midpoint for det aktive vindue for
hele videoen eller fokusvinduet og rapporterer `policyEffective: uniform`: Ét
enkelt udvalgt scenebillede kan ikke bevare begge tidsmæssige ender. En anrober
kan valgfrit angive et endeligt fokusvindue (`start`/`end` i sekunder);
grænserne afskæres til mediets varighed, omvendte eller ikke-endelige vinduer
afvises, og alle samplingpolitikker udføres kun inden for det normaliserede
interval. Det resulterende vindue inkluderes i samplingmetadataene og i det
ikke-betroede beskrivelsespræfiks, så efterfølgende modeller kan skelne et
fokuseret uddrag fra hele tidslinjen.

Semantisk fokus for billedtekster er en separat, eksplicit indstilling.
Standardanalysetilstanden `full` bevarer den eksisterende prompt til billeder og
videresender aldrig anmodningstekst til billedtekstmodellen. I tilstanden
`focused` læser broen kun den seneste ikke-tomme, brugerforfattede
`text`/`input_text` fra den samme Chat- eller Responses-container, normaliserer
den til NFC, samler kontroltegn og blanktegn og begrænser den til 500
Unicode-kodepunkter. Et tomt resultat falder tilbage til den nøjagtige
`full`-prompt. Et anvendeligt hint serialiseres som JSON i en dedikeret blok
med ikke-betroet brugerkontekst og må kun prioritere observerbare detaljer; det
kan ikke tilsidesætte den separate advarsel mod at følge instruktioner, der er
synlige eller hørbare i mediet. Tekstligt fokus udleder aldrig `start`/`end` og
ændrer ikke den tidsmæssige sampler.

#### FU-07 strukturel segmentevidens

`segment_aware` bruger én afgrænset foranalysekørsel over den allerede validerede
lokale videostrøm. Den faste filterkæde skalerer først til højst 320 pixels i
bredden, registrerer sceneskift og fastfrosne intervaller og sampler derefter med
1 billede pr. sekund for at måle sløring, gennemsnitlig luminans samt
rumlig/temporær information. Kørslen er begrænset til 600 strukturelle samples,
én FFmpeg-/filtertråd, de samme tilladelseslister for protokollen `file` alene
og containere, en grænse på 1 MiB for procesoutput og højst 30 sekunder inden
for brokerens delte afbrydelse/deadline. Den accepterer aldrig en kommando, et
filter, en sti eller en URL fra anmodningen.

De strukturelle værdier er deterministisk samplingsevidens, ikke en semantisk
forståelse af videoen. De udleder ikke motiver, handlinger, undertekster, tale
eller brugerhensigt. Scene- og fastfrysningsgrænser danner segmenter;
fastfrysningsdækning, sløring, eksponering, rumlig detaljegrad og temporær
ændring påvirker kun, hvordan det eksisterende budget på 1–16 billeder
fordeles. Et fuldstændigt fastfrosset segment begrænses til ét billede, mens
ikke-fastfrosne segmenter konkurrerer om det resterende budget. Når der er
flere grænser end billeder, bevares ensartet dækning af tidslinjen, så hurtige
klip tidligt i videoen ikke kan skjule et langt afsluttende segment.
Scenegrænser inden for foranalysens opløsning på 1 sekund fra en
fastfrysningsgrænse slås sammen.

Manglende filtre, fejlformateret/tom evidens, en detektorfejl eller timeout for
den afgrænsede foranalyse falder tilbage til den præcise politik med ensartede
midtpunkter. En afbrydelse fra kalderen eller brokerens deadline falder ikke
tilbage: Den afslutter den igangværende underproces, forhindrer efterfølgende
udtrækning af billeder, og det private midlertidige katalogtræ fjernes i
`finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genererer deterministiske, ægte
FFmpeg-fixtures til besparelser på undertekstningskald efter deduplikering,
budgetfordeling ved tæt bevægelse, evidens for sløring/eksponering/SI-TI,
hurtige klip med en lang afslutning og falske positiver ved gradvis udtoning.
Det registrerer foranalysens faktiske forløbstid og, hvor `/usr/bin/time` er
tilgængelig, den underordnede proces' CPU-forbrug og maksimale RSS. Dets
kvalitetskontroller er kun strukturelle orakler. Kvaliteten af den virkelige
undertekstningsmodel forbliver `HOLD`, fordi dette testværktøj ikke har noget
autoriseret endpoint eller nogen fastlåst bedømmer. Monetære besparelser
forbliver også `HOLD`, medmindre `--caption-cost-per-call-usd` angiver et
eksplicit positivt omkostningsestimat pr. kald; scriptet fabrikerer aldrig
nogen af resultaterne.

Hvert billede er begrænset til 4 MiB, alle rå billeder tilsammen til 23 MiB og
det serialiserede brokersvar til 32 MiB. En privat midlertidig mappe fjernes i
`finally`. OmniRoute inkluderer ikke FFmpeg og accepterer ikke en brugerdefineret
sti til den eksekverbare fil. Før undertekstning anvender broen en konservativ
visuel deduplikeringskørsel: Hver JPEG reduceres til en 16×16 gråtonebuffer og
sammenlignes kun med det senest bevarede billede. Ved et ønsket
undertekstningsbudget på mere end ét billede leverer udtrækningen en afgrænset
pulje af kandidater på op til det dobbelte af budgettet og aldrig mere end 16
billeder. Den ønskede grænse anvendes først efter deduplikering, og den første
og sidste valgte kandidat bevares under den endelige udtynding, når budgettet
er mindst to. Den versionsstyrede politik
`grayscale-16x16-mean-cells-v2` bruger den største værdi af den gennemsnitlige
luminansforskel og andelen af miniatureceller, hvis normaliserede forskel er
mindst 0,05. Duplikattærsklen er konstanten 0,04, som er valgt af hensyn til
forudsigelighed frem for at være eksponeret som en kørselsindstilling. Dette
sekundære signal med høj kontrast bevarer små bevægelser og ændringer i synlig
tekst, som en sammenligning baseret alene på gennemsnittet kan skjule. Fejl i
komparatoren eller dekoderen falder tilbage og bevarer dækningen.
Outputmetadata skelner mellem udtrukne kandidater, billeder, der blev anvendt
korrekt, og visuelle duplikater, der blev fjernet.

En eksplicit markeret videodel kan anmode om et tidsstemplet kontaktark. Broen
opbygger et JPEG-gitter med højst 4 kolonner og 16 billeder. Hver celle på 512
pixels indbrænder kildens tidsstempel i et nederste bånd med høj kontrast, mens
de samme tidsstempler bevares i tekstmetadata til efterfølgende tilknytning og
revision. Den komplette JPEG er fortsat begrænset til 32 MiB. Hvis `sharp` ikke
kan afkode eller sammensætte gitteret, falder broen tilbage til de individuelle
JPEG-billeder; en klientafbrydelse videreføres stadig gennem
kontaktarkoperationen.

Evidens til promovering holdes bevidst adskilt fra den syntetiske
mikrobenchmark for sammensætning.
`scripts/perf/video-bridge-contact-sheet-eval.ts` definerer et
skemaversioneret A/B-testværktøj til virkelige OpenAI-kompatible synsmodeller.
Det måler udbyderrapporterede tokens, samlet forløbstid fra start til slut
(inklusive sammensætning af kontaktarket), antal modelkald og bevarelse af
manifestdefinerede fakta. Rå modelsvar skrives ikke til rapporten; kun
SHA-256-digests og ID'er for matchede fakta bevares. Testværktøjet foretager
ingen netværkskald eller betalte modelkald, medmindre `--execute-real` angives,
og `--model`, `OMNIROUTE_BASE_URL` og `OMNIROUTE_API_KEY` er konfigureret.
Uden denne eksplicitte virkelige kørsel forbliver den maskinlæsbare vurdering
`HOLD`; syntetiske målinger af nyttelast/antal kald alene er ikke evidens til
promovering.

Kaldere kan vedhæfte et valgfrit `transcript.cues`-array til en understøttet
videodel, når de allerede har justeret tekst. Hver cue skal indeholde `text`,
et endeligt `start`/`end`-interval inden for den registrerede varighed og en
hvidlistet `source` (`client`, `embedded` eller `audio-bridge`); `confidence`
er som standard `1` og skal forblive mellem `0` og `1`. Nøjagtigt identiske
cues slås sammen. OmniRoute starter aldrig transskription ud fra disse metadata:
Validerede cues kopieres til det beskrevne resultat med kilde, konfidens og
interval og gengives som observationer, der ikke er tillid til, sammen med
billedunderteksterne. Ugyldig tekst, tekst uden for intervallet eller tekst
uden proveniens afvises i stedet for at blive blandet ind i
undertekststrømmen. Begge transskriptionskanaler i anmodningsteksten
normaliserer angivet proveniens til `client`, herunder selvangivne mærkater som
`embedded` eller `audio-bridge`. Kun en serverejet adapter kan tildele disse
betroede mærkater gennem argumentet `trustedSource`, der kun er tilgængeligt
via kode; et JSON-felt i en anmodning kan ikke nå dette argument.
Transskriptionstekst forbliver indhold udledt af medier, som der ikke er tillid
til, uanset dets proveniens, og må aldrig afgøre autorisation.

En avanceret kalder kan angive et `audioTranscript`-spor til den samme video;
det behandles som tekst leveret af klienten, ikke som bevis på transskription på serveren.
Fusionsgrænsefladen kører visuelle observationer og lydobservationer under
én deadline og ét afbrydelsessignal, ordner dem på en fælles tidslinje, slår
helt identiske elementer sammen og rapporterer et delvist resultat, når kun den
ene side lykkes. Et ugyldigt `audioTranscript` nedgraderes til dette delvise
resultat — den visuelle beskrivelse bevares, og lydgrenen registrerer en
saneret fejlkode — i stedet for at hele videoen fejler. Tilgængeligheden for
hver gren, markeringen for delvist resultat og de sanerede fejlkoder bevares i
beskrivelsesresultatet, i metadataene for sikkerhedsværnet
(`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), i resultatcachens metadata og i broens
fusionsoptællere. Video Bridges standardsti aktiverer ikke tale-til-tekst og
downloader heller ikke en ekstra kopi af mediet; uden dette eksplicitte spor
forbliver den udelukkende videobaseret.

**Opbevaring af transskription (#12150 P1).** Dette gælder automatisk, når
Video Bridge (som i sig selv er tilvalg) gengiver et transskriptionssignal —
der findes ikke et særskilt flag for opbevaring. Når en anmodning gengiver et
vilkårligt transskriptionssignal (et `transcript` angivet af kalderen eller et
fusioneret `audioTranscript`), markerer sikkerhedsværnet den som
`videoBridgeObserved` og producerer en redigeret skygge af videobeskrivelsen —
en identisk gengivelse, hvor hvert signals fritekstindhold erstattes med
`[redacted-video-transcript]`, opbygget ved at erstatte det strukturerede
signalfelt, før strengen sammensættes (aldrig ved at parse den fladgjorte tekst,
så intet signalindhold — hverken fjendtligt eller almindeligt, herunder indhold
med `]` såsom `[inaudible]`/`[music]` — kan overleve). Den vedvarende
anmodningstekst i kaldeloggen erstatter hver videoafledt tekstdel med denne
redigerede skygge, matchet via indholdslighed; `fullText`-ankeret genindlæses
fra den færdige sikkerhedsværnsnyttelast før kaldet, så matchet stadig lykkes,
efter at senere sikkerhedsværn i kæden (maskering af personhenførbare oplysninger
og legitimationsoplysninger, prioriteterne 10/95) har omskrevet
beskrivelsesteksten på stedet, og efter at injektion af systemprompt,
overdragelse og hukommelse har omformet beskedarrayet. Den tekst, der sendes
opstrøms til modellen, ændres ikke. En observeret anmodning udfylder heller
ingen vedvarende hukommelse (både anmodnings- og svarafledt udtræk springes
over), så modellens eget svar ikke kan gengive transskriptionstekst i
hukommelsen.

**Rå videofelter (#12430).** Når broen er aktiveret, og understøttelse af
indbygget video er ukendt eller mangler, aktiverer definerede
`transcript`-/`audioTranscript`-felter også `videoBridgeObserved`, selv efter
en fejl i beskrivelsen eller en `maxVideos`-grænse. `null` og tomme strenge
tæller med; fraværende felter og metadata, som ikke vedrører video, gør ikke.
Opbevarede kopier redigerer disse felter eller udelader anmodningen, og cacher
samt hukommelse omgås.

På disse reservestier bliver gyldige signaler fra kalderen til understøttede
`text`-/`input_text`-dele i stedet for ikke-standardiserede udbyderfelter.
Begge spor, der er angivet i anmodningen, forbliver upålidelige
`client`-observationer med en udtrykkelig advarsel om, at videoen ikke blev
beskrevet, og at tidsstemplerne ikke blev verificeret mod mediet. De
eksisterende grænser på 256 signaler/64 KiB i alt og grænserne pr. signal
gælder for de to spor samlet; tidsstempler skal ligge inden for mæglerens loft
på 600 sekunder og et eventuelt angivet fokusvindue. Ugyldige spor kasseres og
videresendes ikke som vilkårlig tekst; et gyldigt søskendespor kan stadig
anvendes, medmindre deres samlede grænse overskrides. Nullværdier/tomme felter
tilføjer ingen tekst. Denne reservesti tilføjer ingen hentning af medier eller
transskription. Transskriptionsudvidelsesfelter fjernes fra reservevideoens
beholder og dens `video_url`-/`source`-objekter. OpenAI's tilladelsesliste på
wire-niveau forbliver streng; videobeholdere med ukendt indbygget
understøttelse forbliver tilgængelige, og kendte mål, der kun understøtter
tekst, beholder sikre markører. Strukturerede redigeringsskygger beskytter den
tilføjede transskriptionstekst, mens den oprindelige, kalder-ejede anmodning
forbliver uændret. Mål med indbygget understøttelse og deaktiverede broer
bevarer deres eksisterende omgåelsesadfærd.

Yderligere opbevarede kopier bruger det samme signal for observerede
anmodninger. Det rå øjebliksbillede af klientanmodningen før sikkerhedsværnet,
den afventende anmodning i hukommelsen og loggen over tidligt afviste
anmodninger erstatter strukturelt transskriptionsfelter i videodele;
strengprompter, der syntetiseres af pipelinefaser og kontekstoverdragelse,
redigeres ved udgangen for den vedvarende anmodningstekst. Den vedvarende
`video_content_removed`-markør får fortsættelse via `previous_response_id` til
at lukke sikkert i stedet for at rekonstruere tekst, som bevidst blev
kasseret. Hvis en observeret anmodning mister sin redigeringsskygge pr. del før
logning, eller blot én af flere videoskygger ikke matcher efter senere
ændringer af anmodningen, udelades den opbevarede anmodningstekst helt i stedet
for at opbevare en kun delvist redigeret transskription.

For en observeret anmodning kan et modelsvar citere en hvilken som helst del af
transskriptionen uden en struktureret signalgrænse. Dens vedvarende
`responseBody` i kaldeloggen erstattes derfor af en udeladelsesmarkør; den
detaljerede pipelineartefakt (som kan indeholde opstrøms-/klienttekster og
streamsegmenter) opbevares ikke. Semantiske cacher, idempotenscacher og cacher
til genafspilning af ræsonnement omgår læsninger og skrivninger for denne
anmodning. Udbyderanmodningen og det klientvendte svar forbliver uændrede.
Tidlige keepalive-bytes tømmes fra den midlertidige buffer, når den detaljerede
artefakt udelades. Kiros advarsel om en misdannet EventStream rapporterer kun
nyttelastens antal bytes, aldrig dens indhold eller JSON-parserens rå fejl.
Dette hævder ikke, at alle uvedkommende udbyder-/plugin-diagnostikker er blevet
gennemgået; den bredere gennemgang af vedvarende datamodtagere spores i #11658.

Den interne `/api/modality-bridge/video/drilldown`-livscyklus er et separat,
loopback-/tokenautentificeret cachefundament. Hver handling kræver også et
kanonisk, uigennemsigtigt principal-id. Før en produktionsklient aktiveres, skal
den udlede dette id fra den autentificerede tenant og må aldrig videresende en
værdi valgt af klienten. Cachenøgler knytter denne principal til kanoniske
sessions- og videoreference-id'er, gemmer kun deres SHA-256-afledte nøgler og
afgrænser både læsninger og sletning til den samme principal. Cachen gemmer højst
16 afledte JPEG-billeder pr. post, udløber dem efter ti minutter og understøtter
afgrænsede `start`/`end`-læsninger eller eksplicit sletning af sessioner.

Hver principal er begrænset til 16 poster og 64 MiB kanoniske JPEG-data. Disse
grænser er uafhængige af det globale loft på 64 poster/256 MiB: pres på en
principals kvote fjerner kun denne principals mindst nyligt anvendte poster, før
global LRU-rydning overvejes. Udløbne poster fjernes fra både principalens og
den globale opgørelse ved cacheaktivitet, mens annullering og valideringsfejl
ikke gemmer en delvis erstatning.

Cachen afviser ikke-kanonisk Base64, overflødig padding, medier, der ikke er JPEG,
fejlformaterede eller afkortede JPEG-filer samt JPEG-filer, der frembringer en
advarsel under en afgrænset fuldbilledafkodning med `sharp`. Den genkoder hvert
accepteret billede som en kanonisk JPEG, udleder bredde og højde fra de afkodede
bytes i stedet for at stole på felter fra klienten og kasserer eventuelle
efterfølgende polyglot-bytes frem for at bevare dem. Kun den afgrænsede,
kanoniske, komprimerede buffer medregnes i begge kvoter. JSON-grænsen på
forbindelsen omfatter Base64-overhead for loftet på 32 MiB for afkodet input.
Hver gemt afledning registrerer sit validerede JPEG-format og sin validerede
opløsning, samplingpolitik, afledningsversion, oprettelsestidspunkt,
serverberegnede indholdshash og hashværdi for den overordnede reference samt den
betroede klients hashværdi for det overordnede indhold. Der kontrolleres for
annullering mellem asynkrone afkodnings-/hashfaser før den atomare lagring i
cachen.

Denne leverance forbinder endnu ikke en produktionsproducer til routen og
tilbyder ikke valg mellem varianter med flere opløsninger. Den transparente
anmodningssti i Video Bridge medfører derfor intet ekstra arbejde, mens
tenant-bundet afledning af principals og den fulde FU-08-livscyklus med flere
opløsninger fortsat er eksplicit opfølgningsarbejde frem for dokumenteret som
færdig funktionalitet.

Billederne tekstbeskrives sekventielt med den konfigurerede Video-model. En tom
Video-tilsidesættelse arver Vision-indstillingen. Hvis begge er tomme, vælger
Visions automatiske router den effektive model med understøttelse af
billedbehandling. Vellykkede billedtekster erstatter den oprindelige del med et
stabilt `[Video description:`-præfiks, der også markerer teksten som en ikke-betroet,
medieafledt observation og instruerer efterfølgende modeller i ikke at følge
instruktioner, som findes i mediet. Cachenøgler for billedtekster inkluderer
JPEG-bytene, prompten, tidsstemplet og den effektive model; kun vellykkede
billedtekster gemmes i cachen. Cacheposter bevarer den model, der faktisk
producerede det vellykkede resultat, herunder en fallback-model. Broen
rapporterer `mixed`, når forskellige billeder blev produceret af forskellige
modeller. Et cachehit genbruger denne produceridentitet i stedet for at
ommærke den som den anmodede routingplan. Resultatcachen for hele videoen har
som nøgle alle input, der ændrer outputtet — prompt, effektiv model,
samplingpolitik, antal billeder, semantisk analysetilstand, SHA-256-fingeraftrykket
af det normaliserede fokushint, fokusvindue, `transcript`, `audioTranscript` og
kontaktarkflaget — så en ændring af en hvilken som helst af disse dimensioner
giver et cachemiss og aldrig genbrug af et forældet resultat. Versionen,
tærsklen og det afgrænsede antal kandidatbilleder for den visuelle
deduplikeringspolitik er også eksplicitte i resultatcachens nøgle og metadata;
en politikændring kan derfor ikke genbruge en forældet beskrivelse af hele
videoen. Metadata for resultatcache v4 bevarer tilstanden og fingeraftrykket,
men aldrig den rå brugeropgave. Guardrail-metadata rapporterer både den anmodede
og den effektive analysetilstand; en anmodet `focused`-tilstand uden anvendelig
brugertekst rapporteres som effektivt `full`.

Guardrailen udtrækker alle understøttede videodele, men beskriver ikke mere end
`modalityBridgeVideoMaxVideos`. For et mål, der beviseligt har
`supportsVideo === false`, bliver mislykkede videoer og videoer over grænsen til
eksplicitte, sikre tekstmarkører, så ingen rå video overlever. Når kapabiliteten
er ukendt, bevarer disse dele deres videobeholder; et eventuelt
fallback-transkript følger den afgrænsede tekstkonvertering ovenfor. Mål med
`supportsVideo === true` omgår broen. Klientanmodningens afbrydelsessignal
forplanter sig gennem download, brokerkø, underprocesser og kald til
billedtekstgenerering. Afbrydelser stopper mellem videoer og falder aldrig åbent
tilbage til råt medie.

Kørselsindstillingerne er DB-understøttede og Zod-validerede:

| Nøgle                               | Standard    | Interval / adfærd                                                                                              |
| ----------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Valgfrit runtime-miljø, kræver aktivt tilvalg                                                                  |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` bevarer generiske billedtekster; `focused` bruger afgrænset, upålidelig kontekst fra den seneste bruger |
| `modalityBridgeVideoModel`          | `""`        | Nedarver modellen fra Vision Bridge                                                                            |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                           |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` eller proportional `segment_aware`; ved detektorfejl bruges `uniform` som reserve     |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                            |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                 |

Ældre gemte timeoutværdier for Video på over 120 sekunder begrænses til
brokerens deadline; nye indstillinger over denne grænse afvises.
`GET /api/modality-bridge/video/runtime` kræver pålidelig, stemplet lokalitet
via loopback før godkendelse eller runtime-kontrol og kræver derefter
administrationsgodkendelse. Det returnerer kun `available`, rensede versioner
af FFmpeg/ffprobe og en fast årsag, når runtime-miljøet ikke er tilgængeligt.
Det interne udtrækningsendepunkt er ikke en offentlig upload-API:
kømætning returnerer `503` plus `Retry-After`, afbrydelse fra en klient
returnerer `499`, og brokerens faste deadline returnerer `504`. Konverterede svar føjer
`video->text;model=<visionModel>;parts=<videos>` til den centrale
`x-omniroute-modality-bridge`-header uden at fjerne Vision- eller Audio-segmenter.

### PII-maskering (`piiMasker.ts`)

Kører i **begge** faser.

- **`preCall`** kloner payloaden, gennemgår `system`, `messages`, `input` og
  `prompt` (herunder elementer med rene strenge) og anvender `processPII()` (fra
  `@/shared/utils/inputSanitizer`) på strengfelterne `content`/`text`. Når
  `PII_REDACTION_ENABLED=true`, redigeres registrerede personoplysninger i den
  udgående payload. Dette er uafhængigt af `INPUT_SANITIZER_MODE` (som kun styrer
  politikken for prompt-injektion). Når redigering er slået fra, registrerer
  kaldet antallet af registreringer uden at omskrive indholdet.
- **`postCall`** dybdekloner svaret, kører `sanitizePIIResponse()` samt
  maskeringen til Responses-API-formatet (`maskResponsesOutput` — dækker
  `output_text` og `output[].content[].text`). Hvis der foretages nogen
  redigering, erstatter det ændrede svar originalen.

Sikkerhedsbegrænsningen blokerer aldrig; den annoterer (`meta.detections`,
`meta.redacted`) eller omskriver blot.

### Prompt-injektion (`promptInjection.ts`)

Registrerer adversarielle strukturer i brugerleveret indhold og håndhæver den
konfigurerede politik. Adfærden styres af miljøvariabler og
konstruktørindstillinger:

| Indstilling       | Miljøvariabel                                                                                                | Standard | Effekt                                                                                                                                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Aktiveret         | `INPUT_SANITIZER_ENABLED`                                                                                    | `true`   | Når værdien er `false`, afsluttes sikkerhedsbegrænsningen omgående.                                                                                                                                                |
| Tilstand          | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                              | `warn`   | Injektionspolitik: `block`, `warn` eller `log`. (`redact` accepteres af hensyn til bagudkompatibilitet, men fjerner **ikke** injektionstekst; omskrivning af PII i anmodninger styres af `PII_REDACTION_ENABLED`.) |
| Blokeringstærskel | Indstillingen `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Mindste alvorsgrad, der kræves for blokering. Medium er som standard kun til observation.                                                                                                                          |

**Præcedens for tilstand** (`getMode`): kalderens `options.mode` →
**tilsidesættelse via DB-funktionsflag** for `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → miljøvariablen `INJECTION_GUARD_MODE` → miljøvariablen `INPUT_SANITIZER_MODE` →
`warn`. En tilsidesættelse via dashboardet har derfor forrang for
miljøvariablerne, så brugergrænsefladen Feature Flags styrer den kørende
sikkerhedsbegrænsning direkte (uden genstart). DB-læsningen er fejlsikker:
Hvis den fejler, falder sikkerhedsbegrænsningen tilbage til den
miljøbaserede adfærd, og når der ikke er angivet nogen tilsidesættelse, er
adfærden identisk med en løsning, der kun bruger miljøvariabler.

Registreringskilder:

1. `sanitizeRequest()` fra `@/shared/utils/inputSanitizer` (det fælles sæt
   detektorer, der bruges andre steder i pipelinen).
2. Indbyggede `DEFAULT_GUARD_PATTERNS` (i øjeblikket `system_override_inline` og
   `markdown_system_block`, begge med alvorsgraden `high`).
3. Valgfrie `customPatterns`, der overføres via konstruktørindstillinger
   (strenge, regulære udtryk eller poster af typen `{ name, pattern, severity }`).

Når `mode === "block"` **og** mindst én registrering opfylder tærsklen for
alvorlighedsgrad, returnerer `preCall` `{ block: true, message: "Request rejected:
suspicious content detected" }`. I tilstandene `warn`/`log` logger guardrailen,
men tillader kaldet. Den fælles hjælpefunktion `evaluatePromptInjection()` eksporteres
også til kaldere, der har brug for at evaluere prompts uden at gå gennem registret.

**Scanningsgrænse (v3.8.20):** Detektoren undersøger kun de **første 16 KB** af
den sammenkædede prompttekst — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 byte) i
`src/shared/utils/inputSanitizer.ts`. Både `detectInjection()` og
`evaluatePromptInjection()` anvender `slice(0, MAX_INJECTION_SCAN_BYTES)`, før
mønsterløkken køres. Injektionsdirektiver findes nær starten af et input, så dette
begrænser regex-CPU/GC for payloads på flere hundrede KB uden at svække registreringen (jf.
#3932, #4041).

### Maskering af legitimationsoplysninger (`credentialMasker.ts`)

Kører i **begge** faser og sidst i standardkæden (prioritet `95`). Bortredigerer
velkendte mønstre for API-nøgler og hemmelige tokens fra den udgående payload
(meddelelsesindhold, argumenter til værktøjskald og værktøjsresultater) **samt**
udbyderens svar, så legitimationsoplysninger, der indsættes i en prompt (eller
gentages i et værktøjsresultat), ikke lækkes til den eksterne udbyder eller
tilbage til klienten.

- **Kun efter aktivt tilvalg**, samme konvention som bortredigering af PII (i tilknytning
  til hård regel nr. 20): deaktiveret, medmindre
  `settings.credentialRedactionEnabled === true` **eller**
  `CREDENTIAL_REDACTION_ENABLED=true`. Når den er slået fra, gør guardrailen intet —
  den blokerer aldrig og omskriver aldrig.
- `redactCredentials()` gennemgår hele payload-/svartræet (`walkValue()`,
  beskyttet mod prototypeforurening og cyklussikker via `WeakSet`) og erstatter
  forekomster med en `[REDACTED:<type>]`-pladsholder, mens kun de grene, der
  faktisk er ændret, klones.
- `CREDENTIAL_PATTERNS` dækker nøgler til LLM-udbydere (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS-/SaaS-tokens (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), betalingsnøgler (Stripe, Square), cloud-
  nøgler (AWS-adgangsnøgle, Twilio, SendGrid, Mailgun), private nøgler/JWT'er,
  forbindelsesstrenge med legitimationsoplysninger (`mongodb://user:pass@...` osv.) samt
  et generisk mønster for værdier i `Authorization`-/`x-api-key`-/`api-key`-/`apikey`-
  headers. Header-formede nøgler (`authorization`, `x-api-key`, `api-key`,
  `apikey`) bortredigeres strukturelt (kun værdien; skemapræfikser som
  `Bearer `/`Basic ` bevares) i stedet for via det generiske tekst-regex.
- Guardrailen blokerer aldrig; den omskriver (`modifiedPayload` /
  `modifiedResponse`) og annoterer (`meta.credentialsRedacted`, `meta.count`) kun.

Regressionsværn: `tests/unit/credential-masker-guardrail.test.ts`.

## Basiskontrakt (`base.ts`)

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
  block?: boolean; // true afbryder kæden
  message?: string; // vises ved blokering
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // returneres af preCall for at omskrive anmodningen
  modifiedResponse?: TValue; // returneres af postCall for at omskrive svaret
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

En guardrail signalerer "ingen ændring" ved at returnere enten `void`, `{}` eller
`{ block: false }`. Returnering af en `modifiedPayload`/`modifiedResponse` erstatter
den værdi, der løber gennem kæden til efterfølgende guardrails.
`signal?: AbortSignal` viderefører kalderens livscyklus til guardrails. En afbrudt anmodning er den bevidste fail-open-undtagelse: mediebroer stopper arbejdet og rydder op uden at gendanne rå medier til et mål, som med sikkerhed ikke understøtter dem.

## Register (`registry.ts`)

Singletonen `guardrailRegistry` eksponerer:

- `register(guardrail)` — tilføjer en guardrail (eller erstatter efter normaliseret navn) og
  sorterer igen efter stigende `priority`.
- `clear()` / `list()` — administrative hjælpefunktioner.
- `runPreCallHooks(payload, context)` — gennemløber aktive guardrails, fører
  payloaden gennem `modifiedPayload` og stopper ved den første `block: true`.
- `runPostCallHooks(response, context)` — samme forløb på svarsiden.
- `resetGuardrailsForTests({ registerDefaults })` — rydder tilstanden og
  genregistrerer eventuelt standarderne for ren testisolering.

Begge kørselsfunktioner returnerer `{ blocked, payload|response, results, guardrail?, message? }`,
hvor `results` er et array af `GuardrailExecutionResult`-poster, som indeholder
felterne `blocked`, `skipped`, `modified`, `error` og `meta` for hver guardrail,
hvilket er nyttigt til sporing.

### Deaktivering af guardrails pr. anmodning

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` samler en
duplikatfri liste over guardrail-navne, som skal springes over for den aktuelle
anmodning. Kilder (alle valgfrie, alle flettes):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` i anmodningens body (på øverste niveau)
- `metadata.disabledGuardrails` i anmodningens body
- Headeren `x-omniroute-disabled-guardrails` (eller den ældre
  `x-disabled-guardrails`)

Værdier kan være arrays af strenge eller en kommasepareret streng; navne
normaliseres til kebab-case med små bogstaver (`pii_masker` → `pii-masker`). Resultatet
videregives via `context.disabledGuardrails` til registret, som springer
matchende guardrails over (`skipped: true` i `results`).

## Udførelsesrækkefølge

For hver anmodning, der går gennem `src/sse/handlers/chat.ts` og
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` opbygger listen over elementer, der skal springes over, ud fra API-nøglen, body
   og headers.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` kører guardrails i stigende
   prioritetsrækkefølge:
   - Deaktiverede guardrails registreres som `skipped`.
   - Hver guardrails `preCall` kan omskrive payloaden via `modifiedPayload`.
   - Den første `block: true` afbryder kæden, og handleren returnerer
     et afvisningssvar fra den pågældende guardrail.
3. Den (potentielt omskrevne) payload sendes videre til kombinationsrouting og upstream-
   videresendelse.
4. Når svaret er samlet, kører `guardrailRegistry.runPostCallHooks(...)`
   den samme kæde på svaret. `block: true` her kasserer upstream-
   svaret.

Guardrails, der udløser fejl, registreres med `error: <message>` og logges via
`logger.warn`, men kæden fortsætter — den er bevidst designet til at være fail-open.

## Konfiguration

Miljøvariabler, der læses af de indbyggede guardrails:

| Variabel                              | Bruges af                 | Effekt                                                                                                           |
| ------------------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Angiv `false` for at deaktivere detektering fuldstændigt.                                                        |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Injektionspolitik: `warn`, `block` eller `log`. Den ældre værdi `redact` omskriver ikke injektionstekst.         |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Tilstand for injektionsbeskyttelsen; også et DB-feature-flag, der **tilsidesætter** miljøvariablerne (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Den laveste alvorlighedsgrad, som `MODE=block` afviser: `high` (standard), `medium` eller `low`.                 |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Ældre alias for `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                               |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Når værdien er `true`, redigeres PII i anmodningen (uafhængigt af injektionstilstanden).                         |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Styrer maskeringsadfærden på svarsiden.                                                                          |

Modality Bridge-guardrails læser kørselskonfigurationen fra det DB-understøttede
indstillingslager (`getSettings()`), ikke fra miljøvariabler. Visions primære nøgler er
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` og
`modalityBridgeCacheMaxEntries`. De ældre
`visionBridge*`-nøgler accepteres kun som det dokumenterede læsefallback i én cyklus;
dashboardet skriver med de primære nøgler. Standardværdier og fallback-
resolveren findes i `src/shared/constants/modalityBridgeDefaults.ts`, mens ældre
konstanter er bevaret i `src/shared/constants/visionBridgeDefaults.ts`.

Lyd bruger `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` og `modalityBridgeAudioMaxClips` samt de delte
`modalityBridgeCache*`-indstillinger. Lyd har intet fallback til ældre nøgler, da disse
nøgler blev introduceret med Modality Bridge-skemaet.

Video bruger `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` og
`modalityBridgeVideoTimeout` samt de delte `modalityBridgeCache*`-indstillinger.
Funktionen er som standard deaktiveret, fordi FFmpeg/ffprobe er valgfrie driftsmæssige
afhængigheder, og billedtekstning af frames øger latenstid og modelomkostninger.

## Tilpassede guardrails

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

Trin:

1. Opret `src/lib/guardrails/myGuardrail.ts`, som udvider `BaseGuardrail`.
2. Implementer `preCall` og/eller `postCall`.
3. Registrer enten ved importtidspunktet (tilføj fra `registerDefaultGuardrails`), eller
   kald `guardrailRegistry.register(...)` under kørsel — registreringsdatabasen erstatter
   enhver tidligere guardrail med det samme normaliserede navn.
4. Tilføj test under `tests/unit/` (eksisterende eksempler:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Test

Brug `resetGuardrailsForTests()` mellem test for at starte fra en kendt tilstand.
Angiv `{ registerDefaults: false }` for at starte med en tom registreringsdatabase og
kun registrere de guardrails, der testes. Vision Bridge accepterer dependency
injection (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge eksponerer de
tilsvarende integrationspunkter for indstillinger, funktionalitet, valg af STT-model,
kontrol af legitimationsoplysninger og transskription. Test kan derfor afprøve begge
forløb uden adgang til database eller netværk.

## Se også

- `src/lib/guardrails/` — implementering
- `src/shared/utils/inputSanitizer.ts` — fælles detektor, som driver
  beskyttelse mod prompt-injektion og maskering af personhenførbare oplysninger
- `src/shared/constants/visionBridgeDefaults.ts` — standarder for Vision Bridge og
  modelliste for tvungen bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — fælles standarder for kørsel af Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonalt lag (circuit breaker, nedkølingsperioder)
- `docs/reference/ENVIRONMENT.md` — komplet reference til miljøvariabler

## Rutedækning og red-team for injektionsbeskyttelsen (Fase 8 · Blok D)

Injektionsbeskyttelsen (`createInjectionGuard` / `withInjectionGuard`) dækker alle ruter,
der accepterer brugerprompter. Den respekterer `INJECTION_GUARD_MODE` (standardværdien `warn` = kun logning;
`block` = returnerer HTTP 400 `SECURITY_001`).

| Type                 | Ruter                                                                                                                                                | Standardtilstand |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| Tekst (eksisterende) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn             |
| Generativ            | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn             |
| Data                 | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn             |

Tekstudtrækning (`extractMessageContents`) dækker `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (hver nat, `nightly-llm-security.yml`):** promptfoo validerer, at hver rute blokerer
OWASP-LLM-korpuset i `INJECTION_GUARD_MODE=block`; garak kører prober (springes over uden hemmelighed).
`moderations` er inkluderet for konsistens — operatører i blokeringstilstand kan undtage den via
`resolveDisabledGuardrails`.

Det natlige workflow (`.github/workflows/nightly-llm-security.yml`, cron + manuel
igangsættelse) har to jobs:

- **`promptfoo-guard` (blokerende)** — kører `promptfoo eval -c promptfooconfig.yaml`
  med `INJECTION_GUARD_MODE=block`. Hver adversarial test (f.eks. "ignore all
  previous instructions…", jailbreaks i DAN-stil) kontrollerer, at svaret indeholder
  `error.code === "SECURITY_001"`, dvs. at beskyttelsen faktisk afviste anmodningen.
- **`garak` (vejledende)** — kører garak `--probes promptinject,dan,leakreplay`
  mod en lokal OmniRoute-instans (`http://localhost:20128/v1`). Betinget af en
  udbyderhemmelighed (`PROMPTFOO_PROVIDER_KEY`); springes elegant over og har suffikset
  `|| true`, så jobbet rapporterer uden at få CI til at fejle.

Dækningen af hjælpefunktionen til beskyttelse (`createInjectionGuard` / `withInjectionGuard`)
omfatter alle promptbærende `/v1`-ruter; prompttekst hentes fra
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` af
`extractMessageContents()` i `src/shared/utils/inputSanitizer.ts`.
