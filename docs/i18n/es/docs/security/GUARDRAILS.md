# Guardrails (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Fuente de referencia:** `src/lib/guardrails/`
> **Última actualización:** 2026-08-29 — v3.8.51 (la procedencia de la transcripción de Video Bridge es declarada por quien realiza la llamada,
> aún no está verificada por el servidor — aclarado según #11661)

Las barreras de seguridad aplican medidas de seguridad, políticas y transformaciones de contenido en el límite
entre OmniRoute y los proveedores ascendentes. Cada barrera puede inspeccionar (y
opcionalmente rechazar, transformar o anotar) las cargas útiles de las solicitudes (`preCall`) y
las respuestas ascendentes (`postCall`).

El sistema es **fail-open**: si una barrera genera una excepción durante la ejecución, el registro
guarda el error y continúa con la siguiente barrera en lugar de hacer que falle la
solicitud. El bloqueo es una decisión explícita (`block: true`), nunca un accidente.

## Protecciones integradas

El registro carga automáticamente seis protecciones en orden de prioridad al importarse
(consulte `registry.ts` → `registerDefaultGuardrails()`):

| Prioridad | Nombre              | Etapa(s)       | Archivo               |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Los números de prioridad más bajos se ejecutan **primero**.

### Puente de visión (`visionBridge.ts`) — Puente de modalidad PR-1

Intercepta las solicitudes que contienen imágenes dirigidas a **modelos sin capacidades de visión** y, o bien
redirige toda la solicitud a un modelo con capacidades de visión, o bien sustituye las partes de imagen
por descripciones de texto producidas por un modelo de visión configurable antes
de la llamada al servicio ascendente. Esto permite que los proveedores de solo texto gestionen de forma transparente
cargas útiles multimodales.

Flujo:

1. Se omite si el modelo de destino ya admite visión (a menos que aparezca en la
   lista de puente forzado `isVisionBridgeForcedModel`).
2. Se extraen las partes de imagen mediante `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), que delega en el **detector de medios
   unificado** `detectMediaParts()` de `open-sse/utils/mediaParts.ts`: la
   única fuente de verdad compartida con el filtro de compatibilidad de combinaciones.
   La extracción se limita mediante una lista de permitidos a partes de nivel superior con las formas
   que `replaceImageParts` puede volver a insertar (el contrato de extracción↔reemplazo): `image_url`
   de OpenAI, `source.type:"base64"` de Anthropic, `source.type:"url"`
   de Anthropic y `input_image` de Responses API. Las coincidencias anidadas y
   las formas que solo actúan como indicadores son material del filtro de combinaciones y nunca se extraen.
   Se omite si no se encuentra ninguna.
3. Se resuelve la configuración en tiempo de ejecución mediante `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): las nuevas claves de configuración `modalityBridge*`
   tienen prioridad; las claves heredadas `visionBridge*` permanecen como **alternativa durante un ciclo**
   (ventana de reversión). Se omite antes de cualquier recorrido de medios cuando el
   puente está deshabilitado.
4. El selector de modo (`modalityBridgeVisionMode`, consulte la tabla siguiente) decide entre
   redirigir o describir. La redirección devuelve `modifiedPayload` cambiando únicamente `model`,
   además de los metadatos `{ rerouted, fromModel, toModel, imagesKept }`.
