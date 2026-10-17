# Guardrails (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sannhetskilde:** `src/lib/guardrails/`
> **Sist oppdatert:** 2026-08-29 — v3.8.51 (opprinnelsen til Video Bridge-transkripsjoner oppgis av kalleren,
> og er ennå ikke verifisert av serveren — presisert i henhold til #11661)

Sikkerhetsmekanismer håndhever sikkerhet, retningslinjer og innholdstransformasjoner i grensesnittet
mellom OmniRoute og oppstrømsleverandører. Hver sikkerhetsmekanisme kan inspisere (og
eventuelt avvise, transformere eller annotere) forespørselsnyttelaster (`preCall`) og
oppstrømssvar (`postCall`).

Systemet er **fail-open**: Hvis en sikkerhetsmekanisme utløser et unntak under kjøring, registrerer
registeret feilen og fortsetter med neste sikkerhetsmekanisme i stedet for å la
forespørselen mislykkes. Blokkering er en eksplisitt beslutning (`block: true`), aldri et uhell.

## Innebygde sikkerhetsmekanismer

Registeret laster automatisk inn seks sikkerhetsmekanismer i prioritert rekkefølge ved import
(se `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Navn                | Trinn          | Fil                   |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Lavere prioritetstall kjøres **først**.

### Bildebro (`visionBridge.ts`) — Modalitetsbro PR-1

Fanger opp forespørsler med bilder som er rettet mot **modeller uten bildestøtte**, og enten
omdirigerer hele forespørselen til en modell med bildestøtte eller erstatter
bildedelene med tekstbeskrivelser produsert av en konfigurerbar bildemodell før
det oppstrøms kallet. Dette gjør at leverandører som kun støtter tekst, kan håndtere
multimodale nyttelaster transparent.

Flyt:

1. Hopp over hvis målmodellen allerede støtter bilder (med mindre den finnes i
   listen over modeller med tvungen bro, `isVisionBridgeForcedModel`).
2. Trekk ut bildedeler via `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), som delegerer til den **enhetlige
   mediedetektoren** `detectMediaParts()` i `open-sse/utils/mediaParts.ts` — den
   felles fasiten som deles med kompatibilitetsfilteret for kombinasjonsmodeller.
   Uttrekk er begrenset til en tillatelsesliste med deler på toppnivå i formater
   som `replaceImageParts` kan sette inn igjen (kontrakten mellom uttrekk og
   erstatning): OpenAI `image_url`, Anthropic base64 `source.type:"base64"`,
   Anthropic-URL `source.type:"url"` og Responses API `input_image`. Nøstede
   treff og former som bare fungerer som indikatorer, hører til
   kombinasjonsfilteret og trekkes aldri ut.
   Hopp over hvis ingen finnes.
3. Løs kjøretidskonfigurasjonen via `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): Nye innstillingsnøkler
   med `modalityBridge*` har forrang; eldre nøkler med `visionBridge*` beholdes
   som et **tilbakefall i én syklus** (tilbakerullingsvindu). Hopp over før
   mediegjennomgang hvis broen er deaktivert.
4. Modusvelgeren (`modalityBridgeVisionMode`, se tabellen nedenfor) avgjør
   omdirigering kontra beskrivelse. Omdirigering returnerer `modifiedPayload`,
   der bare `model` er byttet ut, pluss metadata
   `{ rerouted, fromModel, toModel, imagesKept }`.
5. Beskrivelsesforløp: Begrens bilder til `maxImages`, sett sammen den
   oppgavebevisste ledeteksten, slå opp i beskrivelsesbufferen, kall
   bildemodellen **parallelt** (`Promise.allSettled`), og sett inn tekstdeler
   av typen `[Image N]: <description>` i stedet. En mislykket beskrivelse gir
   `null`, og den opprinnelige bildedelen **bevares** (#4012) — unntatt i
   kombinasjonsmodellens beskrivelsesforløp når alle beskrivelsene mislyktes;
   da får en bekreftet oppstrømsmodell uten bildestøtte en
   `(utilgjengelig — ingen tilkoblet leverandør med bildestøtte)`-plassholder
   i stedet (#8430).
6. Returner `modifiedPayload` + metadata (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Modusvelger (`modalityBridgeVisionMode`)

| Modus      | Standard | Virkemåte                                                                                                                                                                                                                                                                                                       |
| ---------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Eldre heuristikk, uendret (#6640/#7204): Modeller som ikke er kombinasjonsmodeller, samt `auto/`-modeller, omdirigeres til den beste bildemodellen med mindre den opprinnelige modellen allerede har brukbar legitimasjon (da beskrives bildene); kombinasjonsmål beskriver alltid.                             |
| `describe` |          | Beskriv alltid — omdirigeringsblokken hoppes helt over; modellen brukeren valgte, svarer alltid.                                                                                                                                                                                                                |
| `reroute`  |          | Tving omdirigering: Beskyttelsen som beholder modellen med legitimasjon, omgås. Legitimasjonskontrollen for omdirigerings**målet** gjelder fortsatt — når det ikke finnes et brukbart bildemål, går forespørselen videre til beskrivelse, slik at råbilder aldri når en bakende som bare støtter tekst (#8430). |

Tvungne moduser kortslutter **før** den automatiske heuristikken kjøres; virkemåten
til `auto` er byte-identisk med sikkerhetsmekanismen før PR-1.

#### API-nøkkelomfang (`visionBridgeKeyScope.ts`)

Når innringerens API-nøkkel begrenser `allowedConnections`, kvotepuljer
(`allowedQuotas`) eller modeller (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), velger broen bare
omdirigerings- og beskrivelsesmodeller som nøkkelen kan bruke, på tilkoblinger
som nøkkelen kan bruke. Beskrivelseskallet går deretter alltid gjennom
OmniRoute-selvsløyfen med `x-omniroute-self-loop-key-id`-headeren, slik at den
mottakende chatforespørselen håndhever nøkkelens tilkoblings- og modellpolicy
på nytt. `enforceApiKeyPolicy()` respekterer bare denne headeren sammen med
selvsløyfens bearer-token, slik at den bare kan begrense tilgangen, og en ID som
ikke kan slås opp, avvises.

Hvis ingen bildemodell er tillatt for nøkkelen, trer beskrivelsesforløpet til
side, og forespørselen sendes videre uendret, med samme feiltolerante virkemåte
som en deaktivert sikkerhetsmekanisme (metadata
`{ skipped: true, reason: "no_permitted_vision_model" }`). Forespørsler uten
nøkkel, og nøkler uten disse begrensningene, oppfører seg nøyaktig som før.

#### Oppgavebevisst beskrivelsesledetekst (`modalityBridgeVisionTaskAware`)

Standard er **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) legger teksten
fra den **siste brukermeldingen** (avkortet til 500 tegn) til den grunnleggende
beskrivelsesinstruksen, slik at beskrivelsen styres mot det brukeren faktisk spurte
om (codex-vision-proxy-mønsteret), og ber synsmodellen transkribere synlig tekst.
Når flagget er slått av — eller det ikke finnes noen brukertekst — brukes den
grunnleggende instruksen uendret.

Describe-selvsløyfens egen OpenAI-kompatible forespørsel (`callVisionModelSingle()`
i `visionBridgeHelpers.ts`) ber alltid om `image_url.detail: "high"` —
ubetinget, for alle kallere/leverandører, og uten å være styrt av noe klientsignal.
Sampling med lav detaljgrad reduserer OCR-nøyaktigheten for akkurat
teksttranskripsjonsoppgaven denne instruksen ber om, så selve describe-kallet ber
alltid om høy detaljgrad, uavhengig av hvilket detaljnivå den opprinnelige
innkommende forespørselen brukte. Dette påvirker bare den interne
describe-forespørselens body; det endrer ikke hvordan OmniRoute videresender
kallerens egen `image_url.detail` i primærforespørselen — denne standardverdien
brukes separat, og bare for registrerte OpenCode-klienter, i
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Anthropic-grenen med wire-format i describe-selvsløyfen har ikke noe `detail`-felt
og påvirkes ikke av noen av standardverdiene.

#### Grense for describe-resultat (`modalityBridgeVisionMaxChars`)

| Nøkkel                         | Standard | Område              |
| ------------------------------ | -------- | ------------------- |
| `modalityBridgeVisionMaxChars` | `0`      | `0` eller 100–50000 |

`0` (standard) betyr **ingen grense** — beskrivelsen som returneres av
`callVisionModel()`, sendes videre uendret, slik at eksisterende virkemåte
bevares. Alle verdier i området 100–50000 avkorter beskrivelsen med et
`…`-suffiks før den flettes inn igjen som `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` i `src/lib/guardrails/visionBridge.ts`).
Øk denne for detaljtunge OCR-oppgaver der modellen nedstrøms trenger hele
transkripsjonen. Senk den for å begrense tokenbruken til pratsomme synsmodeller.
Dashboard-feltet finnes i Advanced-panelet på Vision-fanen
(`modality-bridge-max-chars` i `ModalityBridgeVisionTab.tsx`) og justerer alle
verdier mellom 1 og 99 opp til minimumsverdien 100, samtidig som eksplisitt `0`
forblir urørt — `0` er en gyldig Zod-verdi i seg selv
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ikke bare
standardverdien for «ikke angitt».

#### Describe-hurtigbuffer (`modalityBridge/bridgeCache.ts`)

Prosessdelt LRU- og TTL-hurtigbuffer i minnet for describe-resultater.
Nøkkel = `sha256(imageRef + composedPrompt + configuredBridgeModel)` med
lengdeprefiks-innramming (ingen kollisjoner mellom feltgrenser). Modellkomponenten
er den **konfigurerte** bridge-modellen, ikke modellen som faktisk svarte —
`callVisionModel` kan bruke en reserve internt, og nøkkelbruk per forsøk ville
fragmentert hurtigbufferen. Mislykkede describe-kall blir aldri hurtigbufret.
Innstillinger:

| Nøkkel                          | Standard | Område  |
| ------------------------------- | -------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`   | —       |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000 |

#### Normalisering av eksterne bilder (describe-selvsløyfe/base64-henting)

Når bridge-komponenten selv henter et **eksternt** bilde — Anthropic
describe-selvkallet og base64-konverteringen for claude-wire-format
(`ensureBase64ImagesForClaudeWire`), begge via
`fetchRemoteImageAsDataUri()` i `visionBridgeHelpers.ts` — sendes den
resulterende data-URI-en gjennom `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) før den bygges inn i forespørselen til
synsmodellen. For store bilder skaleres ned til en **langside på 2048 px** (i
samsvar med skaleringsgrensen OpenAI/Anthropic allerede bruker på serversiden),
noe som reduserer antall byte som lastes opp og forsinkelsen uten å endre det
synsmodellen ser. Skaleringen bruker `sharp`, lastet via dynamisk import: På en
plattform der den plattformspesifikke binærfilen ikke kan lastes,
**kaster aldri** `normalizeDataUri()` en feil — den faller tilbake til å sende
de opprinnelige bytene uendret, slik at describe-/base64-konverteringsflyten
alltid fortsetter å virke. Byter som ikke representerer et bilde (en henting
som ikke returnerte et dekodbart bilde), sendes også videre uendret. Denne
normaliseringen er begrenset til bilder bridge-komponenten henter for sitt eget
selvkall — den brukes aldri på kallerens uendrede passthrough-payload, i tråd
med prinsippet om mutasjon bare ved eksplisitt aktivering (Hard regel #20).

#### Innstillingsskjema + migrering

De nye `modalityBridge*`-nøklene Zod-valideres i `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, `modalityBridgeCache*`-trioen og
`modalityBridgeAudio*`-gruppen som brukes av Audio Bridge. Migreringen
`141_modality_bridge_settings.sql` kopierer eksisterende eldre
`visionBridge*`-verdier til de tilsvarende nye nøklene (idempotent og
overskriver aldri en `modalityBridge*`-verdi angitt av en operatør). De eldre
nøklene forblir godkjent som reserve ved lesing i én utgivelsessyklus.

#### Transparensheader + statistikk

Describe-transformerte svar inneholder
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(bygget av `buildModalityBridgeHeader()` i `modalityBridge/bridgeStats.ts`,
påført av `withModalityBridgeHeader()` i `src/sse/handlers/chatHelpers.ts`).
Omdirigerte forespørsler får **ingen** header — payloaden var uendret, og
modellbyttet er allerede synlig i `model`-feltet i svarbodyen.

`GET /api/modality-bridge/stats` (administrasjonsautentisering, samme nivå som
`GET /api/settings`) returnerer tellere i minnet per modalitet
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` for `vision`, `audio` og
`video`. `averageLatencyMs` bruker `latencySamples`, ikke alle forsøk, som
nevner; en operasjon uten tidsmåling oppretter ikke kunstig en måling på null
millisekunder. `bridged` forblir det bakoverkompatible aliaset for vellykkede
konverteringer; mislykkede forsøk øker det ikke.
Tellerne nullstilles ved omstart av prosessen, slik det er utformet
(telemetri, ikke regnskapsføring).

#### Konfigurasjon av kontrollpanelet

Den dedikerte kontrollpanelsiden er
`/dashboard/settings/modality-bridge`. De URL-adresserbare fanene `Vision`, `Audio`
og `Video` beholder spørringsparametere mens `tab`-verdien byttes.
Vision-fanen tilbyr aktivering, modus, modellvalg (inkludert automatisk
standardvalg), oppgavebevisst ledetekstgenerering, avanserte grenser for tidsavbrudd,
bilde, beskrivelseslengde og hurtigbuffer, kjøretidstellere og en beskyttet
eksempelforespørsel. Audio-fanen er også aktiv: den tilbyr aktivering, en
modellvelger kun for STT med Auto, grenser for tidsavbrudd og maksimal klipplengde,
lydtellere og en eksempeltest med `input_audio`. Video-fanen er funksjonell: den
viser kjøretidstilstanden for FFmpeg/ffprobe — én av fire eksplisitte UI-tilstander
(`unknown` mens sonderingen pågår eller ikke kunne fullføres, `restricted` på en
kontrollpanelvert som ikke er loopback, der sonderingen hoppes over på klientsiden,
`unavailable` etter sondering og bekreftelse på at verktøyene mangler, eller
`available` med FFmpeg/ffprobe-versjonene) — lagrer aktiverings-, modell-, bilde-,
video- og tidsavbruddsgrenser, filtrerer modellvelgeren til modeller med
synsfunksjonalitet og viser videotellere.

Det tidligere Vision Bridge-kortet under AI-innstillinger er en
kompatibilitetslenke til den nye siden; det har ikke lenger en egen kopi av
skjemaet. Media Providers lenker også arbeidsflytene Image-to-Text og
Speech-to-Text til de tilsvarende Modality Bridge-fanene uten å fjerne det
eksisterende Speech-to-Text-testmiljøet.

**Forbigåelse av adgangskontroll for selvløkke:** Når beskrivelseskallet rutes
gjennom OmniRoutes egen `/v1`-selvløkke (leverandørmodell som ikke er standard),
sender underforespørselen `x-omniroute-admission-bypass: internal` og autentiseres
med den løste legitimasjonen for selvløkken — den lokale `sk_omniroute`-sentinelen
i lokal modus, eller den operatørkonfigurerte miljønøkkelen `OMNIROUTE_API_KEY` /
`ROUTER_API_KEY` (#1350), slik at distribusjoner med `REQUIRE_API_KEY=true`
fortsatt kan kjøre beskrivelseskallet. Forbigåelsen godtas bare for akkurat denne
legitimasjonen, slik at eksterne klienter ikke kan bruke headeren til å omgå
adgangskontrollen.

Eldre standardverdier finnes i `src/shared/constants/visionBridgeDefaults.ts`;
de nye standardverdiene for modus, oppgavebevissthet og hurtigbuffer samt
innstillingsløseren finnes i
`src/shared/constants/modalityBridgeDefaults.ts`. Beskyttelsesmekanismen tilbyr
konstruktøralternativet `deps`, slik at tester kan injisere falske
implementasjoner av `getSettings` og `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Fanger opp chatteforespørsler som inneholder lyd, før de når et mål som ikke er
kjent for å godta lydinndata. Den omdirigerer aldri chatteforespørselen:
Lyddeler transkriberes gjennom det eksisterende OpenAI-kompatible
multipart-endepunktet, og den valgte chattemodellen fortsetter med
teksttranskripsjoner.

Flyt:

1. Løs `supportsAudio` gjennom `getResolvedModelCapabilities()`. Eksplisitte
   metadata i leverandørregisteret har forrang, deretter statiske modelldata og
   så synkroniserte `modalities_input`. En deklarert inndataliste uten `audio`
   gir `false`; hvis det ikke finnes noe grunnlag for å fastslå funksjonaliteten,
   forblir verdien `null`. Både `false` og `null` aktiverer den konservative
   broen, mens `true` omgår den.
2. Løs `modalityBridgeAudio*`-innstillingene, og hent ut sammenføybare lyddeler
   på toppnivå fra hver melding gjennom den delte `detectMediaParts()`-detektoren.
   Støttede overføringsformater er OpenAI `input_audio`, `audio_url` og
   `source.media_type: "audio/*"`. Nestet lyd oppdages for ruting, men fjernes
   ikke av sammenføyingsbanen. Arbeidsmengden begrenses av
   `modalityBridgeAudioMaxClips`; senere deler forblir urørt.
3. Bruk en konfigurert `provider/model`, eller la `selectAudioBridgeModel()`
   gå gjennom `AUDIO_TRANSCRIPTION_PROVIDERS` i stabil katalogrekkefølge og
   velge den første modellen med brukbar, aktiv leverandørlegitimasjon.
4. `callAudioTranscription()` konverterer base64-/data-URI-lyd til en
   multipart-`file`, eller laster ned en ekstern `audio_url` gjennom den
   utgående beskyttelsesmekanismen som kun tillater offentlige adresser, med
   DNS-festing og en grense på 25 MB. Deretter POST-er den filen og den valgte
   modellen til den lokale selvløkken `/v1/audio/transcriptions`, autentisert
   med `resolveSelfLoopBearer()`. Den eksisterende transkripsjonsruten utfører
   normalt legitimasjonsoppslag, håndtering av nedkjøling/hastighetsbegrensning
   og videresending til leverandøren.
5. Vellykkede kall erstatter delene sine med `[Audio N]: <transcript>`. Kallene
   kjøres med `Promise.allSettled`: En individuell feil bevarer den opprinnelige
   lyddelen (#4012-kontrakt). Hvis alle kall mislykkes og målet beviselig har
   `supportsAudio === false`, blir delene
   `[Audio N]: (unavailable — no STT provider connected)` (#8430-kontrakt). For
   et ukjent mål (`null`) forblir innholdet urørt dersom alle kall mislykkes.
   Et bekreftet mål som kun støtter tekst, og som ikke har brukbar
   STT-legitimasjon, mottar den samme eksplisitte plassholderen uten at det
   utføres et nettverkskall.

Vellykkede transkripsjoner bruker den prosessomfattende LRU/TTL-hurtigbufferen
til Modality Bridge. Nøkkelen kombinerer lydreferansen, den stabile
operasjonsetiketten `audio-transcription` og den valgte STT-modellen; feil
hurtigbufres aldri. Lydforsøk oppdaterer de delte tellerne `bridged`, `cacheHits`,
`failures` og `lastUsedAt`. Transformerte svar inneholder
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; urørte
forespørsler mottar ikke et Audio Bridge-segment.

Kjøretidsinnstillingene lagres i databasen og valideres med Zod:

| Nøkkel                        | Standardverdi | Område            |
| ----------------------------- | ------------- | ----------------- |
| `modalityBridgeAudioEnabled`  | `true`        | —                 |
| `modalityBridgeAudioModel`    | `""`          | Auto eller STT-ID |
| `modalityBridgeAudioTimeout`  | `60000`       | 1000–300000       |
| `modalityBridgeAudioMaxClips` | `3`           | 1–10              |

Den delte hurtigbufferen styres fortsatt av `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` og `modalityBridgeCacheMaxEntries`.

### Videobro (`videoBridge.ts`, `videoBridgePipeline.ts`)

Fanger opp videodeler på toppnivå i Chat Completions-`messages` og Responses
API-`input` før et mål uten kjent innebygd videostøtte kalles.
Støttede formater er `input_video`, `video_url`, `video_source`, HTTPS-URL-er
og `data:video/*;base64,...`-data-URI-er. Vanlige filnavn i tekst behandles ikke
som video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) håndterer gjennomgang av forespørselen,
kapabilitets-/policykontrollen, aggregering per forespørsel og responsens nyttelast.
Arbeid per video – innhenting, hurtigbufring av hele resultatet, beskrivelse av en
bildesekvens (som slår sammen eventuell lydtranskripsjon angitt av anroperen) samt
målinger/avbrudd/opprydding per forsøk – er skjult bak `processVideoPart` i
`videoBridgePipeline.ts`, som kalles én gang per videodel inne i løkken til `preCall`.
Denne modulen definerer også de eksplisitte portgrensene `VideoMediaBrokerPort`
(innhenting av byte og uttrekking av utvalgte bilder), `VideoAudioTranscriptionPort`
(sammenslåing av en lydtranskripsjon angitt av anroperen med de utvalgte bildetekstene) og
`VideoDrilldownPort` (persistensgrensen for detaljanalyse av bilder; ennå ikke koblet
til `processVideoPart` – bare den separate ruten `/api/modality-bridge/video/drilldown`
skriver detaljanalyseoppføringer i dag).

Den offentlige `/v1`-forespørselsbanen importerer eller starter aldri en underprosess.
Eksterne videoer lastes ned med en grense på 50 MiB; innebygde base64-videoer har en
konservativ dekodet grense på 36 MiB per video, slik at konvolutten for modell/meldinger/innramming
kan holde seg innenfor grensen på 50 MiB for mottak av offentlige JSON-forespørsler. Innebygd
lengde og estimater for dekodet størrelse kontrolleres før allokering. HTTPS
kreves for den opprinnelige eksterne URL-en og hver omdirigering, ved bruk av den eksisterende
beskyttelsen for kun offentlig utgående trafikk med DNS-festing. Bytene krysser deretter den eksakte interne
`POST /api/modality-bridge/video/extract`-meglergrensen. Denne ruten er både
`LOCAL_ONLY` og `SPAWN_CAPABLE`, godtar bare en autentisert forespørsel per prosess
fra en klarert tilbakekoblingsadresse, og godtar aldri en URL, filsystemsti, kjørbar fil
eller argumentliste. API-ens pipeline for størrelsesbegrensning av forespørselskroppen og behandlerens inkrementelle leser av forespørselskroppen
håndhever uavhengig av hverandre en grense på 50 MiB for inndata til megleren. Den begrensede køen kjører
én uttrekking om gangen, tillater fire ventende jobber og begrenser ventende inndata til
100 MiB.

Inne i megleren leser `ffprobe` en privat lokal fil; den faste tillatelseslisten for formater
utelukker spilleliste- og manifestformater. For tillatte containere i MOV-familien
forblir eksterne MOV-datareferanser deaktivert som standard, og den
faste kommandoen aktiverer dem ikke. Både `ffprobe` og `ffmpeg` bruker
protokolltillatelseslisten med kun `file`, én tråd, faste argumenttabeller, ingen shell
og kjørbare filer løst fra `PATH`. Omslagsstrømmer med vedlagte bilder er ikke
avspillbare kandidater. Alle avspillbare strømmer må overholde grensene, og en
eksplisitt standardstrøm foretrekkes før den deterministiske reserveløsningen
med lavest indeks. Videoer er begrenset til 600 sekunder, 8 192 piksler per dimensjon og
33 554 432 kildepiksler. FFmpeg tar ut 1–16 JPEG-bilder ved midtpunkter, skalerer ned
den lengste kanten til maksimalt 1 024 piksler uten å oppskalere mindre inndata, og
mottar aldri en URL. Utvalget er som standard `uniform`. De valgfrie policyene
`scene_aware` og eksperimentelle `segment_aware` utfører én ekstra
fast FFmpeg-passering over den allerede validerte lokale strømmen, velger begrensede
`showinfo`-scenetidsstempler og faller deterministisk tilbake til de samme
uniforme midtpunktene ved detektorfeil, tidsavbrudd, ugyldige utdata eller et tomt
kandidatsett. Segmentbevisst modus fordeler midtpunktsutvalg proporsjonalt på
de validerte sceneintervallene; segmentbevisst evidens og reserveatferd er
beskrevet nedenfor. Den absolutte grensen på 16 bilder
brukes etter utvelgelsen i alle policyer. Når en scenebevisst forespørsel bare har et
budsjett på ett bilde, bruker den det uniforme midtpunktet i det aktive helvideo- eller fokusvinduet
og rapporterer `policyEffective: uniform`: Ett enkelt valgt scenebilde
kan ikke bevare begge tidsmessige endepunkter. En anroper kan valgfritt angi et
endelig fokusvindu (`start`/`end` i sekunder); grensene begrenses til mediets
varighet, omvendte eller ikke-endelige vinduer avvises, og alle utvalgspolicyer
utføres bare innenfor det normaliserte intervallet. Det resulterende
vinduet inkluderes i metadataene for utvalget og i det uklarerte beskrivelsesprefikset,
slik at etterfølgende modeller kan skille et fokusert utdrag fra hele
tidslinjen.

Semantisk fokus for bildetekster er en separat, eksplisitt innstilling. Standardmodusen `full`
for analyse bevarer den eksisterende bildeprompten og videresender aldri forespørselstekst
til bildetekstmodellen. I `focused`-modus leser broen bare den nyeste
ikke-tomme brukerforfattede `text`/`input_text` fra den samme Chat- eller Responses-
beholderen, normaliserer den til NFC, slår sammen kontrolltegn og mellomrom
og begrenser den til 500 Unicode-kodepunkter. Et tomt resultat faller tilbake til den
eksakte `full`-prompten. Et brukbart hint serialiseres som JSON i en egen
blokk for uklarert brukerkontekst og kan bare prioritere observerbare detaljer; det
kan ikke overstyre den separate advarselen mot å følge instruksjoner som er synlige
eller hørbare i mediet. Tekstlig fokus utleder aldri `start`/`end` eller endrer
den tidsmessige utvalgsfunksjonen.

#### FU-07 strukturell segmentevidens

`segment_aware` bruker én avgrenset forhåndsanalyse av den allerede validerte
lokale videostrømmen. Den faste filterkjeden skalerer først til en bredde på
maksimalt 320 piksler, oppdager sceneendringer og frosne intervaller og utfører
deretter sampling med 1 bilde per sekund for å måle uskarphet, gjennomsnittlig
luminans og romlig/temporal informasjon. Kjøringen er begrenset til 600
strukturelle sampler, én FFmpeg-/filtertråd, de samme tillatelseslistene for
protokoller begrenset til `file` og containere, en grense på 1 MiB for
prosessutdata og maksimalt 30 sekunder innenfor meglerens delte
avbrudds-/tidsfrist. Den godtar aldri en kommando, et filter, en bane eller en
URL fra forespørselen.

De strukturelle verdiene er deterministiske samplingbevis, ikke en semantisk
forståelse av videoen. De utleder ikke motiver, handlinger, bildetekster, tale
eller brukerintensjon. Scene- og frysegrenser danner segmenter. Frysedekning,
uskarphet, eksponering, romlig detaljnivå og temporal endring påvirker bare
hvordan det eksisterende budsjettet på 1–16 bilder fordeles. Et fullstendig
frosset segment begrenses til ett bilde, mens ikke-frosne segmenter konkurrerer
om det gjenværende budsjettet. Når det finnes flere grenser enn bilder, beholdes
jevn dekning av tidslinjen, slik at raske klipp tidlig i videoen ikke kan skjule
et langt avsluttende segment. Scenegrenser som ligger innenfor
analyseoppløsningen på 1 sekund fra en frysegrense, slås sammen.

Manglende filtre, ugyldige/tomme bevis, en detektorfeil eller tidsavbrudd i den
avgrensede forhåndsanalysen feiler åpent til nøyaktig samme policy med ensartede
midtpunkter. Et avbrudd fra den kallende parten eller meglerens tidsfrist feiler
ikke åpent: Det avslutter den pågående underprosessen, forhindrer påfølgende
bildeuttrekking, og det private midlertidige katalogtreet fjernes i `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genererer deterministiske, reelle
FFmpeg-testdata for besparelser i bildetekstkall etter deduplisering,
budsjettfordeling ved tett bevegelse, bevis for uskarphet/eksponering/SI-TI,
raske klipp med en lang avslutning og falske positiver ved gradvis toning. Det
registrerer veggklokketiden for forhåndsanalysen og, når `/usr/bin/time` er
tilgjengelig, CPU-bruk og maksimal RSS for barneprosessen. Kvalitetskontrollene
er bare strukturelle orakler. Kvaliteten til den reelle bildetekstmodellen
forblir `HOLD` fordi dette testverktøyet ikke har noe autorisert endepunkt eller
noen fastlåst evaluator. Økonomiske besparelser forblir også `HOLD` med mindre
`--caption-cost-per-call-usd` oppgir et eksplisitt positivt estimat per kall.
Skriptet fabrikerer aldri noen av resultatene.

Hvert bilde er begrenset til 4 MiB, alle råbilder samlet til 23 MiB og det
serialiserte meglersvaret til 32 MiB. En privat midlertidig katalog fjernes i
`finally`. OmniRoute inkluderer ikke FFmpeg og godtar ikke en egendefinert bane
til den kjørbare filen. Før generering av bildetekster utfører broen en
konservativ visuell deduplisering: Hver JPEG reduseres til en gråtonebuffer på
16×16 og sammenlignes bare med det siste bildet som ble beholdt. Når det
forespørres om et bildetekstbudsjett på mer enn ett bilde, leverer uttrekkingen
en avgrenset mengde kandidater på opptil det dobbelte av budsjettet og aldri
mer enn 16 bilder. Den forespurte grensen brukes først etter deduplisering, og
den første og siste valgte kandidaten bevares under den endelige uttynningen når
budsjettet er minst to. Den versjonerte policyen
`grayscale-16x16-mean-cells-v2` bruker den største verdien av gjennomsnittlig
luminansdelta og andelen miniatyrbildeceller der det normaliserte deltaet er
minst 0,05. Terskelen for duplikater er konstanten 0,04, valgt for
forutsigbarhet fremfor å eksponeres som en kjøretidsinnstilling. Dette sekundære
signalet med høy kontrast bevarer små bevegelser og endringer i synlig tekst som
en sammenligning basert bare på gjennomsnitt kan skjule. Feil i sammenligneren
eller dekoderen feiler åpent og bevarer dekningen. Utdatametadata skiller mellom
uttrukne kandidater, bilder som ble brukt, og visuelle duplikater som ble
fjernet.

En eksplisitt merket videodel kan be om et tidsstemplet kontaktark. Broen bygger
et JPEG-rutenett med maksimalt 4 kolonner og 16 bilder. Hver celle på 512 piksler
brenner kildens tidsstempel inn i et bunnfelt med høy kontrast, mens de samme
tidsstemplene beholdes i tekstlige metadata for nedstrøms tilknytning og
revisjon. Hele JPEG-bildet er fortsatt begrenset til 32 MiB. Hvis `sharp` ikke
kan dekode eller sette sammen rutenettet, faller broen tilbake til de
individuelle JPEG-bildene. Et klientavbrudd forplanter seg fortsatt gjennom
kontaktarkoperasjonen.

Dokumentasjon for produksjonssetting holdes bevisst atskilt fra den syntetiske
mikroytelsestesten for komposisjon.
`scripts/perf/video-bridge-contact-sheet-eval.ts` definerer et skjemaversjonert
A/B-testverktøy for reelle OpenAI-kompatible synsmodeller. Det måler tokens
rapportert av leverandøren, ende-til-ende-veggklokkelatens (inkludert
sammensetting av kontaktarket), antall modellkall og bevaring av fakta definert
i manifestet. Rå modellresponser skrives ikke til rapporten. Bare SHA-256-digester
og ID-er for samsvarende fakta beholdes. Testverktøyet foretar ingen nettverks-
eller betalte modellkall med mindre `--execute-real` er angitt og `--model`,
`OMNIROUTE_BASE_URL` og `OMNIROUTE_API_KEY` er konfigurert. Uten en slik
eksplisitt reell kjøring forblir den maskinlesbare vurderingen `HOLD`. Syntetiske
målinger av nyttelast og antall kall er ikke alene dokumentasjon for
produksjonssetting.

Kallende parter kan legge ved en valgfri `transcript.cues`-matrise i en støttet
videodel når de allerede har tidsjustert tekst. Hver markør må inneholde `text`,
et endelig `start`-/`end`-intervall innenfor den undersøkte varigheten og en
tillatelseslistet `source` (`client`, `embedded` eller `audio-bridge`).
`confidence` har standardverdien `1` og må være mellom `0` og `1`. Nøyaktig
like markører slås sammen. OmniRoute starter aldri transkripsjon fra disse
metadataene: Validerte markører kopieres til det beskrevne resultatet med kilde,
konfidens og intervall, og gjengis som ikke-klarerte observasjoner sammen med
bildetekstene. Ugyldig tekst, tekst utenfor området eller tekst uten
proveniens avvises i stedet for å blandes inn i bildetekststrømmen. Begge
transkripsjonskanalene i forespørselskroppen normaliserer oppgitt proveniens til
`client`, inkludert selvpåståtte etiketter som `embedded` eller `audio-bridge`.
Bare en servereid adapter kan tilordne disse klarerte etikettene via argumentet
`trustedSource`, som bare er tilgjengelig i kode. Et JSON-felt i en forespørsel
kan ikke nå dette argumentet. Transkripsjonstekst forblir ikke-klarert innhold
avledet fra medier, uansett proveniens, og må aldri avgjøre autorisasjon.

En avansert anroper kan oppgi et `audioTranscript`-spor for den samme videoen;
det behandles som tekst levert av klienten, ikke som bevis på transkripsjon på serveren.
Fusjonssømmen kjører visuelle observasjoner og lydobservasjoner med
én felles tidsfrist og ett avbruddssignal, sorterer dem på en felles tidslinje, slår sammen
helt identiske oppføringer og rapporterer et delvis resultat når bare én side lykkes.
Et ugyldig `audioTranscript` degraderes til dette delvise resultatet — den visuelle
beskrivelsen beholdes, og lydgrenen registrerer en renset feilkode —
i stedet for at hele videoen mislykkes. Tilgjengelighet per gren, delvis-flagget
og de rensede feilkodene bevares i det beskrevne resultatet, i
sikkerhetsrekkverksmetadataene (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), i resultatbuffermetadataene og i broens
fusjonstellere. Standardbanen for Video Bridge starter ikke tale-til-tekst
eller laster ned en ekstra kopi av mediet; uten dette eksplisitte sporet forblir den
begrenset til video.

**Oppbevaring av transkripsjoner (#12150 P1).** Dette gjelder automatisk hver gang
Video Bridge (som i seg selv er valgfri) gjengir et transkripsjonsspor — det finnes ikke noe
eget oppbevaringsflagg. Når en forespørsel gjengir et transkripsjonsspor (et anroperdeklarert
`transcript` eller et fusjonert `audioTranscript`), merker sikkerhetsrekkverket det som
`videoBridgeObserved` og produserer en sladdet skygge av videobeskrivelsen —
en identisk gjengivelse der fritekstinnholdet i hvert spor erstattes med
`[redacted-video-transcript]`, bygget ved å erstatte det strukturerte sporfeltet
før strengen settes sammen (aldri ved å analysere den flattrykte teksten, slik at intet
sporinnhold — ondsinnet eller ordinært, inkludert innhold som inneholder `]`, for eksempel
`[inaudible]`/`[music]` — kan overleve). Forespørselsdelen i den lagrede anropsloggen bytter ut
hver videoavledede tekstdel med den sladdede skyggen, samsvart etter identisk
innhold; `fullText`-ankeret leses på nytt fra den ferdige nyttelasten fra sikkerhetsrekkverket
før anropet, slik at samsvaret fortsatt lykkes etter at senere sikkerhetsrekkverk i kjeden
(maskering av PII og påloggingsopplysninger, prioritetene 10/95) endrer beskrivelsesteksten på stedet og
etter at innsetting av systemledetekst/overlevering/minne omformer meldingsmatrisen. Delen
som sendes oppstrøms til modellen, er uendret. En observert forespørsel fyller heller ikke
ut noe varig minne (både forespørsels- og responsavledet uttrekking hoppes over),
slik at modellens eget svar ikke kan gjenta transkripsjonstekst inn i minnet.

**Rå videofelt (#12430).** Når broen er aktivert og innebygd videostøtte er ukjent eller mangler, aktiverer definerte `transcript`-/`audioTranscript`-felt også `videoBridgeObserved`, selv etter beskrivelsesfeil eller en `maxVideos`-grense. `null` og tomme strenger teller; fraværende felt og metadata som ikke gjelder video, gjør ikke det. Oppbevarte kopier sladder disse feltene eller utelater forespørselen, og buffere/minne forbigås.

På disse reservebanene blir gyldige spor fra anroperen til støttede `text`-/`input_text`-
deler i stedet for ikke-standardiserte leverandørfelt. Begge sporene som leveres med forespørselen,
forblir uklarerte `client`-observasjoner, med en uttrykkelig advarsel om at videoen
ikke ble beskrevet, og at tidsstemplene ikke ble kontrollert mot mediet. De eksisterende
grensene på 256 spor/64 KiB totalt og per spor gjelder for de to sporene samlet;
tidsstemplene må passe innenfor meglerens øvre grense på 600 sekunder og eventuelle oppgitte
fokusvinduer. Ugyldige spor forkastes og videresendes ikke som vilkårlig tekst; et gyldig
søsken kan fortsatt brukes med mindre deres samlede budsjett overskrides. Nullfelter/tomme
felt legger ikke til tekst. Denne reservebanen legger ikke til mediehenting eller transkripsjon.
Utvidelsesfelt for transkripsjoner fjernes fra reservebanens videobeholder og dens
`video_url`-/`source`-objekter. Tillatelseslisten for OpenAI-protokollen forblir streng; ukjente innebygde
videobeholdere forblir tilgjengelige, og kjente mål som bare støtter tekst, beholder sikre markører.
Strukturerte sladdingsskygger beskytter den tilføyde transkripsjonsteksten, mens den
opprinnelige anropereide forespørselen forblir uendret. Mål med innebygd støtte og
deaktiverte broer beholder sin eksisterende forbigåelsesatferd.

Ytterligere oppbevarte kopier bruker det samme signalet for observerte forespørsler. Det rå
øyeblikksbildet av klientforespørselen før sikkerhetsrekkverket, den ventende forespørselen i minnet og den tidlige
loggen over avviste forespørsler erstatter strukturelt transkripsjonsfelter i videodeler;
strengledetekster syntetisert av pipelinestadier og kontekstoverlevering sladdes
ved mottaket for den lagrede forespørselsdelen. Den lagrede `video_content_removed`-markøren
gjør at `previous_response_id`-fortsettelse lukkes ved feil i stedet for å rekonstruere
tekst som med hensikt ble forkastet. Hvis en observert forespørsel mister
sladdingsskyggen per del før logging, eller hvis bare én av flere videoskygger
ikke samsvarer etter senere endringer i forespørselen, utelates den oppbevarte forespørselsdelen
fullstendig i stedet for å beholde en delvis sladdet transkripsjon.

For en observert forespørsel kan et modellsvar sitere en hvilken som helst del av
transkripsjonen uten en strukturert sporgrense. Den lagrede anropsloggens
`responseBody` erstattes derfor med en utelatelsesmarkør; det detaljerte
pipelineartefaktet (som kan inneholde oppstrøms-/klientdeler og strømmeblokker)
oppbevares ikke. Semantiske buffere, idempotensbuffere og buffere for repetisjon av resonnement
forbigår lesinger og skrivinger for denne forespørselen. Leverandørforespørselen og
svaret som er synlig for klienten, forblir uendret. Tidlige keepalive-byte tappes fra den midlertidige
bufferen når det detaljerte artefaktet utelates. Kiros advarsel om ugyldig EventStream
rapporterer bare antallet byte i nyttelasten, aldri innholdet eller JSON-
analysatorens råfeil.
Dette innebærer ikke at alle urelaterte diagnoser fra leverandører/programtillegg er
revidert; den bredere gjennomgangen av oppbevarte mottak spores i #11658.

Den interne livssyklusen for `/api/modality-bridge/video/drilldown` er et separat, loopback-/tokenautentisert hurtigbuffergrunnlag. Hver operasjon krever også en kanonisk, ugjennomsiktig principal-ID. Før en produksjonsklient aktiveres, må den utlede denne ID-en fra den autentiserte tenant-en og må aldri videresende en verdi valgt av klienten. Hurtigbuffernøkler binder denne principal-en til kanoniske økt- og videoreferanse-ID-er, lagrer bare deres SHA-256-utledede nøkler og avgrenser både lesing og sletting til den samme principal-en. Hurtigbufferen lagrer maksimalt 16 utledede JPEG-bilder per oppføring, lar dem utløpe etter ti minutter og støtter avgrenset lesing med `start`/`end` eller eksplisitt sletting av økten.

Hver principal er begrenset til 16 oppføringer og 64 MiB med kanoniske JPEG-data. Disse grensene er uavhengige av det globale taket på 64 oppføringer/256 MiB: Press på principal-kvoten fjerner bare den aktuelle principal-ens minst nylig brukte oppføringer før global LRU-fjerning vurderes. Utløpte oppføringer fjernes fra både principalens og den globale regnskapsføringen ved hurtigbufferaktivitet, mens avbrytelse og valideringsfeil ikke lagrer en delvis erstatning.

Hurtigbufferen avviser ikke-kanonisk Base64, overflødig utfylling, medier som ikke er JPEG, ugyldige eller avkortede JPEG-filer og JPEG-filer som utløser en advarsel under en avgrenset fullbildedekoding med `sharp`. Hvert godkjent bilde omkodes som en kanonisk JPEG, bredde og høyde utledes fra de dekodede bytene i stedet for å stole på felter fra klienten, og eventuelle etterfølgende polyglott-byte forkastes i stedet for å beholdes. Bare den avgrensede, kanoniske komprimerte bufferen belastes begge kvotene. JSON-grensen på ledningsnivå inkluderer Base64-overhead for taket på 32 MiB med dekodede inndata. Hver
lagrede utledning registrerer sitt validerte JPEG-format/oppløsning, samplingspolicy,
utledningsversjon, opprettelsestidspunkt, serverberegnede innholdshash og hashede
overordnede referanse samt den betrodde klientens overordnede innholdshash. Avbrytelse kontrolleres
mellom asynkrone dekodings-/hashfaser før den atomiske lagringen i hurtigbufferen.

Denne leveransen kobler ennå ikke en produksjonsprodusent til ruten og tilbyr ikke
valg av varianter med flere oppløsninger. Den transparente forespørselsbanen i Video Bridge
medfører derfor ikke noe ekstra arbeid, mens tenant-bundet utledning av principal og
hele FU-08-livssyklusen for flere oppløsninger fortsatt er eksplisitt oppfølgingsarbeid,
fremfor å være dokumentert som fullført funksjonalitet.

Bildene tekstes sekvensielt med den konfigurerte Video-modellen. En tom
Video-overstyring arver Vision-innstillingen. Hvis begge er tomme, velger Vision-
autoruteren den effektive modellen med støtte for syn. Vellykkede bildetekster
erstatter den opprinnelige delen med det stabile prefikset `[Video description:`, som også
merker teksten som en ikke-betrodd, medieutledet observasjon og ber nedstrømsmodeller
om ikke å følge instruksjoner som finnes i mediet. Hurtigbuffernøkler for bildetekster
inkluderer JPEG-bytene, prompten, tidsstempelet og den effektive modellen. Bare vellykkede
bildetekster hurtigbufres. Hurtigbufferoppføringer beholder den faktiske produsentmodellen
som lyktes, inkludert en reservemodell. Broen rapporterer `mixed` når ulike bilder
ble produsert av forskjellige modeller. Et hurtigbuffertreff gjenbruker denne produsentidentiteten
i stedet for å gi den nytt navn basert på den forespurte rutingsplanen. Resultathurtigbufferen
for hele videoen bruker alle inndata som endrer resultatet, som nøkkel — prompt, effektiv
modell, samplingspolicy, antall bilder, modus for semantisk analyse, SHA-256-
fingeravtrykket til det normaliserte fokushintet, fokusvindu, `transcript`,
`audioTranscript` og kontaktarkflagget — slik at endring av noen av disse
dimensjonene gir et hurtigbuffermiss, aldri gjenbruk av utdaterte data. Versjonen av policyen
for visuell deduplisering, terskelen og det avgrensede antallet kandidatbilder er også eksplisitt
angitt i resultathurtigbuffernøkkelen og metadataene. En policyendring kan derfor ikke gjenbruke en
utdatert beskrivelse av hele videoen. Metadata for resultathurtigbuffer v4 beholder modusen og
fingeravtrykket, aldri den rå brukeroppgaven. Guardrail-metadata rapporterer både den
forespurte og den effektive analysemodusen. En forespurt `focused`-modus uten
brukbar brukertekst rapporteres med `full` som effektiv modus.

Guardrail-mekanismen trekker ut alle støttede videodeler, men beskriver ikke flere enn
`modalityBridgeVideoMaxVideos`. For et mål som beviselig har
`supportsVideo === false`, blir mislykkede videoer og videoer over grensen erstattet med eksplisitte,
sikre tekstmarkører, slik at ingen rå video blir værende. Når funksjonsstøtten er ukjent, beholder disse
delene videobæreren. En eventuell reservetranskripsjon følger den avgrensede tekstkonverteringen
ovenfor. Mål med `supportsVideo === true` omgår broen.
Avbrytelsessignalet fra klientforespørselen videreføres gjennom nedlasting, meglerkø,
underprosesser og kall for bildetekster. Avbrytelser stopper mellom videoer og faller aldri
åpent tilbake til råmedier.

Kjøretidsinnstillinger er DB-støttede og Zod-validerte:

| Nøkkel                              | Standardverdi | Område / atferd                                                                                        |
| ----------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`       | Valgfritt kjøretidsmiljø, må aktiveres eksplisitt                                                      |
| `modalityBridgeVideoAnalysisMode`   | `"full"`      | `full` bevarer generiske bildetekster; `focused` bruker avgrenset, uklarert kontekst fra siste bruker  |
| `modalityBridgeVideoModel`          | `""`          | Arver modellen fra Vision Bridge                                                                       |
| `modalityBridgeVideoFrameCount`     | `8`           | 1–16                                                                                                   |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`   | `uniform`, `scene_aware` eller proporsjonal `segment_aware`; detektorfeil bruker `uniform` som reserve |
| `modalityBridgeVideoMaxVideos`      | `1`           | 1–4                                                                                                    |
| `modalityBridgeVideoTimeout`        | `120000`      | 1000–120000 ms                                                                                         |

Eldre lagrede verdier for tidsavbrudd for video på over 120 sekunder begrenses til
meglerens tidsfrist; nye innstillinger som skrives med verdier over denne grensen, avvises.
`GET /api/modality-bridge/video/runtime` krever klarert, stemplet lokal
loopback-opprinnelse før autentisering eller sondering av kjøretidsmiljøet, og krever deretter
administrasjonsautentisering. Det returnerer bare `available`, rensede FFmpeg/ffprobe-versjoner
og en fast årsak når kjøretidsmiljøet er utilgjengelig. Det interne endepunktet for uttrekking er ikke
et offentlig API for opplasting: kømetning returnerer `503` pluss `Retry-After`, en frakobling fra
kalleren returnerer `499`, og meglerens faste tidsfrist returnerer `504`. Konverterte svar legger til
`video->text;model=<visionModel>;parts=<videos>` i den sentrale
`x-omniroute-modality-bridge`-headeren uten å fjerne Vision- eller Audio-segmenter.

### PII-maskering (`piiMasker.ts`)

Kjører i **begge** faser.

- **`preCall`** kloner nyttelasten, går gjennom `system`, `messages`, `input` og
  `prompt` (inkludert elementer som er rene strenger), og bruker `processPII()` (fra
  `@/shared/utils/inputSanitizer`) på strengfeltene `content`/`text`. Når
  `PII_REDACTION_ENABLED=true`, blir oppdagede personopplysninger maskert i den utgående
  nyttelasten. Dette er uavhengig av `INPUT_SANITIZER_MODE` (som bare styrer
  policyen for promptinjeksjon). Når maskering er deaktivert, registrerer kallet antall
  oppdagelser uten å skrive om innholdet.
- **`postCall`** dypkloner svaret, kjører `sanitizePIIResponse()` samt
  maskeringen for Responses API-formatet (`maskResponsesOutput` — dekker
  `output_text` og `output[].content[].text`). Hvis maskering forekommer, erstatter det
  endrede svaret originalen.

Sikkerhetsmekanismen blokkerer aldri; den legger bare til merknader (`meta.detections`,
`meta.redacted`) eller skriver om innhold.

### Promptinjeksjon (`promptInjection.ts`)

Oppdager ondsinnede strukturer i brukerlevert innhold og håndhever den
konfigurerte policyen. Atferden styres av miljøvariabler og
konstruktøralternativer:

| Innstilling        | Miljøvariabel                                                                                               | Standardverdi | Effekt                                                                                                                                                                                                                         |
| ------------------ | ----------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Aktivert           | `INPUT_SANITIZER_ENABLED`                                                                                   | `true`        | Når verdien er `false`, avsluttes sikkerhetsmekanismen umiddelbart.                                                                                                                                                            |
| Modus              | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                             | `warn`        | Injeksjonspolicy: `block`, `warn` eller `log`. (`redact` godtas av hensyn til bakoverkompatibilitet, men fjerner **ikke** injeksjonstekst; omskriving av personopplysninger i forespørsler styres av `PII_REDACTION_ENABLED`.) |
| Blokkeringsterskel | `blockThreshold`-alternativet / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`        | Laveste alvorlighetsgrad som kreves for blokkering. `Medium` er kun til observasjon som standard.                                                                                                                              |

**Modusprioritet** (`getMode`): kallers `options.mode` →
`INJECTION_GUARD_MODE` **overstyring via funksjonsflagg i databasen** (Kontrollpanel → Innstillinger →
Funksjonsflagg) → miljøvariabelen `INJECTION_GUARD_MODE` → miljøvariabelen `INPUT_SANITIZER_MODE` →
`warn`. En overstyring fra kontrollpanelet har derfor prioritet over miljøvariablene, slik at grensesnittet for
funksjonsflagg styrer den aktive sikkerhetsmekanismen direkte (uten omstart). Databaselesingen er feilsikker:
Hvis det oppstår en feil, går sikkerhetsmekanismen tilbake til miljøbasert atferd, og når ingen
overstyring er angitt, er atferden identisk med en løsning som bare bruker miljøvariabler.

Deteksjonskilder:

1. `sanitizeRequest()` fra `@/shared/utils/inputSanitizer` (felles sett med detektorer
   som brukes andre steder i behandlingskjeden).
2. Innebygde `DEFAULT_GUARD_PATTERNS` (for øyeblikket `system_override_inline` og
   `markdown_system_block`, begge med alvorlighetsgraden `high`).
3. Valgfrie `customPatterns` som sendes via konstruktøralternativer (strenger, regulære uttrykk
   eller poster av typen `{ name, pattern, severity }`).

Når `mode === "block"` **og** minst én deteksjon oppfyller terskelen for
alvorlighetsgrad, returnerer `preCall` `{ block: true, message: "Request rejected:
suspicious content detected" }`. I modusene `warn`/`log` logger guardrailen, men
tillater kallet. Den delte hjelpefunksjonen `evaluatePromptInjection()` eksporteres også
for kallere som må evaluere prompter uten å gå gjennom registeret.

**Skannegrense (v3.8.20):** Detektoren inspiserer bare de **første 16 KB** av
den sammenføyde promptteksten — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 byte) i
`src/shared/utils/inputSanitizer.ts`. Både `detectInjection()` og
`evaluatePromptInjection()` bruker `slice(0, MAX_INJECTION_SCAN_BYTES)` før
mønsterløkken kjøres. Injeksjonsdirektiver ligger nær toppen av inndataene, så dette
begrenser CPU-/GC-bruken for regulære uttrykk på datalaster på flere hundre KB uten å svekke deteksjonen (jf.
#3932, #4041).

### Maskering av påloggingsinformasjon (`credentialMasker.ts`)

Kjøres i **begge** stadier, sist i standardkjeden (prioritet `95`). Sladder
velkjente mønstre for API-nøkler / hemmelige tokener fra den utgående datalasten (meldingsinnhold,
verktøykallargumenter, verktøyresultater) **og** leverandørresponsen, slik at
påloggingsinformasjon som limes inn i en prompt (eller gjentas av et verktøyresultat), ikke lekkes
til oppstrømsleverandøren eller tilbake til klienten.

- **Kun ved eksplisitt aktivering**, samme konvensjon som sladding av personopplysninger (tilstøtende til hard regel nr. 20):
  deaktivert med mindre `settings.credentialRedactionEnabled === true` **eller**
  `CREDENTIAL_REDACTION_ENABLED=true`. Når den er avslått, gjør guardrailen ingenting —
  den blokkerer aldri og omskriver aldri.
- `redactCredentials()` går gjennom hele treet for datalast/respons (`walkValue()`,
  sikkert mot prototypeforurensning, syklussikkert via `WeakSet`) og erstatter treff med
  en `[REDACTED:<type>]`-plassholder, og kloner bare grenene som faktisk
  ble endret.
- `CREDENTIAL_PATTERNS` dekker nøkler for LLM-leverandører (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS-/SaaS-tokener (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), betalingsnøkler (Stripe, Square), sky-
  nøkler (AWS-tilgangsnøkkel, Twilio, SendGrid, Mailgun), private nøkler / JWT-er,
  tilkoblingsstrenger som inneholder påloggingsinformasjon (`mongodb://user:pass@...`, osv.), og
  et generisk mønster for verdier i `Authorization`-/`x-api-key`-/`api-key`-/`apikey`-
  hoder. Hodetypenøkler (`authorization`, `x-api-key`, `api-key`,
  `apikey`) sladdes strukturelt (kun verdien, skjemaprefikser som
  `Bearer `/`Basic ` beholdes) i stedet for via det generiske tekstuttrykket.
- Guardrailen blokkerer aldri; den omskriver bare (`modifiedPayload` /
  `modifiedResponse`) og legger til merknader (`meta.credentialsRedacted`, `meta.count`).

Regresjonsvern: `tests/unit/credential-masker-guardrail.test.ts`.

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
  block?: boolean; // true kortslutter kjeden
  message?: string; // vises ved blokkering
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // returneres av preCall for å omskrive forespørselen
  modifiedResponse?: TValue; // returneres av postCall for å omskrive svaret
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

En sikkerhetsmekanisme signaliserer «ingen endring» ved å returnere enten `void`, `{}` eller
`{ block: false }`. Hvis en `modifiedPayload`/`modifiedResponse` returneres, erstattes
verdien som flyter gjennom kjeden for etterfølgende sikkerhetsmekanismer.
`signal?: AbortSignal` viderefører livssyklusen til den som kaller, inn i sikkerhetsmekanismene. Avbrudd av en forespørsel er det tilsiktede fail-open-unntaket: mediebroer stopper arbeidet og rydder opp uten å gjenopprette råmedier til et mål som man vet ikke støtter dem.

## Register (`registry.ts`)

Singleton-objektet `guardrailRegistry` eksponerer:

- `register(guardrail)` — legger til en sikkerhetsmekanisme (eller erstatter etter normalisert navn) og
  sorterer på nytt etter stigende `priority`.
- `clear()` / `list()` — administrative hjelpefunksjoner.
- `runPreCallHooks(payload, context)` — itererer gjennom aktive sikkerhetsmekanismer, fører
  nyttelasten videre gjennom `modifiedPayload` og stopper ved den første `block: true`.
- `runPostCallHooks(response, context)` — samme flyt på svarsiden.
- `resetGuardrailsForTests({ registerDefaults })` — tømmer tilstanden og registrerer eventuelt
  standardinnstillingene på nytt for ren testisolasjon.

Begge kjørerne returnerer `{ blocked, payload|response, results, guardrail?, message? }`,
der `results` er en matrise med `GuardrailExecutionResult`-oppføringer som inneholder
feltene `blocked`, `skipped`, `modified`, `error` og `meta` per sikkerhetsmekanisme,
noe som er nyttig for sporing.

### Deaktivere sikkerhetsmekanismer per forespørsel

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` samler en
duplikatfri liste over navn på sikkerhetsmekanismer som skal hoppes over for den gjeldende
forespørselen. Kilder (alle valgfrie, alle slås sammen):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` i forespørselskroppen (på toppnivå)
- `metadata.disabledGuardrails` i forespørselskroppen
- Headeren `x-omniroute-disabled-guardrails` (eller den eldre
  `x-disabled-guardrails`)

Verdier kan være matriser med strenger eller en kommaseparert streng. Navn
normaliseres til kebab-case med små bokstaver (`pii_masker` → `pii-masker`). Resultatet
sendes via `context.disabledGuardrails` til registeret, som hopper over
samsvarende sikkerhetsmekanismer (`skipped: true` i `results`).

## Utførelsesrekkefølge

For hver forespørsel som går gjennom `src/sse/handlers/chat.ts` og
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` bygger listen over elementer som skal hoppes over, basert på API-nøkkel, body
   og headere.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` kjører sikkerhetsmekanismene i stigende
   prioritetsrekkefølge:
   - Deaktiverte sikkerhetsmekanismer registreres som `skipped`.
   - Hver sikkerhetsmekanismes `preCall` kan skrive om payloaden via `modifiedPayload`.
   - Den første `block: true` avbryter kjeden, og handleren returnerer
     et avvisningssvar fra sikkerhetsmekanismen.
3. Den (potensielt omskrevne) payloaden går videre til kombinasjonsruting og oppstrøms
   videresending.
4. Etter at svaret er satt sammen, kjører `guardrailRegistry.runPostCallHooks(...)`
   den samme kjeden på svaret. `block: true` her forkaster det oppstrøms
   svaret.

Sikkerhetsmekanismer som utløser unntak, registreres med `error: <message>` og logges via
`logger.warn`, men kjeden fortsetter — fail-open med hensikt.

## Konfigurasjon

Miljøvariabler som leses av de innebygde sikkerhetsmekanismene:

| Variabel                              | Brukes av                | Effekt                                                                                                                |
| ------------------------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`       | Sett til `false` for å deaktivere deteksjon fullstendig.                                                              |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`       | Retningslinje for injeksjon: `warn`, `block` eller `log`. Den eldre verdien `redact` skriver ikke om injeksjonstekst. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`       | Modus for injeksjonsbeskyttelsen; også et funksjonsflagg i databasen som **overstyrer** miljøvariablene (DB > ENV).   |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`       | Laveste alvorlighetsgrad som `MODE=block` avviser: `high` (standard), `medium` eller `low`.                           |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`       | Eldre alias for `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                    |
| `PII_REDACTION_ENABLED`               | `pii-masker`             | Når satt til `true`, blir PII i forespørselen sladdet (uavhengig av injeksjonsmodus).                                 |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (nedstrøms) | Styrer maskeringsatferd på svarsiden.                                                                                 |

Sikkerhetsmekanismene i Modality Bridge leser kjøretidskonfigurasjon fra det databasebaserte innstillingslageret
(`getSettings()`), ikke fra miljøvariabler. De primære nøklene for Vision er
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` og
`modalityBridgeCacheMaxEntries`. De eldre
`visionBridge*`-nøklene godtas bare som den dokumenterte reservemekanismen for lesing i én syklus;
skriving fra kontrollpanelet bruker de primære nøklene. Standardverdier og fallback-resolveren
finnes i `src/shared/constants/modalityBridgeDefaults.ts`, mens eldre
konstanter beholdes i `src/shared/constants/visionBridgeDefaults.ts`.

Audio bruker `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` og `modalityBridgeAudioMaxClips`, i tillegg til de delte
`modalityBridgeCache*`-innstillingene. Audio har ingen fallback til eldre nøkler fordi disse
nøklene ble introdusert med Modality Bridge-skjemaet.

Video bruker `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` og
`modalityBridgeVideoTimeout`, i tillegg til de delte `modalityBridgeCache*`-innstillingene.
Den er deaktivert som standard fordi FFmpeg/ffprobe er valgfrie driftsavhengigheter,
og teksting av bilderammer øker latensen og modellkostnaden.

## Egendefinerte sikkerhetsmekanismer

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

Trinn:

1. Opprett `src/lib/guardrails/myGuardrail.ts` som utvider `BaseGuardrail`.
2. Implementer `preCall` og/eller `postCall`.
3. Registrer enten ved importtidspunktet (legg til fra `registerDefaultGuardrails`), eller
   kall `guardrailRegistry.register(...)` under kjøring — registeret erstatter
   eventuelle tidligere sikkerhetsmekanismer med samme normaliserte navn.
4. Legg til tester under `tests/unit/` (eksisterende eksempler:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testing

Bruk `resetGuardrailsForTests()` mellom testene for å starte fra en kjent tilstand.
Send `{ registerDefaults: false }` for å starte med et tomt register og
registrere bare sikkerhetsmekanismene som testes. Vision Bridge støtter avhengighets-
injeksjon (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge tilbyr
tilsvarende koblingspunkter for innstillinger, funksjonalitet, valg av STT-modell, kontroll
av legitimasjon og transkribering. Testene kan derfor kjøre begge flytene uten tilgang
til database eller nettverk.

## Se også

- `src/lib/guardrails/` — implementasjon
- `src/shared/utils/inputSanitizer.ts` — delt detektor som driver
  beskyttelse mot promptinjeksjon og maskering av personopplysninger
- `src/shared/constants/visionBridgeDefaults.ts` — standardinnstillinger for Vision Bridge og
  modelliste for tvungen brokobling
- `src/shared/constants/modalityBridgeDefaults.ts` — delte standardinnstillinger for kjøring av Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonalt lag (automatsikring, nedkjølingsperioder)
- `docs/reference/ENVIRONMENT.md` — fullstendig referanse for miljøvariabler

## Rutedekning og red-team-testing for injeksjonsbeskyttelse (fase 8 · blokk D)

Injeksjonsbeskyttelsen (`createInjectionGuard` / `withInjectionGuard`) dekker alle ruter
som godtar brukerprompter. Den tar hensyn til `INJECTION_GUARD_MODE` (standardverdien `warn` = bare logging;
`block` = returnerer HTTP 400 `SECURITY_001`).

| Type                 | Ruter                                                                                                                                                | Standardmodus |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Tekst (eksisterende) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Generativ            | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Data                 | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Tekstuttrekk (`extractMessageContents`) dekker `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (hver natt, `nightly-llm-security.yml`):** promptfoo validerer at hver rute blokkerer
OWASP-LLM-korpuset i `INJECTION_GUARD_MODE=block`; garak kjører sonder (hoppes over uten hemmelighet).
`moderations` er inkludert for konsistens — operatører i blokkeringsmodus kan unnta den via
`resolveDisabledGuardrails`.

Den nattlige arbeidsflyten (`.github/workflows/nightly-llm-security.yml`, cron + manuell
utløsning) har to jobber:

- **`promptfoo-guard` (blokkerende)** — kjører `promptfoo eval -c promptfooconfig.yaml`
  med `INJECTION_GUARD_MODE=block`. Hvert angrepstilfelle (f.eks. «ignorer alle
  tidligere instruksjoner …», jailbreaks i DAN-stil) kontrollerer at svaret inneholder
  `error.code === "SECURITY_001"`, dvs. at sikkerhetsmekanismen faktisk avviste forespørselen.
- **`garak` (rådgivende)** — kjører garak `--probes promptinject,dan,leakreplay`
  mot en lokal OmniRoute-instans (`http://localhost:20128/v1`). Avhenger av en
  leverandørhemmelighet (`PROMPTFOO_PROVIDER_KEY`); hoppes kontrollert over og har suffikset
  `|| true`, slik at den rapporterer uten at CI feiler.

Dekningen av hjelpefunksjonen for beskyttelse (`createInjectionGuard` / `withInjectionGuard`)
omfatter alle `/v1`-ruter som inneholder prompter; prompttekst hentes fra
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` av
`extractMessageContents()` i `src/shared/utils/inputSanitizer.ts`.
