# Guardrails (Eesti)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Tõeallikas:** `src/lib/guardrails/`
> **Viimati uuendatud:** 2026-08-29 — v3.8.51 (Video Bridge'i transkriptsiooni päritolu deklareerib kutsuja,
> server ei ole seda veel kontrollinud — täpsustatud vastavalt #11661-le)

Kaitsepiirded rakendavad ohutust, poliitikaid ja sisuteisendusi OmniRoute'i ning
ülesvoolu teenusepakkujate vahelisel piiril. Iga kaitsepiire saab kontrollida (ja
valikuliselt tagasi lükata, teisendada või annoteerida) päringu andmekogumeid (`preCall`) ja
ülesvoolu vastuseid (`postCall`).

Süsteem on **tõrke korral läbilaskev**: kui kaitsepiire tekitab käitamisel erindi, salvestab register
vea ja jätkab järgmise kaitsepiirdega, selle asemel et päring nurjata.
Blokeerimine on teadlik otsus (`block: true`), mitte kunagi juhus.

## Sisseehitatud kaitsepiirded

Register laadib importimisel automaatselt prioriteetsuse järjekorras kuus kaitsepiiret
(vt `registry.ts` → `registerDefaultGuardrails()`):

| Prioriteet | Nimi                | Etapp/etapid   | Fail                  |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Väiksema prioriteedinumbriga kaitsepiirded käivitatakse **esimesena**.

### Nägemissild (`visionBridge.ts`) — modaalsussild PR-1

Püüab kinni pilte sisaldavad päringud, mis on suunatud **nägemisvõimeta mudelitele**, ja kas
suunab kogu päringu ümber nägemisvõimelisele mudelile või asendab pildiosad
enne ülesvoolu päringut tekstikirjeldustega, mille loob konfigureeritav nägemismudel.
See võimaldab ainult teksti toetavatel teenusepakkujatel läbipaistvalt töödelda
multimodaalseid lastandmeid.

Töövoog:

1. Jäta vahele, kui sihtmudel juba toetab nägemist (välja arvatud juhul, kui see esineb
   sunnitud silla loendis `isVisionBridgeForcedModel`).
2. Eralda pildiosad funktsiooniga `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), mis delegeerib töö **ühtsele meediatuvastile**
   `detectMediaParts()` failis `open-sse/utils/mediaParts.ts` — see on
   ainus tõeallikas, mida jagatakse kombinatsioonide ühilduvusfiltriga.
   Eraldamine on lubatud ainult selliste ülataseme osakujude jaoks,
   mida `replaceImageParts` saab tagasi lisada (eraldamise↔asendamise leping): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` ja Responses API `input_image`. Pesastatud vasted ja
   ainult indikaatorit sisaldavad kujud kuuluvad kombinatsioonifiltrile ega ole kunagi eraldatavad.
   Kui midagi ei leita, jäta vahele.
3. Lahenda käitusaegne konfiguratsioon funktsiooniga `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): uued `modalityBridge*`
   seadistusvõtmed on ülimuslikud; pärandvõtmed `visionBridge*` jäävad **ühe tsükli
   varuvariandiks** (tagasipööramisaken). Kui sild on keelatud, jäta vahele enne
   meedia läbivaatamist.
4. Režiimivalija (`modalityBridgeVisionMode`, vt allolevat tabelit) otsustab
   ümbersuunamise ja kirjeldamise vahel. Ümbersuunamine tagastab `modifiedPayload`, milles on
   vahetatud ainult `model`, ning metaandmed `{ rerouted, fromModel, toModel, imagesKept }`.
5. Kirjeldamise tee: piira piltide arv väärtusega `maxImages`, koosta ülesannet arvestav viip,
   kontrolli kirjelduste vahemälu, kutsu nägemismudel välja **paralleelselt**
   (`Promise.allSettled`) ning sisesta piltide asemele tekstiosad
   `[Image N]: <description>`. Nurjunud kirjeldamine annab tulemuseks `null` ja algne pildiosa
   **säilitatakse** (#4012) — välja arvatud kombinatsiooni kirjeldamisteel, kui kõik
   kirjeldamised nurjusid; sellisel juhul saab kinnitatud nägemisvõimeta ülesvool
   selle asemel asendusteksti `(unavailable — no vision-capable provider connected)` (#8430).
6. Tagasta `modifiedPayload` + metaandmed (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Režiimivalija (`modalityBridgeVisionMode`)

| Režiim     | Vaikimisi | Käitumine                                                                                                                                                                                                                                                                                                   |
| ---------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔         | Muutmata pärandheuristika (#6640/#7204): mittekombineeritud/`auto/` mudelid suunatakse ümber parimale nägemismudelile, välja arvatud juhul, kui algsel mudelil on juba kasutatavad mandaadid (siis kirjeldatakse); kombinatsiooni sihtmärke kirjeldatakse alati.                                            |
| `describe` |           | Kirjelda alati — ümbersuunamisplokk jäetakse täielikult vahele; vastab alati kasutaja valitud mudel.                                                                                                                                                                                                        |
| `reroute`  |           | Sunni ümbersuunamine: mandaatidega mudeli säilitamise kontrollist minnakse mööda. Ümbersuunamise **sihtmärgi** mandaatide kontroll kehtib endiselt — kui sobivat nägemissihtmärki pole, jätkub päring kirjeldamisega, et töötlemata pildid ei jõuaks kunagi ainult teksti toetavasse taustsüsteemi (#8430). |

Sunnitud režiimid lõpetavad töö lühiteena **enne** automaatheuristika käivitamist; režiimi `auto` käitumine
on PR-1-eelse kaitsepiirdega baiditäpselt identne.

#### API-võtme ulatus (`visionBridgeKeyScope.ts`)

Kui kutsuja API-võti piirab `allowedConnections`, kvoodipagasid
(`allowedQuotas`) või mudeleid (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), valib sild
ümbersuunamiseks ja kirjeldamiseks ainult mudelid, mida võti võib kasutada, ning ühendused,
mida võti võib kasutada. Kirjeldamiskutse läbib seejärel alati OmniRoute'i enesetsükli koos
päisega `x-omniroute-self-loop-key-id`, et vastuvõttev vestluspäring
jõustaks selle võtme ühenduse- ja mudelipoliitika uuesti. `enforceApiKeyPolicy()`
arvestab seda päist ainult koos enesetsükli kandjatõendiga, mistõttu saab see üksnes
juurdepääsu kitsendada, ning ID, mida ei õnnestu lahendada, lükatakse tagasi.

Kui võtmel pole lubatud kasutada ühtegi nägemismudelit, astub kirjeldamistee kõrvale ja
päring edastatakse muutmata kujul — sama tõrke korral avatud käitumine nagu keelatud
kaitsepiirde puhul (metaandmed `{ skipped: true, reason: "no_permitted_vision_model" }`).
Võtmeta päringud ja nende võtmetega päringud, millel selliseid piiranguid pole, käituvad täpselt
nagu varem.

#### Ülesannet arvestav kirjeldusviip (`modalityBridgeVisionTaskAware`)

Vaikimisi **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) lisab
baaskirjeldusviibale **viimase kasutajasõnumi** teksti (kärbituna 500 märgini),
suunates kirjelduse sellele, mida kasutaja tegelikult küsis
(codex-vision-proxy muster), ning paludes nägemismudelil nähtav tekst
transkribeerida. Kui lipp on välja lülitatud — või kasutaja tekst puudub —,
kasutatakse baaskirjeldusviipa muutmata kujul.

Kirjeldamise enesetsükli enda OpenAI-ga ühilduv päring (`callVisionModelSingle()`
failis `visionBridgeHelpers.ts`) nõuab alati väärtust `image_url.detail: "high"` —
tingimusteta, iga kutsuja/teenusepakkuja puhul ning sõltumata mis tahes kliendi
signaalist. Madala detailsusega diskreetimine halvendab OCR-i täpsust just selle
teksti transkribeerimise ülesande puhul, mida viip nõuab, seega küsib kirjeldamiskutse
alati suurt detailsust olenemata sellest, millist detailsustaset algne sisendpäring
kasutas. See mõjutab ainult sisemise kirjeldamispäringu keha; see ei muuda seda,
kuidas OmniRoute edastab põhipäringus kutsuja enda väärtust `image_url.detail` —
see vaikeväärtus rakendatakse eraldi ja ainult tuvastatud OpenCode'i klientidele
funktsioonis `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Kirjeldamise enesetsükli Anthropic wire-format harul pole välja `detail` ning
kumbki vaikeväärtus seda ei mõjuta.

#### Kirjelduse väljundi piirang (`modalityBridgeVisionMaxChars`)

| Võti                           | Vaikeväärtus | Vahemik           |
| ------------------------------ | ------------ | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`          | `0` või 100–50000 |

`0` (vaikeväärtus) tähendab, et **piirang puudub** — funktsiooni
`callVisionModel()` tagastatud kirjeldus edastatakse muutmata kujul, säilitades
senise käitumise. Mis tahes väärtus vahemikus 100–50000 kärbib kirjeldust,
lisades lõppu järelliite `…`, enne kui see lisatakse tagasi kujul
`[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` failis
`src/lib/guardrails/visionBridge.ts`). Suurendage seda detailirohkete OCR-i
ülesannete puhul, kus järgnev mudel vajab täielikku transkriptsiooni; vähendage
seda, et piirata jutukate nägemismudelite tokenikasutust.
Juhtpaneeli väli asub vahekaardi Vision paneelil Advanced
(`modality-bridge-max-chars` failis `ModalityBridgeVisionTab.tsx`) ning tõstab
kõik väärtused vahemikus 1 kuni 99 minimaalse väärtuseni 100, jättes sõnaselgelt
määratud `0` muutmata — `0` on eraldiseisvalt kehtiv Zodi väärtus
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), mitte üksnes
„määramata” vaikeväärtus.

#### Kirjelduste vahemälu (`modalityBridge/bridgeCache.ts`)

Mälusisene LRU- ja TTL-vahemälu kirjelduste väljundite jaoks, mida jagatakse
kogu protsessi ulatuses.
Võti = `sha256(imageRef + composedPrompt + configuredBridgeModel)` koos
pikkuseprefiksiga raamimisega (väljapiiride kokkupõrkeid ei teki). Mudelikomponent
on **konfigureeritud** sildmudel, mitte tegelikult vastanud mudel —
`callVisionModel` võib sisemiselt kasutada varuvarianti ning katsete kaupa
võtmete loomine killustaks vahemälu. Ebaõnnestunud kirjeldusi ei salvestata
kunagi vahemällu. Seaded:

| Võti                            | Vaikeväärtus | Vahemik |
| ------------------------------- | ------------ | ------- |
| `modalityBridgeCacheEnabled`    | `true`       | —       |
| `modalityBridgeCacheTtlMinutes` | `60`         | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`        | 10–5000 |

#### Kaugpiltide normaliseerimine (enesetsükli kirjeldamine / base64-toomine)

Kui sild toob ise **kaugpildi** — Anthropic kirjeldamise enesekutse ja
claude-wire-format base64-teisendus (`ensureBase64ImagesForClaudeWire`),
mõlemad funktsiooni `fetchRemoteImageAsDataUri()` kaudu failis
`visionBridgeHelpers.ts` —, edastatakse saadud andme-URI enne nägemismudeli
päringusse manustamist funktsioonile `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`). Liiga suured pildid vähendatakse
**2048px pikkuse küljeni** (vastavalt suurusemuutmise piirangule, mida OpenAI
ja Anthropic juba serveri poolel rakendavad), mis vähendab üleslaaditavate
baitide hulka ja latentsust, muutmata seda, mida nägemismudel näeb. Suuruse
muutmiseks kasutatakse paketti `sharp`, mis laaditakse dünaamilise impordiga:
platvormil, kus selle natiivse binaarfaili laadimine ebaõnnestub, ei tekita
`normalizeDataUri()` **kunagi erindit** — see edastab algsed baidid muutmata,
nii et kirjeldamise/base64-teisenduse tee jätkab alati töötamist. Ka andmed,
mis pole pildid (toomine ei tagastanud dekodeeritavat pilti), edastatakse
muutmata kujul. See normaliseerimine piirdub piltidega, mille sild toob oma
enesekutse jaoks — seda ei rakendata kunagi kutsuja töötlemata läbiva
edastuse kasulikule koormusele, kooskõlas ainult nõusolekul muutmise
põhimõttega (range reegel nr 20).

#### Seadete skeem + migratsioon

Uued võtmed `modalityBridge*` valideeritakse Zodiga skeemis
`updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`):
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
kolmik `modalityBridgeCache*` ja Audio Bridge'i kasutatav rühm
`modalityBridgeAudio*`. Migratsioon `141_modality_bridge_settings.sql`
kopeerib olemasolevad pärandväärtused `visionBridge*` vastavatesse uutesse
võtmetesse (idempotentselt ega kirjuta kunagi üle operaatori määratud
`modalityBridge*` väärtust); pärandvõtmeid aktsepteeritakse ühe väljalasketsükli
jooksul lugemise varuvariandina.