5. Ruta de descripción: limita las imágenes a `maxImages`, compone el mensaje adaptado a la tarea,
   consulta la caché de descripciones, llama al modelo de visión **en paralelo**
   (`Promise.allSettled`) e inserta en su lugar partes de texto `[Image N]: <description>`.
   Una descripción fallida produce `null` y la parte de imagen original se
   **conserva** (#4012), excepto en la ruta de descripción de combinaciones cuando todas las
   descripciones han fallado; en ese caso, un servicio ascendente que se haya confirmado que no admite visión recibe un
   marcador `(unavailable — no vision-capable provider connected)` en su lugar (#8430).
6. Devuelve `modifiedPayload` y los metadatos (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selector de modo (`modalityBridgeVisionMode`)

| Modo       | Predeterminado | Comportamiento                                                                                                                                                                                                                                                                                                                                   |
| ---------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔              | Heurística heredada, sin cambios (#6640/#7204): los modelos que no son combinaciones/`auto/` se redirigen al mejor modelo de visión, salvo que el modelo original ya disponga de credenciales utilizables (en cuyo caso se describe); los destinos combinados siempre describen.                                                                 |
| `describe` |                | Siempre describe: el bloque de redirección se omite por completo; el modelo elegido por el usuario siempre responde.                                                                                                                                                                                                                             |
| `reroute`  |                | Fuerza la redirección: se omite la protección que conserva el modelo con credenciales. La protección de credenciales del **destino** de redirección sigue aplicándose: cuando no existe un destino de visión utilizable, la solicitud pasa a la descripción para que las imágenes sin procesar nunca lleguen a un backend de solo texto (#8430). |

Los modos forzados provocan un retorno anticipado **antes** de que se ejecute la heurística automática; el comportamiento de `auto`
es idéntico byte por byte al de la protección anterior a PR-1.

#### Alcance de la clave de API (`visionBridgeKeyScope.ts`)

Cuando la clave de API del solicitante restringe `allowedConnections`, los grupos de cuota
(`allowedQuotas`) o los modelos (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), el puente solo
selecciona modelos de redirección y descripción que la clave puede utilizar, en conexiones que la clave puede
utilizar. La llamada de descripción siempre pasa después por el bucle interno de OmniRoute con
el encabezado `x-omniroute-self-loop-key-id`, de modo que la solicitud de chat receptora
vuelva a aplicar la política de conexiones y modelos de esa clave. `enforceApiKeyPolicy()`
solo respeta ese encabezado junto con el bearer del bucle interno, por lo que únicamente puede
restringir el acceso, y se rechaza un identificador que no pueda resolverse.

Si no se permite ningún modelo de visión para la clave, la ruta de descripción no interviene y
la solicitud pasa sin cambios, con el mismo comportamiento de apertura ante fallos que una
protección deshabilitada (metadatos `{ skipped: true, reason: "no_permitted_vision_model" }`).
Las solicitudes sin clave y las claves sin estas restricciones se comportan exactamente igual que
antes.

#### Mensaje de descripción adaptado a la tarea (`modalityBridgeVisionTaskAware`)

Valor predeterminado: **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) añade
el texto del **último mensaje del usuario** (truncado a 500 caracteres) al prompt
base de descripción, orientando la descripción hacia lo que el usuario realmente
preguntó (patrón codex-vision-proxy) y solicitando al modelo de visión que transcriba
el texto visible. Con la opción desactivada —o si no hay texto del usuario—, el
prompt base se utiliza sin cambios.

La solicitud compatible con OpenAI del propio bucle de autodescripción (`callVisionModelSingle()`
en `visionBridgeHelpers.ts`) siempre solicita `image_url.detail: "high"` —
incondicionalmente, para cada llamador/proveedor, sin depender de ninguna señal
del cliente. El muestreo con poco detalle reduce la precisión del OCR precisamente
para la tarea de transcripción de texto que solicita este prompt, por lo que la
llamada de descripción siempre pide un nivel de detalle alto, independientemente
del nivel de detalle utilizado en la solicitud entrante original. Esto solo afecta
al cuerpo de la solicitud interna de descripción; no cambia la forma en que
OmniRoute reenvía el `image_url.detail` del propio llamador en la solicitud principal —
ese valor predeterminado se aplica por separado, y solo para clientes OpenCode
detectados, en `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). La
rama con formato de comunicación Anthropic del bucle de autodescripción no tiene
ningún campo `detail` y no se ve afectada por ninguno de los dos valores predeterminados.

#### Límite de salida de la descripción (`modalityBridgeVisionMaxChars`)

| Clave                          | Valor predeterminado | Intervalo       |
| ------------------------------ | -------------------- | --------------- |
| `modalityBridgeVisionMaxChars` | `0`                  | `0` o 100–50000 |

`0` (valor predeterminado) significa **sin límite**: la descripción devuelta por
`callVisionModel()` se transmite sin modificaciones, preservando el
comportamiento existente. Cualquier valor del intervalo 100–50000 trunca la
descripción con un sufijo `…` antes de insertarla de nuevo como
`[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` en
`src/lib/guardrails/visionBridge.ts`). Aumente este valor para tareas de OCR con
mucho detalle en las que el modelo posterior necesite la transcripción completa;
redúzcalo para limitar el uso de tokens en modelos de visión demasiado verbosos.
El campo del panel de control se encuentra en el panel Avanzado de la pestaña
Visión (`modality-bridge-max-chars` en `ModalityBridgeVisionTab.tsx`) y ajusta
cualquier valor entre 1 y 99 al mínimo de 100, mientras deja intacto un `0`
explícito: `0` es por sí mismo un valor Zod válido
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), no simplemente
el valor predeterminado «sin establecer».

#### Caché de descripciones (`modalityBridge/bridgeCache.ts`)

Caché LRU + TTL en memoria para las salidas de descripción, compartida en todo
el proceso. Clave = `sha256(imageRef + composedPrompt + configuredBridgeModel)` con
delimitación mediante prefijos de longitud (sin colisiones entre límites de campos).
El componente del modelo es el modelo de puente **configurado**, no el modelo que
realmente respondió: `callVisionModel` puede recurrir internamente a un modelo
alternativo, y generar claves por intento fragmentaría la caché. Las descripciones
fallidas nunca se almacenan en caché. Configuración:

| Clave                           | Valor predeterminado | Intervalo |
| ------------------------------- | -------------------- | --------- |
| `modalityBridgeCacheEnabled`    | `true`               | —         |
| `modalityBridgeCacheTtlMinutes` | `60`                 | 1–1440    |
| `modalityBridgeCacheMaxEntries` | `200`                | 10–5000   |

#### Normalización de imágenes remotas (descripción en bucle interno/obtención en base64)

Cuando el puente obtiene por sí mismo una imagen **remota** —la autollamada de
descripción de Anthropic y la conversión a base64 con formato de comunicación
de Claude (`ensureBase64ImagesForClaudeWire`), ambas mediante
`fetchRemoteImageAsDataUri()` en `visionBridgeHelpers.ts`—, el URI de datos
resultante se procesa con `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) antes de incorporarse a la solicitud del
modelo de visión. Las imágenes sobredimensionadas se reducen hasta un **lado
mayor de 2048 px** (en consonancia con el límite de redimensionamiento que
OpenAI/Anthropic ya aplican en el servidor), lo que reduce los bytes de carga y
la latencia sin cambiar lo que ve el modelo de visión. El redimensionamiento
utiliza `sharp`, cargado mediante importación dinámica: en una plataforma donde
su binario nativo no se pueda cargar, `normalizeDataUri()` **nunca genera una
excepción**; recurre a transmitir los bytes originales sin cambios, por lo que
la ruta de descripción/conversión a base64 siempre continúa funcionando. Los
bytes que no sean de imagen (una obtención que no haya devuelto una imagen
decodificable) también se transmiten sin cambios. Esta normalización se limita
a las imágenes que el puente obtiene para su propia autollamada; nunca se aplica
a la carga útil sin procesar y de paso directo del llamador, de acuerdo con el
principio de modificación exclusivamente voluntaria (Regla estricta n.º 20).

#### Esquema de configuración + migración

Las nuevas claves `modalityBridge*` se validan con Zod en `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, el trío `modalityBridgeCache*` y el
grupo `modalityBridgeAudio*` utilizado por Audio Bridge. La migración
`141_modality_bridge_settings.sql` copia los valores heredados existentes de
`visionBridge*` en las nuevas claves correspondientes (es idempotente y nunca
sobrescribe un valor `modalityBridge*` establecido por un operador); las claves
heredadas siguen aceptándose como alternativa de lectura durante un ciclo de
lanzamiento.

#### Encabezado de transparencia + estadísticas

Las respuestas transformadas mediante descripción incluyen
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(construido por `buildModalityBridgeHeader()` en `modalityBridge/bridgeStats.ts`
y añadido por `withModalityBridgeHeader()` en `src/sse/handlers/chatHelpers.ts`).
Las solicitudes redirigidas **no** reciben ningún encabezado: la carga útil no se
modificó y el cambio de modelo ya es visible en el campo `model` del cuerpo de
la respuesta.

`GET /api/modality-bridge/stats` (autenticación de administración, mismo nivel que
`GET /api/settings`) devuelve los contadores en memoria por modalidad
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` para `vision`, `audio` y
`video`. `averageLatencyMs` usa `latencySamples`, no todos los intentos, como
denominador; una operación sin medición de tiempo no genera artificialmente una
muestra de cero milisegundos. `bridged` sigue siendo el alias retrocompatible de
las conversiones correctas; los intentos fallidos no lo incrementan.
Los contadores se restablecen al reiniciar el proceso por diseño
(telemetría, no contabilidad).

#### Configuración del panel

La página específica del panel es
`/dashboard/settings/modality-bridge`. Sus pestañas `Vision`, `Audio` y
`Video`, accesibles mediante URL, conservan los parámetros de consulta al cambiar
el valor de `tab`. La pestaña Vision permite configurar la activación, el modo,
la selección del modelo (incluido el valor predeterminado automático), las
instrucciones adaptadas a la tarea y los límites avanzados de tiempo de espera,
imagen, longitud de descripción y caché, además de mostrar contadores en tiempo
de ejecución y ofrecer una solicitud de ejemplo protegida. La pestaña Audio
también está operativa: permite configurar la activación, seleccionar un modelo
exclusivo para STT con Auto, establecer límites de tiempo de espera y duración
máxima del clip, consultar contadores de audio y ejecutar una prueba de ejemplo
con `input_audio`. La pestaña Video es funcional: informa del estado en tiempo de
ejecución de FFmpeg/ffprobe, uno de cuatro estados explícitos de la interfaz
(`unknown` mientras la comprobación está en curso o no pudo completarse,
`restricted` en un host del panel que no sea de bucle invertido y donde la
comprobación se omite en el lado del cliente, `unavailable` una vez comprobado y
confirmado que no está disponible, o `available` con las versiones de
FFmpeg/ffprobe), conserva los límites de activación, modelo, fotogramas, vídeo y
tiempo de espera, filtra el selector de modelos para mostrar los que admiten
visión y presenta los contadores de vídeo.

La antigua tarjeta Vision Bridge de la configuración de IA es un enlace de
compatibilidad a la nueva página; ya no mantiene una segunda copia del
formulario. Media Providers también enlaza los flujos de trabajo Image-to-Text y
Speech-to-Text con las pestañas correspondientes de Modality Bridge sin eliminar
el entorno de pruebas de Speech-to-Text existente.

**Omisión de admisión en el bucle propio:** cuando la llamada de descripción se
encamina a través del propio bucle `/v1` de OmniRoute (modelo de proveedor no
estándar), la solicitud secundaria envía
`x-omniroute-admission-bypass: internal` y se autentica con la credencial resuelta
del bucle propio: el valor centinela local `sk_omniroute` en modo local o la clave
de entorno `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` configurada por el operador
(#1350), de modo que las implementaciones con `REQUIRE_API_KEY=true` puedan seguir
ejecutando la llamada de descripción. La omisión solo se acepta para esas
credenciales exactas, por lo que los clientes externos no pueden usar la
cabecera para evitar la admisión.

Los valores predeterminados heredados se encuentran en
`src/shared/constants/visionBridgeDefaults.ts`; los nuevos valores predeterminados
de modo, adaptación a la tarea y caché, así como el resolutor de configuración,
se encuentran en `src/shared/constants/modalityBridgeDefaults.ts`. El mecanismo
de protección expone una opción de constructor `deps` para que las pruebas puedan
inyectar implementaciones simuladas de `getSettings` y `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Intercepta las solicitudes de chat que contienen audio antes de que lleguen a un
destino que no sea conocido por aceptar entradas de audio. Nunca redirige la
solicitud de chat: las partes de audio se transcriben mediante el endpoint
multipart compatible con OpenAI existente y el modelo de chat seleccionado
continúa con las transcripciones de texto.

Flujo:

1. Resuelve `supportsAudio` mediante `getResolvedModelCapabilities()`. Los
   metadatos explícitos del registro de proveedores tienen prioridad, seguidos
   de los metadatos estáticos del modelo y, finalmente, de
   `modalities_input` sincronizado. Una lista de entradas declarada sin `audio`
   equivale a `false`; si no hay indicios sobre la capacidad, el valor sigue
   siendo `null`. Tanto `false` como `null` activan el puente conservador,
   mientras que `true` lo omite.
2. Resuelve la configuración `modalityBridgeAudio*` y extrae las partes de audio
   de nivel superior que pueden empalmarse de todos los mensajes mediante el
   detector compartido `detectMediaParts()`. Los formatos de transferencia
   admitidos son `input_audio`, `audio_url` y
   `source.media_type: "audio/*"` de OpenAI. El audio anidado se detecta para el
   encaminamiento, pero la ruta de empalme no lo elimina. El trabajo está
   limitado por `modalityBridgeAudioMaxClips`; las partes posteriores permanecen
   intactas.
3. Respeta un `provider/model` configurado o permite que
   `selectAudioBridgeModel()` recorra `AUDIO_TRANSCRIPTION_PROVIDERS` en el orden
   estable del catálogo y seleccione el primer modelo que tenga una credencial
   de proveedor activa y utilizable.
4. `callAudioTranscription()` convierte el audio base64/URI de datos en un
   `file` multipart o descarga un `audio_url` remoto mediante la protección de
   salida exclusiva para destinos públicos, con fijación de DNS y un límite de
   25 MB. A continuación, envía mediante POST el archivo y el modelo seleccionado
   al bucle propio local `/v1/audio/transcriptions`, autenticado con
   `resolveSelfLoopBearer()`. La ruta de transcripción existente realiza la
   búsqueda normal de credenciales, la gestión de periodos de enfriamiento y
   límites de frecuencia, y el despacho al proveedor.
5. Las llamadas correctas sustituyen sus partes por
   `[Audio N]: <transcript>`. Las llamadas se ejecutan con
   `Promise.allSettled`: un fallo individual conserva esa parte de audio
   original (contrato #4012). Si todas las llamadas fallan y se ha demostrado
   que el destino tiene `supportsAudio === false`, las partes se convierten en
   `[Audio N]: (unavailable — no STT provider connected)` (contrato #8430). Para
   un destino desconocido (`null`), si todas fallan, el contenido permanece
   intacto. Un destino que se ha demostrado que solo admite texto y que no tiene
   ninguna credencial STT utilizable recibe el mismo marcador explícito sin
   realizar una llamada de red.

Las transcripciones correctas utilizan la caché LRU/TTL de Modality Bridge para
todo el proceso. La clave combina la referencia de audio, la etiqueta estable de
operación `audio-transcription` y el modelo STT seleccionado; los fallos nunca se
almacenan en caché. Los intentos de audio actualizan los contadores compartidos
`bridged`, `cacheHits`, `failures` y `lastUsedAt`. Las respuestas transformadas
incluyen
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; las
solicitudes sin modificar no reciben ningún segmento de Audio Bridge.

La configuración en tiempo de ejecución está respaldada por la base de datos y
validada mediante Zod:

| Clave                         | Valor predeterminado | Intervalo              |
| ----------------------------- | -------------------- | ---------------------- |
| `modalityBridgeAudioEnabled`  | `true`               | —                      |
| `modalityBridgeAudioModel`    | `""`                 | Automático o ID de STT |
| `modalityBridgeAudioTimeout`  | `60000`              | 1000–300000            |
| `modalityBridgeAudioMaxClips` | `3`                  | 1–10                   |

La caché compartida sigue estando controlada por `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` y `modalityBridgeCacheMaxEntries`.

### Puente de vídeo (`videoBridge.ts`, `videoBridgePipeline.ts`)

Intercepta las partes de vídeo de nivel superior en `messages` de Chat Completions y en
`input` de la API Responses antes de llamar a un destino sin compatibilidad nativa
conocida con vídeo. Los formatos admitidos son `input_video`, `video_url`,
`video_source`, las URL HTTPS y los URI de datos
`data:video/*;base64,...`. Los nombres de archivo simples incluidos en el texto no se
tratan como vídeo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) se encarga del recorrido de la solicitud,
la comprobación de capacidades y políticas, la agregación por solicitud y la carga útil
de la respuesta. El trabajo por vídeo —la adquisición, la caché del resultado completo,
la descripción de una secuencia de fotogramas (que integra cualquier transcripción de
audio declarada por el llamador) y las métricas, cancelación y limpieza de cada intento—
queda oculto tras `processVideoPart` en `videoBridgePipeline.ts`, al que se llama una vez
por cada parte de vídeo dentro del bucle de `preCall`. Ese módulo también define los
límites de puerto explícitos `VideoMediaBrokerPort` (adquisición de bytes y extracción
de fotogramas muestreados), `VideoAudioTranscriptionPort` (integración de una
transcripción de audio declarada por el llamador con las descripciones de los fotogramas
muestreados) y `VideoDrilldownPort` (el límite de persistencia de la exploración detallada
de fotogramas; aún no está conectado a `processVideoPart`: actualmente, solo la ruta
independiente `/api/modality-bridge/video/drilldown` escribe entradas de exploración
detallada).

La ruta pública de solicitudes `/v1` nunca importa ni invoca un subproceso. Los vídeos
remotos se descargan con un límite de 50 MiB; los vídeos base64 insertados directamente
tienen un límite conservador de 36 MiB decodificados por vídeo, de modo que la envoltura
del modelo, los mensajes y el entramado pueda permanecer dentro del límite público de
admisión de solicitudes JSON de 50 MiB. La longitud insertada directamente y las
estimaciones del tamaño decodificado se comprueban antes de la asignación. Se exige HTTPS
en la URL remota inicial y en cada redirección, mediante la protección saliente existente
restringida a destinos públicos con fijación de DNS. A continuación, los bytes cruzan el
límite exacto del intermediario interno
`POST /api/modality-bridge/video/extract`. Esa ruta es tanto `LOCAL_ONLY` como
`SPAWN_CAPABLE`, solo acepta una solicitud autenticada por proceso y de bucle invertido
de confianza, y nunca acepta una URL, una ruta del sistema de archivos, un ejecutable ni
una lista de argumentos. La canalización del límite de tamaño del cuerpo de la API y el
lector incremental del cuerpo del controlador aplican de forma independiente un límite
de entrada de 50 MiB para el intermediario. Su cola acotada ejecuta una extracción cada
vez, permite cuatro trabajos pendientes y limita la entrada pendiente a 100 MiB.

Dentro del intermediario, `ffprobe` lee un archivo local privado; la lista fija de
formatos permitidos excluye los formatos de listas de reproducción y manifiestos. Para
los contenedores permitidos de la familia MOV, las referencias externas a datos MOV
permanecen deshabilitadas de forma predeterminada y el comando fijo no las habilita.
Tanto `ffprobe` como `ffmpeg` utilizan una lista blanca de protocolos limitada a `file`,
un hilo, matrices de argumentos fijas, ningún intérprete de comandos y ejecutables
resueltos desde `PATH`. Los flujos de imágenes de portada adjuntas no son candidatos
reproducibles. Todos los flujos reproducibles deben satisfacer los límites, y se prefiere
un flujo predeterminado explícito antes de recurrir de forma determinista al de menor
índice. Los vídeos están limitados a 600 segundos, 8.192 píxeles por dimensión y
33.554.432 píxeles de origen. FFmpeg muestrea entre 1 y 16 fotogramas JPEG en puntos
medios, reduce el lado largo a un máximo de 1.024 píxeles sin ampliar las entradas más
pequeñas y nunca recibe una URL. De forma predeterminada, el muestreo es `uniform`. Las
políticas opcionales `scene_aware` y la experimental `segment_aware` realizan una pasada
fija adicional de FFmpeg sobre el flujo local ya validado, seleccionan marcas de tiempo
de escenas `showinfo` acotadas y, en caso de fallo del detector, tiempo de espera agotado,
salida malformada o un conjunto de candidatos vacío, recurren de forma determinista a los
mismos puntos medios uniformes. El modo con reconocimiento de segmentos asigna muestras
de puntos medios proporcionalmente a los intervalos de escena validados; la evidencia
del reconocimiento de segmentos y el comportamiento alternativo se detallan a
continuación. El límite estricto de 16 fotogramas se aplica después de la selección en
todas las políticas. Cuando una solicitud con reconocimiento de escenas solo dispone de
un fotograma, utiliza el punto medio uniforme del vídeo completo activo o de la ventana
de enfoque y notifica `policyEffective: uniform`: un solo fotograma de escena
seleccionado no puede conservar ambos extremos temporales. Opcionalmente, el llamador
puede proporcionar una ventana de enfoque finita (`start`/`end` en segundos); los límites
se restringen a la duración del contenido multimedia, se rechazan las ventanas invertidas
o no finitas y todas las políticas de muestreo se aplican únicamente dentro del intervalo
normalizado. La ventana resultante se incluye en los metadatos de muestreo y en el
prefijo de descripción no confiable para que los modelos posteriores puedan distinguir
un fragmento enfocado de la cronología completa.

El enfoque semántico de las descripciones es una configuración independiente y
explícita. El modo de análisis predeterminado `full` conserva la instrucción existente
para los fotogramas y nunca reenvía el texto de la solicitud al modelo de descripción. En
el modo `focused`, el puente lee únicamente el último `text`/`input_text` no vacío escrito
por el usuario en el mismo contenedor de Chat o Responses, lo normaliza a NFC, compacta
los caracteres de control y los espacios en blanco, y lo limita a 500 puntos de código
Unicode. Un resultado vacío hace que se utilice como alternativa la instrucción exacta
de `full`. Una pista utilizable se serializa como JSON en un bloque dedicado de contexto
de usuario no confiable y solo puede priorizar detalles observables; no puede anular la
advertencia independiente de no seguir las instrucciones visibles o audibles en el
contenido multimedia. El enfoque textual nunca infiere `start`/`end` ni modifica el
muestreador temporal.

#### Evidencia estructural de segmentos de FU-07

`segment_aware` utiliza una única pasada acotada de preanálisis sobre el flujo de vídeo local ya validado. La cadena fija de filtros primero reduce la escala a un máximo de 320 píxeles de ancho, detecta cambios de escena e intervalos congelados y, después, toma muestras a 1 fotograma por segundo para medir el desenfoque, la luminancia media y la información espacial/temporal. La pasada está limitada a 600 muestras estructurales, un subproceso de FFmpeg/filtro, las mismas listas de permitidos para el protocolo exclusivo `file` y los contenedores, un límite de 1 MiB para la salida del proceso y un máximo de 30 segundos dentro de la cancelación/fecha límite compartida del bróker. Nunca acepta desde la solicitud ningún comando, filtro, ruta ni URL.

Los valores estructurales son evidencia de muestreo determinista, no comprensión semántica del vídeo. No infieren sujetos, acciones, subtítulos, habla ni la intención del usuario. Los límites de escenas y congelaciones forman segmentos; la cobertura de congelación, el desenfoque, la exposición, el detalle espacial y el cambio temporal solo influyen en cómo se distribuye el presupuesto existente de 1–16 fotogramas. Un segmento completamente congelado se limita a un fotograma, mientras que los segmentos no congelados compiten por el presupuesto restante. Cuando hay más límites que fotogramas, se conserva una cobertura uniforme de la línea temporal para que los cortes rápidos iniciales no puedan ocultar un segmento final largo. Los límites de escena situados dentro de la resolución de análisis de 1 segundo de un límite de congelación se fusionan.

La ausencia de filtros, la evidencia malformada/vacía, un error del detector o el tiempo de espera agotado del preanálisis acotado permiten continuar aplicando la política exacta de puntos medios uniformes. La cancelación por parte del invocador o el vencimiento de la fecha límite del bróker no permiten continuar: finalizan el subproceso en curso, impiden la extracción posterior de fotogramas y el árbol temporal privado se elimina en `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genera fixtures deterministas de FFmpeg real para evaluar el ahorro de llamadas de generación de subtítulos después de la deduplicación, la asignación de presupuesto con movimiento denso, la evidencia de desenfoque/exposición/SI-TI, los cortes rápidos con una cola larga y los falsos positivos por fundido gradual. Registra el tiempo de reloj del preanálisis y, cuando `/usr/bin/time` está disponible, la CPU del proceso hijo y el pico de RSS. Sus comprobaciones de calidad son únicamente oráculos estructurales. La calidad del modelo real de generación de subtítulos permanece en `HOLD` porque este arnés no dispone de un endpoint autorizado ni de un evaluador congelado. El ahorro monetario también permanece en `HOLD`, salvo que `--caption-cost-per-call-usd` proporcione una estimación positiva explícita del coste por llamada; el script nunca inventa ninguno de esos resultados.

Cada fotograma está limitado a 4 MiB, el conjunto de todos los fotogramas sin procesar a 23 MiB y la respuesta serializada del bróker a 32 MiB. Un directorio temporal privado se elimina en `finally`. OmniRoute no incluye FFmpeg ni acepta una ruta de ejecutable personalizada. Antes de generar los subtítulos, el puente aplica una pasada conservadora de deduplicación visual: cada JPEG se reduce a un búfer de escala de grises de 16×16 y se compara únicamente con el último fotograma conservado. Para un presupuesto de subtítulos solicitado superior a un fotograma, la extracción proporciona un grupo acotado de candidatos de hasta el doble de ese presupuesto y nunca superior a 16 fotogramas. El límite solicitado solo se aplica después de la deduplicación; durante la reducción final se conservan el primer y el último candidato seleccionados cuando el presupuesto es de al menos dos. La política versionada `grayscale-16x16-mean-cells-v2` utiliza el mayor valor entre la diferencia de luminancia media y la proporción de celdas de la miniatura cuya diferencia normalizada es de al menos 0,05. El umbral de duplicación es la constante 0,04, elegida por su previsibilidad en lugar de exponerse como una configuración de tiempo de ejecución. Esta señal secundaria de alto contraste conserva pequeños movimientos y cambios en el texto visible que una comparación basada únicamente en la media podría ocultar. Los errores del comparador o del decodificador permiten continuar y conservar la cobertura. Los metadatos de salida distinguen entre candidatos extraídos, fotogramas utilizados correctamente y duplicados visuales descartados.

Una parte de vídeo marcada explícitamente puede solicitar una hoja de contactos con marcas de tiempo. El puente construye una cuadrícula JPEG de 4 columnas y 16 fotogramas como máximo. Cada celda de 512 píxeles incrusta la marca de tiempo de su fuente en una banda inferior de alto contraste, mientras que las mismas marcas de tiempo se conservan en los metadatos textuales para su asociación y auditoría posteriores. El JPEG completo permanece limitado a 32 MiB. Si `sharp` no puede decodificar o componer la cuadrícula, el puente recurre a los fotogramas JPEG individuales; una cancelación del cliente sigue propagándose a través de la operación de la hoja.

La evidencia de promoción se mantiene deliberadamente separada del microbenchmark sintético de composición. `scripts/perf/video-bridge-contact-sheet-eval.ts` define un arnés de pruebas A/B con esquema versionado para modelos de visión reales compatibles con OpenAI. Mide los tokens informados por el proveedor, la latencia de extremo a extremo (incluida la composición de la hoja), el número de llamadas al modelo y la retención de hechos definida en el manifiesto. Las respuestas sin procesar del modelo no se escriben en el informe; solo se conservan los resúmenes SHA-256 y los identificadores de los hechos coincidentes. El arnés no realiza ninguna llamada de red ni a un modelo de pago, salvo que se proporcione `--execute-real` y estén configurados `--model`, `OMNIROUTE_BASE_URL` y `OMNIROUTE_API_KEY`. Sin esa ejecución real explícita, su veredicto legible por máquina permanece en `HOLD`; las mediciones sintéticas de carga útil/número de llamadas por sí solas no constituyen evidencia de promoción.

Los invocadores pueden adjuntar un array opcional `transcript.cues` a una parte de vídeo compatible cuando ya dispongan de texto alineado. Cada indicación debe incluir `text`, un intervalo finito `start`/`end` dentro de la duración detectada y un `source` incluido en la lista de permitidos (`client`, `embedded` o `audio-bridge`); el valor predeterminado de `confidence` es `1` y debe permanecer entre `0` y `1`. Las indicaciones exactamente duplicadas se agrupan. OmniRoute nunca inicia una transcripción a partir de estos metadatos: las indicaciones validadas se copian al resultado descrito con su fuente, confianza e intervalo, y se representan como observaciones no confiables junto con los subtítulos de los fotogramas. El texto no válido, fuera del intervalo o sin procedencia se rechaza en lugar de mezclarse con el flujo de subtítulos. Ambos canales de transcripción del cuerpo de la solicitud normalizan la procedencia proporcionada a `client`, incluidas las etiquetas `embedded` o `audio-bridge` declaradas por el propio cliente. Solo un adaptador controlado por el servidor puede asignar esas etiquetas de confianza mediante el argumento exclusivo del código `trustedSource`; ningún campo JSON de la solicitud puede alcanzar ese argumento. El texto de la transcripción continúa siendo contenido no confiable derivado de medios, independientemente de su procedencia, y nunca debe determinar la autorización.

Un llamador avanzado puede proporcionar una pista `audioTranscript` para el mismo vídeo;
se trata como texto proporcionado por el cliente, no como prueba de una transcripción del servidor.
El punto de fusión ejecuta las observaciones visuales y de audio con
un único plazo y una única señal de cancelación, las ordena en una línea temporal común, combina
los duplicados exactos y devuelve un resultado parcial cuando solo una de las partes tiene éxito.
Un `audioTranscript` no válido se degrada a ese resultado parcial —se conserva la
descripción visual y la rama de audio registra un código de error sanitizado—
en lugar de provocar un error para todo el vídeo. La disponibilidad por rama, el indicador de resultado parcial
y los códigos de error sanitizados se conservan en el resultado descrito, en los
metadatos de las medidas de protección (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), en los metadatos de la caché de resultados y en los contadores de
fusión del puente. La ruta predeterminada de Video Bridge no invoca la conversión de voz a texto
ni descarga una segunda copia del contenido multimedia; sin esa pista explícita, sigue siendo
exclusivamente de vídeo.

**Retención de transcripciones (#12150 P1).** Esto se aplica automáticamente siempre que
Video Bridge (que es en sí mismo opcional) renderiza una indicación de transcripción; no existe ningún
indicador de retención independiente. Cuando una solicitud renderiza cualquier indicación de transcripción (un
`transcript` declarado por el llamador o un `audioTranscript` fusionado), la medida de protección la marca como
`videoBridgeObserved` y genera una copia oculta censurada de la descripción del vídeo:
un renderizado idéntico en el que el cuerpo de texto libre de cada indicación se sustituye por
`[redacted-video-transcript]`, construido mediante la sustitución del campo estructurado de la indicación
antes de ensamblar la cadena (nunca analizando el texto aplanado, por lo que ningún contenido de la indicación
—malicioso o normal, incluidos cuerpos que contengan `]`, como
`[inaudible]`/`[music]`— puede conservarse). El cuerpo de la solicitud del registro de llamadas persistido sustituye
cada parte de texto derivada del vídeo por esa copia oculta censurada, emparejada por igualdad de
contenido; el ancla `fullText` se vuelve a leer desde la carga útil finalizada de la medida de protección
previa a la llamada, por lo que la coincidencia sigue funcionando después de que medidas de protección posteriores de la cadena (los
enmascaradores de PII y credenciales, con prioridades 10/95) reescriban el texto de la descripción in situ y
después de que la inyección del prompt del sistema, del traspaso y de la memoria modifique la estructura del array de mensajes. El
cuerpo enviado al modelo no se modifica. Una solicitud observada tampoco rellena
ninguna Memory duradera (se omite tanto la extracción derivada de la solicitud como la derivada de la respuesta),
por lo que la propia respuesta del modelo no puede repetir el texto de la transcripción en Memory.

**Campos de vídeo sin procesar (#12430).** Cuando el puente está habilitado y se desconoce o no existe compatibilidad nativa con vídeo, los campos `transcript`/`audioTranscript` definidos también activan `videoBridgeObserved`, incluso después de un error de descripción o de un límite `maxVideos`. `null` y las cadenas vacías cuentan; los campos ausentes y los metadatos que no sean de vídeo no cuentan. Las copias retenidas censuran estos campos u omiten la solicitud, y se omiten las cachés y Memory.

En esas rutas alternativas, las indicaciones válidas del llamador se convierten en partes `text`/`input_text`
compatibles, en lugar de campos no estándar del proveedor. Ambas pistas proporcionadas en la solicitud
siguen siendo observaciones `client` no confiables, con una advertencia explícita de que el vídeo
no se describió y de que las marcas de tiempo no se verificaron con el contenido multimedia. Los límites existentes
de 256 indicaciones/64 KiB totales y por indicación se aplican conjuntamente a las dos pistas;
las marcas de tiempo deben respetar el límite máximo de 600 segundos del bróker y cualquier ventana de
enfoque proporcionada. Las pistas no válidas se descartan, no se reenvían como texto arbitrario; una pista
hermana válida aún puede utilizarse, salvo que se exceda su límite combinado. Los campos nulos/vacíos
no añaden texto. Esta ruta alternativa no añade ninguna obtención de contenido multimedia ni transcripción.
Los campos de extensión de la transcripción se eliminan del contenedor de vídeo alternativo y de sus
objetos `video_url`/`source`. La lista de elementos permitidos en la interfaz de OpenAI sigue siendo estricta; los contenedores de vídeo
cuya compatibilidad nativa se desconozca siguen estando disponibles y los destinos conocidos que solo admiten texto mantienen marcadores seguros.
Las copias ocultas de censura estructurada protegen el texto de transcripción añadido, mientras que la
solicitud original propiedad del llamador permanece sin cambios. Los destinos con compatibilidad nativa y los
puentes deshabilitados conservan su comportamiento de omisión actual.

Las copias retenidas adicionales utilizan la misma señal de solicitud observada. La instantánea sin procesar
de la solicitud del cliente anterior a las medidas de protección, la solicitud pendiente en memoria y el registro de
solicitudes rechazadas anticipadamente sustituyen de forma estructural los campos de transcripción en las partes de vídeo;
los prompts de cadena sintetizados por las etapas del pipeline y el traspaso de contexto se censuran
en el destino del cuerpo de solicitud persistido. El marcador persistido `video_content_removed`
hace que la continuación mediante `previous_response_id` falle de forma cerrada, en lugar de reconstruir
texto que se descartó intencionadamente. Si una solicitud observada pierde su
copia oculta de censura por parte antes del registro, o si incluso una sola de varias copias ocultas de vídeo
no coincide después de mutaciones posteriores de la solicitud, el cuerpo de la solicitud retenida se
omite por completo en lugar de conservar una transcripción parcialmente censurada.

Para una solicitud observada, una respuesta del modelo podría citar cualquier parte de la
transcripción sin un límite estructurado de indicación. Por tanto, su `responseBody` del registro de llamadas
persistido se sustituye por un marcador de omisión; el artefacto detallado del
pipeline (que puede incluir cuerpos del proveedor/cliente y fragmentos de streaming)
no se conserva. Las cachés semánticas, de idempotencia y de repetición de razonamiento
omiten las lecturas y escrituras para esa solicitud. La solicitud al proveedor y la respuesta
visible para el cliente permanecen sin cambios. Los bytes iniciales de keepalive se eliminan del búfer
temporal cuando se omite el artefacto detallado. La advertencia de EventStream con formato incorrecto de Kiro
solo informa del recuento de bytes de la carga útil, nunca de su contenido ni del error sin procesar
del analizador JSON.
Esto no afirma que se hayan auditado todos los diagnósticos no relacionados de proveedores/plugins;
la revisión más amplia de destinos de retención se sigue en #11658.

El ciclo de vida interno de `/api/modality-bridge/video/drilldown` es un sustrato de caché independiente, autenticado mediante loopback/token. Cada operación también requiere un ID principal opaco canónico. Antes de habilitar un consumidor de producción, este debe derivar dicho ID del tenant autenticado y nunca debe reenviar un valor seleccionado por el cliente. Las claves de caché vinculan ese principal con los IDs canónicos de sesión y referencia de vídeo, almacenan únicamente sus claves derivadas mediante SHA-256 y restringen tanto las lecturas como la eliminación al mismo principal. La caché almacena como máximo 16 fotogramas JPEG derivados por entrada, los hace caducar después de diez minutos y admite lecturas acotadas mediante `start`/`end` o la eliminación explícita de sesiones.

Cada principal está limitado a 16 entradas y 64 MiB de datos JPEG canónicos. Esos límites son independientes del máximo global de 64 entradas/256 MiB: la presión sobre la cuota del principal desaloja únicamente las entradas usadas menos recientemente de ese principal antes de considerar el desalojo LRU global. Las entradas caducadas se eliminan tanto de la contabilidad por principal como de la global cuando hay actividad en la caché, mientras que una cancelación o un fallo de validación no confirma un reemplazo parcial.

La caché rechaza Base64 no canónico, relleno excesivo, contenido multimedia que no sea JPEG, archivos JPEG malformados o truncados y archivos JPEG que generen una advertencia durante una decodificación acotada de la imagen completa con `sharp`. Vuelve a codificar cada imagen aceptada como JPEG canónico, obtiene la anchura y la altura de los bytes decodificados en lugar de confiar en los campos proporcionados por el consumidor y descarta cualquier byte políglota posterior en vez de conservarlo. Solo el búfer comprimido canónico acotado se contabiliza en ambas cuotas. El límite de transmisión JSON incluye la sobrecarga de Base64 correspondiente al máximo de 32 MiB de entrada decodificada. Cada derivación almacenada registra su formato/resolución JPEG validados, la política de muestreo, la versión de derivación, la hora de creación, el hash de contenido calculado por el servidor y la referencia principal con hash, junto con el hash de contenido principal del consumidor de confianza. La cancelación se comprueba entre las fases asíncronas de decodificación y cálculo de hash, antes de la confirmación atómica en la caché.

Este tramo aún no conecta un productor de producción con la ruta ni proporciona selección de variantes de múltiples resoluciones. Por tanto, la ruta transparente de solicitudes de Video Bridge no incurre en trabajo adicional, mientras que la derivación del principal vinculada al tenant y el ciclo de vida completo de múltiples resoluciones de FU-08 siguen siendo trabajo de seguimiento explícito, en lugar de documentarse como comportamiento completado.

Los fotogramas se subtitulan secuencialmente con el modelo de Video configurado. Una sobrescritura vacía de Video hereda la configuración de Vision; si ambas están vacías, el enrutador automático de Vision selecciona el modelo efectivo compatible con visión. Los subtítulos generados correctamente sustituyen la parte original por un prefijo estable `[Video description:` que también marca el texto como una observación no confiable derivada de contenido multimedia e indica a los modelos posteriores que no sigan las instrucciones encontradas en dicho contenido. Las claves de caché de los subtítulos de fotogramas incluyen los bytes JPEG, el prompt, la marca de tiempo y el modelo efectivo; solo se almacenan en caché los subtítulos generados correctamente. Las entradas de caché conservan el modelo productor que realmente tuvo éxito, incluido un modelo de respaldo; el puente informa de `mixed` cuando distintos fotogramas han sido producidos por modelos diferentes. Un acierto de caché reutiliza esa identidad del productor en lugar de volver a etiquetarla como el plan de enrutamiento solicitado. La caché de resultados del vídeo completo se indexa mediante cada entrada que modifica la salida: el prompt, el modelo efectivo, la política de muestreo, el número de fotogramas, el modo de análisis semántico, la huella SHA-256 de la indicación de enfoque normalizada, la ventana de enfoque, `transcript`, `audioTranscript` y el indicador de hoja de contactos. Por tanto, cambiar cualquiera de esas dimensiones produce un fallo de caché y nunca una reutilización obsoleta. La versión de la política de deduplicación visual, el umbral y el número acotado de fotogramas candidatos también son explícitos en la clave y los metadatos de la caché de resultados; por tanto, un cambio de política no puede reutilizar una descripción obsoleta del vídeo completo. Los metadatos v4 de la caché de resultados conservan el modo y la huella, pero nunca la tarea sin procesar del usuario. Los metadatos de las medidas de protección informan tanto del modo de análisis solicitado como del efectivo; un modo `focused` solicitado sin texto de usuario utilizable se informa como `full` efectivo.

La medida de protección extrae todas las partes de vídeo compatibles, pero no describe más de `modalityBridgeVideoMaxVideos`. Para un destino del que se haya demostrado que tiene `supportsVideo === false`, los vídeos fallidos y los que superan el límite se convierten en marcadores de texto seguros explícitos, de modo que no sobreviva ningún vídeo sin procesar. Cuando se desconoce la capacidad, esas partes conservan su contenedor de vídeo; cualquier transcripción de respaldo sigue la conversión de texto acotada descrita anteriormente. Los destinos con `supportsVideo === true` omiten el puente. La señal de cancelación de la solicitud del cliente se propaga a través de la descarga, la cola del bróker, los subprocesos y las llamadas de subtitulado; las cancelaciones detienen el procesamiento entre vídeos y nunca recurren al contenido multimedia sin procesar como alternativa permisiva.

La configuración de tiempo de ejecución está respaldada por la base de datos y validada mediante Zod:

| Clave                               | Valor predeterminado | Rango / comportamiento                                                                                     |
| ----------------------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`              | Runtime opcional, con activación explícita                                                                 |
| `modalityBridgeVideoAnalysisMode`   | `"full"`             | `full` conserva los subtítulos genéricos; `focused` usa contexto acotado y no confiable del último usuario |
| `modalityBridgeVideoModel`          | `""`                 | Hereda el modelo de Vision Bridge                                                                          |
| `modalityBridgeVideoFrameCount`     | `8`                  | 1–16                                                                                                       |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`          | `uniform`, `scene_aware` o `segment_aware` proporcional; si falla el detector, se recurre a `uniform`      |
| `modalityBridgeVideoMaxVideos`      | `1`                  | 1–4                                                                                                        |
| `modalityBridgeVideoTimeout`        | `120000`             | 1000–120000 ms                                                                                             |

Los valores heredados y persistidos del tiempo de espera de Video superiores a 120 segundos se limitan al
plazo del bróker; las nuevas escrituras de configuración que superen ese límite se rechazan.
`GET /api/modality-bridge/video/runtime` requiere una localidad de bucle invertido
confiable y marcada antes de la autenticación o el sondeo del runtime y, después, requiere autenticación
de administración. Solo devuelve `available`, las versiones saneadas de FFmpeg/ffprobe y un motivo fijo
cuando el runtime no está disponible. El endpoint interno de extracción no es
una API pública de carga: la saturación de la cola devuelve `503` más `Retry-After`, la desconexión
de un solicitante devuelve `499` y el plazo fijo del bróker devuelve `504`. Las respuestas convertidas añaden
`video->text;model=<visionModel>;parts=<videos>` al encabezado central
`x-omniroute-modality-bridge` sin eliminar los segmentos de Vision o Audio.

### Enmascarador de PII (`piiMasker.ts`)

Se ejecuta en **ambas** etapas.

- **`preCall`** clona la carga útil, recorre `system`, `messages`, `input` y
  `prompt` (incluidos los elementos que son cadenas de texto sin formato) y aplica `processPII()` (de
  `@/shared/utils/inputSanitizer`) a los campos `content`/`text` de tipo cadena. Cuando
  `PII_REDACTION_ENABLED=true`, la PII detectada se censura en la carga útil
  saliente. Esto es independiente de `INPUT_SANITIZER_MODE` (que solo controla
  la política de inyección de prompts). Cuando la censura está desactivada, la llamada registra los recuentos
  de detecciones sin reescribir el contenido.
- **`postCall`** clona en profundidad la respuesta, ejecuta `sanitizePIIResponse()` junto con
  el enmascarador de la estructura de la API Responses (`maskResponsesOutput` — abarca
  `output_text` y `output[].content[].text`). Si se produce alguna censura, la
  respuesta modificada reemplaza a la original.

La protección nunca bloquea; solo anota (`meta.detections`,
`meta.redacted`) o reescribe.

### Inyección de prompts (`promptInjection.ts`)

Detecta estructuras adversarias en el contenido proporcionado por el usuario y aplica la
política configurada. El comportamiento depende de las variables de entorno y las opciones del
constructor:

| Configuración     | Variable de entorno                                                                                   | Valor predeterminado | Efecto                                                                                                                                                                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Habilitado        | `INPUT_SANITIZER_ENABLED`                                                                             | `true`               | Cuando es `false`, la protección finaliza de inmediato.                                                                                                                                                                                          |
| Modo              | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`               | Política de inyección: `block`, `warn` o `log`. (`redact` se acepta por compatibilidad con versiones anteriores, pero **no** elimina el texto de inyección; la reescritura de PII de la solicitud se controla mediante `PII_REDACTION_ENABLED`.) |
| Umbral de bloqueo | Opción `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`               | Gravedad mínima necesaria para bloquear. Con el valor predeterminado, la gravedad media solo se observa.                                                                                                                                         |

**Precedencia del modo** (`getMode`): `options.mode` del solicitante →
anulación de la marca de funcionalidad de la **BD** `INJECTION_GUARD_MODE` (Panel de control → Configuración →
Marcas de funcionalidad) → variable de entorno `INJECTION_GUARD_MODE` → variable de entorno `INPUT_SANITIZER_MODE` →
`warn`. Por tanto, una anulación desde el panel de control prevalece sobre las variables de entorno, de modo que la interfaz de
Marcas de funcionalidad controla en vivo la protección en ejecución (sin reiniciar). La lectura de la BD es tolerante a fallos:
si se produce un error, la protección recurre al comportamiento basado en las variables de entorno y, cuando no
se establece ninguna anulación, el comportamiento es idéntico a la resolución basada únicamente en dichas variables.

Fuentes de detección:

1. `sanitizeRequest()` de `@/shared/utils/inputSanitizer` (conjunto compartido de detectores
   utilizado en otras partes del flujo de procesamiento).
2. `DEFAULT_GUARD_PATTERNS` integrado (actualmente `system_override_inline` y
   `markdown_system_block`, ambos con gravedad `high`).
3. `customPatterns` opcionales pasados mediante las opciones del constructor (cadenas, expresiones regulares
   o registros `{ name, pattern, severity }`).

Cuando `mode === "block"` **y** al menos una detección alcanza el umbral de
gravedad, `preCall` devuelve `{ block: true, message: "Request rejected:
suspicious content detected" }`. En los modos `warn`/`log`, la barrera de seguridad registra el evento, pero
permite la llamada. El asistente compartido `evaluatePromptInjection()` también se exporta
para los consumidores que necesiten evaluar prompts sin pasar por el registro.

**Límite de análisis (v3.8.20):** el detector solo inspecciona los **primeros 16 KB** del
texto combinado del prompt: `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) en
`src/shared/utils/inputSanitizer.ts`. Tanto `detectInjection()` como
`evaluatePromptInjection()` ejecutan `slice(0, MAX_INJECTION_SCAN_BYTES)` antes de iniciar
el bucle de patrones. Las directivas de inyección se encuentran cerca del inicio de una entrada, por lo que esto
limita el uso de CPU/GC de las expresiones regulares en cargas útiles de varios cientos de KB sin debilitar la detección (véanse
#3932, #4041).

### Enmascarador de credenciales (`credentialMasker.ts`)

Se ejecuta en **ambas** etapas, en último lugar en la cadena predeterminada (prioridad `95`). Censura
los patrones conocidos de claves de API/tokens secretos en la carga útil saliente (contenido de
mensajes, argumentos de llamadas a herramientas, resultados de herramientas) **y** en la respuesta del proveedor, de modo que una
credencial pegada en un prompt (o devuelta por el resultado de una herramienta) no se filtre
al proveedor ascendente ni de vuelta al cliente.

- **Solo mediante activación explícita**, siguiendo la misma convención que la censura de PII (relacionada con la regla estricta n.º 20):
  está deshabilitado salvo que `settings.credentialRedactionEnabled === true` **o**
  `CREDENTIAL_REDACTION_ENABLED=true`. Cuando está desactivado, la barrera de seguridad no hace nada:
  nunca bloquea ni reescribe.
- `redactCredentials()` recorre todo el árbol de la carga útil/respuesta (`walkValue()`,
  protegido contra la contaminación de prototipos y contra ciclos mediante `WeakSet`) y sustituye las coincidencias por
  un marcador `[REDACTED:<type>]`, clonando únicamente las ramas que realmente
  hayan cambiado.
- `CREDENTIAL_PATTERNS` abarca claves de proveedores de LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokens de VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), claves de pago (Stripe, Square), claves de
  servicios en la nube (clave de acceso de AWS, Twilio, SendGrid, Mailgun), claves privadas/JWT,
  cadenas de conexión que contienen credenciales (`mongodb://user:pass@...`, etc.) y
  un patrón genérico de valores de cabecera `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Las claves con formato de cabecera (`authorization`, `x-api-key`, `api-key`,
  `apikey`) se censuran estructuralmente (solo el valor, conservando el prefijo del esquema, como
  `Bearer `/`Basic `) en lugar de usar la expresión regular genérica de texto.
- La barrera de seguridad nunca bloquea; únicamente reescribe (`modifiedPayload` /
  `modifiedResponse`) y añade anotaciones (`meta.credentialsRedacted`, `meta.count`).

Protección contra regresiones: `tests/unit/credential-masker-guardrail.test.ts`.

## Contrato base (`base.ts`)

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
  block?: boolean; // true interrumpe inmediatamente la cadena
  message?: string; // se muestra cuando se bloquea
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // devuelto por preCall para reescribir la solicitud
  modifiedResponse?: TValue; // devuelto por postCall para reescribir la respuesta
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

Un mecanismo de protección indica que «no hay cambios» devolviendo `void`, `{}` o
`{ block: false }`. Devolver un `modifiedPayload`/`modifiedResponse` reemplaza
el valor que fluye por la cadena para los mecanismos de protección posteriores.
`signal?: AbortSignal` transmite el ciclo de vida del llamador a los mecanismos de protección. La cancelación de una solicitud es la excepción deliberada de apertura ante fallos: los puentes multimedia detienen el trabajo y realizan la limpieza sin restaurar los datos multimedia sin procesar en un destino que se sabe que no los admite.

## Registro (`registry.ts`)

La instancia singleton `guardrailRegistry` expone:

- `register(guardrail)` — añade un mecanismo de protección (o reemplaza uno según su nombre normalizado) y
  vuelve a ordenarlos por `priority` ascendente.
- `clear()` / `list()` — funciones auxiliares administrativas.
- `runPreCallHooks(payload, context)` — recorre los mecanismos de protección activos, pasa el
  payload a través de `modifiedPayload` y se detiene ante el primer `block: true`.
- `runPostCallHooks(response, context)` — el mismo flujo en el lado de la respuesta.
- `resetGuardrailsForTests({ registerDefaults })` — borra el estado y, opcionalmente,
  vuelve a registrar los valores predeterminados para lograr un aislamiento limpio de las pruebas.

Ambos ejecutores devuelven `{ blocked, payload|response, results, guardrail?, message? }`,
donde `results` es un array de registros `GuardrailExecutionResult` que incluyen
los campos `blocked`, `skipped`, `modified`, `error` y `meta` por cada mecanismo de protección,
útiles para el seguimiento.

### Desactivar mecanismos de protección por solicitud

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` recopila una
lista sin duplicados de nombres de mecanismos de protección que deben omitirse en la
solicitud actual. Fuentes (todas opcionales y combinadas):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` en el cuerpo de la solicitud (nivel superior)
- `metadata.disabledGuardrails` en el cuerpo de la solicitud
- Encabezado `x-omniroute-disabled-guardrails` (o el heredado
  `x-disabled-guardrails`)

Los valores pueden ser arrays de cadenas o una cadena separada por comas; los nombres se
normalizan a minúsculas en formato kebab-case (`pii_masker` → `pii-masker`). El resultado
se pasa mediante `context.disabledGuardrails` al registro, que omite
los mecanismos de protección coincidentes (`skipped: true` en `results`).

## Orden de ejecución

Para cada solicitud que pasa por `src/sse/handlers/chat.ts` y
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` crea la lista de omisiones a partir de la clave de API, el cuerpo
   y los encabezados.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` ejecuta las barreras de seguridad en orden
   ascendente de prioridad:
   - Las barreras de seguridad deshabilitadas se registran como `skipped`.
   - El método `preCall` de cada barrera de seguridad puede reescribir la carga útil mediante `modifiedPayload`.
   - El primer `block: true` interrumpe la cadena y el controlador devuelve
     una respuesta de rechazo de la barrera de seguridad.
3. La carga útil (posiblemente reescrita) pasa al enrutamiento combinado y al despacho
   ascendente.
4. Una vez creada la respuesta, `guardrailRegistry.runPostCallHooks(...)`
   ejecuta la misma cadena sobre la respuesta. En este caso, `block: true` descarta la respuesta
   ascendente.

Las barreras de seguridad que generan una excepción se registran con `error: <message>` y se anotan mediante
`logger.warn`, pero la cadena continúa; por diseño, se permite la operación en caso de fallo.

## Configuración

Variables de entorno leídas por las barreras de seguridad integradas:

| Variable                              | Utilizada por              | Efecto                                                                                                                                          |
| ------------------------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`         | Establézcala en `false` para deshabilitar por completo la detección.                                                                            |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`         | Política de inyección: `warn`, `block` o `log`. El valor heredado `redact` no reescribe el texto de la inyección.                               |
| `INJECTION_GUARD_MODE`                | `prompt-injection`         | Modo de la protección contra inyecciones; también es una marca de funcionalidad de la BD que **reemplaza** las variables de entorno (BD > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`         | Gravedad mínima que rechaza `MODE=block`: `high` (predeterminada), `medium` o `low`.                                                            |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`         | Alias heredado de `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                            |
| `PII_REDACTION_ENABLED`               | `pii-masker`               | Cuando es `true`, se oculta la PII de la solicitud (independientemente del modo de inyección).                                                  |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (descendente) | Controla el comportamiento del ocultador en las respuestas.                                                                                     |

Las barreras de seguridad de Modality Bridge leen la configuración en tiempo de ejecución del almacén
de ajustes respaldado por la BD (`getSettings()`), no de las variables de entorno. Las claves principales de Vision son
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` y
`modalityBridgeCacheMaxEntries`. Las claves heredadas
`visionBridge*` solo se aceptan como mecanismo alternativo de lectura durante un ciclo, según lo documentado;
las escrituras del panel usan las claves principales. Los valores predeterminados y el
resolutor alternativo se encuentran en `src/shared/constants/modalityBridgeDefaults.ts`, mientras que las constantes
heredadas se conservan en `src/shared/constants/visionBridgeDefaults.ts`.

Audio usa `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` y `modalityBridgeAudioMaxClips`, además de los ajustes compartidos
`modalityBridgeCache*`. Audio no tiene un mecanismo alternativo para claves heredadas porque estas
claves se introdujeron con el esquema de Modality Bridge.

Video usa `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` y
`modalityBridgeVideoTimeout`, además de los ajustes compartidos `modalityBridgeCache*`.
Está deshabilitado de forma predeterminada porque FFmpeg/ffprobe son dependencias operativas
opcionales y la descripción de fotogramas añade latencia y costes del modelo.

## Barreras de protección personalizadas

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

Pasos:

1. Cree `src/lib/guardrails/myGuardrail.ts` extendiendo `BaseGuardrail`.
2. Implemente `preCall` y/o `postCall`.
3. Regístrela durante la importación (incorpórela desde `registerDefaultGuardrails`) o
   llame a `guardrailRegistry.register(...)` en tiempo de ejecución; el registro reemplaza
   cualquier barrera de protección anterior que tenga el mismo nombre normalizado.
4. Añada pruebas en `tests/unit/` (ejemplos existentes:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Pruebas

Use `resetGuardrailsForTests()` entre pruebas para comenzar desde un estado conocido.
Pase `{ registerDefaults: false }` para comenzar con un registro vacío y
registrar únicamente las barreras de protección que se estén probando. Vision Bridge admite
inyección de dependencias (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge expone los
puntos de integración equivalentes para la configuración, las capacidades, la selección del modelo STT, las comprobaciones
de credenciales y la transcripción. Por lo tanto, las pruebas pueden ejercitar ambos flujos sin acceso
a la base de datos ni a la red.

## Véase también

- `src/lib/guardrails/` — implementación
- `src/shared/utils/inputSanitizer.ts` — detector compartido que permite
  detectar la inyección de prompts y enmascarar PII
- `src/shared/constants/visionBridgeDefaults.ts` — valores predeterminados de Vision Bridge y
  lista de modelos con puente forzado
- `src/shared/constants/modalityBridgeDefaults.ts` — valores predeterminados compartidos de ejecución de Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — capa ortogonal (disyuntor, períodos de espera)
- `docs/reference/ENVIRONMENT.md` — referencia completa de variables de entorno

## Cobertura de rutas y red team de la protección contra inyecciones (Fase 8 · Bloque D)

La protección contra inyecciones (`createInjectionGuard` / `withInjectionGuard`) cubre todas las rutas
que aceptan prompts de usuario. Respeta `INJECTION_GUARD_MODE` (el valor predeterminado `warn` = solo registra;
`block` = devuelve HTTP 400 `SECURITY_001`).

| Tipo              | Rutas                                                                                                                                                | Modo predeterminado |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Texto (existente) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                |
| Generativas       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                |
| Datos             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                |

La extracción de texto (`extractMessageContents`) cubre `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red team (nocturno, `nightly-llm-security.yml`):** promptfoo valida que cada ruta bloquee
el corpus OWASP-LLM con `INJECTION_GUARD_MODE=block`; garak ejecuta sondas (se omite si no hay un secreto).
`moderations` se incluye para mantener la coherencia; los operadores que utilicen el modo de bloqueo pueden excluirla mediante
`resolveDisabledGuardrails`.

El flujo de trabajo nocturno (`.github/workflows/nightly-llm-security.yml`, cron + ejecución
manual) tiene dos trabajos:

- **`promptfoo-guard` (bloqueante)** — ejecuta `promptfoo eval -c promptfooconfig.yaml`
  con `INJECTION_GUARD_MODE=block`. Cada caso adversario (p. ej., «ignora todas las
  instrucciones anteriores…», jailbreaks de estilo DAN) comprueba que la respuesta contenga
  `error.code === "SECURITY_001"`, es decir, que la protección haya rechazado realmente la solicitud.
- **`garak` (consultivo)** — ejecuta garak `--probes promptinject,dan,leakreplay`
  contra una instancia local de OmniRoute (`http://localhost:20128/v1`). Está condicionado a un
  secreto del proveedor (`PROMPTFOO_PROVIDER_KEY`); se omite sin errores y lleva el sufijo
  `|| true`, por lo que genera informes sin provocar fallos en CI.

La cobertura del auxiliar de protección (`createInjectionGuard` / `withInjectionGuard`)
abarca todas las rutas `/v1` que admiten prompts; el texto del prompt se obtiene de
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` mediante
`extractMessageContents()` en `src/shared/utils/inputSanitizer.ts`.
