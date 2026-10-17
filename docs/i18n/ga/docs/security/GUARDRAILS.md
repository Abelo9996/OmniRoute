# Guardrails (Gaeilge)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Foinse na fírinne:** `src/lib/guardrails/`
> **Nuashonraithe is déanaí:** 2026-08-29 — v3.8.51 (Is é an glaoiteoir a dhearbhaíonn bunús thras-scríbhinn Video Bridge,
> níl sé fíoraithe ag an bhfreastalaí fós — soiléirithe de réir #11661)

Forfheidhmíonn ráillí cosanta sábháilteacht, polasaí, agus claochluithe ábhair ag an teorainn idir OmniRoute agus soláthraithe in aghaidh an tsrutha. Is féidir le gach ráille cosanta pálastaí iarratais (`preCall`) agus freagraí in aghaidh an tsrutha (`postCall`) a iniúchadh (agus, de rogha air sin, diúltú dóibh, iad a chlaochlú, nó nótaí a chur leo).

Is córas **teip-oscailte** é: má chaitheann ráille cosanta earráid le linn forghníomhaithe, déanann an chlárlann an earráid a thaifeadadh agus leanann sí ar aghaidh leis an gcéad ráille cosanta eile in ionad teip a chur ar an iarratas. Is cinneadh sainráite é blocáil (`block: true`), ní tharlaíonn sé de thaisme riamh.

## Cosaintí Insuite

Lódálann an chlárlann sé chosaint go huathoibríoch in ord tosaíochta tráth iompórtála
(féach `registry.ts` → `registerDefaultGuardrails()`):

| Tosaíocht | Ainm                | Céim(eanna)    | Comhad                |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Ritear uimhreacha tosaíochta níos ísle **ar dtús**.

### Droichead Amhairc (`visionBridge.ts`) — Droichead Módúlachta PR-1

Idircheapann sé iarratais ina bhfuil íomhánna agus atá dírithe ar **mhúnlaí gan
cumas amhairc**, agus déanann sé an t-iarratas iomlán a athródú chuig samhail a
bhfuil cumas amhairc aici nó cuireann sé tuairiscí téacs arna dtáirgeadh ag
samhail amhairc inchumraithe in ionad na gcodanna íomhá roimh an nglao réamhtheachtach.
Ligeann sé seo do sholáthraithe téacs amháin pálastaí ilmhódacha a láimhseáil
go trédhearcach.

Sreabhadh:

1. Léim thar seo má thacaíonn an spriocshamhail le hamharc cheana féin (mura
   bhfuil sí sa liosta droichid éigeantaigh `isVisionBridgeForcedModel`).
2. Bain codanna íomhá amach trí `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), a tharmligeann chuig an **mbraiteoir meán
   aontaithe** `detectMediaParts()` in `open-sse/utils/mediaParts.ts` — an
   fhoinse aonair fírinne a roinntear le scagaire comhoiriúnachta na gcomhcheangal.
   Tá an bhaint teoranta ag liosta ceadaithe do chodanna barrleibhéil de na cruthanna
   is féidir le `replaceImageParts` a chur ar ais ina n-áit (an conradh
   bain↔ionadaigh): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"`, agus Responses API
   `input_image`. Is ábhar do scagaire na gcomhcheangal iad amas neadaithe agus
   cruthanna táscaire amháin, agus ní bhaintear amach iad choíche.
   Léim thar seo mura n-aimsítear aon cheann.
3. Réitigh an chumraíocht am rite trí `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): bíonn forlámhas ag na
   heochracha socruithe nua `modalityBridge*`; fanann na heochracha oidhreachta
   `visionBridge*` mar **chúltaca aon timthrialla** (fuinneog aischuir). Léim thar
   seo roimh aon trasnú meán nuair atá an droichead díchumasaithe.
4. Cinneann an roghnóir móid (`modalityBridgeVisionMode`, féach an tábla thíos)
   idir athródú agus tuairisciú. Tugann athródú `modifiedPayload` ar ais agus gan
   ach `model` malartaithe, mar aon le meiteashonraí `{ rerouted, fromModel, toModel, imagesKept }`.
5. Conair an tuairiscithe: cuir teorainn `maxImages` le híomhánna, cum an leid
   atá feasach ar an tasc, téigh i gcomhairle le taisce na dtuairiscí, glaoigh ar
   an tsamhail amhairc **go comhthreomhar** (`Promise.allSettled`), agus insteall
   codanna téacs `[Image N]: <description>` ina n-áit. Tugann tuairisciú teipthe
   `null` agus **caomhnaítear** an bhunchuid íomhá (#4012) — ach amháin ar chonair
   tuairiscithe na gcomhcheangal nuair a theip ar gach tuairisciú, áit a bhfaigheann
   réamhtheachtaí deimhnithe gan cumas amhairc ionadaí
   `(unavailable — no vision-capable provider connected)` ina ionad (#8430).
6. Tabhair `modifiedPayload` + meiteashonraí (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) ar ais.

#### Roghnóir móid (`modalityBridgeVisionMode`)

| Mód        | Réamhshocrú | Iompar                                                                                                                                                                                                                                                                                                                                        |
| ---------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔           | Heorastúil oidhreachta, gan athrú (#6640/#7204): athródú samhlacha neamh-chomhcheangail/`auto/` chuig an tsamhail amhairc is fearr mura bhfuil dintiúir inúsáidte ag an mbunsamhail cheana féin (sa chás sin, déan cur síos); déan cur síos i gcónaí do spriocanna comhcheangail.                                                             |
| `describe` |             | Déan cur síos i gcónaí — léimtear thar an mbloc athródaithe go hiomlán; freagraíonn an tsamhail a roghnaigh an t-úsáideoir i gcónaí.                                                                                                                                                                                                          |
| `reroute`  |             | Cuir athródú i bhfeidhm: seachnaítear an chosaint a choinníonn an tsamhail a bhfuil dintiúir aici. Tá feidhm fós ag cosaint dintiúr **sprioc** an athródaithe — nuair nach ann do sprioc amhairc inúsáidte, téann an t-iarratas ar aghaidh chuig an tuairisciú ionas nach sroicheann íomhánna loma inneall cúil téacs amháin choíche (#8430). |

Déanann móid éigeantacha gearrchiorcadú **sula** ritear an heorastúil uathoibríoch;
tá iompar `auto` comhionann beart ar bheart leis an gcosaint roimh PR-1.

#### Scóip eochrach API (`visionBridgeKeyScope.ts`)

Nuair a chuireann eochair API an ghlaoiteora srian ar `allowedConnections`,
linnte cuóta (`allowedQuotas`) nó samhlacha (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), ní roghnaíonn an
droichead ach samhlacha athródaithe agus tuairiscithe a bhfuil cead ag an eochair
iad a úsáid, ar naisc a bhfuil cead ag an eochair iad a úsáid. Téann an glao
tuairiscithe tríd an bhféinlúb OmniRoute i gcónaí ansin leis an gceanntásc
`x-omniroute-self-loop-key-id`, ionas go bhforfheidhmíonn an t-iarratas comhrá
glactha polasaí na heochrach maidir le naisc agus samhlacha arís. Ní thugann
`enforceApiKeyPolicy()` aitheantas don cheanntásc sin ach amháin in éineacht
leis an gcomhartha iompróra féinlúibe, mar sin ní féidir leis ach rochtain a
chúngú, agus diúltaítear d'aitheantas nach féidir a réiteach.

Mura bhfuil aon samhail amhairc ceadaithe don eochair, seasann conair an
tuairiscithe ar leataobh agus téann an t-iarratas ar aghaidh gan athrú, arb é
an t-iompar teipe oscailte céanna é agus a bhíonn ag cosaint dhíchumasaithe
(meiteashonraí `{ skipped: true, reason: "no_permitted_vision_model" }`).
Iompraíonn iarratais gan eochair, agus eochracha gan na srianta seo, díreach mar
a d'iompair siad roimhe seo.

#### Leid tuairiscithe atá feasach ar an tasc (`modalityBridgeVisionTaskAware`)

Réamhshocrú **true**. Cuireann `composeVisionPrompt()` (`visionBridgeHelpers.ts`)
téacs **theachtaireacht dheireanach an úsáideora** (giorraithe go 500 carachtar) leis an
mbunleid tuairiscithe, rud a threoraíonn an tuairisc i dtreo an mhéid a d’iarr an
t-úsáideoir i ndáiríre (patrún codex-vision-proxy) agus a iarrann ar an tsamhail
amhairc téacs infheicthe a thras-scríobh. Agus an bhratach múchta — nó mura bhfuil
téacs úsáideora ann — úsáidtear an bhunleid gan athrú.

Iarrann iarratas OpenAI-chomhoiriúnach lúb féin na tuairisce
(`callVisionModelSingle()` in `visionBridgeHelpers.ts`) `image_url.detail: "high"`
i gcónaí — gan choinníoll, do gach glaoiteoir/soláthraí, gan é a bheith faoi réir
aon chomhartha ón gcliant. Laghdaíonn sampláil íseal-mhionsonraithe cruinneas OCR
don tasc tras-scríofa téacs go díreach a iarrann an leid seo, mar sin iarrann an
glao tuairiscithe féin ardleibhéal mionsonraí i gcónaí, beag beann ar an leibhéal
mionsonraí a d’úsáid an t-iarratas bunaidh isteach. Ní dhéanann sé seo difear ach
do chorp inmheánach an iarratais tuairiscithe; ní athraíonn sé an chaoi a
gcuireann OmniRoute `image_url.detail` an ghlaoiteora féin ar aghaidh ar an
bpríomhiarratas — cuirtear an réamhshocrú sin i bhfeidhm ar leithligh, agus do
chliaint OpenCode a braitheadh amháin, in `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`). Níl aon réimse `detail` i mbrainse
formáide sreinge Anthropic de lúb féin na tuairisce agus níl tionchar ag ceachtar
réamhshocrú air.

#### Uasteorainn aschuir na tuairisce (`modalityBridgeVisionMaxChars`)

| Eochair                        | Réamhshocrú | Raon             |
| ------------------------------ | ----------- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`         | `0` nó 100–50000 |

Ciallaíonn `0` (réamhshocrú) **gan uasteorainn** — cuirtear an tuairisc a
fhilleann `callVisionModel()` ar aghaidh gan athrú, rud a chaomhnaíonn an
t-iompar reatha. Giorraíonn aon luach sa raon 100–50000 an tuairisc le
hiarmhír `…` sula gcuirtear isteach arís í mar `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` in `src/lib/guardrails/visionBridge.ts`).
Ardaigh é seo le haghaidh tascanna OCR atá trom ar mhionsonraí, áit a bhfuil
an tras-scríobh iomlán de dhíth ar an tsamhail iartheachtach; ísligh é chun
teorainn a chur le húsáid comharthaí ar shamhlacha amhairc atá rófhoclach.
Tá réimse an deais ar phainéal Advanced sa chluaisín Vision
(`modality-bridge-max-chars` in `ModalityBridgeVisionTab.tsx`) agus teanntálann sé
aon luach idir 1 agus 99 suas go dtí an t-íosluach 100, agus fágann sé `0`
sainráite gan athrú — is luach bailí Zod ann féin é `0`
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), agus ní hé
amháin an réamhshocrú "unset" é.

