# Authorization Guide (Yorùbá)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/AUTHZ_GUIDE.md) · 🇪🇹 [am](../../../am/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/AUTHZ_GUIDE.md) · 🇦🇿 [az](../../../az/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇦 [bs](../../../bs/docs/architecture/AUTHZ_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/architecture/AUTHZ_GUIDE.md) · 🇩🇰 [da](../../../da/docs/architecture/AUTHZ_GUIDE.md) · 🇩🇪 [de](../../../de/docs/architecture/AUTHZ_GUIDE.md) · 🇬🇷 [el](../../../el/docs/architecture/AUTHZ_GUIDE.md) · 🇪🇸 [es](../../../es/docs/architecture/AUTHZ_GUIDE.md) · 🇪🇪 [et](../../../et/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/architecture/AUTHZ_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/AUTHZ_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇪 [ga](../../../ga/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇬 [ha](../../../ha/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇱 [he](../../../he/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/architecture/AUTHZ_GUIDE.md) · 🇭🇷 [hr](../../../hr/docs/architecture/AUTHZ_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/AUTHZ_GUIDE.md) · 🇦🇲 [hy](../../../hy/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇩 [id](../../../id/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇬 [ig](../../../ig/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇹 [it](../../../it/docs/architecture/AUTHZ_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/AUTHZ_GUIDE.md) · 🇬🇪 [ka](../../../ka/docs/architecture/AUTHZ_GUIDE.md) · 🇰🇭 [km](../../../km/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [kn](../../../kn/docs/architecture/AUTHZ_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/AUTHZ_GUIDE.md) · 🇱🇹 [lt](../../../lt/docs/architecture/AUTHZ_GUIDE.md) · 🇱🇻 [lv](../../../lv/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [ml](../../../ml/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/architecture/AUTHZ_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/AUTHZ_GUIDE.md) · 🇲🇹 [mt](../../../mt/docs/architecture/AUTHZ_GUIDE.md) · 🇲🇲 [my](../../../my/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇵 [ne](../../../ne/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇴 [no](../../../no/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [or](../../../or/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [pa](../../../pa/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/AUTHZ_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/AUTHZ_GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/AUTHZ_GUIDE.md) · 🇱🇰 [si](../../../si/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇮 [sl](../../../sl/docs/architecture/AUTHZ_GUIDE.md) · 🇷🇸 [sr](../../../sr/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/AUTHZ_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [te](../../../te/docs/architecture/AUTHZ_GUIDE.md) · 🇹🇭 [th](../../../th/docs/architecture/AUTHZ_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/architecture/AUTHZ_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/architecture/AUTHZ_GUIDE.md) · 🇺🇿 [uz](../../../uz/docs/architecture/AUTHZ_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/AUTHZ_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/AUTHZ_GUIDE.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/AUTHZ_GUIDE.md)

---

> **Orísun òtítọ́:** `src/server/authz/`, `src/shared/constants/publicApiRoutes.ts`, `src/lib/api/requireManagementAuth.ts`, `src/shared/utils/apiAuth.ts`
> **Ìgbà tó kẹ́yìn tí wọ́n ṣe àtúnṣe:** 2026-09-22 — àwọn orúkọ ààyè ìpele tọ́ka sí MCP-SERVER.md

OmniRoute ní ọ̀nà ìfọwọ́sí tó mọ ọ̀nà tó máa ń ṣàkóso gbogbo ìbéèrè API. Ìsọ̀rí jẹ́ **tí a lè pinnu** àti **tí kò lè kùnà** — ohunkóhun tí kò bá lè ṣe ìsọ̀rí yóò di `MANAGEMENT` yóò sì béèrè ìgbà kan tàbí àmì ìpele ìṣàkóso. Ojúewé yìí ṣàlàyé àwòrán fún àwọn onímọ̀-ẹ̀rọ tó ń tọ́jú àwọn ọ̀nà tàbí tó ń ṣe àwọn ibi ìparí tuntun.

![Ọ̀nà AuthZ (àwọn ìpele ọ̀nà 3 + ìṣàyẹ̀wò ètò)](../diagrams/exported/authz-pipeline.svg)

> Orísun: [diagrams/authz-pipeline.mmd](../diagrams/authz-pipeline.mmd)

## Àwọn Ọ̀nà Ìfàṣẹsí Méjì

### 1. Kọ́kọ́rọ́ API (Bearer)

A máa ń lò ó fún àwọn API oníbàárà tó bá OpenAI/Anthropic/Gemini mu àti àwọn ipa-ọ̀nà ìṣàkóso díẹ̀ nígbà tí kọ́kọ́rọ́ náà bá ní àyè `manage`.

```
Authorization: Bearer <api-key>
```

