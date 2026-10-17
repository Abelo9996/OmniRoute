# Feature Flags (አማርኛ)

🌐 **Languages:** 🇺🇸 [English](../../../../reference/FEATURE_FLAGS.md) · 🇸🇦 [ar](../../../ar/docs/reference/FEATURE_FLAGS.md) · 🇦🇿 [az](../../../az/docs/reference/FEATURE_FLAGS.md) · 🇧🇬 [bg](../../../bg/docs/reference/FEATURE_FLAGS.md) · 🇧🇩 [bn](../../../bn/docs/reference/FEATURE_FLAGS.md) · 🇧🇦 [bs](../../../bs/docs/reference/FEATURE_FLAGS.md) · 🇨🇿 [cs](../../../cs/docs/reference/FEATURE_FLAGS.md) · 🇩🇰 [da](../../../da/docs/reference/FEATURE_FLAGS.md) · 🇩🇪 [de](../../../de/docs/reference/FEATURE_FLAGS.md) · 🇬🇷 [el](../../../el/docs/reference/FEATURE_FLAGS.md) · 🇪🇸 [es](../../../es/docs/reference/FEATURE_FLAGS.md) · 🇪🇪 [et](../../../et/docs/reference/FEATURE_FLAGS.md) · 🇮🇷 [fa](../../../fa/docs/reference/FEATURE_FLAGS.md) · 🇫🇮 [fi](../../../fi/docs/reference/FEATURE_FLAGS.md) · 🇫🇷 [fr](../../../fr/docs/reference/FEATURE_FLAGS.md) · 🇮🇪 [ga](../../../ga/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [gu](../../../gu/docs/reference/FEATURE_FLAGS.md) · 🇳🇬 [ha](../../../ha/docs/reference/FEATURE_FLAGS.md) · 🇮🇱 [he](../../../he/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [hi](../../../hi/docs/reference/FEATURE_FLAGS.md) · 🇭🇷 [hr](../../../hr/docs/reference/FEATURE_FLAGS.md) · 🇭🇺 [hu](../../../hu/docs/reference/FEATURE_FLAGS.md) · 🇦🇲 [hy](../../../hy/docs/reference/FEATURE_FLAGS.md) · 🇮🇩 [id](../../../id/docs/reference/FEATURE_FLAGS.md) · 🇳🇬 [ig](../../../ig/docs/reference/FEATURE_FLAGS.md) · 🇮🇹 [it](../../../it/docs/reference/FEATURE_FLAGS.md) · 🇯🇵 [ja](../../../ja/docs/reference/FEATURE_FLAGS.md) · 🇬🇪 [ka](../../../ka/docs/reference/FEATURE_FLAGS.md) · 🇰🇭 [km](../../../km/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [kn](../../../kn/docs/reference/FEATURE_FLAGS.md) · 🇰🇷 [ko](../../../ko/docs/reference/FEATURE_FLAGS.md) · 🇱🇹 [lt](../../../lt/docs/reference/FEATURE_FLAGS.md) · 🇱🇻 [lv](../../../lv/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [ml](../../../ml/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [mr](../../../mr/docs/reference/FEATURE_FLAGS.md) · 🇲🇾 [ms](../../../ms/docs/reference/FEATURE_FLAGS.md) · 🇲🇹 [mt](../../../mt/docs/reference/FEATURE_FLAGS.md) · 🇲🇲 [my](../../../my/docs/reference/FEATURE_FLAGS.md) · 🇳🇵 [ne](../../../ne/docs/reference/FEATURE_FLAGS.md) · 🇳🇱 [nl](../../../nl/docs/reference/FEATURE_FLAGS.md) · 🇳🇴 [no](../../../no/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [or](../../../or/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [pa](../../../pa/docs/reference/FEATURE_FLAGS.md) · 🇵🇭 [phi](../../../phi/docs/reference/FEATURE_FLAGS.md) · 🇵🇱 [pl](../../../pl/docs/reference/FEATURE_FLAGS.md) · 🇵🇹 [pt](../../../pt/docs/reference/FEATURE_FLAGS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/reference/FEATURE_FLAGS.md) · 🇷🇴 [ro](../../../ro/docs/reference/FEATURE_FLAGS.md) · 🇷🇺 [ru](../../../ru/docs/reference/FEATURE_FLAGS.md) · 🇱🇰 [si](../../../si/docs/reference/FEATURE_FLAGS.md) · 🇸🇰 [sk](../../../sk/docs/reference/FEATURE_FLAGS.md) · 🇸🇮 [sl](../../../sl/docs/reference/FEATURE_FLAGS.md) · 🇷🇸 [sr](../../../sr/docs/reference/FEATURE_FLAGS.md) · 🇸🇪 [sv](../../../sv/docs/reference/FEATURE_FLAGS.md) · 🇰🇪 [sw](../../../sw/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [ta](../../../ta/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [te](../../../te/docs/reference/FEATURE_FLAGS.md) · 🇹🇭 [th](../../../th/docs/reference/FEATURE_FLAGS.md) · 🇹🇷 [tr](../../../tr/docs/reference/FEATURE_FLAGS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/reference/FEATURE_FLAGS.md) · 🇵🇰 [ur](../../../ur/docs/reference/FEATURE_FLAGS.md) · 🇺🇿 [uz](../../../uz/docs/reference/FEATURE_FLAGS.md) · 🇻🇳 [vi](../../../vi/docs/reference/FEATURE_FLAGS.md) · 🇳🇬 [yo](../../../yo/docs/reference/FEATURE_FLAGS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/reference/FEATURE_FLAGS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/reference/FEATURE_FLAGS.md)

---

> ያለ **ዳግም ማሰማራት** የOmniRouteን ባህሪ የሚቀይሩ የሩጫ ጊዜ መቀያየሪያዎች።
> እዚህ የተዘረዘረው እያንዳንዱ ጠቋሚ በ
> [`src/shared/constants/featureFlagDefinitions.ts`](../../src/shared/constants/featureFlagDefinitions.ts)
> ውስጥ ተገልጿል — ይህም ብቸኛው የእውነት ምንጭ ነው። ዳሽቦርዱም ሆነ REST API ከዚያ
> ፋይል ስለሚያነቡ፣ ከታች ያለው ሰንጠረዥ ከእሱ ጋር 1:1 እንዲዛመድ ተፈጥሯል።

---

## የባህሪ ጠቋሚዎች ምንድን ናቸው

የባህሪ ጠቋሚ በስም የተሰየመ መቀያየሪያ (boolean ወይም enum) ሲሆን፣ እሴቱ በሩጫ ጊዜ
ሊቀየር እና ዳግም የሂደት ማሰማራት ሳያስፈልግ በውሂብ ጎታው ውስጥ ሊቀመጥ ይችላል። እያንዳንዱ
ጠቋሚ `key`፣ `label`፣ `description`፣ `category`፣ `defaultValue`፣ `type` እና `requiresRestart`
ፍንጭ ባለው `FeatureFlagDefinition` ይገለጻል።

### የመፍትሔ ቅደም ተከተል

የአንድ ጠቋሚ **ተግባራዊ እሴት** በ
[`resolveFeatureFlag()`](../../src/shared/utils/featureFlags.ts) በሚከተለው
ቅድሚያ ይወሰናል (ከፍተኛው ያሸንፋል)፦

1. **የDB ተተኪ እሴት** — በ`feature_flags` የስም ክልል ስር ባለው `key_value`
   ሰንጠረዥ ውስጥ የተከማቸ እሴት (በዳሽቦርዱ ወይም በREST API በኩል የሚዋቀር)።
2. **የአካባቢ ተለዋዋጭ** — ከተዋቀረ እና ባዶ ካልሆነ `process.env[<KEY>]`።
3. **የትርጉም ነባሪ** — ከ`featureFlagDefinitions.ts` የሚገኘው `defaultValue`።

የboolean ጠቋሚ ተግባራዊ እሴቱ `"true"`፣ `"1"` ወይም `"yes"` ሲሆን
**እንደነቃ** ይቆጠራል (`isFeatureFlagEnabled()`ን ይመልከቱ)።

> [!NOTE]
> አብዛኞቹ ጠቋሚዎች በ[`ENVIRONMENT.md`](./ENVIRONMENT.md) ውስጥ የተመዘገበ
> **ተመሳሳይ ስም** ያለው ተዛማጅ የአካባቢ ተለዋዋጭም አላቸው። የጠቋሚው የDB ተተኪ እሴት
> ከዚያ የአካባቢ ተለዋዋጭ ቅድሚያ ይኖረዋል። `requiresRestart: true` ያለው ጠቋሚ
> ወዲያውኑ ይቀመጣል፣ ነገር ግን ዳግም የሚነበበው ሂደቱ ሲጀምር ብቻ ነው — እሱን መቀያየር በዳሽቦርዱ ውስጥ
> **"አገልጋዩን ዳግም ያስጀምሩ"** የሚል ሰንደቅ ያሳያል።

---

## የባንዲራዎች ካታሎግ

በ6 ምድቦች የተከፋፈሉ 86 ባንዲራዎች። **ነባሪ** ማለት የትርጉሙ ነባሪ እሴት ነው — የውሂብ ጎታ መሻርም ሆነ
የአካባቢ ተለዋዋጭ በማይኖርበት ጊዜ ጥቅም ላይ የሚውለው እሴት።

### ደህንነት (10)

| ቁልፍ                                     | ዓይነት    | ነባሪ      | መግለጫ                                                                                                                                                                                            |
| --------------------------------------- | ------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `REQUIRE_API_KEY`                       | boolean | `false`  | ለሁሉም ገቢ ጥያቄዎች API ቁልፍ እንዲኖር አስገዳጅ ያድርጉ።                                                                                                                                                         |
| `INPUT_SANITIZER_ENABLED`               | boolean | `true`   | ለሁሉም ጥያቄዎች የግቤት ማጽዳትን ያንቁ።                                                                                                                                                                      |
| `INJECTION_GUARD_MODE`                  | enum    | `off`    | የጥያቄ መርፌ ጥቃት መከላከያ ሁነታ። እሴቶች፦ `off`፣ `warn`፣ `block`፣ `redact`።                                                                                                                                 |
| `PII_REDACTION_ENABLED`                 | boolean | `false`  | PIIን ከጥያቄዎች ውስጥ ይደብቁ (`INPUT_SANITIZER_MODE` ላይ ጥገኛ አይደለም)።                                                                                                                                     |
| `PII_RESPONSE_SANITIZATION`             | boolean | `false`  | PIIን ከአቅራቢ ምላሾች ውስጥ ያጽዱ።                                                                                                                                                                        |
| `PII_RESPONSE_SANITIZATION_MODE`        | enum    | `redact` | የPII ምላሽ ማጽዳት ሁነታ። እሴቶች፦ `redact`፣ `warn`፣ `block`፣ `off`።                                                                                                                                      |
| `OUTBOUND_SSRF_GUARD_ENABLED`           | boolean | `true`   | የቆየ ተለዋጭ ስም፦ በዚህ ባንዲራ የዳሽቦርድ ማብሪያ ላይ የተቀመጠ እሴት ከአካባቢው በፊት ይነበባል፤ በሁለቱም ውስጥ `false`፣ `0`፣ `no` ወይም `off` የወጪ URL መከላከያውን የአስተናጋጅ ፍተሻዎች ልክ እንደ `OMNIROUTE_ALLOW_PRIVATE_PROVIDER_URLS` ያጠፋል።      |
| `ALLOW_API_KEY_REVEAL`                  | boolean | `false`  | ማንነታቸው የተረጋገጠ የዳሽቦርድ ተጠቃሚዎች የተሸፈኑ እሴቶችን ብቻ ከማየት ይልቅ የተከማቹ API ቁልፎችን እንዲያሳዩ ይፍቀዱ።                                                                                                                |
| `AUTH_LOG_INCLUDE_ACCOUNT_ID`           | boolean | `false`  | በAUTH ምዝግብ መስመሮች ውስጥ የመለያ ቅድመ ቅጥያውን ያካትቱ (ለምሳሌ፣ "<provider> መለያን በመጠቀም ላይ፦ abc12345...")። የመለያ መለያዎች ከጋራ/ባለብዙ ተከራይ የሂደት ምዝግቦች እንዲደበቁ በነባሪነት ተሰናክሏል። ከማረሚያ ሁነታ ነፃ ነው፤ ማረሚያ ሁነታን መቀየር ይህንን አያሳይም። |
| `OMNIROUTE_OIDC_DISABLE_PASSWORD_LOGIN` | boolean | `false`  | OIDC ሲነቃ ተጠቃሚዎች በOIDC ነጠላ መግቢያ ብቻ ማንነታቸውን ማረጋገጥ እንዲችሉ በይለፍ ቃል መግባትን ያሰናክሉ። ሲሰናከል (ነባሪው)፣ በይለፍ ቃል መግባትም ሆነ OIDC ይገኛሉ።                                                                            |

### አውታረ መረብ (23)

| ቁልፍ                                             | ዓይነት    | ነባሪ     | ዳግም ማስጀመር | መግለጫ                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------- | ------- | ------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ENABLE_TLS_FINGERPRINT`                        | boolean | `false` | ✓         | የTLS አሻራ መደበቂያ ሁነታን አንቃ።                                                                                                                                                                                                                                                                                                                                                                                 |
| `AUDIO_REMOTE_PROVIDER_NODES`                   | boolean | `false` |           | የ/v1/audio/* መንገዶች localhost ውጭ የሚስተናገዱ OpenAI-ተኳሃኝ የአቅራቢ ኖዶችን እንዲጠቀሙ ፍቀድ። በነባሪነት ጠፍቷል — ኦዲዮን ወደ ሩቅ አስተናጋጅ ማስተላለፍ የወጪ ትራፊክ ማንነትን ይቀይራል፣ ስለዚህም ይህ በኦፕሬተሩ በግልጽ የሚወሰን ውሳኔ መሆን አለበት። የloopback ኖዶች ሁልጊዜ የተፈቀዱ ሲሆን ለውጥ አይነካቸውም።                                                                                                                                                                               |
| `RERANK_REMOTE_PROVIDER_NODES`                  | boolean | `false` |           | POST /v1/rerank (እና የማህደረ ትውስታ ሞተሩ የloopback rerank ደረጃ) localhost ውጭ የሚስተናገዱ OpenAI-ተኳሃኝ የአቅራቢ ኖዶችን እንዲጠቀም ፍቀድ። በነባሪነት ጠፍቷል — ወደ ሩቅ አስተናጋጅ ማስተላለፍ የወጪ ትራፊክ ማንነትን ይቀይራል፣ ስለዚህም ይህ በኦፕሬተሩ በግልጽ የሚወሰን ውሳኔ መሆን አለበት። የloopback ኖዶች ሁልጊዜ የተፈቀዱ ናቸው፤ የሩቅ ኖዶች ደግሞ የአቅራቢውን የወጪ URL መመሪያ ማለፍ አለባቸው።                                                                                                              |
| `PROXY_AUTO_SELECT_ENABLED`                     | boolean | `false` |           | ለግንኙነት ምንም proxy ካልተመደበ፣ ከመዝገቡ ውስጥ የመጀመሪያውን የሚሠራ proxy በራስ-ሰር ምረጥ። በነባሪነት ጠፍቷል (አለበለዚያ በመዝገቡ ያለ ማንኛውም proxy ዓለም አቀፍ የመጠባበቂያ አማራጭ ይሆናል — #3332)።                                                                                                                                                                                                                                                          |
| `OMNIROUTE_CONTROL_PLANE_PROXY_DIRECT_FALLBACK` | boolean | `false` |           | የproxy ተደራሽነት ቅድመ-ፍተሻዎች ሳይሳኩ ሲቀሩ፣ OAuth እና የአቅራቢ ማረጋገጫ ፍሰቶች በተወሰነ proxy ላይ የተደረገውን ጥገና አልፈው በቀጥታ እንዲገናኙ ፍቀድ። ይህ የወጪ ትራፊክ IPን ሊቀይር ስለሚችል በነባሪነት ጠፍቷል።                                                                                                                                                                                                                                                     |
| `NETWORK_ROTATION_SHARED_EGRESS_GUARD`          | boolean | `true`  |           | ባለብዙ መለያ የማዞሪያ አስፈጻሚ ላይ የአውታረ መረብ ልዩ ሁኔታ (ጊዜ ማለፍ፣ ግንኙነት አለመቀበል/ዳግም መጀመር) ሲከሰት፣ የከሸፈው መለያ የተለየ proxy ከሌለው፣ እያንዳንዱን እንደገና ከመሞከር ይልቅ አጭር የማቀዝቀዣ ጊዜ ተግብር እና ለቀሪው ጥያቄ proxy የሌላቸውን ሌሎች መለያዎች ዝለል። በነባሪነት በርቷል (ደህንነቱ የተጠበቀ፦ የወጪ ትራፊክ IP አይቀየርም፣ በጋራ የወጪ ትራፊክ መለያዎች ላይ የመዘግየት/የማቀዝቀዣ ጊዜ አደጋን ብቻ ይቀንሳል)። የመጀመሪያው proxy የሌለው ስህተት ሲጣል ፈጣን ስርጭትን ለመመለስ አሰናክል።                                                     |
| `ROTATION_ATTRIBUTION`                          | boolean | `false` |           | የOpencode ማዞሪያ የትኛው መለያ እንዳገለገለ ወይም እንደተዘለለ ይመዘግባል (የተሸፈኑ ids ብቻ፣ ሙሉ የመለያ ids ፈጽሞ አይመዘገቡም) እና የproxy ሎግ ግቤቶችን ከጥያቄያቸው ጋር ያገናኛል፤ በዚህም ኦፕሬተሩ የተዘለሉ መለያዎችን ጥቅም ላይ ካልዋሉት መለየት ይችላል። በነባሪነት ጠፍቷል።                                                                                                                                                                                                             |
| `PROXY_SKIP_RECENTLY_FAILED`                    | boolean | `true`  |           | የProxy ጥምረቶች እና የopencode በየመለያው ማዞሪያ አሁን የከሸፈ proxyን (ውድቅ የተደረገ TCP ምርመራ ወይም በእሱ በኩል የተቀበለ 429) ለእያንዳንዱ ሂደት በድግግሞሽ ቁጥር እጥፍ ለሚሆን እና እስከ ከፍተኛ ገደብ ለሚደርስ ጊዜ እንደገና ማቅረብ ያቆማሉ። ምንም የproxy ሁኔታ አይጻፍም፤ እያንዳንዱ እጩ ለጊዜው ቢወገድም ምርጫው አይለወጥም። በነባሪነት በርቷል፤ `false` ቀላል ምርጫን ይመልሳል።                                                                                                                                  |
| `PROXY_POOL_SHARED_EGRESS_ORDER`                | boolean | `false` |           | ኮታቸው በመውጫ አድራሻ ለሚመደብ አቅራቢዎች፣ በቅርቡ ውድቅ ከተደረገ አባል ከታየው የመውጫ አድራሻ ጋር የሚጋራን የፑል አባል ከጤናማ አባላት በታች ደረጃ ያስቀምጣል። ደረጃን ብቻ ያስተካክላል፤ ፈጽሞ አያገልም። የሚያነበውን የውድቅነት ምልክት የሚያመነጨው `PROXY_SKIP_RECENTLY_FAILED` ያስፈልገዋል። በነባሪነት ጠፍቷል።                                                                                                                                                                                     |
| `PROXY_POOL_EGRESS_OBSERVATION`                 | boolean | `false` |           | በዳሽቦርዱ ውስጥ በፕሮክሲ ፑል ሥር፣ ባለፉት 24 ሰዓታት ምን ያህል የታዩ የመውጫ IPዎች አባላቱን እንዳገለገሉ እና ምን ያህል ግንኙነቶች እንደተጠቀሙባቸው ያሳያል። ለንባብ ብቻ ነው፣ ከፕሮክሲ ምዝግብ ይሰላል፣ ለማዘዋወር ፈጽሞ ጥቅም ላይ አይውልም። በነባሪነት ጠፍቷል።                                                                                                                                                                                                                             |
| `PROXY_OPERATOR_EGRESS_ENABLED`                 | boolean | `false` |           | በኦፕሬተር የሚላኩ፣ ቀን የተያያዘባቸው የታዩ አድራሻዎችን ለእያንዳንዱ የፑል አባል ይቀበላል፣ እና ለማሳያና ለፑል ደረጃ አሰጣጥ ከጆርናሉ ንባብ ጋር ያዋህዳቸዋል። በነባሪነት ጠፍቷል፦ የመላኪያ መንገዱ 404 ይመልሳል፣ እና የፑል ንባቦች ልክ እንደበፊቱ ይሠራሉ።                                                                                                                                                                                                                                   |
| `OPENCODE_RESPONSES_STALL_ROTATION`             | boolean | `false` |           | ለOpenCode አስፈጻሚ፣ በዥረት የሚላክ Responses ምላሽ የመጀመሪያውን የይዘት ባይት ይከታተላል (የጊዜ መስኮት፦ `RESPONSES_FIRST_BYTE_TIMEOUT_MS`፣ ነባሪ `15000`)። ከጊዜ መስኮቱ በላይ ጸጥ ብሎ የሚቆይ 2xx Responses ዥረት እንደተቋረጠ ይቆጠራል፦ መለያው ለጊዜው ይቀዘቅዛል፣ እና ጥያቄው አንድ ጊዜ ወደሚቀጥለው መለያ ይዞራል፤ ለሁለተኛ ጊዜ ከተቋረጠ ወዲያውኑ ይከሽፋል። በነባሪነት ጠፍቷል፦ የተቋረጡ ዥረቶች እስከ ዥረት ዝግጁነት ጊዜ ገደብ ድረስ ያለውን የአሁኑን መጠበቅ ይቀጥላሉ።                                                            |
| `OPENCODE_USER_BLOCKED_ROTATION`                | boolean | `false` |           | OpenCode አስፈጻሚ፦ `user_blocked` ውድቅነትን የያዘ 403/451 ሲከሰት (የጂኦ ገደብ ያልሆነ፣ የCloudflare የጣት አሻራ ውድቅነት ያልሆነ)፣ ውድቅ የተደረገውን መለያ ለጊዜው ያቀዘቅዛል፣ እና በአንድ ጥያቄ ውስጥ ቢበዛ አንድ ጊዜ ወደሚቀጥለው መለያ ይዞራል፤ ሁለተኛ ውድቅነት የስኬት ምልክት ሳይደረግበት እንዳለ ይመለሳል። በነባሪነት ጠፍቷል፦ የላይኛውን አገልግሎት የተጠቃሚ እገዳ በማዘዋወር ማለፍ እንደ ማምለጥ ሊታይ እና ምልክቱን በመላው ስብስብ ላይ ሊያሰራጭ ይችላል።                                                                                 |
| `OPENCODE_TRANSIENT_FAILOVER_BACKOFF`           | boolean | `false` |           | OpenCode ማዞር፦ ሁለት ተከታታይ ጊዜያዊ የላይኛው አገልግሎት ውድቀቶች (5xx ወይም ባዶ 400) ከተከሰቱ በኋላ፣ ወደሚቀጥለው መለያ ከመሄዱ በፊት ለአፍታ ያቆማል — 1.5s ሲሆን ለእያንዳንዱ ተጨማሪ ውድቀት በእጥፍ ይጨምራል፣ በእያንዳንዱ ማቆም 6s እና በእያንዳንዱ ጥያቄ 10s ላይ ይገደባል፣ ደንበኛው ሲቋረጥ ይዘለላል፤ ያልተሳካው ይዘት ከመጠበቁ በፊት ይለቀቃል። በነባሪነት ጠፍቷል፦ ወደ ተለዋጭ መለያ መሸጋገር ወዲያውኑ ይቆያል።                                                                                                                 |
| `OPENCODE_PARK_AND_RESUME`                      | boolean | `false` |           | OpenCode ማዞር፦ ተደጋጋሚ ጊዜያዊ 429ዎች (ወይም አዲስ የፑል ጫና ምልክት) ከተከሰቱ በኋላ ጥያቄውን ከልብ ምት ጋር ያቆማል፣ ከዚያም መላውን የመለያዎች ስብስብ በአንድ ጊዜ ከማሰማራት ይልቅ እስከ 3 ተከታታይ መለያዎች ያሉትን አንድ የተገደበ ዙር እንደገና ያስኬዳል። በነባሪነት ጠፍቷል፦ እያንዳንዱ 429 ልክ እንደበፊቱ ወደሚቀጥለው መለያ ያዞራል።                                                                                                                                                                       |
| `STREAM_READINESS_STALL_RETRY`                  | boolean | `false` |           | የዥረት ውይይት፦ የመጀመሪያው የላይኛው አገልግሎት ይዘት ጠቃሚ ክስተት ከማመንጨቱ በፊት ሲቋረጥ፣ በተመሳሳይ የማዘዋወሪያ መንገድ፣ በተመሳሳይ የዝግጁነት ጊዜ በጀት እና ያለ መለያ ቅጣት አንድ የተገደበ ሁለተኛ ሙከራ ያደርጋል። በነባሪነት ጠፍቷል፦ የተቋረጠ የመጀመሪያ ይዘት ያለ ዳግም ሙከራ ጥያቄውን ያከሽፋል።                                                                                                                                                                                                    |
| `FLUSH_EMPTY_RETRY_ENABLED`                     | boolean | `false` |           | በተተረጎሙ የዥረት ዙሮች ላይ፣ የላይኛው አገልግሎት ዙር ምንም ጠቃሚ ይዘት ሳይኖረው ሲቀር (የምክንያት ማብራሪያ ብቻ ያለው ማጠናቀቅ ወይም ዜሮ ጠቃሚ ክፍሎች)፣ ለደንበኛው ምንም ነገር ከመጋለጡ በፊት በመደበኛው የማረጋገጫ መረጃ መንገድ የተገደቡ ዳግም ሙከራዎችን (እስከ `STREAM_RECOVERY.EMPTY_TURN_RETRY_MAX`) ያደርጋል። በነባሪነት ጠፍቷል፦ ባዶ ዙሮች የአሁኑን ባህሪ (ባዶ 200 ወይም ባዶ-ይዘት 502) ይቀጥላሉ።                                                                                                                 |
| `OPENCODE_POOL_RESELECT`                        | boolean | `false` |           | OpenCode ማዞር፦ በአካባቢያዊ የፑል አውድ ውስጥ ባለ ፕሮክሲ-አልባ መለያ ላይ፣ መውጫን በምድብ ከሚያደርግ አቅራቢ 429 ከተመለሰ በኋላ፣ ተመሳሳዩን የመውጫ አድራሻ እንደገና ከመሞከር ይልቅ ለሚቀጥለው ሙከራ ሌላ አባል እንዲመርጥ የግንኙነት ፑሉን ይጠይቃል። ደረጃ ያስይዛል፣ ፈጽሞ አያገልም፦ አባላቱ ያለቁበት ፑል የአሁኑን ባህሪ ይቀጥላል። በነባሪነት ጠፍቷል፦ እያንዳንዱ 429 ልክ እንደበፊቱ ወደሚቀጥለው መለያ ያዞራል።                                                                                                                          |
| `OPENCODE_RATE_LIMITED_429_EARLY_STOP`          | boolean | `false` |           | OpenCode ማዞሪያ፦ እንደ እውነተኛ የፍጥነት ገደብ በተመደበው የመጀመሪያው 429 ላይ የመለያዎችን ማዕበል ያቁሙ (`Retry-After` ሊተነተን የሚችል ከሆነ፣ ወይም የምላሹ ይዘት የፍጥነት/አጠቃቀም ገደብን ከጠቀሰ) እና ያንን የላይኛው አገልግሎት 429 ሳይቀየር ይመልሱ። ያልተመደቡ 429ዎች ማዞሩን ይቀጥላሉ። በነባሪ ጠፍቷል፦ ነፃው ደረጃ በእያንዳንዱ የወጪ IP የተገደበ ስለሆነ (#9611)፣ እያንዳንዱ 429 ማዞርን ያስከትላል እና ያለቀ ማዕበል የመጨረሻውን የላይኛው አገልግሎት 429 ይመልሳል።                                                                       |
| `MITM_DISABLE_TLS_VERIFY`                       | boolean | `false` | ✓         | ለMITM ፕሮክሲው የTLS ምስክር ወረቀት ማረጋገጫን ያሰናክሉ። **አደገኛ ነው።**                                                                                                                                                                                                                                                                                                                                                    |
| `OMNIROUTE_ALLOW_PRIVATE_PROVIDER_URLS`         | boolean | `false` |           | በአቅራቢ URL ማረጋገጫ፣ በሞዴል ፍለጋ፣ በአቅራቢ-ኖድ መሠረታዊ URLዎች እና በፕሮክሲ-አማራጭ ሙከራ ላይ የወጪ URL ጥበቃውን የአስተናጋጅ ማረጋገጫዎች፣ የደመና-ሜታዳታ እገዳን ጨምሮ፣ ያጠፋል፤ እንዲሁም የግል webhook መድረሻዎችን ይፈቅዳል። በማረጋገጫ፣ በፍለጋ እና በአቅራቢ-ኖድ መንገዶች ላይ አካባቢያዊ እና LAN URLዎች በነባሪ ያልፋሉ (`OMNIROUTE_ALLOW_LOCAL_PROVIDER_URLS`)፤ የፕሮክሲ-አማራጭ ሙከራው እና የግል webhook መድረሻዎች `OMNIROUTE_ALLOW_PRIVATE_PROVIDER_URLS`ን ብቻ ይመለከታሉ፣ እና ይህ ጠፍቶ ሳለ አካባቢያዊ/LAN አስተናጋጆችን ያግዳሉ። |
| `OMNIROUTE_ALLOW_LOCAL_PROVIDER_URLS`           | boolean | `true`  |           | በአካባቢያዊ/የግል አድራሻዎች (127.0.0.1, localhost, LAN) ላይ ያሉ የአቅራቢ URLዎችን ይፍቀዱ። በነባሪ ነቅቷል (አካባቢያዊ-ቀዳሚ)፦ ከዚያ ጥበቃው የደመና-ሜታዳታ መዳረሻዎችን (ሁሉንም 169.254.0.0/16 እና የሚታወቁትን የሜታዳታ አስተናጋጅ ስሞች ጨምሮ) ያግዳል። ለጥብቅ የሕዝብ-ብቻ እገዳ ያሰናክሉት፦ የግል እና loopback አስተናጋጆችም ይታገዳሉ።                                                                                                                                                          |
| `ENABLE_CC_COMPATIBLE_PROVIDER`                 | boolean | `false` | ✓         | ከClaude Code ጋር ተኳሃኝ የሆነውን የአቅራቢ ሁነታ ያንቁ።                                                                                                                                                                                                                                                                                                                                                                |

### ፖሊሲዎች (6)

| ቁልፍ                             | ዓይነት    | ነባሪ        | መግለጫ                                                                                                                                                                              |
| ------------------------------- | ------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TOOL_POLICY_MODE`              | enum    | `disabled` | የመሣሪያ አጠቃቀም ፖሊሲ ማስፈጸሚያ ሁነታ። እሴቶች፦ `disabled`፣ `warn`፣ `block`።                                                                                                                    |
| `RATE_LIMIT_AUTO_ENABLE`        | boolean | `false`    | በenv var በኩል የራስ-ሰር የፍጥነት ገደብ ደኅንነት መረብን በግድ ያንቁ/ያጥፉ። runtime የሚያነበው env varን ብቻ ነው፦ ካልተዋቀረ ይህን የካታሎግ ነባሪ ሳይሆን የdashboard ቅንብርን (በነባሪ የነቃ) ይከተላል።                                 |
| `DISABLE_CONTEXT_WINDOW_CHECKS` | boolean | `false`    | ቀጥተኛ ነጠላ-ሞዴል ጥያቄዎች ላይ የOmniRouteን አካባቢያዊ የcontext-window / ከፍተኛ-የግቤት-token ማረጋገጫ ይዝለሉ። የላይኛው አገልግሎት ገደቦች አሁንም ይተገበራሉ።                                                             |
| `CAPABILITY_FILTER_ENABLED`     | boolean | `false`    | ዒላማው ሞዴል አስፈላጊ ችሎታዎችን (ምስል፣ መሣሪያዎች፣ የተዋቀረ ውጤት፣ context window) ካልያዘ ከማስተላለፍ በፊት ጥያቄዎችን ውድቅ ያድርጉ። የcombo-layer ተኳኋኝነት ማጣሪያውን የሚያልፉ ቀጥተኛ የነጠላ-አቅራቢ ጥያቄዎችን ይጠብቃል።                    |
| `USAGE_LIMIT_IGNORE_UNPRICED`   | boolean | `false`    | ዋጋ የሌላቸውን ሞዴሎች አጠቃቀም፣ ኮታው እንደተለፈ ከመቁጠር ይልቅ፣ በእያንዳንዱ-ቁልፍ የUSD አጠቃቀም ኮታ ውስጥ እንደ $0 ይቁጠሩ። በነባሪ ጠፍቷል፦ ዋጋ ያልተቀመጠለት ሞዴል ወይም የማዘዋወሪያ ተለዋጭ ስም እውነተኛውን ወጪ ሊደብቅ ስለሚችል፣ ኮታው በጥንቃቄ ውድቅ ያደርጋል። |
| `RADAR_ENABLED`                 | boolean | `false`    | የOmniRoute Radar ሞጁልን (የካታሎግ ምግብ ማሳያዎችን እና ማመሳሰልን) ያንቁ። በነባሪ ጠፍቷል፤ ማንቃት UIውን ብቻ ይከፍታል — የውሂብ ማመሳሰል የተለየ በምርጫ የሚነቃ ሆኖ ይቆያል።                                                        |

### የአሂድ ጊዜ (37)

| ቁልፍ                                         | ዓይነት    | ነባሪ     | ዳግም ማስጀመር | መግለጫ                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------- | ------- | ------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `UNIVERSAL_CONTEXT_HANDOFF_ENABLED`         | boolean | `true`  |           | የተቀናጀ ራውቲንግ ሞዴሎችን ሲቀይር የውይይት ማጠቃለያዎችን ያመንጩ እና ያስገቡ። የሞዴል ቅያሬዎችን በተናጥል ለመያዝ እና ለሁሉም ነባርና ወደፊት ለሚፈጠሩ ጥምረቶች የበስተጀርባ ርክክብ ጥያቄዎችን ለመከላከል ያሰናክሉት።                                                                                                                                                                                                                                                                                                                       |
| `REASONING_REPLAY_ENABLED`                  | boolean | `true`  |           | በባለብዙ-ዙር ውይይቶች ውስጥ የሞዴል አመክንዮን በመሸጎጫ ያከማቹ እና እንደገና ያጫውቱ። አመክንዮን ማከማቸትና እንደገና ማስገባትን ለማቆም ያሰናክሉት።                                                                                                                                                                                                                                                                                                                                                                  |
| `RESPONSES_PASSTHROUGH_DROP_COMMENTARY`     | boolean | `true`  |           | ወደ ደንበኞች ከመላካቸው በፊት የውስጥ አስተያየት-ደረጃ ውጤት ንጥሎችን ከResponses API ቀጥታ-ማስተላለፊያ ዥረቶች ያስወግዱ። ያልተቀነባበረ የላይኛው ምንጭ አስተያየትን ለመቀበል ያሰናክሉት።                                                                                                                                                                                                                                                                                                                                     |
| `OMNIROUTE_MCP_ENFORCE_SCOPES`              | boolean | `false` |           | የMCP መሣሪያ መዳረሻ ላይ የወሰን ገደቦችን ያስፈጽሙ።                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `OMNIROUTE_MCP_COMPRESS_DESCRIPTIONS`       | boolean | `false` |           | የቶከን አጠቃቀምን ለመቀነስ የMCP መሣሪያ መግለጫዎችን ይጭመቁ።                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `OMNIROUTE_ENABLE_RUNTIME_BACKGROUND_TASKS` | boolean | `false` |           | በአሂድ ጊዜ የበስተጀርባ ተግባር ሂደትን ያንቁ።                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `OMNIROUTE_DISABLE_BACKGROUND_SERVICES`     | boolean | `false` | ✓         | ሁሉንም የጀርባ አገልግሎቶች (የኮታ ማደስ፣ ማመሳሰል፣ ወዘተ) ያሰናክላል።                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `OMNIROUTE_RTK_TRUST_PROJECT_FILTERS`       | boolean | `false` |           | የፕሮጀክት ደረጃ RTK ማጣሪያዎችን ያለማረጋገጥ ያምናል።                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `OMNIROUTE_ENABLE_LIVE_WS`                  | boolean | `true`  | ✓         | በማስመጣት ጊዜ የቅጽበታዊ ዳሽቦርድ WebSocket አገልጋይን ያስጀምራል (በነባሪ ፖርት 20132)።                                                                                                                                                                                                                                                                                                                                                                                                  |
| `OMNIROUTE_CODEX_WS_ENABLED`                | boolean | `true`  |           | Codex የResponses-over-WebSocket ማጓጓዣን እንዲጠቀም ይፈቅዳል። ሲጠፋ Codex ወደ HTTP Responses ይመለሳል።                                                                                                                                                                                                                                                                                                                                                                            |
| `OMNIROUTE_CODEX_APP_SERVER_ENABLED`        | boolean | `true`  |           | Codex የአካባቢያዊውን app-server WebSocket JSON-RPC ማጓጓዣ (`codexTransport=app-server`) እንዲጠቀም ይፈቅዳል። ሲጠፋ፣ app-serverን እንዲጠቀሙ የተመረጡ ግንኙነቶች ወደ ሌሎች የCodex ማጓጓዣዎች ይመለሳሉ።                                                                                                                                                                                                                                                                                                   |
| `OMNIROUTE_EMERGENCY_FALLBACK`              | boolean | `true`  |           | በጀታቸው ያለቀባቸውን ጥያቄዎች ወደ አስቸኳይ ነፃ ተተኪ አቅራቢ/ሞዴል ይመራል። (ከታች [የአስቸኳይ ጊዜ የበጀት ተተኪ](#emergency-budget-fallback)ን ይመልከቱ።)                                                                                                                                                                                                                                                                                                                                                 |
| `STREAM_RECOVERY_ENABLED`                   | boolean | `false` |           | ማንኛውም የምላሽ ባይቶች ወደ ደንበኛው ከመድረሳቸው በፊት ለተቋረጡ የላይኛው ምንጭ SSE ዥረቶች ግልጽ የቅድሚያ ዳግም ሙከራን ያነቃል።                                                                                                                                                                                                                                                                                                                                                                            |
| `STREAM_RECOVERY_MIDSTREAM_ENABLED`         | boolean | `false` |           | ባይቶች ቀድሞውኑ ወደ ደንበኛው ከደረሱ በኋላ የዥረት መልሶ ማግኛው ምላሽን እንደገና እንዲጠይቅና እንዲያገናኝ ይፈቅዳል።                                                                                                                                                                                                                                                                                                                                                                                      |
| `STREAM_RECOVERY_TOOLCALL_ORDER_FIX`        | boolean | `false` |           | በዥረት መካከል የሚደረግ ቀጣይነትን ለመሳሪያ ጥሪ ደህንነቱ የተጠበቀ ያደርጋል፦ የመሳሪያ ጥሪ ከተላከ በኋላ (በሂደት ላይ ያለ ወይም በ`finish_reason tool_calls` አስቀድሞ የተጠናቀቀ) የተቋረጠ ዥረትን በፍጹም አይቀጥልም፤ እንዲሁም ሙሉ በጀቱን ከማባከን ይልቅ ከአንድ ባዶ ቀጣይነት በኋላ ይዘጋል። ሲጠፋ፦ የልቀት ባህሪ።                                                                                                                                                                                                                                             |
| `STREAM_EARLY_EOF_SIBLING_FAILOVER_ENABLED` | boolean | `false` |           | የSSE ዥረት ምንም ጠቃሚ ፍሬም ከማውጣቱ በፊት ሲዘጋ እና የተወሰነው የተመሳሳይ ግንኙነት ዳግም ሙከራ ሲያልቅ፣ አንድ ጊዜ ወደ እኩያ ግንኙነት ያዛውራል፤ ጥቅም ላይ የሚውል እኩያ ከሌለ የመጀመሪያው `STREAM_EARLY_EOF` 502 ይመለሳል። በነባሪ ጠፍቷል፦ ከተመሳሳይ ግንኙነት ዳግም ሙከራ በኋላ የቅድመ-EOF ሁኔታ የመጨረሻ ሆኖ ይቆያል።                                                                                                                                                                                                                                      |
| `MODEL_CATALOG_INCLUDE_NAMES`               | boolean | `true`  |           | ለእይታ ምቹ የሆኑ የስም መስኮችን በ`/v1/models` ምላሾች ውስጥ ያካትታል። የሞዴል መለያዎችን ብቻ ለሚጠብቁ ደንበኞች ያሰናክሉት።                                                                                                                                                                                                                                                                                                                                                                            |
| `MODELS_CATALOG_PREFIX_MODE`                | enum    | `dual`  |           | የሞዴል መለያዎች በ/v1/models ውስጥ ቅድመ ቅጥያ የሚያገኙበትን መንገድ ይቆጣጠራል። 'dual' (ነባሪ) ለኋላ ተኳኋኝነት የቅጽል ስም እና መደበኛ የአቅራቢ-መለያ ቅድመ ቅጥያዎችን ሁለቱንም ያወጣል። 'alias' አጭሩን የቅጽል ስም ቅድመ ቅጥያ ብቻ ያወጣል (ለምሳሌ ds-web/model፣ deepseek-web/model አይደለም)። 'canonical' ሙሉውን የአቅራቢ-መለያ ቅድመ ቅጥያ ብቻ ያወጣል። እሴቶች፦ `dual`፣ `alias`፣ `canonical`።                                                                                                                                                             |
| `ARENA_ELO_SYNC_ENABLED`                    | boolean | `true`  |           | ለሞዴል የብልህነት ደረጃዎች ወቅታዊ የArena AI የመሪዎች ሰሌዳ ELO ማመሳሰልን ያነቃል።                                                                                                                                                                                                                                                                                                                                                                                                       |
| `EXPOSE_CC_DISCOVERY_ALIASES`               | boolean | `false` |           | የClaude Code ጌትዌይ ሞዴል ፍለጋ Claude ያልሆኑ ሞዴሎችን እንዲዘረዝር፣ የ`claude/<provider>/<model>` መስተዋት መለያዎችን በ`/v1/models` ላይ ያስተዋውቃል። የሶስት-ደረጃ በር ዓለም አቀፍ ደረጃ (env ከዳሽቦርድ መሻር ይቀድማል)። [የClaude Code ውቅር](../guides/CLAUDE-CODE-CONFIGURATION.md#discovery-aliases--surface-non-claude-models-in-the-model-picker)ን ይመልከቱ።                                                                                                                                                      |
| `NO_THINKING_ALIAS_ENABLED`                 | boolean | `true`  |           | ለno-think/<provider>/<model> የጌትዌይ ቅጽል ስሞች ዋና ማብሪያ። ሲበራ (ነባሪ)፦ /v1/models ለእያንዳንዱ ብቁ የማሰብ ችሎታ ላለው Claude ሞዴል የማያስብ ተለዋጭ ያስተዋውቃል፣ እና በጥያቄ ላይ የተላከ no-think/ መለያ ምክንያታዊ አስተሳሰብ ታፍኖ ወደ እውነተኛው ሞዴል ተመልሶ ይፈታል። ሲጠፋ፦ ምንም ተለዋጮች አይተዋወቁም እና no-think/ መለያ እንደማንኛውም ሌላ ያልታወቀ የሞዴል መለያ ይቆጠራል። ይህ በርቶ ሳለ የእያንዳንዱ ሞዴል `ModelSpec.noThinkingAlias` የመምረጥ/ያለመምረጥ ቅንብር አሁንም ተፈጻሚ ነው።                                                                                             |
| `OMNIROUTE_DISABLE_THINKING_LEVEL_VARIANTS` | boolean | `false` |           | በ/v1/models ካታሎግ ውስጥ የአስተሳሰብ ደረጃ ተለዋጮችን (ለምሳሌ -low፣ -medium፣ -high) ማመንጨትን ያሰናክላል።                                                                                                                                                                                                                                                                                                                                                                                |
| `OMNIROUTE_CHAT_VIRTUAL_LANES`              | boolean | `false` | ✓         | ለአቅራቢ መላክ በተከራይ ደረጃ የሚስማሙ ምናባዊ የመግቢያ መስመሮችን አንቃ (#9654)፦ የአንድ ተከራይ ድንገተኛ የጥያቄ መጨመር ከእንግዲህ ለሌላው 503 ስህተት አያስከትልም። የ`OMNIROUTE_CHAT_VIRTUAL_LANES` የአካባቢ ተለዋዋጭ ከዚህ የዳሽቦርድ ማሻሻያ ቅድሚያ ይኖረዋል፤ ለውጦች የአገልጋዩ ዳግም ማስጀመር ሲከናወን ተግባራዊ ይሆናሉ።                                                                                                                                                                                                                                  |
| `EXPOSE_FUNCTIONAL_GATEWAY_MIRRORS`         | boolean | `false` |           | መደበኛው ባለቤታቸው ንቁ ማረጋገጫ የሌለው፣ ነገር ግን ንቁ ማረጋገጫ ያለው ቀጥተኛ ማስተላለፊያ ጌትዌይ ወደእነሱ የሚያዘዋውርባቸው ሞዴሎች <gateway-alias>/<model> የመስታወት መለያዎችን በ/v1/models ላይ አሳውቅ። ማስጠንቀቂያ፦ በዓለም አቀፍ ደረጃ ሲነቃ ለሁሉም ደንበኞች የካታሎግ ግቤቶችን ይጨምራል።                                                                                                                                                                                                                                                        |
| `NEWAPI_AGGREGATOR_BALANCE`                 | boolean | `false` |           | ከNew-API / One-API / Sub2API አሰባሳቢ ጋር ተኳዃኝ ለሆኑ ኖዶች የሒሳብ ቀሪ ማወቂያን አንቃ። ሲነቃ፣ የአሰባሳቢ ባንዲራው የተዘጋጀላቸው ተኳዃኝ ኖዶች የሒሳብ ቀሪያቸውን በዳሽቦርዱ እና በኮታ-ቅድመ-ምርመራ ማዘዋወር ውስጥ ያሳያሉ።                                                                                                                                                                                                                                                                                                      |
| `SERVER_OWNED_TOOL_LOOP_ENABLED`            | boolean | `false` |           | ሞዴሉ ደንበኛው ሊጠቀምበት የሚችል ምላሽ እስኪመልስ ድረስ በአገልጋዩ የሚተዳደሩ ዥረት-አልባ የመሣሪያ ጥሪዎችን ቀጥል።                                                                                                                                                                                                                                                                                                                                                                                       |
| `SEARCH_STATS_HIDE_DELETED_CONNECTIONS`     | boolean | `false` |           | የፍለጋ ስታቲስቲክስ እና የቅርብ ጊዜ ፍለጋዎች አሁንም ንቁ ግንኙነት ያላቸውን አቅራቢዎች ብቻ ይቆጥራሉ (እንደ duckduckgo-free ያሉ ቁልፍ-አልባ አቅራቢዎች ሁልጊዜ ይቆጠራሉ)። ሲጠፋ፣ እያንዳንዱን የተያዘ የፍለጋ ረድፍ ከአቅራቢ መለያው ጋር ያቆያል።                                                                                                                                                                                                                                                                                              |
| `FREE_BADGE_REQUIRES_PROVIDER_FREE_TIER`    | boolean | `false` |           | የዳሽቦርድ አቅራቢ ገጾች፦ የነጻ ባጁን አቅራቢው በሚያከብራቸው ምልክቶች ላይ ብቻ አሳይ — የማሳያ-ስም ግምታዊ ዘዴን፣ ቡሊያን ያልሆኑ የነጻ መስኮችን እና በሰነድ የተገለጸ የነጻ ደረጃ በሌላቸው የተመዘገቡ አቅራቢዎች ላይ ያሉ :free ቅጥያዎችን ያስወግዳል። ሲጠፋ፣ ታሪካዊውን የባጅ ደንብ ያቆያል።                                                                                                                                                                                                                                                                    |
| `RETRY_AFTER_PROVENANCE_ENABLED`            | boolean | `false` |           | በተዋሃዱ 429/503 የአለመገኘት ምላሾች ላይ የተወሰነ የወደፊት የዳግም ሙከራ ጊዜ ካልታወቀ `Retry-After`ን አትጨምር (በሰው ሠራሽ 1s ምትክ)፣ `error.retry_after_provenance` (`signal` \| `none`)ን ጨምር፣ እና የጥምር ማስወገጃ ዱካዎች ከJSON እና ከቀላል-ጽሑፍ የላይኛው ምንጭ ይዘቶች ውስጥ በጽሑፍ የተገለጹ የዳግም ሙከራ ፍንጮችን እንዲያነቡ ፍቀድ። መስኩ በ`unavailableResponse()` በተገነቡ ምላሾች ላይ ብቻ ይታያል፤ ሌሎች 429/503 ይዘቶች ሳይለወጡ ይቆያሉ።                                                                                                                       |
| `PROTECTED_PRIORITY_INFRA_502_ENABLED`      | boolean | `false` |           | በኮታ መሟጠጥ ጊዜ ብቻ እንደ ተተኪ የተሰየመ `priority` ጥምር ዒላማ፣ ከኮታ ጋር እንደማይያያዝ በትክክል ሊረጋገጥ በሚችል ምክንያት (የአቅራቢው ሰርኪውት ብሬከር ክፍት መሆን፣ ትንበያዊ የመዘግየት መዝለል) ጥምሩን ሲያቆም፣ ኮታ የሚመስለውን 503 ከመመለስ ይልቅ 502 መልስ። መቆለፍ፣ የማቀዝቀዣ ጊዜ፣ አለመገኘት፣ መሟጠጥ እና የተመሳሳይ ጊዜ ገደብ ማቆሚያዎች 503ን ያቆያሉ።                                                                                                                                                                                                              |
| `MISTRAL_AMBIGUOUS_401_SOFT_LOCKOUT`        | boolean | `false` |           | ግልጽ የማረጋገጫ ምልክት የሌለው ቀላል Mistral 401 (`{"detail":"Unauthorized"}`) ለተሻረ ቁልፍ እና ለተሟጠጠ ኮታ ተመሳሳይ ነው። ሲበራ፣ ግንኙነቱን `expired` ብሎ ከማቆም ይልቅ ለጊዜው ያቀዘቅዘዋል፤ ይህም በአንድ ግንኙነት በሰዓት ከ3 ጊዜ ያልበለጠ ነው። ቀጣዩ ሙከራ ግንኙነቱን ያቆመዋል፣ ስለዚህ የተሻረ ቁልፍ በመጨረሻ ወደዚያው ሁኔታ ይደርሳል። በነባሪነት ጠፍቷል፦ እያንዳንዱ ቀላል Mistral 401 እንደቀድሞው ግንኙነቱን ያቆማል።                                                                                                                                                         |
| `GROK_SUBSCRIPTION_IMAGES_ENABLED`          | boolean | `false` |           | የxai-oauth (xao) እና grok-cli የምስል መስመሮችን ይመዝግቡ እና የOpenAI ጥራት high/hdን ወደ xAI medium ያዛምዱ። በነባሪነት ጠፍቷል፦ በAPI ቁልፍ የሚጠቀመው የxAI ምስል መንገድ በነባሩ OpenAI-ተኳሃኝ ጥያቄ ላይ ይቆያል፣ የደንበኝነት ምዝገባ መስመሮቹም አይመዘገቡም።                                                                                                                                                                                                                                                                  |
| `XAI_OAUTH_LIVE_MODEL_DISCOVERY`            | boolean | `true`  |           | በረጋው የማይለወጥ መነሻ ዝርዝር ምትክ፣ የOAuth bearer tokenን በመጠቀም ለxai-oauth ግንኙነቶች የቀጥታውን የxAI ሞዴል ካታሎግ ከhttps://api.x.ai/v1/models ያምጡ። በነባሪነት በርቷል። የማይለወጠውን መነሻ ዝርዝር ማቅረቡን ለመቀጠል ባንዲራውን ወደ false ያቀናብሩ። የHTTP ውድቀቶች በማግኛ መስመሩ ውስጥ ወደ መነሻ ዝርዝሩ ይመለሳሉ፤ የባንዲራው getter ራሱ HTTP ጥያቄ አያደርግም።                                                                                                                                                                                     |
| `BATCH_AND_FILE_AUTO_CLEANUP_ENABLED`       | boolean | `false` |           | ራስ-ሰር የማጽዳት ቅኝቱ፣ ከ`OMNIROUTE_BATCH_RETENTION_DAYS` በላይ የቆዩ የመጨረሻ ሁኔታ ላይ ያሉ (የተጠናቀቁ/ያልተሳኩ/የተሰረዙ/ጊዜያቸው ያለፈ) የBatch API ሥራዎችን ከእያንዳንዱ መስመር መቆጣጠሪያ ነጥቦቻቸው ጋር እንዲሰርዝ እና የየራሳቸውን `expires_at` ያለፉ የተሰቀሉ ፋይሎችን BLOB ይዘት እንዲያጸዳ ይፍቀዱ። በነባሪነት ጠፍቷል፦ ኦፕሬተር እስኪያነቃው ድረስ እያንዳንዱ ነባር ጭነት ይህን ውሂብ በፊት እንደነበረው በትክክል ያቆየዋል። በኦፕሬተር የሚጀመረው `DELETE /api/v1/batches/delete-completed` መስመር በሁለቱም ሁኔታ አይነካም—ይህ የተለየ፣ ቅድመ ሁኔታ የሌለው የሕዝብ API ውል ነው።                                   |
| `ANTIGRAVITY_ACCOUNT_LEASE_ENABLED`         | boolean | `false` |           | የመረጠውን Antigravity መለያ ለጥያቄው የዥረት የሕይወት ዑደት ያስይዙ፤ ይህም በተመሳሳይ ጊዜ የሚደረግ ዳግም ሙከራ ወይም የማረጋገጫ መረጃ ርክክብ አስቀድሞ በሂደት ላይ ላለ ዥረት የተመደበ መለያን እንደገና እንዳይመርጥ ያደርጋል። ማስያዣው በ(ግንኙነት፣ ሊጠራ የሚችል የላይኛው ዥረት ሞዴል) ወሰን ውስጥ ነው፣ ስለዚህ አንድ መለያ አሁንም ሁለት የተለያዩ ሞዴሎችን በአንድ ጊዜ ማገልገል ይችላል። ሁሉም ብቁ መለያዎች ለዚያ ሞዴል አስቀድመው በኪራይ ሲያዙ፣ ጥያቄው በተጨናነቀ መለያ ላይ ከመደራረብ ይልቅ የተዋቀረ 503 `antigravity_pool_busy`ን ከተወሰነ `Retry-After` ጋር ይመልሳል። በነባሪነት ጠፍቷል፦ የመለያ ምርጫው በትክክል እንደቀድሞው ይቆያል፣ ምንም ማስያዣም አይደረግም። |
| `COMBO_AUTO_PRUNE_STALE_STEPS`              | boolean | `false` |           | ከባለሥልጣናዊ የቀጥታ ካታሎግ ጋር የተሳካ የሞዴል ማመሳሰል ከተደረገ በኋላ፣ ካታሎጉ ከእንግዲህ በዝርዝሩ ውስጥ ከማያካትታቸው ሞዴሎች ጋር የተቆራኙ combo ደረጃዎችን ያስወግዱ፣ ለእያንዳንዱ የተወገደ ደረጃም አንድ የኦዲት ግቤት ይመዝገቡ። ማመሳሰሉ ሲወድቅ፣ ሲዳከም ወይም ነፃ ሞዴሎችን ብቻ ሲያካትት ፈጽሞ አያስወግድም፣ comboንም ፈጽሞ ባዶ አያደርግም። በነባሪነት ጠፍቷል፦ ጊዜ ያለፈባቸው ደረጃዎች ምልክት ብቻ ይደረግባቸዋል።                                                                                                                                                                                |
| `KIRO_TOOL_CALL_REPAIR_ENABLED`             | boolean | `true`  |           | ዥረታዊ የKiro ምላሽ ማንኛውም የሚታይ ውጤት ከመኖሩ በፊት የተበላሸ `tool_call` wrapper (`input.name` ወይም `input.arguments` የሌለው) ሲያወጣ፣ ተራውን በ`invalid_kiro_tool_call` ከማቋረጥ ይልቅ ያንን ያፍኑት እና የማስተካከያ መመሪያ ጨምረው ጥያቄውን አንድ ጊዜ እንደገና ይላኩ። ዳግም ሙከራው አንድ ተጨማሪ የKiro ጥያቄ ያስከፍላል፤ ሁለተኛ ውድቀት ተራውን በ`kiro_tool_call_repair_retry_failed` ያቋርጠዋል። በነባሪነት በርቷል። በመጀመሪያው የተበላሸ wrapper ላይ ተራውን ለማሳካት ወደ `false` ያቀናብሩ።                                                                               |

### CLI (5)

| ቁልፍ                                   | ዓይነት    | ነባሪ     | ዳግም ማስጀመር | መግለጫ                                                                                                                                                               |
| ------------------------------------- | ------- | ------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `CLI_COMPAT_ALL`                      | boolean | `false` | ✓         | ለሁሉም CLI ደንበኞች የተኳኋኝነት ሁነታን አንቃ።                                                                                                                                   |
| `MODEL_ALIAS_COMPAT_ENABLED`          | boolean | `false` |           | የሞዴል ተለዋጭ ስም ተኳኋኝነት ንብርብርን አንቃ።                                                                                                                                    |
| `PRICING_SYNC_ENABLED`                | boolean | `false` |           | ራስ-ሰር የዋጋ ውሂብ ማመሳሰልን አንቃ (`PRICING_SYNC_ENABLED` የአካባቢ ተለዋዋጭም ያስፈልጋል)።                                                                                             |
| `OMNIROUTE_AUTO_SYNC_CODEX_PROFILES`  | boolean | `false` |           | ከአቅራቢ ሞዴል ማመሳሰል በኋላ፣ ከቀጥታ ካታሎጉ በመነሳት የ~/.codex/*.config.toml መገለጫ ፋይሎችን በራስ-ሰር (እንደገና) ይጻፉ። ንቁውን/ነባሪውን Codex ውቅር ፈጽሞ አይቀይርም። በነባሪ ጠፍቷል።                            |
| `OMNIROUTE_AUTO_SYNC_CLAUDE_PROFILES` | boolean | `false` |           | ከአቅራቢ ሞዴል ማመሳሰል በኋላ፣ ከቀጥታ ካታሎጉ በመነሳት የ~/.claude/profiles/<name>/settings.json Claude Code መገለጫዎችን በራስ-ሰር (እንደገና) ይጻፉ። ንቁውን/ነባሪውን Claude ውቅር ፈጽሞ አይቀይርም። በነባሪ ጠፍቷል። |

### ጤና (5)

| ቁልፍ                                       | ዓይነት    | ነባሪ     | መግለጫ                                                                                                                                                                                                           |
| ----------------------------------------- | ------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `OMNIROUTE_DISABLE_LOCAL_HEALTHCHECK`     | boolean | `false` | የአካባቢያዊ ኢንስታንስ የጤና ምርመራ መጨረሻ ነጥብን አሰናክል።                                                                                                                                                                       |
| `OMNIROUTE_DISABLE_TOKEN_HEALTHCHECK`     | boolean | `false` | የቶከን ማረጋገጫ የጤና ምርመራን አሰናክል።                                                                                                                                                                                    |
| `SKILLS_SANDBOX_NETWORK_ENABLED`          | boolean | `false` | በክህሎቶች sandbox አካባቢ ውስጥ የአውታረ መረብ መዳረሻን አንቃ።                                                                                                                                                                   |
| `PROXY_HEALTH_BLOCKED_RESETS_STREAK`      | boolean | `false` | በፕሮክሲ ጤና ቅኝት ውስጥ፣ ዒላማው ያልተቀበለው ፍተሻ (401/403/429) የፕሮክሲውን ተከታታይ-ውድቀት ቆጠራ ዳግም ያስጀምራል። በነባሪ ጠፍቷል፦ አለመቀበል ገለልተኛ ሆኖ ይቆያል (#10654)። 5xx በሁለቱም ሁኔታ ያልተወሰነ ሆኖ ይቆያል፤ አለመቀበል ፕሮክሲን ፈጽሞ አያስወግድም፣ አያሰናክልም ወይም እንደገና አያነቃም። |
| `DB_HEALTHCHECK_STARTUP_DEFERRED_ENABLED` | boolean | `false` | አገልጋዩ ጥያቄዎችን መቀበል ከጀመረ በኋላ (በ`setImmediate` በኩል)፣ እስኪጠናቀቅ ድረስ ጅምርን ከማገድ ይልቅ የጅምር DB የሙሉነት/ጤና ምርመራን አሂድ (#13717)። በነባሪ ጠፍቷል፦ ጅምሩ ከዚህ PR በፊት እንደነበረው በትክክል ይታገዳል።                                                |

> [!NOTE]
> `INPUT_SANITIZER_BLOCK_THRESHOLD` እና የቆየ ተለዋጭ ስሙ
> `INJECTION_GUARD_BLOCK_THRESHOLD` የ`INJECTION_GUARD_MODE`ን `block` ሁነታ
> ያስተካክላሉ፣ ነገር ግን እነሱ በ
> [`src/shared/utils/injectionSeverity.ts`](../../src/shared/utils/injectionSeverity.ts)
> የሚነበቡ ተራ የአካባቢ ተለዋዋጮች እንጂ የባህሪ ጠቋሚዎች አይደሉም፦ የDB መሻርም ሆነ የዳሽቦርድ መቀያየሪያ የላቸውም።
> [`ENVIRONMENT.md`](./ENVIRONMENT.md#4-security--authentication)ን ይመልከቱ።

> [!NOTE]
> የ`Restart` ዓምድ `requiresRestart: true` ያላቸውን ጠቋሚዎች ያመለክታል — እሴቱ
> ወዲያውኑ ይቀመጣል፣ ግን ተግባራዊ የሚሆነው ሂደቱ ዳግም ከተጫነ በኋላ ብቻ ነው። የEnum
> ጠቋሚዎች ከተፈቀደላቸው ስብስብ ውጭ ያለን ማንኛውንም እሴት አይቀበሉም (በአገልጋይ በኩል
> በ`setFeatureFlagOverride()` እና በREST `PUT` ተቆጣጣሪው ውስጥ ይረጋገጣል)።

---

## ጠቋሚዎችን ማብራትና ማጥፋት

### ዳሽቦርድ

ወደ **ዳሽቦርድ → ቅንብሮች → የባህሪ ጠቋሚዎች**
(`/dashboard/settings/feature-flags`) ይሂዱ። ሰንጠረዡ
(`src/app/(dashboard)/dashboard/settings/components/FeatureFlagsGrid.tsx`)
የሚከተሉትን ይደግፋል፦

- በቁልፍ ወይም በመግለጫ **መፈለግ**፣ እና በምድብ **ማጣራት** (በተጨማሪም የተፈጠረ
  **ዳግም ማስጀመር ያስፈልገዋል** እይታ)።
- ለቡሊያን ጠቋሚዎች **ማብሪያ/ማጥፊያ** እና ለenum ጠቋሚዎች **ተቆልቋይ ምናሌ**
  (`src/app/(dashboard)/dashboard/settings/components/FeatureFlagCard.tsx`)።
- በእያንዳንዱ ጠቋሚ ላይ ውጤታማው እሴት ከየት እንደመጣ የሚያሳይ **የምንጭ ባጅ** — `DB`፣ `ENV`፣ ወይም `DEF`።
- ልዩ ቅንብሩን ለማስወገድ **ዳግም አስጀምር** አዝራር (`DB` ምንጭ ላላቸው ጠቋሚዎች ብቻ የሚታይ)፣
  እና ከታች **ሁሉንም ልዩ ቅንብሮች ዳግም አስጀምር** አዝራር።
- `requiresRestart` ያለው ጠቋሚ ሲቀየር **ሰርቨሩን ዳግም አስጀምር** ባነር።

### REST API

ሁሉም ክወናዎች በአንድ መስመር ብቻ ያልፋሉ፦
[`src/app/api/settings/feature-flags/route.ts`](../../src/app/api/settings/feature-flags/route.ts)።
እያንዳንዱ ዘዴ የተረጋገጠ የዳሽቦርድ ክፍለ ጊዜ ይፈልጋል (ካልሆነ `401`)።

#### `GET /api/settings/feature-flags`

እያንዳንዱን ጠቋሚ ከውጤታማ እሴቱ፣ ምንጩ እና ማጠቃለያው ጋር ይመልሳል።

```jsonc
{
  "flags": [
    {
      "key": "REQUIRE_API_KEY",
      "label": "Require API Key",
      "description": "Require an API key for all incoming requests",
      "category": "security",
      "type": "boolean",
      "enumValues": null,
      "defaultValue": "false",
      "effectiveValue": "false",
      "source": "default", // "db" | "env" | "default"
      "requiresRestart": false,
      "warningLevel": "caution",
    },
    // ... ሁሉም 77 ጠቋሚዎች
  ],
  "summary": {
    "total": 56,
    "active": 0,
    "inactive": 0,
    "overriddenByDb": 0,
    "overriddenByEnv": 0,
  },
}
```

#### `PUT /api/settings/feature-flags`

አንድ ልዩ ቅንብር ያዘጋጁ ወይም ያስወግዱ። የጥያቄ አካል፦ `{ key: string; value?: string }`።
`value`ን አለማካተት ልዩ ቅንብሩን ያስወግዳል (የenv / default እሴቱን ይመልሳል)።

```bash
# የDB ልዩ ቅንብር አዘጋጅ
curl -X PUT http://localhost:20128/api/settings/feature-flags \
  -H "Content-Type: application/json" \
  -d '{"key":"REQUIRE_API_KEY","value":"true"}'

# ልዩ ቅንብሩን አስወግድ ("value" የለም)
curl -X PUT http://localhost:20128/api/settings/feature-flags \
  -H "Content-Type: application/json" \
  -d '{"key":"REQUIRE_API_KEY"}'
```

ምላሹ አዲሱን `effectiveValue`/`source`፣ `previousValue`/
`previousSource` እና `requiresRestart` መልሶ ያሳያል። ያልታወቁ ቁልፎች እና ከተፈቀደው ክልል ውጭ ያሉ የenum
እሴቶች በ`400` ውድቅ ይደረጋሉ።

#### `DELETE /api/settings/feature-flags`

**ሁሉንም** የDB ልዩ ቅንብሮች በአንድ ጊዜ ያጸዳል፣ እያንዳንዱን ጠቋሚ ወደ env / default
እሴቱ ይመልሳል። `{ cleared: <count>, message: "..." }`ን ይመልሳል።

> [!NOTE]
> `requiresRestart: true` ያላቸው ጠቋሚዎች ሥራ ላይ የሚውሉት ፕሮሰሱ ዳግም ከተጫነ በኋላ ብቻ ነው።
> የዳሽቦርዱ ዳግም ማስጀመሪያ ፍሰት `POST /api/restart`ን ይጠራል፣ ከዚያም ሰርቨሩ ዳግም እስኪነሳ ድረስ
> `GET /api/health/ping`ን በተደጋጋሚ ይፈትሻል።

---

## የአደጋ ጊዜ በጀት አማራጭ

`OMNIROUTE_EMERGENCY_FALLBACK` (ምድብ `runtime`፣ ነባሪ `true`) በ
[`open-sse/services/emergencyFallback.ts`](../../open-sse/services/emergencyFallback.ts)
ውስጥ ያለውን የአደጋ ጊዜ ነፃ አማራጭ መንገድ ይቆጣጠራል።
ሲነቃ፣ በጀታቸውን የጨረሱ ጥያቄዎች ሙሉ በሙሉ ከመክሸፍ ይልቅ ወደ ነፃ አማራጭ
አቅራቢ/ሞዴል ይመራሉ። ይህን ባህሪ ለማሰናከል እና በጀታቸውን የጨረሱ ጥያቄዎች
እንዲከሽፉ ለማድረግ፣ በዳሽቦርድ ማብሪያ/ማጥፊያ፣ በDB መሻር፣ ወይም በ
`OMNIROUTE_EMERGENCY_FALLBACK` የአካባቢ ተለዋዋጭ በኩል — ወደ `false` (ወይም `0`)
ያቀናብሩት። (በPRs #3741 / #3752 ውስጥ እንደ የዳሽቦርድ ማብሪያ/ማጥፊያ ቀርቧል።)

በዚህ አማራጭ የቀረበ ምላሽ
`X-OmniRoute-Emergency-Fallback: from=<provider/model>; to=<provider/model>` ይይዛል፤ በዚህም
ደንበኛው `X-OmniRoute-Provider`ን ከጥያቄው ጋር ሳያነጻጽር ጥያቄው እንደገና መመራቱን
ማወቅ ይችላል። ይህ ራስጌ በሌሎች ምላሾች ሁሉ ላይ አይኖርም።

---

## በተጨማሪ ይመልከቱ

- [የአካባቢ ተለዋዋጮች ማጣቀሻ](./ENVIRONMENT.md) — አብዛኛዎቹ ጠቋሚዎች እዚያ የተመዘገበ ተመሳሳይ ስም ያለው የአካባቢ ተለዋዋጭ አላቸው (የDB መሻር ከእሱ ይቀድማል)።
- [`src/shared/constants/featureFlagDefinitions.ts`](../../src/shared/constants/featureFlagDefinitions.ts)
  — ለእያንዳንዱ ጠቋሚ ትክክለኛው የመረጃ ምንጭ።
- [`src/shared/utils/featureFlags.ts`](../../src/shared/utils/featureFlags.ts)
  — የመፍታት አመክንዮ (`resolveFeatureFlag`፣ `isFeatureFlagEnabled`፣
  `resolveAllFeatureFlags`)።
- [`src/lib/db/featureFlags.ts`](../../src/lib/db/featureFlags.ts) — በ`key_value` ሰንጠረዥ
  `feature_flags` namespace ውስጥ የDB መሻርን በቋሚነት ማከማቸት።
