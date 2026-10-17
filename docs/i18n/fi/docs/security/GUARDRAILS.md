# Guardrails (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Totuuden lähde:** `src/lib/guardrails/`
> **Päivitetty viimeksi:** 2026-08-29 — v3.8.51 (Video Bridgen transkription alkuperän ilmoittaa kutsuja,
> eikä palvelin vielä varmista sitä — selvennetty kohdan #11661 mukaisesti)

Suojaukset toteuttavat turvallisuus-, käytäntö- ja sisältömuunnokset OmniRouten
ja ylävirran palveluntarjoajien välisellä rajalla. Kukin suojaus voi tarkastaa
(ja valinnaisesti hylätä, muuntaa tai annotoida) pyyntöjen hyötykuormia
(`preCall`) ja ylävirran vastauksia (`postCall`).

Järjestelmä on **häiriötilanteessa salliva**: jos suojaus aiheuttaa poikkeuksen
suorituksen aikana, rekisteri kirjaa virheen ja jatkaa seuraavaan suojaukseen
sen sijaan, että pyyntö epäonnistuisi. Estäminen on aina nimenomainen päätös
(`block: true`), ei koskaan vahinko.

## Sisäänrakennetut suojaukset

Rekisteri lataa tuonnin yhteydessä automaattisesti kuusi suojausta prioriteettijärjestyksessä
(katso `registry.ts` → `registerDefaultGuardrails()`):

| Prioriteetti | Nimi                | Vaihe(et)      | Tiedosto              |
| ------------ | ------------------- | -------------- | --------------------- |
| `5`          | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`          | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`          | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`         | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`         | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`         | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Pienemmät prioriteettiluvut suoritetaan **ensin**.

### Näkökykysilta (`visionBridge.ts`) — Modaliteettisilta PR-1

Sieppaa kuvia sisältävät pyynnöt, jotka on osoitettu **malleille, joilla ei ole näkökykyä**, ja joko
uudelleenreitittää koko pyynnön näkökykyä tukevalle mallille tai korvaa kuvaosat
teksti­kuvauksilla, jotka määritettävä näkökykymalli tuottaa ennen
ylävirran kutsua. Näin vain tekstiä tukevat palveluntarjoajat voivat käsitellä
multimodaalisia hyötykuormia läpinäkyvästi.

Kulku:

1. Ohita, jos kohdemalli tukee jo näkökykyä (ellei se esiinny
   pakkosillattavien mallien luettelossa `isVisionBridgeForcedModel`).
2. Poimi kuvaosat funktiolla `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), joka delegoi tehtävän **yhtenäiselle median
   tunnistimelle** `detectMediaParts()` tiedostossa `open-sse/utils/mediaParts.ts` — se on
   ainoa totuuden lähde, jota käytetään myös yhdistelmäyhteensopivuussuodattimessa.
   Poiminta perustuu sallittujen luetteloon, joka sisältää sellaiset ylätason osien muodot,
   jotka `replaceImageParts` voi sijoittaa takaisin (poiminta↔korvaus-sopimus): OpenAI
   `image_url`, Anthropiciin base64-muotoinen `source.type:"base64"`, Anthropiciin URL
   `source.type:"url"` ja Responses API:n `input_image`. Sisäkkäiset osumat ja
   vain indikaattorin sisältävät muodot kuuluvat yhdistelmäsuodattimelle, eikä niitä koskaan poimita.
   Ohita, jos mitään ei löydy.
3. Selvitä ajonaikainen määritys funktiolla `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): uudet `modalityBridge*`-
   asetusavaimet ovat ensisijaisia; vanhat `visionBridge*`-avaimet säilyvät
   **yhden syklin varavaihtoehtona** (palautusikkuna). Ohita ennen median läpikäyntiä,
   kun silta on poistettu käytöstä.
4. Tilanvalitsin (`modalityBridgeVisionMode`, katso alla oleva taulukko) päättää
   uudelleenreitityksen ja kuvailun välillä. Uudelleenreititys palauttaa `modifiedPayload`-arvon,
   jossa vain `model` on vaihdettu, sekä metatiedot `{ rerouted, fromModel, toModel, imagesKept }`.
5. Kuvailupolku: rajaa kuvien määrä arvoon `maxImages`, muodosta tehtävän huomioiva kehote,
   tarkista kuvailuvälimuisti, kutsu näkökykymallia **rinnakkain**
   (`Promise.allSettled`) ja lisää kuvien tilalle tekstiosat
   `[Kuva N]: <kuvaus>`. Epäonnistunut kuvailu tuottaa arvon `null`, ja alkuperäinen kuvaosa
   **säilytetään** (#4012) — paitsi yhdistelmän kuvailupolulla, kun kaikki
   kuvailut epäonnistuivat. Tällöin vahvistetusti näkökyvytön ylävirta saa sen sijaan
   paikkamerkin `(ei saatavilla — yhtään näkökykyä tukevaa palveluntarjoajaa ei ole yhdistetty)` (#8430).
6. Palauta `modifiedPayload` ja metatiedot (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Tilanvalitsin (`modalityBridgeVisionMode`)

| Tila       | Oletus | Toiminta                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔      | Vanha heuristiikka muuttamattomana (#6640/#7204): muut kuin yhdistelmä- ja `auto/`-mallit uudelleenreititetään parhaalle näkökykymallille, ellei alkuperäisellä mallilla jo ole käyttökelpoisia tunnistetietoja (jolloin käytetään kuvailua); yhdistelmäkohteet kuvaillaan aina.                                                               |
| `describe` |        | Kuvaile aina — uudelleenreitityslohko ohitetaan kokonaan; käyttäjän valitsema malli vastaa aina.                                                                                                                                                                                                                                               |
| `reroute`  |        | Pakota uudelleenreititys: tunnistetiedot sisältävän mallin säilyttävä tarkistus ohitetaan. Uudelleenreitityksen **kohteen** tunnistetietojen tarkistus on silti voimassa — kun käyttökelpoista näkökykykohdetta ei ole, pyyntö siirtyy kuvailuun, jotta raakakuvat eivät koskaan päädy vain tekstiä käsittelevään taustajärjestelmään (#8430). |

Pakotetut tilat oikaisevat **ennen** automaattisen heuristiikan suorittamista; `auto`-toiminta
on tavutasolla identtinen PR-1:tä edeltävän suojauksen kanssa.

#### API-avaimen käyttöalue (`visionBridgeKeyScope.ts`)

Kun kutsujan API-avain rajoittaa `allowedConnections`-yhteyksiä, kiintiöpooleja
(`allowedQuotas`) tai malleja (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), silta valitsee
uudelleenreititys- ja kuvailumalleiksi vain malleja, joita avain saa käyttää, ja vain yhteyksistä,
joita avain saa käyttää. Kuvailukutsu kulkee tämän jälkeen aina OmniRouten itseensä palaavan silmukan
kautta käyttäen `x-omniroute-self-loop-key-id`-otsaketta, jolloin vastaanottava keskustelupyyntö
valvoo avaimen yhteys- ja mallikäytäntöä uudelleen. `enforceApiKeyPolicy()`
hyväksyy kyseisen otsakkeen vain yhdessä itseensä palaavan silmukan bearer-tunnisteen kanssa,
joten se voi ainoastaan kaventaa käyttöoikeuksia, ja tunniste, jota ei voida selvittää, hylätään.

Jos avain ei salli yhtään näkökykymallia, kuvailupolku väistyy ja
pyyntö välitetään muuttumattomana. Tämä vastaa käytöstä poistetun
suojauksen fail-open-toimintaa (metatiedot `{ skipped: true, reason: "no_permitted_vision_model" }`).
Pyynnöt ilman avainta sekä avaimet ilman näitä rajoituksia toimivat täsmälleen kuten
aiemmin.

#### Tehtävän huomioiva kuvailukehote (`modalityBridgeVisionTaskAware`)

Oletus on **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) lisää peruskuvauskehotteeseen **viimeisimmän käyttäjäviestin** tekstin (katkaistuna 500 merkkiin), mikä ohjaa kuvausta käyttäjän todellisen pyynnön suuntaan (codex-vision-proxy-malli) ja pyytää näkömallia litteroimaan näkyvän tekstin. Kun asetus on pois käytöstä — tai käyttäjän tekstiä ei ole — peruskehotetta käytetään muuttamattomana.

Kuvauksen itsesilmukan oma OpenAI-yhteensopiva pyyntö (`callVisionModelSingle()` tiedostossa `visionBridgeHelpers.ts`) pyytää aina asetusta `image_url.detail: "high"` — ehdottomasti jokaiselle kutsujalle ja palveluntarjoajalle ilman riippuvuutta mistään asiakassignaalista. Pienen tarkkuuden näytteistys heikentää OCR-tarkkuutta juuri siinä tekstin litterointitehtävässä, jota tämä kehote pyytää, joten itse kuvauskutsu pyytää aina suurta tarkkuutta riippumatta siitä, mitä tarkkuustasoa alkuperäinen saapuva pyyntö käytti. Tämä vaikuttaa vain sisäisen kuvauspyynnön runkoon; se ei muuta sitä, miten OmniRoute välittää kutsujan oman `image_url.detail`-arvon ensisijaisessa pyynnössä — kyseinen oletus asetetaan erikseen ja vain tunnistetuille OpenCode-asiakkaille funktiossa `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Kuvauksen itsesilmukan Anthropic-siirtomuotohaarassa ei ole `detail`-kenttää, eivätkä kumpikaan oletuksista vaikuta siihen.

#### Kuvaustuloksen enimmäispituus (`modalityBridgeVisionMaxChars`)

