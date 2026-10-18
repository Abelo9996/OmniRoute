# Authorization Guide (Oʻzbekcha)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/AUTHZ_GUIDE.md) · 🇪🇹 [am](../../../am/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/AUTHZ_GUIDE.md) · 🇦🇿 [az](../../../az/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇦 [bs](../../../bs/docs/architecture/AUTHZ_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/architecture/AUTHZ_GUIDE.md) · 🇩🇰 [da](../../../da/docs/architecture/AUTHZ_GUIDE.md) · 🇩🇪 [de](../../../de/docs/architecture/AUTHZ_GUIDE.md) · 🇬🇷 [el](../../../el/docs/architecture/AUTHZ_GUIDE.md) · 🇪🇸 [es](../../../es/docs/architecture/AUTHZ_GUIDE.md) · 🇪🇪 [et](../../../et/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/architecture/AUTHZ_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/AUTHZ_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇪 [ga](../../../ga/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇬 [ha](../../../ha/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇱 [he](../../../he/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/architecture/AUTHZ_GUIDE.md) · 🇭🇷 [hr](../../../hr/docs/architecture/AUTHZ_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/AUTHZ_GUIDE.md) · 🇦🇲 [hy](../../../hy/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇩 [id](../../../id/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇬 [ig](../../../ig/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇹 [it](../../../it/docs/architecture/AUTHZ_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/AUTHZ_GUIDE.md) · 🇬🇪 [ka](../../../ka/docs/architecture/AUTHZ_GUIDE.md) · 🇰🇭 [km](../../../km/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [kn](../../../kn/docs/architecture/AUTHZ_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/AUTHZ_GUIDE.md) · 🇱🇹 [lt](../../../lt/docs/architecture/AUTHZ_GUIDE.md) · 🇱🇻 [lv](../../../lv/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [ml](../../../ml/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/architecture/AUTHZ_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/AUTHZ_GUIDE.md) · 🇲🇹 [mt](../../../mt/docs/architecture/AUTHZ_GUIDE.md) · 🇲🇲 [my](../../../my/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇵 [ne](../../../ne/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇴 [no](../../../no/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [or](../../../or/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [pa](../../../pa/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/AUTHZ_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/AUTHZ_GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/AUTHZ_GUIDE.md) · 🇱🇰 [si](../../../si/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇮 [sl](../../../sl/docs/architecture/AUTHZ_GUIDE.md) · 🇷🇸 [sr](../../../sr/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/AUTHZ_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [te](../../../te/docs/architecture/AUTHZ_GUIDE.md) · 🇹🇭 [th](../../../th/docs/architecture/AUTHZ_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/architecture/AUTHZ_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/architecture/AUTHZ_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇬 [yo](../../../yo/docs/architecture/AUTHZ_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/AUTHZ_GUIDE.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/AUTHZ_GUIDE.md)

---

> **Haqiqat manbai:** `src/server/authz/`, `src/shared/constants/publicApiRoutes.ts`, `src/lib/api/requireManagementAuth.ts`, `src/shared/utils/apiAuth.ts`
> **Oxirgi yangilangan sana:** 2026-09-22 — koʻlam nomfazo (scope namespaces) MCP-SERVER.md ga ishora qiladi

OmniRoute har bir API soʻrovini boshqaradigan marshrutni biluvchi avtorizatsiya quvuriga ega. Tasniflash **deterministik** va **fail-closed** (xato boʻlsa yopiladi) — tasniflanmaydigan har qanday narsa `MANAGEMENT` sifatida yakunlanadi va sessiya yoki boshqaruv darajasidagi token talab qiladi. Ushbu sahifa marshrutlarni saqlovchi yoki yangi yakuniy nuqtalarni loyihalashtiruvchi muhandislar uchun modelni tushuntiradi.

![AuthZ quvuri (3 ta marshrut sinfi + siyosatni baholash)](../diagrams/exported/authz-pipeline.svg)

> Manba: [diagrams/authz-pipeline.mmd](../diagrams/authz-pipeline.mmd)

## Ikki autentifikatsiya rejimi

### 1. API kaliti (Bearer)

OpenAI/Anthropic/Gemini bilan mos mijoz API’lari va kalit `manage` vakolat doirasiga ega bo‘lganda ayrim boshqaruv yo‘nalishlari uchun ishlatiladi.

```
Authorization: Bearer <api-key>
```