#### Läbipaistvuspäis + statistika

Kirjeldamisega teisendatud vastused sisaldavad päist
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(mille loob `buildModalityBridgeHeader()` failis
`modalityBridge/bridgeStats.ts` ja lisab `withModalityBridgeHeader()` failis
`src/sse/handlers/chatHelpers.ts`).
Ümbersuunatud päringud **ei saa** päist — kasulik koormus jäi muutmata ja
mudeli vahetus on juba nähtav vastuse keha väljal `model`.

`GET /api/modality-bridge/stats` (halduse autentimine, sama tase nagu
`GET /api/settings`) tagastab mälus hoitavad modaalsusepõhised loendurid
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` modaalsuste `vision`, `audio` ja
`video` kohta. `averageLatencyMs` kasutab nimetajana väärtust `latencySamples`,
mitte kõiki katseid; ajastuseta toiming ei tekita kunstlikku nullmillisekundilist
valimit. `bridged` jääb edukate teisenduste tagasiühilduvaks aliaseks;
nurjunud katsed seda ei suurenda.
Loendurid lähtestatakse protsessi taaskäivitamisel kavakohaselt
(telemõõdikud, mitte arvestus).

#### Töölaua konfiguratsioon

Eraldi töölaualeht asub aadressil
`/dashboard/settings/modality-bridge`. Selle URL-i kaudu avatavad vahekaardid `Vision`, `Audio`
ja `Video` säilitavad vahetamisel päringuparameetrid, muutes ainult väärtust `tab`.
Vahekaardil Vision saab hallata lubamist, režiimi, mudeli valikut (sealhulgas automaatset
vaikevalikut), ülesandeteadlikku viibastamist, täpsemaid ajalõpu-/pildi-/kirjelduse pikkuse/vahemälu
piiranguid, käitusaegseid
loendureid ja kaitstud näidispäringut. Ka vahekaart Audio on toimiv: seal saab
hallata lubamist, ainult STT-mudelite valikut koos suvandiga Auto, ajalõpu-/maksimaalse klipi
piiranguid ja heli loendureid ning teha `input_audio` näidistesti. Vahekaart Video on funktsionaalne: see kuvab
FFmpegi/ffprobe'i käitusoleku — ühe neljast selgesõnalisest kasutajaliidese olekust (`unknown`, kui
kontroll on pooleli või seda ei õnnestunud lõpetada; `restricted`, kui töölaud asub mitte-tagasisideahela
hostis, mistõttu kontroll jäetakse kliendipoolel vahele; `unavailable`, kui kontroll on tehtud
ja puudumine kinnitatud; või `available` koos FFmpegi/ffprobe'i versioonidega) —, salvestab
lubamise/mudeli/kaadri/video/ajalõpu piirangud, filtreerib mudelivalija nägemisvõimeliste
mudelite järgi ning kuvab video loendurid.

Endine Vision Bridge'i kaart AI-seadete all on nüüd ühilduvuslink
uuele lehele; see ei halda enam vormi teist koopiat. Media Providers
lingib ka Image-to-Texti ja Speech-to-Texti töövood vastavatele Modality
Bridge'i vahekaartidele, eemaldamata olemasolevat Speech-to-Texti proovikeskkonda.

**Eneseahela vastuvõtukontrollist möödumine:** kui kirjeldamiskutse suunatakse läbi OmniRoute'i
enda `/v1` eneseahela (mittestandardne teenusepakkuja mudel), saadab alampäring
`x-omniroute-admission-bypass: internal` ja autenditakse lahendatud
eneseahela mandaadiga — kohalikus režiimis kohaliku `sk_omniroute` sentinelväärtusega või
operaatori konfigureeritud keskkonnavõtmega `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350), et
juurutused seadega `REQUIRE_API_KEY=true` saaksid kirjeldamiskutset endiselt käitada. Möödumist
lubatakse ainult nende täpsete mandaatide korral, mistõttu väliskliendid ei saa
päise abil vastuvõtukontrolli vahele jätta.

Pärandvaikeväärtused asuvad failis `src/shared/constants/visionBridgeDefaults.ts`;
uued režiimi/ülesandeteadlikkuse/vahemälu vaikeväärtused ja seadete lahendaja asuvad failis
`src/shared/constants/modalityBridgeDefaults.ts`. Kaitsemehhanism pakub
konstruktori suvandit `deps`, et testid saaksid sisestada võltsitud `getSettings`-i ja
`callVisionModel`-i teostused.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Peatab heli sisaldavad vestluspäringud enne, kui need jõuavad sihtmärgini, mille kohta
pole teada, et see aktsepteeriks helisisendit. See ei suuna vestluspäringut kunagi ümber:
helilõigud transkribeeritakse olemasoleva OpenAI-ga ühilduva mitmeosalise lõpp-punkti kaudu ning
valitud vestlusmudel jätkab tekstitranskriptsioonidega.

Voog:

