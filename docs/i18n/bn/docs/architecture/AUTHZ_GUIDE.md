# Authorization Guide (বাংলা)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/AUTHZ_GUIDE.md) · 🇪🇹 [am](../../../am/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/AUTHZ_GUIDE.md) · 🇦🇿 [az](../../../az/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇦 [bs](../../../bs/docs/architecture/AUTHZ_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/architecture/AUTHZ_GUIDE.md) · 🇩🇰 [da](../../../da/docs/architecture/AUTHZ_GUIDE.md) · 🇩🇪 [de](../../../de/docs/architecture/AUTHZ_GUIDE.md) · 🇬🇷 [el](../../../el/docs/architecture/AUTHZ_GUIDE.md) · 🇪🇸 [es](../../../es/docs/architecture/AUTHZ_GUIDE.md) · 🇪🇪 [et](../../../et/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/architecture/AUTHZ_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/AUTHZ_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇪 [ga](../../../ga/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇬 [ha](../../../ha/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇱 [he](../../../he/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/architecture/AUTHZ_GUIDE.md) · 🇭🇷 [hr](../../../hr/docs/architecture/AUTHZ_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/AUTHZ_GUIDE.md) · 🇦🇲 [hy](../../../hy/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇩 [id](../../../id/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇬 [ig](../../../ig/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇹 [it](../../../it/docs/architecture/AUTHZ_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/AUTHZ_GUIDE.md) · 🇬🇪 [ka](../../../ka/docs/architecture/AUTHZ_GUIDE.md) · 🇰🇭 [km](../../../km/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [kn](../../../kn/docs/architecture/AUTHZ_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/AUTHZ_GUIDE.md) · 🇱🇹 [lt](../../../lt/docs/architecture/AUTHZ_GUIDE.md) · 🇱🇻 [lv](../../../lv/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [ml](../../../ml/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/architecture/AUTHZ_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/AUTHZ_GUIDE.md) · 🇲🇹 [mt](../../../mt/docs/architecture/AUTHZ_GUIDE.md) · 🇲🇲 [my](../../../my/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇵 [ne](../../../ne/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇴 [no](../../../no/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [or](../../../or/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [pa](../../../pa/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/AUTHZ_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/AUTHZ_GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/AUTHZ_GUIDE.md) · 🇱🇰 [si](../../../si/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇮 [sl](../../../sl/docs/architecture/AUTHZ_GUIDE.md) · 🇷🇸 [sr](../../../sr/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/AUTHZ_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [te](../../../te/docs/architecture/AUTHZ_GUIDE.md) · 🇹🇭 [th](../../../th/docs/architecture/AUTHZ_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/architecture/AUTHZ_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/architecture/AUTHZ_GUIDE.md) · 🇺🇿 [uz](../../../uz/docs/architecture/AUTHZ_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇬 [yo](../../../yo/docs/architecture/AUTHZ_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/AUTHZ_GUIDE.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/AUTHZ_GUIDE.md)

---

> **সত্যের উৎস:** `src/server/authz/`, `src/shared/constants/publicApiRoutes.ts`, `src/lib/api/requireManagementAuth.ts`, `src/shared/utils/apiAuth.ts`
> **সর্বশেষ হালনাগাদ:** 2026-09-22 — স্কোপ নেমস্পেসগুলো MCP-SERVER.md-এর দিকে নির্দেশ করে

OmniRoute-এ একটি রুট-সচেতন অথরাইজেশন পাইপলাইন রয়েছে, যা প্রতিটি API অনুরোধকে নিয়ন্ত্রণ করে। শ্রেণিবিন্যাস **নির্ধারণবাদী** এবং **ব্যর্থ হলে বন্ধ** — শ্রেণিবদ্ধ করা যায় না এমন সবকিছু শেষ পর্যন্ত `MANAGEMENT` হিসেবে গণ্য হয় এবং একটি সেশন বা ম্যানেজমেন্ট-গ্রেড টোকেন দাবি করে। রুট রক্ষণাবেক্ষণকারী বা নতুন এন্ডপয়েন্ট ডিজাইনকারী প্রকৌশলীদের জন্য এই পৃষ্ঠায় মডেলটি ব্যাখ্যা করা হয়েছে।

![AuthZ পাইপলাইন (৩টি রুট শ্রেণি + নীতি মূল্যায়ন)](../diagrams/exported/authz-pipeline.svg)

> উৎস: [diagrams/authz-pipeline.mmd](../diagrams/authz-pipeline.mmd)

## দুটি Auth মোড

### 1. API Key (Bearer)

OpenAI/Anthropic/Gemini-সামঞ্জস্যপূর্ণ ক্লায়েন্ট API এবং কয়েকটি ম্যানেজমেন্ট রুটে ব্যবহৃত হয়, যখন কীটির `manage` স্কোপ থাকে।

```
Authorization: Bearer <api-key>
```