| Avain                          | Oletus | Alue              |
| ------------------------------ | ------ | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`    | `0` tai 100–50000 |

`0` (oletus) tarkoittaa, että **enimmäispituutta ei ole** — funktion `callVisionModel()` palauttama kuvaus välitetään muuttamattomana, mikä säilyttää nykyisen toiminnan. Mikä tahansa arvo välillä 100–50000 katkaisee kuvauksen ja lisää loppuun `…`-merkin, ennen kuin se liitetään takaisin muodossa `[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` tiedostossa `src/lib/guardrails/visionBridge.ts`). Suurenna arvoa yksityiskohtaisissa OCR-tehtävissä, joissa jatkomalli tarvitsee koko litteroinnin; pienennä sitä rajoittaaksesi tokenien käyttöä monisanaisilla näkömalleilla. Hallintapaneelin kenttä sijaitsee Vision-välilehden Advanced-paneelissa (`modality-bridge-max-chars` tiedostossa `ModalityBridgeVisionTab.tsx`) ja nostaa kaikki arvot väliltä 1–99 vähimmäisarvoon 100 jättäen eksplisiittisen `0`-arvon ennalleen — `0` on itsessään kelvollinen Zod-arvo (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ei pelkästään ”asettamattoman” arvon oletus.

#### Kuvausvälimuisti (`modalityBridge/bridgeCache.ts`)

Muistissa oleva LRU- ja TTL-välimuisti kuvaustuloksille, jaettu koko prosessin laajuisesti. Avain = `sha256(imageRef + composedPrompt + configuredBridgeModel)`, jossa käytetään pituusetuliitteistä kehystystä (ei kenttärajojen törmäyksiä). Mallikomponentti on **määritetty** siltamalli, ei vastauksen tosiasiassa antanut malli — `callVisionModel` voi käyttää sisäistä varamallia, ja yrityskohtainen avain hajauttaisi välimuistin. Epäonnistuneita kuvauksia ei koskaan tallenneta välimuistiin. Asetukset:

| Avain                           | Oletus | Alue    |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### Etäkuvien normalisointi (itsesilmukan kuvaus/base64-nouto)

Kun silta noutaa **etäkuvan** itse — Anthropicin kuvauksen itsekutsua ja claude-siirtomuodon base64-muunnosta (`ensureBase64ImagesForClaudeWire`) varten, molemmat funktion `fetchRemoteImageAsDataUri()` kautta tiedostossa `visionBridgeHelpers.ts` — tuloksena saatu data-URI käsitellään funktiolla `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) ennen sen upottamista näkömallin pyyntöön. Liian suuret kuvat pienennetään siten, että **pitkä sivu on 2048px** (vastaten koon ylärajaa, jota OpenAI/Anthropic jo käyttää palvelinpuolella), mikä vähentää lähetettävien tavujen määrää ja viivettä muuttamatta näkömallin näkemää sisältöä. Koon muuttamiseen käytetään `sharp`-pakettia, joka ladataan dynaamisella tuonnilla: alustalla, jolla sen natiivibinaarin lataaminen epäonnistuu, `normalizeDataUri()` **ei koskaan aiheuta poikkeusta** — se välittää alkuperäiset tavut muuttamattomina, joten kuvaus-/base64-muunnospolku jatkaa aina toimintaansa. Myös muut kuin kuvatavut (nouto, joka ei palauttanut dekoodattavissa olevaa kuvaa) välitetään muuttamattomina. Tämä normalisointi koskee vain kuvia, jotka silta noutaa omaa itsekutsuaan varten — sitä ei koskaan sovelleta kutsujan käsittelemättömänä välitettävään hyötykuormaan, valinnaisen muokkauksen periaatteen mukaisesti (Hard Rule #20).

#### Asetusten skeema + migraatio

Uudet `modalityBridge*`-avaimet validoidaan Zodilla skeemassa `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCache*`-kolmikko ja Audio Bridgen käyttämä `modalityBridgeAudio*`-ryhmä. Migraatio `141_modality_bridge_settings.sql` kopioi aiemmat vanhat `visionBridge*`-arvot vastaaviin uusiin avaimiin (idempotentisti eikä koskaan korvaa operaattorin asettamaa `modalityBridge*`-arvoa); vanhat avaimet hyväksytään lukemisen varavaihtoehtona yhden julkaisusyklin ajan.

#### Läpinäkyvyysotsake + tilastot

Kuvauksen avulla muunnetuissa vastauksissa on
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(koostetaan funktiolla `buildModalityBridgeHeader()` tiedostossa `modalityBridge/bridgeStats.ts` ja lisätään funktiolla `withModalityBridgeHeader()` tiedostossa `src/sse/handlers/chatHelpers.ts`). Uudelleen reititetyt pyynnöt **eivät** saa otsaketta — hyötykuormaa ei muutettu, ja mallin vaihto näkyy jo vastauksen rungon `model`-kentässä.

`GET /api/modality-bridge/stats` (hallintatason todennus, sama taso kuin
`GET /api/settings`) palauttaa muistissa olevat modaliteettikohtaiset laskurit
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` modaliteeteille `vision`, `audio` ja
`video`. `averageLatencyMs` käyttää nimittäjänä `latencySamples`-arvoa, ei kaikkia
yrityksiä; operaatio, jolle ei ole ajoitustietoa, ei luo keinotekoista nollan
millisekunnin näytettä. `bridged` säilyy taaksepäin yhteensopivana aliaksena
onnistuneille muunnoksille; epäonnistuneet yritykset eivät kasvata sitä.
Laskurit nollautuvat tarkoituksellisesti prosessin uudelleenkäynnistyksen yhteydessä
(telemetriaa, ei kirjanpitoa).

#### Koontinäytön määritys

Erillinen koontinäyttösivu on
`/dashboard/settings/modality-bridge`. Sen URL-osoitteella avattavat `Vision`-, `Audio`-
ja `Video`-välilehdet säilyttävät kyselyparametrit vaihtaessaan `tab`-arvoa.
Vision-välilehti sisältää käyttöönoton, tilan, mallin valinnan (mukaan lukien
automaattinen oletus), tehtävät huomioivan kehotuksen, aikakatkaisun sekä kuvan,
kuvauksen pituuden ja välimuistin lisärajoitukset, ajonaikaiset laskurit ja
suojatun esimerkkipyynnön. Myös Audio-välilehti on toiminnassa: se sisältää
käyttöönoton, vain STT-malleja sisältävän mallivalitsimen Auto-vaihtoehdolla,
aikakatkaisun ja leikkeen enimmäispituuden rajat, äänilaskurit sekä
`input_audio`-esimerkkitestin. Video-välilehti on toiminnallinen: se näyttää
FFmpeg/ffprobe-ajonaikaisen tilan — yhden neljästä eksplisiittisestä
käyttöliittymätilasta (`unknown`, kun tarkistus on käynnissä tai sitä ei voitu
suorittaa loppuun, `restricted`, kun koontinäytön isäntä ei ole loopback-osoite ja
tarkistus ohitetaan asiakaspuolella, `unavailable`, kun tarkistus on tehty ja
puuttuminen vahvistettu, tai `available` FFmpeg/ffprobe-versioineen) — tallentaa
käyttöönoton sekä malli-, kehys-, video- ja aikakatkaisurajat, suodattaa
mallivalitsimeen vain kuvankäsittelyyn kykenevät mallit ja näyttää videolaskurit.

AI-asetusten aiempi Vision Bridge -kortti toimii yhteensopivuuslinkkinä uudelle
sivulle; se ei enää sisällä lomakkeen toista kopiota. Media Providers linkittää
myös Image-to-Text- ja Speech-to-Text-työnkulut vastaaviin Modality Bridge
-välilehtiin poistamatta nykyistä Speech-to-Text-kokeiluympäristöä.

**Oman silmukan pääsynvalvonnan ohitus:** kun kuvauspyyntö reititetään OmniRouten
oman `/v1`-silmukan kautta (ei-standardin palveluntarjoajamallin tapauksessa),
alipyyntö lähettää otsakkeen `x-omniroute-admission-bypass: internal`, ja se
todennetaan selvitetyn oman silmukan tunnistetiedolla — paikallisessa tilassa
paikallisella `sk_omniroute`-sentineliarvolla tai operaattorin määrittämällä
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` -ympäristömuuttujan avaimella (#1350), jotta
`REQUIRE_API_KEY=true`-käyttöönotot voivat edelleen suorittaa kuvauspyynnön. Ohitus
hyväksytään vain näillä täsmällisillä tunnistetiedoilla, joten ulkoiset asiakkaat
eivät voi käyttää otsaketta pääsynvalvonnan ohittamiseen.

Vanhat oletusarvot sijaitsevat tiedostossa
`src/shared/constants/visionBridgeDefaults.ts`; uudet tilan, tehtävät huomioivan
toiminnan ja välimuistin oletusarvot sekä asetusten selvittäjä sijaitsevat
tiedostossa `src/shared/constants/modalityBridgeDefaults.ts`. Suojamekanismi tarjoaa
`deps`-konstruktorivalinnan, jotta testeihin voidaan injektoida vale-
`getSettings`- ja `callVisionModel`-toteutukset.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Sieppaa ääntä sisältävät keskustelupyynnöt ennen kuin ne saavuttavat kohteen,
jonka ei tiedetä hyväksyvän äänisyötettä. Se ei koskaan uudelleenreititä
keskustelupyyntöä: ääniosat litteroidaan olemassa olevan OpenAI-yhteensopivan
multipart-päätepisteen kautta, minkä jälkeen valittu keskustelumalli jatkaa
tekstilitteraatioiden avulla.

Kulku:

1. Selvitä `supportsAudio` funktion `getResolvedModelCapabilities()` avulla.
   Palveluntarjoajarekisterin eksplisiittiset metatiedot ovat ensisijaisia,
   niiden jälkeen tulevat staattiset mallien metatiedot ja sitten synkronoitu
   `modalities_input`. Määritetty syöteluettelo ilman `audio`-arvoa tuottaa
   arvon `false`; jos kyvykkyydestä ei ole näyttöä, arvoksi jää `null`. Sekä
   `false` että `null` aktivoivat konservatiivisen sillan, kun taas `true`
   ohittaa sen.
2. Selvitä `modalityBridgeAudio*`-asetukset ja poimi jokaisesta viestistä
   liitettävissä olevat ylätason ääniosat jaetun `detectMediaParts()`-tunnistimen
   avulla. Tuettuja siirtomuotoja ovat OpenAI `input_audio`, `audio_url` ja
   `source.media_type: "audio/*"`. Sisäkkäinen ääni tunnistetaan reititystä
   varten, mutta liittämispolku ei poista sitä. Työn määrä rajataan asetuksella
   `modalityBridgeAudioMaxClips`; myöhemmät osat jätetään koskemattomiksi.
3. Käytä määritettyä `provider/model`-arvoa tai anna funktion
   `selectAudioBridgeModel()` käydä `AUDIO_TRANSCRIPTION_PROVIDERS` läpi vakaassa
   luettelojärjestyksessä ja valita ensimmäinen malli, jolla on käyttökelpoinen
   aktiivisen palveluntarjoajan tunnistetieto.
4. `callAudioTranscription()` muuntaa base64-/data-URI-äänen multipart-`file`-
   osaksi tai lataa etäresurssin `audio_url` julkiset osoitteet sallivan lähtevän
   liikenteen suojauksen kautta käyttäen DNS-kiinnitystä ja 25 MB:n rajaa. Sen
   jälkeen se lähettää tiedoston ja valitun mallin POST-pyyntönä paikalliseen
   `/v1/audio/transcriptions`-silmukkaan, joka todennetaan funktion
   `resolveSelfLoopBearer()` avulla. Nykyinen litterointireitti suorittaa
   normaalin tunnistetietojen haun, jäähdytys- ja nopeusrajoitusten käsittelyn
   sekä palveluntarjoajalle välityksen.
5. Onnistuneet kutsut korvaavat osansa muodolla
   `[Audio N]: <transcript>`. Kutsut suoritetaan funktion
   `Promise.allSettled` avulla: yksittäinen epäonnistuminen säilyttää kyseisen
   alkuperäisen ääniosan (#4012-sopimus). Jos kaikki kutsut epäonnistuvat ja
   kohteen on todistettu täyttävän ehdon `supportsAudio === false`, osiksi tulee
   `[Audio N]: (unavailable — no STT provider connected)` (#8430-sopimus).
   Tuntemattomalle kohteelle (`null`) kaikkien kutsujen epäonnistuminen jättää
   osat koskemattomiksi. Todistetusti vain tekstiä tukeva kohde, jolle ei ole
   käyttökelpoisia STT-tunnistetietoja, saa saman eksplisiittisen
   paikkamerkinnän ilman verkkokutsua.

Onnistuneet litteraatiot käyttävät koko prosessin yhteistä Modality Bridge
LRU/TTL -välimuistia. Avain yhdistää ääniviitteen, vakaan
`audio-transcription`-operaatiotunnisteen ja valitun STT-mallin; epäonnistumisia
ei koskaan tallenneta välimuistiin. Ääniyritykset päivittävät jaetut `bridged`-,
`cacheHits`-, `failures`- ja `lastUsedAt`-laskurit. Muunnetut vastaukset sisältävät
otsakkeen
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`;
koskemattomiin pyyntöihin ei lisätä Audio Bridge -segmenttiä.

Ajonaikaiset asetukset tallennetaan tietokantaan ja validoidaan Zodilla:

| Avain                         | Oletusarvo | Alue                         |
| ----------------------------- | ---------- | ---------------------------- |
| `modalityBridgeAudioEnabled`  | `true`     | —                            |
| `modalityBridgeAudioModel`    | `""`       | Automaattinen tai STT-tunnus |
| `modalityBridgeAudioTimeout`  | `60000`    | 1000–300000                  |
| `modalityBridgeAudioMaxClips` | `3`        | 1–10                         |

Jaettua välimuistia hallitaan edelleen asetuksilla `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` ja `modalityBridgeCacheMaxEntries`.

### Videosilta (`videoBridge.ts`, `videoBridgePipeline.ts`)

Sieppaa ylätason video-osat Chat Completions -rajapinnan `messages`-kentästä ja Responses
API -rajapinnan `input`-kentästä ennen sellaisen kohteen kutsumista, jolla ei tiedetä olevan
natiivia videotukea. Tuettuja muotoja ovat `input_video`, `video_url`, `video_source`,
HTTPS-URL-osoitteet ja `data:video/*;base64,...`-data-URI:t. Pelkkiä tiedostonimiä tekstissä
ei käsitellä videoina.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) vastaa pyynnön läpikäynnistä,
ominaisuus- ja käytäntötarkistuksesta, pyyntökohtaisesta koostamisesta sekä vastauksen
hyötykuormasta. Videokohtainen työ — hankinta, koko tuloksen välimuisti, kuvasekvenssin
kuvaileminen (johon yhdistetään kutsujan mahdollisesti ilmoittama äänilitterointi) sekä
yrityskohtaiset mittarit, keskeytys ja siivous — on piilotettu
`videoBridgePipeline.ts`-tiedoston `processVideoPart`-toiminnon taakse, jota kutsutaan
kerran kutakin video-osaa kohden `preCall`-silmukan sisällä. Kyseinen moduuli määrittää
myös eksplisiittiset porttirajat `VideoMediaBrokerPort` (tavujen hankinta ja näytteistettyjen
kuvien poiminta), `VideoAudioTranscriptionPort` (kutsujan ilmoittaman äänilitteroinnin
yhdistäminen näytteistettyjen kuvien kuvateksteihin) ja `VideoDrilldownPort`
(kuvakohtaisen porautumisen pysyvyysraja; sitä ei ole vielä kytketty
`processVideoPart`-toimintoon — tällä hetkellä vain erillinen
`/api/modality-bridge/video/drilldown`-reitti kirjoittaa porautumistietueita).

Julkinen `/v1`-pyyntöpolku ei koskaan tuo tai käynnistä aliprosessia. Etävideot ladataan
50 MiB:n rajoituksen alaisina; sisäisillä base64-videoilla on varovainen 36 MiB:n
puretun datan videokohtainen enimmäiskoko, jotta mallin, viestien ja kehystyksen
muodostama kokonaisuus voi pysyä julkisten JSON-pyyntöjen 50 MiB:n hyväksymisrajan
sisällä. Sisäisen datan pituus ja puretun koon arviot tarkistetaan ennen muistin
varaamista. HTTPS vaaditaan sekä alkuperäiseltä etä-URL-osoitteelta että jokaiselta
uudelleenohjaukselta, ja tarkistukseen käytetään nykyistä vain julkiset osoitteet sallivaa
lähtevän liikenteen suojausta DNS-kiinnityksellä. Tämän jälkeen tavut ylittävät täsmällisen
sisäisen välittäjärajan `POST /api/modality-bridge/video/extract`. Tämä reitti on sekä
`LOCAL_ONLY` että `SPAWN_CAPABLE`, hyväksyy vain prosessikohtaisesti todennetun,
luotetusta loopback-osoitteesta tulevan pyynnön eikä koskaan hyväksy URL-osoitetta,
tiedostojärjestelmäpolkua, suoritettavaa tiedostoa tai argumenttiluetteloa. API:n
runkokokoputki ja käsittelijän inkrementaalinen runkolukija valvovat toisistaan
riippumatta välittäjän syötteen 50 MiB:n enimmäiskokoa. Sen rajattu jono suorittaa yhden
poiminnan kerrallaan, sallii neljä odottavaa työtä ja rajoittaa odottavan syötteen
100 MiB:uun.

Välittäjän sisällä `ffprobe` lukee yksityistä paikallista tiedostoa; kiinteä sallittujen
muotojen luettelo sulkee pois soittolista- ja manifestimuodot. Sallituissa MOV-perheen
säilöissä ulkoiset MOV-dataviittaukset pysyvät oletusarvoisesti poissa käytöstä, eikä
kiinteä komento ota niitä käyttöön. Sekä `ffprobe` että `ffmpeg` käyttävät vain
`file`-protokollan sallivaa luetteloa, yhtä säiettä, kiinteitä argumenttitaulukoita,
eivät shelliä, ja suoritettavat tiedostot ratkaistaan `PATH`-muuttujasta. Liitettyjä
kansikuvavirtoja ei pidetä toistettavina ehdokkaina. Kaikkien toistettavien virtojen on
täytettävä rajat, ja eksplisiittistä oletusvirtaa suositaan ennen determinististä
pienimmän indeksin varavaihtoehtoa. Videoiden enimmäiskesto on 600 sekuntia,
enimmäiskoko 8 192 pikseliä ulottuvuutta kohden ja lähteen enimmäispikselimäärä
33 554 432. FFmpeg näytteistää 1–16 keskikohtaan sijoittuvaa JPEG-kuvaa, pienentää
pitkän sivun enintään 1 024 pikseliin suurentamatta pienempiä syötteitä eikä koskaan
vastaanota URL-osoitetta. Näytteistyskäytäntö on oletusarvoisesti `uniform`. Valinnaiset
`scene_aware`- ja kokeellinen `segment_aware`-käytäntö suorittavat yhden kiinteän
FFmpeg-lisäajon jo validoidulle paikalliselle virralle, valitsevat rajatut
`showinfo`-kohtausaikaleimat ja palaavat deterministisesti samoihin tasaisesti
jakautuneisiin keskikohtiin, jos tunnistin epäonnistuu, aikakatkaisu tapahtuu, tuloste
on virheellinen tai ehdokasjoukko on tyhjä. Segmenttitietoinen tila jakaa keskikohtien
näytteet suhteessa validoituihin kohtausväleihin; segmenttitietoinen evidenssi ja
varatoiminta kuvataan tarkemmin jäljempänä. Kiinteää 16 kuvan enimmäisrajaa sovelletaan
valinnan jälkeen jokaisessa käytännössä. Kun kohtaustietoisen pyynnön kuvabudjetti on
vain yksi kuva, se käyttää aktiivisen koko videon tai kohdistusikkunan tasaisesti
jakautunutta keskikohtaa ja ilmoittaa `policyEffective: uniform`: yksi valittu
kohtauskuva ei voi säilyttää ajallisen alueen molempia päitä. Kutsuja voi halutessaan
antaa äärellisen kohdistusikkunan (`start`/`end` sekunteina); rajat rajoitetaan median
kestoon, käänteiset tai ei-äärelliset ikkunat hylätään ja kaikki näytteistyskäytännöt
suoritetaan vain normalisoidun välin sisällä. Tuloksena oleva ikkuna sisällytetään
näytteistyksen metatietoihin ja epäluotetun kuvauksen etuliitteeseen, jotta myöhemmät
mallit voivat erottaa kohdistetun otteen koko aikajanasta.

Semanttinen kuvatekstin kohdistus on erillinen, eksplisiittinen asetus. Oletusarvoinen
`full`-analyysitila säilyttää nykyisen kuvakehotteen eikä koskaan välitä pyynnön tekstiä
kuvatekstimallille. `focused`-tilassa silta lukee vain uusimman ei-tyhjän käyttäjän
kirjoittaman `text`- tai `input_text`-sisällön samasta Chat- tai Responses-säilöstä,
normalisoi sen NFC-muotoon, yhdistää ohjausmerkit ja tyhjemerkit sekä rajoittaa sen
500 Unicode-koodipisteeseen. Tyhjä tulos palautuu täsmälleen `full`-kehotteeseen.
Käyttökelpoinen vihje sarjallistetaan JSON-muodossa erilliseen epäluotetun käyttäjän
kontekstilohkoon, ja se saa ainoastaan priorisoida havaittavia yksityiskohtia; se ei voi
ohittaa erillistä varoitusta olla noudattamatta mediassa näkyviä tai kuuluvia ohjeita.
Tekstimuotoinen kohdistus ei koskaan päättele `start`/`end`-arvoja eikä muuta ajallista
näytteistintä.

#### FU-07:n rakenteellinen segmenttievidenssi

`segment_aware` käyttää yhden rajoitetun esianalyysikierroksen jo validoidulle
paikalliselle videovirralle. Kiinteä suodatinketju skaalaa videon ensin enintään
320 pikselin levyiseksi, tunnistaa kohtausvaihdokset ja pysähtyneet jaksot sekä
ottaa sitten yhden näytteen sekunnissa epäterävyyden, keskimääräisen luminanssin
ja spatiaalisen/ajallisen informaation analysoimiseksi. Kierros on rajattu 600
rakenteelliseen näytteeseen, yhteen FFmpeg-/suodatinsäikeeseen, samoihin vain
`file`-protokollan ja säilömuotojen sallittujen arvojen luetteloihin, 1 MiB:n
prosessitulosteen enimmäiskokoon sekä enintään 30 sekuntiin välittäjän jaetun
keskeytys-/määräaikarajan sisällä. Se ei koskaan hyväksy pyynnöstä komentoa,
suodatinta, polkua tai URL-osoitetta.

Rakenteelliset arvot ovat determinististä näytteenottoaineistoa, eivät videon
semanttista ymmärtämistä. Niistä ei päätellä kohteita, toimintoja, kuvatekstejä,
puhetta tai käyttäjän aikomusta. Kohtausten ja pysähtyneiden jaksojen rajat
muodostavat segmentit. Pysähtyneen kuvan kattavuus, epäterävyys, valotus,
spatiaalinen yksityiskohtaisuus ja ajallinen muutos vaikuttavat ainoastaan
siihen, miten nykyinen 1–16 kuvan budjetti jaetaan. Täysin pysähtyneen segmentin
enimmäismäärä on yksi kuva, kun taas pysähtymättömät segmentit kilpailevat
jäljellä olevasta budjetista. Kun rajoja on enemmän kuin kuvia, aikajanan
tasainen kattavuus säilytetään, jotta nopeat leikkaukset videon alussa eivät voi
peittää pitkää loppusegmenttiä. Kohtausrajat, jotka ovat pysähtyneen jakson
rajasta 1 sekunnin analyysiresoluution sisällä, yhdistetään.

Puuttuvat suodattimet, virheellinen tai tyhjä aineisto, tunnistimen virhe tai
rajatun esianalyysin aikakatkaisu johtavat avoimeen virheenkäsittelyyn ja täsmälleen
yhtenäiseen keskipistekäytäntöön. Kutsujan keskeytys tai välittäjän määräaika ei
johda avoimeen virheenkäsittelyyn: se lopettaa käynnissä olevan aliprosessin,
estää myöhemmän kuvien poiminnan, ja yksityinen väliaikainen hakemistopuu
poistetaan `finally`-lohkossa.

`scripts/perf/video-bridge-fu07-eval.ts` luo deterministisiä, todellisia
FFmpeg-testiaineistoja duplikaattien poiston jälkeisten kuvatekstikutsujen
säästöjen, runsaan liikkeen budjettijaon, epäterävyys-/valotus-/SI-TI-aineiston,
nopeiden leikkausten ja pitkän loppuosan sekä asteittaisten häivytysten väärien
positiivisten tulosten testaamiseen. Se tallentaa esianalyysin seinäkelloajan ja,
kun `/usr/bin/time` on käytettävissä, aliprosessin suoritinajan ja RSS-muistin
huippuarvon. Sen laatutarkistukset ovat vain rakenteellisia oraakkeleita.
Todellisen kuvatekstimallin laatu pysyy tilassa `HOLD`, koska tällä
testijärjestelmällä ei ole valtuutettua päätepistettä tai jäädytettyä arvioijaa.
Myös rahalliset säästöt pysyvät tilassa `HOLD`, ellei
`--caption-cost-per-call-usd` anna nimenomaista positiivista kustannusarviota
kutsua kohden. Skripti ei koskaan keksi kumpaakaan tulosta.

Kunkin kuvan koko on rajattu 4 MiB:uun, kaikkien raakakuvien yhteiskoko 23
MiB:uun ja sarjallistetun välittäjävastauksen koko 32 MiB:uun. Yksityinen
väliaikaishakemisto poistetaan `finally`-lohkossa. OmniRoute ei sisällä
FFmpeg-ohjelmaa eikä hyväksy mukautettua suoritettavan tiedoston polkua. Ennen
kuvatekstien muodostamista välityskerros suorittaa varovaisen visuaalisen
duplikaattien poistokierroksen: kukin JPEG-kuva pienennetään 16×16-kokoiseksi
harmaasävypuskuriksi, ja sitä verrataan vain viimeiseen säilytettyyn kuvaan. Kun
pyydetty kuvatekstibudjetti on yhtä kuvaa suurempi, poiminta tuottaa rajatun
ehdokasjoukon, jonka koko on enintään kaksinkertainen budjettiin nähden eikä
koskaan ylitä 16 kuvaa. Pyydettyä enimmäismäärää sovelletaan vasta
duplikaattien poiston jälkeen. Ensimmäinen ja viimeinen valittu ehdokas
säilytetään lopullisessa harvennuksessa, kun budjetti on vähintään kaksi.
Versioitu `grayscale-16x16-mean-cells-v2`-käytäntö käyttää suurempaa arvoa
keskimääräisen luminanssin muutoksesta ja niiden pikkukuvan solujen suhteesta,
joiden normalisoitu muutos on vähintään 0.05. Duplikaattikynnys on vakio 0.04,
joka on valittu ennustettavuuden vuoksi sen sijaan, että se olisi asetettu
ajonaikaiseksi asetukseksi. Tämä toissijainen suuren kontrastin signaali
säilyttää pienet liikkeet ja näkyvän tekstin muutokset, jotka pelkkään
keskiarvoon perustuva vertailu voi piilottaa. Vertailijan tai dekooderin virheet
käsitellään avoimesti, jolloin kattavuus säilytetään. Tulosteen metatiedot
erottelevat poimitut ehdokkaat, onnistuneesti käytetyt kuvat ja poistetut
visuaaliset duplikaatit.

Nimenomaisesti videoksi merkitty osa voi pyytää aikaleimallisen yhteystietoarkin.
Välityskerros muodostaa enintään 4 sarakkeen ja 16 kuvan JPEG-ruudukon. Jokainen
512 pikselin solu upottaa lähteen aikaleiman suurikontrastiseen alapalkkiin,
samalla kun samat aikaleimat säilyvät tekstimuotoisissa metatiedoissa myöhempää
yhdistämistä ja auditointia varten. Koko JPEG-kuvan enimmäiskoko on edelleen 32
MiB. Jos `sharp` ei pysty dekoodaamaan tai koostamaan ruudukkoa, välityskerros
palaa käyttämään yksittäisiä JPEG-kuvia. Asiakkaan keskeytys välittyy silti
arkkitoimintoon.

Käyttöönottoa tukeva aineisto pidetään tarkoituksella erillään synteettisestä
koostamisen mikrovertailutestistä.
`scripts/perf/video-bridge-contact-sheet-eval.ts` määrittelee skeemaversioidun
A/B-testijärjestelmän todellisille OpenAI-yhteensopiville konenäkömalleille. Se
mittaa palveluntarjoajan ilmoittamat tunnisteet, kokonaisviiveen seinäkelloajassa
(arkin koostaminen mukaan lukien), mallikutsujen määrän ja manifestissa
määriteltyjen tosiasioiden säilymisen. Mallin raakavastauksia ei kirjoiteta
raporttiin, vaan ainoastaan SHA-256-tiivisteet ja täsmänneiden tosiasioiden
tunnukset säilytetään. Testijärjestelmä ei tee verkko- tai maksullista
mallikutsua, ellei `--execute-real`-valitsinta anneta ja ellei `--model`,
`OMNIROUTE_BASE_URL` ja `OMNIROUTE_API_KEY` ole määritetty. Ilman tällaista
nimenomaista todellista ajoa sen koneluettava tulos pysyy tilassa `HOLD`.
Pelkästään synteettiset hyötykuorman tai kutsumäärän mittaukset eivät ole
käyttöönottoa tukevaa aineistoa.

Kutsujat voivat liittää valinnaisen `transcript.cues`-taulukon tuettuun
video-osaan, kun heillä on jo valmiiksi kohdistettu teksti. Jokaisella vihjeellä
on oltava `text`, äärellinen `start`/`end`-aikaväli tutkitun keston sisällä sekä
sallittujen arvojen luetteloon kuuluva `source` (`client`, `embedded` tai
`audio-bridge`). `confidence`-arvon oletus on `1`, ja sen on pysyttävä välillä
`0`–`1`. Täsmälleen samat vihjeet yhdistetään. OmniRoute ei koskaan käynnistä
transkriptiota näiden metatietojen perusteella: validoidut vihjeet kopioidaan
kuvattuun tulokseen lähteineen, luottamusarvoineen ja aikaväleineen, ja ne
esitetään epäluotettuina havaintoina kuvatekstien rinnalla. Virheellinen,
sallitun alueen ulkopuolinen tai alkuperätiedoton teksti hylätään sen sijaan,
että se sekoitettaisiin kuvatekstivirtaan. Molemmat pyyntörungon
transkriptiokanavat normalisoivat annetun alkuperän arvoksi `client`, mukaan
lukien itse ilmoitetut `embedded`- tai `audio-bridge`-merkinnät. Vain palvelimen
omistama sovitin voi määrittää nämä luotetut merkinnät ainoastaan koodissa
käytettävän `trustedSource`-argumentin kautta. Pyynnön JSON-kenttä ei voi
välittyä kyseiseen argumenttiin. Transkriptioteksti pysyy alkuperästään
riippumatta epäluotettuna, mediasisällöstä johdettuna sisältönä, eikä se saa
koskaan määrittää valtuutusta.

Edistynyt kutsuja voi antaa samalle videolle `audioTranscript`-raidan;
sitä käsitellään asiakkaan toimittamana tekstinä, ei todisteena palvelimen tekemästä litteroinnista.
Yhdistämiskohta suorittaa visuaaliset ja äänihavainnot saman
määräajan ja keskeytyssignaalin alaisina, järjestää ne yhteiselle aikajanalle, yhdistää
täsmälleen samanlaiset kaksoiskappaleet ja raportoi osittaisen tuloksen, kun vain toinen haara onnistuu.
Virheellinen `audioTranscript` johtaa tähän osittaiseen tulokseen — visuaalinen
kuvaus säilytetään ja äänihaaraan kirjataan puhdistettu virhekoodi —
sen sijaan, että koko videon käsittely epäonnistuisi. Haarakohtainen saatavuus, osittaisuuden ilmaisin
ja puhdistetut virhekoodit säilytetään kuvatussa tuloksessa,
suojauksen metatiedoissa (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), tulosvälimuistin metatiedoissa ja sillan
yhdistämislaskureissa. Video Bridgen oletuspolku ei käynnistä puheentunnistusta
eikä lataa mediasta toista kopiota; ilman kyseistä nimenomaisesti annettua raitaa se käsittelee
vain videota.

**Litteroinnin säilytys (#12150 P1).** Tätä sovelletaan automaattisesti aina, kun
Video Bridge (joka on itsessään valinnainen) renderöi litterointivihjeen — erillistä
säilytysvalitsinta ei ole. Kun pyyntö renderöi minkä tahansa litterointivihjeen (kutsujan ilmoittaman
`transcript`-raidan tai yhdistetyn `audioTranscript`-raidan), suojaus merkitsee sen arvolla
`videoBridgeObserved` ja tuottaa videokuvauksesta peitetyn varjokopion —
identtisen renderöinnin, jossa jokaisen vihjeen vapaamuotoinen tekstisisältö korvataan merkkijonolla
`[redacted-video-transcript]`. Se muodostetaan korvaamalla rakenteinen vihjekenttä
ennen merkkijonon kokoamista (litistettyä tekstiä ei koskaan jäsennetä, joten mikään vihjeen
sisältö — vihamielinen tai tavallinen, mukaan lukien merkkiä `]` sisältävät tekstit, kuten
`[inaudible]`/`[music]` — ei voi säilyä). Pysyvään kutsulokiin tallennetussa pyynnön rungossa
jokainen videosta johdettu tekstiosa vaihdetaan tähän peitettyyn varjokopioon sisällön
yhtäläisyyden perusteella; `fullText`-ankkuri luetaan uudelleen valmiista kutsua edeltävän suojauksen
hyötykuormasta, joten vastaavuus löytyy edelleen sen jälkeen, kun ketjun myöhemmät suojaukset (PII- ja
tunnistetietojen peittäjät, prioriteetit 10/95) ovat muokanneet kuvaustekstiä paikallaan,
sekä sen jälkeen, kun järjestelmäkehotteen, luovutuksen tai muistin lisääminen on muovannut viestitaulukon uudelleen.
Mallille lähetettävä runko säilyy muuttumattomana. Havaittu pyyntö ei myöskään lisää
mitään pysyvään Memory-muistiin (sekä pyynnöstä että vastauksesta johdettu poiminta ohitetaan),
joten mallin oma vastaus ei voi kaiuttaa litterointitekstiä Memory-muistiin.

**Videon raakakentät (#12430).** Kun silta on käytössä eikä natiivia videotukea tunneta tai sitä ei ole, määritetyt `transcript`-/`audioTranscript`-kentät aktivoivat myös arvon `videoBridgeObserved`, vaikka kuvauksen muodostaminen olisi epäonnistunut tai `maxVideos`-raja olisi ylittynyt. `null` ja tyhjät merkkijonot lasketaan mukaan; puuttuvia kenttiä ja muita kuin videon metatietoja ei lasketa. Säilytetyissä kopioissa nämä kentät peitetään tai pyyntö jätetään pois, ja välimuistit sekä Memory ohitetaan.

Näillä varapoluilla kelvollisista kutsujan vihjeistä tulee tuettuja `text`-/`input_text`-
osia epästandardien palveluntarjoajakenttien sijaan. Molemmat pyynnössä annetut raidat
säilyvät epäluotettuina `client`-havaintoina, ja mukana on nimenomainen varoitus siitä, ettei videota
kuvattu eikä aikaleimoja tarkistettu mediaa vasten. Nykyisiä
256 vihjeen / 64 KiB:n kokonaisrajoja ja vihjekohtaisia rajoja sovelletaan kumpaankin raitaan yhteisesti;
aikaleimojen on mahduttava välittäjän 600 sekunnin enimmäisrajaan ja mahdolliseen annettuun kohdistusikkunaan.
Virheelliset raidat hylätään eikä niitä välitetä mielivaltaisena tekstinä; kelvollista
rinnakkaisraitaa voidaan silti käyttää, ellei niiden yhteinen raja ylity. Null-arvoiset tai tyhjät
kentät eivät lisää tekstiä. Tämä varamekanismi ei lisää median noutoa tai litterointia.
Litteroinnin laajennuskentät poistetaan varamekanismin videokantajasta ja sen
`video_url`-/`source`-objekteista. OpenAI-siirtomuodon sallittujen kenttien luettelo pysyy tiukkana; natiivin
videotuen osalta tuntemattomat kantajat pysyvät käytettävissä, ja tunnetut vain tekstiä tukevat kohteet säilyttävät turvalliset merkinnät.
Rakenteiset peittovarjot suojaavat lisättyä litterointitekstiä, kun taas
alkuperäinen kutsujan omistama pyyntö säilyy muuttumattomana. Natiivia videota tukevat kohteet ja
käytöstä poistetut sillat säilyttävät nykyisen ohituskäyttäytymisensä.

Muut säilytetyt kopiot käyttävät samaa havaitun pyynnön signaalia. Raaka
suojauksia edeltävä asiakaspyynnön tilannevedos, muistissa oleva odottava pyyntö ja varhainen
hylätyn pyynnön loki korvaavat rakenteellisesti video-osien litterointikentät;
putkiston vaiheiden ja kontekstin luovutuksen muodostamat merkkijonokehotteet peitetään
pysyvän pyyntörungon tallennuskohteessa. Pysyvä `video_content_removed`-merkintä
saa `previous_response_id`-jatkamisen epäonnistumaan turvallisesti sen sijaan, että tarkoituksella
hylätty teksti muodostettaisiin uudelleen. Jos havaitun pyynnön
osakohtainen peittovarjo katoaa ennen lokitusta tai yksikin useista videovarjoista
ei vastaa myöhempien pyyntömuutosten jälkeen, säilytettävä pyyntörunko
jätetään kokonaan pois sen sijaan, että säilytettäisiin osittain peitetty litterointi.

Havaitun pyynnön tapauksessa mallin vastaus voi lainata mitä tahansa litteroinnin osaa
ilman rakenteista vihjerajaa. Sen vuoksi pysyvän kutsulokin
`responseBody` korvataan poisjättömerkinnällä; yksityiskohtaista
putkistoartefaktia (joka voi sisältää palveluntarjoajan tai asiakkaan runkoja ja suoratoiston osia)
ei säilytetä. Semanttiset, idempotenssi- ja päättelyn toistovälimuistit ohittavat
kyseisen pyynnön luvut ja kirjoitukset. Palveluntarjoajalle lähetettävä pyyntö ja asiakkaalle näkyvä
vastaus säilyvät muuttumattomina. Varhaiset keepalive-tavut tyhjennetään väliaikaisesta
puskurista, kun yksityiskohtainen artefakti jätetään pois. Kiron virheellistä EventStream-
muotoa koskeva varoitus ilmoittaa vain hyötykuorman tavumäärän, ei koskaan sen sisältöä tai JSON-
jäsentimen raakaa virhettä.
Tämä ei väitä, että kaikki asiaan liittymättömät palveluntarjoajan tai liitännäisen diagnostiikkatiedot olisi
tarkastettu; säilytettävien tallennuskohteiden laajemman läpikäynnin seuranta on tehtävässä #11658.

Sisäinen `/api/modality-bridge/video/drilldown`-elinkaari on erillinen,
loopback-yhteyttä ja tunnistautumistunnusta käyttävä välimuistikerros. Jokainen toiminto edellyttää myös
kanonista läpinäkymätöntä pääkäyttäjätunnistetta. Ennen tuotantokutsujan käyttöönottoa sen on
johdettava kyseinen tunniste todennetusta vuokraajasta, eikä se saa koskaan välittää
asiakkaan valitsemaa arvoa. Välimuistiavaimet sitovat tämän pääkäyttäjän kanonisiin istunto- ja
videoviitetunnisteisiin, tallentavat vain niiden SHA-256:sta johdetut avaimet ja rajaavat sekä luvut
että poistot samaan pääkäyttäjään. Välimuisti tallentaa kuhunkin merkintään enintään 16 johdettua
JPEG-kehystä, vanhentaa ne kymmenen minuutin kuluttua ja tukee rajattuja
`start`/`end`-lukuja tai istunnon nimenomaista poistamista.

Kullakin pääkäyttäjällä voi olla enintään 16 merkintää ja 64 MiB kanonista JPEG-dataa. Nämä
rajat ovat riippumattomia globaalista 64 merkinnän / 256 MiB:n ylärajasta: pääkäyttäjän kiintiöpaine
poistaa ensin vain kyseisen pääkäyttäjän vähiten äskettäin käytetyt merkinnät, ennen kuin globaalia
LRU-poistoa harkitaan. Vanhentuneet merkinnät poistetaan sekä pääkäyttäjän että
globaalista kirjanpidosta välimuistitoiminnan yhteydessä, kun taas peruutus ja validointivirhe eivät
tallenna osittaista korvausta.

Välimuisti hylkää ei-kanonisen Base64:n, ylimääräisen täytteen, muun kuin JPEG-median, virheelliset tai
katkaistut JPEG-tiedostot sekä JPEG-tiedostot, jotka aiheuttavat varoituksen rajatun koko kuvan `sharp`-
dekoodauksen aikana. Se uudelleenkoodaa jokaisen hyväksytyn kuvan kanoniseksi JPEG-kuvaksi, johtaa leveyden ja korkeuden
dekoodatuista tavuista kutsujan kenttiin luottamisen sijaan ja hylkää kaikki loppuun liitetyt
polyglottitavut niiden säilyttämisen sijaan. Molempiin kiintiöihin lasketaan vain rajattu kanoninen pakattu puskuri.
JSON-siirtoraja sisältää Base64-lisäkuorman 32 MiB:n
dekoodatun syötteen enimmäiskoolle. Jokainen
tallennettu johdos kirjaa validoidun JPEG-muodon ja -resoluution, näytteenottokäytännön,
johdosversion, luontiajan, palvelimen laskeman sisältötiivisteen sekä hajautetun ylätason
viitteen ja luotetun kutsujan antaman ylätason sisällön tiivisteen. Peruutus tarkistetaan
asynkronisten dekoodaus- ja hajautusvaiheiden välillä ennen atomista välimuistiin tallennusta.

Tämä toimituserä ei vielä yhdistä tuotantotuottajaa reittiin eikä
tarjoa moniresoluutioisten varianttien valintaa. Läpinäkyvä Video Bridge -pyyntöpolku
ei siksi aiheuta lisätyötä, kun taas vuokraajaan sidotun pääkäyttäjätunnisteen johtaminen ja
koko FU-08-moniresoluutioelinkaari ovat edelleen nimenomaisia jatkotöitä sen sijaan,
että ne dokumentoitaisiin valmiiksi toiminnallisuudeksi.

Kehykset kuvatekstitetään peräkkäin määritetyllä Video-mallilla. Tyhjä
Video-ohitus perii Vision-asetuksen; jos molemmat ovat tyhjiä, Vision-
automaattireititin valitsee käytettävän näkökykyisen mallin. Onnistuneet kuvatekstit
korvaavat alkuperäisen osan vakaalla `[Video description:`-etuliitteellä, joka myös
merkitsee tekstin epäluotettavaksi mediasta johdetuksi havainnoksi ja ohjeistaa myöhempiä
malleja olemaan noudattamatta mediasta löytyviä ohjeita. Kehyskuvatekstien välimuistiavaimet
sisältävät JPEG-tavut, kehotteen, aikaleiman ja käytettävän mallin; vain onnistuneet
kuvatekstit tallennetaan välimuistiin. Välimuistimerkinnät säilyttävät todellisen onnistuneen tuottajamallin,
mukaan lukien varamallin; silta ilmoittaa arvon `mixed`, kun eri kehykset
ovat eri mallien tuottamia. Välimuistiosuma käyttää kyseistä tuottajan identiteettiä uudelleen
sen sijaan, että se nimettäisiin uudelleen pyydetyksi reitityssuunnitelmaksi. Koko videon tulosvälimuistin
avain perustuu jokaiseen syötteeseen, joka muuttaa tulosta — kehotteeseen, käytettävään
malliin, näytteenottokäytäntöön, kehysten määrään, semanttisen analyysin tilaan, normalisoidun
kohdistusvihjeen SHA-256-sormenjälkeen, kohdistusikkunaan, arvoon `transcript`,
arvoon `audioTranscript` ja kontaktivedosvalitsimeen — joten minkä tahansa näistä
ulottuvuuksista muuttaminen aiheuttaa välimuistihudin, eikä koskaan vanhentuneen tuloksen uudelleenkäyttöä. Visuaalisen duplikaattien poistokäytännön
versio, kynnysarvo ja rajattu ehdokaskehysten määrä sisältyvät myös nimenomaisesti
tulosvälimuistin avaimeen ja metatietoihin; käytännön muutos ei siksi voi käyttää uudelleen vanhentunutta
koko videon kuvausta. Tulosvälimuistin v4-metatiedot säilyttävät tilan ja
sormenjäljen, mutta eivät koskaan käyttäjän raakatehtävää. Suojakaiteiden metatiedot ilmoittavat sekä
pyydetyn että käytössä olevan analyysitilan; pyydetty `focused`-tila ilman
käyttökelpoista käyttäjätekstiä ilmoitetaan tosiasiallisesti `full`-tilaksi.

Suojakaide poimii kaikki tuetut video-osat, mutta kuvailee niistä enintään
`modalityBridgeVideoMaxVideos` kappaletta. Kohteessa, jonka on osoitettu olevan
`supportsVideo === false`, epäonnistuneet ja rajan ylittävät videot muutetaan nimenomaisiksi turvallisiksi
tekstimerkinnöiksi, jotta raakavideota ei jää jäljelle. Kun ominaisuus ei ole tiedossa, kyseiset osat
säilyttävät videosäiliönsä; mahdollinen varatranskriptio noudattaa yllä kuvattua rajattua
tekstimuunnosta. Kohteet, joilla on `supportsVideo === true`, ohittavat sillan.
Asiakaspyynnön keskeytyssignaali välittyy latauksen, välittäjäjonon,
aliprosessien ja kuvatekstikutsujen läpi; keskeytykset pysähtyvät videoiden välillä eivätkä koskaan vikatilanteessa
päästä raakaa mediaa läpi.

Ajonaikaiset asetukset tallennetaan tietokantaan ja validoidaan Zodilla:

| Avain                               | Oletus      | Alue / toiminta                                                                                                       |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Valinnainen suoritusympäristö, erikseen käyttöön otettava                                                             |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` säilyttää yleiset kuvatekstit; `focused` käyttää rajattua, epäluotettua uusimman käyttäjän kontekstia          |
| `modalityBridgeVideoModel`          | `""`        | Perii Vision Bridge -mallin                                                                                           |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                  |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` tai suhteellinen `segment_aware`; tunnistimen virhetilanteessa käytetään `uniform`-käytäntöä |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                   |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                        |

Vanhat pysyvästi tallennetut Video-aikakatkaisuarvot, jotka ylittävät 120 sekuntia, rajataan
välittäjän määräaikaan; uudet asetusten kirjoitukset, jotka ylittävät tämän rajan, hylätään.
`GET /api/modality-bridge/video/runtime` edellyttää luotettua, leimattua takaisinkytkentäyhteyden
paikallisuutta ennen todennusta tai suoritusympäristön tutkimista ja sen jälkeen hallinnan
todennusta. Se palauttaa vain `available`-arvon, puhdistetut FFmpeg/ffprobe-versiot sekä kiinteän
syyn, kun suoritusympäristö ei ole käytettävissä. Sisäinen poimintapäätepiste ei ole
julkinen latausrajapinta: jonon täyttyminen palauttaa `503` sekä `Retry-After`-otsakkeen, kutsujan
yhteyden katkeaminen palauttaa `499` ja välittäjän kiinteän määräajan ylittyminen palauttaa `504`. Muunnetut vastaukset lisäävät
`video->text;model=<visionModel>;parts=<videos>`-segmentin keskitettyyn
`x-omniroute-modality-bridge`-otsakkeeseen poistamatta Vision- tai Audio-segmenttejä.

### PII-peittäjä (`piiMasker.ts`)

Suoritetaan **molemmissa** vaiheissa.

- **`preCall`** kloonaa hyötykuorman, käy läpi kentät `system`, `messages`, `input` ja
  `prompt` (mukaan lukien pelkät merkkijonoalkiot) ja soveltaa `processPII()`-funktiota (moduulista
  `@/shared/utils/inputSanitizer`) merkkijonomuotoisiin `content`/`text`-kenttiin. Kun
  `PII_REDACTION_ENABLED=true`, havaittu PII peitetään lähtevässä
  hyötykuormassa. Tämä ei riipu asetuksesta `INPUT_SANITIZER_MODE` (joka hallitsee vain
  kehotesyötteiden manipuloinnin käytäntöä). Kun peittäminen ei ole käytössä, kutsu tallentaa havaintojen
  määrät kirjoittamatta sisältöä uudelleen.
- **`postCall`** syväkloonaa vastauksen ja suorittaa `sanitizePIIResponse()`-funktion sekä
  Responses API -muodon peittäjän (`maskResponsesOutput` — kattaa kentät
  `output_text` ja `output[].content[].text`). Jos peittämistä tapahtuu,
  muokattu vastaus korvaa alkuperäisen.

Suojakaide ei koskaan estä kutsua; se vain lisää merkintöjä (`meta.detections`,
`meta.redacted`) tai kirjoittaa sisällön uudelleen.

### Kehotesyötteiden manipulointi (`promptInjection.ts`)

Tunnistaa käyttäjän toimittamasta sisällöstä vihamieliset rakenteet ja pakottaa
määritetyn käytännön. Toimintaa ohjaavat ympäristömuuttujat ja konstruktorin
asetukset:

| Asetus     | Ympäristömuuttuja                                                                                     | Oletus | Vaikutus                                                                                                                                                                                                                    |
| ---------- | ----------------------------------------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Käytössä   | `INPUT_SANITIZER_ENABLED`                                                                             | `true` | Kun arvo on `false`, suojakaide ohitetaan.                                                                                                                                                                                  |
| Tila       | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn` | Manipulointikäytäntö: `block`, `warn` tai `log`. (`redact` hyväksytään taaksepäin yhteensopivuuden vuoksi, mutta se **ei** poista manipulointitekstiä; pyynnön PII-uudelleenkirjoitusta hallitsee `PII_REDACTION_ENABLED`.) |
| Estokynnys | `blockThreshold`-asetus / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | Estämiseen vaadittava vähimmäisvakavuus. Oletusarvoisesti keskitasoa vain tarkkaillaan.                                                                                                                                     |

**Tilan ensisijaisuusjärjestys** (`getMode`): kutsujan `options.mode` →
`INJECTION_GUARD_MODE`-arvon **tietokantaan tallennettu ominaisuuslipun ohitus** (Hallintapaneeli → Asetukset →
Ominaisuusliput) → `INJECTION_GUARD_MODE`-ympäristömuuttuja → `INPUT_SANITIZER_MODE`-ympäristömuuttuja →
`warn`. Hallintapaneelin ohitus on siis ympäristömuuttujia ensisijaisempi, joten Ominaisuusliput-käyttöliittymä
hallitsee käynnissä olevaa suojausta reaaliaikaisesti (uudelleenkäynnistystä ei tarvita). Tietokannan luku on vikasietoinen:
jos siinä tapahtuu virhe, suojaus palaa ympäristömuuttujiin perustuvaan toimintaan, ja kun
ohitusta ei ole asetettu, toiminta vastaa täysin pelkkiin ympäristömuuttujiin perustuvaa määritystä.

Tunnistuslähteet:

1. `sanitizeRequest()` moduulista `@/shared/utils/inputSanitizer` (jaettu tunnistinjoukko,
   jota käytetään muuallakin käsittelyketjussa).
2. Sisäänrakennetut `DEFAULT_GUARD_PATTERNS`-mallit (tällä hetkellä `system_override_inline` ja
   `markdown_system_block`, molempien vakavuus on `high`).
3. Konstruktorin asetuksina välitetyt valinnaiset `customPatterns`-mallit (merkkijonot, säännölliset lausekkeet
   tai `{ name, pattern, severity }`-tietueet).

Kun `mode === "block"` **ja** vähintään yksi havainto täyttää vakavuuden
kynnysarvon, `preCall` palauttaa arvon `{ block: true, message: "Request rejected:
suspicious content detected" }`. Tiloissa `warn`/`log` suojakaide kirjaa tapahtuman mutta
sallii kutsun. Jaettu apufunktio `evaluatePromptInjection()` viedään myös
niitä kutsujia varten, joiden on arvioitava kehotteita käyttämättä rekisteriä.

**Tarkistuksen raja (v3.8.20):** tunnistin tarkastaa vain yhdistetyn kehotetekstin
**ensimmäiset 16 KB** — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 tavua)
tiedostossa `src/shared/utils/inputSanitizer.ts`. Sekä `detectInjection()` että
`evaluatePromptInjection()` suorittavat operaation `slice(0, MAX_INJECTION_SCAN_BYTES)` ennen
mallisilmukan suorittamista. Injektiodirektiivit sijaitsevat syötteen alkupuolella, joten tämä
rajoittaa säännöllisten lausekkeiden CPU-/GC-kuormitusta useiden satojen kilotavujen hyötykuormissa heikentämättä tunnistusta (vrt.
#3932, #4041).

### Tunnistetietojen peittäjä (`credentialMasker.ts`)

Suoritetaan **molemmissa** vaiheissa, oletusketjun viimeisenä (prioriteetti `95`). Peittää
tunnetut API-avainten / salaisten tunnusten mallit lähtevästä hyötykuormasta (viestin
sisällöstä, työkalukutsujen argumenteista ja työkalujen tuloksista) **sekä** palveluntarjoajan vastauksesta, jotta
kehotteeseen liitetty tunnistetieto (tai työkalun tuloksessa takaisin kaiutettu tunnistetieto) ei vuoda
ylävirran palveluntarjoajalle eikä takaisin asiakkaalle.

- **Vain erikseen käyttöön otettava**, sama käytäntö kuin henkilötietojen peittämisessä (kovan säännön #20 yhteydessä):
  poistettu käytöstä, ellei `settings.credentialRedactionEnabled === true` **tai**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kun se ei ole käytössä, suojakaide ei tee mitään —
  se ei koskaan estä eikä muokkaa.
- `redactCredentials()` käy läpi koko hyötykuorma-/vastauspuun (`walkValue()`,
  suojattu prototyyppisaastumiselta ja sykleiltä `WeakSet`-rakenteen avulla) ja korvaa osumat
  `[REDACTED:<type>]`-paikkamerkillä kloonaten vain ne haarat, jotka todella
  muuttuivat.
- `CREDENTIAL_PATTERNS` kattaa LLM-palveluntarjoajien avaimet (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS-/SaaS-tunnukset (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), maksuavaimet (Stripe, Square), pilvipalvelujen
  avaimet (AWS-käyttöavain, Twilio, SendGrid, Mailgun), yksityiset avaimet / JWT:t,
  tunnistetietoja sisältävät yhteysmerkkijonot (`mongodb://user:pass@...` jne.) sekä
  yleisen `Authorization`/`x-api-key`/`api-key`/`apikey`-otsakearvon
  mallin. Otsakkeen muotoiset avaimet (`authorization`, `x-api-key`, `api-key`,
  `apikey`) peitetään rakenteellisesti (vain arvo; skeeman etuliite, kuten
  `Bearer `/`Basic `, säilytetään) yleisen tekstisäännöllisen lausekkeen käyttämisen sijaan.
- Suojakaide ei koskaan estä; se ainoastaan muokkaa (`modifiedPayload` /
  `modifiedResponse`) ja lisää merkintöjä (`meta.credentialsRedacted`, `meta.count`).

Regressiosuoja: `tests/unit/credential-masker-guardrail.test.ts`.

## Perussopimus (`base.ts`)

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
  block?: boolean; // true katkaisee ketjun välittömästi
  message?: string; // näytetään eston yhteydessä
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // preCall palauttaa tämän pyynnön uudelleenkirjoittamiseksi
  modifiedResponse?: TValue; // postCall palauttaa tämän vastauksen uudelleenkirjoittamiseksi
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

Suojakaide ilmaisee, ettei muutoksia ole, palauttamalla joko arvon `void`, `{}` tai
`{ block: false }`. Arvon `modifiedPayload`/`modifiedResponse` palauttaminen korvaa
ketjussa eteenpäin myöhemmille suojakaiteille välitettävän arvon.
`signal?: AbortSignal` välittää kutsujan elinkaaren suojakaiteille. Pyynnön keskeytys on tarkoituksellinen avoimeksi jättävä poikkeus: mediasillat lopettavat työn ja siivoavat palauttamatta käsittelemätöntä mediaa kohteelle, jonka tiedetään, ettei se tue sitä.

## Rekisteri (`registry.ts`)

Singleton-olio `guardrailRegistry` tarjoaa seuraavat toiminnot:

- `register(guardrail)` — lisää suojakaiteen (tai korvaa sen normalisoidun nimen perusteella) ja
  järjestää suojakaiteet uudelleen `priority`-arvon mukaiseen nousevaan järjestykseen.
- `clear()` / `list()` — hallinnollisia aputoimintoja.
- `runPreCallHooks(payload, context)` — käy aktiiviset suojakaiteet läpi, välittää
  hyötykuorman `modifiedPayload`-arvojen kautta ja pysähtyy ensimmäiseen `block: true` -tulokseen.
- `runPostCallHooks(response, context)` — sama käsittely vastauksen puolella.
- `resetGuardrailsForTests({ registerDefaults })` — tyhjentää tilan ja valinnaisesti
  rekisteröi oletukset uudelleen testien puhdasta eristämistä varten.

Molemmat suorittimet palauttavat arvon `{ blocked, payload|response, results, guardrail?, message? }`,
jossa `results` on `GuardrailExecutionResult`-tietueiden taulukko. Tietueet sisältävät
kunkin suojakaiteen `blocked`-, `skipped`-, `modified`-, `error`- ja `meta`-kentät,
joista on hyötyä jäljityksessä.

### Suojakaiteiden poistaminen käytöstä pyyntökohtaisesti

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` kokoaa
duplikaateista puhdistetun luettelon suojakaiteiden nimistä, jotka tulee ohittaa nykyisessä
pyynnössä. Lähteet (kaikki valinnaisia ja yhdistetään):

- `apiKeyInfo.disabledGuardrails`
- Pyynnön rungon `disabledGuardrails` (ylimmällä tasolla)
- Pyynnön rungon `metadata.disabledGuardrails`
- Otsake `x-omniroute-disabled-guardrails` (tai vanha
  `x-disabled-guardrails`)

Arvot voivat olla merkkijonotaulukoita tai pilkuilla eroteltu merkkijono; nimet
normalisoidaan pienikirjaimisiksi kebab-case-muotoon (`pii_masker` → `pii-masker`). Tulos
välitetään rekisterille `context.disabledGuardrails`-arvon kautta, jolloin rekisteri ohittaa
vastaavat suojakaiteet (`skipped: true` kohteessa `results`).

## Suoritusjärjestys

Jokaiselle pyynnölle, joka kulkee tiedostojen `src/sse/handlers/chat.ts` ja
`open-sse/handlers/chatCore.ts` kautta:

1. `resolveDisabledGuardrails(...)` muodostaa ohitusluettelon API-avaimen, pyynnön rungon
   ja otsakkeiden perusteella.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` suorittaa suojamekanismit nousevassa
   prioriteettijärjestyksessä:
   - Käytöstä poistetut suojamekanismit kirjataan tilaan `skipped`.
   - Kunkin suojamekanismin `preCall` voi kirjoittaa hyötykuorman uudelleen `modifiedPayload`-arvon avulla.
   - Ensimmäinen `block: true` keskeyttää ketjun, ja käsittelijä palauttaa
     suojamekanismin hylkäysvastauksen.
3. Mahdollisesti uudelleenkirjoitettu hyötykuorma siirtyy yhdistelmäreititykseen ja edelleen
   ylävirran käsittelyyn.
4. Kun vastaus on koottu, `guardrailRegistry.runPostCallHooks(...)`
   suorittaa saman ketjun vastaukselle. Tässä vaiheessa `block: true` hylkää ylävirran
   vastauksen.

Poikkeuksen aiheuttaneet suojamekanismit kirjataan muodossa `error: <message>` ja lokitetaan
`logger.warn`-kutsulla, mutta ketjun suoritus jatkuu — suunnitellusti salliva virhetilanteissa.

## Määritykset

Sisäänrakennettujen suojamekanismien lukemat ympäristömuuttujat:

| Muuttuja                              | Käyttäjä                | Vaikutus                                                                                                |
| ------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`      | Aseta arvoksi `false`, jos haluat poistaa tunnistuksen kokonaan käytöstä.                               |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`      | Injektiokäytäntö: `warn`, `block` tai `log`. Vanha arvo `redact` ei kirjoita injektiotekstiä uudelleen. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`      | Injektiosuojan tila; myös tietokannan ominaisuuslippu, joka **ohittaa** ympäristömuuttujat (DB > ENV).  |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`      | Vähimmäisvakavuus, jonka `MODE=block` hylkää: `high` (oletus), `medium` tai `low`.                      |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`      | Vanha alias muuttujalle `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                              |
| `PII_REDACTION_ENABLED`               | `pii-masker`            | Kun arvo on `true`, pyynnön henkilötiedot peitetään (injektiotilasta riippumatta).                      |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (alavirta) | Hallitsee vastauksen peittimen toimintaa.                                                               |

Modality Bridge -suojamekanismit lukevat ajonaikaiset määritykset tietokantapohjaisesta asetussäilöstä
(`getSettings()`), eivät ympäristömuuttujista. Kuvankäsittelyn ensisijaiset avaimet ovat
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` ja
`modalityBridgeCacheMaxEntries`. Vanhoja
`visionBridge*`-avaimia tuetaan vain dokumentoituna yhden julkaisusyklin lukemisen
vararatkaisuna; hallintapaneelin kirjoitukset käyttävät ensisijaisia avaimia. Oletusarvot ja vararatkaisun
selvitystoiminto sijaitsevat tiedostossa `src/shared/constants/modalityBridgeDefaults.ts`, ja vanhat
vakiot säilytetään tiedostossa `src/shared/constants/visionBridgeDefaults.ts`.

Ääni käyttää asetuksia `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` ja `modalityBridgeAudioMaxClips` sekä jaettuja
`modalityBridgeCache*`-asetuksia. Äänelle ei ole vanhojen avainten vararatkaisua, koska nämä
avaimet otettiin käyttöön Modality Bridge -skeeman yhteydessä.

Video käyttää asetuksia `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` ja
`modalityBridgeVideoTimeout` sekä jaettuja `modalityBridgeCache*`-asetuksia.
Se on oletusarvoisesti poissa käytöstä, koska FFmpeg/ffprobe ovat valinnaisia operatiivisia
riippuvuuksia ja kuvatekstien tuottaminen videoruuduille lisää viivettä ja mallin käyttökustannuksia.

## Mukautetut suojaukset

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

Vaiheet:

1. Luo `src/lib/guardrails/myGuardrail.ts`, joka laajentaa `BaseGuardrail`-luokkaa.
2. Toteuta `preCall` ja/tai `postCall`.
3. Rekisteröi joko tuonnin yhteydessä (lisää `registerDefaultGuardrails`-funktiosta) tai
   kutsu `guardrailRegistry.register(...)` suorituksen aikana — rekisteri korvaa
   kaikki aiemmat suojaukset, joilla on sama normalisoitu nimi.
4. Lisää testit hakemistoon `tests/unit/` (olemassa olevia esimerkkejä:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testaus

Käytä `resetGuardrailsForTests()`-funktiota testien välissä, jotta jokainen testi alkaa tunnetusta tilasta.
Anna `{ registerDefaults: false }`, jos haluat aloittaa tyhjällä rekisterillä ja
rekisteröidä vain testattavat suojaukset. Vision Bridge hyväksyy riippuvuuksien
injektoinnin (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge tarjoaa
vastaavat liityntäkohdat asetuksille, ominaisuuksille, STT-mallin valinnalle, tunnistetietojen
tarkistuksille ja litteroinnille. Testeillä voidaan siten testata kumpaakin työnkulkua ilman
tietokanta- tai verkkoyhteyttä.

## Katso myös

- `src/lib/guardrails/` — toteutus
- `src/shared/utils/inputSanitizer.ts` — jaettu tunnistin, jota käytetään
  kehoteinjektioiden havaitsemiseen ja henkilökohtaisten tunnistetietojen peittämiseen
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridgen oletusarvot ja
  pakotetun siltauksen malliluettelo
- `src/shared/constants/modalityBridgeDefaults.ts` — Vision/Audio-ajonaikaiset jaetut oletusarvot
- `docs/architecture/RESILIENCE_GUIDE.md` — erillinen kerros (piirikatkaisin, jäähdytysajat)
- `docs/reference/ENVIRONMENT.md` — täydellinen ympäristömuuttujien viite

## Injektiosuojauksen reittikattavuus ja red-team-testaus (vaihe 8 · lohko D)

Injektiosuojaus (`createInjectionGuard` / `withInjectionGuard`) kattaa kaikki reitit,
jotka hyväksyvät käyttäjän kehotteita. Se noudattaa `INJECTION_GUARD_MODE`-asetusta (oletus `warn` = vain kirjaus;
`block` = palauttaa HTTP 400 `SECURITY_001`).

| Tyyppi            | Reitit                                                                                                                                               | Oletustila |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Teksti (nykyinen) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn       |
| Generatiivinen    | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn       |
| Data              | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn       |

Tekstin poiminta (`extractMessageContents`) kattaa kentät `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team-testaus (öisin, `nightly-llm-security.yml`):** promptfoo varmistaa, että kukin reitti estää
OWASP-LLM-aineiston tilassa `INJECTION_GUARD_MODE=block`; garak suorittaa testit (ohitetaan ilman salaisuutta).
`moderations` sisältyy yhdenmukaisuuden vuoksi — estotilaa käyttävät ylläpitäjät voivat vapauttaa sen
`resolveDisabledGuardrails`-toiminnolla.

Öisin suoritettavassa työnkulussa (`.github/workflows/nightly-llm-security.yml`, cron + manuaalinen
käynnistys) on kaksi työtä:

- **`promptfoo-guard` (estävä)** — suorittaa komennon `promptfoo eval -c promptfooconfig.yaml`
  asetuksella `INJECTION_GUARD_MODE=block`. Kukin vihamielinen tapaus (esim. "ohita kaikki
  aiemmat ohjeet…", DAN-tyyliset suojauksen ohitukset) varmistaa, että vastaus sisältää
  arvon `error.code === "SECURITY_001"` eli että suojaus todella hylkäsi pyynnön.
- **`garak` (neuvoa-antava)** — suorittaa garakin asetuksella `--probes promptinject,dan,leakreplay`
  paikallista OmniRoute-instanssia (`http://localhost:20128/v1`) vasten. Suoritus riippuu
  palveluntarjoajan salaisuudesta (`PROMPTFOO_PROVIDER_KEY`); ilman sitä testi ohitetaan hallitusti, ja
  komentoon on lisätty loppuliite `|| true`, joten se raportoi tulokset aiheuttamatta CI-ajon epäonnistumista.

Suojausaputoiminnon (`createInjectionGuard` / `withInjectionGuard`)
kattavuus ulottuu kaikkiin kehotteita vastaanottaviin `/v1`-reitteihin; kehoteteksti poimitaan
kentistä `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`
`src/shared/utils/inputSanitizer.ts`-tiedoston `extractMessageContents()`-funktiolla.