1. Lahenda `supportsAudio` funktsiooni `getResolvedModelCapabilities()` kaudu. Esmalt
   eelistatakse teenusepakkuja registri otseseid metaandmeid, seejärel staatilisi mudeli metaandmeid ja lõpuks
   sünkroonitud väärtust `modalities_input`. Deklareeritud sisendiloend ilma väärtuseta `audio` annab tulemuseks `false`;
   kui võimekuse kohta tõendid puuduvad, jääb tulemuseks `null`. Nii `false` kui ka `null` aktiveerivad
   konservatiivse silla, `true` aga jätab selle vahele.
2. Lahenda `modalityBridgeAudio*` seaded ja eralda jagatava detektori `detectMediaParts()`
   abil iga sõnumi tipptasemelt asendatavad
   heliosad. Toetatud andmevormingud on OpenAI `input_audio`, `audio_url` ja
   `source.media_type: "audio/*"`. Pesastatud heli tuvastatakse marsruutimiseks, kuid
   asendustee seda ei eemalda. Töömahtu piirab `modalityBridgeAudioMaxClips`;
   hilisemad osad jäävad muutmata.
3. Kasuta konfigureeritud väärtust `provider/model` või lase funktsioonil `selectAudioBridgeModel()`
   läbida `AUDIO_TRANSCRIPTION_PROVIDERS` stabiilses kataloogijärjekorras ja valida esimene
   mudel, millel on kasutatav aktiivne teenusepakkuja mandaat.
4. `callAudioTranscription()` teisendab base64-/data-URI-heli mitmeosaliseks
   `file`-väljaks või laadib välise `audio_url`-i alla ainult avalikke aadresse lubava väljamineva ühenduse
   kaitse kaudu, kasutades DNS-i sidumist ja 25 MB piirangut. Seejärel teeb see faili ja valitud
   mudeliga POST-päringu kohalikule `/v1/audio/transcriptions` eneseahelale, autentides selle
   funktsiooniga `resolveSelfLoopBearer()`. Olemasolev transkribeerimismarsruut teeb tavapärase
   mandaadiotsingu, käsitleb jahtumis-/kiirusepiiranguid ning suunab päringu teenusepakkujale.
5. Edukad kutsed asendavad vastavad osad tekstiga `[Audio N]: <transcript>`. Kutsed
   käivitatakse funktsiooniga `Promise.allSettled`: üksiku kutse nurjumisel säilitatakse algne
   heliosa (#4012 leping). Kui kõik kutsed nurjuvad ja sihtmärgi puhul on tõestatud
   `supportsAudio === false`, muutuvad osad kujule
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 leping). Tundmatu
   sihtmärgi (`null`) korral jääb kõigi kutsete nurjumisel sisu muutmata. Tõendatult
   ainult teksti toetav sihtmärk, mille jaoks pole kasutatavat STT-mandaati, saab sama selgesõnalise
   asendusteksti ilma võrgukutset tegemata.

Edukad transkriptsioonid kasutavad kogu protsessi hõlmavat Modality Bridge'i LRU/TTL-vahemälu.
Võti ühendab heliviite, stabiilse toimingusildi `audio-transcription`
ja valitud STT-mudeli; tõrkeid ei salvestata kunagi vahemällu. Helikatsed uuendavad
jagatud loendureid `bridged`, `cacheHits`, `failures` ja `lastUsedAt`.
Teisendatud vastused sisaldavad päist
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; muutmata
päringutele Audio Bridge'i segmenti ei lisata.

Käitusaegsed seaded salvestatakse andmebaasis ja valideeritakse Zodiga:

| Võti                          | Vaikeväärtus | Vahemik               |
| ----------------------------- | ------------ | --------------------- |
| `modalityBridgeAudioEnabled`  | `true`       | —                     |
| `modalityBridgeAudioModel`    | `""`         | Automaatne või STT ID |
| `modalityBridgeAudioTimeout`  | `60000`      | 1000–300000           |
| `modalityBridgeAudioMaxClips` | `3`          | 1–10                  |

Ühist vahemälu juhivad endiselt `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` ja `modalityBridgeCacheMaxEntries`.

### Videosild (`videoBridge.ts`, `videoBridgePipeline.ts`)

Püüab kinni Chat Completionsi `messages`-välja ja Responses API `input`-välja
tipptaseme videoosad enne sellise sihtmärgi väljakutsumist, millel puudub
teadaolev omapärane videotugi. Toetatud kujud on `input_video`, `video_url`,
`video_source`, HTTPS-i URL-id ja `data:video/*;base64,...`-andme-URI-d.
Tekstis olevaid lihtsaid failinimesid ei käsitleta videona.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) vastutab päringu läbimise,
võimekuse ja poliitika kontrolli, päringupõhise koondamise ning vastuse
kasuliku lasti eest. Iga video töötlemine — hankimine, terviktulemuse vahemälu,
kaadrijada kirjeldamine (mis ühendab ka kõik kutsuja deklareeritud heli
transkriptsioonid) ning katsepõhised mõõdikud, katkestamine ja puhastamine — on
peidetud `videoBridgePipeline.ts`-i funktsiooni `processVideoPart` taha, mida
kutsutakse `preCall`-i tsüklis iga videoosa kohta üks kord. See moodul määratleb
ka selgesõnalised pordipiirid `VideoMediaBrokerPort` (baitide hankimine ja
valimkaadrite eraldamine), `VideoAudioTranscriptionPort` (kutsuja deklareeritud
heli transkriptsiooni ühendamine valitud kaadrite subtiitritega) ja
`VideoDrilldownPort` (kaadrite süvavaate püsivuspiir; pole veel funktsiooniga
`processVideoPart` ühendatud — praegu kirjutab süvavaate kirjeid ainult eraldi
marsruut `/api/modality-bridge/video/drilldown`).

Avalik `/v1` päringutee ei impordi ega käivita kunagi alamprotsessi. Kaugvideod
laaditakse alla 50 MiB piirangu raames; tekstisiseselt base64-kodeeritud videotel
on konservatiivne dekodeeritud video 36 MiB piirang, et mudeli, sõnumite ja
raamistuse ümbris jääks avalike JSON-päringute 50 MiB vastuvõtupiirangu sisse.
Tekstisisest pikkust ja dekodeeritud suuruse hinnanguid kontrollitakse enne mälu
eraldamist. HTTPS on nõutav nii algse kaug-URL-i kui ka iga ümbersuunamise puhul,
kasutades olemasolevat ainult avalikke sihtkohti lubavat väljamineva liikluse
kaitset koos DNS-i kinnistamisega. Seejärel ületavad baidid täpselt sisemise
`POST /api/modality-bridge/video/extract` maakleripiiri. See marsruut on nii
`LOCAL_ONLY` kui ka `SPAWN_CAPABLE`, aktsepteerib ainult protsessipõhiselt
autenditud usaldusväärset kohaliku tagasisideahela päringut ega aktsepteeri
kunagi URL-i, failisüsteemi teed, täitmisfaili ega argumentide loendit. API
keha suuruse töötlusahel ja töötleja inkrementaalne kehalugeja jõustavad
teineteisest sõltumatult maakleri sisendi 50 MiB piirangu. Selle piiratud
järjekord käitab korraga üht eraldustoimingut, lubab nelja ootel tööd ja piirab
ootel sisendi mahu 100 MiB-ni.

Maakleri sees loeb `ffprobe` privaatset kohalikku faili; fikseeritud
vormingute lubatud loend välistab esitusloendi- ja manifestivormingud. Lubatud
MOV-perekonna konteinerite puhul on välised MOV-andmeviited vaikimisi endiselt
keelatud ning fikseeritud käsk ei luba neid eraldi. Nii `ffprobe` kui ka
`ffmpeg` kasutavad ainult `file`-protokolli lubatud loendit, üht lõime,
fikseeritud argumendimassiive, ei kasuta kesta ning täitmisfailid leitakse
`PATH`-ist. Manustatud pildiga kaanevood ei ole taasesitatavad kandidaadid.
Kõik taasesitatavad vood peavad piirangutele vastama ning enne deterministlikku
väikseima indeksiga varuvarianti eelistatakse selgesõnaliselt määratud
vaikevoogu. Videod on piiratud 600 sekundiga, 8 192 piksliga mõõtme kohta ja
33 554 432 lähtepiksliga. FFmpeg valib 1–16 keskpunkti JPEG-kaadrit, vähendab
pikema serva kuni 1 024 pikslini ilma väiksemaid sisendeid suurendamata ega saa
kunagi URL-i. Vaikimisi on valimismeetod `uniform`. Valikulised `scene_aware`
ja katseline `segment_aware` poliitika teevad juba valideeritud kohaliku voo
ühe täiendava fikseeritud FFmpegi läbimise, valivad piiratud arvu `showinfo`
stseeniajatempleid ning detektori tõrke, ajalõpu, vigase väljundi või tühja
kandidaadikomplekti korral kasutavad deterministlikult samu ühtlasi keskpunkte.
Segmenditeadlik režiim jaotab keskpunktivalimid valideeritud stseenivahemike
vahel proportsionaalselt; segmenditeadlikke tõendeid ja varuvariandi käitumist
kirjeldatakse üksikasjalikult allpool. Kõigis poliitikates rakendatakse pärast
valimist ranget 16 kaadri piirangut. Kui stseeniteadliku päringu eelarve on
ainult üks kaader, kasutab see aktiivse täisvideo või fookusakna ühtlast
keskpunkti ja teatab `policyEffective: uniform`: üks valitud stseenikaader ei
suuda säilitada mõlemat ajalist otsa. Kutsuja võib soovi korral esitada lõpliku
fookusakna (`start`/`end` sekundites); piirid kärbitakse meedia kestuse järgi,
vastupidised või mittelõplikud aknad lükatakse tagasi ning kõiki
valimispoliitikaid rakendatakse ainult normaliseeritud intervallis. Saadud aken
lisatakse valimite metaandmetesse ja mitteusaldusväärse kirjelduse prefiksisse,
et järgnevad mudelid saaksid eristada fokuseeritud katkendit kogu ajajoonest.