`src/sse/services/auth.ts`-এর `isValidApiKey()` / `extractApiKey()` দ্বারা যাচাই করা হয় এবং `src/shared/utils/apiAuth.ts`-এর মাধ্যমে পুনরায় export করা হয়। ভ্যালিডেটরটি স্থায়ী passthrough কী হিসেবে `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env var-ও গ্রহণ করে (ইস্যু #1350)।

### 2. Dashboard Session (auth_token cookie)

ড্যাশবোর্ড পেজ এবং অ্যাডমিন অপারেশনের জন্য।

```
Cookie: auth_token=<JWT signed with JWT_SECRET>
```

একটি cookie কেবল তখনই session হিসেবে গণ্য হয়, যখন JWT যাচাইয়ে উত্তীর্ণ হয় **এবং** এতে `authenticated: true` থাকে
(`src/shared/utils/dashboardSessionToken.ts` → `verifyDashboardSessionToken`)। cookie-টির প্রতিটি
ব্যবহারকারী (dashboard route guard (`isDashboardSessionAuthenticated()`), authz pipeline refresh, WebSocket handshake, live
server, `/api/settings/require-login`, `/api/auth/status`) ওই helper-এর মাধ্যমে যায়।
`JWT_SECRET` দিয়ে স্বাক্ষরিত অন্যান্য JWT-ও রয়েছে — Cursor CLI passthrough কীধারীদের জন্য
`iss "omniroute" / aud "cursor-cli"` token তৈরি করে — এবং সেগুলো কখনোই session নয়
(#13298)।

`src/shared/utils/apiAuth.ts`-এর `isDashboardSessionAuthenticated()` দ্বারা যাচাই করা হয়। JWT-এর 30 দিনের মেয়াদের মধ্যে 7 দিনের কম সময় অবশিষ্ট থাকলে pipeline স্বয়ংক্রিয়ভাবে সেটি refresh করে।

একটি session-এর 30 দিন পূর্ণ হওয়ার আগেও সেটি শেষ হতে পারে, কারণ প্রতিটি minter `mintDashboardSessionToken`-এর মাধ্যমে যায় (একটি issue time `iat` এবং একটি id `jti`) এবং verifier দুটি setting পরীক্ষা করে: `sessionsValidAfter`, যা password পরিবর্তনের সময় সেট করা হয়, ফলে তার আগে ইস্যু করা প্রতিটি session-এর verification বন্ধ হয়ে যায় (যে browser থেকে password পরিবর্তন করা হয়েছে, সেটি একটি নতুন cookie পায়); এবং `revokedDashboardSessions`, যেখানে `POST /api/auth/logout` sign-out করা session-এর `jti` যোগ করে। পুরোনো release দ্বারা তৈরি session-এ এই claim দুটির কোনোটিই থাকে না এবং প্রথম password পরিবর্তন পর্যন্ত সেগুলো বৈধ থাকে। setting পড়া না গেলে session-টিকে বিশ্বস্ত হিসেবে গণ্য করা হয় না।

কিছু management route **যেকোনো একটি** mode গ্রহণ করে: cookie অথবা `Bearer <key>`, যখন API key-টির `manage` (বা `admin`) scope থাকে। এটিই v3.8-এ যোগ করা "API call-এর মাধ্যমে configurable" workflow-কে সম্ভব করে।

#### ঐচ্ছিক OIDC login gate (#6973)

Dashboard admin login, default password login-এর পাশাপাশি একটি **opt-in** OIDC (OpenID Connect) flow-ও সমর্থন করে — password login কখনো সরানো হয় না, কেবল
এর সঙ্গে অতিরিক্ত বিকল্প যোগ করা হয়:

- `settings.oidcEnabled === true` **এবং** `oidcIssuer` /
  `oidcClientId` / `oidcClientSecret`—সবগুলো কনফিগার করা না থাকলে এটি নিষ্ক্রিয় থাকে (Settings → Auth)।
  অন্যথায় `GET /api/auth/oidc/login` `400` ফেরত দেয়।
- `GET /api/auth/oidc/login` ইস্যুয়ারের
  `/.well-known/openid-configuration` থেকে `authorization_endpoint` আবিষ্কার করে (`<issuer>/authorize`
  ফলব্যাক হিসেবে ব্যবহৃত হয়), আগত অনুরোধ থেকে রিডাইরেক্ট URI তৈরি করে
  (`x-forwarded-proto`-সচেতন), এবং একটি এলোমেলো `state`-সহ IdP-তে রিডাইরেক্ট করে,
  যা একটি `httpOnly` `oidc_state` কুকিতে সংরক্ষিত থাকে।
- `GET /api/auth/oidc/callback` `state` যাচাই করে, অথরাইজেশন
  কোড বিনিময় করে এবং ইস্যুয়ারের JWKS-এর মাধ্যমে ID টোকেনের স্বাক্ষর যাচাই করে
  (`jose`-এর `createRemoteJWKSet`, প্রতি JWKS URI অনুযায়ী ক্যাশ করা) এবং
  `issuer`/`audience` পরীক্ষা করে। `oidcAllowedSubjects` অ্যালাউলিস্ট আবশ্যক: এটি
  টোকেনের `sub` ক্লেইম অথবা এর `email` ক্লেইমের সঙ্গে মেলে—ইমেইল ক্লেইমটি কেবল
  `email_verified === true` হলে গ্রহণ করা হয়, ফলে IdP-তে থাকা কোনো অযাচাইকৃত
  ইমেইল কখনোই এই যাচাই পেরোতে পারে না—এবং কোনো এন্ট্রি না থাকলে কলব্যাক প্রতিটি
  লগইন প্রত্যাখ্যান করে (`not_configured`)।
- সফল হলে এটি পাসওয়ার্ড লগইনে ইস্যু করা **হুবহু একই** ৩০ দিনের `auth_token` JWT
  তৈরি করে (`src/app/api/auth/login/route.ts`), ফলে ড্যাশবোর্ড সেশনের বাকি
  পাইপলাইন (স্বয়ংক্রিয় রিফ্রেশ, কুকি ফ্ল্যাগ) অপরিবর্তিত থাকে—OIDC শুধু কুকি
  কীভাবে তৈরি হয় তা প্রতিস্থাপন করে, কুকিটি কী অনুমতি দেয় তা নয়।
- প্রতিটি `oidc*` সেটিং (`oidcEnabled`, `oidcDisablePasswordLogin`,
  `oidcIssuer`, `oidcClientId`, `oidcClientSecret`, `oidcAllowedSubjects`,
  `oidcRedirectPath`, `oidcScopes`) `SECURITY_IMPACTING_SETTINGS_KEYS`-এ রয়েছে
  (`src/shared/constants/securityImpactingSettings.ts`): বডিতে ম্যানেজমেন্ট
  পাসওয়ার্ডটি `currentPassword` হিসেবে না থাকলে `PATCH /api/settings`
  `400 PASSWORD_REQUIRED` দিয়ে সাড়া দেয় (ভুল হলে `401 PASSWORD_MISMATCH`)।
  `oidcDisablePasswordLogin` পাসওয়ার্ড দিয়ে _লগইন_ (`POST /api/auth/login`)
  প্রত্যাখ্যান করে, কিন্তু সংরক্ষিত পাসওয়ার্ড হ্যাশ রেখে দেয় এবং পুনঃপ্রমাণীকরণে
  এখনও সেটির বিপরীতে `currentPassword` যাচাই করা হয়।
- `corsOrigins` এবং `bruteForceProtection`-ও `SECURITY_IMPACTING_SETTINGS_KEYS`-এ
  রয়েছে: যেকোনো একটিকে শিথিল করলে লগইন প্রতিরক্ষা দুর্বল হয়, তাই এগুলোর জন্যও
  একই `currentPassword` পুনঃপ্রমাণীকরণ প্রয়োজন (Security ট্যাব এটি চায়) এবং JSON
  ইমপোর্ট এগুলো বাদ দেয়।
- প্রতিটি নিরাপত্তা-নীতি কী—`SECURITY_IMPACTING_SETTINGS_KEYS`-এর এন্ট্রিগুলো,
  প্রতিটি `oidc*` কী এবং ড্যাশবোর্ড সেশনের অবস্থা—`PATCH /api/settings`-এ
  **শুধু অপারেটরের জন্য**: একটি manage-স্কোপযুক্ত API কী বা একটি `oma_` অ্যাক্সেস
  টোকেন সঠিক `currentPassword` পাঠালেও `403` দিয়ে প্রত্যাখ্যাত হয় এবং সেই
  প্রত্যাখ্যানটি `settings.update_failed` হিসেবে `reason: OPERATOR_REQUIRED`-সহ
  অডিট করা হয় (`src/lib/api/operatorCredential.ts`-এর
  `requireOperatorCredential()`)। সাধারণ সেটিংস (থিম, প্রদর্শন পছন্দসমূহ) একটি
  `manage` কী বা একটি `admin` অ্যাক্সেস টোকেন দিয়ে পরিবর্তনযোগ্য থাকে।
  `/api/settings`-এর প্রতিটি পরিবর্তনের (এবং `/api/settings/require-login`-এরও)
  জন্য `admin` অ্যাক্সেস-টোকেন স্কোপ প্রয়োজন
  (`src/server/authz/accessScopes.ts`-এর `ADMIN_MUTATION_EXACT_PATHS`, সঠিক-পাথ
  মিল); `GET`-এর স্কোপ `read`-ই থাকে এবং অন্যান্য `/api/settings/*` সাব-রুট
  (প্রক্সি, কম্বো ডিফল্ট, মডেল অ্যালিয়াস, কম্প্রেশন, পার্জ…) পদ্ধতি থেকে অনুমিত
  `write` স্কোপ বজায় রাখে।
- `POST /api/settings/import-json` ওই পুনঃপ্রমাণীকরণ এড়িয়ে যায়, তাই লেখার আগে
  এটি `IMPORT_STRIPPED_SETTINGS_KEYS`-এর (একই ফাইল) প্রতিটি কী বাদ দেয়:
  পাসওয়ার্ড ও `currentPassword`, প্রতিটি `SECURITY_IMPACTING_SETTINGS_KEYS`
  এন্ট্রি এবং ড্যাশবোর্ড সেশনের অবস্থা (`sessionsValidAfter`,
  `revokedDashboardSessions`)। ফলে কোনো পুরোনো ব্যাকআপ ইমপোর্ট করলে পাসওয়ার্ড
  পরিবর্তন বা সাইন-আউটের মাধ্যমে ইতিমধ্যে শেষ করা কোনো সেশন পুনরুজ্জীবিত হতে
  পারে না।

## রুট শ্রেণিসমূহ

`src/server/authz/types.ts` তিনটি শ্রেণি নির্ধারণ করে; নির্ধারকভাবে শ্রেণিবদ্ধ করা যায় না এমন যেকোনো রুট ডিফল্টভাবে `MANAGEMENT`-এ পড়ে।

| শ্রেণি       | বিবরণ                                                                                                                                                   | প্রয়োজনীয় প্রমাণীকরণ                                          |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `PUBLIC`     | সুস্পষ্টভাবে নিরাপদ রুট — লগইন, লগআউট, স্ট্যাটাস, ইনিশিয়ালাইজেশন, হেলথ ও অনবোর্ডিং বুটস্ট্র্যাপ।                                                       | কোনোটি নয়                                                      |
| `CLIENT_API` | মডেল-সার্ভিং এন্ডপয়েন্ট — `/api/v1/*`, `/api/v1beta/*`, এবং অ্যালিয়াস `/v1/*`, `/v1beta/*`, `/chat/completions`, `/responses`, `/models`, `/codex/*`। | কার্যকর `REQUIRE_API_KEY` ফিচার ফ্ল্যাগ সক্রিয় থাকলে Bearer কী |
| `MANAGEMENT` | ড্যাশবোর্ড পৃষ্ঠা, সেটিংস, প্রোভাইডার, কী, অ্যাডমিন ও ডায়াগনস্টিকস এন্ডপয়েন্ট।                                                                        | ড্যাশবোর্ড সেশন অথবা `manage` স্কোপসহ Bearer                    |

কয়েকটি `MANAGEMENT` অ্যাকশন **শুধু অপারেটরের জন্য**: একটি `manage` কী যথেষ্ট নয়। সংরক্ষিত
ক্রেডেনশিয়াল এক্সপোর্ট করা (`GET /api/settings/export-json`, `GET /api/db-backups/export`,
`GET /api/db-backups/exportAll`), লাইভ ডেটার ওপর ব্যাকআপ পুনরুদ্ধার করা
(`POST /api/db-backups/import`, যার মধ্যে `dryRun=true` অন্তর্ভুক্ত; id অনুযায়ী
`POST /api/db-backups` পুনরুদ্ধার; `POST /api/settings/import-json`), রিস্টোর পয়েন্ট ধ্বংস করা
(`DELETE /api/db-backups` ক্লিনআপ এবং `PATCH /api/db-backups`, কারণ এটি যে রিটেনশন সংরক্ষণ করে
তা প্রতিটি ব্যাকআপের পর স্বয়ংক্রিয় প্রুনিং পরিচালনা করে), একটি সিঙ্ক টোকেন ইস্যু করা
(`POST /api/sync/tokens`) এবং একটি `admin` CLI অ্যাক্সেস টোকেন তৈরি করা
(`POST /api/cli/tokens`)-এর জন্য একটি ড্যাশবোর্ড সেশন, লোকাল CLI সাবজেক্ট, অথবা লগইন নিষ্ক্রিয়
থাকা আবশ্যক; যেকোনো স্কোপের API কী এবং `oma_` অ্যাক্সেস টোকেন `403` পায়। যাচাইটি
`src/lib/api/operatorCredential.ts`-এ (`resolveOperatorCredential()` /
`requireOperatorCredential()`) রয়েছে। লগইন সেটিংস পরিবর্তন করাও শুধু অপারেটরের জন্য:
`POST /api/settings/require-login` (ম্যানেজমেন্ট পাসওয়ার্ড সেট করা / `requireLogin` টগল করা)
একটি পাসওয়ার্ড বিদ্যমান হওয়ার পর কেবল ওই ক্রেডেনশিয়ালগুলোই গ্রহণ করে — প্রথমবার চালুর
বুটস্ট্র্যাপ উইন্ডোটি (যখন এখনো কোনো পাসওয়ার্ড নেই) অপরিবর্তিত থাকে — এবং পাসওয়ার্ড
প্রতিস্থাপন করতে একটি ড্যাশবোর্ড সেশনকে অবশ্যই `currentPassword` পাঠাতে হবে (এটি অনুপস্থিত
বা ভুল হলে `403`, যা `settings.update_failed` হিসেবে অডিট করা হয়)। লোকাল CLI এবং লগইন
নিষ্ক্রিয় থাকা ইনস্ট্যান্স রিকভারি পথটি বজায় রাখে এবং এটি ছাড়াই পাসওয়ার্ড সেট করতে পারে,
কারণ উভয়ই ডেটা ডিরেক্টরির মালিক হোস্টের সঙ্গে আবদ্ধ।

## পাইপলাইন

```
ইনকামিং রিকোয়েস্ট → src/proxy.ts
  → src/server/authz/pipeline.ts-এর runAuthzPipeline()
    1. বিশ্বস্ত অভ্যন্তরীণ হেডারগুলো সরিয়ে দিন (x-omniroute-auth-*, x-omniroute-route-class)
    2. রিকোয়েস্ট আইডি তৈরি করুন, classifyRoute() দিয়ে রুট শ্রেণিবদ্ধ করুন
    3. যদি pathname == "/" হয় → /dashboard-এ রিডাইরেক্ট করুন
    4. যদি ড্রেইনিং অবস্থায় (গ্রেসফুল শাটডাউন) থাকে এবং /api/* হয় → 503
    5. যদি GET ছাড়া অন্য /api/* হয় → checkBodySize() গার্ড
    6. যদি OPTIONS হয় → CORS প্রিফ্লাইট 204
    7. যদি options.enforce == false হয় → রুট-ক্লাস হেডারসহ পাস-থ্রু
    8. অন্যথায়: POLICIES[routeClass].evaluate(ctx)
       - অনুমোদন → x-omniroute-auth-{kind,id,label,scopes} স্ট্যাম্প করুন → NextResponse.next()
       - প্রত্যাখ্যান → correlation_id-সহ JSON ত্রুটি (ড্যাশবোর্ড পেজ → 302 /login)
```

বিশ্বস্ত অভ্যন্তরীণ হেডারগুলো (`src/server/authz/headers.ts`-এ সংজ্ঞায়িত) শ্রেণিবিন্যাসের আগে **ইনকামিং রিকোয়েস্ট থেকে সরিয়ে ফেলা হয়** — ক্লায়েন্টরা কোনো সাবজেক্টের ছদ্মবেশ ধারণ করতে আগে থেকেই `x-omniroute-auth-*` পূরণ করতে পারে না।

### পলিসি কনট্র্যাক্টসমূহ

প্রতিটি রুট ক্লাসের জন্য `src/server/authz/policies/`-এ একটি পলিসি রয়েছে:

- **`publicPolicy`** (`policies/public.ts`) — সর্বদা `allow({ kind: "anonymous", id: "anonymous" })` রিটার্ন করে।
- **`clientApiPolicy`** (`policies/clientApi.ts`) — Bearer এক্সট্র্যাক্ট করে এবং `validateApiKey()` দিয়ে যাচাই করে। কেবল কার্যকর `REQUIRE_API_KEY` ফিচার ফ্ল্যাগ নিষ্ক্রিয় থাকলেই অ্যানোনিমাসে ফল-থ্রু করে। কার্যকর ফ্ল্যাগটি `isRequireApiKeyEnabled()` (`DB ফিচার ফ্ল্যাগ ওভাররাইড > process.env.REQUIRE_API_KEY > ডিফল্ট`) দিয়ে নির্ধারিত হয়, ফলে Dashboard Feature Flags এবং এনভায়রনমেন্ট ভেরিয়েবলগুলো `/api/v1/*`, `/api/v1beta/*` ও অ্যালিয়াসগুলোকে সামঞ্জস্যপূর্ণভাবে নিয়ন্ত্রণ করে; রিজলভার ব্যর্থ হলে প্রবেশাধিকার বন্ধ থাকে। ক্লায়েন্ট API রুটগুলোতে ড্যাশবোর্ড-সেশন রিকোয়েস্ট অনুমোদন করে (`/api/v1/models`-সহ, যা ড্যাশবোর্ড মডেল ক্যাটালগ ব্যবহার করে)।
- **`managementPolicy`** (`policies/management.ts`) — ড্যাশবোর্ড সেশন, অভ্যন্তরীণ মডেল-সিঙ্ক রিকোয়েস্ট (`/api/providers/[name]/(sync-models|models)`-এর সঙ্গে মিলিয়ে দেখা হয়) গ্রহণ করে, অথবা `isAuthRequired()` false রিটার্ন করলে সম্পূর্ণভাবে এড়িয়ে যায়। Bearer টোকেন উপস্থিত কিন্তু অবৈধ হলে 403 (`AUTH_001`) রিটার্ন করে, অন্যথায় 401। এটি যেকোনো অথেন্টিকেশন শাখার আগেই রুট-গার্ড স্তরগুলোও (LOCAL_ONLY / ALWAYS_PROTECTED) প্রয়োগ করে — [রুট গার্ড স্তরসমূহ](../security/ROUTE_GUARD_TIERS.md) দেখুন। `LOCAL_ONLY_MANAGE_SCOPE_BYPASS_PREFIXES`-এ থাকা LOCAL_ONLY পাথগুলো (বর্তমানে: `/api/mcp/`) নন-লুপব্যাক থেকে অ্যাক্সেস করা যেতে পারে যদি Bearer কী-তে `manage` স্কোপ থাকে; অন্য সব LOCAL_ONLY পাথ স্কোপ নির্বিশেষে কঠোরভাবে লুপব্যাকেই সীমাবদ্ধ থাকে।

একটি সফল পলিসি `kind ∈ { client_api_key, dashboard_session, management_key, anonymous }`-সহ `AuthSubject` রিটার্ন করে। ডাউনস্ট্রিম হ্যান্ডলারগুলো অথেন্টিকেশন লজিক পুনরায় চালানোর পরিবর্তে `src/server/authz/assertAuth.ts`-এ থাকা `assertAuth(request, "CLIENT_API")` দিয়ে এটি পড়তে পারে।

## পাবলিক রুটের তালিকা

`src/shared/constants/publicApiRoutes.ts` হলো সুস্পষ্ট অনুমোদন-তালিকা:

তালিকাটি **আকৃতি** অনুযায়ী বিভক্ত, এবং এই বিভাজনটি অত্যন্ত গুরুত্বপূর্ণ (GHSA-74g9-q8f6-793h): একটি prefix-কে
`startsWith()` দিয়ে মেলানো হয়, তাই এটি একই প্রারম্ভিক অক্ষরবিশিষ্ট সংলগ্ন প্রতিটি path-এর সঙ্গেও মিলে যায়।
`/api/usage/om-usage`-কে prefix হিসেবে ব্যবহার করায় `/api/usage/om-usage<anything>`-কে PUBLIC হিসেবে চিহ্নিত করা হয়েছিল, এবং Next এটিকে
`/api/usage/[connectionId]`-এ resolve করে — এটি এমন একটি handler যার নিজস্ব কোনো auth নেই।

```ts
// প্রকৃত subtree। প্রতিটি entry অবশ্যই "/" দিয়ে শেষ হতে হবে (একটি unit test দ্বারা যাচাইকৃত)।
PUBLIC_API_ROUTE_PREFIXES = [
  "/api/auth/oidc/",
  "/api/v1/", // classify-এ CLIENT_API হিসেবে বিবেচিত, "no-auth public" হিসেবে নয়
  "/api/oauth/",
  "/api/codex/connect/",
  "/api/telegram/",
  "/api/cursor-cli/",
];

// একক route, হুবহু মেলানো হয় (শেষে slash থাকুক বা না থাকুক)।
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

// শুধুমাত্র-পঠনযোগ্য একক route, যেগুলো CORS origin শিথিলতাও পায়।
PUBLIC_READONLY_CORS_API_ROUTES = [
  "/api/health/ping",
  "/api/monitoring/health",
  "/api/settings/require-login",
];

// CORS শিথিলতা ছাড়া শুধুমাত্র-পঠনযোগ্য একক route।
PUBLIC_READONLY_API_ROUTES_EXACT = new Set(["/api/health"]);

PUBLIC_READONLY_METHODS = new Set(["GET", "HEAD", "OPTIONS"]);
```

শুধুমাত্র-পঠনযোগ্য route-গুলো কেবল নিরাপদ method-এর জন্যই পাবলিক। দ্রষ্টব্য: `classifyRoute()` PUBLIC fall-through থেকে `/api/v1/*` এবং `/api/v1beta/*`-কে বাদ দেয় — এগুলো সবসময় `CLIENT_API`, যাতে Bearer-key policy এখনও প্রযোজ্য থাকে।

## নতুন Route যোগ করা

### Pattern 1 — পাবলিক client API endpoint (Bearer-auth)

`/api/v1/` এবং `/api/v1beta/`-এর অধীন route-গুলো স্বয়ংক্রিয়ভাবে `CLIENT_API` হিসেবে শ্রেণিবদ্ধ হয়। Middleware Bearer যাচাই প্রয়োগ করে; route handler-গুলোকে এটি পুনরায় করতে হয় না, তবে প্রয়োজন হলে subject পড়তে পারে।

```typescript
// src/app/api/v1/your-route/route.ts
import { NextRequest, NextResponse } from "next/server";
import { assertAuth } from "@/server/authz/assertAuth";

export async function POST(req: NextRequest) {
  const subject = assertAuth(req, "CLIENT_API");
  // subject.kind === "client_api_key" | "anonymous" | "dashboard_session"
  // ... handler-এর logic
}
```

### Pattern 2 — Management endpoint (session অথবা Bearer + manage)

`src/lib/api/requireManagementAuth.ts` থেকে `requireManagementAuth()` ব্যবহার করুন:

```typescript
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";

export async function POST(request: Request) {
  const rejection = await requireManagementAuth(request);
  if (rejection) return rejection;
  // ... handler-এর logic
}
```

সফল হলে `requireManagementAuth()` `null` ফেরত দেয়, অন্যথায় একটি JSON error `Response` ফেরত দেয়:

- 401 `AUTH_001` "প্রমাণীকরণ প্রয়োজন" — কোনো credentials-ই নেই
- 403 — Bearer অবৈধ **অথবা** Bearer উপস্থিত, কিন্তু key-তে `manage` / `admin` scope নেই

`hasManageScope(scopes)` `"manage"` অথবা `"admin"`-এর জন্য true ফেরত দেয়।

### Pattern 3 — পাবলিক অনুমোদন-তালিকায় যোগ করা

সুবিধা অনুযায়ী নয়, আকৃতি অনুযায়ী set নির্বাচন করুন। একটি route `PUBLIC_API_ROUTES_EXACT`-এ যায় (অথবা শুধুমাত্র GET হলে `PUBLIC_READONLY_CORS_API_ROUTES`-এ); কেবল একটি প্রকৃত subtree `PUBLIC_API_ROUTE_PREFIXES`-এ যায়, এবং সেটি **অবশ্যই `/` দিয়ে শেষ হতে হবে**। Prefix তালিকায় একটি একক route রাখলে একই প্রারম্ভিক অক্ষরবিশিষ্ট প্রতিটি সংলগ্ন path-ও প্রকাশিত হয়ে যায় — এমনকি পরে যোগ করা dynamic-segment sibling-ও (GHSA-74g9-q8f6-793h)। `tests/unit/public-api-routes.test.ts`, `tests/unit/authz/public-route-exact-match.test.ts` এবং `tests/unit/authz/classify.test.ts`-এ unit test হালনাগাদ করুন।

## স্কোপসমূহ

তিনটি নেমস্পেস। প্রতিটি পরীক্ষক কেবল তার নিজস্ব স্ট্রিং পড়ে। পাশাপাশি তুলনা, যার মধ্যে কেন `manage` `read:compression`-এর জন্য `scopeMatches`-এ ব্যর্থ হয় এবং কেন একটি `read` অ্যাক্সেস টোকেন `PATCH /api/keys/{id}` করতে পারে না, তা এখানে রয়েছে:
[তিনটি স্কোপ নেমস্পেস](../frameworks/MCP-SERVER.md#three-scope-namespaces)।

API কিগুলো একটি `scopes` অ্যারে বহন করে (`api_keys.scopes`-এ JSON হিসেবে সংরক্ষিত, দেখুন `src/lib/db/apiKeys.ts`)।

### ব্যবস্থাপনা স্কোপ

- `manage` / `admin` — `hasManageScope`। ব্যবস্থাপনা API রুটগুলোতে Bearer অ্যাক্সেস।
- `mcp:connect`, `self:usage`, `self:account-quota`, এবং
  `policy:bypass-provider-quota` হলো সংযোজনধর্মী হুবহু-মিল স্কোপ। এগুলো
  `MANAGEMENT_API_KEY_SCOPES`-এর বাইরে থাকে। `mcp:connect` কেবল
  `/api/mcp/` নন-লুপব্যাক ব্যতিক্রমটি উন্মুক্ত করে।

### MCP টুল স্কোপসমূহ

ক্যাটালগ এবং মেলানোর নিয়মাবলি (অভিন্ন স্ট্রিং, অথবা `*` দিয়ে শেষ হওয়া কোনো মঞ্জুরকৃত স্কোপ):
[MCP টুল স্কোপসমূহ](../frameworks/MCP-SERVER.md#mcp-tool-scopes)।
`src/shared/constants/mcpScopes.ts`-এর `MCP_SCOPE_LIST` হলো মূল টাইপযুক্ত
উপসেট, সম্পূর্ণ ক্যাটালগটি নয়। `resolveCallerScopeContext()` MCP প্রমাণীকরণ তথ্য, অনুরোধের মেটাডেটা, অথবা `OMNIROUTE_MCP_SCOPES` থেকে স্কোপ নির্ধারণ করার পর
`open-sse/mcp-server/scopeEnforcement.ts`-এ প্রয়োগ কার্যকর হয়।
`OMNIROUTE_MCP_ENFORCE_SCOPES=true` না হলে এটি নিষ্ক্রিয় থাকে।

### অ্যাক্সেস-টোকেন স্কোপসমূহ

`oma_live_…` টোকেনে `read` / `write` / `admin`, `scopeSatisfies`
(`src/lib/accessTokens/scopes.ts`) অনুযায়ী র্যাঙ্ক করা। এই র্যাঙ্ক কেবল অ্যাক্সেস-টোকেন
ক্রেডেনশিয়ালের ক্ষেত্রেই প্রযোজ্য। দেখুন [ব্যবস্থাপনা প্রমাণীকরণ](../guides/MANAGEMENT-AUTH.md)।

## Auth আবশ্যকতা টগল

`src/shared/utils/apiAuth.ts`-এর `isAuthRequired()` কোনো রিকোয়েস্টের জন্য **কোনো ধরনের** auth প্রয়োগ করা হবে কি না তা নির্ধারণ করে:

- `settings.requireLogin === false` → auth বিশ্বব্যাপী নিষ্ক্রিয় থাকে।
- কোনো পাসওয়ার্ড কনফিগার করা নেই **এবং** কোনো `INITIAL_PASSWORD` env var নেই → bootstrap মোড অনবোর্ডিং উইজার্ড এবং loopback রিকোয়েস্টের অনুমতি দেয়, কিন্তু উন্মুক্ত নেটওয়ার্ক রিকোয়েস্টের জন্য তবুও ক্রেডেনশিয়াল প্রয়োজন।
- যেকোনো DB ত্রুটি → বন্ধ রেখে ব্যর্থ হয় (ডিফল্টভাবে নিরাপদ)।

ক্লায়েন্ট API কী প্রয়োগের জন্য `src/shared/utils/featureFlags.ts`-এর `isRequireApiKeyEnabled()` ব্যবহার করা হয়, সরাসরি `process.env.REQUIRE_API_KEY` পড়া হয় না। ডিপ্লয় করা ইনস্ট্যান্সগুলোর জন্য এটি গুরুত্বপূর্ণ: Dashboard → Feature Flags-এ `REQUIRE_API_KEY` টগল করলে একটি DB override সংরক্ষিত হয় এবং তাৎক্ষণিকভাবে `/v1/*`, `/v1beta/*`, `/models`, `/responses`, `/chat/completions`, `/codex/*`, এবং এই helper শেয়ার করা অন্যান্য ক্লায়েন্ট-API auth পরীক্ষায় প্রভাব ফেলে। feature flag store পড়া না গেলে, ক্লায়েন্ট API auth বন্ধ রেখে ব্যর্থ হয় এবং একটি কী আবশ্যক করে।

## ব্রেকিং পরিবর্তন — v3.8.0

`/api/v1/agents/tasks/*` এবং `/api/resilience/model-cooldowns` এন্ডপয়েন্টগুলোর জন্য **এখন ম্যানেজমেন্ট auth আবশ্যক** (commit `588a0333`)। আগে `manage` স্কোপ ছাড়া একটি সাধারণ API কী পাঠানো ক্লায়েন্টগুলো এখন `403` পায়। মাইগ্রেশন: API Keys dashboard-এ কীটিকে `manage` স্কোপ দিন, অথবা লগইন করা dashboard session ব্যবহার করুন।

## আচরণগত পরিবর্তন — v3.8.2

`/api/mcp/*` (রিমোট MCP server) এখনও ডিফল্টভাবে LOCAL_ONLY, তবে `Authorization: Bearer <api-key>` header-এ `manage` স্কোপ থাকলে এখন non-loopback রিকোয়েস্ট গ্রহণ করে। এই ব্যতিক্রমটি `src/server/authz/routeGuard.ts`-এর `LOCAL_ONLY_MANAGE_SCOPE_BYPASS_PREFIXES`-এর মাধ্যমে প্রতিটি path-এর জন্য স্পষ্টভাবে নিয়ন্ত্রিত; পাশাপাশি থাকা LOCAL_ONLY prefix `/api/cli-tools/runtime/*` ইচ্ছাকৃতভাবে bypass করা যায় না, কারণ এটি যেকোনো subprocess চালু করতে পারে। non-loopback থেকে `/api/mcp/*`-এ আসা anonymous রিকোয়েস্টগুলো এখনও `403 LOCAL_ONLY` ফেরত দেয়—যেকোনো নতুন LOCAL_ONLY path-এর ডিফল্ট কঠোর loopback-ই থাকে। দেখুন [রুট গার্ড স্তরসমূহ](../security/ROUTE_GUARD_TIERS.md#manage-scope-carve-out)।

## টেস্টিং

- ইউনিট টেস্ট: `tests/unit/authz/` — `classify.test.ts`, `pipeline.test.ts`, `client-api-policy.test.ts`, `management-policy.test.ts`, `public-policy.test.ts`।
- পাবলিক allowlist: `tests/unit/public-api-routes.test.ts`।
- নির্দিষ্ট টেস্ট চালান: `node --import tsx/esm --test tests/unit/authz/classify.test.ts`।

## ডিবাগিং

পাইপলাইনটি সবসময় রেসপন্সে নিচের হেডারগুলো যুক্ত করে:

```
x-request-id:               <কোরিলেশন আইডি, এরর বডিতে পুনরাবৃত্ত>
x-omniroute-route-class:    PUBLIC | CLIENT_API | MANAGEMENT
```

প্রমাণীকৃত রিকোয়েস্টের ক্ষেত্রে আপস্ট্রিম (হ্যান্ডলার-পক্ষের) রিকোয়েস্ট হেডারগুলোতে আরও থাকে:

```
x-omniroute-auth-kind:      client_api_key | dashboard_session | management_key | anonymous
x-omniroute-auth-id:        key_<শেষ-৪> | "dashboard" | "anonymous"
x-omniroute-auth-label:     (ঐচ্ছিক)
x-omniroute-auth-scopes:    কমা দিয়ে পৃথক করা তালিকা
```

হ্যান্ডলারের ভেতরে `assertAuth(req, expectedClass)` ব্যবহার করুন — মিডলওয়্যারটি বাইপাস করা হলে এটি `AUTHZ_NOT_INITIALIZED` কোডসহ `AuthzAssertionError` থ্রো করে (টেস্টে কনফিগারেশন রিগ্রেশন শনাক্ত করতে সহায়ক)।

## আরও দেখুন

- [API_REFERENCE.md](../reference/API_REFERENCE.md) — প্রতিটি এন্ডপয়েন্টের auth মার্কার
- [COMPLIANCE.md](../security/COMPLIANCE.md) — auth ইভেন্টগুলোর জন্য অডিট লগ
- [MCP-SERVER.md](../frameworks/MCP-SERVER.md#three-scope-namespaces) — তিনটি scope namespace এবং MCP tool-scope ক্যাটালগ
- সোর্স: `src/server/authz/`, `src/lib/api/requireManagementAuth.ts`
