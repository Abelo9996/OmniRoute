# Guardrails (Oʻzbekcha)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Haqiqatning asosiy manbasi:** `src/lib/guardrails/`
> **Soʻnggi yangilanish:** 2026-08-29 — v3.8.51 (Video Bridge transkriptining kelib chiqishi chaqiruvchi tomonidan eʼlon qilinadi,
> server tomonidan hali tasdiqlanmaydi — #11661 ga muvofiq aniqlashtirildi)

Guardrail’lar OmniRoute va yuqori oqim provayderlari oʻrtasidagi chegarada xavfsizlik, siyosat va kontent oʻzgartirishlarini taʼminlaydi. Har bir guardrail soʻrov yuklamalarini (`preCall`) va yuqori oqim javoblarini (`postCall`) tekshirishi (hamda ixtiyoriy ravishda rad etishi, oʻzgartirishi yoki izoh bilan belgilashi) mumkin.

Tizim **xatoda ochiq qoladi**: agar guardrail bajarilish vaqtida istisno chiqarsa, registr xatoni qayd etadi va soʻrovni muvaffaqiyatsiz yakunlash oʻrniga keyingi guardrail bilan davom etadi. Bloklash tasodif emas, balki aniq qarordir (`block: true`).

## Oʻrnatilgan himoya mexanizmlari

Reyestr import paytida ustuvorlik tartibida oltita himoya mexanizmini avtomatik yuklaydi
(`registry.ts` → `registerDefaultGuardrails()` ga qarang):

| Ustuvorlik | Nomi                | Bosqich(lar)   | Fayl                  |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Ustuvorlik raqami kichikroq bo‘lganlar **birinchi** ishga tushadi.

### Tasvir ko‘prigi (`visionBridge.ts`) — Modallik ko‘prigi PR-1

**Tasvirni qo‘llab-quvvatlamaydigan modellarga** yo‘naltirilgan, tasvirlarni o‘z ichiga olgan so‘rovlarni tutib qoladi va yuqori oqim chaqiruvidan oldin butun so‘rovni tasvirni qo‘llab-quvvatlaydigan modelga qayta yo‘naltiradi yoki tasvir qismlarini sozlanadigan tasvir modeli yaratgan matnli tavsiflar bilan almashtiradi. Bu faqat matnni qo‘llab-quvvatlaydigan provayderlarga multimodal foydali yuklamalarni shaffof tarzda qayta ishlash imkonini beradi.

Jarayon:

1. Maqsadli model tasvirni allaqachon qo‘llab-quvvatlasa, o‘tkazib yuboriladi (u majburiy ko‘prik ro‘yxati `isVisionBridgeForcedModel` ichida bo‘lmasa).
2. Tasvir qismlari `extractImageParts(messages)` orqali ajratib olinadi
   (`visionBridgeHelpers.ts`); u `open-sse/utils/mediaParts.ts` ichidagi
   **yagona media detektori** `detectMediaParts()` ga vakolat beradi — bu
   kombinatsion moslik filtri bilan birgalikda ishlatiladigan yagona ishonchli manbadir.
   Ajratib olish faqat `replaceImageParts` qayta joylashtira oladigan yuqori darajadagi
   qism shakllari bilan cheklangan (ajratib olish↔almashtirish shartnomasi): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` va Responses API `input_image`. Ichki joylashgan topilmalar va
   faqat indikatorga ega shakllar kombinatsion filtr materiali hisoblanadi va hech qachon ajratib olinmaydi.
   Hech narsa topilmasa, o‘tkazib yuboriladi.
3. Ish vaqti konfiguratsiyasi `resolveVisionBridgeRuntimeSettings()` orqali aniqlanadi
   (`src/shared/constants/modalityBridgeDefaults.ts`): yangi `modalityBridge*`
   sozlama kalitlari ustunlik qiladi; eski `visionBridge*` kalitlari **bir sikllik
   zaxira variant** (orqaga qaytarish oynasi) sifatida saqlanadi. Ko‘prik o‘chirilgan bo‘lsa,
   har qanday mediani ko‘rib chiqishdan oldin o‘tkazib yuboriladi.
4. Rejim tanlagichi (`modalityBridgeVisionMode`, quyidagi jadvalga qarang)
   qayta yo‘naltirish yoki tavsiflashni tanlaydi. Qayta yo‘naltirish faqat `model`
   almashtirilgan `modifiedPayload` hamda `{ rerouted, fromModel, toModel, imagesKept }`
   metama’lumotlarini qaytaradi.
5. Tavsiflash yo‘li: tasvirlar sonini `maxImages` bilan cheklaydi, vazifadan xabardor
   ko‘rsatmani tuzadi, tavsif keshini tekshiradi, tasvir modelini **parallel ravishda**
   (`Promise.allSettled`) chaqiradi va tasvirlar o‘rniga
   `[Image N]: <description>` matn qismlarini kiritadi. Muvaffaqiyatsiz tavsiflash
   `null` qaytaradi va asl tasvir qismi **saqlanib qoladi** (#4012) — barcha
   tavsiflashlar muvaffaqiyatsiz bo‘lgan kombinatsion tavsiflash yo‘li bundan mustasno;
   bu holatda tasvirni qo‘llab-quvvatlamasligi tasdiqlangan yuqori oqimga uning o‘rniga
   `(unavailable — no vision-capable provider connected)` o‘rinbosari uzatiladi (#8430).
6. `modifiedPayload` va metama’lumotlar (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) qaytariladi.

#### Rejim tanlagichi (`modalityBridgeVisionMode`)

| Rejim      | Standart | Xatti-harakat                                                                                                                                                                                                                                                                                                                                        |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Eski evristika o‘zgartirilmagan (#6640/#7204): kombinatsion bo‘lmagan/`auto/` modellar eng yaxshi tasvir modeliga qayta yo‘naltiriladi, asl modelda foydalanish mumkin bo‘lgan hisob ma’lumotlari mavjud bo‘lmasa (mavjud bo‘lsa, tavsiflanadi); kombinatsion maqsadlar har doim tavsiflanadi.                                                       |
| `describe` |          | Har doim tavsiflaydi — qayta yo‘naltirish bloki butunlay o‘tkazib yuboriladi; foydalanuvchi tanlagan model har doim javob beradi.                                                                                                                                                                                                                    |
| `reroute`  |          | Majburiy qayta yo‘naltirish: hisob ma’lumotlariga ega modelni saqlash himoyasi chetlab o‘tiladi. Qayta yo‘naltirish **maqsadi** uchun hisob ma’lumotlari himoyasi hamon amal qiladi — foydalanish mumkin bo‘lgan tasvir maqsadi mavjud bo‘lmasa, xom tasvirlar faqat matnli ichki tizimga yetib bormasligi uchun so‘rov tavsiflashga o‘tadi (#8430). |

Majburiy rejimlar avtomatik evristika ishga tushishidan **oldin** qisqa tutashuv hosil qiladi; `auto` xatti-harakati PR-1 dan oldingi himoya mexanizmi bilan baytma-bayt bir xil.

#### API kaliti doirasi (`visionBridgeKeyScope.ts`)

Chaqiruvchining API kaliti `allowedConnections`, kvota havzalari
(`allowedQuotas`) yoki modellarni (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) cheklaganida, ko‘prik
faqat kalit foydalanishi mumkin bo‘lgan ulanishlarda kalit foydalanishi mumkin bo‘lgan
qayta yo‘naltirish va tavsiflash modellarini tanlaydi. Shundan so‘ng tavsiflash chaqiruvi
har doim `x-omniroute-self-loop-key-id` sarlavhasi bilan OmniRoute o‘z-o‘ziga qaytish
sikli orqali o‘tadi, natijada qabul qiluvchi chat so‘rovi ushbu kalitning ulanish va model
siyosatini yana bir bor tatbiq etadi. `enforceApiKeyPolicy()` bu sarlavhani faqat
o‘z-o‘ziga qaytish bearer’i bilan birgalikda hisobga oladi, shu sababli u faqat
kirishni toraytirishi mumkin; aniqlab bo‘lmaydigan id esa rad etiladi.

Kalit uchun hech qanday tasvir modeliga ruxsat berilmagan bo‘lsa, tavsiflash yo‘li
chetga chiqadi va so‘rov o‘zgartirilmasdan o‘tkaziladi; bu o‘chirilgan himoya
mexanizmidagi kabi bir xil ochiq qolish xatti-harakatidir
(meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Kalitsiz so‘rovlar va bunday cheklovlarsiz kalitlar avvalgidek ishlaydi.

#### Vazifadan xabardor tavsiflash ko‘rsatmasi (`modalityBridgeVisionTaskAware`)

Standart qiymat — **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) asosiy tavsiflash promptiga **foydalanuvchining oxirgi xabari** matnini (500 belgigacha qisqartirib) qoʻshadi, shu orqali tavsifni foydalanuvchi aslida soʻragan narsaga yoʻnaltiradi (codex-vision-proxy andozasi) va vision modeldan koʻrinadigan matnni transkripsiya qilishni soʻraydi. Bayroq oʻchirilgan boʻlsa yoki foydalanuvchi matni boʻlmasa, asosiy prompt oʻzgartirilmasdan ishlatiladi.

Tavsiflash self-loop jarayonining OpenAI bilan mos keluvchi oʻz soʻrovi (`visionBridgeHelpers.ts` ichidagi `callVisionModelSingle()`) har doim `image_url.detail: "high"` qiymatini soʻraydi — bu har bir chaqiruvchi/provayder uchun shartsiz qoʻllanadi va hech qanday mijoz signaliga bogʻliq emas. Past tafsilotli namuna olish aynan ushbu prompt soʻraydigan matn transkripsiyasi vazifasida OCR aniqligini pasaytiradi, shuning uchun tavsiflash chaqiruvi asl kiruvchi soʻrov qaysi tafsilot darajasidan foydalanganidan qatʼi nazar, doim yuqori tafsilot darajasini soʻraydi. Bu faqat ichki tavsiflash soʻrovi tanasiga taʼsir qiladi; OmniRoute asosiy soʻrovda chaqiruvchining oʻz `image_url.detail` qiymatini qanday uzatishini oʻzgartirmaydi — ushbu standart qiymat alohida ravishda va faqat aniqlangan OpenCode mijozlari uchun `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`) ichida qoʻllanadi. Tavsiflash self-loop jarayonining Anthropic sim-format tarmogʻida `detail` maydoni yoʻq va unga bu standart qiymatlarning hech biri taʼsir qilmaydi.

#### Tavsiflash chiqishi chegarasi (`modalityBridgeVisionMaxChars`)

| Kalit                          | Standart | Oraliq             |
| ------------------------------ | -------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`      | `0` yoki 100–50000 |

`0` (standart) **chegara yoʻqligini** anglatadi — `callVisionModel()` qaytargan tavsif oʻzgartirilmasdan uzatiladi va mavjud xatti-harakat saqlanadi. 100–50000 oraligʻidagi har qanday qiymat tavsifni `[Image N]: <description>` koʻrinishida qayta joylashtirishdan oldin `…` suffiksi bilan qisqartiradi (`src/lib/guardrails/visionBridge.ts` ichidagi `VisionBridgeGuardrail.preCall()`). Quyi oqimdagi modelga toʻliq transkripsiya kerak boʻladigan tafsilotlarga boy OCR vazifalari uchun bu qiymatni oshiring; sergap vision modellarda token sarfini cheklash uchun uni kamaytiring. Boshqaruv panelidagi maydon Vision varaqasining Advanced panelida joylashgan (`ModalityBridgeVisionTab.tsx` ichidagi `modality-bridge-max-chars`) va 1 dan 99 gacha boʻlgan har qanday qiymatni minimal 100 qiymatigacha oshiradi, aniq koʻrsatilgan `0` qiymatini esa oʻzgartirmaydi — `0` shunchaki «oʻrnatilmagan» standart emas, balki mustaqil ravishda yaroqli Zod qiymatidir (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`).

#### Tavsif keshi (`modalityBridge/bridgeCache.ts`)

Tavsiflash natijalari uchun jarayon boʻylab umumiy ishlatiladigan xotiradagi LRU + TTL keshi. Kalit = `sha256(imageRef + composedPrompt + configuredBridgeModel)`, uzunlik prefiksli freymlash bilan (maydon chegaralari toʻqnashuvi yoʻq). Model komponenti amalda javob bergan model emas, balki **sozlangan** bridge modeldir — `callVisionModel` ichki ravishda zaxira modelga oʻtishi mumkin va har bir urinish boʻyicha kalitlash keshni parchalab yuboradi. Muvaffaqiyatsiz tavsiflar hech qachon keshlanmaydi. Sozlamalar:

| Kalit                           | Standart | Oraliq  |
| ------------------------------- | -------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`   | —       |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000 |

#### Masofaviy tasvirlarni meʼyorlashtirish (self-loop tavsiflash/base64 yuklab olish)

Bridge **masofaviy** tasvirni oʻzi yuklab olganda — Anthropic tavsiflash self-call jarayoni va claude sim-formatidagi base64 konvertatsiyasi (`ensureBase64ImagesForClaudeWire`), ikkalasi ham `visionBridgeHelpers.ts` ichidagi `fetchRemoteImageAsDataUri()` orqali — hosil boʻlgan data URI vision-model soʻroviga joylashtirilishidan oldin `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) orqali oʻtkaziladi. Haddan tashqari katta tasvirlarning oʻlchami **uzun tomoni 2048px** boʻlguncha kichraytiriladi (bu OpenAI/Anthropic server tomonida allaqachon qoʻllaydigan oʻlcham chegarasiga mos keladi), natijada vision model koʻradigan tasvir oʻzgarmagan holda yuklanadigan baytlar miqdori va kechikish kamayadi. Oʻlchamni oʻzgartirishda dinamik import orqali yuklanadigan `sharp` ishlatiladi: uning mahalliy binar fayli yuklanmaydigan platformada `normalizeDataUri()` **hech qachon istisno chiqarmaydi** — u asl baytlarni oʻzgartirmasdan uzatishga qaytadi, shuning uchun tavsiflash/base64-konvertatsiya yoʻli doimo ishlashda davom etadi. Tasvir boʻlmagan baytlar (dekodlanadigan tasvir qaytarmagan yuklab olish natijasi) ham oʻzgartirilmasdan uzatiladi. Bu meʼyorlashtirish faqat bridge oʻz self-call jarayoni uchun yuklab oladigan tasvirlar doirasida qoʻllanadi — u chaqiruvchining oʻzgartirilmasdan uzatiladigan xom payload qiymatiga hech qachon tatbiq etilmaydi; bu faqat ixtiyoriy rozilik asosida oʻzgartirish tamoyiliga mos keladi (Qatʼiy qoida #20).

#### Sozlamalar sxemasi + migratsiya

Yangi `modalityBridge*` kalitlari `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`) ichida Zod orqali tekshiriladi: `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCache*` uchligi va Audio Bridge ishlatadigan `modalityBridgeAudio*` guruhi. `141_modality_bridge_settings.sql` migratsiyasi mavjud eski `visionBridge*` qiymatlarini mos keluvchi yangi kalitlarga koʻchiradi (idempotent, operator oʻrnatgan `modalityBridge*` qiymatini hech qachon qayta yozmaydi); eski kalitlar bir reliz davri davomida oʻqish uchun zaxira variant sifatida qabul qilinishda davom etadi.

#### Shaffoflik sarlavhasi + statistika

Tavsiflash orqali oʻzgartirilgan javoblar
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
sarlavhasini oʻz ichiga oladi (`modalityBridge/bridgeStats.ts` ichidagi `buildModalityBridgeHeader()` tomonidan yaratiladi va `src/sse/handlers/chatHelpers.ts` ichidagi `withModalityBridgeHeader()` tomonidan qoʻyiladi). Qayta yoʻnaltirilgan soʻrovlar **hech qanday** sarlavha olmaydi — payload oʻzgartirilmagan va model almashtirilgani javob tanasidagi `model` maydonida allaqachon koʻrinadi.

`GET /api/modality-bridge/stats` (`GET /api/settings` bilan bir xil darajadagi
boshqaruv autentifikatsiyasi) `vision`, `audio` va `video` uchun xotirada
saqlanadigan har bir modallik hisoblagichlarini
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` qaytaradi. `averageLatencyMs`
maxraj sifatida barcha urinishlardan emas, `latencySamples` qiymatidan
foydalanadi; vaqt o‘lchovi mavjud bo‘lmagan operatsiya soxta nol millisekundlik
namuna yaratmaydi. `bridged` muvaffaqiyatli konvertatsiyalar uchun orqaga
mos taxallus bo‘lib qoladi; muvaffaqiyatsiz urinishlar uning qiymatini oshirmaydi.
Hisoblagichlar ataylab jarayon qayta ishga tushirilganda tiklanadi
(bu hisob-kitob emas, telemetriyadir).

#### Boshqaruv paneli konfiguratsiyasi

Maxsus boshqaruv paneli sahifasi
`/dashboard/settings/modality-bridge` manzilida joylashgan. Uning URL orqali
boshqariladigan `Vision`, `Audio` va `Video` varaqlari `tab` qiymatini
almashtirishda so‘rov parametrlarini saqlab qoladi. Vision varag‘i yoqish
holati, rejim, model tanlovi (jumladan, avtomatik standart), vazifani hisobga
oluvchi promptlash, kengaytirilgan vaqt tugashi/rasm/tavsif uzunligi/kesh
cheklovlari, ish vaqti hisoblagichlari hamda himoyalangan namunaviy so‘rovni
taqdim etadi. Audio varag‘i ham faol: u yoqish holati, Auto parametriga ega
faqat STT uchun model tanlagichi, vaqt tugashi/klipning maksimal uzunligi
cheklovlari, audio hisoblagichlari va `input_audio` namunaviy sinovini taqdim
etadi. Video varag‘i funksional: u FFmpeg/ffprobe ish vaqti holatini — to‘rtta
aniq UI holatidan birini (`unknown`, tekshiruv bajarilayotgan yoki yakunlana
olmagan paytda; `restricted`, boshqaruv paneli loopback bo‘lmagan hostda
joylashib, tekshiruv mijoz tomonida o‘tkazib yuborilganda; `unavailable`,
tekshirilib, mavjud emasligi tasdiqlanganda; yoki FFmpeg/ffprobe versiyalari
bilan `available`) — ko‘rsatadi, yoqish/model/kadr/video/vaqt tugashi
cheklovlarini saqlaydi, model tanlagichini ko‘rish qobiliyatiga ega modellar
bilan cheklaydi va video hisoblagichlarini taqdim etadi.

AI sozlamalaridagi avvalgi Vision Bridge kartasi yangi sahifaga olib boruvchi
moslik havolasidir; u endi formaning ikkinchi nusxasiga egalik qilmaydi.
Media Providers ham mavjud Speech-to-Text sinov maydonchasini olib
tashlamagan holda Image-to-Text va Speech-to-Text ish jarayonlarini tegishli
Modality Bridge varaqlariga bog‘laydi.

**O‘z-o‘ziga sikl uchun ruxsat tekshiruvini chetlab o‘tish:** describe chaqiruvi
OmniRoute’ning o‘z `/v1` o‘z-o‘ziga sikli (nostandart provayder modeli) orqali
yo‘naltirilganda, ichki so‘rov `x-omniroute-admission-bypass: internal` yuboradi
va aniqlangan o‘z-o‘ziga sikl hisob ma’lumoti — mahalliy rejimdagi mahalliy
`sk_omniroute` sentinel qiymati yoki operator sozlagan `OMNIROUTE_API_KEY` /
`ROUTER_API_KEY` muhit kaliti (#1350) — bilan autentifikatsiya qilinadi, shunda
`REQUIRE_API_KEY=true` o‘rnatilgan joylashtirishlar ham describe chaqiruvini
bajara oladi. Chetlab o‘tishga faqat aynan shu hisob ma’lumotlari uchun ruxsat
beriladi, shu sababli tashqi mijozlar qabul tekshiruvini o‘tkazib yuborish uchun
bu sarlavhadan foydalana olmaydi.

Eski standart qiymatlar `src/shared/constants/visionBridgeDefaults.ts` ichida;
yangi rejim/vazifani hisobga olish/kesh standartlari va sozlamalar rezolveri
`src/shared/constants/modalityBridgeDefaults.ts` ichida joylashgan. Himoya
mexanizmi testlar soxta `getSettings` va `callVisionModel` amalga oshirishlarini
kiritishi uchun `deps` konstruktor parametrini taqdim etadi.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Audio kiritishni qabul qilishi ma’lum bo‘lmagan nishonga yetib borishidan oldin
audio saqlovchi chat so‘rovlarini ushlab qoladi. U chat so‘rovini hech qachon
boshqa yo‘nalishga yubormaydi: audio qismlar mavjud OpenAI-mos multipart
endpoint orqali transkripsiya qilinadi va tanlangan chat modeli matnli
transkriptlar bilan ishlashda davom etadi.

Jarayon:

1. `supportsAudio` qiymatini `getResolvedModelCapabilities()` orqali aniqlang.
   Avval aniq provayder reyestri metama’lumotlari, so‘ng statik model
   metama’lumotlari, undan keyin sinxronlangan `modalities_input` ustunlikka ega.
   `audio` mavjud bo‘lmagan e’lon qilingan kirish ro‘yxati `false` hisoblanadi;
   imkoniyatga oid dalil bo‘lmasa, qiymat `null` bo‘lib qoladi. `false` ham,
   `null` ham konservativ ko‘prikni faollashtiradi, `true` esa uni chetlab o‘tadi.
2. `modalityBridgeAudio*` sozlamalarini aniqlang va umumiy `detectMediaParts()`
   detektori orqali har bir xabardan biriktirish mumkin bo‘lgan yuqori
   darajadagi audio qismlarni ajratib oling. Qo‘llab-quvvatlanadigan uzatish
   shakllari: OpenAI `input_audio`, `audio_url` va
   `source.media_type: "audio/*"`. Ichki joylashtirilgan audio yo‘naltirish
   uchun aniqlanadi, ammo biriktirish yo‘li tomonidan olib tashlanmaydi. Ish
   hajmi `modalityBridgeAudioMaxClips` bilan cheklanadi; keyingi qismlar
   o‘zgartirilmay qoladi.
3. Sozlangan `provider/model` qiymatiga rioya qiling yoki
   `selectAudioBridgeModel()` funksiyasiga `AUDIO_TRANSCRIPTION_PROVIDERS`
   bo‘ylab barqaror katalog tartibida yurib, foydalanishga yaroqli faol
   provayder hisob ma’lumotiga ega birinchi modelni tanlashga ruxsat bering.
4. `callAudioTranscription()` base64/data-URI audioni multipart `file` ga
   aylantiradi yoki masofaviy `audio_url` manzilidan audioni DNS biriktirish va
   25 MB chekloviga ega, faqat ommaviy manzillarga ruxsat beruvchi chiquvchi
   ulanish himoyasi orqali yuklab oladi. So‘ng fayl va tanlangan modelni
   `resolveSelfLoopBearer()` orqali autentifikatsiya qilingan mahalliy
   `/v1/audio/transcriptions` o‘z-o‘ziga sikliga POST qiladi. Mavjud
   transkripsiya marshruti hisob ma’lumotlarini odatiy qidirish, kutish
   muddati/tezlik cheklovlarini boshqarish va provayderga yuborishni amalga
   oshiradi.
5. Muvaffaqiyatli chaqiruvlar tegishli qismlarni
   `[Audio N]: <transcript>` bilan almashtiradi. Chaqiruvlar
   `Promise.allSettled` bilan bajariladi: alohida xatolik asl audio qismini
   saqlab qoladi (#4012 shartnomasi). Agar barcha chaqiruvlar muvaffaqiyatsiz
   tugasa va nishonning `supportsAudio === false` ekanligi isbotlangan bo‘lsa,
   qismlar `[Audio N]: (mavjud emas — hech qanday STT provayderi ulanmagan)`
   ko‘rinishiga o‘tadi (#8430 shartnomasi). Noma’lum nishon (`null`) uchun
   barcha chaqiruvlar muvaffaqiyatsiz tugasa, qismlar o‘zgartirilmaydi.
   Faqat matnli ekanligi isbotlangan va foydalanishga yaroqli STT hisob
   ma’lumoti bo‘lmagan nishon tarmoq chaqiruvisiz xuddi shu aniq o‘rinbosar
   matnni oladi.

Muvaffaqiyatli transkriptlar butun jarayon bo‘ylab umumiy Modality Bridge
LRU/TTL keshidan foydalanadi. Kalit audio havolasi, barqaror
`audio-transcription` operatsiya yorlig‘i va tanlangan STT modelini birlashtiradi;
xatoliklar hech qachon keshlanmaydi. Audio urinishlari umumiy `bridged`,
`cacheHits`, `failures` va `lastUsedAt` hisoblagichlarini yangilaydi.
O‘zgartirilgan javoblar
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` sarlavhasini
oladi; o‘zgartirilmagan so‘rovlarga Audio Bridge segmenti qo‘shilmaydi.

Ish vaqti sozlamalari ma’lumotlar bazasida saqlanadi va Zod orqali tekshiriladi:

| Kalit                         | Standart qiymat | Oraliq           |
| ----------------------------- | --------------- | ---------------- |
| `modalityBridgeAudioEnabled`  | `true`          | —                |
| `modalityBridgeAudioModel`    | `""`            | Avto yoki STT ID |
| `modalityBridgeAudioTimeout`  | `60000`         | 1000–300000      |
| `modalityBridgeAudioMaxClips` | `3`             | 1–10             |

Umumiy kesh `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` va `modalityBridgeCacheMaxEntries` orqali boshqariladi.

### Video ko‘prigi (`videoBridge.ts`, `videoBridgePipeline.ts`)

Ma’lum mahalliy video qo‘llab-quvvatlash imkoniyatiga ega bo‘lmagan nishon chaqirilishidan oldin Chat Completions `messages` va Responses API `input` ichidagi yuqori darajali video qismlarini tutib qoladi.
Qo‘llab-quvvatlanadigan shakllar: `input_video`, `video_url`, `video_source`, HTTPS URL manzillari va `data:video/*;base64,...` ma’lumot URI’lari. Matndagi oddiy fayl nomlari video sifatida qabul qilinmaydi.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) so‘rovni ko‘rib chiqish, imkoniyat/siyosat tekshiruvi, har bir so‘rov bo‘yicha jamlash va javob foydali yukini boshqaradi.
Har bir video uchun bajariladigan ishlar — olish, to‘liq natija keshi, kadrlar ketma-ketligini tavsiflash (bunda chaqiruvchi e’lon qilgan har qanday audio transkript birlashtiriladi) hamda har bir urinish uchun metrikalar/bekor qilish/tozalash — `videoBridgePipeline.ts` ichidagi `processVideoPart` ortida yashirilgan bo‘lib, `preCall` sikli ichida har bir video qismi uchun bir marta chaqiriladi.
Ushbu modul, shuningdek, aniq port chegaralarini belgilaydi: `VideoMediaBrokerPort` (baytlarni olish va namunaviy kadrlarni ajratish), `VideoAudioTranscriptionPort` (chaqiruvchi e’lon qilgan audio transkriptni namunaviy kadr izohlari bilan birlashtirish) va `VideoDrilldownPort` (kadrlar bo‘yicha batafsillashtirishni saqlash chegarasi; u hali `processVideoPart` bilan ulanmagan — hozircha batafsillashtirish yozuvlarini faqat alohida `/api/modality-bridge/video/drilldown` yo‘nalishi yozadi).

Ommaviy `/v1` so‘rov yo‘li hech qachon quyi jarayonni import qilmaydi yoki chaqirmaydi. Masofaviy videolar 50 MiB chegarasi doirasida yuklab olinadi; ichki base64 videolar uchun har bir video bo‘yicha dekodlangan hajmga konservativ 36 MiB chegara qo‘yilgan, shunda model/xabarlar/freymlash konverti ommaviy JSON so‘rovlarini qabul qilishning 50 MiB chegarasi ichida qolishi mumkin. Ichki ma’lumot uzunligi va dekodlangan hajm hisoblari xotira ajratilishidan oldin tekshiriladi. Boshlang‘ich masofaviy URL va har bir qayta yo‘naltirishda HTTPS talab qilinadi; bunda DNS biriktirishga ega mavjud faqat ommaviy chiqish himoyasi ishlatiladi. Shundan so‘ng baytlar aniq ichki `POST /api/modality-bridge/video/extract` broker chegarasidan o‘tadi. Ushbu yo‘nalish ham `LOCAL_ONLY`, ham `SPAWN_CAPABLE` bo‘lib, faqat har bir jarayon uchun autentifikatsiya qilingan, ishonchli loopback so‘rovini qabul qiladi va hech qachon URL, fayl tizimi yo‘li, bajariluvchi fayl yoki argumentlar ro‘yxatini qabul qilmaydi. API tanasi hajmini boshqarish konveyeri va ishlov beruvchining tanani bosqichma-bosqich o‘quvchisi broker kirishi uchun 50 MiB chegarani mustaqil ravishda ta’minlaydi. Uning chegaralangan navbati bir vaqtda bitta ajratib olish amalini bajaradi, to‘rtta kutilayotgan vazifaga ruxsat beradi va kutilayotgan kirish ma’lumotlarini 100 MiB bilan cheklaydi.

Broker ichida `ffprobe` xususiy mahalliy faylni o‘qiydi; qat’iy formatlar ruxsat ro‘yxati pleylist va manifest formatlarini istisno qiladi. Ruxsat berilgan MOV oilasidagi konteynerlar uchun tashqi MOV ma’lumot havolalari sukut bo‘yicha o‘chirilgan holda qoladi va qat’iy buyruq ularni yoqmaydi. `ffprobe` ham, `ffmpeg` ham faqat `file` protokoli ruxsat ro‘yxatidan, bitta oqimdan, qat’iy argument massivlaridan va shellsiz bajarilishdan foydalanadi; bajariluvchi fayllar esa `PATH` orqali aniqlanadi. Biriktirilgan rasmli muqova oqimlari ijro etiladigan nomzodlar hisoblanmaydi. Barcha ijro etiladigan oqimlar cheklovlarga javob berishi kerak; deterministik eng past indeksli muqobil variantdan oldin aniq standart oqimga ustunlik beriladi. Videolar 600 soniya, har bir o‘lcham bo‘yicha 8 192 piksel va manba bo‘yicha 33 554 432 piksel bilan cheklanadi. FFmpeg 1–16 ta o‘rta nuqtadagi JPEG kadrlarini tanlaydi, kichikroq kirishlarni kattalashtirmasdan uzun qirrani ko‘pi bilan 1 024 pikselgacha kichraytiradi va hech qachon URL olmaydi. Namuna olish sukut bo‘yicha `uniform`. Ixtiyoriy `scene_aware` va tajribaviy `segment_aware` siyosatlari allaqachon tekshirilgan mahalliy oqim ustida yana bitta qat’iy FFmpeg o‘tishini bajaradi, chegaralangan `showinfo` sahna vaqt belgilarini tanlaydi va detektor xatosi, vaqt tugashi, noto‘g‘ri shakllangan chiqish yoki bo‘sh nomzodlar to‘plami yuz berganda deterministik ravishda xuddi shu bir tekis o‘rta nuqtalarga qaytadi. Segmentdan xabardor rejim o‘rta nuqta namunalarini tekshirilgan sahna intervallariga mutanosib ravishda taqsimlaydi; segmentdan xabardor dalillar va muqobil xatti-harakat quyida batafsil bayon qilingan. Qat’iy 16 kadrli chegara har bir siyosatda tanlashdan keyin qo‘llaniladi. Sahna tahliliga asoslangan so‘rovda faqat bir kadrli limit mavjud bo‘lsa, u faol to‘liq video yoki fokus oynasining bir tekis o‘rta nuqtasidan foydalanadi va `policyEffective: uniform` deb xabar beradi: tanlangan bitta sahna kadri vaqt oralig‘ining ikkala chetini ham saqlab qola olmaydi. Chaqiruvchi ixtiyoriy ravishda chekli fokus oynasini (`start`/`end` soniyalari) taqdim etishi mumkin; chegaralar media davomiyligiga moslab cheklanadi, teskari yoki chekli bo‘lmagan oynalar rad etiladi va barcha namuna olish siyosatlari faqat normallashtirilgan interval ichida bajariladi. Hosil bo‘lgan oyna namuna olish metama’lumotlariga va ishonchsiz tavsif prefiksiga kiritiladi, shunda quyi oqimdagi modellar fokuslangan parchani to‘liq vaqt shkalasidan farqlay oladi.

Semantik izoh fokusi alohida, aniq sozlamadir. Standart `full` tahlil rejimi mavjud kadr so‘rovini saqlab qoladi va so‘rov matnini hech qachon izoh modeliga uzatmaydi. `focused` rejimida ko‘prik ayni Chat yoki Responses konteyneridan faqat foydalanuvchi yaratgan eng so‘nggi bo‘sh bo‘lmagan `text`/`input_text` qiymatini o‘qiydi, uni NFC formatiga normallashtiradi, boshqaruv belgilarini va bo‘sh joylarni birlashtiradi hamda 500 ta Unicode kod nuqtasi bilan cheklaydi. Bo‘sh natija aynan `full` so‘roviga qaytadi. Foydalanish mumkin bo‘lgan ko‘rsatma maxsus ishonchsiz foydalanuvchi konteksti blokida JSON sifatida ketma-ketlashtiriladi va faqat kuzatiladigan tafsilotlarga ustuvorlik berishi mumkin; u mediada ko‘rinadigan yoki eshitiladigan ko‘rsatmalarga amal qilmaslik haqidagi alohida ogohlantirishni bekor qila olmaydi. Matnli fokus hech qachon `start`/`end` qiymatlarini hosil qilmaydi yoki vaqt bo‘yicha namuna oluvchini o‘zgartirmaydi.

#### FU-07 tuzilmaviy segment dalillari

`segment_aware` allaqachon tekshirilgan mahalliy video oqimi ustida chegaralangan bitta dastlabki tahlil bosqichidan foydalanadi. Belgilangan filtrlar zanjiri avval kenglikni ko‘pi bilan 320 pikselgacha masshtablaydi, sahna almashishlari va qotib qolgan oraliqlarni aniqlaydi, so‘ng xiralik, o‘rtacha yorqinlik hamda fazoviy/vaqtga oid axborotni baholash uchun soniyasiga 1 ta kadr namunasini oladi. Ushbu bosqich 600 ta tuzilmaviy namuna, bitta FFmpeg/filtr oqimi, o‘sha faqat `file` protokoli va konteynerlarning ruxsat etilgan ro‘yxatlari, jarayon chiqishi uchun 1 MiB chegara hamda brokerning umumiy bekor qilish/muddat chegarasi ichidagi ko‘pi bilan 30 soniya bilan cheklangan. U so‘rovdan hech qachon buyruq, filtr, yo‘l yoki URL qabul qilmaydi.

Tuzilmaviy qiymatlar videoni semantik tushunish emas, balki deterministik namunalash dalillaridir. Ular subyektlar, harakatlar, subtitrlar, nutq yoki foydalanuvchi maqsadini aniqlamaydi. Sahna va qotib qolish chegaralari segmentlarni hosil qiladi; qotib qolish qamrovi, xiralik, ekspozitsiya, fazoviy tafsilotlar va vaqt bo‘yicha o‘zgarish faqat mavjud 1–16 kadrli budjet qanday taqsimlanishiga ta’sir qiladi. To‘liq qotib qolgan segment ko‘pi bilan bitta kadr bilan cheklanadi, qotib qolmagan segmentlar esa qolgan budjet uchun raqobatlashadi. Chegaralar soni kadrlar sonidan ko‘p bo‘lsa, vaqt shkalasi bo‘ylab bir tekis qamrov saqlanadi, shuning uchun boshidagi tezkor kesishlar oxirdagi uzun segmentni yashira olmaydi. Qotib qolish chegarasidan 1 soniyalik tahlil aniqligi doirasida joylashgan sahna chegaralari birlashtiriladi.

Mavjud bo‘lmagan filtrlar, noto‘g‘ri shakllangan/bo‘sh dalillar, detektor xatosi yoki chegaralangan dastlabki tahlil vaqtining tugashi xatoni e’tiborsiz qoldirib, aynan bir tekis oraliq nuqtalar siyosatiga qaytadi. Chaqiruvchi tomonidan bekor qilish yoki broker muddati tugashi bunday qaytishga olib kelmaydi: u bajarilayotgan quyi jarayonni to‘xtatadi, keyingi kadrlarni ajratib olishning oldini oladi va xususiy vaqtinchalik daraxt `finally` ichida o‘chiriladi.

`scripts/perf/video-bridge-fu07-eval.ts` dublikatlarni olib tashlashdan keyingi subtitr chaqiruvlarini tejash, zich harakat uchun budjet taqsimoti, xiralik/ekspozitsiya/SI-TI dalillari, uzun yakuniy qismga ega tezkor kesishlar va asta-sekin so‘nishdagi yolg‘on ijobiy natijalar uchun deterministik haqiqiy FFmpeg sinov namunalarini yaratadi. U dastlabki tahlilning real vaqtini hamda `/usr/bin/time` mavjud bo‘lganda, quyi jarayon CPU sarfi va RSS cho‘qqisini qayd etadi. Uning sifat tekshiruvlari faqat tuzilmaviy etalonlardir. Haqiqiy subtitr modeli sifati `HOLD` holatida qoladi, chunki bu sinov vositasida vakolatli endpoint yoki qat’iy belgilangan baholovchi yo‘q. Pul tejalishi ham `--caption-cost-per-call-usd` har bir chaqiruv uchun aniq musbat xarajat bahosini bermaguncha `HOLD` holatida qoladi; skript hech qachon bu natijalarning birortasini uydirmaydi.

Har bir kadr 4 MiB bilan, barcha xom kadrlar birgalikda 23 MiB bilan va ketma-ketlashtirilgan broker javobi 32 MiB bilan cheklangan. Xususiy vaqtinchalik katalog `finally` ichida o‘chiriladi. OmniRoute FFmpeg’ni o‘z ichiga olmaydi va maxsus bajariladigan fayl yo‘lini qabul qilmaydi. Subtitr yaratishdan oldin ko‘prik konservativ vizual dublikatlarni olib tashlash bosqichini qo‘llaydi: har bir JPEG 16×16 kulrang tusli bufergacha kichraytiriladi va faqat oxirgi saqlab qolingan kadr bilan taqqoslanadi. Birdan ortiq kadrli subtitr budjeti so‘ralganda, ajratib olish jarayoni shu budjetdan ko‘pi bilan ikki baravar katta va hech qachon 16 kadrdan oshmaydigan chegaralangan nomzodlar to‘plamini taqdim etadi. So‘ralgan chegara faqat dublikatlar olib tashlanganidan keyin qo‘llanadi; budjet kamida ikkita bo‘lganda yakuniy siyraklashtirish davomida birinchi va oxirgi tanlangan nomzodlar saqlanadi. Versiyalangan
`grayscale-16x16-mean-cells-v2` siyosati o‘rtacha yorqinlik farqi bilan normallashtirilgan farqi kamida 0.05 bo‘lgan eskiz kataklari ulushidan kattasini ishlatadi. Dublikat chegarasi 0.04 doimiy qiymatidir va bajarilish vaqti sozlamasi sifatida taqdim etish o‘rniga oldindan bashorat qilinuvchanlik uchun tanlangan. Ushbu ikkilamchi yuqori kontrastli signal faqat o‘rtacha qiymatga asoslangan taqqoslash yashirishi mumkin bo‘lgan kichik harakatlar va ko‘rinadigan matn o‘zgarishlarini saqlab qoladi. Taqqoslagich yoki dekoder xatolari e’tiborsiz qoldiriladi va qamrov saqlanadi. Chiqish metama’lumotlari ajratib olingan nomzodlar, muvaffaqiyatli ishlatilgan kadrlar va tashlab yuborilgan vizual dublikatlarni alohida ko‘rsatadi.

Video sifatida aniq belgilangan qism vaqt belgilari tushirilgan kontakt varag‘ini so‘rashi mumkin. Ko‘prik ko‘pi bilan 4 ustunli va 16 kadrli JPEG panjarasini yaratadi. Har bir 512 pikselli katak manba vaqt belgisini yuqori kontrastli pastki tasmaga joylaydi, ayni vaqt belgilari keyingi bog‘lash va audit uchun matnli metama’lumotlarda ham saqlanadi. To‘liq JPEG hajmi 32 MiB bilan cheklanadi. Agar `sharp` panjarani dekodlay yoki tuza olmasa, ko‘prik alohida JPEG kadrlarga qaytadi; mijoz tomonidan bekor qilish esa baribir varaq operatsiyasi orqali uzatiladi.

Ishlab chiqarishga joriy etish dalillari sintetik kompozitsiya mikrobenchmarkidan ataylab ajratilgan. `scripts/perf/video-bridge-contact-sheet-eval.ts` haqiqiy OpenAI-mos ko‘rish modellari uchun sxema versiyasiga ega A/B sinov vositasini belgilaydi. U provayder xabar qilgan tokenlar, to‘liq jarayonning real vaqt kechikishi (varaqni tuzish bilan birga), model chaqiruvlari soni va manifestda belgilangan faktlarning saqlanishini o‘lchaydi. Modelning xom javoblari hisobotga yozilmaydi; faqat SHA-256 dayjestlari va mos kelgan fakt identifikatorlari saqlanadi. `--execute-real` uzatilmaguncha hamda `--model`, `OMNIROUTE_BASE_URL` va `OMNIROUTE_API_KEY` sozlanmaguncha sinov vositasi hech qanday tarmoq yoki pulli model chaqiruvini amalga oshirmaydi. Bunday aniq haqiqiy ishga tushirishsiz uning mashina o‘qiy oladigan hukmi `HOLD` holatida qoladi; faqat sintetik yuklama/chaqiruvlar soni o‘lchovlari ishlab chiqarishga joriy etish dalili hisoblanmaydi.

Chaqiruvchilar oldindan moslashtirilgan matnga ega bo‘lsa, qo‘llab-quvvatlanadigan video qismiga ixtiyoriy `transcript.cues` massivini biriktirishi mumkin. Har bir belgi `text`, tekshirilgan davomiylik ichidagi chekli `start`/`end` oralig‘i va ruxsat etilgan ro‘yxatdagi `source` (`client`, `embedded` yoki `audio-bridge`) qiymatini o‘z ichiga olishi kerak; `confidence` standart qiymat sifatida `1` ni oladi va `0` bilan `1` oralig‘ida qolishi shart. To‘liq bir xil belgilar birlashtiriladi. OmniRoute bu metama’lumotlar asosida hech qachon transkripsiyani boshlamaydi: tekshirilgan belgilar manbasi, ishonchlilik darajasi va oralig‘i bilan birga tavsiflangan natijaga ko‘chiriladi hamda kadr subtitrlari yonida ishonchsiz kuzatuvlar sifatida ko‘rsatiladi. Noto‘g‘ri, diapazondan tashqaridagi yoki kelib chiqishi ko‘rsatilmagan matn subtitr oqimiga aralashtirilmay, rad etiladi. So‘rov tanasidagi har ikkala transkript kanali taqdim etilgan kelib chiqish ma’lumotini, jumladan o‘zi bildirgan `embedded` yoki `audio-bridge` yorliqlarini `client` qiymatiga normallashtiradi. Faqat server boshqaruvidagi adapter kod orqali beriladigan `trustedSource` argumenti yordamida ushbu ishonchli yorliqlarni tayinlay oladi; so‘rov JSON maydoni bu argumentga yetib bora olmaydi. Transkript matni kelib chiqishidan qat’i nazar, media asosida olingan ishonchsiz kontent bo‘lib qoladi va hech qachon avtorizatsiyani belgilamasligi kerak.

Ilgʻor chaqiruvchi ayni video uchun `audioTranscript` trekini taqdim etishi mumkin;
u server transkripsiyasining isboti emas, balki mijoz taqdim etgan matn sifatida
koʻrib chiqiladi. Birlashtirish chegarasi vizual va audio kuzatuvlarni bitta
muddat va bekor qilish signali doirasida bajaradi, ularni umumiy vaqt chizigʻi
boʻyicha tartiblaydi, aynan bir xil nusxalarni birlashtiradi va faqat bir tomon
muvaffaqiyatli boʻlganda qisman natijani qaytaradi. Notoʻgʻri `audioTranscript`
butun videoning bajarilishini toʻxtatish oʻrniga shu qisman natijaga olib keladi —
vizual tavsif saqlanadi, audio tarmoq esa tozalangan xato kodini qayd etadi.
Har bir tarmoqning mavjudligi, qismanlik bayrogʻi va tozalangan xato kodlari
tavsiflangan natijada, himoya metamaʼlumotlarida (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), natijalar keshi metamaʼlumotlarida va koʻprikning
birlashtirish hisoblagichlarida saqlanadi. Standart Video Bridge yoʻli nutqni
matnga aylantirishni chaqirmaydi yoki medianing ikkinchi nusxasini yuklab olmaydi;
bunday aniq trek boʻlmasa, u faqat video rejimida qoladi.

**Transkriptni saqlash (#12150 P1).** Bu Video Bridge (uning oʻzi ixtiyoriy)
transkript belgisini yaratgan har qanday holatda avtomatik qoʻllanadi — alohida
saqlash bayrogʻi mavjud emas. Soʻrov istalgan transkript belgisini (chaqiruvchi
eʼlon qilgan `transcript` yoki birlashtirilgan `audioTranscript`) yaratganda,
himoya tizimi uni `videoBridgeObserved` deb belgilaydi va video tavsifining
tahrirlangan soyasini hosil qiladi — bu aynan bir xil koʻrinish boʻlib, unda har
bir belgining erkin matnli tanasi `[redacted-video-transcript]` bilan almashtiriladi;
bu satr yigʻilishidan oldin tuzilgan belgi maydonini almashtirish orqali bajariladi
(tekislangan matnni hech qachon tahlil qilmaydi, shu sababli hech qanday belgi
mazmuni — zararli yoki odatiy, jumladan `[inaudible]`/`[music]` kabi `]` belgisini
oʻz ichiga olgan tanalar — saqlanib qololmaydi). Saqlanadigan chaqiruv jurnali
soʻrovi tanasi videodan olingan har bir matn qismini mazmun tengligi boʻyicha
moslangan tahrirlangan soya bilan almashtiradi; `fullText` tayanchi chaqiruvdan
oldingi yakunlangan himoya foydali yuklamasidan qayta oʻqiladi, shuning uchun
keyingi zanjir himoyalari (PII va hisob maʼlumotlarini niqoblovchilar,
ustuvorliklari 10/95) tavsif matnini joyida qayta yozganidan hamda tizim
koʻrsatmasi/topshirish/xotira kiritilishi xabarlar massivini qayta shakllantirganidan
keyin ham moslik muvaffaqiyatli qoladi. Modelga yuqori oqim boʻylab yuboriladigan
tana oʻzgarmaydi. Kuzatilgan soʻrov, shuningdek, doimiy Memoryʼni toʻldirmaydi
(soʻrovdan ham, javobdan ham olinadigan ajratib olish oʻtkazib yuboriladi), shu
sababli modelning oʻz javobi transkript matnini Memoryʼga qayta aks ettira olmaydi.

**Xom video maydonlari (#12430).** Koʻprik yoqilgan va mahalliy video qoʻllab-quvvatlashi nomaʼlum yoki mavjud boʻlmaganda, belgilangan `transcript`/`audioTranscript` maydonlari tavsif bajarilmagandan yoki `maxVideos` chegarasidan keyin ham `videoBridgeObserved`ni faollashtiradi. `null` va boʻsh satrlar hisobga olinadi; mavjud boʻlmagan maydonlar va videoga oid boʻlmagan metamaʼlumotlar hisobga olinmaydi. Saqlanadigan nusxalar bu maydonlarni tahrirlaydi yoki soʻrovni tashlab ketadi, keshlar/Memory esa chetlab oʻtiladi.

Ushbu zaxira yoʻllarida chaqiruvchi taqdim etgan yaroqli belgilar nostandart
provayder maydonlari oʻrniga qoʻllab-quvvatlanadigan `text`/`input_text`
qismlariga aylanadi. Soʻrovda taqdim etilgan ikkala trek ham ishonchsiz `client`
kuzatuvlari boʻlib qoladi va video tavsiflanmagani hamda vaqt tamgʻalari media
bilan solishtirib tekshirilmagani haqida aniq ogohlantirish beriladi. Mavjud
256 ta belgi/64-KiB jami va har bir belgi uchun budjetlar ikkala trekka
birgalikda qoʻllanadi; vaqt tamgʻalari brokerning 600 soniyalik yuqori chegarasi
va taqdim etilgan har qanday fokus oynasiga mos kelishi kerak. Notoʻgʻri treklar
ixtiyoriy matn sifatida uzatilmaydi, balki tashlab yuboriladi; ularning umumiy
budjeti oshib ketmasa, yaroqli qardosh trekdan foydalanish mumkin. Null/boʻsh
maydonlar matn qoʻshmaydi. Bu zaxira mexanizmi hech qanday media olish yoki
transkripsiya qilishni qoʻshmaydi. Transkript kengaytma maydonlari zaxira video
tashuvchisidan va uning `video_url`/`source` obyektlaridan olib tashlanadi.
OpenAI uzatish ruxsatnomalari roʻyxati qatʼiyligicha qoladi; mahalliy qoʻllab-quvvatlashi
nomaʼlum video tashuvchilar mavjud boʻlib qoladi, faqat matnli ekanligi maʼlum
nishonlar esa xavfsiz markerlarni saqlaydi. Tuzilgan tahrirlash soyalari qoʻshilgan
transkript matnini himoya qiladi, chaqiruvchiga tegishli asl soʻrov esa oʻzgarmaydi.
Mahalliy qoʻllab-quvvatlanadigan nishonlar va oʻchirilgan koʻpriklar oʻzlarining
mavjud chetlab oʻtish xatti-harakatini saqlab qoladi.

Qoʻshimcha saqlanadigan nusxalar ayni kuzatilgan soʻrov signalidan foydalanadi.
Himoya ishlovidan oldingi xom mijoz soʻrovi surati, xotiradagi kutilayotgan soʻrov
va erta rad etilgan soʻrov jurnali video qismlaridagi transkript maydonlarini
tuzilmaviy tarzda almashtiradi; konveyer bosqichlari va kontekst topshiruvi
tomonidan yaratilgan satr koʻrsatmalari saqlanadigan soʻrov tanasi qabul qiluvchisida
tahrirlanadi. Saqlanadigan `video_content_removed` markeri `previous_response_id`
orqali davom ettirishning ataylab tashlab yuborilgan matnni qayta tiklashi oʻrniga
yopiq tarzda muvaffaqiyatsiz tugashini taʼminlaydi. Agar kuzatilgan soʻrov
jurnalga yozilishidan oldin har bir qismga tegishli tahrirlash soyasini yoʻqotsa
yoki bir nechta video soyalaridan hatto bittasi keyingi soʻrov oʻzgartirishlaridan
soʻng mos kelmasa, qisman tahrirlangan transkriptni saqlash oʻrniga saqlanadigan
soʻrov tanasi butunlay tashlab ketiladi.

Kuzatilgan soʻrov uchun model javobi transkriptning istalgan qismini tuzilgan
belgi chegarasisiz iqtibos qilishi mumkin. Shu sababli uning chaqiruv jurnalida
saqlanadigan `responseBody` qoldirib ketish markeri bilan almashtiriladi; batafsil
konveyer artefakti (u yuqori oqimdagi/mijoz tanalari va oqim boʻlaklarini oʻz
ichiga olishi mumkin) saqlanmaydi. Semantik, idempotentlik va mulohazani qayta
ijro etish keshlari ushbu soʻrov uchun oʻqish va yozishni chetlab oʻtadi.
Provayder soʻrovi va mijozga koʻrinadigan javob oʻzgarmaydi. Batafsil artefakt
tashlab ketilganda, dastlabki keepalive baytlari vaqtinchalik buferdan chiqarib
tashlanadi. Kiroʼning notoʻgʻri shakllangan EventStream ogohlantirishi faqat
foydali yuklama baytlari sonini bildiradi, uning mazmuni yoki JSON tahlilchisining
xom xatosini hech qachon bildirmaydi.
Bu har bir aloqasiz provayder/plagin diagnostikasi audit qilinganini anglatmaydi;
saqlanadigan qabul qiluvchilarni kengroq tekshirish #11658 da kuzatiladi.

Ichki `/api/modality-bridge/video/drilldown` hayotiy sikli alohida, loopback/token orqali autentifikatsiya qilinadigan kesh substratidir. Har bir amal uchun kanonik, oshkor etilmaydigan principal ID ham talab qilinadi. Ishlab chiqarishdagi chaqiruvchi faollashtirilishidan oldin u ushbu IDni autentifikatsiya qilingan tenantdan hosil qilishi va mijoz tanlagan qiymatni hech qachon uzatmasligi kerak. Kesh kalitlari ushbu principalni kanonik sessiya va video-havola IDlariga bogʻlaydi, faqat ularning SHA-256 asosida hosil qilingan kalitlarini saqlaydi hamda oʻqish va oʻchirish amallarini ayni principal doirasida cheklaydi. Kesh har bir yozuvda koʻpi bilan 16 ta hosil qilingan JPEG kadrni saqlaydi, ularni oʻn daqiqadan keyin eskirgan deb hisoblaydi hamda chegaralangan `start`/`end` oʻqishlarini yoki sessiyani bevosita oʻchirishni qoʻllab-quvvatlaydi.

Har bir principal koʻpi bilan 16 ta yozuv va 64 MiB kanonik JPEG maʼlumoti bilan cheklangan. Bu cheklovlar 64 ta yozuv/256 MiB miqyosidagi global chegaradan mustaqil: principal kvotasidagi bosim global LRU chiqarib tashlash koʻrib chiqilishidan oldin faqat shu principalning eng uzoq vaqt davomida ishlatilmagan yozuvlarini chiqarib tashlaydi. Keshdagi faollik vaqtida eskirgan yozuvlar principal va global hisobdan ham tozalanadi, bekor qilish yoki tekshiruv xatosi esa qisman almashtirishni saqlab qoʻymaydi.

Kesh kanonik boʻlmagan Base64 maʼlumotlarini, ortiqcha toʻldirishni, JPEG boʻlmagan mediani, notoʻgʻri shakllangan yoki kesilgan JPEG fayllarini hamda chegaralangan toʻliq tasvir `sharp` dekodlashi paytida ogohlantirish hosil qiladigan JPEG fayllarini rad etadi. U har bir qabul qilingan tasvirni kanonik JPEG sifatida qayta kodlaydi, chaqiruvchi maydonlariga ishonish oʻrniga kenglik va balandlikni dekodlangan baytlardan aniqlaydi hamda oxiriga qoʻshilgan har qanday poliglot baytlarni saqlamasdan tashlab yuboradi. Har ikkala kvota hisobiga faqat hajmi chegaralangan kanonik siqilgan bufer yoziladi. JSON uzatish chegarasi 32 MiB hajmdagi dekodlangan kirish chegarasi uchun Base64 qoʻshimcha hajmini ham oʻz ichiga oladi. Har bir saqlangan hosila uning tekshirilgan JPEG formati/aniqligi, namuna olish siyosati, hosila versiyasi, yaratilgan vaqti, server hisoblagan kontent xeshi, xeshlangan asosiy havolasi hamda ishonchli chaqiruvchining asosiy kontent xeshini qayd etadi. Atomar keshga saqlashdan oldin asinxron dekodlash/xeshlash bosqichlari orasida bekor qilish holati tekshiriladi.

Bu qism hali ishlab chiqarishdagi maʼlumot yaratuvchini marshrutga ulamaydi va koʻp aniqlikdagi variantlarni tanlash imkonini bermaydi. Shu sababli shaffof Video Bridge soʻrov yoʻli hech qanday qoʻshimcha ish bajarmaydi, tenantga bogʻlangan principalni hosil qilish va FU-08 koʻp aniqlikdagi toʻliq hayotiy sikli esa tugallangan funksionallik sifatida hujjatlashtirilmay, keyingi aniq ishlar sifatida qoladi.

Kadrlar sozlangan Video modeli yordamida ketma-ket tavsiflanadi. Boʻsh Video almashtirishi Vision sozlamasini meros qilib oladi; agar ikkalasi ham boʻsh boʻlsa, Vision avtomatik marshrutizatori amaldagi tasvir bilan ishlashga qodir modelni tanlaydi. Muvaffaqiyatli tavsiflar asl qismni barqaror `[Video description:` prefiksiga ega matn bilan almashtiradi; bu prefiks matnni ishonchsiz, mediadan hosil qilingan kuzatuv sifatida ham belgilaydi va quyi oqimdagi modellarga mediada topilgan koʻrsatmalarga amal qilmaslikni bildiradi. Kadr tavsiflari keshi kalitlari JPEG baytlari, prompt, vaqt tamgʻasi va amaldagi modelni oʻz ichiga oladi; faqat muvaffaqiyatli tavsiflar keshga saqlanadi. Kesh yozuvlari haqiqiy muvaffaqiyatli ishlab chiqaruvchi modelni, jumladan zaxira modelni ham saqlab qoladi; turli kadrlar turli modellar tomonidan yaratilgan boʻlsa, bridge `mixed` deb xabar beradi. Kesh topilmasi ishlab chiqaruvchining ushbu identifikatorini soʻralgan marshrutlash rejasi sifatida qayta belgilash oʻrniga qayta ishlatadi. Butun video natijalari keshi chiqishni oʻzgartiradigan barcha kirishlar — prompt, amaldagi model, namuna olish siyosati, kadrlar soni, semantik tahlil rejimi, normallashtirilgan fokus koʻrsatmasining SHA-256 raqamli izi, fokus oynasi, `transcript`, `audioTranscript` va kontakt-varaq bayrogʻi — asosida kalitlanadi. Shu sababli ushbu oʻlchamlardan istalgan birining oʻzgarishi eskirgan maʼlumotni qayta ishlatishga emas, kesh topilmasligiga olib keladi. Vizual deduplikatsiya siyosatining versiyasi, chegaraviy qiymati va chegaralangan nomzod kadrlar soni ham natijalar keshi kaliti va metamaʼlumotlarida aniq koʻrsatiladi; shu sababli siyosat oʻzgarishi butun videoning eskirgan tavsifini qayta ishlata olmaydi. Natijalar keshining v4 metamaʼlumotlari rejim va raqamli izni saqlaydi, foydalanuvchining asl vazifasini esa hech qachon saqlamaydi. Himoya cheklovlari metamaʼlumotlari soʻralgan va amaldagi tahlil rejimlarini ham xabar qiladi; foydalanishga yaroqli foydalanuvchi matnisiz soʻralgan `focused` rejimi amalda `full` sifatida qayd etiladi.

Himoya cheklovi barcha qoʻllab-quvvatlanadigan video qismlarini ajratib oladi, ammo `modalityBridgeVideoMaxVideos` dan ortiq videoni tavsiflamaydi. `supportsVideo === false` ekanligi isbotlangan nishon uchun ishlov berilishi muvaffaqiyatsiz tugagan va limitdan oshgan videolar aniq xavfsiz matn belgilariga aylantiriladi, shunda hech qanday xom video saqlanib qolmaydi. Imkoniyat nomaʼlum boʻlsa, ushbu qismlar oʻz video tashuvchisini saqlab qoladi; har qanday zaxira transkript yuqoridagi chegaralangan matnga aylantirish qoidalariga amal qiladi. `supportsVideo === true` boʻlgan nishonlar bridge mexanizmini chetlab oʻtadi. Mijoz soʻrovining bekor qilish signali yuklab olish, broker navbati, quyi jarayonlar va tavsiflash chaqiruvlari boʻylab uzatiladi; bekor qilish videolar orasidagi ishlovni toʻxtatadi va hech qachon xom mediaga ochiq holda davom etmaydi.

Ish vaqti sozlamalari DBda saqlanadi va Zod orqali tekshiriladi:

| Kalit                               | Standart qiymat | Diapazon / xatti-harakat                                                                                               |
| ----------------------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`         | Ixtiyoriy bajarilish muhiti, alohida yoqiladi                                                                          |
| `modalityBridgeVideoAnalysisMode`   | `"full"`        | `full` umumiy tavsiflarni saqlaydi; `focused` chegaralangan, ishonchsiz so‘nggi foydalanuvchi kontekstidan foydalanadi |
| `modalityBridgeVideoModel`          | `""`            | Vision Bridge modelini meros qilib oladi                                                                               |
| `modalityBridgeVideoFrameCount`     | `8`             | 1–16                                                                                                                   |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`     | `uniform`, `scene_aware` yoki proporsional `segment_aware`; detektor xatosida `uniform`ga qaytiladi                    |
| `modalityBridgeVideoMaxVideos`      | `1`             | 1–4                                                                                                                    |
| `modalityBridgeVideoTimeout`        | `120000`        | 1000–120000 ms                                                                                                         |

Saqlanib qolgan eski Video kutish vaqti qiymatlari 120 soniyadan yuqori bo‘lsa,
brokerning oxirgi muddatigacha cheklanadi; ushbu chegaradan yuqori yangi sozlama
yozuvlari rad etiladi. `GET /api/modality-bridge/video/runtime` autentifikatsiya
yoki bajarilish muhitini tekshirishdan oldin ishonchli tarzda belgilangan
loopback mahalliyligini, keyin esa boshqaruv autentifikatsiyasini talab qiladi.
U faqat `available`, tozalangan FFmpeg/ffprobe versiyalari va bajarilish muhiti
mavjud bo‘lmaganda qat’iy belgilangan sababni qaytaradi. Ichki ajratib olish
endpointi ommaviy yuklash API’si emas: navbat to‘lib qolsa `503` va
`Retry-After`, chaqiruvchi uzilib qolsa `499`, brokerning qat’iy muddati tugasa
`504` qaytariladi. Konvertatsiya qilingan javoblar Vision yoki Audio
segmentlarini olib tashlamasdan markaziy `x-omniroute-modality-bridge`
sarlavhasiga `video->text;model=<visionModel>;parts=<videos>` qo‘shadi.

### PII niqoblagichi (`piiMasker.ts`)

**Har ikkala** bosqichda ishlaydi.

- **`preCall`** foydali yuklamani klonlaydi, `system`, `messages`, `input` va
  `prompt` bo‘ylab (shu jumladan oddiy satr elementlari) yuradi hamda satr
  turidagi `content`/`text` maydonlariga `processPII()`ni
  (`@/shared/utils/inputSanitizer`dan) qo‘llaydi. `PII_REDACTION_ENABLED=true`
  bo‘lganda aniqlangan PII chiquvchi foydali yuklamada yashiriladi. Bu
  `INPUT_SANITIZER_MODE`dan mustaqil (u faqat prompt-inyeksiya siyosatini
  boshqaradi). Yashirish o‘chirilgan bo‘lsa, chaqiruv kontentni qayta
  yozmasdan aniqlashlar sonini qayd etadi.
- **`postCall`** javobni chuqur klonlaydi, `sanitizePIIResponse()` hamda
  Responses API shaklidagi niqoblagichni (`maskResponsesOutput` —
  `output_text` va `output[].content[].text`ni qamrab oladi) ishga tushiradi.
  Agar biror yashirish amalga oshirilsa, o‘zgartirilgan javob asl javobning
  o‘rnini egallaydi.

Himoya cheklovi hech qachon bloklamaydi; u faqat annotatsiya qiladi
(`meta.detections`, `meta.redacted`) yoki qayta yozadi.

### Prompt inyeksiyasi (`promptInjection.ts`)

Foydalanuvchi taqdim etgan kontentdagi zararli tuzilmalarni aniqlaydi va
sozlangan siyosatni amalga oshiradi. Xatti-harakat muhit o‘zgaruvchilari va
konstruktor parametrlari orqali boshqariladi:

| Sozlama            | Muhit o‘zgaruvchisi                                                                                          | Standart qiymat | Ta’siri                                                                                                                                                                                                                    |
| ------------------ | ------------------------------------------------------------------------------------------------------------ | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Yoqilgan           | `INPUT_SANITIZER_ENABLED`                                                                                    | `true`          | `false` bo‘lganda himoya cheklovi darhol yakunlanadi.                                                                                                                                                                      |
| Rejim              | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                              | `warn`          | Inyeksiya siyosati: `block`, `warn` yoki `log`. (`redact` orqaga muvofiqlik uchun qabul qilinadi, ammo inyeksiya matnini **olib tashlamaydi**; so‘rovdagi PIIni qayta yozish `PII_REDACTION_ENABLED` orqali boshqariladi.) |
| Bloklash chegarasi | `blockThreshold` parametri / `INPUT_SANITIZER_BLOCK_THRESHOLD` (`INJECTION_GUARD_BLOCK_THRESHOLD` taxallusi) | `high`          | Bloklash uchun zarur bo‘lgan minimal jiddiylik darajasi. Standart holatda Medium faqat kuzatuv rejimida.                                                                                                                   |

**Rejim ustuvorligi** (`getMode`): chaqiruvchining `options.mode` qiymati →
`INJECTION_GUARD_MODE` **MB xususiyat bayrog‘i ustuvor qiymati** (Dashboard →
Settings → Feature Flags) → `INJECTION_GUARD_MODE` muhit o‘zgaruvchisi →
`INPUT_SANITIZER_MODE` muhit o‘zgaruvchisi → `warn`. Shu sababli boshqaruv
panelidagi ustuvor qiymat muhit o‘zgaruvchilaridan ustun keladi va Feature Flags
interfeysi ishlayotgan himoyani real vaqt rejimida boshqaradi (qayta ishga
tushirish shart emas). MBdan o‘qish xatolarga chidamli: xato yuz bersa, himoya
muhitga asoslangan xatti-harakatga qaytadi; ustuvor qiymat belgilanmaganida esa
xatti-harakat faqat muhit orqali aniqlash bilan bir xil bo‘ladi.

Aniqlash manbalari:

1. `@/shared/utils/inputSanitizer`dan `sanitizeRequest()` (konveyerning boshqa
   joylarida ham ishlatiladigan umumiy detektorlar to‘plami).
2. Ichki `DEFAULT_GUARD_PATTERNS` (hozirda `system_override_inline` va
   `markdown_system_block`, har ikkalasi ham `high` jiddiylik darajasida).
3. Konstruktor parametrlari orqali uzatiladigan ixtiyoriy `customPatterns`
   (satrlar, muntazam ifodalar yoki `{ name, pattern, severity }` yozuvlari).

`mode === "block"` bo‘lganda **va** kamida bitta aniqlangan holat jiddiylik
chegarasiga yetsa, `preCall` `{ block: true, message: "Request rejected:
suspicious content detected" }` qaytaradi. `warn`/`log` rejimlarida himoya mexanizmi
jurnalga yozadi, ammo chaqiruvga ruxsat beradi. Umumiy yordamchi `evaluatePromptInjection()` ham
registr orqali o‘tmasdan promptlarni baholashi kerak bo‘lgan chaqiruvchilar uchun eksport
qilinadi.

**Skanerlash chegarasi (v3.8.20):** detektor birlashtirilgan prompt matnining faqat
**dastlabki 16 KB** qismini tekshiradi — `src/shared/utils/inputSanitizer.ts` ichida
`MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bayt). `detectInjection()` ham,
`evaluatePromptInjection()` ham andozalar siklini ishga tushirishdan oldin
`slice(0, MAX_INJECTION_SCAN_BYTES)` ni qo‘llaydi. Inʼeksiya ko‘rsatmalari kiritmaning
yuqori qismida joylashadi, shu sababli bu aniqlashni zaiflashtirmasdan yuzlab KB hajmdagi
yuklamalarda regex CPU/GC sarfini cheklaydi (qarang: #3932, #4041).

### Hisob maʼlumotlarini niqoblash vositasi (`credentialMasker.ts`)

Standart zanjirning oxirida (ustuvorlik `95`) **har ikkala** bosqichda ishlaydi.
Chiquvchi yuklamadagi (xabar mazmuni, vosita chaqiruvi argumentlari, vosita natijalari)
**hamda** provayder javobidagi taniqli API kaliti / maxfiy token andozalarini tahrirlab
yashiradi; shu tariqa promptga joylangan (yoki vosita natijasi tomonidan qaytarilgan)
hisob maʼlumotlari yuqori oqimdagi provayderga yoki mijozga sizib chiqmaydi.

- PII tahrirlab yashirish bilan bir xil qoida asosida **faqat ixtiyoriy yoqiladi**
  (20-qatʼiy qoidaga yaqin): `settings.credentialRedactionEnabled === true` **yoki**
  `CREDENTIAL_REDACTION_ENABLED=true` bo‘lmasa, o‘chiq turadi. U o‘chiq bo‘lsa,
  himoya mexanizmi hech qanday amal bajarmaydi — u hech qachon bloklamaydi va hech
  qachon qayta yozmaydi.
- `redactCredentials()` to‘liq yuklama/javob daraxtini (`walkValue()`,
  prototip ifloslantirilishidan himoyalangan, `WeakSet` orqali sikllardan himoyalangan)
  ko‘rib chiqadi va mosliklarni `[REDACTED:<type>]` o‘rinbosari bilan almashtirib,
  faqat amalda o‘zgargan shoxlarni klonlaydi.
- `CREDENTIAL_PATTERNS` LLM provayderlari kalitlarini (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokenlarini (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), to‘lov kalitlarini (Stripe, Square), bulut
  kalitlarini (AWS kirish kaliti, Twilio, SendGrid, Mailgun), yopiq kalitlar / JWTlarni,
  hisob maʼlumotlarini o‘z ichiga olgan ulanish satrlarini
  (`mongodb://user:pass@...` va hokazo) hamda umumiy
  `Authorization`/`x-api-key`/`api-key`/`apikey` sarlavha-qiymat andozasini
  qamrab oladi. Sarlavha shaklidagi kalitlar (`authorization`, `x-api-key`, `api-key`,
  `apikey`) umumiy matn regexi orqali emas, balki tuzilmaviy tarzda tahrirlab yashiriladi
  (faqat qiymat; `Bearer `/`Basic ` kabi sxema prefiksi saqlanadi).
- Himoya mexanizmi hech qachon bloklamaydi; u faqat qayta yozadi (`modifiedPayload` /
  `modifiedResponse`) va izohli metamaʼlumot qo‘shadi (`meta.credentialsRedacted`, `meta.count`).

Regressiyadan himoya: `tests/unit/credential-masker-guardrail.test.ts`.

## Asosiy kontrakt (`base.ts`)

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
  block?: boolean; // true zanjir bajarilishini darhol toʻxtatadi
  message?: string; // bloklanganda koʻrsatiladi
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // soʻrovni qayta yozish uchun preCall tomonidan qaytariladi
  modifiedResponse?: TValue; // javobni qayta yozish uchun postCall tomonidan qaytariladi
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

Himoya cheklovi `void`, `{}` yoki `{ block: false }` qiymatlaridan birini
qaytarish orqali «oʻzgarish yoʻq» holatini bildiradi. `modifiedPayload`/`modifiedResponse`
qaytarilishi zanjir boʻylab keyingi himoya cheklovlariga uzatilayotgan qiymatni
almashtiradi. `signal?: AbortSignal` chaqiruvchining hayot siklini himoya
cheklovlariga uzatadi. Soʻrovning bekor qilinishi ataylab qoʻllanadigan ochiq
oʻtkazish istisnosidir: media koʻpriklari ishni toʻxtatadi va tozalashni amalga
oshiradi, bunda xom media uni qoʻllab-quvvatlamasligi maʼlum boʻlgan maqsadga
qayta tiklanmaydi.

## Reestr (`registry.ts`)

Yagona `guardrailRegistry` nusxasi quyidagilarni taqdim etadi:

- `register(guardrail)` — himoya cheklovini qoʻshadi (yoki normallashtirilgan
  nom boʻyicha almashtiradi) va roʻyxatni `priority` qiymatining oʻsish tartibida
  qayta saralaydi.
- `clear()` / `list()` — maʼmuriy yordamchi funksiyalar.
- `runPreCallHooks(payload, context)` — faol himoya cheklovlarini ketma-ket
  bajaradi, foydali yuklamani `modifiedPayload` orqali uzatadi va birinchi
  `block: true` holatida toʻxtaydi.
- `runPostCallHooks(response, context)` — javob tomonida xuddi shu oqimni
  bajaradi.
- `resetGuardrailsForTests({ registerDefaults })` — holatni tozalaydi va
  testlarni izolyatsiya qilish uchun ixtiyoriy ravishda standart himoya
  cheklovlarini qayta roʻyxatdan oʻtkazadi.

Har ikkala bajaruvchi ham `{ blocked, payload|response, results, guardrail?, message? }`
qiymatini qaytaradi, bunda `results` har bir himoya cheklovi uchun `blocked`,
`skipped`, `modified`, `error` va `meta` maydonlarini oʻz ichiga olgan
`GuardrailExecutionResult` yozuvlari massivi boʻlib, kuzatuv uchun foydalidir.

### Har bir soʻrov uchun himoya cheklovlarini oʻchirish

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` joriy soʻrov uchun
oʻtkazib yuborilishi kerak boʻlgan himoya cheklovlari nomlarining takrorlanmaydigan
roʻyxatini jamlaydi. Manbalar (barchasi ixtiyoriy, barchasi birlashtiriladi):

- `apiKeyInfo.disabledGuardrails`
- Soʻrov tanasidagi `disabledGuardrails` (yuqori darajada)
- Soʻrov tanasidagi `metadata.disabledGuardrails`
- `x-omniroute-disabled-guardrails` sarlavhasi (yoki eski
  `x-disabled-guardrails`)

Qiymatlar satrlar massivi yoki vergul bilan ajratilgan satr boʻlishi mumkin;
nomlar kichik harflardagi kebab-case formatiga normallashtiriladi
(`pii_masker` → `pii-masker`). Natija `context.disabledGuardrails` orqali
reestrga uzatiladi va reestr mos keluvchi himoya cheklovlarini oʻtkazib yuboradi
(`results` ichida `skipped: true`).

## Bajarilish tartibi

`src/sse/handlers/chat.ts` va `open-sse/handlers/chatCore.ts` orqali oʻtadigan har bir soʻrov uchun:

1. `resolveDisabledGuardrails(...)` API kaliti, soʻrov tanasi va sarlavhalar asosida oʻtkazib yuboriladigan himoya mexanizmlari roʻyxatini tuzadi.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` himoya mexanizmlarini ustuvorlikning oʻsish tartibida ishga tushiradi:
   - Oʻchirilgan himoya mexanizmlari `skipped` sifatida qayd etiladi.
   - Har bir himoya mexanizmining `preCall` funksiyasi `modifiedPayload` orqali foydali yuklamani qayta yozishi mumkin.
   - Birinchi `block: true` zanjirni muddatidan oldin toʻxtatadi va ishlov beruvchi himoya mexanizmi tomonidan rad etilganlik javobini qaytaradi.
3. (Qayta yozilgan boʻlishi mumkin boʻlgan) foydali yuklama kombinatsiyalangan marshrutlash va yuqori oqimga joʻnatish jarayoniga oʻtadi.
4. Javob shakllantirilgach, `guardrailRegistry.runPostCallHooks(...)` javob ustida ayni zanjirni ishga tushiradi. Bu yerda `block: true` yuqori oqim javobini bekor qiladi.

Istisno chiqaradigan himoya mexanizmlari `error: <message>` bilan qayd etiladi va `logger.warn` orqali jurnalga yoziladi, ammo zanjir davom etadi — bu ataylab ochiq xato siyosati asosida ishlaydi.

## Konfiguratsiya

Ichki himoya mexanizmlari oʻqiydigan muhit oʻzgaruvchilari:

| Oʻzgaruvchi                           | Foydalanadigan mexanizm  | Taʼsiri                                                                                                                             |
| ------------------------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`       | Aniqlashni butunlay oʻchirish uchun `false` qiymatini belgilang.                                                                    |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`       | Inʼeksiya siyosati: `warn`, `block` yoki `log`. Eski `redact` qiymati inʼeksiya matnini qayta yozmaydi.                             |
| `INJECTION_GUARD_MODE`                | `prompt-injection`       | Inʼeksiya himoyasi rejimi; shuningdek, muhit oʻzgaruvchilarini **ustunlik bilan almashtiradigan** MB xususiyat bayrogʻi (MB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`       | `MODE=block` rad etadigan minimal jiddiylik darajasi: `high` (standart), `medium` yoki `low`.                                       |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`       | `INPUT_SANITIZER_BLOCK_THRESHOLD` uchun eski muqobil nom.                                                                           |
| `PII_REDACTION_ENABLED`               | `pii-masker`             | `true` boʻlganda, soʻrovdagi PII tahrirlanadi (inʼeksiya rejimidan mustaqil ravishda).                                              |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (quyi oqim) | Javob tomonidagi niqoblash mexanizmi xatti-harakatini boshqaradi.                                                                   |

Modality Bridge himoya mexanizmlari ish vaqti konfiguratsiyasini muhit oʻzgaruvchilaridan emas, MB tomonidan qoʻllab-quvvatlanadigan sozlamalar omboridan (`getSettings()`) oʻqiydi. Vision uchun asosiy kalitlar:
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` va
`modalityBridgeCacheMaxEntries`. Eski
`visionBridge*` kalitlari faqat hujjatlashtirilgan bir siklli oʻqish
zaxira varianti sifatida qabul qilinadi; boshqaruv panelidagi yozuvlar asosiy kalitlardan foydalanadi. Standart qiymatlar va zaxira variantni aniqlovchi
`src/shared/constants/modalityBridgeDefaults.ts` faylida joylashgan, eski
konstantalar esa `src/shared/constants/visionBridgeDefaults.ts` faylida saqlab qolingan.

Audio `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` va `modalityBridgeAudioMaxClips`, shuningdek, umumiy
`modalityBridgeCache*` sozlamalaridan foydalanadi. Audio uchun eski kalitlarga qaytish imkoniyati yoʻq, chunki bu
kalitlar Modality Bridge sxemasi bilan birga joriy etilgan.

Video `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` va
`modalityBridgeVideoTimeout`, shuningdek, umumiy `modalityBridgeCache*` sozlamalaridan foydalanadi.
U standart holatda oʻchirilgan, chunki FFmpeg/ffprobe ixtiyoriy operatsion
bogʻliqliklar hisoblanadi va kadrlarga tavsif yaratish kechikish hamda model xarajatini oshiradi.

## Maxsus Guardrail’lar

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

Qadamlar:

1. `BaseGuardrail`ni kengaytiruvchi `src/lib/guardrails/myGuardrail.ts` faylini yarating.
2. `preCall` va/yoki `postCall`ni amalga oshiring.
3. Import vaqtida roʻyxatdan oʻtkazing (`registerDefaultGuardrails`dan qoʻshing) yoki
   bajarilish vaqtida `guardrailRegistry.register(...)`ni chaqiring — registr
   bir xil normallashtirilgan nomga ega oldingi guardrail’ni almashtiradi.
4. Testlarni `tests/unit/` ichiga qoʻshing (mavjud misollar:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testlash

Maʼlum holatdan boshlash uchun testlar orasida `resetGuardrailsForTests()`dan foydalaning.
Boʻsh registr bilan boshlash va faqat test qilinayotgan guardrail’larni roʻyxatdan
oʻtkazish uchun `{ registerDefaults: false }`ni uzating. Vision Bridge bogʻliqliklarni
kiritishni (`deps.getSettings`, `deps.callVisionModel`) qabul qiladi; Audio Bridge esa
sozlamalar, imkoniyatlar, STT modelini tanlash, hisob maʼlumotlarini tekshirish va
transkripsiya uchun mos ekvivalent ulanish nuqtalarini taqdim etadi. Shu sababli testlar
har ikkala oqimni ham maʼlumotlar bazasi yoki tarmoqqa ulanmasdan sinashi mumkin.

## Shuningdek qarang

- `src/lib/guardrails/` — amalga oshirish
- `src/shared/utils/inputSanitizer.ts` — prompt-injection va PII niqoblashni
  taʼminlovchi umumiy detektor
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge standartlari va
  majburiy bridge modellari roʻyxati
- `src/shared/constants/modalityBridgeDefaults.ts` — umumiy Vision/Audio bajarilish muhiti standartlari
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonal qatlam (circuit breaker, kutish davrlari)
- `docs/reference/ENVIRONMENT.md` — muhit oʻzgaruvchilarining toʻliq maʼlumotnomasi

## Injection-guard marshrut qamrovi va red-team (8-bosqich · D blok)

Injection-guard (`createInjectionGuard` / `withInjectionGuard`) foydalanuvchi promptlarini
qabul qiladigan barcha marshrutlarni qamrab oladi. U `INJECTION_GUARD_MODE`ga amal qiladi
(standart `warn` = faqat jurnalga yozish; `block` = HTTP 400 `SECURITY_001`ni qaytaradi).

| Tur           | Marshrutlar                                                                                                                                          | Standart rejim |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Matn (mavjud) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn           |
| Generativ     | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn           |
| Maʼlumotlar   | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn           |

Matnni ajratib olish (`extractMessageContents`) `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`ni qamrab oladi.

**Red-team (har kecha, `nightly-llm-security.yml`):** promptfoo har bir marshrut
`INJECTION_GUARD_MODE=block` holatida OWASP-LLM korpusini bloklashini tekshiradi; garak
probelarni ishga tushiradi (maxfiy kalit boʻlmasa, oʻtkazib yuboradi).
Izchillik uchun `moderations` ham kiritilgan — `block` rejimidagi operatorlar uni
`resolveDisabledGuardrails` orqali istisno qilishi mumkin.

Har kechalik ish jarayoni (`.github/workflows/nightly-llm-security.yml`, cron + qoʻlda
ishga tushirish) ikkita vazifaga ega:

- **`promptfoo-guard` (bloklovchi)** — `INJECTION_GUARD_MODE=block` bilan
  `promptfoo eval -c promptfooconfig.yaml`ni ishga tushiradi. Har bir zararli holat
  (masalan, "barcha oldingi koʻrsatmalarni eʼtiborsiz qoldir…", DAN uslubidagi
  jailbreak’lar) javobda `error.code === "SECURITY_001"` mavjudligini, yaʼni guard
  soʻrovni amalda rad etganini tekshiradi.
- **`garak` (tavsiyaviy)** — lokal OmniRoute nusxasiga
  (`http://localhost:20128/v1`) qarshi garak’ni `--probes promptinject,dan,leakreplay`
  bilan ishga tushiradi. U provayder maxfiy kalitiga (`PROMPTFOO_PROVIDER_KEY`)
  bogʻlangan; kalit boʻlmasa muammosiz oʻtkazib yuboradi va `|| true` bilan
  yakunlanadi, shu sababli CI’ni muvaffaqiyatsiz qilmasdan hisobot beradi.

Guard yordamchisining (`createInjectionGuard` / `withInjectionGuard`) qamrovi
prompt qabul qiluvchi har bir `/v1` marshrutini oʻz ichiga oladi; prompt matni
`src/shared/utils/inputSanitizer.ts` ichidagi `extractMessageContents()` tomonidan
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`dan olinadi.