Semantiline subtiitrite fookus on eraldi selgesõnaline seadistus. Vaikimisi
kasutatav analüüsirežiim `full` säilitab olemasoleva kaadriviiba ega edasta
päringu teksti kunagi subtiitrimudelile. Režiimis `focused` loeb sild ainult
sama Chati või Responsesi konteineri viimast mittetühja kasutaja loodud
`text`/`input_text`-väärtust, normaliseerib selle NFC-kujule, ahendab
juhtmärgid ja tühikud ning piirab selle 500 Unicode'i koodipunktiga. Tühi
tulemus kasutab varuvariandina täpselt `full`-viipa. Kasutatav vihje
serialiseeritakse JSON-ina eraldi mitteusaldusväärse kasutajakonteksti plokki
ja see võib üksnes prioriseerida vaadeldavaid üksikasju; see ei saa tühistada
eraldi hoiatust meedias nähtavate või kuuldavate juhiste järgimise eest.
Tekstiline fookus ei tuleta kunagi väärtusi `start`/`end` ega muuda ajalist
valimit.

#### FU-07 struktuursed segmenditõendid

`segment_aware` kasutab juba valideeritud kohaliku videovoo puhul üht piiratud eelanalüüsikäiku. Fikseeritud filtriahel skaleerib video esmalt maksimaalselt 320 piksli laiuseks, tuvastab stseenivahetused ja tardunud intervallid ning võtab seejärel hägususe, keskmise heleduse ning ruumilise ja ajalise informatsiooni analüüsimiseks ühe kaadri sekundis. Käik on piiratud 600 struktuuriprooviga, ühe FFmpeg-i/filtri lõimega, samade ainult `file`-protokolli ja konteinerite lubatud loenditega, 1 MiB protsessiväljundi piiranguga ning maksimaalselt 30 sekundiga vahendaja ühise katkestuse/tähtaja piires. See ei aktsepteeri päringust kunagi käsku, filtrit, teed ega URL-i.

Struktuuriväärtused on deterministlikud valimiandmed, mitte video semantiline mõistmine. Need ei tuvasta subjekte, tegevusi, subtiitreid, kõnet ega kasutaja kavatsust. Stseenide ja tardumiste piirid moodustavad segmendid; tardumiste osakaal, hägusus, säritus, ruumiline detailsus ja ajaline muutus mõjutavad ainult seda, kuidas olemasolev 1–16 kaadri eelarve jaotatakse. Täielikult tardunud segment on piiratud ühe kaadriga, samas kui tardumata segmendid konkureerivad ülejäänud eelarve pärast. Kui piire on rohkem kui kaadreid, säilitatakse ajajoone ühtlane katvus, et kiired varased lõiked ei saaks pikka lõpus asuvat segmenti varjata. Stseenipiirid, mis jäävad tardumispiirist 1-sekundilise analüüsilahutuse piiresse, ühendatakse.

Puuduvate filtrite, vigaste või tühjade analüüsiandmete, detektori vea või piiratud eelanalüüsi ajalõpu korral kasutatakse täpselt ühtlast keskpunktipoliitikat. Kutsuja katkestuse või vahendaja tähtaja korral seda varuvarianti ei kasutata: pooleliolev alamprotsess lõpetatakse, hilisem kaadrite eraldamine takistatakse ja privaatne ajutine kataloogipuu eemaldatakse plokis `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` loob reaalse FFmpeg-i abil deterministlikud testandmed dublettide eemaldamise järgse subtiitripäringute kokkuhoiu, tiheda liikumise eelarvejaotuse, hägususe/särituse/SI-TI analüüsiandmete, pika lõpuosaga kiirete lõigete ja järkjärgulise hajumise valepositiivsete tulemuste jaoks. See salvestab eelanalüüsi seinaaja ning juhul, kui `/usr/bin/time` on saadaval, alamprotsessi protsessoriaja ja maksimaalse RSS-i. Selle kvaliteedikontrollid on ainult struktuurilised oraaklid. Tegeliku subtiitrimudeli kvaliteedi olekuks jääb `HOLD`, sest sellel testiraamistikul puudub autoriseeritud lõpp-punkt või fikseeritud hindaja. Ka rahalise kokkuhoiu olekuks jääb `HOLD`, välja arvatud juhul, kui `--caption-cost-per-call-usd` annab selgesõnalise positiivse kuluhinnangu päringu kohta; skript ei fabritseeri kumbagi tulemust.

Iga kaader on piiratud 4 MiB-ga, kõik toorkaadrid kokku 23 MiB-ga ja vahendaja jadastatud vastus 32 MiB-ga. Privaatne ajutine kataloog eemaldatakse plokis `finally`. OmniRoute ei sisalda FFmpeg-i ega aktsepteeri kohandatud täitmisfaili teed. Enne subtiitrite loomist rakendab sild konservatiivset visuaalsete duplikaatide eemaldamise käiku: iga JPEG vähendatakse 16×16 halltoonipuhvriks ja seda võrreldakse ainult viimase säilitatud kaadriga. Kui taotletud subtiitrieelarve on suurem kui üks kaader, annab eraldamine piiratud kandidaatide kogumi, mis sisaldab kuni kaks korda rohkem kaadreid kui eelarve, kuid mitte kunagi üle 16 kaadri. Taotletud ülempiiri rakendatakse alles pärast duplikaatide eemaldamist ning lõplikul harvendamisel säilitatakse esimene ja viimane valitud kandidaat, kui eelarve on vähemalt kaks. Versioonitud poliitika `grayscale-16x16-mean-cells-v2` kasutab suuremat väärtust keskmise heleduse erinevusest ja nende pisipildi lahtrite suhtarvust, mille normaliseeritud erinevus on vähemalt 0.05. Duplikaadi lävi on konstant 0.04, mis on valitud prognoositavuse huvides, mitte käitusajal seadistatava väärtusena. See teisene suure kontrastsusega signaal säilitab väikese liikumise ja nähtava teksti muudatused, mida ainult keskmisel põhinev võrdlus võib varjata. Võrdleja või dekoodri vigade korral jäetakse katvus alles. Väljundi metaandmed eristavad eraldatud kandidaate, edukalt kasutatud kaadreid ja eemaldatud visuaalseid duplikaate.

Selgesõnaliselt märgistatud videoosa võib taotleda ajatemplitega kontaktlehte. Sild loob maksimaalselt 4 veeru ja 16 kaadriga JPEG-ruudustiku. Iga 512-piksline lahter lisab oma lähteajatempli suure kontrastsusega alumisele ribale, samal ajal kui samad ajatemplid säilivad järgneva seostamise ja auditeerimise jaoks tekstilistes metaandmetes. Kogu JPEG on endiselt piiratud 32 MiB-ga. Kui `sharp` ei suuda ruudustikku dekodeerida või koostada, kasutab sild varuvariandina üksikuid JPEG-kaadreid; kliendi katkestus levib siiski läbi kontaktlehe toimingu.

Kasutuselevõtu tõendusmaterjal on sünteetilisest kompositsiooni mikrojõudlustestist teadlikult eraldatud. `scripts/perf/video-bridge-contact-sheet-eval.ts` määratleb skeemiversiooniga A/B-testiraamistiku reaalsete OpenAI-ga ühilduvate nägemismudelite jaoks. See mõõdab teenusepakkuja teatatud sõnesid, täielikku seinaaega (sealhulgas kontaktlehe koostamist), mudelipäringute arvu ja manifestis määratletud faktide säilimist. Mudeli toorvastuseid aruandesse ei kirjutata; säilitatakse ainult SHA-256 räsid ja vastendatud faktide ID-d. Testiraamistik ei tee võrgu- ega tasulise mudeli päringuid, välja arvatud juhul, kui edastatakse `--execute-real` ning `--model`, `OMNIROUTE_BASE_URL` ja `OMNIROUTE_API_KEY` on seadistatud. Ilma sellise selgesõnalise reaalse käivituseta jääb selle masinloetavaks otsuseks `HOLD`; üksnes sünteetilise andmekoormuse ja päringute arvu mõõtmised ei ole kasutuselevõtu tõendusmaterjal.

