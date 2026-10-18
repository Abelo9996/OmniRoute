# Authorization Guide (Kiswahili)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/AUTHZ_GUIDE.md) · 🇪🇹 [am](../../../am/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/AUTHZ_GUIDE.md) · 🇦🇿 [az](../../../az/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇦 [bs](../../../bs/docs/architecture/AUTHZ_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/architecture/AUTHZ_GUIDE.md) · 🇩🇰 [da](../../../da/docs/architecture/AUTHZ_GUIDE.md) · 🇩🇪 [de](../../../de/docs/architecture/AUTHZ_GUIDE.md) · 🇬🇷 [el](../../../el/docs/architecture/AUTHZ_GUIDE.md) · 🇪🇸 [es](../../../es/docs/architecture/AUTHZ_GUIDE.md) · 🇪🇪 [et](../../../et/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/architecture/AUTHZ_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/AUTHZ_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇪 [ga](../../../ga/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇬 [ha](../../../ha/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇱 [he](../../../he/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/architecture/AUTHZ_GUIDE.md) · 🇭🇷 [hr](../../../hr/docs/architecture/AUTHZ_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/AUTHZ_GUIDE.md) · 🇦🇲 [hy](../../../hy/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇩 [id](../../../id/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇬 [ig](../../../ig/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇹 [it](../../../it/docs/architecture/AUTHZ_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/AUTHZ_GUIDE.md) · 🇬🇪 [ka](../../../ka/docs/architecture/AUTHZ_GUIDE.md) · 🇰🇭 [km](../../../km/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [kn](../../../kn/docs/architecture/AUTHZ_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/AUTHZ_GUIDE.md) · 🇱🇹 [lt](../../../lt/docs/architecture/AUTHZ_GUIDE.md) · 🇱🇻 [lv](../../../lv/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [ml](../../../ml/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/architecture/AUTHZ_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/AUTHZ_GUIDE.md) · 🇲🇹 [mt](../../../mt/docs/architecture/AUTHZ_GUIDE.md) · 🇲🇲 [my](../../../my/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇵 [ne](../../../ne/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇴 [no](../../../no/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [or](../../../or/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [pa](../../../pa/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/AUTHZ_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/AUTHZ_GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/AUTHZ_GUIDE.md) · 🇱🇰 [si](../../../si/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇮 [sl](../../../sl/docs/architecture/AUTHZ_GUIDE.md) · 🇷🇸 [sr](../../../sr/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [te](../../../te/docs/architecture/AUTHZ_GUIDE.md) · 🇹🇭 [th](../../../th/docs/architecture/AUTHZ_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/architecture/AUTHZ_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/architecture/AUTHZ_GUIDE.md) · 🇺🇿 [uz](../../../uz/docs/architecture/AUTHZ_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇬 [yo](../../../yo/docs/architecture/AUTHZ_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/AUTHZ_GUIDE.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/AUTHZ_GUIDE.md)

---

> **Chanzo cha ukweli:** `src/server/authz/`, `src/shared/constants/publicApiRoutes.ts`, `src/lib/api/requireManagementAuth.ts`, `src/shared/utils/apiAuth.ts`
> **Iliyosasishwa mwisho:** 2026-09-22 — majina ya nafasi za wigo yanaelekeza kwenye MCP-SERVER.md

OmniRoute ina bomba la uidhinishaji linalozingatia njia ambalo huzuia kila ombi la API. Uainishaji ni **hakika** na **hufeli-hufungwa** — chochote kisichoweza kuainishwa huishia kama `MANAGEMENT` na huhitaji kipindi au tokeni ya kiwango cha usimamizi. Ukurasa huu unaeleza mfumo kwa wahandisi wanaosimamia njia au kubuni vituo vipya.

![AuthZ pipeline (3 route classes + policy evaluation)](../diagrams/exported/authz-pipeline.svg)

> Chanzo: [diagrams/authz-pipeline.mmd](../diagrams/authz-pipeline.mmd)

## Njia Mbili za Uthibitishaji

### 1. Ufunguo wa API (Bearer)

Hutumika kwa API za mteja zinazooana na OpenAI/Anthropic/Gemini na baadhi ya njia za usimamizi wakati ufunguo una ruhusa ya `manage`.

```
Authorization: Bearer <api-key>
```