#### Taisce tuairisce (`modalityBridge/bridgeCache.ts`)

Taisce LRU + TTL sa chuimhne d’aschuir tuairisce, comhroinnte ar fud an phróisis.
Eochair = `sha256(imageRef + composedPrompt + configuredBridgeModel)` le
frámú réimír faid (gan imbhuailtí ag teorainneacha réimsí). Is í an tsamhail
droichid **chumraithe** comhpháirt na samhla, ní an tsamhail a d’fhreagair i
ndáiríre — féadfaidh `callVisionModel` titim siar go hinmheánach, agus
dhéanfadh eochrú de réir iarrachta an taisce a ilroinnt. Ní chuirtear tuairiscí
teipthe sa taisce riamh. Socruithe:

| Eochair                         | Réamhshocrú | Raon    |
| ------------------------------- | ----------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`      | —       |
| `modalityBridgeCacheTtlMinutes` | `60`        | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`       | 10–5000 |

#### Normalú íomhánna cianda (tuairisciú lúibe féin/aisghabháil base64)

Nuair a aisghabhann an droichead íomhá **chianda** é féin — féinghlao tuairiscithe
Anthropic agus tiontú base64 na formáide sreinge claude
(`ensureBase64ImagesForClaudeWire`), iad araon trí
`fetchRemoteImageAsDataUri()` in `visionBridgeHelpers.ts` — cuirtear URI na
sonraí a eascraíonn as trí `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) sula leabaítear é san iarratas chuig an
tsamhail amhairc. Laghdaítear íomhánna rómhóra go **ciumhais fhada 2048px** (ag
teacht leis an uasteorainn athraithe méide a chuireann OpenAI/Anthropic i
bhfeidhm ar thaobh an fhreastalaí cheana féin), rud a laghdaíonn bearta/aga
folaigh uaslódála gan an méid a fheiceann an tsamhail amhairc a athrú. Úsáideann
an t-athrú méide `sharp`, a lódáiltear trí iompórtáil dhinimiciúil: ar ardán
nach n-éiríonn leis a dhénártha dúchasach a lódáil, **ní chaitheann**
`normalizeDataUri()` earráid riamh — titeann sé siar chuig beartáin bhunaidh a
chur ar aghaidh gan athrú, ionas go leanann an chonair tuairiscithe/tiontaithe
base64 de bheith ag obair i gcónaí. Cuirtear beartáin nach íomhánna iad (aisghabháil
nár thug íomhá dhíchódaithe ar ais) ar aghaidh gan athrú freisin. Tá an normalú
seo teoranta d’íomhánna a aisghabhann an droichead dá fhéinghlao féin — ní
chuirtear i bhfeidhm riamh é ar phálasta amh an ghlaoiteora a chuirtear ar
aghaidh gan athrú, i gcomhréir leis an bprionsabal um athrú roghnach amháin
(Hard Rule #20).

#### Scéimre socruithe + imirce

Déantar na heochracha nua `modalityBridge*` a bhailíochtú le Zod in
`updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`):
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, an triúr
`modalityBridgeCache*`, agus an grúpa `modalityBridgeAudio*` a úsáideann an
Droichead Fuaime. Cóipeálann an imirce `141_modality_bridge_settings.sql`
luachanna oidhreachta `visionBridge*` atá ann cheana chuig na heochracha nua
comhfhreagracha (idempotach, ní fhorscríobhann sí luach `modalityBridge*` a
shocraigh oibreoir riamh); glactar leis na heochracha oidhreachta fós mar
chúltaca léite ar feadh timthriall eisiúna amháin.

#### Ceanntásc trédhearcachta + staitisticí

Bíonn an méid seo a leanas ar fhreagraí a chlaochlaítear trí thuairisciú:
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(a thógann `buildModalityBridgeHeader()` in `modalityBridge/bridgeStats.ts`,
agus a stampálann `withModalityBridgeHeader()` in
`src/sse/handlers/chatHelpers.ts`). Ní fhaigheann iarratais a atreoraítear
**aon** cheanntásc — níor athraíodh an pálasta agus tá malartú na samhla le
feiceáil cheana féin i réimse `model` chorp an fhreagra.

Tugann `GET /api/modality-bridge/stats` (fíordheimhniú bainistíochta, an tsraith chéanna le
`GET /api/settings`) na cuntair in-chuimhne de réir módúlachta
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` ar ais le haghaidh `vision`, `audio`, agus
`video`. Úsáideann `averageLatencyMs` `latencySamples`, seachas gach iarracht, mar
ainmneoir; ní chruthaíonn oibríocht gan tomhas ama sampla bréige de náid
milleasoicind. Fanann `bridged` mar an t-ailias atá comhoiriúnach siar le haghaidh
tiontuithe rathúla; ní mhéadaíonn iarrachtaí teipthe é.
Athshocraítear na cuntair nuair a atosaítear an próiseas de réir dearaidh
(teiliméadracht, ní cuntasaíocht).

#### Cumraíocht an deais

Is é
`/dashboard/settings/modality-bridge` leathanach tiomnaithe an deais. Caomhnaíonn a chuid cluaisíní `Vision`, `Audio`,
agus `Video`, ar féidir aghaidh a thabhairt orthu trí URL, paraiméadair iarratais agus luach `tab` á athrú.
Cuireann cluaisín Vision cumasú, mód, roghnú samhla (lena n-áirítear an réamhshocrú
uathoibríoch), leideanna atá feasach ar thascanna, teorainneacha ardleibhéil maidir le ham istigh/íomhánna/fad
tuairisce/taisce, cuntair
ama rite, agus iarratas samplach faoi chosaint ar fáil. Tá cluaisín Audio beo freisin: cuireann sé
cumasú, roghnóir samhla STT-amháin le Auto, teorainneacha ama istigh/uasfhaid gearrthóige, cuntair
fuaime, agus tástáil shamplach `input_audio` ar fáil. Tá cluaisín Video feidhmiúil: tuairiscíonn sé
staid ama rite FFmpeg/ffprobe — ceann de cheithre staid shainráite chomhéadain (`unknown` fad atá
an tóireadóir ar siúl nó murarbh fhéidir é a chur i gcrích, `restricted` ar óstach deaise nach aisiompú
áitiúil é, áit a scipeáiltear an tóireadóir ar thaobh an chliaint, `unavailable` tar éis tóraíocht a dhéanamh
agus a dheimhniú go bhfuil sé ar iarraidh, nó `available` le leaganacha FFmpeg/ffprobe) — coimeádann sé
teorainneacha cumasaithe/samhla/fráma/físe/ama istigh, scagann sé roghnóir na samhlacha go samhlacha
atá ábalta fís a láimhseáil, agus cuireann sé cuntair físe ar fáil.

Is nasc comhoiriúnachta chuig an leathanach nua é an t-iarchárta Vision Bridge faoi shocruithe AI;
níl an dara cóip den fhoirm faoina chúram a thuilleadh. Nascann Media Providers sreafaí oibre
Image-to-Text agus Speech-to-Text leis na cluaisíní comhfhreagracha Modality Bridge freisin,
gan an clós súgartha Speech-to-Text atá ann cheana a bhaint.