Kutsujad võivad toetatud videoosale lisada valikulise massiivi `transcript.cues`, kui neil on juba olemas ajaliselt joondatud tekst. Iga viide peab sisaldama välja `text`, lõplikku `start`/`end` intervalli tuvastatud kestuse piires ja lubatud loendisse kuuluvat välja `source` (`client`, `embedded` või `audio-bridge`); välja `confidence` vaikeväärtus on `1` ja see peab jääma vahemikku `0` kuni `1`. Täpsed duplikaatviited ühendatakse. OmniRoute ei käivita nende metaandmete põhjal kunagi transkribeerimist: valideeritud viited kopeeritakse kirjeldatud tulemusse koos allika, usaldusväärsuse ja intervalliga ning esitatakse kaadrisubtiitrite kõrval ebausaldusväärsete vaatlustena. Vigane, lubatud vahemikust väljapoole jääv või päritoluteabeta tekst lükatakse tagasi, mitte ei segata subtiitrivoogu. Mõlemad päringu keha transkriptsioonikanalid normaliseerivad esitatud päritolu väärtuseks `client`, sealhulgas kasutaja enda määratud sildid `embedded` või `audio-bridge`. Ainult serveri hallatav adapter saab määrata need usaldatud sildid üksnes koodis kasutatava argumendi `trustedSource` kaudu; päringu JSON-i väli ei pääse selle argumendini. Transkriptsiooni tekst jääb selle päritolust olenemata ebausaldusväärseks meediast tuletatud sisuks ega tohi kunagi määrata autoriseerimist.

Kogenud kutsuja võib sama video jaoks esitada `audioTranscript`-raja;
seda käsitletakse kliendi esitatud tekstina, mitte serveripoolse transkriptsiooni tõendina.
Liitmiskiht töötleb visuaalseid ja helivaatlusi ühe
tähtaja ja katkestussignaali alusel, järjestab need ühisel ajajoonel, koondab
täpsed duplikaadid ning tagastab osalise tulemuse, kui õnnestub ainult üks haru.
Vigane `audioTranscript` annab tulemuseks osalise tulemuse — visuaalne
kirjeldus säilitatakse ja heliharu salvestab puhastatud tõrkekoodi —
selle asemel et kogu video töötlemine nurjuks. Iga haru saadavus, osalisuse lipp
ja puhastatud tõrkekoodid säilitatakse kirjeldatud tulemuses,
kaitsepiirete metaandmetes (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), tulemuse vahemälu metaandmetes ja silla
liitmisloendurites. Video Bridge'i vaiketee ei käivita kõne tekstiks teisendamist
ega laadi alla teist meediakoopiat; ilma selle sõnaselgelt esitatud rajata jääb see
ainult videot töötlevaks.