`src/sse/services/auth.ts` ichidagi `isValidApiKey()` / `extractApiKey()` orqali tekshiriladi va `src/shared/utils/apiAuth.ts` orqali qayta eksport qilinadi. Validator, shuningdek, `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` muhit o‘zgaruvchilarini doimiy to‘g‘ridan-to‘g‘ri uzatish kalitlari sifatida qabul qiladi (muammo #1350).

### 2. Boshqaruv paneli sessiyasi (auth_token cookie-fayli)

Boshqaruv paneli sahifalari va administrator amallari uchun.

```
Cookie: auth_token=<JWT_SECRET bilan imzolangan JWT>
```

Cookie-fayl faqat JWT tekshiruvdan o‘tsa **va** `authenticated: true` qiymatini o‘z ichiga olsagina sessiya hisoblanadi
(`src/shared/utils/dashboardSessionToken.ts` → `verifyDashboardSessionToken`). Cookie-fayldan
foydalanuvchi har bir komponent (boshqaruv paneli yo‘nalishi himoyachisi (`isDashboardSessionAuthenticated()`), avtorizatsiya konveyerini yangilash, WebSocket ulanishini o‘rnatish, jonli
server, `/api/settings/require-login`, `/api/auth/status`) ushbu yordamchi orqali ishlaydi.
`JWT_SECRET` bilan imzolangan boshqa JWT’lar ham mavjud — Cursor CLI orqali to‘g‘ridan-to‘g‘ri uzatish
kalit egalariga `iss "omniroute" / aud "cursor-cli"` tokenlarini yaratadi — va ular hech qachon sessiya hisoblanmaydi
(#13298).

`src/shared/utils/apiAuth.ts` ichidagi `isDashboardSessionAuthenticated()` orqali tekshiriladi. JWT’ning 30 kunlik amal qilish muddatidan 7 kundan kam vaqt qolganda konveyer uni avtomatik ravishda yangilaydi.

Sessiya 30 kunlik muddati tugashidan oldin ham yakunlanishi mumkin, chunki har bir token yaratuvchi `mintDashboardSessionToken` orqali ishlaydi (yaratilish vaqti `iat` va identifikator `jti`) hamda tekshiruvchi ikkita sozlamani tekshiradi: `sessionsValidAfter`, u parol o‘zgartirilganda o‘rnatiladi va undan oldin yaratilgan barcha sessiyalar tekshiruvdan o‘tmay qoladi (parolni o‘zgartirgan brauzer yangi cookie-fayl oladi), hamda `revokedDashboardSessions`, unga `POST /api/auth/logout` tizimdan chiqarilgan sessiyaning `jti` qiymatini qo‘shadi. Eski versiyada yaratilgan sessiyalar ushbu da’volarning hech birini o‘z ichiga olmaydi va birinchi parol o‘zgarishigacha amal qiladi. Agar sozlamalarni o‘qib bo‘lmasa, sessiya ishonchli deb hisoblanmaydi.

Ayrim boshqaruv yo‘nalishlari **har ikkala** rejimni qabul qiladi: cookie-fayl YOKI API kaliti `manage` (yoki `admin`) vakolat doirasiga ega bo‘lganda `Bearer <key>`. Aynan shu imkoniyat v3.8 versiyasida qo‘shilgan «API chaqiruvlari orqali sozlanadigan» ish jarayonini ta’minlaydi.

#### Ixtiyoriy OIDC kirish cheklovi (#6973)

Boshqaruv panelidagi administrator kirishi standart parol orqali kirish bilan bir qatorda **ixtiyoriy ravishda yoqiladigan** OIDC (OpenID Connect) jarayonini ham qo‘llab-quvvatlaydi — parol orqali kirish hech qachon olib tashlanmaydi, faqat qo‘shimcha imkoniyat bilan to‘ldiriladi:

- Faqat `settings.oidcEnabled === true` **boʻlsa** va `oidcIssuer` /
  `oidcClientId` / `oidcClientSecret` barchasi sozlangan boʻlsa yoqiladi (Sozlamalar → Autentifikatsiya).
  Aks holda `GET /api/auth/oidc/login` `400` qaytaradi.
- `GET /api/auth/oidc/login` issuerning
  `/.well-known/openid-configuration` manzilidan `authorization_endpoint`ni aniqlaydi (topilmasa
  `<issuer>/authorize`dan foydalanadi), kiruvchi soʻrov asosida qayta yoʻnaltirish URI manzilini
  (`x-forwarded-proto`ni hisobga olgan holda) yaratadi va `httpOnly` turidagi `oidc_state`
  cookie faylida saqlangan tasodifiy `state` bilan IdPga qayta yoʻnaltiradi.
- `GET /api/auth/oidc/callback` `state`ni tekshiradi, avtorizatsiya
  kodini almashtiradi va ID token imzosini issuerning JWKS manzili orqali
  (`jose`ning `createRemoteJWKSet` funksiyasi, har bir JWKS URI uchun keshlangan) `issuer`/`audience`
  tekshiruvlari bilan tasdiqlaydi. `oidcAllowedSubjects` ruxsat roʻyxati majburiy: u
  tokenning `sub` daʼvosiga yoki `email` daʼvosiga mos keladi — email daʼvosi faqat
  `email_verified === true` boʻlganda hisobga olinadi, shuning uchun IdPdagi tasdiqlanmagan email hech qachon
  tekshiruvdan oʻta olmaydi — va roʻyxatda hech qanday yozuv boʻlmasa, callback har bir kirishni rad etadi
  (`not_configured`).
- Muvaffaqiyatli yakunlanganda, u parol orqali kirish beradigan 30 kunlik aynan **oʻsha**
  `auth_token` JWTni yaratadi (`src/app/api/auth/login/route.ts`), shu sababli boshqaruv paneli
  sessiyasi konveyerining qolgan qismi (avtomatik yangilash, cookie bayroqlari) oʻzgarmaydi —
  OIDC faqat cookie qanday yaratilishini almashtiradi, uning beradigan huquqlarini emas.
- Har bir `oidc*` sozlamasi (`oidcEnabled`, `oidcDisablePasswordLogin`,
  `oidcIssuer`, `oidcClientId`, `oidcClientSecret`, `oidcAllowedSubjects`,
  `oidcRedirectPath`, `oidcScopes`) `SECURITY_IMPACTING_SETTINGS_KEYS`
  (`src/shared/constants/securityImpactingSettings.ts`) ichida joylashgan: soʻrov tanasida boshqaruv
  paroli `currentPassword` sifatida yuborilmasa, `PATCH /api/settings`
  `400 PASSWORD_REQUIRED` bilan javob beradi (parol notoʻgʻri boʻlsa,
  `401 PASSWORD_MISMATCH`). `oidcDisablePasswordLogin` parol orqali _kirish_ni
  (`POST /api/auth/login`) rad etadi, ammo saqlangan parol xeshini saqlab qoladi va qayta autentifikatsiya
  hamon `currentPassword`ni unga nisbatan tekshiradi.
- `corsOrigins` va `bruteForceProtection` ham `SECURITY_IMPACTING_SETTINGS_KEYS`
  ichida: ulardan birini yumshatish kirish himoyasini zaiflashtiradi, shu sababli ular ham xuddi shunday
  `currentPassword` bilan qayta autentifikatsiyani talab qiladi (Xavfsizlik ichki oynasi uni soʻraydi) va JSON importi
  ularni tashlab yuboradi.
- Har bir xavfsizlik siyosati kaliti — `SECURITY_IMPACTING_SETTINGS_KEYS` yozuvlari,
  har bir `oidc*` kaliti va boshqaruv paneli sessiyasi holati — `PATCH /api/settings`da faqat
  **operator uchun** mavjud: `manage` doirasidagi API kaliti yoki `oma_` kirish tokeni,
  hatto toʻgʻri `currentPassword`ni yuborsa ham, `403` bilan rad etiladi va bu rad etish
  `reason: OPERATOR_REQUIRED` bilan `settings.update_failed` sifatida auditga yoziladi
  (`src/lib/api/operatorCredential.ts` ichidagi `requireOperatorCredential()`).
  Oddiy sozlamalar (`theme`, koʻrsatish afzalliklari) `manage` kaliti
  yoki `admin` kirish tokeni orqali oʻzgartirilishi mumkinligicha qoladi. `/api/settings`ning oʻzidagi
  (shuningdek, `/api/settings/require-login`dagi) har bir oʻzgartirish uchun ham
  `admin` kirish tokeni doirasi talab qilinadi (`src/server/authz/accessScopes.ts` ichidagi
  `ADMIN_MUTATION_EXACT_PATHS`, aniq yoʻl mosligi); `GET` uchun `read` saqlanib qoladi, boshqa
  `/api/settings/*` quyi yoʻnalishlari esa (proksilar, kombinatsiya standartlari, model taxalluslari,
  siqish, tozalashlar…) metod asosida aniqlanadigan `write` doirasini saqlab qoladi.
- `POST /api/settings/import-json` bu qayta autentifikatsiyani chetlab oʻtadi, shu sababli yozishdan
  oldin `IMPORT_STRIPPED_SETTINGS_KEYS` (oʻsha fayl) ichidagi har bir kalitni olib tashlaydi: parol va
  `currentPassword`, har bir `SECURITY_IMPACTING_SETTINGS_KEYS` yozuvi hamda
  boshqaruv paneli sessiyasi holati (`sessionsValidAfter`, `revokedDashboardSessions`).
  Shuning uchun eski zaxira nusxasini import qilish parol oʻzgartirilishi yoki tizimdan chiqish natijasida
  allaqachon tugatilgan sessiyani qayta tiklay olmaydi.

## Marshrut klasslari

`src/server/authz/types.ts` uchta klassni belgilaydi; deterministik tarzda tasniflab bo‘lmaydigan har qanday marshrut `MANAGEMENT` klassiga kiritiladi.

| Klass        | Tavsif                                                                                                                                                                         | Autentifikatsiya talabi                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| `PUBLIC`     | Xavfsizligi aniq bo‘lgan marshrutlar — tizimga kirish, chiqish, holat, ishga tushirish, tizim salomatligi, dastlabki sozlash.                                                  | Talab qilinmaydi                                                                      |
| `CLIENT_API` | Modelga xizmat ko‘rsatish endpointlari — `/api/v1/*`, `/api/v1beta/*`, shuningdek `/v1/*`, `/v1beta/*`, `/chat/completions`, `/responses`, `/models`, `/codex/*` taxalluslari. | Amaldagi `REQUIRE_API_KEY` funksiya bayrog‘i yoqilganida Bearer kaliti talab qilinadi |
| `MANAGEMENT` | Boshqaruv paneli sahifalari, sozlamalar, provayderlar, kalitlar, administrator va diagnostika endpointlari.                                                                    | Boshqaruv paneli sessiyasi YOKI `manage` ko‘lamiga ega Bearer                         |

Ayrim `MANAGEMENT` amallari **faqat operator uchun**: `manage` kalitining o‘zi yetarli emas. Saqlangan
hisob ma’lumotlarini eksport qilish (`GET /api/settings/export-json`, `GET /api/db-backups/export`,
`GET /api/db-backups/exportAll`), amaldagi ma’lumotlar ustiga zaxira nusxasini tiklash
(`POST /api/db-backups/import`, jumladan `dryRun=true`, identifikator bo‘yicha tiklash uchun
`POST /api/db-backups`, `POST /api/settings/import-json`), tiklash nuqtalarini yo‘q qilish
(`DELETE /api/db-backups` orqali tozalash va `PATCH /api/db-backups`, chunki u saqlaydigan muddat
har bir zaxiralashdan keyingi avtomatik tozalashni boshqaradi), sinxronlash tokenini chiqarish
(`POST /api/sync/tokens`) va `admin` CLI kirish tokenini yaratish (`POST /api/cli/tokens`) uchun
boshqaruv paneli sessiyasi, mahalliy CLI subyekti yoki tizimga kirish o‘chirilgan bo‘lishi talab
qilinadi; istalgan ko‘lamdagi API kalitlari va `oma_` kirish tokenlari `403` oladi. Tekshiruv
`src/lib/api/operatorCredential.ts` faylida joylashgan (`resolveOperatorCredential()` /
`requireOperatorCredential()`). Tizimga kirish sozlamalarini o‘zgartirish ham faqat operator uchun:
`POST /api/settings/require-login` (boshqaruv parolini o‘rnatish / `requireLogin` holatini
almashtirish) parol mavjud bo‘lgach faqat shu hisob ma’lumotlarini qabul qiladi — birinchi ishga
tushirishdagi boshlang‘ich sozlash oynasi (hali parol yo‘q) o‘zgarishsiz qoladi — va boshqaruv
paneli sessiyasi parolni almashtirish uchun `currentPassword` yuborishi shart (u mavjud bo‘lmasa
yoki noto‘g‘ri bo‘lsa, `403` qaytariladi va `settings.update_failed` sifatida audit jurnaliga
yoziladi). Mahalliy CLI va tizimga kirish o‘chirilgan nusxada tiklash yo‘li saqlanib qoladi hamda
ular parolni busiz o‘rnatishi mumkin, chunki ikkalasi ham ma’lumotlar katalogiga egalik qiluvchi
xostga bog‘langan.

## Konveyer

```
Kiruvchi so‘rov → src/proxy.ts
  → src/server/authz/pipeline.ts ichidagi runAuthzPipeline()
    1. Ishonchli ichki sarlavhalarni olib tashlash (x-omniroute-auth-*, x-omniroute-route-class)
    2. So‘rov identifikatorini yaratish, marshrutni classifyRoute() orqali tasniflash
    3. Agar pathname == "/" bo‘lsa → /dashboard manziliga yo‘naltirish
    4. Agar tizim yakunlanayotgan bo‘lsa (to‘g‘ri yakunlash) va /api/* bo‘lsa → 503
    5. Agar GET bo‘lmagan /api/* bo‘lsa → checkBodySize() himoyasini tekshirish
    6. Agar OPTIONS bo‘lsa → CORS preflight 204
    7. Agar options.enforce == false bo‘lsa → marshrut sinfi sarlavhalari bilan o‘tkazib yuborish
    8. Aks holda: POLICIES[routeClass].evaluate(ctx)
       - allow  → x-omniroute-auth-{kind,id,label,scopes} ni belgilash → NextResponse.next()
       - reject → correlation_id bilan JSON xatosi (boshqaruv paneli sahifalari → 302 /login)
```

Ishonchli ichki sarlavhalar (`src/server/authz/headers.ts` ichida belgilangan) tasniflashdan oldin **kiruvchi so‘rovlardan olib tashlanadi** — mijozlar boshqa subyekt nomidan ish ko‘rish uchun `x-omniroute-auth-*` sarlavhalarini oldindan kirita olmaydi.

### Siyosat shartnomalari

Har bir marshrut sinfi `src/server/authz/policies/` ichida o‘z siyosatiga ega:

- **`publicPolicy`** (`policies/public.ts`) — har doim `allow({ kind: "anonymous", id: "anonymous" })` qaytaradi.
- **`clientApiPolicy`** (`policies/clientApi.ts`) — Bearer qiymatini ajratib oladi va `validateApiKey()` orqali tekshiradi. Faqat amaldagi `REQUIRE_API_KEY` funksiya bayrog‘i o‘chirilganida anonim kirishga o‘tadi. Amaldagi bayroq `isRequireApiKeyEnabled()` orqali aniqlanadi (`DB funksiya bayrog‘i ustuvor qiymati > process.env.REQUIRE_API_KEY > standart qiymat`), shu sababli boshqaruv panelidagi funksiya bayroqlari va muhit o‘zgaruvchilari `/api/v1/*`, `/api/v1beta/*` hamda taxalluslarni izchil boshqaradi; aniqlashdagi xatoliklar kirishni yopadi. Mijoz API marshrutlarida, jumladan boshqaruv panelining modellar katalogi foydalanadigan `/api/v1/models` marshrutida, boshqaruv paneli sessiyasiga ega so‘rovlarga ruxsat beradi.
- **`managementPolicy`** (`policies/management.ts`) — boshqaruv paneli sessiyasini, ichki model sinxronlash so‘rovlarini (`/api/providers/[name]/(sync-models|models)` bilan moslashtiriladi) qabul qiladi yoki `isAuthRequired()` false qaytarsa, tekshiruvni butunlay o‘tkazib yuboradi. Bearer tokeni mavjud, ammo yaroqsiz bo‘lsa 403 (`AUTH_001`), aks holda 401 qaytaradi. Shuningdek, autentifikatsiyaning har qanday tarmog‘idan oldin marshrut himoyasi darajalarini (LOCAL_ONLY / ALWAYS_PROTECTED) qo‘llaydi — [Marshrut himoyasi darajalari](../security/ROUTE_GUARD_TIERS.md) bo‘limiga qarang. `LOCAL_ONLY_MANAGE_SCOPE_BYPASS_PREFIXES` ichidagi LOCAL_ONLY yo‘llariga (hozirda: `/api/mcp/`) Bearer kaliti `manage` doirasiga ega bo‘lsa, loopback bo‘lmagan manzildan kirish mumkin; boshqa barcha LOCAL_ONLY yo‘llari doiradan qat’i nazar faqat loopback orqali kirish talabini qat’iy saqlaydi.

Muvaffaqiyatli siyosat `kind ∈ { client_api_key, dashboard_session, management_key, anonymous }` qiymatiga ega `AuthSubject` qaytaradi. Quyi oqimdagi ishlov beruvchilar autentifikatsiya mantiqini qayta ishga tushirish o‘rniga uni `src/server/authz/assertAuth.ts` ichidagi `assertAuth(request, "CLIENT_API")` orqali o‘qishi mumkin.

## Ommaviy marshrutlar roʻyxati

`src/shared/constants/publicApiRoutes.ts` — aniq ruxsat etilganlar roʻyxati:

Roʻyxat **shakliga** koʻra ajratilgan va bu ajratish xavfsizlik uchun muhim (GHSA-74g9-q8f6-793h): prefiks `startsWith()` orqali moslashtiriladi, shuning uchun u boshlangʻich belgilari bir xil boʻlgan barcha yondosh yoʻllarga ham mos keladi.
`/api/usage/om-usage` prefiks sifatida `/api/usage/om-usage<anything>` yoʻlini OMMAVIY deb belgilagan va Next buni `/api/usage/[connectionId]` ga yoʻnaltiradi — bu oʻz autentifikatsiyasiga ega boʻlmagan ishlov beruvchi.

```ts
// Haqiqiy quyi daraxtlar. Har bir yozuv "/" bilan tugashi SHART (bu birlik testi orqali tekshiriladi).
PUBLIC_API_ROUTE_PREFIXES = [
  "/api/auth/oidc/",
  "/api/v1/", // classify ichida CLIENT_API sifatida koʻriladi, "autentifikatsiyasiz ommaviy" sifatida emas
  "/api/oauth/",
  "/api/codex/connect/",
  "/api/telegram/",
  "/api/cursor-cli/",
];

// Oxiridagi qiya chiziq bilan yoki usiz, AYNAN moslashtiriladigan alohida marshrutlar.
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

// CORS origin cheklovi yumshatilishi ham qoʻllanadigan faqat oʻqish uchun alohida marshrutlar.
PUBLIC_READONLY_CORS_API_ROUTES = [
  "/api/health/ping",
  "/api/monitoring/health",
  "/api/settings/require-login",
];

// CORS cheklovi yumshatilishi qoʻllanmaydigan faqat oʻqish uchun alohida marshrut.
PUBLIC_READONLY_API_ROUTES_EXACT = new Set(["/api/health"]);

PUBLIC_READONLY_METHODS = new Set(["GET", "HEAD", "OPTIONS"]);
```

Faqat oʻqish uchun marshrutlar faqat xavfsiz metodlar uchun ommaviydir. Eslatma: `classifyRoute()` `/api/v1/*` va `/api/v1beta/*` yoʻllarini PUBLIC standart holatidan chiqarib tashlaydi — Bearer kaliti siyosati baribir qoʻllanishi uchun ular har doim `CLIENT_API` boʻladi.

## Yangi marshrut qoʻshish

### 1-andoza — Ommaviy mijoz API endpointi (Bearer autentifikatsiyasi)

`/api/v1/` va `/api/v1beta/` ostidagi marshrutlar avtomatik ravishda `CLIENT_API` sifatida tasniflanadi. Oraliq dastur Bearer tekshiruvini majburiy qiladi; marshrut ishlov beruvchilari uni qayta bajarishi shart emas, ammo zarur boʻlsa subyektni oʻqishi mumkin.

```typescript
// src/app/api/v1/your-route/route.ts
import { NextRequest, NextResponse } from "next/server";
import { assertAuth } from "@/server/authz/assertAuth";

export async function POST(req: NextRequest) {
  const subject = assertAuth(req, "CLIENT_API");
  // subject.kind === "client_api_key" | "anonymous" | "dashboard_session"
  // ... ishlov beruvchi mantiqi
}
```

### 2-andoza — Boshqaruv endpointi (sessiya yoki Bearer + manage)

`src/lib/api/requireManagementAuth.ts` ichidagi `requireManagementAuth()` dan foydalaning:

```typescript
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";

export async function POST(request: Request) {
  const rejection = await requireManagementAuth(request);
  if (rejection) return rejection;
  // ... ishlov beruvchi mantiqi
}
```

`requireManagementAuth()` muvaffaqiyatli boʻlsa `null`, aks holda JSON xatosi boʻlgan `Response` qaytaradi:

- 401 `AUTH_001` "Autentifikatsiya talab qilinadi" — umuman hisob maʼlumotlari yoʻq
- 403 — Bearer yaroqsiz **yoki** Bearer mavjud, ammo kalitda `manage` / `admin` doirasi yoʻq

`hasManageScope(scopes)` `"manage"` yoki `"admin"` uchun true qaytaradi.

### 3-andoza — Ommaviy ruxsat etilganlar roʻyxatiga qoʻshish

Toʻplamni qulaylikka qarab emas, shakliga qarab tanlang. Bitta marshrut `PUBLIC_API_ROUTES_EXACT` ga (yoki faqat GET uchun `PUBLIC_READONLY_CORS_API_ROUTES` ga) qoʻshiladi; faqat haqiqiy quyi daraxt `PUBLIC_API_ROUTE_PREFIXES` ga qoʻshiladi va u **`/` bilan tugashi shart**. Bitta marshrutni prefikslar roʻyxatiga kiritish uning boshlangʻich belgilariga ega barcha yondosh yoʻllarni, jumladan keyinchalik qoʻshilgan dinamik segmentli qardosh yoʻllarni ham ommaviy qiladi (GHSA-74g9-q8f6-793h). `tests/unit/public-api-routes.test.ts`, `tests/unit/authz/public-route-exact-match.test.ts` va `tests/unit/authz/classify.test.ts` fayllaridagi birlik testlarini yangilang.

## Doiralar

Uchta nom maydoni. Har bir tekshiruvchi faqat o'zining satrlarini o'qiydi. Yonma-yon taqqoslash, jumladan, nima uchun `manage` `read:compression` uchun `scopeMatches`ni bajara olmasligi va nima uchun `read` kirish tokeni `PATCH /api/keys/{id}`ni bajara olmasligi [Uchta nom maydoni](../frameworks/MCP-SERVER.md#three-scope-namespaces)da keltirilgan.

API kalitlari `scopes` massivini o'z ichiga oladi (`api_keys.scopes`da JSON sifatida saqlanadi, qarang `src/lib/db/apiKeys.ts`).

### Boshqaruv doirasi

- `manage` / `admin` — `hasManageScope`. Boshqaruv API marshrutlariga tashuvchi orqali kirish.
- `mcp:connect`, `self:usage`, `self:account-quota` va `policy:bypass-provider-quota` qo'shimcha aniq mos keladigan doiralardir. Ular `MANAGEMENT_API_KEY_SCOPES`dan tashqarida joylashgan. `mcp:connect` faqat `/api/mcp/` non-loopback ajratmasini ochadi.

### MCP asbob doiralari

Katalog va mos kelish qoidalari (bir xil satr yoki `*` bilan tugaydigan berilgan doira): [MCP asbob doiralari](../frameworks/MCP-SERVER.md#mcp-tool-scopes). `src/shared/constants/mcpScopes.ts`dagi `MCP_SCOPE_LIST` to'liq katalog emas, balki asl terilgan kichik to'plamdir. Ijro etish `open-sse/mcp-server/scopeEnforcement.ts`da `resolveCallerScopeContext()` MCP autentifikatsiya ma'lumotlari, so'rov metama'lumotlari yoki `OMNIROUTE_MCP_SCOPES`dan doiralarni hal qilgandan so'ng amalga oshiriladi. U `OMNIROUTE_MCP_ENFORCE_SCOPES=true` bo'lmaguncha o'chirilgan holatda qoladi.

### Kirish tokeni doiralari

`oma_live_…` tokenlarida `read` / `write` / `admin`, `scopeSatisfies` (`src/lib/accessTokens/scopes.ts`) bo'yicha tartiblangan. Bu daraja faqat kirish tokeni hisob ma'lumotlariga tegishli. Qarang [Boshqaruv autentifikatsiyasi](../guides/MANAGEMENT-AUTH.md).

## Autentifikatsiya talabi almashtirgichi

`src/shared/utils/apiAuth.ts` ichidagi `isAuthRequired()` soʻrov uchun **har qanday** autentifikatsiya majburiy yoki majburiy emasligini belgilaydi:

- `settings.requireLogin === false` → autentifikatsiya global miqyosda oʻchiriladi.
- Parol sozlanmagan **va** `INITIAL_PASSWORD` muhit oʻzgaruvchisi mavjud emas → boshlangʻich sozlash rejimi dastlabki sozlash ustasi va loopback soʻrovlariga ruxsat beradi, ammo tarmoqqa ochiq soʻrovlar uchun baribir hisob maʼlumotlari talab qilinadi.
- Har qanday DB xatosi → yopiq holatda rad etiladi (standart holatda xavfsiz).

Mijoz API kalitini majburiy tekshirish `process.env.REQUIRE_API_KEY` qiymatini bevosita oʻqishdan emas, `src/shared/utils/featureFlags.ts` ichidagi `isRequireApiKeyEnabled()` funksiyasidan foydalanadi. Bu joylashtirilgan instansiyalar uchun muhim: Dashboard → Feature Flags boʻlimida `REQUIRE_API_KEY` qiymatini almashtirish DB bekor qilish qiymatini saqlaydi va `/v1/*`, `/v1beta/*`, `/models`, `/responses`, `/chat/completions`, `/codex/*` hamda ushbu yordamchi funksiyadan foydalanadigan boshqa mijoz API autentifikatsiya tekshiruvlariga darhol taʼsir qiladi. Agar xususiyat bayroqlari omborini oʻqib boʻlmasa, mijoz API autentifikatsiyasi yopiq holatda rad etiladi va kalit talab qiladi.

## Moslikni buzuvchi oʻzgarish — v3.8.0

`/api/v1/agents/tasks/*` va `/api/resilience/model-cooldowns` endpointlari **endi boshqaruv autentifikatsiyasini talab qiladi** (`588a0333` kommiti). Avval `manage` qamrovisiz oddiy API kalitini yuborgan mijozlar `403` javobini oladi. Migratsiya: API Keys boshqaruv panelida kalitga `manage` qamrovini bering yoki tizimga kirilgan boshqaruv paneli seansidan foydalaning.

## Xatti-harakat oʻzgarishi — v3.8.2

`/api/mcp/*` (masofaviy MCP serveri) hali ham standart holatda LOCAL_ONLY, ammo `Authorization: Bearer <api-key>` sarlavhasida `manage` qamrovi mavjud boʻlsa, endi loopback boʻlmagan soʻrovlarni ham qabul qiladi. Ushbu istisno `src/server/authz/routeGuard.ts` ichidagi `LOCAL_ONLY_MANAGE_SCOPE_BYPASS_PREFIXES` orqali har bir yoʻl uchun alohida boshqariladi; yonma-yon joylashgan `/api/cli-tools/runtime/*` LOCAL_ONLY prefiksini ataylab chetlab oʻtib boʻlmaydi, chunki u ixtiyoriy quyi jarayonlarni ishga tushirishi mumkin. Loopback boʻlmagan manzildan `/api/mcp/*` ga yuborilgan anonim soʻrovlar `403 LOCAL_ONLY` javobini qaytarishda davom etadi — har qanday yangi LOCAL_ONLY yoʻli uchun standart holat qatʼiy loopback boʻlib qoladi. [Yoʻnalish himoyachisi darajalari](../security/ROUTE_GUARD_TIERS.md#manage-scope-carve-out) boʻlimiga qarang.

## Sinov

- Birlik sinovlari: `tests/unit/authz/` — `classify.test.ts`, `pipeline.test.ts`, `client-api-policy.test.ts`, `management-policy.test.ts`, `public-policy.test.ts`.
- Ommaviy ruxsat berilganlar roʻyxati: `tests/unit/public-api-routes.test.ts`.
- Yoʻnaltirilgan ishga tushirish: `node --import tsx/esm --test tests/unit/authz/classify.test.ts`.

## Nosozliklarni tuzatish

Konveyer javoblarga har doim quyidagi sarlavhalarni qoʻshadi:

```
x-request-id:               <korrelyatsiya identifikatori, xato javoblari tanasida qaytariladi>
x-omniroute-route-class:    PUBLIC | CLIENT_API | MANAGEMENT
```

Autentifikatsiya qilingan soʻrovlar uchun yuqori oqimdagi (ishlov beruvchi tomonidagi) soʻrov sarlavhalari quyidagilarni ham oʻz ichiga oladi:

```
x-omniroute-auth-kind:      client_api_key | dashboard_session | management_key | anonymous
x-omniroute-auth-id:        key_<oxirgi-4> | "dashboard" | "anonymous"
x-omniroute-auth-label:     (ixtiyoriy)
x-omniroute-auth-scopes:    vergul bilan ajratilgan roʻyxat
```

Ishlov beruvchilar ichida `assertAuth(req, expectedClass)` dan foydalaning — agar oraliq dasturiy taʼminot chetlab oʻtilgan boʻlsa, u `AUTHZ_NOT_INITIALIZED` kodli `AuthzAssertionError` xatosini chiqaradi (testlarda konfiguratsiya regressiyalarini aniqlash uchun foydali).

## Yana qarang

- [API_REFERENCE.md](../reference/API_REFERENCE.md) — har bir yakuniy nuqta uchun avtorizatsiya belgisi
- [COMPLIANCE.md](../security/COMPLIANCE.md) — avtorizatsiya hodisalari uchun audit jurnali
- [MCP-SERVER.md](../frameworks/MCP-SERVER.md#three-scope-namespaces) — uchta qamrov nomfazo va MCP asbob-qamrov katalogi
- Manba: `src/server/authz/`, `src/lib/api/requireManagementAuth.ts`