**Seachaint iontrála féinlúibe:** nuair a chuirtear an glao tuairiscithe trí fhéinlúb
`/v1` OmniRoute (samhail neamhchaighdeánach soláthraí), seolann an fo-iarratas
`x-omniroute-admission-bypass: internal` agus fíordheimhnítear é leis an dintiúr
féinlúibe réitithe — an comhartha faire áitiúil `sk_omniroute` sa mhód áitiúil, nó eochair timpeallachta
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` atá cumraithe ag an oibreoir (#1350), ionas gur féidir
le himscaradh `REQUIRE_API_KEY=true` an glao tuairiscithe a rith fós. Ní ghlactar leis an seachaint
ach amháin do na dintiúir bheachta sin, mar sin ní féidir le cliaint sheachtracha an ceanntásc a úsáid
chun iontráil a sheachaint.

Tá na réamhshocruithe oidhreachta in `src/shared/constants/visionBridgeDefaults.ts`; tá
réamhshocruithe nua móid/feasachta ar thascanna/taisce agus réiteoir na socruithe in
`src/shared/constants/modalityBridgeDefaults.ts`. Cuireann an ráille cosanta rogha cruthaitheora
`deps` ar fáil ionas gur féidir le tástálacha feidhmiúcháin bhréige `getSettings` agus
`callVisionModel` a instealladh.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Idircheapann sé iarratais chomhrá ina bhfuil fuaim sula sroicheann siad sprioc nach eol
go nglacann sí le hionchur fuaime. Ní athródálann sé an t-iarratas comhrá choíche: déantar
tras-scríobh ar chodanna fuaime tríd an gcríochphointe ilchodach reatha atá comhoiriúnach le OpenAI,
agus leanann an tsamhail chomhrá roghnaithe ar aghaidh leis na tras-scríbhinní téacs.

Sreabhadh:

1. Réitigh `supportsAudio` trí `getResolvedModelCapabilities()`. Bíonn tosaíocht ag
   meiteashonraí sainráite chlárlann an tsoláthraí, ansin ag meiteashonraí statacha na samhla, agus ansin ag
   `modalities_input` sioncronaithe. Is é `false` liosta ionchuir fógartha gan `audio`; mura bhfuil aon
   fhianaise chumais ann, fanann sé mar `null`. Gníomhachtaíonn `false` agus `null` araon an droichead
   coimeádach, agus seachnaíonn `true` é.
2. Réitigh socruithe `modalityBridgeAudio*` agus bain codanna fuaime barrleibhéil
   is féidir a splicing as gach teachtaireacht tríd an mbrathadóir comhroinnte `detectMediaParts()`.
   Is iad na cruthanna sreinge a dtacaítear leo ná `input_audio`, `audio_url` OpenAI, agus
   `source.media_type: "audio/*"`. Braitear fuaim neadaithe le haghaidh ródaithe ach ní
   bhaintear í tríd an gcosán splicing. Cuirtear teorainn leis an obair le `modalityBridgeAudioMaxClips`;
   fágtar codanna ina dhiaidh sin gan athrú.
3. Tabhair aird ar `provider/model` cumraithe, nó lig do `selectAudioBridgeModel()` dul trí
   `AUDIO_TRANSCRIPTION_PROVIDERS` in ord cobhsaí na catalóige agus an chéad
   mhúnla a roghnú a bhfuil dintiúr soláthraí gníomhach inúsáidte aige.
4. Tiontaíonn `callAudioTranscription()` fuaim base64/data-URI ina `file` ilchodach,
   nó íoslódálann sé `audio_url` cianda tríd an ngarda amach poiblí amháin,
   le feannadh DNS agus teorainn 25 MB. Ansin POSTálann sé an comhad agus an tsamhail roghnaithe
   chuig an bhféinlúb áitiúil `/v1/audio/transcriptions`, arna fhíordheimhniú le
   `resolveSelfLoopBearer()`. Déanann an bealach tras-scríofa atá ann cheana gnáthchuardach
   dintiúir, láimhseáil tréimhse mhoillithe/teorannaithe ráta, agus seoladh chuig an soláthraí.
5. Cuireann glaonna rathúla `[Audio N]: <transcript>` in ionad a gcodanna. Ritheann
   glaonna le `Promise.allSettled`: caomhnaíonn teip aonair an chuid fuaime bhunaidh sin
   (conradh #4012). Má theipeann ar gach glao agus má tá sé cruthaithe gur
   `supportsAudio === false` atá sa sprioc, déantar
   `[Audio N]: (unavailable — no STT provider connected)` de na codanna (conradh #8430). I gcás
   sprioc anaithnid (`null`), fágtar toradh ina dteipeann ar gach glao gan athrú. Faigheann
   sprioc atá cruthaithe a bheith téacsamháin agus nach bhfuil dintiúr STT inúsáidte aici an mhír ionaid
   shainráite chéanna gan glao líonra a dhéanamh.

Úsáideann tras-scríbhinní rathúla taisce LRU/TTL Modality Bridge atá ar fud an phróisis. Cuireann
an eochair an tagairt fuaime, lipéad cobhsaí na hoibríochta `audio-transcription`,
agus an tsamhail STT roghnaithe le chéile; ní chuirtear teipeanna i dtaisce choíche. Nuashonraíonn
iarrachtaí fuaime na cuntair chomhroinnte `bridged`, `cacheHits`, `failures`, agus `lastUsedAt`.
Bíonn
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` ar fhreagraí claochlaithe;
ní fhaigheann iarratais gan athrú mír Audio Bridge.

Tá socruithe ama rite á stóráil sa bhunachar sonraí agus á mbailíochtú le Zod:

| Eochair                       | Réamhshocrú | Raon                   |
| ----------------------------- | ----------- | ---------------------- |
| `modalityBridgeAudioEnabled`  | `true`      | —                      |
| `modalityBridgeAudioModel`    | `""`        | Uathoibríoch nó ID STT |
| `modalityBridgeAudioTimeout`  | `60000`     | 1000–300000            |
| `modalityBridgeAudioMaxClips` | `3`         | 1–10                   |