A máa ń fìdí rẹ̀ múlẹ̀ nípasẹ̀ `isValidApiKey()` / `extractApiKey()` nínú `src/sse/services/auth.ts`, a sì tún ń gbé e jáde nípasẹ̀ `src/shared/utils/apiAuth.ts`. Olùfìdí-múlẹ̀ náà tún gba àwọn àyípadà àyíká `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` gẹ́gẹ́ bí àwọn kọ́kọ́rọ́ ìfiránṣẹ́-tààrà tó wà pẹ́ títí (ọ̀ràn #1350).

### 2. Ìgbà Dashboard (kúkì auth_token)

Fún àwọn ojú-ewé dashboard àti àwọn iṣẹ́ alákòóso.

```
Cookie: auth_token=<JWT signed with JWT_SECRET>
```

Kúkì kan jẹ́ ìgbà aṣàmúlò nìkan nígbà tí JWT bá kọjá ìjẹ́rìísí **tí** ó sì ní `authenticated: true`
(`src/shared/utils/dashboardSessionToken.ts` → `verifyDashboardSessionToken`). Gbogbo
olùlò kúkì náà (olùṣọ́ ipa-ọ̀nà dashboard (`isDashboardSessionAuthenticated()`), ìsọdọ̀tun pipeline authz, ìfọwọ́bọ̀ WebSocket, server
aláàyè, `/api/settings/require-login`, `/api/auth/status`) máa ń gba inú olùrànlọ́wọ́ yẹn kọjá.
Àwọn JWT mìíràn tí a fọwọ́ sí pẹ̀lú `JWT_SECRET` wà — ìfiránṣẹ́-tààrà Cursor CLI máa ń ṣe
àwọn token `iss "omniroute" / aud "cursor-cli"` fún àwọn tó ní kọ́kọ́rọ́ — wọn kì í sì í ṣe ìgbà aṣàmúlò láé
(#13298).

A máa ń fìdí rẹ̀ múlẹ̀ nípasẹ̀ `isDashboardSessionAuthenticated()` nínú `src/shared/utils/apiAuth.ts`. Pipeline náà máa ń sọ JWT di tuntun láìfọwọ́ṣe nígbà tí ó bá ku ọjọ́ tí kò tó 7 nínú àkókò ìwàláàyè ọjọ́ 30 rẹ̀.

Ìgbà aṣàmúlò tún lè parí kí ọjọ́ 30 rẹ̀ tó pé, nítorí pé gbogbo olùṣẹ̀dá máa ń gba inú `mintDashboardSessionToken` kọjá (àkókò ìmújáde `iat` àti ìdánimọ̀ `jti`), olùjẹ́rìísí náà sì máa ń yẹ ìṣètò méjì wò: `sessionsValidAfter`, èyí tí ìyípadà ọ̀rọ̀ aṣínà máa ń ṣètò kí gbogbo ìgbà aṣàmúlò tí a ṣe kí ó tó ṣẹlẹ̀ má ṣe kọjá ìjẹ́rìísí mọ́ (ẹ̀rọ aṣàwákiri tó yí ọ̀rọ̀ aṣínà padà yóò gba kúkì tuntun), àti `revokedDashboardSessions`, níbi tí `POST /api/auth/logout` ti máa ń fi `jti` ìgbà aṣàmúlò tí a jáde kúrò sí. Àwọn ìgbà aṣàmúlò tí ẹ̀yà àtijọ́ ṣe kò ní èyíkéyìí nínú àwọn claim wọ̀nyí, wọ́n á sì wà ní ìfọwọ́sí títí di ìyípadà ọ̀rọ̀ aṣínà àkọ́kọ́. Tí kò bá ṣeé ka àwọn ìṣètò náà, a kò ní fọkàn tán ìgbà aṣàmúlò náà.

Àwọn ipa-ọ̀nà ìṣàkóso kan gba **èyíkéyìí** nínú àwọn ọ̀nà méjèèjì: kúkì TÀBÍ `Bearer <key>` nígbà tí kọ́kọ́rọ́ API bá ní àyè `manage` (tàbí `admin`). Èyí ni ohun tó mú kí ìṣàn-iṣẹ́ “tí a lè ṣètò nípasẹ̀ àwọn ìpè API” tí a fi kún v3.8 ṣeé ṣe.

#### Ẹnu-ọ̀nà ìwọlé OIDC àṣàyàn (#6973)

Ìwọlé alákòóso dashboard tún ṣe àtìlẹ́yìn fún ìṣàn OIDC (OpenID Connect) **tí a yan láti lò**
lẹ́gbẹ̀ẹ́ ìwọlé ọ̀rọ̀ aṣínà àiyipada — a kì í yọ ìwọlé ọ̀rọ̀ aṣínà kúrò láé, a kàn
ń fi kún un:

- Ó jẹ́ pípa mọ́ àyàfi tí `settings.oidcEnabled === true` **àti pé** `oidcIssuer` /
  `oidcClientId` / `oidcClientSecret` jẹ́ títò ní ẹ̀kúnrẹ́rẹ́ (Settings → Auth).
  Bí bẹ́ẹ̀ kọ́, `GET /api/auth/oidc/login` yóò dá `400` padà.
- `GET /api/auth/oidc/login` ń ṣàwárí `authorization_endpoint` láti inú
  `/.well-known/openid-configuration` olùfúnni (yóò lo
  `<issuer>/authorize` bí èyí kò bá ṣiṣẹ́), ó ń kọ́ URI ìdarípadà láti inú ìbéèrè
  tó wọlé (pẹ̀lú ìmọ̀ nípa `x-forwarded-proto`), ó sì ń darí lọ sí IdP pẹ̀lú `state`
  àrìnká tí a tọ́jú sínú kúkì `oidc_state` `httpOnly`.
- `GET /api/auth/oidc/callback` ń fìdí `state` múlẹ̀, ó ń pààrọ̀ kóòdù àṣẹ,
  ó sì ń ṣàyẹ̀wò ìfọwọ́sí tókìnì ID nípasẹ̀ JWKS olùfúnni
  (`createRemoteJWKSet` ti `jose`, tí a ń ṣe ìpamọ́ fún URI JWKS kọ̀ọ̀kan) pẹ̀lú
  àwọn àyẹ̀wò `issuer`/`audience`. Àtòkọ ìyọ̀ǹda `oidcAllowedSubjects` jẹ́ dandan:
  ó ń bá ẹ̀sùn `sub` tókìnì náà tàbí ẹ̀sùn `email` rẹ̀ mu — ẹ̀sùn ímeèlì ni a máa
  gba kà nìkan nígbà tí `email_verified === true`, nítorí náà ímeèlì tí IdP kò
  tíì fìdí rẹ̀ múlẹ̀ kò lè kọjá ibodè náà láéláé — àti pé bí kò bá sí àkọsílẹ̀ kankan,
  callback náà yóò kọ gbogbo ìwọlé (`not_configured`).
- Nígbà àṣeyọrí, ó ń ṣe JWT `auth_token` ọjọ́ 30 **kan náà gan-an** tí ìwọlé
  pẹ̀lú ọ̀rọ̀ aṣínà ń ṣe (`src/app/api/auth/login/route.ts`), nítorí náà gbogbo
  ìlànà ìgbà dashboard tó kù (ìmúdójúìwọ̀n aládàáṣiṣẹ́, àwọn àsìá kúkì) kò yí padà —
  OIDC kàn ń rọ́pò bí a ṣe ń ṣe kúkì náà, kì í ṣe ohun tí ó ń fúnni láṣẹ sí.
- Gbogbo ètò `oidc*` (`oidcEnabled`, `oidcDisablePasswordLogin`,
  `oidcIssuer`, `oidcClientId`, `oidcClientSecret`, `oidcAllowedSubjects`,
  `oidcRedirectPath`, `oidcScopes`) wà nínú `SECURITY_IMPACTING_SETTINGS_KEYS`
  (`src/shared/constants/securityImpactingSettings.ts`): `PATCH /api/settings`
  yóò dá `400 PASSWORD_REQUIRED` padà àyàfi tí body náà bá ní ọ̀rọ̀ aṣínà ìṣàkóso
  gẹ́gẹ́ bí `currentPassword` (`401 PASSWORD_MISMATCH` tí kò bá tọ̀nà).
  `oidcDisablePasswordLogin` ń kọ ìwọlé _pẹ̀lú ọ̀rọ̀ aṣínà_ (`POST /api/auth/login`)
  ṣùgbọ́n ó ń pa hash ọ̀rọ̀ aṣínà tí a tọ́jú mọ́, ìfàṣẹsí tuntun sì tún ń ṣàyẹ̀wò
  `currentPassword` pẹ̀lú rẹ̀.
- `corsOrigins` àti `bruteForceProtection` tún wà nínú `SECURITY_IMPACTING_SETTINGS_KEYS`:
  fífún ọ̀kan nínú wọn ní àyè púpọ̀ sí i ń sọ àwọn ààbò ìwọlé di aláìlágbára, nítorí
  náà wọ́n nílò ìfàṣẹsí tuntun `currentPassword` kan náà (taabu Security ń béèrè
  fún un), ìgbàwọlé JSON sì ń yọ wọ́n kúrò.
- Gbogbo kọ́kọ́rọ́ ìlànà ààbò — àwọn àkọsílẹ̀ `SECURITY_IMPACTING_SETTINGS_KEYS`,
  gbogbo kọ́kọ́rọ́ `oidc*` àti ipò ìgbà dashboard — jẹ́ ti **olùdarí nìkan** lórí
  `PATCH /api/settings`: kọ́kọ́rọ́ API tó ní scope `manage` tàbí tókìnì àyèwọlé `oma_`
  ni a máa kọ̀ pẹ̀lú `403` kódà tí ó bá fi `currentPassword` tó tọ̀nà ránṣẹ́, a sì
  máa ṣàkọsílẹ̀ ìkọ̀sílẹ̀ náà sínú àkọsílẹ̀ àyẹ̀wò gẹ́gẹ́ bí `settings.update_failed`
  pẹ̀lú `reason: OPERATOR_REQUIRED`
  (`requireOperatorCredential()` nínú `src/lib/api/operatorCredential.ts`).
  Àwọn ètò lasán (àkòrí, àwọn ìfẹ́ ìfihàn) ṣì lè jẹ́ kí kọ́kọ́rọ́ tó ní `manage`
  tàbí tókìnì àyèwọlé `admin` kọ sí wọn. Gbogbo ìyípadà sí `/api/settings` fúnra rẹ̀
  (àti sí `/api/settings/require-login`) tún nílò scope tókìnì àyèwọlé `admin`
  (`ADMIN_MUTATION_EXACT_PATHS` nínú `src/server/authz/accessScopes.ts`, ìbámu
  ọ̀nà pípé); `GET` ṣì jẹ́ `read`, àwọn sub-routes `/api/settings/*` yòókù (proxies,
  àwọn àiyipada combo, àwọn orúkọ àfàpamọ́ model, compression, purges…) sì ń pa
  scope `write` tí a pinnu láti inú method mọ́.
- `POST /api/settings/import-json` ń fò ìfàṣẹsí tuntun yẹn kọjá, nítorí náà ó ń
  yọ gbogbo kọ́kọ́rọ́ inú `IMPORT_STRIPPED_SETTINGS_KEYS` (fáìlì kan náà) kúrò
  kí ó tó kọ: ọ̀rọ̀ aṣínà àti `currentPassword`, gbogbo àkọsílẹ̀
  `SECURITY_IMPACTING_SETTINGS_KEYS`, àti ipò ìgbà dashboard
  (`sessionsValidAfter`, `revokedDashboardSessions`).
  Nítorí náà, gbígbà backup àtijọ́ wọlé kò lè jí ìgbà kan tí ìyípadà ọ̀rọ̀ aṣínà
  tàbí ìjáde ti parí sọjí.

## Àwọn Kíláàsì Route

`src/server/authz/types.ts` ṣàlàyé kíláàsì mẹ́ta; route èyíkéyìí tí a kò bá lè pín sí kíláàsì kan ní ọ̀nà tó dájú yóò padà sí `MANAGEMENT`.

| Kíláàsì      | Àpèjúwe                                                                                                                                                        | Ìfàṣẹsí tí a nílò                                                     |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `PUBLIC`     | Àwọn route tí a ti fìdí rẹ̀ múlẹ̀ pé wọ́n ní ààbò — ìwọlé, ìjáde, ipò, ìbẹ̀rẹ̀, àyẹ̀wò ìlera, àti ìmúrasílẹ̀ onboarding.                                              | Kò sí                                                                 |
| `CLIENT_API` | Àwọn endpoint fún pípèsè model — `/api/v1/*`, `/api/v1beta/*`, pẹ̀lú àwọn alias `/v1/*`, `/v1beta/*`, `/chat/completions`, `/responses`, `/models`, `/codex/*`. | Kọ́kọ́rọ́ Bearer nígbà tí àmì ẹ̀yà `REQUIRE_API_KEY` tó ń ṣiṣẹ́ bá ti ṣiṣẹ́ |
| `MANAGEMENT` | Àwọn ojú-ewé dashboard, ètò, providers, kọ́kọ́rọ́, admin àti àwọn endpoint àyẹ̀wò ìṣòro.                                                                           | Session dashboard TÀBÍ Bearer tó ní scope `manage`                    |

Díẹ̀ lára àwọn ìṣe `MANAGEMENT` jẹ́ **fún operator nìkan**: kọ́kọ́rọ́ `manage` kò tó. Gbigbé àwọn
ìjẹ́rìísí tí a ti tọ́jú jáde (`GET /api/settings/export-json`, `GET /api/db-backups/export`,
`GET /api/db-backups/exportAll`), mímú backup padà sórí data tó ń ṣiṣẹ́
(`POST /api/db-backups/import` tó fi `dryRun=true` sínú, `POST /api/db-backups` láti mú padà nípa id,
`POST /api/settings/import-json`), pípa àwọn ibi ìmúpadàbọ̀sípò run (`DELETE /api/db-backups` fún ìwẹ̀nùmọ́,
àti `PATCH /api/db-backups` nítorí pé retention tí ó tọ́jú ló ń darí píparẹ́ aládàáṣiṣẹ́ lẹ́yìn
backup kọ̀ọ̀kan), fífi token ìmúdọ́gba jáde (`POST /api/sync/tokens`) àti ṣíṣe token ìwọlé CLI
`admin` (`POST /api/cli/tokens`) nílò session dashboard, subject CLI abẹ́lẹ̀, tàbí kí ìwọlé
jẹ́ dídálẹ́kun; àwọn kọ́kọ́rọ́ API ti scope èyíkéyìí àti àwọn token ìwọlé `oma_` yóò gba `403`. Àyẹ̀wò náà
wà nínú `src/lib/api/operatorCredential.ts` (`resolveOperatorCredential()` /
`requireOperatorCredential()`). Yíyí àwọn ètò ìwọlé padà jẹ́ fún operator nìkan pẹ̀lú:
`POST /api/settings/require-login` (ṣíṣètò ọ̀rọ̀ aṣínà iṣakoso / yíyí `requireLogin` padà) gba
àwọn ìjẹ́rìísí wọ̀nyẹn nìkan lẹ́yìn tí ọ̀rọ̀ aṣínà bá ti wà — àyè ìmúrasílẹ̀ ìgbà àkọ́kọ́ (nígbà tí
ọ̀rọ̀ aṣínà kò tíì sí) kò yí padà — session dashboard sì gbọ́dọ̀ fi `currentPassword` ránṣẹ́ láti
rọ́pò ọ̀rọ̀ aṣínà (`403` nígbà tí kò bá sí tàbí tí kò tọ́, tí a ó sì ṣàkọsílẹ̀ rẹ̀ gẹ́gẹ́ bí
`settings.update_failed`). CLI abẹ́lẹ̀ àti instance kan tí ìwọlé rẹ̀ jẹ́ dídálẹ́kun ṣì ní ọ̀nà
ìmúpadàbọ̀sípò, wọ́n sì lè ṣètò ọ̀rọ̀ aṣínà láìsí i, nítorí pé àwọn méjèèjì ni a so mọ́ host tó ni
àkójọpọ̀ data náà.

## Ìṣàn Iṣẹ́

```
Ìbéèrè tó ń wọlé → src/proxy.ts
  → runAuthzPipeline() nínú src/server/authz/pipeline.ts
    1. Yọ àwọn header inú tí a fọkàn tán kúrò (x-omniroute-auth-*, x-omniroute-route-class)
    2. Ṣẹ̀dá id ìbéèrè, pín ìtọ́sọ́nà sí kíláàsì nípasẹ̀ classifyRoute()
    3. Tí pathname == "/" → darí padà sí /dashboard
    4. Tí ètò bá ń dáwọ́ dúró (graceful shutdown) tí ó sì jẹ́ /api/* → 503
    5. Tí ó bá jẹ́ /api/* tí kì í ṣe GET → lo ìṣọ́ checkBodySize()
    6. Tí ó bá jẹ́ OPTIONS → ìmúrasílẹ̀ CORS 204
    7. Tí options.enforce == false → jẹ́ kí ó kọjá pẹ̀lú àwọn header kíláàsì-ìtọ́sọ́nà
    8. Bí bẹ́ẹ̀ kọ́: POLICIES[routeClass].evaluate(ctx)
       - allow  → fi àmì x-omniroute-auth-{kind,id,label,scopes} sí i → NextResponse.next()
       - reject → àṣìṣe JSON pẹ̀lú correlation_id (àwọn ojúewé pátákó ìṣàkóso → 302 /login)
```

Àwọn header inú tí a fọkàn tán (tí a ṣàlàyé nínú `src/server/authz/headers.ts`) ni a **yọ kúrò nínú àwọn ìbéèrè tó ń wọlé** ṣáájú pípín wọn sí kíláàsì — àwọn client kò lè kọ́kọ́ fi `x-omniroute-auth-*` sínú ìbéèrè láti ṣe bí ẹni pé wọ́n jẹ́ subject kan.

### Àwọn àdéhùn policy

Kíláàsì ìtọ́sọ́nà kọ̀ọ̀kan ní policy kan nínú `src/server/authz/policies/`:

- **`publicPolicy`** (`policies/public.ts`) — máa ń dá `allow({ kind: "anonymous", id: "anonymous" })` padà ní gbogbo ìgbà.
- **`clientApiPolicy`** (`policies/clientApi.ts`) — ń yọ Bearer jáde, ó sì ń fìdí rẹ̀ múlẹ̀ nípasẹ̀ `validateApiKey()`. Ó máa ń tẹ̀síwájú gẹ́gẹ́ bí anonymous kìkì nígbà tí àsíá ẹ̀yà `REQUIRE_API_KEY` tó n ṣiṣẹ́ kò bá ṣiṣẹ́. A máa ń pinnu àsíá tó n ṣiṣẹ́ nípasẹ̀ `isRequireApiKeyEnabled()` (`àtúnṣe àsíá ẹ̀yà DB > process.env.REQUIRE_API_KEY > iye àìyípadà`) kí Àwọn Àsíá Ẹ̀yà Pátákó Ìṣàkóso àti àwọn environment variable lè ṣàkóso `/api/v1/*`, `/api/v1beta/*`, àti àwọn orúkọ mìíràn ní ọ̀nà kan náà; ìkùnà resolver máa ń kọ̀ láìláàyè. Ó gba àwọn ìbéèrè ìjókòó pátákó ìṣàkóso láàyè lórí àwọn ìtọ́sọ́nà API client (pẹ̀lú `/api/v1/models`, tí àkójọ model pátákó ìṣàkóso ń lò).
- **`managementPolicy`** (`policies/management.ts`) — gba ìjókòó pátákó ìṣàkóso, àwọn ìbéèrè ìmúdójúìwọ̀n model inú (tí a bá mú dọ́gba pẹ̀lú `/api/providers/[name]/(sync-models|models)`), tàbí ó foju kọ ọ́ pátápátá tí `isAuthRequired()` bá dá false padà. Ó dá 403 (`AUTH_001`) padà nígbà tí token Bearer bá wà ṣùgbọ́n tí kò fẹsẹ̀ múlẹ̀, àti 401 ní gbogbo ọ̀nà mìíràn. Ó tún ń fipá mú àwọn ìpele ìṣọ́-ìtọ́sọ́nà (LOCAL_ONLY / ALWAYS_PROTECTED) ṣáájú ẹ̀ka ìfàṣẹsí èyíkéyìí — wo [Àwọn Ìpele Ìṣọ́ Ìtọ́sọ́nà](../security/ROUTE_GUARD_TIERS.md). Àwọn path LOCAL_ONLY nínú `LOCAL_ONLY_MANAGE_SCOPE_BYPASS_PREFIXES` (lọ́wọ́lọ́wọ́: `/api/mcp/`) lè jẹ́ kí a wọlé sí wọn láti ibi tí kì í ṣe loopback nígbà tí kọ́kọ́rọ́ Bearer bá ní scope `manage`; gbogbo àwọn path LOCAL_ONLY mìíràn ṣì nílò strict-loopback láìka scope sí.

Policy tó ṣàṣeyọrí máa ń dá `AuthSubject` padà pẹ̀lú `kind ∈ { client_api_key, dashboard_session, management_key, anonymous }`. Àwọn handler tó wà lẹ́yìn lè kà á nípasẹ̀ `assertAuth(request, "CLIENT_API")` nínú `src/server/authz/assertAuth.ts` dípò ṣíṣe logic ìfàṣẹsí náà lẹ́ẹ̀kan sí i.

## Àtòjọ Àwọn Route Gbangba

`src/shared/constants/publicApiRoutes.ts` ni àtòjọ ìyọ̀ǹda tó ṣe kedere:

A pín àtòjọ náà gẹ́gẹ́ bí **ìrísí**, ìpín yìí sì ṣe pàtàkì fún bí ètò náà ṣe ń ṣiṣẹ́ (GHSA-74g9-q8f6-793h): a máa ń fi `startsWith()` ṣe ìbámu prefix kan, nítorí náà ó tún máa ń bá gbogbo path tó wà lẹ́gbẹ̀ẹ́ tí wọ́n ní àwọn àmì ìbẹ̀rẹ̀ kan náà mu.
`/api/usage/om-usage` gẹ́gẹ́ bí prefix sọ `/api/usage/om-usage<anything>` di GBANGBA, Next sì túmọ̀
èyí sí `/api/usage/[connectionId]` — handler kan tí kò ní auth tirẹ̀.

```ts
// Àwọn subtree gidi. Gbogbo entry GBỌ́DỌ̀ parí pẹ̀lú "/" (unit test kan ń ṣàyẹ̀wò èyí).
PUBLIC_API_ROUTE_PREFIXES = [
  "/api/auth/oidc/",
  "/api/v1/", // a kà á sí CLIENT_API nínú classify, kì í ṣe "gbangba-láìsí-auth"
  "/api/oauth/",
  "/api/codex/connect/",
  "/api/telegram/",
  "/api/cursor-cli/",
];

// Àwọn route ẹyọ kan, tí a ń bá mu GANGAN (yálà pẹ̀lú slash ìparí tàbí láìsí i).
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

// Àwọn route ẹyọ tí a kàn lè kà tí wọ́n tún gba ìròrùn origin CORS.
PUBLIC_READONLY_CORS_API_ROUTES = [
  "/api/health/ping",
  "/api/monitoring/health",
  "/api/settings/require-login",
];

// Route ẹyọ tí a kàn lè kà LÁÌSÍ ìròrùn CORS.
PUBLIC_READONLY_API_ROUTES_EXACT = new Set(["/api/health"]);

PUBLIC_READONLY_METHODS = new Set(["GET", "HEAD", "OPTIONS"]);
```

Àwọn route tí a kàn lè kà jẹ́ gbangba **nìkan** fún àwọn method tó ní ààbò. Àkíyèsí: `classifyRoute()` yọ `/api/v1/*` àti `/api/v1beta/*` kúrò nínú PUBLIC fall-through — `CLIENT_API` ni wọ́n jẹ́ ní gbogbo ìgbà, kí ìlànà Bearer-key lè máa ṣiṣẹ́ síbẹ̀.

## Fífì Route Tuntun Kún Un

### Àpẹẹrẹ 1 — Endpoint API oníbàárà gbangba (Bearer-auth)

Àwọn route lábẹ́ `/api/v1/` àti `/api/v1beta/` ni a máa ń pín sí `CLIENT_API` láìfọwọ́ṣe. Middleware náà ń fipá mú àyẹ̀wò Bearer; àwọn route handler kò nílò láti tún un ṣe, ṣùgbọ́n wọ́n lè ka subject náà bí ó bá wúlò.

```typescript
// src/app/api/v1/your-route/route.ts
import { NextRequest, NextResponse } from "next/server";
import { assertAuth } from "@/server/authz/assertAuth";

export async function POST(req: NextRequest) {
  const subject = assertAuth(req, "CLIENT_API");
  // subject.kind === "client_api_key" | "anonymous" | "dashboard_session"
  // ... ìlànà handler
}
```

### Àpẹẹrẹ 2 — Endpoint ìṣàkóso (session tàbí Bearer + manage)

Lo `requireManagementAuth()` láti `src/lib/api/requireManagementAuth.ts`:

```typescript
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";

export async function POST(request: Request) {
  const rejection = await requireManagementAuth(request);
  if (rejection) return rejection;
  // ... ìlànà handler
}
```

`requireManagementAuth()` máa ń dá `null` padà nígbà àṣeyọrí tàbí `Response` àṣìṣe JSON kan:

- 401 `AUTH_001` "A nílò ìfàṣẹsí" — kò sí credential rárá
- 403 — Bearer tí kò tọ́ **tàbí** Bearer wà ṣùgbọ́n key náà kò ní scope `manage` / `admin`

`hasManageScope(scopes)` máa ń dá true padà fún `"manage"` tàbí `"admin"`.

### Àpẹẹrẹ 3 — Fífì kún àtòjọ ìyọ̀ǹda gbangba

Yan set náà gẹ́gẹ́ bí ìrísí, kì í ṣe nítorí ìrọ̀rùn. Route kan ṣoṣo lọ sínú `PUBLIC_API_ROUTES_EXACT` (tàbí `PUBLIC_READONLY_CORS_API_ROUTES` fún GET-nìkan); subtree gidi nìkan ló yẹ kó lọ sínú `PUBLIC_API_ROUTE_PREFIXES`, ó sì **gbọdọ̀ parí pẹ̀lú `/`**. Fífi route kan ṣoṣo sínú àtòjọ prefix tún máa ń sọ gbogbo path tó wà lẹ́gbẹ̀ẹ́ tí wọ́n ní àwọn àmì ìbẹ̀rẹ̀ kan náà di gbangba — pẹ̀lú àwọn dynamic-segment sibling tí a bá fi kún un lọ́jọ́ iwájú (GHSA-74g9-q8f6-793h). Ṣàfikún àwọn unit test ní `tests/unit/public-api-routes.test.ts`, `tests/unit/authz/public-route-exact-match.test.ts` àti `tests/unit/authz/classify.test.ts`.

## Àwọn Àyè

Àwọn àyè orúkọ mẹ́ta. Olùṣàyẹ̀wò kọ̀ọ̀kan ka àwọn okùn tirẹ̀ nìkan. Ìfiwéra, pẹ̀lú ìdí tí `manage` fi kùnà `scopeMatches` fún `read:compression` àti ìdí tí àmì ìwọlé `read` kò fi lè `PATCH /api/keys/{id}`, wà ní [Àwọn àyè orúkọ mẹ́ta](../frameworks/MCP-SERVER.md#three-scope-namespaces).

Àwọn kọ́kọ́rọ́ API gbé àtòpọ̀ `scopes` (tí a tọ́jú sí bi JSON nínú `api_keys.scopes`, wo `src/lib/db/apiKeys.ts`).

### Àyè ìṣàkóso

- `manage` / `admin` — `hasManageScope`. Ìwọlé tí ó gbé àmì sí àwọn ọ̀nà API ìṣàkóso.
- `mcp:connect`, `self:usage`, `self:account-quota`, àti
  `policy:bypass-provider-quota` jẹ́ àwọn àyè ìbámu-gangan tí a lè fi kún. Wọ́n wà ní ìta `MANAGEMENT_API_KEY_SCOPES`. `mcp:connect` ṣí
  `/api/mcp/` ìpín-ìwọlé tí kìí ṣe loopback nìkan.

### Àwọn àyè irinṣẹ́ MCP

Ìtòlẹ́sẹẹsẹ àti àwọn òfin ìbámu (okùn kan náà, tàbí àyè tí a fún tí ó parí pẹ̀lú `*`):
[Àwọn àyè irinṣẹ́ MCP](../frameworks/MCP-SERVER.md#mcp-tool-scopes).
`MCP_SCOPE_LIST` nínú `src/shared/constants/mcpScopes.ts` jẹ́ ìpín-ẹ̀ka tí a tẹ́ tẹ́lẹ̀, kìí ṣe gbogbo ìtòlẹ́sẹẹsẹ náà. Ìmúṣẹ́ ń ṣiṣẹ́ nínú
`open-sse/mcp-server/scopeEnforcement.ts` lẹ́hìn tí `resolveCallerScopeContext()`
bá ti yanjú àwọn àyè láti ìwífún ìfọwọ́sí MCP, metadata ìbéèrè, tàbí `OMNIROUTE_MCP_SCOPES`. Kò ní ṣiṣẹ́ àyàfi tí `OMNIROUTE_MCP_ENFORCE_SCOPES=true` bá wà.

### Àwọn àyè àmì ìwọlé

`read` / `write` / `admin` lórí àwọn àmì `oma_live_…`, tí a tò lẹ́sẹẹsẹ nípasẹ̀ `scopeSatisfies`
(`src/lib/accessTokens/scopes.ts`). Ìpele yìí kan ìwé-ẹ̀rí àmì ìwọlé nìkan. Wo [Ìfọwọ́sí Ìṣàkóso](../guides/MANAGEMENT-AUTH.md).

## Bọ́tìnì Ìbéèrè Ìfàṣẹsí

`isAuthRequired()` nínú `src/shared/utils/apiAuth.ts` ló ń pinnu bóyá a ó fi **ìfàṣẹsí èyíkéyìí** múlẹ̀ fún ìbéèrè kan:

- `settings.requireLogin === false` → ìfàṣẹsí jẹ́ pípa patapata káàkiri ètò.
- Kò sí ọ̀rọ̀ aṣínà tí a ṣètò **àti pé** kò sí env var `INITIAL_PASSWORD` → ipò ìbẹ̀rẹ̀ ń gba olùrànlọ́wọ́ onboarding àti àwọn ìbéèrè loopback láyè, ṣùgbọ́n àwọn ìbéèrè nẹ́tíwọ́ọ̀kì tí a ṣí síta ṣì nílò ẹ̀rí ìdánimọ̀.
- Àṣìṣe DB èyíkéyìí → ó máa ń kọ̀ láìgba wọlé (ààbò-gẹ́gẹ́-bí-àiyípẹ̀).

Ìmúlò kọ́kọ́rọ́ API oníbàárà ń lo `isRequireApiKeyEnabled()` nínú `src/shared/utils/featureFlags.ts`, kì í ṣe kíkà `process.env.REQUIRE_API_KEY` ní tààrà. Èyí ṣe pàtàkì fún àwọn instance tí a ti ṣe àgbékalẹ̀ wọn: yíyí `REQUIRE_API_KEY` padà nínú Dashboard → Feature Flags ń tọ́jú override DB kan, ó sì ń ní ipa lẹ́sẹ̀kẹsẹ̀ lórí `/v1/*`, `/v1beta/*`, `/models`, `/responses`, `/chat/completions`, `/codex/*`, àti àwọn àyẹ̀wò ìfàṣẹsí API oníbàárà mìíràn tí wọ́n ń lo olùrànlọ́wọ́ yìí papọ̀. Tí a kò bá lè ka ibi ìtọ́jú feature flag náà, ìfàṣẹsí API oníbàárà máa ń kọ̀ láìgba wọlé, yóò sì béèrè kọ́kọ́rọ́ kan.

## Àyípadà Tó Fọ́ Ìbámu — v3.8.0

Àwọn endpoint `/api/v1/agents/tasks/*` àti `/api/resilience/model-cooldowns` **ní báyìí nílò ìfàṣẹsí ìṣàkóso** (commit `588a0333`). Àwọn oníbàárà tí wọ́n ti ń fi kọ́kọ́rọ́ API àdáṣe ránṣẹ́ láìsí ìwọ̀n ààyè `manage` máa gba `403`. Ìṣílọ: yálà fún kọ́kọ́rọ́ náà ní ìwọ̀n ààyè `manage` nínú dashboard API Keys, tàbí lo session dashboard tí a ti wọlé sí.

## Àyípadà Ìhùwàsí — v3.8.2

`/api/mcp/*` (server MCP jíjìn) ṣì jẹ́ LOCAL_ONLY ní àiyípẹ̀, ṣùgbọ́n ní báyìí ó ń gba àwọn ìbéèrè tí kì í ṣe loopback nígbà tí header `Authorization: Bearer <api-key>` bá ní ìwọ̀n ààyè `manage`. Ààyè àkànṣe náà jẹ́ dídènà ní kedere fún path kọ̀ọ̀kan nípasẹ̀ `LOCAL_ONLY_MANAGE_SCOPE_BYPASS_PREFIXES` nínú `src/server/authz/routeGuard.ts`; prefix LOCAL_ONLY ẹlẹgbẹ́ rẹ̀ `/api/cli-tools/runtime/*` jẹ́ èyí tí a mọ̀ọ́mọ̀ ṣe pé a kò lè kọjá rẹ̀ nítorí pé ó lè dá àwọn subprocess aláìlópin sílẹ̀. Àwọn ìbéèrè aláìlórúkọ sí `/api/mcp/*` láti ibi tí kì í ṣe loopback ṣì ń dá `403 LOCAL_ONLY` padà — àiyípẹ̀ fún path LOCAL_ONLY tuntun èyíkéyìí ṣì jẹ́ loopback nìkan tó muna. Wo [Àwọn Ìpele Route Guard](../security/ROUTE_GUARD_TIERS.md#manage-scope-carve-out).

## Ìdánwò

- Àwọn ìdánwò unit: `tests/unit/authz/` — `classify.test.ts`, `pipeline.test.ts`, `client-api-policy.test.ts`, `management-policy.test.ts`, `public-policy.test.ts`.
- Àkójọ àṣẹ gbogbogbò: `tests/unit/public-api-routes.test.ts`.
- Ṣíṣe ìdánwò àfojúsùn: `node --import tsx/esm --test tests/unit/authz/classify.test.ts`.

## Ṣíṣe àtúnṣe àṣìṣe

Pipeline náà máa ń fi àwọn àkọlé wọ̀nyí sí gbogbo ìdáhùn:

```
x-request-id:               <correlation id, echoed in error bodies>
x-omniroute-route-class:    PUBLIC | CLIENT_API | MANAGEMENT
```

Fún àwọn ìbéèrè tí a ti jẹ́rìí ìdánimọ̀ wọn, àwọn àkọlé ìbéèrè upstream (ní ẹ̀gbẹ́ handler) tún ní:

```
x-omniroute-auth-kind:      client_api_key | dashboard_session | management_key | anonymous
x-omniroute-auth-id:        key_<last-4> | "dashboard" | "anonymous"
x-omniroute-auth-label:     (àṣàyàn)
x-omniroute-auth-scopes:    àkójọ tí àmì kọ́mà yà sọ́tọ̀
```

Lo `assertAuth(req, expectedClass)` nínú àwọn handler — ó máa ń ju `AuthzAssertionError` pẹ̀lú kóòdù `AUTHZ_NOT_INITIALIZED` bí a bá ti kọjá middleware náà (èyí wúlò fún ṣíṣe àmúlò àwọn ìdàgbàsókè sẹ́yìn nínú ìṣètò nígbà ìdánwò).

## Wo Pẹ̀lú

- [API_REFERENCE.md](../reference/API_REFERENCE.md) — àmì ìfọwọ́sí fún ojúami kọ̀ọ̀kan
- [COMPLIANCE.md](../security/COMPLIANCE.md) — àkọsílẹ̀ àyẹ̀wò fún àwọn ìṣẹ̀lẹ̀ ìfọwọ́sí
- [MCP-SERVER.md](../frameworks/MCP-SERVER.md#three-scope-namespaces) — àwọn ààyè orúkọ ìpele mẹ́ta àti àtòjọ àwọn irinṣẹ́ MCP
- Orísun: `src/server/authz/`, `src/lib/api/requireManagementAuth.ts`