**Transkriptsiooni säilitamine (#12150 P1).** See rakendub automaatselt alati, kui
Video Bridge (mis ise on valikuline) renderdab transkriptsioonivihje — eraldi
säilituslippu pole. Kui päring renderdab mis tahes transkriptsioonivihje (kutsuja deklareeritud
`transcript` või liidetud `audioTranscript`), märgistab kaitsepiire selle väärtusega
`videoBridgeObserved` ja loob videokirjelduse redigeeritud varikoopia —
identse renderduse, milles iga vihje vabatekstiline sisu asendatakse väärtusega
`[redacted-video-transcript]`; see luuakse struktureeritud vihjevälja asendamisega
enne stringi koostamist (mitte kunagi lamendatud teksti sõelumisega, mistõttu ei saa säilida
mingi vihje sisu — ei vaenulik ega tavaline, sealhulgas märki `]` sisaldavad tekstid, nagu
`[inaudible]`/`[music]`). Püsivasse kutselogisse salvestatavas päringu kehas
asendatakse iga videost tuletatud tekstiosa selle redigeeritud varikoopiaga, sobitades
sisu võrdsuse alusel; ankur `fullText` loetakse uuesti valmis kutse-eelse kaitsepiirde
andmekogumist, nii et sobitamine õnnestub ka pärast seda, kui ahela hilisemad kaitsepiirded
(PII ja mandaatide maskeerijad prioriteetidega 10/95) on kirjelduse teksti kohapeal ümber kirjutanud,
ning pärast seda, kui süsteemiviiba/üleandmise/mälu sisestamine on sõnumimassiivi ümber kujundanud.
Mudelile ülesvoolu saadetav keha ei muutu. Vaadeldud päring ei täida ka
püsivat Memoryt (nii päringust kui ka vastusest tuletatud eraldamine jäetakse vahele),
mistõttu ei saa mudeli enda vastus transkriptsiooniteksti Memorysse kajastada.

**Video toorväljad (#12430).** Kui sild on lubatud ja video omatugi on teadmata või puudub, aktiveerivad määratud `transcript`/`audioTranscript`-väljad samuti `videoBridgeObserved`, isegi pärast kirjelduse nurjumist või `maxVideos`-piirangut. `null` ja tühjad stringid lähevad arvesse; puuduvad väljad ja videoga mitteseotud metaandmed mitte. Säilitatavates koopiates redigeeritakse need väljad või jäetakse päring välja ning vahemäludest/Memoryst minnakse mööda.

Neil varuteedel teisendatakse kutsuja kehtivad vihjed toetatud `text`/`input_text`-
osadeks, mitte ebastandardseteks teenusepakkuja väljadeks. Mõlemad päringus esitatud rajad
jäävad ebausaldusväärseteks `client`-vaatlusteks koos selgesõnalise hoiatusega, et videot
ei kirjeldatud ja ajatempleid ei kontrollitud meedia suhtes. Olemasolevad
256 vihje / 64 KiB kogumahu ja vihjepõhised piirangud kehtivad mõlemale rajale kokku;
ajatemplid peavad mahtuma vahendaja 600-sekundilise ülempiiri ja mis tahes esitatud fookusakna
sisse. Vigased rajad hüljatakse ega edastata suvalise tekstina; kehtivat
paarisrada võib siiski kasutada, kui nende ühine eelarve ei ole ületatud. Null-/tühjad
väljad ei lisa teksti. See varutee ei lisa meedia laadimist ega transkriptsiooni.
Transkriptsiooni laiendusväljad eemaldatakse varutee videokandjast ja selle
`video_url`/`source`-objektidest. OpenAI juhtmevormingu lubatud loend jääb rangeks; teadmata omatoega
videokandjad jäävad saadavale ja teadaolevad ainult teksti toetavad sihtkohad säilitavad ohutud markerid.
Struktureeritud redigeerimisvarjud kaitsevad lisatud transkriptsiooniteksti, samas kui
kutsujale kuuluv algne päring jääb muutmata. Omatoega sihtkohad ja
keelatud sillad säilitavad oma senise möödaviigukäitumise.

Täiendavad säilitatavad koopiad kasutavad sama vaadeldud päringu signaali. Töötlemata
kaitsepiirde-eelses kliendipäringu hetktõmmises, mälus olevas ootel päringus ja varajases
tagasilükatud päringu logis asendatakse videote osade transkriptsiooniväljad struktuurselt;
konveieri etappide ja konteksti üleandmise sünteesitud stringiviibad redigeeritakse
püsivasse päringukehasse salvestamise kohas. Püsiv `video_content_removed`-marker
paneb `previous_response_id`-jätkamise suletult nurjuma, selle asemel et rekonstrueerida
tahtlikult kõrvaldatud tekst. Kui vaadeldud päring kaotab enne logimist oma
osapõhise redigeerimisvarju või kui isegi üks mitmest videovarjust ei sobitu
pärast päringu hilisemaid muudatusi, jäetakse säilitatav päringukeha
täielikult välja, selle asemel et säilitada osaliselt redigeeritud transkriptsioon.

Vaadeldud päringu korral võib mudeli vastus tsiteerida transkriptsiooni mis tahes osa
ilma struktureeritud vihjepiirita. Seetõttu asendatakse selle püsiva kutselogi
`responseBody` väljajätmismarkeriga; üksikasjalikku konveieri artefakti (mis võib sisaldada
ülesvoolu-/kliendikehi ja voogedastuse tükke) ei säilitata. Semantilise, idempotentsuse
ja arutluse taasesituse vahemälu lugemistest ja kirjutamistest minnakse selle päringu puhul mööda.
Teenusepakkuja päring ja kliendile nähtav vastus jäävad muutmata. Varajased keepalive-baidid
eemaldatakse ajutisest puhvrist, kui üksikasjalik artefakt jäetakse välja. Kiro vigase EventStreami
hoiatus teatab ainult andmekogumi baitide arvu, mitte kunagi selle sisu ega JSON-i
parseri töötlemata viga.
See ei väida, et kõiki muid teenusepakkuja/pistikprogrammi diagnostikakirjeid oleks
auditeeritud; säilitatavate väljundkohtade laiem läbivaatus on jälgitav ülesandes #11658.

Sisemine `/api/modality-bridge/video/drilldown` elutsükkel on eraldiseisev,
tagasisideahela/tokeniga autenditud vahemälu alamsüsteem. Iga toiming nõuab ka
kanoonilist läbipaistmatut subjekti ID-d. Enne tootmiskeskkonna kutsuja lubamist
peab see tuletama nimetatud ID autenditud rentnikust ega tohi kunagi edastada
kliendi valitud väärtust. Vahemälu võtmed seovad selle subjekti kanooniliste seansi-
ja videoviite ID-dega, talletavad ainult nende SHA-256 põhjal tuletatud võtmed ning
piiravad nii lugemise kui ka kustutamise sama subjektiga. Vahemälu talletab ühe kirje
kohta kuni 16 tuletatud JPEG-kaadrit, aegub need kümne minuti pärast ning toetab
piiratud `start`/`end` lugemisi või seansi sõnaselget kustutamist.

Iga subjekt on piiratud 16 kirje ja 64 MiB kanooniliste JPEG-andmetega. Need
piirangud ei sõltu globaalsest 64 kirje / 256 MiB ülempiirist: subjekti kvoodisurve
tõrjub enne globaalse LRU väljatõrje kaalumist välja ainult selle subjekti kõige
kauem kasutamata olnud kirjed. Aegunud kirjed eemaldatakse vahemälu tegevuse käigus
nii subjekti kui ka globaalsest arvestusest, samas kui tühistamise või valideerimise
nurjumise korral osalist asendust ei kinnitata.

Vahemälu lükkab tagasi mittekanoonilise Base64, liigse täidise, muu kui JPEG-meedia,
vigased või kärbitud JPEG-failid ning JPEG-failid, mis annavad piiratud täieliku pildi
`sharp`-dekodeerimise ajal hoiatuse. See kodeerib iga aktsepteeritud pildi uuesti
kanooniliseks JPEG-iks, tuletab laiuse ja kõrguse dekodeeritud baitidest, selle asemel
et usaldada kutsuja välju, ning hülgab kõik lõpus olevad polüglottbaidid, selle asemel
et neid säilitada. Mõlema kvoodi alla arvestatakse ainult piiratud kanooniline tihendatud
puhver. JSON-i andmeedastuspiirang hõlmab Base64 lisamahtu 32 MiB dekodeeritud sisendi
ülempiiri jaoks. Iga
talletatud tuletis registreerib valideeritud JPEG-vormingu/-eraldusvõime, diskreetimispoliitika,
tuletusversiooni, loomisaja, serveri arvutatud sisuräsi ning räsitud ülemviite koos
usaldatud kutsuja ülemobjekti sisuräsiga. Tühistamist kontrollitakse asünkroonsete
dekodeerimis-/räsifaaside vahel enne vahemälu atomaarset kinnitamist.

See tööetapp ei ühenda veel tootmiskeskkonna tootjat marsruudiga ega paku
mitme eraldusvõimega variantide valimist. Video Bridge'i läbipaistev päringutee
ei tekita seetõttu lisatööd, samas kui rentnikuga seotud subjekti tuletamine ja
täielik FU-08 mitme eraldusvõimega elutsükkel jäävad sõnaselgelt järeltöödeks,
mitte ei ole dokumenteeritud lõpetatud käitumisena.

Kaadritele luuakse järjestikku pealdised konfigureeritud Video mudeliga. Tühi
Video alistus pärib Visioni seadistuse; kui mõlemad on tühjad, valib Visioni
automaatmarsruuter sobiva nägemisvõimega mudeli. Õnnestunud pealdised asendavad
algse osa stabiilse `[Video description:` prefiksiga, mis tähistab teksti ka
ebausaldusväärse, meediast tuletatud vaatlusena ning käsib allavoolu mudelitel
meedias leiduvaid juhiseid mitte järgida. Kaadripealdiste vahemälu võtmed
hõlmavad JPEG-baite, viipa, ajatemplit ja tegelikult kasutatavat mudelit; vahemällu
salvestatakse ainult õnnestunud pealdised. Vahemälukirjed säilitavad tegeliku
õnnestunud tootjamudeli, sealhulgas varumudeli; kui eri kaadrid on loonud eri
mudelid, teatab sild `mixed`. Vahemälutabamus kasutab seda tootjaidentiteeti
uuesti, selle asemel et nimetada see ümber taotletud marsruutimisplaaniks. Kogu
video tulemuse vahemälu võti põhineb igal väljundit muutval sisendil — viibal,
tegelikult kasutataval mudelil, diskreetimispoliitikal, kaadrite arvul, semantilise
analüüsi režiimil, normaliseeritud fookusvihje SHA-256 sõrmejäljel, fookusaknal,
`transcript`-il, `audioTranscript`-il ja kontaktlehe lipul — seega põhjustab mis
tahes nimetatud mõõtme muutmine vahemälumöödalasu, mitte aegunud tulemuse
taaskasutamist. Visuaalse deduplitseerimise poliitika versioon, lävi ja piiratud
kandidaatkaadrite arv on samuti tulemuse vahemälu võtmes ja metaandmetes sõnaselgelt
kirjas; poliitikamuutus ei saa seetõttu aegunud kogu video kirjeldust uuesti kasutada.
Tulemuse vahemälu v4 metaandmed säilitavad režiimi ja sõrmejälje, kuid mitte kunagi
kasutaja töötlemata ülesannet. Kaitsepiirete metaandmed esitavad nii taotletud kui
ka tegeliku analüüsirežiimi; taotletud `focused` režiim ilma kasutatava kasutajatekstita
esitatakse tegelikult `full` režiimina.

Kaitsepiire eraldab iga toetatud videoosa, kuid kirjeldab neist kõige rohkem
`modalityBridgeVideoMaxVideos` jagu. Kui sihtobjekti puhul on tõendatud
`supportsVideo === false`, muudetakse nurjunud ja piirmäära ületavad videod
sõnaselgeteks ohututeks tekstimarkeriteks, et töötlemata videot ei säiliks. Kui
võimekus pole teada, säilitavad need osad oma videokandja; varuvariandina kasutatav
transkriptsioon järgib ülaltoodud piiratud tekstiks teisendamist. Sihtobjektid,
mille puhul `supportsVideo === true`, mööduvad sillast. Kliendipäringu katkestussignaal
levib allalaadimise, vahendaja järjekorra, alamprotsesside ja pealdisekutsete kaudu;
katkestused peatavad töö videote vahel ega jäta töötlemata meediat kunagi vaikimisi
läbi.

Käitusaegsed seadistused on andmebaasipõhised ja Zod-valideeritud:

| Võti                                | Vaikeväärtus | Vahemik / käitumine                                                                                            |
| ----------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`      | Valikuline käituskeskkond, nõuab lubamist                                                                      |
| `modalityBridgeVideoAnalysisMode`   | `"full"`     | `full` säilitab üldised kirjeldused; `focused` kasutab piiratud ja ebausaldusväärset uusimat kasutajakonteksti |
| `modalityBridgeVideoModel`          | `""`         | Pärib Vision Bridge'i mudeli                                                                                   |
| `modalityBridgeVideoFrameCount`     | `8`          | 1–16                                                                                                           |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`  | `uniform`, `scene_aware` või proportsionaalne `segment_aware`; detektori tõrke korral kasutatakse `uniform`    |
| `modalityBridgeVideoMaxVideos`      | `1`          | 1–4                                                                                                            |
| `modalityBridgeVideoTimeout`        | `120000`     | 1000–120000 ms                                                                                                 |

Püsivalt salvestatud pärandväärtused Video ajalõpu jaoks, mis ületavad 120 sekundit, piiratakse
vahendaja tähtajaga; uute seadete kirjutamine sellest piirist suurema väärtusega lükatakse tagasi.
`GET /api/modality-bridge/video/runtime` nõuab enne autentimist või käituskeskkonna kontrollimist
usaldusväärset, templiga kinnitatud loopback-lokaalsust ning seejärel haldusautentimist.
See tagastab ainult väärtuse `available`, puhastatud FFmpeg/ffprobe versioonid ja fikseeritud
põhjuse, kui käituskeskkond pole saadaval. Sisemine ekstraheerimise lõpp-punkt ei ole
avalik üleslaadimis-API: järjekorra täitumisel tagastatakse `503` koos päisega `Retry-After`, helistaja
ühenduse katkemisel tagastatakse `499` ja vahendaja fikseeritud tähtaja ületamisel `504`. Teisendatud vastused lisavad
kesksesse `x-omniroute-modality-bridge` päisesse
`video->text;model=<visionModel>;parts=<videos>`, eemaldamata Visioni või Audio segmente.

### PII maskija (`piiMasker.ts`)

Töötab **mõlemas** etapis.

- **`preCall`** kloonib kasuliku koormuse, läbib väljad `system`, `messages`, `input` ja
  `prompt` (sealhulgas lihtteksti elemendid) ning rakendab stringiväljadele `content`/`text`
  funktsiooni `processPII()` (asukohast `@/shared/utils/inputSanitizer`). Kui
  `PII_REDACTION_ENABLED=true`, redigeeritakse tuvastatud isikuandmed väljaminevas
  kasulikus koormuses. See ei sõltu muutujast `INPUT_SANITIZER_MODE` (mis juhib ainult
  viibasüstete poliitikat). Kui redigeerimine on välja lülitatud, salvestab kutse tuvastamiste
  arvu sisu ümber kirjutamata.
- **`postCall`** sügavkloonib vastuse, käivitab `sanitizePIIResponse()` ja
  Responses-API-kuju maskija (`maskResponsesOutput` — hõlmab välju
  `output_text` ja `output[].content[].text`). Kui toimub mõni redigeerimine,
  asendab muudetud vastus algse.

Kaitsepiire ei blokeeri kunagi; see ainult lisab märkusi (`meta.detections`,
`meta.redacted`) või kirjutab sisu ümber.

### Viibasüste (`promptInjection.ts`)

Tuvastab kasutaja esitatud sisus pahatahtlikud struktuurid ja jõustab
konfigureeritud poliitika. Käitumist juhivad keskkonnamuutujad ja konstruktori
suvandid:

| Seadistus       | Keskkonnamuutuja                                                                                      | Vaikeväärtus | Mõju                                                                                                                                                                                                    |
| --------------- | ----------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Lubatud         | `INPUT_SANITIZER_ENABLED`                                                                             | `true`       | Kui väärtus on `false`, lõpetab kaitsepiire töö kohe.                                                                                                                                                   |
| Režiim          | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`       | Süstimise poliitika: `block`, `warn` või `log`. (`redact` on tagasiühilduvuse jaoks lubatud, kuid see **ei** eemalda süsteteksti; päringu isikuandmete ümberkirjutamist juhib `PII_REDACTION_ENABLED`.) |
| Blokeerimislävi | Suvand `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`       | Blokeerimiseks nõutav minimaalne raskusaste. Vaikimisi on keskmine raskusaste ainult jälgitav.                                                                                                          |

**Režiimi prioriteet** (`getMode`): kutsuja `options.mode` →
`INJECTION_GUARD_MODE` **andmebaasi funktsioonilipu alistus** (Dashboard → Settings →
Feature Flags) → keskkonnamuutuja `INJECTION_GUARD_MODE` → keskkonnamuutuja `INPUT_SANITIZER_MODE` →
`warn`. Juhtpaneeli alistus on seega keskkonnamuutujatest kõrgema prioriteediga, mistõttu juhib
Feature Flagsi kasutajaliides töötavat kaitset reaalajas (taaskäivitamist pole vaja). Andmebaasist lugemine on tõrkekindel:
tõrke korral naaseb kaitse keskkonnamuutujatel põhineva käitumise juurde ning kui
alistust pole määratud, on käitumine identne ainult keskkonnamuutujatel põhineva lahendusega.

Tuvastusallikad:

1. `sanitizeRequest()` asukohast `@/shared/utils/inputSanitizer` (mujal
   töötluskonveieris kasutatav jagatud detektorikomplekt).
2. Sisseehitatud `DEFAULT_GUARD_PATTERNS` (praegu `system_override_inline` ja
   `markdown_system_block`, mõlemad raskusastmega `high`).
3. Konstruktori suvandite kaudu edastatud valikulised `customPatterns` (stringid, regulaaravaldised
   või kirjed `{ name, pattern, severity }`).

Kui `mode === "block"` **ja** vähemalt üks tuvastus vastab raskusastme
lävendile, tagastab `preCall` väärtuse `{ block: true, message: "Request rejected:
suspicious content detected" }`. Režiimides `warn`/`log` logib kaitsepiire sündmuse,
kuid lubab kutse. Jagatud abifunktsioon `evaluatePromptInjection()` eksporditakse
samuti kutsujatele, kes peavad viipasid hindama ilma registrit läbimata.

**Skannimispiir (v3.8.20):** tuvastaja kontrollib ühendatud viibatekstist ainult
**esimest 16 KB** — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 baiti) failis
`src/shared/utils/inputSanitizer.ts`. Nii `detectInjection()` kui ka
`evaluatePromptInjection()` kasutavad enne mustrite tsükli käivitamist
`slice(0, MAX_INJECTION_SCAN_BYTES)`. Süstimisjuhised asuvad sisendi alguse lähedal,
seega piirab see regulaaravaldiste CPU-/GC-kasutust mitmesaja kilobaidi suuruste
andmekoormuste korral ilma tuvastamist nõrgendamata (vt #3932, #4041).

### Mandaatide maskeerija (`credentialMasker.ts`)

Käitatakse **mõlemas** etapis, vaikimisi ahelas viimasena (prioriteet `95`).
See peidab tuntud API-võtmete / salajaste lubade mustrid väljaminevas
andmekoormuses (sõnumi sisu, tööriistakutsete argumendid, tööriistade tulemused)
**ja** teenusepakkuja vastuses, et viibale lisatud mandaati (või tööriista
tulemuses tagasi kajastatud mandaati) ei lekitataks ülesvoolu teenusepakkujale
ega tagasi kliendile.

- **Ainult lubamisel**, järgides sama tava nagu isikuandmete peitmisel (range
  reegli nr 20 lähedane): keelatud, välja arvatud juhul, kui
  `settings.credentialRedactionEnabled === true` **või**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kui see on välja lülitatud, ei tee
  kaitsepiire midagi — see ei blokeeri ega kirjuta kunagi midagi ümber.
- `redactCredentials()` läbib kogu andmekoormuse/vastuse puu (`walkValue()`,
  kaitstud prototüübireostuse eest, tsüklite suhtes turvaline tänu `WeakSet`-ile)
  ja asendab vasted kohatäitega `[REDACTED:<type>]`, kloonides ainult tegelikult
  muutunud harud.
- `CREDENTIAL_PATTERNS` hõlmab LLM-teenusepakkujate võtmeid (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS-/SaaS-lube (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), maksevõtmeid (Stripe, Square),
  pilveteenuste võtmeid (AWS-i juurdepääsuvõti, Twilio, SendGrid, Mailgun),
  privaatvõtmeid / JWT-sid, mandaate sisaldavaid ühendusstringe
  (`mongodb://user:pass@...` jne) ja üldist
  `Authorization`/`x-api-key`/`api-key`/`apikey` päiseväärtuse mustrit.
  Päisekujuliste võtmete (`authorization`, `x-api-key`, `api-key`, `apikey`)
  väärtused peidetakse struktuurselt (ainult väärtus; skeemi eesliide, nagu
  `Bearer `/`Basic `, säilitatakse), mitte üldise tekstipõhise regulaaravaldisega.
- Kaitsepiire ei blokeeri kunagi; see ainult kirjutab ümber (`modifiedPayload` /
  `modifiedResponse`) ja lisab annotatsioonid (`meta.credentialsRedacted`,
  `meta.count`).

Regressioonikaitse: `tests/unit/credential-masker-guardrail.test.ts`.

## Baasleping (`base.ts`)

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
  block?: boolean; // true katkestab ahela kohe
  message?: string; // kuvatakse blokeerimisel
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // tagastatakse preCall poolt päringu ümberkirjutamiseks
  modifiedResponse?: TValue; // tagastatakse postCall poolt vastuse ümberkirjutamiseks
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

Kaitsepiire annab „muudatus puudub” märku, tagastades kas `void`, `{}` või
`{ block: false }`. Väärtuse `modifiedPayload`/`modifiedResponse` tagastamine asendab
ahelas allavoolu kaitsepiiretele edastatava väärtuse.
`signal?: AbortSignal` edastab kutsuja elutsükli kaitsepiiretesse. Päringu katkestamine on tahtlik tõrke korral jätkamise erand: meediasillad peatavad töö ja puhastavad ressursid, taastamata töötlemata meediat sihtkohale, mis teadaolevalt seda ei toeta.

## Register (`registry.ts`)

Üksikeksemplar `guardrailRegistry` võimaldab järgmist:

- `register(guardrail)` — lisab kaitsepiirde (või asendab selle normaliseeritud nime alusel) ja
  sordib uuesti kasvava `priority` järgi.
- `clear()` / `list()` — haldusabimeetodid.
- `runPreCallHooks(payload, context)` — läbib aktiivsed kaitsepiirded, edastab
  lasti läbi `modifiedPayload` ja peatub esimese `block: true` korral.
- `runPostCallHooks(response, context)` — sama voog vastuse poolel.
- `resetGuardrailsForTests({ registerDefaults })` — tühjendab oleku ja soovi korral
  registreerib vaikeseaded uuesti, et tagada testide puhas isoleeritus.

Mõlemad käitajad tagastavad `{ blocked, payload|response, results, guardrail?, message? }`,
kus `results` on kirjete `GuardrailExecutionResult` massiiv, mis sisaldab
iga kaitsepiirde välju `blocked`, `skipped`, `modified`, `error` ja `meta`,
mis on kasulikud jälitamiseks.

### Kaitsepiirete keelamine päringupõhiselt

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` koondab
duplikaatideta loendi kaitsepiirete nimedest, mis tuleb praeguse
päringu puhul vahele jätta. Allikad (kõik valikulised, kõik ühendatakse):

- `apiKeyInfo.disabledGuardrails`
- Päringu keha `disabledGuardrails` (tipptasemel)
- Päringu keha `metadata.disabledGuardrails`
- Päis `x-omniroute-disabled-guardrails` (või pärandvormingus
  `x-disabled-guardrails`)

Väärtused võivad olla stringide massiivid või komadega eraldatud string; nimed
normaliseeritakse väiketähtedega kebab-kirjapilti (`pii_masker` → `pii-masker`). Tulemus
edastatakse registrile `context.disabledGuardrails` kaudu, mis jätab
sobivad kaitsepiirded vahele (`skipped: true` väljal `results`).

## Käivitusjärjekord

Iga päringu puhul, mis liigub läbi `src/sse/handlers/chat.ts` ja
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` koostab API võtme, päringu keha ja päiste
   põhjal vahelejäetavate kaitsepiirete loendi.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` käivitab kaitsepiirded prioriteedi
   kasvavas järjekorras:
   - Keelatud kaitsepiirded märgitakse olekuga `skipped`.
   - Iga kaitsepiirde `preCall` võib `modifiedPayload` kaudu andmekoormuse ümber kirjutada.
   - Esimene `block: true` katkestab ahela ja töötleja tagastab
     kaitsepiirde tagasilükkamisvastuse.
3. (Võimalikult ümber kirjutatud) andmekoormus liigub kombineeritud marsruutimise ja
   ülesvoolu saatmise etappi.
4. Pärast vastuse koostamist käivitab `guardrailRegistry.runPostCallHooks(...)`
   vastuse jaoks sama ahela. Siinne `block: true` kõrvaldab ülesvoolu
   vastuse.

Erindi visanud kaitsepiirded registreeritakse kujul `error: <message>` ja logitakse
`logger.warn` kaudu, kuid ahela täitmine jätkub — see on kavandatud tõrke korral lubama.

## Konfiguratsioon

Sisseehitatud kaitsepiirete loetavad keskkonnamuutujad:

| Muutuja                               | Kasutaja                 | Mõju                                                                                                    |
| ------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`       | Tuvastamise täielikuks keelamiseks määrake väärtuseks `false`.                                          |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`       | Süstimise poliitika: `warn`, `block` või `log`. Pärandväärtus `redact` ei kirjuta süstimisteksti ümber. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`       | Süstimiskaitse režiim; ühtlasi DB funktsioonilipp, mis **alistab** keskkonnamuutujad (DB > ENV).        |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`       | Minimaalne raskusaste, mille `MODE=block` tagasi lükkab: `high` (vaikimisi), `medium` või `low`.        |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`       | Muutuja `INPUT_SANITIZER_BLOCK_THRESHOLD` pärandalias.                                                  |
| `PII_REDACTION_ENABLED`               | `pii-masker`             | Kui väärtus on `true`, redigeeritakse päringu isikuandmed (süstimisrežiimist sõltumatult).              |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (allavoolu) | Juhib vastusepoolse maskeri käitumist.                                                                  |

Modality Bridge'i kaitsepiirded loevad käitusaegset konfiguratsiooni DB-põhisest
sätete hoidlast (`getSettings()`), mitte keskkonnamuutujatest. Visioni peamised võtmed on
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` ja
`modalityBridgeCacheMaxEntries`. Pärandvõtmeid
`visionBridge*` aktsepteeritakse ainult dokumenteeritud ühe tsükli pikkuse lugemise
varuvariandina; juhtpaneel kirjutab peamistesse võtmetesse. Vaikeväärtused ja varuvariandi
lahendaja asuvad failis `src/shared/constants/modalityBridgeDefaults.ts`, pärand-
konstandid on säilitatud failis `src/shared/constants/visionBridgeDefaults.ts`.

Audio kasutab võtmeid `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` ja `modalityBridgeAudioMaxClips` ning lisaks jagatud
`modalityBridgeCache*` sätteid. Audiol puudub pärandvõtmete varuvariant, sest need
võtmed võeti kasutusele koos Modality Bridge'i skeemiga.

Video kasutab võtmeid `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` ja
`modalityBridgeVideoTimeout` ning lisaks jagatud `modalityBridgeCache*` sätteid.
See on vaikimisi keelatud, sest FFmpeg/ffprobe on valikulised käituskeskkonna
sõltuvused ning kaadrite kirjeldamine lisab viivitust ja mudeli kasutamise kulu.

## Kohandatud kaitsepiirded

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

Sammud:

1. Looge `src/lib/guardrails/myGuardrail.ts`, mis laiendab klassi `BaseGuardrail`.
2. Rakendage `preCall` ja/või `postCall`.
3. Registreerige kas importimise ajal (lisage funktsioonist `registerDefaultGuardrails`) või
   kutsuge käitusajal välja `guardrailRegistry.register(...)` — register asendab
   kõik varasemad sama normaliseeritud nimega kaitsepiirded.
4. Lisage testid kataloogi `tests/unit/` (olemasolevad näited:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testimine

Kasutage testide vahel funktsiooni `resetGuardrailsForTests()`, et alustada teadaolevast olekust.
Tühja registriga alustamiseks edastage `{ registerDefaults: false }` ja
registreerige ainult testitavad kaitsepiirded. Vision Bridge toetab sõltuvuste
sisestamist (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge pakub
samaväärseid liideseid seadete, võimekuste, STT-mudeli valimise, mandaatide
kontrollimise ja transkribeerimise jaoks. Seega saavad testid kontrollida mõlemat
voogu ilma andmebaasi- või võrgujuurdepääsuta.

## Vaadake ka

- `src/lib/guardrails/` — teostus
- `src/shared/utils/inputSanitizer.ts` — ühine tuvastaja, millel põhinevad
  promptisüsti tuvastamine ja isikuandmete maskeerimine
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge'i vaikeväärtused ja
  sunnitud sillaga mudelite loend
- `src/shared/constants/modalityBridgeDefaults.ts` — Visioni/Audio ühised käitusaja vaikeväärtused
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonaalne kiht (kaitselüliti, ooteajad)
- `docs/reference/ENVIRONMENT.md` — keskkonnamuutujate täielik teatmik

## Süstikaitse marsruutide katvus ja red-team-testimine (8. etapp · plokk D)

Süstikaitse (`createInjectionGuard` / `withInjectionGuard`) hõlmab kõiki marsruute,
mis võtavad vastu kasutaja prompte. See järgib muutujat `INJECTION_GUARD_MODE` (vaikimisi `warn` = ainult logimine;
`block` = tagastab HTTP 400 `SECURITY_001`).

| Tüüp               | Marsruudid                                                                                                                                           | Vaikerežiim |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Tekst (olemasolev) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn        |
| Genereeriv         | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn        |
| Andmed             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn        |

Teksti eraldamine (`extractMessageContents`) hõlmab välju `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team-testimine (igal ööl, `nightly-llm-security.yml`):** promptfoo kontrollib, et iga marsruut blokeeriks
OWASP-LLM-i korpuse režiimis `INJECTION_GUARD_MODE=block`; garak käitab sonde (jäetakse saladuse puudumisel vahele).
`moderations` on järjepidevuse huvides kaasatud — plokirežiimi operaatorid saavad selle funktsiooni
`resolveDisabledGuardrails` kaudu erandiks määrata.

Igaöisel töövoolel (`.github/workflows/nightly-llm-security.yml`, cron + käsitsi
käivitamine) on kaks tööd:

- **`promptfoo-guard` (blokeeriv)** — käitab käsku `promptfoo eval -c promptfooconfig.yaml`
  režiimiga `INJECTION_GUARD_MODE=block`. Iga ründejuhtum (nt „ignoreeri kõiki
  varasemaid juhiseid…“, DAN-stiilis turvapiirangutest möödahiilimised) kontrollib, et vastus sisaldaks
  `error.code === "SECURITY_001"`, st et kaitse lükkas päringu tegelikult tagasi.
- **`garak` (nõuandev)** — käitab garakit võtmega `--probes promptinject,dan,leakreplay`
  kohaliku OmniRoute'i eksemplari (`http://localhost:20128/v1`) suhtes. Käivitamine sõltub
  teenusepakkuja saladusest (`PROMPTFOO_PROVIDER_KEY`); selle puudumisel jäetakse töö korrektselt vahele ja sellele on lisatud
  `|| true`, mistõttu esitatakse aruanne ilma CI-d nurjamata.

Kaitse abifunktsiooni (`createInjectionGuard` / `withInjectionGuard`)
katvus hõlmab kõiki prompte kandvaid `/v1` marsruute; prompti tekst võetakse väljadest
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` funktsiooniga
`extractMessageContents()` failis `src/shared/utils/inputSanitizer.ts`.