Tá an taisce chomhroinnte fós á rialú ag `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, agus `modalityBridgeCacheMaxEntries`.

### Droichead Físe (`videoBridge.ts`, `videoBridgePipeline.ts`)

Idircheapann sé páirteanna físe barrleibhéil i `messages` Chat Completions agus in
`input` API Responses sula nglaoitear ar sprioc nach eol go bhfuil tacaíocht
dhúchasach físe aici. Is iad na cruthanna a dtacaítear leo ná `input_video`,
`video_url`, `video_source`, URLanna HTTPS, agus URIanna sonraí
`data:video/*;base64,...`. Ní chaitear le hainmneacha simplí comhad i dtéacs mar
fhíseáin.

Is le `VideoBridgeGuardrail.preCall` (`videoBridge.ts`) trasnú na hiarrata, an
tseiceáil cumais/beartais, comhiomlánú de réir iarrata, agus pálasta an fhreagra.
Tá obair gach físeáin — sealbhú, taisce an toraidh iomláin, cur síos ar sheicheamh
frámaí (a chumascann aon tras-scríbhinn fuaime a dhearbhaigh an glaoiteoir), agus
méadrachtaí/tobscoradh/glanadh de réir iarrachta — i bhfolach taobh thiar de
`processVideoPart` in `videoBridgePipeline.ts`, a ghlaoitear air uair amháin do
gach páirt físe laistigh de lúb `preCall`. Sainíonn an modúl sin freisin teorainneacha
soiléire na bport `VideoMediaBrokerPort` (bearta a fháil agus frámaí sampláilte
a asbhaint), `VideoAudioTranscriptionPort` (tras-scríbhinn fuaime a dhearbhaigh
an glaoiteoir a chumasc leis na fotheidil shampláilte), agus
`VideoDrilldownPort` (teorainn bhuanseasmhachta an mhiondealaithe frámaí; níl sí
sreangaithe isteach in `processVideoPart` fós — ní scríobhann ach an bealach
ar leith `/api/modality-bridge/video/drilldown` iontrálacha miondealaithe faoi láthair).

Ní iompórtálann ná ní agraíonn cosán poiblí iarrata `/v1` fophróiseas riamh.
Íoslódáiltear físeáin chianda faoi theorainn 50 MiB; tá uasteorainn choimeádach
36 MiB ar mhéid díchódaithe gach físeáin base64 inlíne ionas gur féidir leis an
gclúdach samhla/teachtaireachtaí/frámála fanacht laistigh den teorainn iontrála
50 MiB d'iarrataí poiblí JSON. Seiceáiltear fad inlíne agus meastacháin ar mhéid
díchódaithe roimh leithdháileadh. Tá HTTPS riachtanach ar an URL cianda tosaigh
agus ar gach atreorú, agus úsáidtear an garda amachach poiblí amháin atá ann
cheana le feannadh DNS. Ansin trasnaíonn na bearta an teorainn bheacht inmheánach
bróicéara `POST /api/modality-bridge/video/extract`. Tá an bealach sin
`LOCAL_ONLY` agus `SPAWN_CAPABLE` araon, ní ghlacann sé ach le hiarraidh
fhíordheimhnithe de réir próisis ar aisfhillteán iontaofa, agus ní ghlacann sé
riamh le URL, cosán córais comhad, comhad inrite, ná liosta argóintí. Cuireann
píblíne mhéid choirp an API agus léitheoir incriminteach coirp an láimhseálaí
uasteorainn 50 MiB ar ionchur an bhróicéara i bhfeidhm go neamhspleách. Ritheann
a chiú teoranta asbhaint amháin ag an am, ceadaíonn sé ceithre jab ar feitheamh,
agus cuireann sé uasteorainn 100 MiB ar ionchur ar feitheamh.

Laistigh den bhróicéir, léann `ffprobe` comhad logánta príobháideach; fágann an
liosta seasta formáidí ceadaithe formáidí seinnliosta agus lastliosta ar lár. I
gcás coimeádán ceadaithe de theaghlach MOV, fanann tagairtí seachtracha sonraí
MOV díchumasaithe de réir réamhshocraithe, agus ní chumasaíonn an t-ordú seasta
iad. Úsáideann `ffprobe` agus `ffmpeg` araon liosta ceadaithe prótacal ina bhfuil
`file` amháin, snáithe amháin, eagair sheasta argóintí, gan bhlaosc, agus comhaid
inrite arna réiteach ó `PATH`. Ní iarrthóirí inseinnte iad sruthanna pictiúir
clúdaigh atá ceangailte. Ní mór do gach sruth inseinnte na teorainneacha a
shásamh, agus tugtar tús áite do shruth réamhshocraithe follasach roimh an gcúltaca
cinntitheach leis an innéacs is ísle. Tá físeáin teoranta do 600 soicind, 8,192
picteilín in aghaidh na toise, agus 33,554,432 picteilín foinseach. Samplálann
FFmpeg 1–16 fhráma JPEG ag lárphointí, laghdaíonn sé an chiumhais fhada go 1,024
picteilín ar a mhéad gan ionchuir níos lú a mhéadú, agus ní fhaigheann sé URL
riamh. Is é `uniform` an sampláil de réir réamhshocraithe. Déanann na beartais
roghnacha `scene_aware` agus `segment_aware` turgnamhach pas seasta breise amháin
de chuid FFmpeg thar an sruth logánta atá bailíochtaithe cheana, roghnaíonn siad
stampaí ama teoranta radhairc `showinfo`, agus téann siad siar go cinntitheach
chuig na lárphointí aonfhoirmeacha céanna ar theip ar an mbrathadóir, ar
amsciorradh, ar aschur míchumtha, nó ar thacar folamh iarrthóirí. Leithdháileann
mód atá feasach ar dheighleoga samplaí lárphointe i gcomhréir leis na heatraimh
bhailíochtaithe radhairc; sonraítear thíos fianaise atá feasach ar dheighleoga
agus iompar cúltaca. Cuirtear an uasteorainn dhocht 16 fhráma i bhfeidhm tar éis
an roghnúcháin i ngach beartas. Nuair nach mbíonn ach buiséad aon fhráma amháin
ag iarraidh atá feasach ar radhairc, úsáideann sé lárphointe aonfhoirmeach na
fuinneoige gníomhaí lánfhíseáin nó fócais agus tuairiscíonn sé
`policyEffective: uniform`: ní féidir le fráma radhairc aonair roghnaithe an dá
cheann ama a chaomhnú. Féadfaidh glaoiteoir fuinneog fhócais chríochta a
sholáthar go roghnach (`start`/`end` i soicindí); teanntar teorainneacha le fad
na meán, diúltaítear d'fhuinneoga droim ar ais nó neamhchríochta, agus ní dhéantar
gach beartas samplála ach laistigh den eatramh normalaithe. Cuirtear an fhuinneog
a bhíonn mar thoradh air san áireamh i meiteashonraí samplála agus i réimír na
tuairisce neamhiontaofa ionas gur féidir le samhlacha iartheachtacha sliocht
dírithe a idirdhealú ón amlíne iomlán.

Is socrú sainráite ar leith é fócas séimeantach fotheideal. Caomhnaíonn an mód
anailíse réamhshocraithe `full` an leid fráma atá ann cheana agus ní chuireann sé
téacs iarrata ar aghaidh chuig samhail na bhfotheideal riamh. Sa mhód `focused`,
ní léann an droichead ach an `text`/`input_text` neamhfholamh is déanaí a scríobh
úsáideoir ón gcoimeádán céanna Chat nó Responses, normalaíonn sé é go NFC,
comhthiomsaíonn sé carachtair rialaithe agus spás bán, agus cuireann sé teorainn
500 códphointe Unicode air. Má bhíonn an toradh folamh, téitear siar go dtí an
leid bheacht `full`. Srathaítear leid inúsáidte mar JSON i mbloc tiomnaithe
comhthéacs neamhiontaofa úsáideora agus ní fhéadfaidh sí ach tosaíocht a thabhairt
do mhionsonraí inbhraite; ní féidir léi an rabhadh ar leith gan treoracha atá
infheicthe nó inchloiste sna meáin a leanúint a shárú. Ní dhéanann fócas téacsúil
tátal ar `start`/`end` riamh ná ní athraíonn sé an samplóir ama.

#### Fianaise struchtúrach deighleog FU-07

Úsáideann `segment_aware` pas réamh-anailíse teoranta amháin thar an sruth físeáin
áitiúil atá bailíochtaithe cheana féin. Déanann an slabhra seasta scagairí an físeán
a scálú ar dtús go 320 picteilín ar leithead ar a mhéad, braitheann sé athruithe
radhairc agus eatraimh reoite, agus ansin glacann sé sampla amháin in aghaidh na
soicindí chun doiléireacht, meánlúma, agus faisnéis spásúil/ama a mheas. Tá an pas
teoranta do 600 sampla struchtúrach, snáithe FFmpeg/scagaire amháin, na liostaí
ceada céanna do choimeádáin agus don phrótacal `file` amháin, teorainn 1 MiB ar
aschur próisis, agus 30 soicind ar a mhéad laistigh de theorainn ama chomhroinnte
cealaithe/sprioc-ama an bhróicéara. Ní ghlacann sé riamh le hordú, scagaire,
cosán ná URL ón iarratas.

Is fianaise samplála chinntitheach iad na luachanna struchtúracha, ní tuiscint
shéimeantach ar fhíseán. Ní dhéanann siad tátal faoi ábhair, gníomhartha,
fotheidil, caint ná rún an úsáideora. Cruthaíonn teorainneacha radhairc agus reoite
míreanna; ní imríonn clúdach reoite, doiléireacht, nochtadh, mionsonraí spásúla,
agus athrú ama tionchar ach ar an gcaoi a leithdháiltear an buiséad reatha de
1–16 fráma. Cuirtear uasteorainn fráma amháin ar mhír atá reoite go hiomlán,
agus téann míreanna neamhreoite in iomaíocht don chuid eile den bhuiséad. Nuair
is mó líon na dteorainneacha ná líon na bhfrámaí, coinnítear clúdach aonfhoirmeach
ar an amlíne ionas nach féidir le gearrthacha tapa luatha mír fhada dheiridh a
cheilt. Cumaisctear teorainneacha radhairc atá laistigh de thaifeach anailíse
1 soicind ó theorainn reoite.

Má bhíonn scagairí ar iarraidh, fianaise mhíchumtha/fholamh, earráid bhrathadóra,
nó teorainn ama na réamh-anailíse teoranta ann, teipeann an córas go hoscailte
chuig an mbeartas cruinn aonfhoirmeach lárphointe. Ní theipeann cealú ón nglaoiteoir
ná sprioc-am an bhróicéara go hoscailte: foirceannann sé an fophróiseas atá ar
siúl, cuireann sé cosc ar eastóscadh frámaí ina dhiaidh sin, agus baintear an
crann sealadach príobháideach in `finally`.

Gineann `scripts/perf/video-bridge-fu07-eval.ts` daingneáin fhíor-chinntitheacha
FFmpeg le haghaidh coigilteas glaonna fotheidealaithe tar éis dí-dhúblála,
leithdháileadh buiséid do dhlúthghluaiseacht, fianaise doiléireachta/nochtaithe/SI-TI,
gearrthacha tapa le heireaball fada, agus torthaí deimhneacha bréagacha ó
chéimniú de réir a chéile. Taifeadann sé am balla na réamh-anailíse agus, nuair
atá `/usr/bin/time` ar fáil, LAP an phróisis sliochtach agus buaic-RSS. Is tairngirí
struchtúracha amháin iad a sheiceálacha cáilíochta. Fanann cáilíocht an fhíorshamhail
fhotheidealaithe mar `HOLD` toisc nach bhfuil críochphointe údaraithe ná moltóir
reoite ag an gcreat tástála seo. Fanann coigilteas airgeadaíochta mar `HOLD`
freisin mura soláthraíonn `--caption-cost-per-call-usd` meastachán dearfach
sainráite ar chostas in aghaidh an ghlao; ní chumann an script ceachtar toradh.

Tá gach fráma teoranta do 4 MiB, na hamhfhrámaí go léir le chéile do 23 MiB,
agus freagra srathaithe an bhróicéara do 32 MiB. Baintear eolaire sealadach
príobháideach in `finally`. Ní chuireann OmniRoute FFmpeg san áireamh sa bheart
agus ní ghlacann sé le cosán saincheaptha inrite. Sula ndéantar fotheidealú,
cuireann an droichead pas coimeádach dí-dhúblála amhairc i bhfeidhm: laghdaítear
gach JPEG go maolán liathscála 16×16 agus ní chuirtear i gcomparáid é ach leis
an bhfráma deireanach a coinníodh. I gcás buiséad fotheidealaithe iarrtha os
cionn fráma amháin, soláthraíonn an t-eastóscadh comhthiomsú teoranta iarrthóirí
suas le dhá oiread an bhuiséid sin agus gan dul thar 16 fráma riamh. Ní chuirtear
an uasteorainn iarrtha i bhfeidhm go dtí tar éis dí-dhúblála, agus caomhnaítear
an chéad iarrthóir agus an t-iarrthóir deiridh roghnaithe le linn an tanaithe
deiridh nuair atá an buiséad cothrom le dhá cheann ar a laghad. Úsáideann an
beartas leaganaithe `grayscale-16x16-mean-cells-v2` an ceann is mó de dheilt
mheánlúma agus cóimheas na gceall mionsamhlacha a bhfuil a ndeilt normalaithe
cothrom le 0.05 ar a laghad. Is é an tairseach dúblach an tairiseach 0.04, a
roghnaíodh ar mhaithe le hintuarthacht seachas é a nochtadh mar shocrú ag am
rite. Caomhnaíonn an comhartha tánaisteach ardchodarsnachta seo mionghluaiseacht
agus athruithe ar théacs infheicthe a d'fhéadfadh comparáid mheán-amháin a cheilt.
Má bhíonn earráidí comparáideora nó díchódóra ann, teipeann siad go hoscailte
agus coinnítear an clúdach. Scarann meiteashonraí aschuir na hiarrthóirí
eastósctha, na frámaí a úsáideadh go rathúil, agus na dúblaigh amhairc a fágadh ar lár.

Féadfaidh cuid físeáin atá marcáilte go sainráite bileog theagmhála le stampaí
ama a iarraidh. Tógann an droichead greille JPEG de 4 cholún agus 16 fráma ar
a mhéad. Dóitear stampa ama foinseach gach cille 512 picteilín isteach i mbanda
bun ardchodarsnachta, agus fanann na stampaí ama céanna i meiteashonraí téacsúla
le haghaidh ceangail agus iniúchta iartheachtaigh. Fanann an JPEG iomlán teoranta
do 32 MiB. Mura féidir le `sharp` an ghreille a dhíchódú nó a chumadh, filleann
an droichead ar na frámaí aonair JPEG; iomadaítear cealú cliaint fós tríd an
oibríocht bileoige.

Coinnítear fianaise ardaithe céime scartha d'aon ghnó ón micreathagarmharc
sintéiseach cumadóireachta. Sainmhíníonn
`scripts/perf/video-bridge-contact-sheet-eval.ts` creat tástála A/B le leagan
scéime do shamhlacha físe OpenAI-chomhoiriúnacha. Tomhaiseann sé comharthaí arna
dtuairisciú ag an soláthraí, aga folaigh balla ó cheann ceann (lena n-áirítear
cumadóireacht na bileoige), líon glaonna na samhla, agus coinneáil fíricí arna
sainiú sa lastliosta. Ní scríobhtar freagraí amha na samhla chuig an tuairisc;
ní choinnítear ach achoimrí SHA-256 agus IDanna fíricí comhoiriúnaithe. Ní dhéanann
an creat tástála aon ghlao líonra ná glao ar shamhail íoctha mura gcuirtear
`--execute-real` ar aghaidh agus mura bhfuil `--model`, `OMNIROUTE_BASE_URL`,
agus `OMNIROUTE_API_KEY` cumraithe. Gan an rith fíor sainráite sin, fanann a
bhreithiúnas meaisín-inléite mar `HOLD`; ní fianaise ardaithe céime iad tomhais
shintéiseacha pálóide/líon glaonna amháin.

Féadfaidh glaoiteoirí eagar roghnach `transcript.cues` a cheangal le cuid físeáin
a dtacaítear léi nuair atá téacs ailínithe acu cheana féin. Ní mór do gach leid
`text` a iompar, eatramh críochta `start`/`end` laistigh den achar ama taiscéalaithe,
agus `source` ar an liosta ceada (`client`, `embedded`, nó `audio-bridge`);
is é `1` réamhshocrú `confidence` agus ní mór dó fanacht idir `0` agus `1`.
Cumaisctear leideanna atá go díreach mar an gcéanna. Ní thosaíonn OmniRoute
tras-scríobh riamh ó na meiteashonraí seo: cóipeáiltear leideanna bailíochtaithe
isteach sa toradh tuairiscithe lena bhfoinse, lena muinín agus lena n-eatramh,
agus rindreáiltear iad mar bhreathnuithe neamhiontaofa taobh le fotheidil na
bhfrámaí. Diúltaítear do théacs neamhbhailí, as raon, nó gan bhunáitíocht seachas
é a mheascadh isteach sa sruth fotheidealaithe. Normalaíonn an dá chainéal
tras-scríbhinne i gcorp an iarratais bunáitíocht sholáthraithe go `client`, lena
n-áirítear lipéid fhéindearbhaithe `embedded` nó `audio-bridge`. Ní féidir ach
le hoiriúntóir faoi úinéireacht an fhreastalaí na lipéid iontaofa sin a shannadh
tríd an argóint cód-amháin `trustedSource`; ní féidir le réimse JSON iarratais
an argóint sin a bhaint amach. Fanann téacs tras-scríbhinne ina ábhar neamhiontaofa
a dhíorthaítear ó mheáin, beag beann ar a bhunáitíocht, agus ní ceadmhach dó
údarú a chinneadh riamh.

Féadfaidh glaoiteoir ardleibhéil rian `audioTranscript` a sholáthar don fhíseán céanna;
caitear leis mar théacs arna sholáthar ag an gcliant, ní mar chruthúnas ar thras-scríobh ón bhfreastalaí.
Ritheann an séam comhleáite breathnuithe amhairc agus fuaime faoi
sprioc-am amháin agus comhartha tobscortha amháin, cuireann sé in ord iad ar amlíne choiteann, cónascann sé
dúblaigh atá díreach mar an gcéanna, agus tuairiscíonn sé toradh páirteach nuair nach n-éiríonn ach le taobh amháin.
Má tá `audioTranscript` neamhbhailí, íslítear é go dtí an toradh páirteach sin — coinnítear an cur síos
amhairc agus taifeadann an brainse fuaime cód teipe sláintithe —
in ionad an físeán iomlán a chur ó mhaith. Caomhnaítear infhaighteacht gach brainse, an bhratach pháirteach,
agus na cóid teipe sláintithe sa toradh a gcuirtear síos air, i
meiteashonraí an ráille cosanta (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), i meiteashonraí thaisce na dtorthaí, agus i gcuntair
chomhleáite an droichid. Ní dhéanann conair réamhshocraithe Video Bridge urlabhra-go-téacs a agairt
ná an dara cóip de na meáin a íoslódáil; gan an rian sainráite sin, fanann sí
ina conair físeáin amháin.

**Coinneáil tras-scríbhinne (#12150 P1).** Cuirtear é seo i bhfeidhm go huathoibríoch aon uair a
rindreálann Video Bridge (atá féin roghnach) leid tras-scríbhinne — níl aon bhratach
choinneála ar leith ann. Nuair a rindreálann iarratas leid tras-scríbhinne ar bith (`transcript` arna dhearbhú
ag glaoiteoir nó `audioTranscript` comhleáite), marcálann an ráille cosanta é mar
`videoBridgeObserved` agus táirgeann sé scáth folaithe den chur síos físeáin —
rindreáil chomhionann ina gcuirtear
`[redacted-video-transcript]` in ionad chorp saorthéacs gach leide, a chruthaítear trí ionadú a dhéanamh ar an réimse struchtúrtha
leide sula gcóimeáiltear an teaghrán (ní dhéantar é riamh tríd an téacs leacaithe a pharsáil, ionas nach féidir le haon ábhar
leide — bíodh sé sáraíochta nó coitianta, lena n-áirítear coirp ina bhfuil `]` amhail
`[inaudible]`/`[music]` — teacht slán). Cuireann corp iarratais marthanach loga na nglaonna
an scáth folaithe sin in ionad gach páirte téacs a díorthaíodh ón bhfíseán, agus iad meaitseáilte de réir comhionannas
ábhair; athléitear an t-ancaire `fullText` ó phálasta críochnaithe an ráille cosanta réamhghlao,
ionas go n-éiríonn leis an meaitseáil fós tar éis do ráillí cosanta slabhra níos déanaí (na cumhdóirí PII agus
dintiúr, tosaíochtaí 10/95) téacs an chur síos a athscríobh ina áit féin agus
tar éis d'instealladh leid an chórais/aistrithe/comhthéacs Cuimhne an t-eagar teachtaireachtaí a athmhúnlú. Ní athraítear an
corp a sheoltar réamhtheachtach chuig an tsamhail. Ní chuireann iarratas breathnaithe aon
Chuimhne mharthanach ar fáil ach oiread (scipeáiltear eastóscadh ón iarratas agus ón bhfreagra araon),
mar sin ní féidir le freagra na samhla féin téacs na tras-scríbhinne a mhacasamhlú isteach sa Chuimhne.

**Réimsí físe amh (#12430).** Nuair atá an droichead cumasaithe agus nuair atá tacaíocht dhúchasach físe anaithnid nó in easnamh, gníomhaíonn réimsí sainithe `transcript`/`audioTranscript` `videoBridgeObserved` freisin, fiú tar éis teip sa chur síos nó teorainn `maxVideos`. Áirítear `null` agus teaghráin fholmha; ní áirítear réimsí as láthair ná meiteashonraí nach mbaineann le físeán. Déanann cóipeanna coinnithe na réimsí seo a fholú nó fágann siad an t-iarratas ar lár, agus seachnaítear taiscí/Cuimhne.

Ar na conairí cúltaca sin, déantar páirteanna tacaithe `text`/`input_text` de leideanna bailí ón nglaoiteoir
seachas réimsí neamhchaighdeánacha soláthraí. Fanann an dá rian arna soláthar leis an iarratas
ina mbreathnuithe `client` neamhiontaofa, le rabhadh sainráite nár cuireadh síos ar an bhfíseán
agus nár fíoraíodh stampaí ama in aghaidh na meán. Baineann na buiséid reatha
256 leid/64 KiB san iomlán agus in aghaidh na leide leis an dá rian le chéile;
ní mór do stampaí ama luí laistigh d'uasteorainn 600 soicind an bhróicéara agus aon fhuinneog fócais
a sholáthraítear. Caitear rianta neamhbhailí i leataobh; ní chuirtear ar aghaidh iad mar théacs treallach; féadfar
siblín bailí a úsáid fós mura sáraítear a mbuiséad comhcheangailte. Ní chuireann réimsí `null`/folmha
aon téacs leis. Ní chuirtear aon aisghabháil meán ná tras-scríobh leis an gcúltaca seo.
Baintear réimsí sínte na tras-scríbhinne den iompróir físe cúltaca agus dá réada
`video_url`/`source`. Fanann liosta ceada sreinge OpenAI docht; fanann iompróirí físe
nach eol a bheith dúchasach ar fáil agus coinníonn spriocanna téacs-amháin aitheanta marcóirí sábháilte.
Cosnaíonn scáthanna folaithe struchtúrtha téacs na tras-scríbhinne a cuireadh leis, agus fanann an
t-iarratas bunaidh faoi úinéireacht an ghlaoiteora gan athrú. Coinníonn spriocanna a dtacaítear leo go dúchasach agus
droichid dhíchumasaithe an t-iompar seachanta atá acu cheana féin.

Úsáideann cóipeanna coinnithe breise an comhartha iarratais bhreathnaithe céanna. Déanann an seat amh
d'iarratas an chliaint roimh an ráille cosanta, an t-iarratas ar feitheamh sa chuimhne, agus loga luath
an iarratais dhiúltaithe réimsí tras-scríbhinne i bpáirteanna físe a ionadú go struchtúrtha;
foluítear leideanna teaghráin arna sintéisiú ag céimeanna píblíne agus ag aistriú comhthéacs
ag doirteal chorp an iarratais mharthanaigh. Cuireann an marcóir marthanach `video_content_removed`
ar `previous_response_id` leanúint ar aghaidh agus teip dúnta seachas téacs a athchruthú
a caitheadh i leataobh d'aon ghnó. Má chailleann iarratas breathnaithe a
scáth folaithe in aghaidh na páirte sula logáiltear é, nó mura n-éiríonn le fiú ceann amháin de roinnt scáthanna físe
meaitseáil tar éis athruithe níos déanaí ar an iarratas, fágtar corp an iarratais choinnithe
ar lár go hiomlán in ionad tras-scríbhinn nach bhfuil ach cuid di folaithe a choinneáil.

I gcás iarratais bhreathnaithe, d'fhéadfadh freagra samhla aon chuid den
tras-scríbhinn a lua gan teorainn struchtúrtha leide. Dá bhrí sin, cuirtear
marcóir fágála ar lár in ionad `responseBody` marthanach loga na nglaonna; ní choinnítear
déantán mionsonraithe na píblíne (a bhféadfadh coirp réamhtheachtacha/cliaint agus smutáin srutha a bheith ann).
Seachnaíonn taiscí séimeantacha, idémpótachta agus athsheinnte réasúnaíochta
léamha agus scríbhinní don iarratas sin. Fanann iarratas an tsoláthraí agus an freagra
infheicthe don chliant gan athrú. Draenáiltear bearta keepalive luatha ón maolán sealadach
nuair a fhágtar an déantán mionsonraithe ar lár. Ní thuairiscíonn rabhadh Kiro faoi EventStream míchumtha
ach líon beart an phálasta, agus ní thuairiscíonn sé a inneachar ná amh-earráid an pharsálaí JSON riamh.
Ní mhaíonn sé seo go ndearnadh iniúchadh ar gach diagnóisic sholáthraí/breiseáin nach mbaineann leis;
rianaítear an scuabadh níos leithne ar dhoirtil choinnithe in #11658.

Is fostruchtúr taisce ar leith é saolré inmheánach `/api/modality-bridge/video/drilldown`, atá fíordheimhnithe trí lúb-ais/ticéad. Éilíonn gach oibríocht ID canónach teimhneach príomhaí freisin. Sula gcumasaítear glaoiteoir táirgthe, ní mór dó an ID sin a dhíorthú ón tionónta fíordheimhnithe agus ní ceadmhach dó luach arna roghnú ag cliant a chur ar aghaidh choíche. Ceanglaíonn eochracha taisce an príomhaí sin le haitheantais chanónacha seisiúin agus tagartha físeáin, ní stórálann siad ach a n-eochracha díorthaithe ó SHA-256, agus cuireann siad léamha agus scriosadh araon faoi raon an phríomhaí chéanna. Stórálann an taisce 16 fhráma JPEG dhíorthaithe ar a mhéad in aghaidh na hiontrála, cuireann sí in éag iad tar éis deich nóiméad, agus tacaíonn sí le léamha teorannaithe `start`/`end` nó le scriosadh sainráite seisiúin.

Tá gach príomhaí teoranta do 16 iontráil agus 64 MiB de shonraí canónacha JPEG. Tá na teorainneacha sin neamhspleách ar an uasteorainn dhomhanda de 64 iontráil/256 MiB: faoi bhrú cuóta príomhaí, díshealbhaítear ar dtús na hiontrálacha is lú a úsáideadh le déanaí de chuid an phríomhaí sin amháin sula mbreithnítear díshealbhú domhanda LRU. Glantar iontrálacha atá imithe in éag ó chuntasaíocht an phríomhaí agus ón gcuntasaíocht dhomhanda araon le linn gníomhaíocht taisce, agus ní dheimhníonn cealú ná teip bhailíochtaithe athsholáthar páirteach.

Diúltaíonn an taisce do Base64 neamhchanónach, stuáil iomarcach, meáin nach JPEG iad, JPEGanna míchumtha nó teasctha, agus JPEGanna a tháirgeann rabhadh le linn díchódú teorannaithe láníomhá `sharp`. Ath-ionchódaíonn sí gach íomhá a nglactar léi mar JPEG canónach, díorthaíonn sí an leithead agus an airde ó na bearta díchódaithe seachas muinín a chur i réimsí an ghlaoiteora, agus caitheann sí aon bhearta ilchineálacha deiridh i leataobh seachas iad a choinneáil. Ní ghearrtar ach an maolán comhbhrúite canónach teorannaithe ar an dá chuóta. Áirítear leis an teorainn sreinge JSON forchostas Base64 don uasteorainn ionchuir dhíchódaithe 32 MiB. Taifeadann gach díorthú stóráilte a fhormáid/taifeach JPEG bailíochtaithe, a bheartas samplála, a leagan díorthaithe, a am cruthaithe, hais inneachair arna ríomh ag an bhfreastalaí, agus tagairt tuismitheora haiseáilte mar aon le hais inneachair tuismitheora an ghlaoiteora iontaofa. Seiceáiltear cealú idir céimeanna asincrónacha díchódaithe/haiseála roimh an deimhniú adamhach sa taisce.

Ní nascann an chuid seo táirgeoir táirgthe leis an mbealach go fóill agus ní sholáthraíonn sí roghnú malairtí iltaifigh. Dá bhrí sin, ní chuireann conair iarratais thrédhearcach Video Bridge aon obair bhreise i gceist, agus fanann díorthú príomhaí atá ceangailte leis an tionónta agus saolré iomlán iltaifigh FU-08 mar obair leantach shainráite seachas iad a bheith doiciméadaithe mar iompar iomlán.

Cuirtear fotheidil leis na frámaí go seicheamhach leis an tsamhail Video chumraithe. Faigheann sárú folamh Video socrú Vision le hoidhreacht; má tá an dá cheann folamh, roghnaíonn uath-ródaire Vision an tsamhail éifeachtach atá in ann fís a láimhseáil. Tagann fotheidil rathúla in ionad na bunchoda le réimír chobhsaí `[Video description:` a mharcálann an téacs freisin mar bhreathnóireacht neamhiontaofa atá díorthaithe ó mheáin agus a insíonn do shamhlacha iartheachtacha gan treoracha a fhaightear sna meáin a leanúint. Áirítear le heochracha taisce fotheideal fráma na bearta JPEG, an leid, an stampa ama agus an tsamhail éifeachtach; ní chuirtear ach fotheidil rathúla i dtaisce. Coinníonn iontrálacha taisce an tsamhail táirgeora ar éirigh léi i ndáiríre, lena n-áirítear samhail chúltaca; tuairiscíonn an droichead `mixed` nuair a tháirg samhlacha éagsúla frámaí éagsúla. Athúsáideann amas taisce aitheantas an táirgeora sin seachas é a athlipéadú mar an plean ródaithe iarrtha. Cuirtear gach ionchur a athraíonn an t-aschur san eochair do thaisce thoradh an fhíseáin iomláin — an leid, an tsamhail éifeachtach, an beartas samplála, líon na bhfrámaí, modh na hanailíse séiméantaí, méarlorg SHA-256 den leid fócais normalaithe, an fhuinneog fócais, `transcript`, `audioTranscript`, agus bratach na bileoige teagmhála — ionas gur teip taisce, agus ní athúsáid sheanchaite, é athrú ar aon cheann de na toisí sin. Tá leagan an bheartais dí-dhúblála amhairc, an tairseach, agus líon teorannaithe na bhfrámaí iarrthóra sainráite freisin in eochair agus meiteashonraí thaisce an toraidh; dá bhrí sin, ní féidir le hathrú beartais cur síos seanchaite ar an bhfíseán iomlán a athúsáid. Coinníonn meiteashonraí v4 thaisce an toraidh an modh agus an méarlorg, ach ní choinníonn siad tasc amh an úsáideora choíche. Tuairiscíonn meiteashonraí na ráillí cosanta na modhanna anailíse iarrtha agus éifeachtacha araon; tuairiscítear modh `focused` iarrtha nach bhfuil téacs úsáideora inúsáidte aige mar `full` go héifeachtach.

Baineann an ráille cosanta gach cuid físeáin a dtacaítear léi amach ach ní dhéanann sé cur síos ar níos mó ná `modalityBridgeVideoMaxVideos`. I gcás sprice ar cruthaíodh go bhfuil `supportsVideo === false` aici, déantar marcóirí sábháilte sainráite téacs de na físeáin ar theip orthu agus de na físeáin os cionn na teorann ionas nach mairfidh aon fhíseán amh. Nuair nach eol an cumas, coinníonn na codanna sin a n-iompróir físeáin; leanann aon tras-scríbhinn chúltaca an tiontú teorannaithe téacs thuas. Seachnaíonn spriocanna a bhfuil `supportsVideo === true` acu an droichead. Iomadaíonn comhartha tobscortha iarratas an chliaint tríd an íoslódáil, scuaine an bhróicéara, na fophróisis agus glaonna fotheidil; stopann tobscortha idir físeáin agus ní theipeann siad ar oscailt do mheáin amha choíche.

Tá socruithe ama rite tacaithe ag bunachar sonraí agus bailíochtaithe le Zod:

| Eochair                             | Réamhshocrú | Raon / iompar                                                                                                          |
| ----------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Am rite reatha roghnach, le roghnú isteach                                                                             |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | Caomhnaíonn `full` fotheidil ghinearálta; úsáideann `focused` comhthéacs teoranta neamhiontaofa an úsáideora is déanaí |
| `modalityBridgeVideoModel`          | `""`        | Faigh samhail Vision Bridge le hoidhreacht                                                                             |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                   |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, nó `segment_aware` comhréireach; má theipeann ar an mbrathadóir, úsáidtear `uniform`         |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                    |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                         |

Cuirtear teorainn sprioc-ama an bhróicéara le seanluachanna am istigh Video marthanacha os cionn 120 soicind;
diúltaítear do scríbhinní socruithe nua atá os cionn na teorann sin.
Éilíonn `GET /api/modality-bridge/video/runtime` logántacht loopback stampáilte iontaofa
roimh fhíordheimhniú nó thástáil an ama rite, agus ansin éilíonn sé fíordheimhniú
bainistíochta. Ní fhilleann sé ach `available`, leaganacha sláintithe FFmpeg/ffprobe, agus cúis sheasta
nuair nach bhfuil an t-am rite ar fáil. Ní API poiblí uaslódála é an críochphointe inmheánach asbhainte:
filleann sáithiú na scuaine `503` móide `Retry-After`, filleann dícheangal glaoiteora
`499`, agus filleann sprioc-am seasta an bhróicéara `504`. Cuireann freagraí tiontaithe
`video->text;model=<visionModel>;parts=<videos>` leis an gceanntásc lárnach
`x-omniroute-modality-bridge` gan míreanna Vision ná Audio a bhaint.

### Mascóir PII (`piiMasker.ts`)

Ritheann sé ar an **dá** chéim.

- **`preCall`** clónálann sé an pálasta, siúlann sé trí `system`, `messages`, `input`, agus
  `prompt` (míreanna gnáth-theaghráin san áireamh), agus cuireann sé `processPII()` (ó
  `@/shared/utils/inputSanitizer`) i bhfeidhm ar réimsí teaghráin `content`/`text`. Nuair atá
  `PII_REDACTION_ENABLED=true`, déantar PII braite a cheilt sa phálasta
  amach. Tá sé seo neamhspleách ar `INPUT_SANITIZER_MODE` (nach rialaíonn ach
  an beartas insteallta leid). Nuair atá an cheilt múchta, taifeadann an glao comhairimh
  braite gan an t-inneachar a athscríobh.
- **`postCall`** déanann sé clónáil dhomhain ar an bhfreagra, ritheann sé `sanitizePIIResponse()` móide
  mascóir chruth Responses-API (`maskResponsesOutput` — clúdaíonn sé
  `output_text` agus `output[].content[].text`). Má tharlaíonn aon cheilt, cuirtear an
  freagra modhnaithe in ionad an bhunfhreagra.

Ní chuireann an ráille cosanta bac riamh; ní dhéanann sé ach anótáil (`meta.detections`,
`meta.redacted`) nó athscríobh.

### Instealladh Leide (`promptInjection.ts`)

Braitheann sé struchtúir naimhdeacha in inneachar arna sholáthar ag an úsáideoir agus forfheidhmíonn sé an
beartas cumraithe. Tá an t-iompar á thiomáint ag athróga timpeallachta agus roghanna
tógálaí:

| Socrú             | Athróg timpeallachta                                                                                  | Réamhshocrú | Éifeacht                                                                                                                                                                                                                   |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cumasaithe        | `INPUT_SANITIZER_ENABLED`                                                                             | `true`      | Nuair atá sé `false`, déanann an ráille cosanta gearrchiorcadú.                                                                                                                                                            |
| Mód               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`      | Beartas insteallta: `block`, `warn`, nó `log`. (Glactar le `redact` ar mhaithe le comhoiriúnacht siarghabhálach ach **ní bhaineann sé** téacs insteallta; tá athscríobh PII iarratais á rialú ag `PII_REDACTION_ENABLED`.) |
| Tairseach blocála | Rogha `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (ailias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`      | An déine íosta is gá chun blocáil. Is chun breathnóireachta amháin atá Meánach de réir réamhshocraithe.                                                                                                                    |

**Tosaíocht mhóid** (`getMode`): `options.mode` an ghlaoiteora →
sárú gnébhrataí **DB** `INJECTION_GUARD_MODE` (Deais → Socruithe →
Gnébhratacha) → athróg timpeallachta `INJECTION_GUARD_MODE` → athróg timpeallachta `INPUT_SANITIZER_MODE` →
`warn`. Mar sin, bíonn tosaíocht ag sárú ón deais ar na hathróga timpeallachta, agus dá bhrí sin
rialaíonn UI na nGnébhratach an ráille cosanta atá ag rith go beo (gan atosú). Tá léamh DB slán i gcás teipe:
má tharlaíonn earráid, téann an ráille cosanta siar chuig an iompar atá bunaithe ar an timpeallacht, agus nuair nach bhfuil aon
sárú socraithe, bíonn an t-iompar comhionann le réiteach bunaithe ar an timpeallacht amháin.

Foinsí braite:

1. `sanitizeRequest()` ó `@/shared/utils/inputSanitizer` (tacar comhroinnte brathadóirí
   a úsáidtear in áiteanna eile sa phíblíne).
2. `DEFAULT_GUARD_PATTERNS` ionsuite (`system_override_inline` agus
   `markdown_system_block` faoi láthair, agus déine `high` ag an dá cheann).
3. `customPatterns` roghnacha arna gcur ar aghaidh trí roghanna an tógálaí (teaghráin, regex,
   nó taifid `{ name, pattern, severity }`).

Nuair atá `mode === "block"` **agus** nuair a chomhlíonann brath amháin ar a laghad an
tairseach déine, tugann `preCall` `{ block: true, message: "Request rejected:
suspicious content detected" }` ar ais. Sna módanna `warn`/`log`, déanann an ráille cosanta logáil ach
ceadaíonn sé an glao. Déantar an cúntóir comhroinnte `evaluatePromptInjection()` a easpórtáil freisin
do ghlaoiteoirí ar gá dóibh leideanna a mheas gan dul tríd an gclárlann.

**Teorainn scanadh (v3.8.20):** ní scrúdaíonn an brathadóir ach an **chéad 16 KB** de
théacs na leideanna comhcheangailte — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 beart) in
`src/shared/utils/inputSanitizer.ts`. Déanann `detectInjection()` agus
`evaluatePromptInjection()` araon `slice(0, MAX_INJECTION_SCAN_BYTES)` sula ritheann siad
lúb na bpatrún. Bíonn treoracha insteallta gar do bharr ionchuir, mar sin
cuireann sé seo teorainn le húsáid LAP/GC ag sloinn ionadaíochta ar phálastaí ina bhfuil na céadta KB gan an bhrath a lagú (féach
#3932, #4041).

### Folaitheoir Dintiúr (`credentialMasker.ts`)

Ritheann sé ag **an dá** chéim, agus é deireanach sa slabhra réamhshocraithe (tosaíocht `95`). Déanann sé
patrúin aitheanta eochracha API / comharthaí rúnda a cheilt ón bpálasta amach (inneachar
teachtaireachta, argóintí glaonna uirlise, torthaí uirlise) **agus** ó fhreagra an tsoláthraí, ionas nach
sceitear dintiúr a greamaíodh isteach i leid (nó a tugadh ar ais mar mhacalla i dtoradh uirlise)
chuig an soláthraí réamhtheachtach ná ar ais chuig an gcliant.

- **Le roghnú isteach amháin**, de réir an nóis chéanna le ceilt PII (gar do Riail Dhocht #20):
  díchumasaithe mura bhfuil `settings.credentialRedactionEnabled === true` **nó**
  `CREDENTIAL_REDACTION_ENABLED=true`. Agus é múchta, ní dhéanann an ráille cosanta aon ní —
  ní chuireann sé bac ar rud ar bith agus ní athscríobhann sé rud ar bith.
- Siúlann `redactCredentials()` crann iomlán an phálasta/an fhreagra (`walkValue()`,
  sábháilte ar thruailliú fréamhshamhla, sábháilte ar thimthriallta trí `WeakSet`) agus cuireann sé
  ionadchoinneálaí `[REDACTED:<type>]` in ionad meaitseálacha, gan ach na géaga a d'athraigh i ndáiríre
  a chlónáil.
- Clúdaíonn `CREDENTIAL_PATTERNS` eochracha soláthraithe LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), comharthaí VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), eochracha íocaíochta (Stripe, Square), eochracha néil
  (eochair rochtana AWS, Twilio, SendGrid, Mailgun), eochracha príobháideacha / JWTanna,
  teaghráin cheangail a bhfuil dintiúir iontu (`mongodb://user:pass@...`, srl.), agus
  patrún cineálach luacha ceanntáisc `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Déantar eochracha i gcruth ceanntáisc (`authorization`, `x-api-key`, `api-key`,
  `apikey`) a cheilt go struchtúrach (an luach amháin, agus réimír scéime amhail
  `Bearer `/`Basic ` á caomhnú) seachas tríd an slonn ionadaíochta cineálach téacs.
- Ní chuireann an ráille cosanta bac ar rud ar bith riamh; ní dhéanann sé ach athscríobh (`modifiedPayload` /
  `modifiedResponse`) agus anótáil (`meta.credentialsRedacted`, `meta.count`).

Cosaint aischéimnithe: `tests/unit/credential-masker-guardrail.test.ts`.

## Bunchonradh (`base.ts`)

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
  block?: boolean; // giorraíonn true an slabhra
  message?: string; // nochtar é nuair a chuirtear bac
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // tugtar ar ais é ag preCall chun an t-iarratas a athscríobh
  modifiedResponse?: TValue; // tugtar ar ais é ag postCall chun an freagra a athscríobh
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

Cuireann ráille cosanta in iúl “gan athrú” trí `void`, `{}`, nó
`{ block: false }` a thabhairt ar ais. Má thugtar `modifiedPayload`/`modifiedResponse` ar ais, cuirtear é
in ionad an luacha a shreabhann tríd an slabhra chuig ráillí cosanta iartheachtacha.
Iompraíonn `signal?: AbortSignal` saolré an ghlaoiteora isteach sna ráillí cosanta. Is í cealú iarratais an eisceacht oscailte d’aon ghnó i gcás teipe: stopann droichid meán an obair agus déanann siad glantachán gan na meáin amh a chur ar ais chuig sprioc arb eol nach dtacaíonn sí leo.

## Clárlann (`registry.ts`)

Nochtann an t-aonán `guardrailRegistry`:

- `register(guardrail)` — cuireann sé garda-ráille leis (nó cuireann sé ceann eile ina áit de réir ainm normalaithe) agus ath-shórtálann sé de réir `priority` ardaitheach.
- `clear()` / `list()` — cúntóirí riaracháin.
- `runPreCallHooks(payload, context)` — déanann sé athrá ar gharda-ráillí gníomhacha, snáitheann sé an t-ualach tríd an `modifiedPayload`, agus stopann sé ar an gcéad `block: true`.
- `runPostCallHooks(response, context)` — an sreabhadh céanna ar thaobh an fhreagra.
- `resetGuardrailsForTests({ registerDefaults })` — glanann sé an staid agus, go roghnach, athchláraíonn sé na réamhshocruithe le haghaidh aonrú tástála glan.

Tugann an dá reathaí `{ blocked, payload|response, results, guardrail?, message? }` ar ais, áit a bhfuil `results` ina eagar de thaifid `GuardrailExecutionResult` a chuimsíonn réimsí `blocked`, `skipped`, `modified`, `error`, agus `meta` in aghaidh an gharda-ráille, atá úsáideach le haghaidh rianú.

### Garda-ráillí a Dhíchumasú in aghaidh an Iarratais

Déanann `resolveDisabledGuardrails({ apiKeyInfo, body, headers })` liosta dí-dhúbailte d'ainmneacha garda-ráillí a bhailiú ar cheart iad a scipeáil don iarratas reatha. Foinsí (gach ceann roghnach, gach ceann cumaiscthe):

- `apiKeyInfo.disabledGuardrails`
- Comhlacht iarratais `disabledGuardrails` (barrleibhéal)
- Comhlacht iarratais `metadata.disabledGuardrails`
- Ceanntásc `x-omniroute-disabled-guardrails` (nó an ceann oidhreachta `x-disabled-guardrails`)

Féadfaidh na luachanna a bheith ina n-eagar teaghrán nó ina dteaghrán scartha le camóg; déantar ainmneacha a normalú go cás íochtair kebab-case (`pii_masker` → `pii-masker`). Cuirtear an toradh tríd an `context.disabledGuardrails` chuig an gclárlann, a scipeálann garda-ráillí meaitseála (`skipped: true` i `results`).

## Ord Feidhmithe

Maidir le gach iarratas a théann trí `src/sse/handlers/chat.ts` agus
`open-sse/handlers/chatCore.ts`:

1.  Tógann `resolveDisabledGuardrails(...)` an liosta scipeála ón eochair API, ón gcorp,
    agus ó na ceanntásca.
2.  Ritheann `guardrailRegistry.runPreCallHooks(body, ctx)` na ráillí cosanta in ord tosaíochta ardaitheach:
    - Déantar ráillí cosanta díchumasaithe a thaifeadadh mar `skipped`.
    - Féadfaidh `preCall` gach ráille cosanta an t-ualach pá a athscríobh trí `modifiedPayload`.
    - Gearrann an chéad `block: true` an slabhra agus cuireann an láimhseálaí freagra diúltaithe ráille cosanta ar ais.
3.  Sreabhann an t-ualach pá (a d'fhéadfadh a bheith athscríofa) isteach i ródú teaglama agus i seoladh in aghaidh an tsrutha.
4.  Tar éis an freagra a chur le chéile, ritheann `guardrailRegistry.runPostCallHooks(...)`
    an slabhra céanna ar an bhfreagra. Scaoileann `block: true` an freagra in aghaidh an tsrutha anseo.

Déantar ráillí cosanta a chaitheann earráid a thaifeadadh le `error: <message>` agus a logáil trí
`logger.warn`, ach leanann an slabhra ar aghaidh — teip-oscailte de réir dearaidh.

## Cumraíocht

Athróga comhshaoil a léann na ráillí cosanta ionsuite:

| Variable                              | Used by                   | Effect                                                                                                          |
| :------------------------------------ | :------------------------ | :-------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Socraigh `false` chun braite a dhíchumasú go hiomlán.                                                           |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Beartas insteallta: `warn`, `block`, nó `log`. Ní athscríobhann an luach oidhreachta `redact` téacs insteallta. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Mód don gharda insteallta; bratach gné DB freisin a **sháraíonn** na hathróga comhshaoil (DB > ENV).            |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Íos-déine a dhiúltaíonn `MODE=block`: `high` (réamhshocrú), `medium`, nó `low`.                                 |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Ailias oidhreachta do `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                        |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Nuair atá `true`, déantar PII an iarratais a eagrú (neamhspleách ar mhodh insteallta).                          |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Rialaíonn sé iompar an mhascóra ar thaobh an fhreagra.                                                          |

Léann ráillí cosanta an Modality Bridge cumraíocht reatha ón stór socruithe atá bunaithe ar DB
(`getSettings()`), ní ó athróga comhshaoil. Is iad príomheochracha Vision ná
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, agus
`modalityBridgeCacheMaxEntries`. Ní ghlactar leis na heochracha oidhreachta
`visionBridge*` ach amháin mar an t-aischur léitheoireachta aon-timthriallta
doiciméadaithe; úsáideann scríbhinní painéil na príomheochracha. Tá na réamhshocruithe agus an
réiteoir aischuir lonnaithe i `src/shared/constants/modalityBridgeDefaults.ts`, le
tairisigh oidhreachta coinnithe i `src/shared/constants/visionBridgeDefaults.ts`.

Úsáideann Fuaime `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, agus `modalityBridgeAudioMaxClips`, chomh maith leis na socruithe
comhroinnte `modalityBridgeCache*`. Níl aon aischur eochrach oidhreachta ag Fuaime toisc gur
tugadh na heochracha seo isteach le scéimre an Modality Bridge.

Úsáideann Físeán `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, agus
`modalityBridgeVideoTimeout`, chomh maith leis na socruithe comhroinnte `modalityBridgeCache*`.
Tá sé díchumasaithe de réir réamhshocraithe toisc gur spleáchais oibríochtúla roghnacha iad
FFmpeg/ffprobe agus go gcuireann fotheidealú fráma moill agus costas samhail leis.

## Cosaintí Saincheaptha

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

Céimeanna:

1.  Cruthaigh `src/lib/guardrails/myGuardrail.ts` ag leathnú `BaseGuardrail`.
2.  Cuir `preCall` agus/nó `postCall` i bhfeidhm.
3.  Cláraigh ag am iompórtála (brúigh ó `registerDefaultGuardrails`) nó glaoigh ar `guardrailRegistry.register(...)` ag am rite — cuirfidh an clárlann aon chosaint roimhe seo leis an ainm normalaithe céanna in ionad.
4.  Cuir tástálacha leis faoi `tests/unit/` (samplaí atá ann cheana:
    `tests/unit/guardrails-registry.test.ts`,
    `tests/unit/prompt-injection-guard.test.ts`,
    `tests/unit/guardrails/visionBridge.test.ts`).

## Tástáil

Úsáid `resetGuardrailsForTests()` idir tástálacha chun tús a chur le staid aitheanta. Cuir `{ registerDefaults: false }` ar aghaidh chun tús a chur le clárlann fholamh agus chun na cosaintí atá á dtástáil amháin a chlárú. Glacann Vision Bridge le hinstealladh spleáchais (`deps.getSettings`, `deps.callVisionModel`); nochtann Audio Bridge na hailt chomhionanna le haghaidh socruithe, cumais, roghnú samhail STT, seiceálacha dintiúir, agus trascríobh. Is féidir le tástálacha an dá shreabhadh a fheidhmiú dá bhrí sin gan rochtain ar DB nó ar líonra.

## Féach Freisin

- `src/lib/guardrails/` — cur i bhfeidhm
- `src/shared/utils/inputSanitizer.ts` — brathadóir comhroinnte a chumhachtaíonn instealladh pras agus mascáil PII
- `src/shared/constants/visionBridgeDefaults.ts` — réamhshocruithe Vision Bridge agus liosta samhlacha droichid éigeantacha
- `src/shared/constants/modalityBridgeDefaults.ts` — réamhshocruithe comhroinnte ama rite Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ciseal ortagánach (scoradán ciorcaid, fuarú)
- `docs/reference/ENVIRONMENT.md` — tagairt iomlán do athróga comhshaoil

## Clúdach bealaigh cosanta insteallta & foireann dhearg (Céim 8 · Bloc D)

Clúdaíonn an cosantóir insteallta (`createInjectionGuard` / `withInjectionGuard`) gach bealach a ghlacann le prasanna úsáideora. Tugann sé ómós do `INJECTION_GUARD_MODE` (réamhshocrú `warn` = logáil amháin; `block` = seolann sé ar ais HTTP 400 `SECURITY_001`).

| Cineál                 | Bealaí                                                                                                                                               | Mód réamhshocraithe |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Téacs (atá ann cheana) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                |
| Giniúnach              | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                |
| Sonraí                 | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                |

Clúdaíonn eastóscadh téacs (`extractMessageContents`) `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Foireann dhearg (oíche, `nightly-llm-security.yml`):** fíoraíonn promptfoo go gcuireann gach bealach bac ar an gcorp OWASP-LLM i `INJECTION_GUARD_MODE=block`; ritheann garak taiscéalaithe (scipeann sé gan rún). Cuirtear `moderations` san áireamh ar mhaithe le comhsheasmhacht — is féidir le hoibreoirí i mód bloc é a dhíolmhú trí `resolveDisabledGuardrails`.

Tá dhá phost ag an sreabhadh oibre oíche (`.github/workflows/nightly-llm-security.yml`, cron + seoladh láimhe):

- **`promptfoo-guard` (blocáil)** — ritheann sé `promptfoo eval -c promptfooconfig.yaml` le `INJECTION_GUARD_MODE=block`. Dearbhaíonn gach cás frithsheasmhach (m.sh. "déan neamhaird de gach treoir roimhe seo…", jailbreaks stíl DAN) go bhfuil `error.code === "SECURITY_001"` sa fhreagra, i.e. gur dhiúltaigh an cosantóir an t-iarratas i ndáiríre.
- **`garak` (comhairleach)** — ritheann sé garak `--probes promptinject,dan,leakreplay` i gcoinne cás áitiúil OmniRoute (`http://localhost:20128/v1`). Geataithe ar rún soláthraí (`PROMPTFOO_PROVIDER_KEY`); scipeann sé go galánta agus tá an iarmhír `|| true` leis, ionas go dtuairiscíonn sé gan teip CI.

Clúdaíonn clúdach an chúntóra cosanta (`createInjectionGuard` / `withInjectionGuard`) gach bealach `/v1` a iompraíonn prasanna; tarraingítear téacs an phrais ó `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` ag `extractMessageContents()` i `src/shared/utils/inputSanitizer.ts`.