Huthibitishwa na `isValidApiKey()` / `extractApiKey()` katika `src/sse/services/auth.ts` na kusafirishwa upya kupitia `src/shared/utils/apiAuth.ts`. Kithibitishaji pia hukubali env vars za `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` kama funguo endelevu za kupitisha moja kwa moja (suala #1350).

### 2. Kikao cha Dashibodi (kidakuzi cha auth_token)

Kwa kurasa za dashibodi na operesheni za msimamizi.

```
Cookie: auth_token=<JWT iliyotiwa saini kwa JWT_SECRET>
```

Kidakuzi ni kikao ikiwa tu JWT imethibitishwa **na** ina `authenticated: true`
(`src/shared/utils/dashboardSessionToken.ts` → `verifyDashboardSessionToken`). Kila
mtumiaji wa kidakuzi hicho (kilinzi cha njia ya dashibodi (`isDashboardSessionAuthenticated()`), uonyeshaji upya wa mchakato wa authz, makubaliano ya WebSocket, seva ya moja kwa moja, `/api/settings/require-login`, `/api/auth/status`) hupitia kisaidizi hicho.
JWT nyingine zilizotiwa saini kwa `JWT_SECRET` zipo — kipitishaji cha Cursor CLI hutengeneza tokeni za
`iss "omniroute" / aud "cursor-cli"` kwa wenye funguo — na kamwe si vikao
(#13298).

Huthibitishwa na `isDashboardSessionAuthenticated()` katika `src/shared/utils/apiAuth.ts`. Mchakato huo huonyesha upya JWT kiotomatiki inapokuwa imebakiwa na chini ya siku 7 katika muda wake wa matumizi wa siku 30.

Kikao kinaweza pia kuisha kabla ya siku zake 30 kukamilika, kwa sababu kila kitengeneza tokeni hupitia `mintDashboardSessionToken` (muda wa kutolewa `iat` na kitambulisho `jti`) na kithibitishaji hukagua mipangilio miwili: `sessionsValidAfter`, ambayo huwekwa baada ya nenosiri kubadilishwa ili kila kikao kilichotolewa kabla ya hapo kisiendelee kuthibitishwa (kivinjari kilichobadilisha nenosiri hupata kidakuzi kipya), na `revokedDashboardSessions`, ambako `POST /api/auth/logout` huongeza `jti` ya kikao kilichotolewa. Vikao vilivyotengenezwa na toleo la zamani havina dai lolote kati ya hayo na huendelea kuwa halali hadi nenosiri libadilishwe kwa mara ya kwanza. Ikiwa mipangilio haiwezi kusomwa, kikao hakiaminiki.

Baadhi ya njia za usimamizi hukubali **mojawapo** ya njia hizi: kidakuzi AU `Bearer <key>` wakati ufunguo wa API una ruhusa ya `manage` (au `admin`). Hili ndilo linalowezesha mtiririko wa kazi wa "kuweza kusanidiwa kupitia miito ya API" ulioongezwa katika v3.8.

#### Kizuizi cha hiari cha kuingia kwa OIDC (#6973)

Kuingia kwa msimamizi wa dashibodi pia kunaauni mtiririko wa **hiari** wa OIDC (OpenID Connect)
pamoja na uingiaji chaguomsingi kwa nenosiri — uingiaji kwa nenosiri hauondolewi kamwe, bali
huongezewa tu:

- Imezimwa isipokuwa `settings.oidcEnabled === true` **na** `oidcIssuer` /
  `oidcClientId` / `oidcClientSecret` zote zimesanidiwa (Mipangilio → Uthibitishaji).
  Vinginevyo, `GET /api/auth/oidc/login` hurejesha `400`.
- `GET /api/auth/oidc/login` hugundua `authorization_endpoint` kutoka kwenye
  `/.well-known/openid-configuration` ya mtoaji (na hutumia
  `<issuer>/authorize` kama mbadala), huunda URI ya kuelekezwa upya kutoka kwenye ombi
  linaloingia (kwa kuzingatia `x-forwarded-proto`), na huelekeza upya kwenda kwa IdP ikiwa na `state`
  ya nasibu iliyohifadhiwa kwenye kidakuzi cha `httpOnly` cha `oidc_state`.
- `GET /api/auth/oidc/callback` huthibitisha `state`, hubadilisha msimbo wa uidhinishaji,
  na huthibitisha saini ya tokeni ya ID kupitia JWKS ya mtoaji
  (`createRemoteJWKSet` ya `jose`, iliyohifadhiwa kwenye akiba kwa kila URI ya JWKS) pamoja na ukaguzi wa `issuer`/`audience`.
  Orodha ya wanaoruhusiwa ya `oidcAllowedSubjects` inahitajika: inalinganisha
  dai la `sub` la tokeni au dai lake la `email` — dai la barua pepe linakubaliwa tu
  wakati `email_verified === true`, kwa hivyo barua pepe ambayo haijathibitishwa katika IdP haiwezi kamwe
  kupita kizuizi — na bila maingizo, mwito wa kurejea hukataa kila jaribio la kuingia
  (`not_configured`).
- Ikifaulu, huunda JWT ya `auth_token` ya siku 30 ambayo ni **sawa kabisa** na ile inayotolewa na
  kuingia kwa nenosiri (`src/app/api/auth/login/route.ts`), hivyo sehemu nyingine ya
  mchakato wa kipindi cha dashibodi (uonyeshaji upya kiotomatiki, bendera za vidakuzi) haibadiliki —
  OIDC hubadilisha tu jinsi kidakuzi kinavyoundwa, si kile kinachoruhusu.
- Kila mpangilio wa `oidc*` (`oidcEnabled`, `oidcDisablePasswordLogin`,
  `oidcIssuer`, `oidcClientId`, `oidcClientSecret`, `oidcAllowedSubjects`,
  `oidcRedirectPath`, `oidcScopes`) umo katika `SECURITY_IMPACTING_SETTINGS_KEYS`
  (`src/shared/constants/securityImpactingSettings.ts`): `PATCH /api/settings`
  hujibu `400 PASSWORD_REQUIRED` isipokuwa mwili una nenosiri la usimamizi
  kama `currentPassword` (`401 PASSWORD_MISMATCH` likiwa si sahihi).
  `oidcDisablePasswordLogin` hukataa _kuingia_ kwa nenosiri (`POST /api/auth/login`)
  lakini huhifadhi heshi ya nenosiri, na uthibitishaji upya bado hukagua
  `currentPassword` dhidi yake.
- `corsOrigins` na `bruteForceProtection` pia zimo katika `SECURITY_IMPACTING_SETTINGS_KEYS`:
  kulegeza mojawapo hudhoofisha ulinzi wa kuingia, kwa hivyo zinahitaji uthibitishaji upya uleule wa
  `currentPassword` (kichupo cha Usalama huomba nenosiri hilo), na uletaji wa JSON
  huziondoa.
- Kila ufunguo wa sera ya usalama — maingizo ya `SECURITY_IMPACTING_SETTINGS_KEYS`,
  kila ufunguo wa `oidc*` na hali ya kipindi cha dashibodi — ni wa **mwendeshaji pekee** kwenye
  `PATCH /api/settings`: ufunguo wa API wenye wigo wa `manage` au tokeni ya ufikiaji ya `oma_`
  hukataliwa kwa `403` hata inapotuma `currentPassword` sahihi, na
  kukataliwa huko hurekodiwa katika ukaguzi kama `settings.update_failed` ikiwa na `reason: OPERATOR_REQUIRED`
  (`requireOperatorCredential()` katika `src/lib/api/operatorCredential.ts`).
  Mipangilio ya kawaida (mandhari, mapendeleo ya mwonekano) huendelea kuweza kuandikwa na ufunguo wa `manage`
  au tokeni ya ufikiaji ya `admin`. Kila badiliko la `/api/settings` lenyewe (na la
  `/api/settings/require-login`) pia linahitaji wigo wa tokeni ya ufikiaji wa `admin`
  (`ADMIN_MUTATION_EXACT_PATHS` katika `src/server/authz/accessScopes.ts`, ulinganishaji
  kamili wa njia); `GET` huendelea kuwa `read`, na njia nyingine ndogo za `/api/settings/*` (proksi,
  chaguo-msingi za mchanganyiko, lakabu za miundo, mgandamizo, ufutaji…) huhifadhi wigo wa
  `write` unaobainishwa kutokana na mbinu.
- `POST /api/settings/import-json` huruka uthibitishaji huo upya, kwa hivyo huondoa kila ufunguo katika
  `IMPORT_STRIPPED_SETTINGS_KEYS` (faili hiyo hiyo) kabla ya kuandika: nenosiri na
  `currentPassword`, kila ingizo la `SECURITY_IMPACTING_SETTINGS_KEYS`, na
  hali ya kipindi cha dashibodi (`sessionsValidAfter`, `revokedDashboardSessions`).
  Kwa hivyo, kuleta nakala rudufu ya zamani hakuwezi kufufua kipindi ambacho mabadiliko ya nenosiri
  au kutoka tayari yalikomesha.

## Madarasa ya Njia

`src/server/authz/types.ts` inafafanua madarasa matatu; njia yoyote ambayo haiwezi kuainishwa kwa uhakika huwekwa katika `MANAGEMENT`.

| Darasa       | Maelezo                                                                                                                                                       | Uthibitishaji unaohitajika                                                  |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `PUBLIC`     | Njia zilizo salama waziwazi — kuingia, kutoka, hali, uanzishaji, afya, uanzishaji wa awali wa onboarding.                                                     | Hakuna                                                                      |
| `CLIENT_API` | Endpoints za kuhudumia modeli — `/api/v1/*`, `/api/v1beta/*`, pamoja na alias `/v1/*`, `/v1beta/*`, `/chat/completions`, `/responses`, `/models`, `/codex/*`. | Ufunguo wa Bearer wakati feature flag husika ya `REQUIRE_API_KEY` imewashwa |
| `MANAGEMENT` | Kurasa za dashibodi, mipangilio, watoa huduma, funguo, pamoja na endpoints za usimamizi na uchunguzi.                                                         | Kipindi cha dashibodi AU Bearer yenye scope ya `manage`                     |

Vitendo vichache vya `MANAGEMENT` ni vya **opereta pekee**: ufunguo wa `manage` hautoshi. Kuhamisha nje vitambulisho
vilivyohifadhiwa (`GET /api/settings/export-json`, `GET /api/db-backups/export`,
`GET /api/db-backups/exportAll`), kurejesha nakala rudufu juu ya data inayotumika
(`POST /api/db-backups/import` ikiwa ni pamoja na `dryRun=true`, urejeshaji wa `POST /api/db-backups` kwa kutumia id,
`POST /api/settings/import-json`), kuharibu sehemu za kurejeshea (`DELETE /api/db-backups` kwa usafishaji,
na `PATCH /api/db-backups` kwa sababu muda wa uhifadhi inaouhifadhi huendesha upogoaji wa kiotomatiki baada ya
kila nakala rudufu), kutoa tokeni ya ulandanishi (`POST /api/sync/tokens`) na kutengeneza
tokeni ya ufikiaji ya CLI ya `admin` (`POST /api/cli/tokens`) kunahitaji kipindi cha dashibodi, subject ya CLI
ya ndani, au kuingia kuwe kumezimwa; funguo za API za scope yoyote na tokeni za ufikiaji za `oma_` hupata `403`. Ukaguzi
upo katika `src/lib/api/operatorCredential.ts` (`resolveOperatorCredential()` /
`requireOperatorCredential()`). Kubadilisha mipangilio ya kuingia pia ni kwa opereta pekee:
`POST /api/settings/require-login` (kuweka nenosiri la usimamizi / kubadilisha `requireLogin`) hukubali
vitambulisho hivyo pekee mara tu nenosiri linapokuwepo — dirisha la uanzishaji wa kwanza (wakati hakuna nenosiri bado)
halijabadilika — na kipindi cha dashibodi lazima kitume `currentPassword` ili kubadilisha nenosiri
(`403` ikiwa halipo au si sahihi, na tukio hilo hurekodiwa kama `settings.update_failed`). CLI ya ndani na
instance ambayo kuingia kumezimwa huendelea kuwa na njia ya urejeshaji na zinaweza kuweka nenosiri bila hilo, kwa kuwa zote
zimefungamanishwa na host inayomiliki saraka ya data.

## Msururu wa Uchakataji

```
Ombi linaloingia → src/proxy.ts
  → runAuthzPipeline() katika src/server/authz/pipeline.ts
    1. Ondoa vichwa vya ndani vinavyoaminika (x-omniroute-auth-*, x-omniroute-route-class)
    2. Tengeneza kitambulisho cha ombi, ainisha njia kupitia classifyRoute()
    3. Ikiwa pathname == "/" → elekeza upya kwenda /dashboard
    4. Ikiwa mfumo unaacha kufanya kazi taratibu (kuzima kwa utaratibu) na /api/* → 503
    5. Ikiwa ni ombi lisilo la GET kwa /api/* → tumia kinga ya checkBodySize()
    6. Ikiwa ni OPTIONS → ukaguzi wa awali wa CORS 204
    7. Ikiwa options.enforce == false → pitisha moja kwa moja ukiwa na vichwa vya aina ya njia
    8. Vinginevyo: POLICIES[routeClass].evaluate(ctx)
       - ruhusu  → weka x-omniroute-auth-{kind,id,label,scopes} → NextResponse.next()
       - kataa → hitilafu ya JSON yenye correlation_id (kurasa za dashibodi → 302 /login)
```

Vichwa vya ndani vinavyoaminika (vilivyofafanuliwa katika `src/server/authz/headers.ts`) **huondolewa kwenye maombi yanayoingia** kabla ya uainishaji — wateja hawawezi kujaza mapema `x-omniroute-auth-*` ili kujifanya mhusika mwingine.

### Mikataba ya sera

Kila aina ya njia ina sera katika `src/server/authz/policies/`:

- **`publicPolicy`** (`policies/public.ts`) — daima hurejesha `allow({ kind: "anonymous", id: "anonymous" })`.
- **`clientApiPolicy`** (`policies/clientApi.ts`) — huchukua Bearer na kuithibitisha kupitia `validateApiKey()`. Huruhusu ufikiaji bila utambulisho pale tu ambapo alama amilifu ya kipengele `REQUIRE_API_KEY` imezimwa. Alama amilifu hubainishwa kupitia `isRequireApiKeyEnabled()` (`ubatilishaji wa alama ya kipengele kwenye DB > process.env.REQUIRE_API_KEY > chaguo-msingi`) ili Alama za Vipengele za Dashibodi na vigeu vya mazingira vidhibiti `/api/v1/*`, `/api/v1beta/*`, na majina mbadala kwa uthabiti; hitilafu za kibainishi husababisha ombi kukataliwa. Huruhusu maombi ya kikao cha dashibodi kwenye njia za API ya mteja (ikiwemo `/api/v1/models`, inayotumiwa na katalogi ya modeli ya dashibodi).
- **`managementPolicy`** (`policies/management.ts`) — hukubali kikao cha dashibodi, maombi ya ndani ya ulandanishaji wa modeli (yanayolinganishwa na `/api/providers/[name]/(sync-models|models)`), au huruka kabisa ikiwa `isAuthRequired()` inarejesha false. Hurejesha 403 (`AUTH_001`) wakati tokeni ya Bearer ipo lakini si halali, na 401 katika hali nyingine. Pia hutekeleza viwango vya ulinzi wa njia (LOCAL_ONLY / ALWAYS_PROTECTED) kabla ya tawi lolote la uthibitishaji — tazama [Viwango vya Ulinzi wa Njia](../security/ROUTE_GUARD_TIERS.md). Njia za LOCAL_ONLY katika `LOCAL_ONLY_MANAGE_SCOPE_BYPASS_PREFIXES` (kwa sasa: `/api/mcp/`) zinaweza kufikiwa kutoka anwani zisizo za loopback wakati ufunguo wa Bearer una upeo wa `manage`; njia nyingine zote za LOCAL_ONLY zinasalia kuwa za loopback pekee bila kujali upeo.

Sera iliyofaulu hurejesha `AuthSubject` yenye `kind ∈ { client_api_key, dashboard_session, management_key, anonymous }`. Vishughulikiaji vya chini ya msururu vinaweza kuisoma kupitia `assertAuth(request, "CLIENT_API")` katika `src/server/authz/assertAuth.ts` badala ya kutekeleza upya mantiki ya uthibitishaji.

## Orodha ya Njia za Umma

`src/shared/constants/publicApiRoutes.ts` ndiyo orodha bayana ya njia zinazoruhusiwa:

Orodha imegawanywa kulingana na **muundo**, na mgawanyo huu ni muhimu kwa usalama (GHSA-74g9-q8f6-793h): kiambishi awali
hulinganishwa kwa kutumia `startsWith()`, kwa hivyo pia hulingana na kila njia iliyo karibu inayoshiriki herufi zake za mwanzo.
Kutumia `/api/usage/om-usage` kama kiambishi awali kuliweka `/api/usage/om-usage<anything>` kuwa ya UMMA, na Next huelekeza
hiyo kwa `/api/usage/[connectionId]` — kishughulikiaji kisicho na uthibitishaji wake chenyewe.

```ts
// Vitawi halisi. Kila ingizo LAZIMA liishie kwa "/" (inathibitishwa na jaribio la kitengo).
PUBLIC_API_ROUTE_PREFIXES = [
  "/api/auth/oidc/",
  "/api/v1/", // huchukuliwa kama CLIENT_API katika classify, si kama "ya umma isiyohitaji uthibitishaji"
  "/api/oauth/",
  "/api/codex/connect/",
  "/api/telegram/",
  "/api/cursor-cli/",
];

// Njia moja moja, zinazolinganishwa HASA (zikiwa na au bila mkwaju wa mwisho).
PUBLIC_API_ROUTES_EXACT = new Set([
  "/api/auth/login",
  "/api/auth/logout",
  "/api/auth/status",
  "/api/init",
  "/api/sync/bundle",
  "/api/cli/connect",
  "/api/usage/om-usage",
  "/api/skills/collect/chaos",
]);

// Njia moja moja za kusoma pekee ambazo pia hupata ulegezaji wa asili ya CORS.
PUBLIC_READONLY_CORS_API_ROUTES = [
  "/api/health/ping",
  "/api/monitoring/health",
  "/api/settings/require-login",
];

// Njia moja ya kusoma pekee BILA ulegezaji wa CORS.
PUBLIC_READONLY_API_ROUTES_EXACT = new Set(["/api/health"]);

PUBLIC_READONLY_METHODS = new Set(["GET", "HEAD", "OPTIONS"]);
```

Njia za kusoma pekee ni za umma **tu** kwa mbinu salama. Kumbuka: `classifyRoute()` huondoa `/api/v1/*` na `/api/v1beta/*` kwenye chaguo-msingi la PUBLIC — hizi huwa `CLIENT_API` kila wakati ili sera ya ufunguo wa Bearer iendelee kutumika.

## Kuongeza Njia Mpya

### Muundo wa 1 — Endpoint ya API ya mteja ya umma (uthibitishaji wa Bearer)

Njia zilizo chini ya `/api/v1/` na `/api/v1beta/` huainishwa kiotomatiki kama `CLIENT_API`. Middleware hutekeleza ukaguzi wa Bearer; vishughulikiaji vya njia havihitaji kuurudia lakini vinaweza kusoma mhusika ikiwa ni muhimu.

```typescript
// src/app/api/v1/your-route/route.ts
import { NextRequest, NextResponse } from "next/server";
import { assertAuth } from "@/server/authz/assertAuth";

export async function POST(req: NextRequest) {
  const subject = assertAuth(req, "CLIENT_API");
  // subject.kind === "client_api_key" | "anonymous" | "dashboard_session"
  // ... mantiki ya kishughulikiaji
}
```

### Muundo wa 2 — Endpoint ya usimamizi (kikao au Bearer + manage)

Tumia `requireManagementAuth()` kutoka `src/lib/api/requireManagementAuth.ts`:

```typescript
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";

export async function POST(request: Request) {
  const rejection = await requireManagementAuth(request);
  if (rejection) return rejection;
  // ... mantiki ya kishughulikiaji
}
```

`requireManagementAuth()` hurudisha `null` ikifaulu au `Response` ya hitilafu ya JSON:

- 401 `AUTH_001` "Uthibitishaji unahitajika" — hakuna vitambulisho kabisa
- 403 — Bearer batili **au** Bearer ipo lakini ufunguo hauna upeo wa `manage` / `admin`

`hasManageScope(scopes)` hurudisha true kwa `"manage"` au `"admin"`.

### Muundo wa 3 — Kuongeza kwenye orodha ya umma ya zinazoruhusiwa

Chagua seti kulingana na muundo, si urahisi. Njia moja huwekwa katika `PUBLIC_API_ROUTES_EXACT` (au `PUBLIC_READONLY_CORS_API_ROUTES` ikiwa ni ya GET pekee); ni kitawi halisi pekee kinachowekwa katika `PUBLIC_API_ROUTE_PREFIXES`, na **lazima kiishie kwa `/`**. Kuweka njia moja katika orodha ya viambishi awali pia hufanya kila njia iliyo karibu inayoshiriki herufi zake za mwanzo kuwa ya umma — ikijumuisha njia zinazohusiana zenye sehemu zinazobadilika ambazo zitaongezwa baadaye (GHSA-74g9-q8f6-793h). Sasisha majaribio ya kitengo katika `tests/unit/public-api-routes.test.ts`, `tests/unit/authz/public-route-exact-match.test.ts` na `tests/unit/authz/classify.test.ts`.

## Wigo

Nafasi tatu za majina. Kila kikagua husoma tu nyuzi zake. Ulinganisho wa kando-kando,
ikiwemo kwa nini `manage` inashindwa `scopeMatches` kwa `read:compression` na kwa nini tokeni ya ufikiaji ya `read` haiwezi `PATCH /api/keys/{id}`, unapatikana hapa:
[Nafasi tatu za majina ya wigo](../frameworks/MCP-SERVER.md#three-scope-namespaces).

Funguo za API hubeba safu ya `scopes` (iliyohifadhiwa kama JSON katika `api_keys.scopes`, angalia `src/lib/db/apiKeys.ts`).

### Wigo wa usimamizi

- `manage` / `admin` — `hasManageScope`. Ufikiaji wa mbebaji kwa njia za API za usimamizi.
- `mcp:connect`, `self:usage`, `self:account-quota`, na
  `policy:bypass-provider-quota` ni wigo wa nyongeza unaolingana hasa. Ziko
  nje ya `MANAGEMENT_API_KEY_SCOPES`. `mcp:connect` hufungua tu
  sehemu ya `/api/mcp/` isiyo ya loopback.

### Wigo wa zana za MCP

Katalogi na sheria za kulinganisha (nyuzi zinazofanana, au wigo uliotolewa unaoishia na `*`):
[Wigo wa zana za MCP](../frameworks/MCP-SERVER.md#mcp-tool-scopes).
`MCP_SCOPE_LIST` katika `src/shared/constants/mcpScopes.ts` ni sehemu ndogo
iliyoandikwa asili, si katalogi kamili. Utekelezaji huendeshwa katika
`open-sse/mcp-server/scopeEnforcement.ts` baada ya `resolveCallerScopeContext()`
kutatua wigo kutoka kwa maelezo ya uthibitishaji wa MCP, metadata ya ombi, au
`OMNIROUTE_MCP_SCOPES`. Inabaki imezimwa isipokuwa `OMNIROUTE_MCP_ENFORCE_SCOPES=true`.

### Wigo wa tokeni ya ufikiaji

`read` / `write` / `admin` kwenye tokeni za `oma_live_…`, zilizopangwa kwa `scopeSatisfies`
(`src/lib/accessTokens/scopes.ts`). Cheo hiki kinatumika tu kwa kitambulisho cha
tokeni ya ufikiaji. Angalia [Uthibitishaji wa Usimamizi](../guides/MANAGEMENT-AUTH.md).

## Kibadilishaji cha Uhitaji wa Uthibitishaji

`isAuthRequired()` katika `src/shared/utils/apiAuth.ts` huamua ikiwa uthibitishaji **wowote** unatekelezwa kwa ombi:

- `settings.requireLogin === false` → uthibitishaji umezimwa kwa mfumo mzima.
- Hakuna nenosiri lililosanidiwa **na** hakuna kigezo cha mazingira cha `INITIAL_PASSWORD` → hali ya uanzishaji huruhusu mchawi wa utambulishaji wa mwanzo na maombi ya loopback, lakini maombi yaliyowekwa wazi kwenye mtandao bado yanahitaji vitambulisho.
- Hitilafu yoyote ya DB → hufunga ufikiaji (usalama kwa chaguo-msingi).

Utekelezaji wa funguo za API za mteja hutumia `isRequireApiKeyEnabled()` katika `src/shared/utils/featureFlags.ts`, wala si usomaji wa moja kwa moja wa `process.env.REQUIRE_API_KEY`. Hili ni muhimu kwa matukio yaliyotumwa: kubadilisha `REQUIRE_API_KEY` katika Dashboard → Feature Flags huhifadhi ubatilishaji wa DB na huathiri mara moja `/v1/*`, `/v1beta/*`, `/models`, `/responses`, `/chat/completions`, `/codex/*`, na ukaguzi mwingine wa uthibitishaji wa API ya mteja unaotumia kisaidizi hiki. Ikiwa hifadhi ya alama za vipengele haiwezi kusomwa, uthibitishaji wa API ya mteja hufunga ufikiaji na kuhitaji funguo.

## Mabadiliko Yasiyooana — v3.8.0

Vituo vya mwisho vya `/api/v1/agents/tasks/*` na `/api/resilience/model-cooldowns` **sasa vinahitaji uthibitishaji wa usimamizi** (commit `588a0333`). Wateja ambao hapo awali walituma funguo ya kawaida ya API bila wigo wa `manage` hupokea `403`. Uhamishaji: ama ipe funguo wigo wa `manage` katika dashibodi ya API Keys, au tumia kipindi cha dashibodi ambacho kimeingia katika akaunti.

## Mabadiliko ya Tabia — v3.8.2

`/api/mcp/*` (seva ya mbali ya MCP) bado ni LOCAL_ONLY kwa chaguo-msingi lakini sasa inakubali maombi yasiyo ya loopback wakati kichwa cha `Authorization: Bearer <api-key>` kina wigo wa `manage`. Ruhusa hii maalum inadhibitiwa wazi kwa kila njia kupitia `LOCAL_ONLY_MANAGE_SCOPE_BYPASS_PREFIXES` katika `src/server/authz/routeGuard.ts`; kiambishi awali kingine cha LOCAL_ONLY, `/api/cli-tools/runtime/*`, kwa makusudi hakiwezi kurukwa kwa sababu kinaweza kuanzisha michakato-tanzu kiholela. Maombi yasiyojulikana kwenda `/api/mcp/*` kutoka mahali pasipo loopback yanaendelea kurudisha `403 LOCAL_ONLY` — chaguo-msingi kwa njia yoyote mpya ya LOCAL_ONLY hubaki kuwa loopback pekee kwa masharti makali. Angalia [Viwango vya Kilinzi cha Njia](../security/ROUTE_GUARD_TIERS.md#manage-scope-carve-out).

## Majaribio

- Majaribio ya vipengele: `tests/unit/authz/` — `classify.test.ts`, `pipeline.test.ts`, `client-api-policy.test.ts`, `management-policy.test.ts`, `public-policy.test.ts`.
- Orodha ya umma inayoruhusiwa: `tests/unit/public-api-routes.test.ts`.
- Endesha jaribio lengwa: `node --import tsx/esm --test tests/unit/authz/classify.test.ts`.

## Utatuzi

Bomba la uchakataji huweka mihuri ifuatayo kwenye majibu kila wakati:

```
x-request-id:               <kitambulisho cha uhusianishaji, hurudiwa katika miili ya hitilafu>
x-omniroute-route-class:    PUBLIC | CLIENT_API | MANAGEMENT
```

Kwa maombi yaliyothibitishwa, vichwa vya ombi la upande wa seva lengwa (upstream) pia hujumuisha:

```
x-omniroute-auth-kind:      client_api_key | dashboard_session | management_key | anonymous
x-omniroute-auth-id:        key_<last-4> | "dashboard" | "anonymous"
x-omniroute-auth-label:     (si lazima)
x-omniroute-auth-scopes:    orodha iliyotenganishwa kwa koma
```

Tumia `assertAuth(req, expectedClass)` ndani ya vishughulikiaji — hutupa `AuthzAssertionError` yenye msimbo `AUTHZ_NOT_INITIALIZED` ikiwa middleware ilipitishwa bila kutekelezwa (husaidia kugundua hitilafu za mipangilio zinapojirudia katika majaribio).

## Tazama Pia

- [API_REFERENCE.md](../reference/API_REFERENCE.md) — alama ya uthibitishaji kwa kila sehemu ya mwisho
- [COMPLIANCE.md](../security/COMPLIANCE.md) — kumbukumbu ya ukaguzi kwa matukio ya uthibitishaji
- [MCP-SERVER.md](../frameworks/MCP-SERVER.md#three-scope-namespaces) — nafasi tatu za majina ya wigo na katalogi ya wigo wa zana ya MCP
- Chanzo: `src/server/authz/`, `src/lib/api/requireManagementAuth.ts`
