import type { Block } from "@/components/BookViewer";

// ── Languages ────────────────────────────────────────────────────────────────
// English is the canonical/source language. Other languages may omit pages or
// whole chapters; the viewer falls back to English and shows a small notice.
// `cc` is the ISO 3166 alpha-2 country code used to fetch a flag image from
// flagcdn.com (works on every OS, unlike OS-rendered flag emojis).
export const LANGUAGES = [
  { code: "en", label: "English",    cc: "gb", dir: "ltr" as const },
  { code: "tr", label: "Türkçe",     cc: "tr", dir: "ltr" as const },
  { code: "de", label: "Deutsch",    cc: "de", dir: "ltr" as const },
  { code: "es", label: "Español",    cc: "es", dir: "ltr" as const },
  { code: "fr", label: "Français",   cc: "fr", dir: "ltr" as const },
  { code: "it", label: "Italiano",   cc: "it", dir: "ltr" as const },
  { code: "pt", label: "Português",  cc: "pt", dir: "ltr" as const },
  { code: "nl", label: "Nederlands", cc: "nl", dir: "ltr" as const },
  { code: "pl", label: "Polski",     cc: "pl", dir: "ltr" as const },
  { code: "ru", label: "Русский",    cc: "ru", dir: "ltr" as const },
  { code: "uk", label: "Українська", cc: "ua", dir: "ltr" as const },
  { code: "el", label: "Ελληνικά",   cc: "gr", dir: "ltr" as const },
  { code: "sv", label: "Svenska",    cc: "se", dir: "ltr" as const },
  { code: "ro", label: "Română",     cc: "ro", dir: "ltr" as const },
  { code: "cs", label: "Čeština",    cc: "cz", dir: "ltr" as const },
  { code: "hu", label: "Magyar",     cc: "hu", dir: "ltr" as const },
  { code: "id", label: "Bahasa Indonesia", cc: "id", dir: "ltr" as const },
  { code: "vi", label: "Tiếng Việt", cc: "vn", dir: "ltr" as const },
  { code: "hi", label: "हिन्दी",       cc: "in", dir: "ltr" as const },
  { code: "zh", label: "中文",        cc: "cn", dir: "ltr" as const },
  { code: "ja", label: "日本語",      cc: "jp", dir: "ltr" as const },
  { code: "ko", label: "한국어",      cc: "kr", dir: "ltr" as const },
  { code: "ar", label: "العربية",    cc: "sa", dir: "rtl" as const },
  { code: "he", label: "עברית",      cc: "il", dir: "rtl" as const },
  { code: "fa", label: "فارسی",      cc: "ir", dir: "rtl" as const },
];
export const flagUrl = (cc: string) => `https://flagcdn.com/24x18/${cc}.png`;
export type Lang = (typeof LANGUAGES)[number]["code"];
export const SOURCE_LANG: Lang = "en";

// ── UI strings (shell of the reader) ─────────────────────────────────────────
type UIStrings = {
  open: string; prev: string; next: string;
  cover_kicker: string; cover_subtitle: string;
  end_title: string; end_body: string;
  chapter: string;
  fallback_notice: string;
  legend: string;
  drag_hint: string;
};

export const UI: Record<Lang, UIStrings> = {
  en: { open: "Open the book", prev: "Prev", next: "Next",
    cover_kicker: "A MULTILINGUAL CODEX",
    cover_subtitle: "An Illustrated Guide to the Model Context Protocol",
    end_title: "The End", end_body: "Thank you for reading.", chapter: "Chapter",
    fallback_notice: "Translation pending — showing English.",
    legend: "💡 tip · 🎭 fun · 📜 note",
    drag_hint: "Drag a corner to turn the page" },
  tr: { open: "Kitabı aç", prev: "Önceki", next: "Sonraki",
    cover_kicker: "ÇOK DİLLİ BİR KİTAP",
    cover_subtitle: "Model Context Protocol için Resimli Rehber",
    end_title: "Son", end_body: "Okuduğunuz için teşekkürler.", chapter: "Bölüm",
    fallback_notice: "Çeviri henüz hazır değil — İngilizce gösteriliyor.",
    legend: "💡 ipucu · 🎭 eğlence · 📜 not",
    drag_hint: "Köşeden tutup sayfayı çevirin" },
  de: { open: "Buch öffnen", prev: "Zurück", next: "Weiter",
    cover_kicker: "EIN MEHRSPRACHIGER KODEX",
    cover_subtitle: "Ein illustrierter Leitfaden zum Model Context Protocol",
    end_title: "Ende", end_body: "Danke fürs Lesen.", chapter: "Kapitel",
    fallback_notice: "Übersetzung folgt — vorerst auf Englisch.",
    legend: "💡 Tipp · 🎭 Spaß · 📜 Notiz",
    drag_hint: "Ecke ziehen, um die Seite umzublättern" },
  es: { open: "Abrir el libro", prev: "Anterior", next: "Siguiente",
    cover_kicker: "UN CÓDICE MULTILINGÜE",
    cover_subtitle: "Una guía ilustrada del Model Context Protocol",
    end_title: "Fin", end_body: "Gracias por leer.", chapter: "Capítulo",
    fallback_notice: "Traducción pendiente — mostrando en inglés.",
    legend: "💡 consejo · 🎭 diversión · 📜 nota",
    drag_hint: "Arrastra una esquina para pasar la página" },
  fr: { open: "Ouvrir le livre", prev: "Précédent", next: "Suivant",
    cover_kicker: "UN CODEX MULTILINGUE",
    cover_subtitle: "Un guide illustré du Model Context Protocol",
    end_title: "Fin", end_body: "Merci d'avoir lu.", chapter: "Chapitre",
    fallback_notice: "Traduction à venir — affichage en anglais.",
    legend: "💡 astuce · 🎭 fun · 📜 note",
    drag_hint: "Tirez un coin pour tourner la page" },
  it: { open: "Apri il libro", prev: "Precedente", next: "Successivo",
    cover_kicker: "UN CODICE MULTILINGUE",
    cover_subtitle: "Una guida illustrata al Model Context Protocol",
    end_title: "Fine", end_body: "Grazie per la lettura.", chapter: "Capitolo",
    fallback_notice: "Traduzione in arrivo — mostrato in inglese.",
    legend: "💡 consiglio · 🎭 divertimento · 📜 nota",
    drag_hint: "Trascina un angolo per girare la pagina" },
  pt: { open: "Abrir o livro", prev: "Anterior", next: "Próximo",
    cover_kicker: "UM CÓDICE MULTILÍNGUE",
    cover_subtitle: "Um guia ilustrado do Model Context Protocol",
    end_title: "Fim", end_body: "Obrigado por ler.", chapter: "Capítulo",
    fallback_notice: "Tradução pendente — exibindo em inglês.",
    legend: "💡 dica · 🎭 diversão · 📜 nota",
    drag_hint: "Arraste um canto para virar a página" },
  nl: { open: "Open het boek", prev: "Vorige", next: "Volgende",
    cover_kicker: "EEN MEERTALIGE CODEX",
    cover_subtitle: "Een geïllustreerde gids voor het Model Context Protocol",
    end_title: "Einde", end_body: "Bedankt voor het lezen.", chapter: "Hoofdstuk",
    fallback_notice: "Vertaling volgt nog — Engelse versie getoond.",
    legend: "💡 tip · 🎭 leuk · 📜 notitie",
    drag_hint: "Sleep een hoek om de bladzijde om te slaan" },
  pl: { open: "Otwórz książkę", prev: "Poprzedni", next: "Następny",
    cover_kicker: "WIELOJĘZYCZNY KODEKS",
    cover_subtitle: "Ilustrowany przewodnik po Model Context Protocol",
    end_title: "Koniec", end_body: "Dziękujemy za przeczytanie.", chapter: "Rozdział",
    fallback_notice: "Tłumaczenie w przygotowaniu — wyświetlam po angielsku.",
    legend: "💡 wskazówka · 🎭 zabawa · 📜 notatka",
    drag_hint: "Przeciągnij róg, aby przewrócić stronę" },
  ru: { open: "Открыть книгу", prev: "Назад", next: "Вперёд",
    cover_kicker: "МНОГОЯЗЫЧНЫЙ КОДЕКС",
    cover_subtitle: "Иллюстрированное руководство по Model Context Protocol",
    end_title: "Конец", end_body: "Спасибо за чтение.", chapter: "Глава",
    fallback_notice: "Перевод в работе — показан английский.",
    legend: "💡 совет · 🎭 веселье · 📜 заметка",
    drag_hint: "Потяните за угол, чтобы перевернуть страницу" },
  uk: { open: "Відкрити книгу", prev: "Назад", next: "Далі",
    cover_kicker: "БАГАТОМОВНИЙ КОДЕКС",
    cover_subtitle: "Ілюстрований посібник з Model Context Protocol",
    end_title: "Кінець", end_body: "Дякуємо за читання.", chapter: "Розділ",
    fallback_notice: "Переклад готується — показано англійською.",
    legend: "💡 порада · 🎭 розвага · 📜 нотатка",
    drag_hint: "Потягніть за ріг, щоб перегорнути сторінку" },
  el: { open: "Άνοιγμα βιβλίου", prev: "Προηγ.", next: "Επόμ.",
    cover_kicker: "ΕΝΑΣ ΠΟΛΥΓΛΩΣΣΟΣ ΚΩΔΙΚΑΣ",
    cover_subtitle: "Ένας εικονογραφημένος οδηγός για το Model Context Protocol",
    end_title: "Τέλος", end_body: "Ευχαριστούμε για την ανάγνωση.", chapter: "Κεφάλαιο",
    fallback_notice: "Η μετάφραση εκκρεμεί — εμφάνιση στα αγγλικά.",
    legend: "💡 συμβουλή · 🎭 διασκέδαση · 📜 σημείωση",
    drag_hint: "Σύρετε μια γωνία για να γυρίσετε σελίδα" },
  sv: { open: "Öppna boken", prev: "Föreg.", next: "Nästa",
    cover_kicker: "EN FLERSPRÅKIG KODEX",
    cover_subtitle: "En illustrerad guide till Model Context Protocol",
    end_title: "Slut", end_body: "Tack för att du läste.", chapter: "Kapitel",
    fallback_notice: "Översättning på gång — visar engelska.",
    legend: "💡 tips · 🎭 kul · 📜 notis",
    drag_hint: "Dra i ett hörn för att bläddra" },
  ro: { open: "Deschide cartea", prev: "Înapoi", next: "Înainte",
    cover_kicker: "UN CODEX MULTILINGV",
    cover_subtitle: "Un ghid ilustrat al Model Context Protocol",
    end_title: "Sfârșit", end_body: "Mulțumim pentru lectură.", chapter: "Capitolul",
    fallback_notice: "Traducerea urmează — afișat în engleză.",
    legend: "💡 sfat · 🎭 distracție · 📜 notă",
    drag_hint: "Trage de un colț pentru a întoarce pagina" },
  cs: { open: "Otevřít knihu", prev: "Zpět", next: "Dále",
    cover_kicker: "VÍCEJAZYČNÝ KODEX",
    cover_subtitle: "Ilustrovaný průvodce protokolem Model Context Protocol",
    end_title: "Konec", end_body: "Děkujeme za přečtení.", chapter: "Kapitola",
    fallback_notice: "Překlad se připravuje — zobrazeno anglicky.",
    legend: "💡 tip · 🎭 zábava · 📜 poznámka",
    drag_hint: "Přetáhněte roh pro otočení stránky" },
  hu: { open: "Könyv megnyitása", prev: "Előző", next: "Következő",
    cover_kicker: "TÖBBNYELVŰ KÓDEX",
    cover_subtitle: "Illusztrált útmutató a Model Context Protocolhoz",
    end_title: "Vége", end_body: "Köszönjük az olvasást.", chapter: "Fejezet",
    fallback_notice: "Fordítás folyamatban — angolul jelenik meg.",
    legend: "💡 tipp · 🎭 móka · 📜 jegyzet",
    drag_hint: "Húzza a sarkot a lapozáshoz" },
  id: { open: "Buka buku", prev: "Sebelumnya", next: "Berikutnya",
    cover_kicker: "KODEKS MULTIBAHASA",
    cover_subtitle: "Panduan bergambar Model Context Protocol",
    end_title: "Tamat", end_body: "Terima kasih sudah membaca.", chapter: "Bab",
    fallback_notice: "Terjemahan menyusul — ditampilkan dalam bahasa Inggris.",
    legend: "💡 tip · 🎭 seru · 📜 catatan",
    drag_hint: "Tarik sudut untuk membalik halaman" },
  vi: { open: "Mở sách", prev: "Trước", next: "Tiếp",
    cover_kicker: "CUỐN SÁCH ĐA NGÔN NGỮ",
    cover_subtitle: "Hướng dẫn minh họa về Model Context Protocol",
    end_title: "Kết thúc", end_body: "Cảm ơn bạn đã đọc.", chapter: "Chương",
    fallback_notice: "Bản dịch sắp ra mắt — đang hiển thị tiếng Anh.",
    legend: "💡 mẹo · 🎭 vui · 📜 ghi chú",
    drag_hint: "Kéo góc để lật trang" },
  hi: { open: "किताब खोलें", prev: "पिछला", next: "अगला",
    cover_kicker: "बहुभाषी ग्रंथ",
    cover_subtitle: "Model Context Protocol की सचित्र मार्गदर्शिका",
    end_title: "समाप्त", end_body: "पढ़ने के लिए धन्यवाद।", chapter: "अध्याय",
    fallback_notice: "अनुवाद लंबित — अंग्रेज़ी दिखाई जा रही है।",
    legend: "💡 सुझाव · 🎭 मज़ा · 📜 नोट",
    drag_hint: "पन्ना पलटने के लिए कोना खींचें" },
  zh: { open: "打开书", prev: "上一页", next: "下一页",
    cover_kicker: "多语言典籍",
    cover_subtitle: "Model Context Protocol 图解指南",
    end_title: "完", end_body: "感谢阅读。", chapter: "第",
    fallback_notice: "翻译筹备中 — 当前显示英文。",
    legend: "💡 提示 · 🎭 趣味 · 📜 备注",
    drag_hint: "拖动书角翻页" },
  ja: { open: "本を開く", prev: "前へ", next: "次へ",
    cover_kicker: "多言語コーデックス",
    cover_subtitle: "Model Context Protocol のイラスト入りガイド",
    end_title: "おわり", end_body: "お読みいただきありがとうございます。", chapter: "第",
    fallback_notice: "翻訳準備中 — 英語で表示しています。",
    legend: "💡 ヒント · 🎭 たのしみ · 📜 メモ",
    drag_hint: "角をドラッグしてページをめくる" },
  ko: { open: "책 열기", prev: "이전", next: "다음",
    cover_kicker: "다국어 코덱스",
    cover_subtitle: "Model Context Protocol 일러스트 가이드",
    end_title: "끝", end_body: "읽어 주셔서 감사합니다.", chapter: "장",
    fallback_notice: "번역 준비 중 — 영어로 표시합니다.",
    legend: "💡 팁 · 🎭 재미 · 📜 메모",
    drag_hint: "모서리를 끌어 페이지를 넘기세요" },
  ar: { open: "افتح الكتاب", prev: "السابق", next: "التالي",
    cover_kicker: "كتاب متعدد اللغات",
    cover_subtitle: "دليل مصوّر لبروتوكول سياق النموذج (MCP)",
    end_title: "النهاية", end_body: "شكرًا للقراءة.", chapter: "الفصل",
    fallback_notice: "الترجمة قيد الإعداد — يتم عرض النص الإنجليزي.",
    legend: "💡 نصيحة · 🎭 طرفة · 📜 ملاحظة",
    drag_hint: "اسحب الزاوية لتقليب الصفحة" },
  he: { open: "פתח את הספר", prev: "הקודם", next: "הבא",
    cover_kicker: "ספר רב-לשוני",
    cover_subtitle: "מדריך מאויר ל-Model Context Protocol",
    end_title: "סוף", end_body: "תודה על הקריאה.", chapter: "פרק",
    fallback_notice: "התרגום בהכנה — מוצג באנגלית.",
    legend: "💡 טיפ · 🎭 כיף · 📜 הערה",
    drag_hint: "גרור פינה כדי להפוך דף" },
  fa: { open: "باز کردن کتاب", prev: "قبلی", next: "بعدی",
    cover_kicker: "کتاب چندزبانه",
    cover_subtitle: "راهنمای مصوّر Model Context Protocol",
    end_title: "پایان", end_body: "از مطالعه شما سپاسگزاریم.", chapter: "فصل",
    fallback_notice: "ترجمه در حال آماده‌سازی است — اکنون انگلیسی نمایش داده می‌شود.",
    legend: "💡 نکته · 🎭 سرگرمی · 📜 یادداشت",
    drag_hint: "گوشه را بکشید تا صفحه ورق بخورد" },
};

// ── Content types ────────────────────────────────────────────────────────────
export type I18n<T> = { en: T } & Partial<Record<Lang, T>>;

export interface ChapterPage { body: I18n<Block[]>; }
export interface Chapter {
  id: number;
  title: I18n<string>;
  tagline: I18n<string>;
  pages: ChapterPage[];
}

export function pick<T>(field: I18n<T>, lang: Lang): { value: T; isFallback: boolean } {
  const v = field[lang];
  if (v !== undefined) return { value: v, isFallback: false };
  return { value: field.en, isFallback: lang !== SOURCE_LANG };
}

// ── Mermaid diagrams (kept in English so labels stay clean) ──────────────────
const diagramTopology = `
flowchart TD
    subgraph HOST["🏠 MCP Host (Chat App / IDE)"]
      C1["MCP Client #1"]
      C2["MCP Client #2"]
    end
    HOST <-->|MCP Protocol| S1["🛠️ MCP Server A"]
    HOST <-->|MCP Protocol| S2["🛠️ MCP Server B"]
    S1 --> DB[("🗄️ Database")]
    S1 --> API[("🌐 REST/GraphQL API")]
    S2 --> FS[("📁 Local Files")]
    S2 --> CODE[("💻 Source Code")]
`;

const diagramFlow = `
sequenceDiagram
    participant U as 👤 User
    participant H as 🏠 Host + Client
    participant L as 🧠 LLM
    participant S as 🛠️ MCP Server
    participant D as 🗄️ Data / API
    U->>H: "How many customers do I have?"
    H->>S: list tools?
    S-->>H: [getCustomers, getWeather, ...]
    H->>L: question + tool list
    L-->>H: "use getCustomers"
    H->>S: call getCustomers()
    S->>D: SQL / HTTP
    D-->>S: result
    S-->>H: tool result
    H->>L: result + question
    L-->>H: final answer
    H-->>U: "You have 1,284 customers."
`;

// ── Chapter 2 diagrams ───────────────────────────────────────────────────────
const diagramUsbC = `
flowchart LR
    subgraph LAP["💻 Your AI App (MCP Host)"]
      C1["MCP Client"]
    end
    LAP <-->|"🔌 MCP (the USB-C)"| S1["🛠️ Warehouse Inventory Server"]
    LAP <-->|"🔌 MCP"| S2["🛠️ Support Tickets Server"]
    LAP <-->|"🔌 MCP"| S3["🛠️ Analytics Server"]
    LAP <-->|"🔌 MCP"| S4["🛠️ Translation Server"]
`;

const diagramPrimitives = `
flowchart TD
    S["🛠️ MCP Server"]
    S --> T["🧰 Tools<br/>(actions the agent can call)"]
    S --> R["📚 Resources<br/>(read-only data the agent can fetch)"]
    S --> P["📝 Prompt Templates<br/>(ready-made prompt patterns)"]
    T --> T1["convertCurrency(amount, from, to)"]
    T --> T2["bookMeetingRoom(roomId, when)"]
    R --> R1["doc://policies/refund.md"]
    R --> R2["db://schema/inventory"]
    P --> P1["draft-release-notes"]
`;

const diagramLayers = `
flowchart LR
    A["🤖 AI Agent"] -->|MCP| M["🛠️ MCP Server<br/>(Ticketing wrapper)"]
    M -->|REST / HTTP| G["🌐 Ticketing REST API"]
    G --> D[("🗄️ Ticketing data")]
    style M fill:#f5ecd7,stroke:#6b1e2b
    style G fill:#eef,stroke:#335
`;

// ── CHAPTERS ─────────────────────────────────────────────────────────────────
export const chapters: Chapter[] = [
  {
    id: 1,
    title: {
      en: "What on Earth is MCP?",
      tr: "MCP de Neyin Nesi?",
      de: "Was um alles in der Welt ist MCP?",
      es: "¿Qué demonios es MCP?",
      fr: "Mais c'est quoi, MCP ?",
      it: "Ma cos'è di preciso MCP?",
      pt: "Afinal, o que é MCP?",
      ru: "Что вообще такое MCP?",
      zh: "MCP 到底是什么？",
      ja: "MCPって一体なに？",
      ar: "ما هو MCP بالضبط؟",
    },
    tagline: {
      en: "A friendly first look at the Model Context Protocol.",
      tr: "Model Context Protocol'e dostça bir ilk bakış.",
      de: "Ein freundlicher erster Blick auf das Model Context Protocol.",
      es: "Una primera mirada amistosa al Model Context Protocol.",
      fr: "Un premier regard amical sur le Model Context Protocol.",
      it: "Un primo sguardo amichevole al Model Context Protocol.",
      pt: "Um primeiro olhar amigável sobre o Model Context Protocol.",
      ru: "Дружелюбное знакомство с Model Context Protocol.",
      zh: "用轻松的视角第一次认识 Model Context Protocol。",
      ja: "Model Context Protocol への、やさしい最初の一歩。",
      ar: "نظرة أولى ودودة على بروتوكول سياق النموذج.",
    },
    pages: [
      // ── Page 1 ──
      {
        body: {
          en: [
            { t: "h2", v: "Once upon an AI agent…" },
            { t: "p", v: "Imagine you have built a smart AI assistant. It can talk, it can think, it can write poems about your cat. But the moment you ask it a real-world question — 'How many orders did we get today?' — it just stares back, blinking. Why? Because it has no hands. It cannot reach your database, your APIs, or your files." },
            { t: "p", v: "MCP, which stands for Model Context Protocol, is the polite handshake that finally gives your AI a pair of hands. It is an open standard that lets AI agents talk to data sources — databases, APIs, file systems and more — in the same way, every time." },
            { t: "fun", v: "Think of MCP as a universal travel adapter. One plug, many sockets. Your agent stops carrying a suitcase full of weird cables." },
          ],
          tr: [
            { t: "h2", v: "Bir varmış, bir AI ajanı varmış…" },
            { t: "p", v: "Diyelim ki çok akıllı bir AI asistanı yaptınız. Konuşuyor, düşünüyor, hatta kedinize şiir bile yazıyor. Ama ona gerçek bir soru sorduğunuzda — 'Bugün kaç sipariş geldi?' — gözleri kocaman açılıyor. Çünkü onun elleri yok. Ne veritabanınıza, ne API'lerinize, ne de dosyalarınıza uzanabiliyor." },
            { t: "p", v: "MCP yani Model Context Protocol, AI'ınıza nihayet bir çift el veren kibar el sıkışmanın adı. Açık bir standart: ajanların; veritabanları, API'ler ve dosya sistemleri gibi veri kaynaklarıyla her seferinde aynı şekilde konuşmasını sağlar." },
            { t: "fun", v: "MCP'yi evrensel bir seyahat adaptörü gibi düşünün. Tek fiş, bir sürü priz. Ajanınız artık valiz dolusu garip kablo taşımıyor." },
          ],
          de: [
            { t: "h2", v: "Es war einmal ein KI-Agent…" },
            { t: "p", v: "Stell dir vor, du hast einen klugen KI-Assistenten gebaut. Er kann reden, denken und sogar Gedichte über deine Katze schreiben. Doch in dem Moment, in dem du eine echte Frage stellst — 'Wie viele Bestellungen kamen heute rein?' — schaut er dich nur an und blinzelt. Warum? Weil er keine Hände hat. Er kommt nicht an deine Datenbank, deine APIs oder deine Dateien." },
            { t: "p", v: "MCP, kurz für Model Context Protocol, ist genau dieser höfliche Händedruck, der deiner KI endlich ein Paar Hände gibt. Es ist ein offener Standard, mit dem KI-Agenten immer auf dieselbe Weise mit Datenquellen — Datenbanken, APIs, Dateisystemen und mehr — sprechen können." },
            { t: "fun", v: "Stell dir MCP als universellen Reiseadapter vor. Ein Stecker, viele Steckdosen. Dein Agent muss keinen Koffer voller seltsamer Kabel mehr mitschleppen." },
          ],
          es: [
            { t: "h2", v: "Érase una vez un agente de IA…" },
            { t: "p", v: "Imagina que has creado un asistente de IA muy listo. Sabe hablar, sabe pensar e incluso escribe poemas sobre tu gato. Pero en cuanto le haces una pregunta del mundo real — '¿Cuántos pedidos hemos recibido hoy?' — se queda mirándote sin más. ¿Por qué? Porque no tiene manos. No puede tocar tu base de datos, tus APIs ni tus archivos." },
            { t: "p", v: "MCP, que significa Model Context Protocol, es ese apretón de manos educado que por fin le da unas manos a tu IA. Es un estándar abierto que permite a los agentes hablar con fuentes de datos — bases de datos, APIs, sistemas de archivos y más — siempre de la misma manera." },
            { t: "fun", v: "Piensa en MCP como un adaptador de viaje universal. Un solo enchufe, muchas tomas. Tu agente deja de cargar con una maleta llena de cables raros." },
          ],
          fr: [
            { t: "h2", v: "Il était une fois un agent d'IA…" },
            { t: "p", v: "Imagine que tu as créé un assistant IA très malin. Il parle, il réfléchit, il écrit même des poèmes sur ton chat. Mais dès que tu lui poses une vraie question — « Combien de commandes avons-nous reçues aujourd'hui ? » — il te regarde en clignant des yeux. Pourquoi ? Parce qu'il n'a pas de mains. Il ne peut atteindre ni ta base de données, ni tes APIs, ni tes fichiers." },
            { t: "p", v: "MCP, c'est-à-dire Model Context Protocol, est précisément cette poignée de main polie qui donne enfin une paire de mains à ton IA. C'est un standard ouvert qui permet aux agents de parler aux sources de données — bases de données, APIs, systèmes de fichiers, etc. — toujours de la même manière." },
            { t: "fun", v: "Vois MCP comme un adaptateur de voyage universel. Une seule fiche, plein de prises. Ton agent arrête de trimballer une valise pleine de câbles bizarres." },
          ],
          it: [
            { t: "h2", v: "C'era una volta un agente di IA…" },
            { t: "p", v: "Immagina di aver costruito un assistente di IA molto sveglio. Sa parlare, sa pensare, scrive perfino poesie sul tuo gatto. Ma appena gli fai una domanda concreta — 'Quanti ordini abbiamo ricevuto oggi?' — ti guarda e basta. Perché? Perché non ha mani. Non può raggiungere il tuo database, le tue API o i tuoi file." },
            { t: "p", v: "MCP, che sta per Model Context Protocol, è proprio quella stretta di mano educata che finalmente regala un paio di mani alla tua IA. È uno standard aperto che permette agli agenti di parlare con le sorgenti dati — database, API, file system e altro — sempre nello stesso modo." },
            { t: "fun", v: "Pensa a MCP come a un adattatore da viaggio universale. Una spina, tante prese. Il tuo agente smette di portarsi dietro una valigia di cavi strani." },
          ],
          pt: [
            { t: "h2", v: "Era uma vez um agente de IA…" },
            { t: "p", v: "Imagine que você construiu um assistente de IA bem esperto. Ele fala, pensa e até escreve poemas sobre o seu gato. Mas, no momento em que você faz uma pergunta do mundo real — 'Quantos pedidos recebemos hoje?' — ele só fica olhando. Por quê? Porque não tem mãos. Não consegue alcançar o seu banco de dados, suas APIs ou seus arquivos." },
            { t: "p", v: "MCP, sigla para Model Context Protocol, é exatamente aquele aperto de mão educado que finalmente dá um par de mãos à sua IA. É um padrão aberto que permite que agentes conversem com fontes de dados — bancos, APIs, sistemas de arquivos e mais — sempre da mesma forma." },
            { t: "fun", v: "Pense em MCP como um adaptador universal de viagem. Um plugue, várias tomadas. Seu agente para de carregar uma mala cheia de cabos estranhos." },
          ],
          ru: [
            { t: "h2", v: "Жил-был AI-агент…" },
            { t: "p", v: "Представьте: вы собрали умного AI-ассистента. Он умеет говорить, думать и даже сочинять стихи про вашего кота. Но стоит задать ему реальный вопрос — «Сколько заказов мы получили сегодня?» — и он лишь моргает в ответ. Почему? Потому что у него нет рук. Он не может дотянуться ни до базы данных, ни до API, ни до ваших файлов." },
            { t: "p", v: "MCP, или Model Context Protocol, — это то самое вежливое рукопожатие, которое наконец-то даёт ИИ пару рук. Это открытый стандарт, позволяющий агентам общаться с источниками данных — БД, API, файловыми системами и не только — всегда одинаково." },
            { t: "fun", v: "Считайте MCP универсальным дорожным переходником. Одна вилка, много розеток. Агенту больше не нужно таскать чемодан странных кабелей." },
          ],
          zh: [
            { t: "h2", v: "从前有一个 AI 智能体……" },
            { t: "p", v: "想象你做了一个聪明的 AI 助手。它会聊天、会思考，甚至能给你的猫写诗。可一旦你问它一个现实问题——“我们今天收到多少订单？”——它就只会眨着眼看你。为什么？因为它没有手。它够不到你的数据库、你的 API，也碰不了你的文件。" },
            { t: "p", v: "MCP，全称 Model Context Protocol，就是那次终于给你的 AI 装上一双手的礼貌握手。它是一个开放标准，让 AI 智能体每次都以同样的方式与数据库、API、文件系统等数据源对话。" },
            { t: "fun", v: "把 MCP 想成一个万能旅行转接头：一个插头，多种插座。你的智能体再也不用拖着一堆奇怪的电线到处跑。" },
          ],
          ja: [
            { t: "h2", v: "あるところに AI エージェントがいました…" },
            { t: "p", v: "賢い AI アシスタントを作ったとしましょう。話せて、考えられて、あなたの猫について詩まで書けます。ところが「今日の注文は何件？」のような現実的な質問をした瞬間、ぱちぱちと瞬きするだけ。なぜでしょう？手がないからです。データベースにも、API にも、ファイルにも届きません。" },
            { t: "p", v: "MCP——Model Context Protocol の略——は、その AI にようやく一対の手を差し出す、礼儀正しい握手のような存在です。エージェントがデータベース、API、ファイルシステムなどのデータソースと、いつも同じ方法で会話できるようにするオープン標準です。" },
            { t: "fun", v: "MCP は万能トラベルアダプターのようなもの。プラグはひとつ、コンセントはたくさん。エージェントはもう変なケーブルでいっぱいのスーツケースを持ち歩かなくて済みます。" },
          ],
          ar: [
            { t: "h2", v: "كان يا ما كان… وكيل ذكاء اصطناعي" },
            { t: "p", v: "تخيّل أنك بنيت مساعدًا ذكيًا بالذكاء الاصطناعي. يتكلم، يفكّر، بل ويكتب قصائد عن قطّتك. لكن ما إن تسأله سؤالًا واقعيًا — «كم طلبًا وصلنا اليوم؟» — حتى يحدّق فيك بصمت. لماذا؟ لأنه بلا يدين. لا يستطيع الوصول إلى قاعدة بياناتك ولا إلى واجهاتك البرمجية ولا إلى ملفاتك." },
            { t: "p", v: "MCP، أي Model Context Protocol، هو تلك المصافحة المهذّبة التي تمنح ذكاءك الاصطناعي يدين أخيرًا. إنه معيار مفتوح يتيح للوكلاء التحدث مع مصادر البيانات — قواعد البيانات وواجهات API وأنظمة الملفات وغيرها — بالطريقة نفسها في كل مرة." },
            { t: "fun", v: "تخيّل MCP كمحوّل سفر عالمي: قابس واحد، ومقابس كثيرة. لم يعد على وكيلك حمل حقيبة مليئة بالأسلاك الغريبة." },
          ],
        },
      },
      // ── Page 2 ──
      {
        body: {
          en: [
            { t: "h2", v: "The Three Heroes of the Story" },
            { t: "p", v: "Every MCP adventure has three main characters:" },
            { t: "ul", v: [
              "🏠 The Host — the app you actually use (a chat app, an IDE assistant, a desktop tool).",
              "📞 The Client — lives inside the host and knows how to speak MCP. One host can carry many clients.",
              "🛠️ The Server — sits next to your data and offers a menu of tools the agent can call.",
            ] },
            { t: "h3", v: "How they sit together" },
            { t: "mermaid", v: diagramTopology },
            { t: "tip", v: "A host can connect to as many servers as it wants — one for your database, one for GitHub, one for your weather data… they just keep showing up like friendly waiters." },
          ],
          tr: [
            { t: "h2", v: "Hikâyemizin Üç Kahramanı" },
            { t: "p", v: "Her MCP macerasında üç ana karakter vardır:" },
            { t: "ul", v: [
              "🏠 Host — sizin kullandığınız uygulama (sohbet uygulaması, IDE asistanı, masaüstü aracı).",
              "📞 Client — host'un içinde yaşar ve MCP dilini bilir. Bir host birden fazla client taşıyabilir.",
              "🛠️ Server — verinizin yanında oturur, ajana sunabileceği bir 'araç menüsü' tutar.",
            ] },
            { t: "h3", v: "Hep birlikte nasıl duruyorlar?" },
            { t: "mermaid", v: diagramTopology },
            { t: "tip", v: "Bir host istediği kadar server'a bağlanabilir: biri veritabanı için, biri GitHub için, biri hava durumu için… Hepsi kibar garsonlar gibi sırayla gelir." },
          ],
          de: [
            { t: "h2", v: "Die drei Helden der Geschichte" },
            { t: "p", v: "Jedes MCP-Abenteuer hat drei Hauptfiguren:" },
            { t: "ul", v: [
              "🏠 Der Host — die App, die du wirklich benutzt (Chat-App, IDE-Assistent, Desktop-Tool).",
              "📞 Der Client — sitzt im Host und beherrscht MCP. Ein Host kann viele Clients tragen.",
              "🛠️ Der Server — sitzt bei deinen Daten und bietet dem Agenten eine Werkzeug-Speisekarte an.",
            ] },
            { t: "h3", v: "So sitzen sie zusammen" },
            { t: "mermaid", v: diagramTopology },
            { t: "tip", v: "Ein Host darf so viele Server anbinden, wie er möchte — einen für die Datenbank, einen für GitHub, einen fürs Wetter… sie erscheinen wie freundliche Kellner." },
          ],
          es: [
            { t: "h2", v: "Los tres héroes de la historia" },
            { t: "p", v: "Toda aventura de MCP tiene tres personajes principales:" },
            { t: "ul", v: [
              "🏠 El Host — la aplicación que realmente usas (chat, asistente de IDE, herramienta de escritorio).",
              "📞 El Cliente — vive dentro del host y sabe hablar MCP. Un host puede llevar varios clientes.",
              "🛠️ El Servidor — se sienta junto a tus datos y ofrece un menú de herramientas que el agente puede llamar.",
            ] },
            { t: "h3", v: "Cómo se sientan juntos" },
            { t: "mermaid", v: diagramTopology },
            { t: "tip", v: "Un host puede conectarse a todos los servidores que quiera: uno para tu base de datos, otro para GitHub, otro para el tiempo… aparecen como camareros amables." },
          ],
          fr: [
            { t: "h2", v: "Les trois héros de l'histoire" },
            { t: "p", v: "Chaque aventure MCP a trois personnages principaux :" },
            { t: "ul", v: [
              "🏠 L'Hôte — l'application que tu utilises (chat, assistant IDE, outil de bureau).",
              "📞 Le Client — vit dans l'hôte et sait parler MCP. Un hôte peut héberger plusieurs clients.",
              "🛠️ Le Serveur — se tient près de tes données et propose un menu d'outils que l'agent peut appeler.",
            ] },
            { t: "h3", v: "Comment ils s'assoient ensemble" },
            { t: "mermaid", v: diagramTopology },
            { t: "tip", v: "Un hôte peut se brancher à autant de serveurs qu'il veut : un pour la base, un pour GitHub, un pour la météo… ils arrivent comme des serveurs aimables." },
          ],
          it: [
            { t: "h2", v: "I tre eroi della storia" },
            { t: "p", v: "Ogni avventura MCP ha tre personaggi principali:" },
            { t: "ul", v: [
              "🏠 L'Host — l'app che usi davvero (chat, assistente IDE, strumento desktop).",
              "📞 Il Client — vive dentro l'host e parla MCP. Un host può ospitare più client.",
              "🛠️ Il Server — sta accanto ai tuoi dati e offre un menù di strumenti che l'agente può chiamare.",
            ] },
            { t: "h3", v: "Come stanno insieme" },
            { t: "mermaid", v: diagramTopology },
            { t: "tip", v: "Un host può collegarsi a tutti i server che vuole: uno per il database, uno per GitHub, uno per il meteo… si presentano come camerieri gentili." },
          ],
          pt: [
            { t: "h2", v: "Os três heróis da história" },
            { t: "p", v: "Toda aventura MCP tem três personagens principais:" },
            { t: "ul", v: [
              "🏠 O Host — o app que você realmente usa (chat, assistente de IDE, ferramenta de desktop).",
              "📞 O Cliente — vive dentro do host e sabe falar MCP. Um host pode levar vários clientes.",
              "🛠️ O Servidor — fica ao lado dos seus dados e oferece um cardápio de ferramentas para o agente chamar.",
            ] },
            { t: "h3", v: "Como eles se sentam juntos" },
            { t: "mermaid", v: diagramTopology },
            { t: "tip", v: "Um host pode se conectar a quantos servidores quiser: um para o banco, outro para o GitHub, outro para o clima… aparecem como garçons gentis." },
          ],
          ru: [
            { t: "h2", v: "Три героя нашей истории" },
            { t: "p", v: "В каждом MCP-приключении три главных персонажа:" },
            { t: "ul", v: [
              "🏠 Хост — приложение, которым вы реально пользуетесь (чат, ассистент в IDE, десктоп-инструмент).",
              "📞 Клиент — живёт внутри хоста и говорит на MCP. В одном хосте может быть много клиентов.",
              "🛠️ Сервер — сидит рядом с вашими данными и предлагает агенту «меню» инструментов для вызова.",
            ] },
            { t: "h3", v: "Как они располагаются" },
            { t: "mermaid", v: diagramTopology },
            { t: "tip", v: "Хост может подключаться к любому числу серверов: один для БД, другой для GitHub, третий для погоды… они появляются как вежливые официанты." },
          ],
          zh: [
            { t: "h2", v: "故事的三位主角" },
            { t: "p", v: "每段 MCP 冒险都有三位主要角色：" },
            { t: "ul", v: [
              "🏠 主机（Host）—— 你真正使用的应用（聊天应用、IDE 助手、桌面工具）。",
              "📞 客户端（Client）—— 住在主机里，懂得说 MCP。一台主机可以带很多客户端。",
              "🛠️ 服务器（Server）—— 坐在你的数据旁边，准备好一份“工具菜单”供智能体调用。",
            ] },
            { t: "h3", v: "它们如何排排坐" },
            { t: "mermaid", v: diagramTopology },
            { t: "tip", v: "一台主机想连多少服务器都行——数据库一个、GitHub 一个、天气一个……一个个像彬彬有礼的服务员上桌。" },
          ],
          ja: [
            { t: "h2", v: "物語の三人の主人公" },
            { t: "p", v: "どんな MCP の冒険にも、主役は三人います：" },
            { t: "ul", v: [
              "🏠 ホスト — あなたが実際に使うアプリ（チャットアプリ、IDE アシスタント、デスクトップツール）。",
              "📞 クライアント — ホストの中に住み、MCP を話せます。1 つのホストに複数のクライアントも OK。",
              "🛠️ サーバー — データのそばに座り、エージェントが呼び出せる「ツールのメニュー」を差し出します。",
            ] },
            { t: "h3", v: "並び方はこんな感じ" },
            { t: "mermaid", v: diagramTopology },
            { t: "tip", v: "ホストは好きなだけサーバーにつなげます。DB 用、GitHub 用、天気用… 親切なウェイターたちのように次々と現れます。" },
          ],
          ar: [
            { t: "h2", v: "أبطال القصة الثلاثة" },
            { t: "p", v: "في كل مغامرة MCP ثلاث شخصيات رئيسية:" },
            { t: "ul", v: [
              "🏠 المضيف (Host) — التطبيق الذي تستخدمه فعلًا (دردشة، مساعد IDE، أداة سطح مكتب).",
              "📞 العميل (Client) — يعيش داخل المضيف ويُتقن لغة MCP. يمكن للمضيف أن يحمل عدّة عملاء.",
              "🛠️ الخادم (Server) — يجلس بجوار بياناتك ويقدّم للوكيل قائمة بالأدوات المتاحة للاستدعاء.",
            ] },
            { t: "h3", v: "كيف يجلسون معًا" },
            { t: "mermaid", v: diagramTopology },
            { t: "tip", v: "يستطيع المضيف الاتصال بأي عدد من الخوادم: واحد لقاعدة البيانات، آخر لـ GitHub، وثالث للطقس… يأتون كنُدُل مهذّبين." },
          ],
        },
      },
      // ── Page 3 ──
      {
        body: {
          en: [
            { t: "h2", v: "The Protocol in the Middle" },
            { t: "p", v: "Between the host and the server runs the MCP protocol itself. It is the transport layer — the shared language. Because both sides agreed on the rules in advance, you can mix and match: a host built by company A can happily talk to a server built by company B." },
            { t: "p", v: "On the other side of the server, anything goes. Relational database? Sure. NoSQL? Of course. REST API, GraphQL, gRPC? All welcome. Local files or even raw source code (great for IDE assistants)? Also fine." },
            { t: "note", v: "Before MCP, every team built its own custom glue for every tool. With MCP, that glue becomes standard — and reusable." },
          ],
          tr: [
            { t: "h2", v: "Ortadaki Protokol" },
            { t: "p", v: "Host ile server arasında MCP protokolünün kendisi koşar. Bu, taşıma katmanı — yani ortak dildir. İki taraf kuralları önceden kabul ettiği için karıştırıp eşleyebilirsiniz: A şirketinin yaptığı host, B şirketinin yaptığı server ile mutlu mesut konuşur." },
            { t: "p", v: "Server'ın diğer tarafında ise ne istersek var. İlişkisel veritabanı? Olur. NoSQL? Tabii. REST API, GraphQL, gRPC? Hepsi davetli. Yerel dosyalar veya doğrudan kaynak kodu (IDE asistanları için harika)? O da olur." },
            { t: "note", v: "MCP'den önce her ekip, her araç için kendi özel yapıştırıcısını yazıyordu. MCP ile bu yapıştırıcı standartlaşıyor — ve yeniden kullanılabilir oluyor." },
          ],
          de: [
            { t: "h2", v: "Das Protokoll in der Mitte" },
            { t: "p", v: "Zwischen Host und Server läuft das MCP-Protokoll selbst. Es ist die Transportschicht — die gemeinsame Sprache. Da beide Seiten die Regeln vorher kennen, kannst du frei mischen: ein Host von Firma A spricht problemlos mit einem Server von Firma B." },
            { t: "p", v: "Auf der anderen Seite des Servers ist alles erlaubt. Relationale Datenbank? Klar. NoSQL? Selbstverständlich. REST, GraphQL, gRPC? Herzlich willkommen. Lokale Dateien oder Quellcode (super für IDE-Assistenten)? Ebenfalls möglich." },
            { t: "note", v: "Vor MCP bastelte jedes Team seinen eigenen Klebstoff für jedes Tool. Mit MCP wird dieser Klebstoff zum Standard — und wiederverwendbar." },
          ],
          es: [
            { t: "h2", v: "El protocolo del medio" },
            { t: "p", v: "Entre el host y el servidor corre el propio protocolo MCP. Es la capa de transporte — el idioma común. Como las dos partes acuerdan las reglas de antemano, puedes mezclar libremente: un host de la empresa A habla feliz con un servidor de la empresa B." },
            { t: "p", v: "Al otro lado del servidor todo vale. ¿Base relacional? Vale. ¿NoSQL? Por supuesto. ¿REST, GraphQL, gRPC? Bienvenidos. ¿Archivos locales o código fuente (ideal para asistentes de IDE)? También." },
            { t: "note", v: "Antes de MCP, cada equipo se fabricaba su propio pegamento para cada herramienta. Con MCP, ese pegamento se vuelve estándar — y reutilizable." },
          ],
          fr: [
            { t: "h2", v: "Le protocole au milieu" },
            { t: "p", v: "Entre l'hôte et le serveur, c'est le protocole MCP lui-même qui circule. C'est la couche de transport — la langue commune. Comme les deux côtés se sont mis d'accord, on peut mélanger : un hôte créé par l'entreprise A discute sans souci avec un serveur de l'entreprise B." },
            { t: "p", v: "De l'autre côté du serveur, tout est permis. Base relationnelle ? OK. NoSQL ? Bien sûr. REST, GraphQL, gRPC ? Bienvenue. Fichiers locaux ou code source (super pour les assistants d'IDE) ? Pas de souci." },
            { t: "note", v: "Avant MCP, chaque équipe bricolait sa propre colle pour chaque outil. Avec MCP, cette colle devient standard — et réutilisable." },
          ],
          it: [
            { t: "h2", v: "Il protocollo nel mezzo" },
            { t: "p", v: "Tra l'host e il server scorre il protocollo MCP. È il livello di trasporto — la lingua comune. Visto che entrambe le parti hanno concordato prima le regole, puoi mescolare: un host dell'azienda A parla felicemente con un server dell'azienda B." },
            { t: "p", v: "Dall'altro lato del server vale tutto. Database relazionale? Sì. NoSQL? Certo. REST, GraphQL, gRPC? Benvenuti. File locali o codice sorgente (ottimo per gli assistenti IDE)? Anche." },
            { t: "note", v: "Prima di MCP, ogni team scriveva la propria colla personalizzata per ogni strumento. Con MCP la colla diventa standard — e riutilizzabile." },
          ],
          pt: [
            { t: "h2", v: "O protocolo no meio" },
            { t: "p", v: "Entre o host e o servidor corre o próprio protocolo MCP. É a camada de transporte — o idioma compartilhado. Como ambos os lados combinaram as regras antes, você pode misturar à vontade: um host da empresa A conversa tranquilamente com um servidor da empresa B." },
            { t: "p", v: "Do outro lado do servidor, vale tudo. Banco relacional? Pode. NoSQL? Claro. REST, GraphQL, gRPC? Bem-vindos. Arquivos locais ou código-fonte (ótimo para assistentes de IDE)? Também." },
            { t: "note", v: "Antes do MCP, cada equipe escrevia sua própria cola para cada ferramenta. Com MCP, essa cola vira padrão — e reutilizável." },
          ],
          ru: [
            { t: "h2", v: "Протокол посередине" },
            { t: "p", v: "Между хостом и сервером бежит сам протокол MCP. Это транспортный слой — общий язык. Поскольку правила оговорены заранее, можно свободно смешивать: хост от компании A прекрасно беседует с сервером от компании B." },
            { t: "p", v: "По ту сторону сервера допустимо всё. Реляционная БД? Да. NoSQL? Конечно. REST, GraphQL, gRPC? Добро пожаловать. Локальные файлы или исходный код (отлично для ассистентов в IDE)? Тоже." },
            { t: "note", v: "До MCP каждая команда мастерила собственный «клей» под каждый инструмент. С MCP этот клей становится стандартом — и многоразовым." },
          ],
          zh: [
            { t: "h2", v: "中间的协议" },
            { t: "p", v: "在主机与服务器之间跑的，正是 MCP 协议本身。它是传输层——共同的语言。因为双方事先约好了规则，你可以随意组合：A 公司做的主机能愉快地和 B 公司做的服务器对话。" },
            { t: "p", v: "服务器的另一端，什么都行。关系型数据库？可以。NoSQL？当然。REST、GraphQL、gRPC？全都欢迎。本地文件甚至源代码（IDE 助手特别合适）？也行。" },
            { t: "note", v: "在 MCP 之前，每个团队都在为每个工具自制“胶水”。有了 MCP，这层胶水变成了标准，还能反复用。" },
          ],
          ja: [
            { t: "h2", v: "真ん中を走るプロトコル" },
            { t: "p", v: "ホストとサーバーの間を走るのが、MCP プロトコルそのもの。トランスポート層、つまり共通言語です。両者があらかじめルールに合意しているので、A 社のホストと B 社のサーバーでも仲良く話せます。" },
            { t: "p", v: "サーバーの向こう側は何でもアリ。リレーショナル DB？OK。NoSQL？もちろん。REST、GraphQL、gRPC？大歓迎。ローカルファイルやソースコード（IDE アシスタントに最適）？問題なし。" },
            { t: "note", v: "MCP 以前は、各チームがツールごとに独自の「のり」を作っていました。MCP のおかげで、そののりが標準化され、使い回せるようになります。" },
          ],
          ar: [
            { t: "h2", v: "البروتوكول في المنتصف" },
            { t: "p", v: "بين المضيف والخادم يجري بروتوكول MCP ذاته. إنه طبقة النقل — اللغة المشتركة. ولأن الطرفين اتفقا على القواعد مسبقًا، يمكنك المزج بحرية: مضيف من شركة A يتحدث بسلاسة مع خادم من شركة B." },
            { t: "p", v: "أما خلف الخادم، فكل شيء مسموح. قاعدة بيانات علائقية؟ نعم. NoSQL؟ بالتأكيد. REST وGraphQL وgRPC؟ أهلًا بها جميعًا. ملفات محلية أو شيفرة مصدرية (رائعة لمساعدي IDE)؟ كذلك." },
            { t: "note", v: "قبل MCP، كان كل فريق يصنع «صمغه» الخاص لكل أداة. مع MCP يصبح هذا الصمغ معيارًا قابلًا لإعادة الاستخدام." },
          ],
        },
      },
      // ── Page 4 ──
      {
        body: {
          en: [
            { t: "h2", v: "A Day in the Life of a Question" },
            { t: "p", v: "Let's follow one question on its little journey. You open your chat app and type: 'How many customers do we have right now?' Here is what happens behind the curtain." },
            { t: "mermaid", v: diagramFlow },
            { t: "ul", v: [
              "1. The host asks the server: 'What tools do you offer today?'",
              "2. The server hands back a menu (e.g. getCustomers, getWeather).",
              "3. The host sends the question + menu to the LLM.",
              "4. The LLM picks the right tool and tells the host to call it.",
              "5. The host calls the server, which runs SQL / HTTP / code.",
              "6. The result goes back to the LLM, which writes the final, friendly answer.",
            ] },
            { t: "fun", v: "The LLM is the brain. The MCP server is the arm. The host is the body that ties them together — and you are the one giving the orders." },
          ],
          tr: [
            { t: "h2", v: "Bir Sorunun Günlük Yolculuğu" },
            { t: "p", v: "Tek bir soruyu küçük yolculuğunda takip edelim. Sohbet uygulamanızı açıp yazıyorsunuz: 'Şu an kaç müşterimiz var?' Perdenin arkasında olanlar şöyle:" },
            { t: "mermaid", v: diagramFlow },
            { t: "ul", v: [
              "1. Host server'a sorar: 'Bugün hangi araçları sunuyorsun?'",
              "2. Server bir menü uzatır (örn. getCustomers, getWeather).",
              "3. Host, soru + menüyü LLM'e gönderir.",
              "4. LLM doğru aracı seçer ve host'a 'şunu çağır' der.",
              "5. Host server'ı çağırır; server SQL / HTTP / kod çalıştırır.",
              "6. Sonuç LLM'e döner; LLM nazik, akıcı cevabı yazar.",
            ] },
            { t: "fun", v: "LLM beyin. MCP server kol. Host ise ikisini birleştiren beden — ve emirleri veren de sizsiniz." },
          ],
          de: [
            { t: "h2", v: "Ein Tag im Leben einer Frage" },
            { t: "p", v: "Begleiten wir eine Frage auf ihrer kleinen Reise. Du öffnest deine Chat-App und tippst: 'Wie viele Kunden haben wir gerade?' Hinter den Kulissen passiert das hier:" },
            { t: "mermaid", v: diagramFlow },
            { t: "ul", v: [
              "1. Der Host fragt den Server: 'Welche Tools bietest du heute an?'",
              "2. Der Server reicht eine Speisekarte zurück (z. B. getCustomers, getWeather).",
              "3. Der Host schickt Frage + Speisekarte ans LLM.",
              "4. Das LLM wählt das richtige Tool und sagt dem Host, es aufzurufen.",
              "5. Der Host ruft den Server, der SQL / HTTP / Code ausführt.",
              "6. Das Ergebnis geht zurück ans LLM, das die freundliche Antwort formuliert.",
            ] },
            { t: "fun", v: "Das LLM ist das Hirn. Der MCP-Server ist der Arm. Der Host ist der Körper, der beide verbindet — und du gibst die Befehle." },
          ],
          es: [
            { t: "h2", v: "Un día en la vida de una pregunta" },
            { t: "p", v: "Sigamos a una pregunta en su pequeño viaje. Abres tu app de chat y escribes: '¿Cuántos clientes tenemos ahora mismo?' Detrás del telón pasa esto:" },
            { t: "mermaid", v: diagramFlow },
            { t: "ul", v: [
              "1. El host pregunta al servidor: '¿Qué herramientas ofreces hoy?'",
              "2. El servidor le pasa un menú (p. ej. getCustomers, getWeather).",
              "3. El host envía pregunta + menú al LLM.",
              "4. El LLM elige la herramienta correcta y le dice al host que la llame.",
              "5. El host llama al servidor, que ejecuta SQL / HTTP / código.",
              "6. El resultado vuelve al LLM, que redacta la respuesta final amable.",
            ] },
            { t: "fun", v: "El LLM es el cerebro. El servidor MCP es el brazo. El host es el cuerpo que los une — y tú das las órdenes." },
          ],
          fr: [
            { t: "h2", v: "Une journée dans la vie d'une question" },
            { t: "p", v: "Suivons une question dans son petit voyage. Tu ouvres ton appli de chat et écris : « Combien de clients avons-nous en ce moment ? » Voici ce qui se passe en coulisses :" },
            { t: "mermaid", v: diagramFlow },
            { t: "ul", v: [
              "1. L'hôte demande au serveur : « Quels outils proposes-tu aujourd'hui ? »",
              "2. Le serveur lui tend un menu (p. ex. getCustomers, getWeather).",
              "3. L'hôte envoie question + menu au LLM.",
              "4. Le LLM choisit le bon outil et dit à l'hôte de l'appeler.",
              "5. L'hôte appelle le serveur, qui exécute SQL / HTTP / code.",
              "6. Le résultat repart vers le LLM, qui rédige la réponse finale, polie.",
            ] },
            { t: "fun", v: "Le LLM est le cerveau. Le serveur MCP est le bras. L'hôte est le corps qui relie tout — et c'est toi qui donnes les ordres." },
          ],
          it: [
            { t: "h2", v: "Una giornata nella vita di una domanda" },
            { t: "p", v: "Seguiamo una domanda nel suo piccolo viaggio. Apri la tua app di chat e scrivi: 'Quanti clienti abbiamo adesso?' Dietro le quinte succede questo:" },
            { t: "mermaid", v: diagramFlow },
            { t: "ul", v: [
              "1. L'host chiede al server: 'Quali strumenti offri oggi?'",
              "2. Il server passa un menù (es. getCustomers, getWeather).",
              "3. L'host invia domanda + menù all'LLM.",
              "4. L'LLM sceglie lo strumento giusto e dice all'host di chiamarlo.",
              "5. L'host chiama il server, che esegue SQL / HTTP / codice.",
              "6. Il risultato torna all'LLM, che scrive la risposta finale gentile.",
            ] },
            { t: "fun", v: "L'LLM è il cervello. Il server MCP è il braccio. L'host è il corpo che li unisce — e tu sei chi dà gli ordini." },
          ],
          pt: [
            { t: "h2", v: "Um dia na vida de uma pergunta" },
            { t: "p", v: "Vamos acompanhar uma pergunta na sua pequena jornada. Você abre seu app de chat e digita: 'Quantos clientes temos agora?' Nos bastidores acontece o seguinte:" },
            { t: "mermaid", v: diagramFlow },
            { t: "ul", v: [
              "1. O host pergunta ao servidor: 'Quais ferramentas você oferece hoje?'",
              "2. O servidor devolve um cardápio (ex.: getCustomers, getWeather).",
              "3. O host envia pergunta + cardápio para o LLM.",
              "4. O LLM escolhe a ferramenta certa e diz ao host para chamá-la.",
              "5. O host chama o servidor, que executa SQL / HTTP / código.",
              "6. O resultado volta para o LLM, que escreve a resposta final, amigável.",
            ] },
            { t: "fun", v: "O LLM é o cérebro. O servidor MCP é o braço. O host é o corpo que liga os dois — e você é quem dá as ordens." },
          ],
          ru: [
            { t: "h2", v: "Один день из жизни вопроса" },
            { t: "p", v: "Проследим за одним вопросом в его маленьком путешествии. Вы открываете чат и пишете: «Сколько у нас сейчас клиентов?» За кулисами происходит вот что:" },
            { t: "mermaid", v: diagramFlow },
            { t: "ul", v: [
              "1. Хост спрашивает сервер: «Какие инструменты ты сегодня предлагаешь?»",
              "2. Сервер протягивает меню (например, getCustomers, getWeather).",
              "3. Хост отправляет вопрос + меню в LLM.",
              "4. LLM выбирает нужный инструмент и просит хост его вызвать.",
              "5. Хост вызывает сервер, тот выполняет SQL / HTTP / код.",
              "6. Результат возвращается в LLM, которая формулирует финальный, дружелюбный ответ.",
            ] },
            { t: "fun", v: "LLM — мозг. MCP-сервер — рука. Хост — тело, связывающее их вместе. А вы — тот, кто отдаёт приказы." },
          ],
          zh: [
            { t: "h2", v: "一个问题的奇幻漂流" },
            { t: "p", v: "我们跟着一个问题走一趟。你打开聊天应用，输入：“我们现在有多少客户？”幕后会发生这些事：" },
            { t: "mermaid", v: diagramFlow },
            { t: "ul", v: [
              "1. 主机问服务器：“你今天提供哪些工具？”",
              "2. 服务器递回一份菜单（如 getCustomers、getWeather）。",
              "3. 主机把问题 + 菜单发给 LLM。",
              "4. LLM 挑出合适的工具，让主机去调用。",
              "5. 主机调用服务器，服务器执行 SQL / HTTP / 代码。",
              "6. 结果回到 LLM，由它写出最终的友好回答。",
            ] },
            { t: "fun", v: "LLM 是大脑，MCP 服务器是手臂，主机是把它们连在一起的身体——而你才是发号施令的人。" },
          ],
          ja: [
            { t: "h2", v: "ある質問の一日" },
            { t: "p", v: "ひとつの質問の小さな旅を追ってみましょう。あなたはチャットアプリを開いて入力します：「今、お客様は何人いる？」舞台裏ではこんなことが起きています：" },
            { t: "mermaid", v: diagramFlow },
            { t: "ul", v: [
              "1. ホストがサーバーに尋ねる：「今日はどんなツールある？」",
              "2. サーバーがメニューを差し出す（例：getCustomers、getWeather）。",
              "3. ホストが質問とメニューを LLM に送る。",
              "4. LLM が適切なツールを選び、ホストに呼ぶよう伝える。",
              "5. ホストがサーバーを呼び、サーバーが SQL / HTTP / コードを実行。",
              "6. 結果が LLM に戻り、最終的なやさしい答えを書き上げる。",
            ] },
            { t: "fun", v: "LLM は脳。MCP サーバーは腕。ホストはそれらをつなぐ身体 — そして命令するのはあなたです。" },
          ],
          ar: [
            { t: "h2", v: "يومٌ في حياة سؤال" },
            { t: "p", v: "لنتابع سؤالًا واحدًا في رحلته الصغيرة. تفتح تطبيق الدردشة وتكتب: «كم عميلًا لدينا الآن؟» إليك ما يحدث خلف الستار:" },
            { t: "mermaid", v: diagramFlow },
            { t: "ul", v: [
              "1. يسأل المضيف الخادم: «ما الأدوات التي تقدّمها اليوم؟»",
              "2. يردّ الخادم بقائمة (مثل getCustomers و getWeather).",
              "3. يرسل المضيف السؤال + القائمة إلى نموذج اللغة الكبير (LLM).",
              "4. يختار LLM الأداة المناسبة ويطلب من المضيف استدعاءها.",
              "5. يستدعي المضيف الخادم، فيُنفّذ SQL أو HTTP أو شيفرة.",
              "6. تعود النتيجة إلى LLM ليصيغ الإجابة النهائية الودودة.",
            ] },
            { t: "fun", v: "LLM هو الدماغ، وخادم MCP هو الذراع، والمضيف هو الجسد الذي يربطهما — وأنت من يُصدر الأوامر." },
          ],
        },
      },
      // ── Page 5 ──
      {
        body: {
          en: [
            { t: "h2", v: "So… should you use MCP?" },
            { t: "p", v: "If you are building AI agents, MCP is well worth a serious look. It is a young open standard, but the idea behind it is simple: one shared way for any agent to reach any data source through an MCP server." },
            { t: "p", v: "And even if you are not building agents yourself today, the people you build software for almost certainly will. Speaking MCP means your data and your APIs can plug straight into the agents of tomorrow without a custom adapter for each one." },
            { t: "fun", v: "MCP doesn't make your AI smarter. It just stops it from being a brain in a jar." },
            { t: "tip", v: "Throughout this book: 💡 = practical tip, 🎭 = fun analogy, 📜 = short historical or technical note." },
          ],
          tr: [
            { t: "h2", v: "Peki MCP'yi kullanmalı mısınız?" },
            { t: "p", v: "AI ajanları geliştiriyorsanız MCP'ye ciddi şekilde göz atmaya değer. Henüz genç bir açık standart, ama arkasındaki fikir basit: herhangi bir ajanın, bir MCP server üzerinden herhangi bir veri kaynağına ulaşması için tek bir ortak yol." },
            { t: "p", v: "Bugün siz ajan geliştirmiyor olsanız bile, yazılım yazdığınız insanlar büyük ihtimalle geliştirecek. MCP konuşan bir veri ya da API; yarının ajanlarına, her biri için ayrı bir adaptör yazmanıza gerek kalmadan direkt takılabilir." },
            { t: "fun", v: "MCP yapay zekânızı daha akıllı yapmaz. Sadece onu kavanozdaki beyin olmaktan kurtarır." },
            { t: "tip", v: "Kitap boyunca: 💡 = pratik ipucu, 🎭 = eğlenceli benzetme, 📜 = kısa tarihsel ya da teknik not." },
          ],
          de: [
            { t: "h2", v: "Solltest du MCP einsetzen?" },
            { t: "p", v: "Wenn du KI-Agenten baust, lohnt sich ein ernster Blick auf MCP. Es ist ein junger offener Standard, aber die Idee dahinter ist einfach: ein gemeinsamer Weg, über den jeder Agent über einen MCP-Server auf jede Datenquelle zugreifen kann." },
            { t: "p", v: "Und selbst wenn du heute selbst keine Agenten baust — die Leute, für die du Software schreibst, werden es ziemlich sicher tun. Wenn deine Daten und APIs MCP sprechen, lassen sie sich morgen direkt an Agenten anstöpseln, ohne für jeden einen eigenen Adapter zu schreiben." },
            { t: "fun", v: "MCP macht deine KI nicht klüger. Sie ist nur kein Gehirn im Glas mehr." },
            { t: "tip", v: "In diesem Buch: 💡 = praktischer Tipp, 🎭 = lustiger Vergleich, 📜 = kurze historische oder technische Notiz." },
          ],
          es: [
            { t: "h2", v: "Entonces… ¿deberías usar MCP?" },
            { t: "p", v: "Si construyes agentes de IA, vale mucho la pena mirar MCP en serio. Es un estándar abierto joven, pero la idea es simple: una manera común para que cualquier agente alcance cualquier fuente de datos a través de un servidor MCP." },
            { t: "p", v: "Y aunque hoy tú no construyas agentes, la gente para la que escribes software casi seguro lo hará. Que tus datos y tus APIs hablen MCP significa que mañana podrán enchufarse a esos agentes sin un adaptador a medida para cada uno." },
            { t: "fun", v: "MCP no hace tu IA más lista. Solo deja de ser un cerebro en un frasco." },
            { t: "tip", v: "A lo largo del libro: 💡 = consejo práctico, 🎭 = analogía divertida, 📜 = nota histórica o técnica corta." },
          ],
          fr: [
            { t: "h2", v: "Alors… devrais-tu utiliser MCP ?" },
            { t: "p", v: "Si tu développes des agents IA, MCP mérite vraiment un coup d'œil sérieux. C'est un standard ouvert encore jeune, mais l'idée est simple : une seule manière commune pour qu'un agent atteigne n'importe quelle source de données via un serveur MCP." },
            { t: "p", v: "Et même si tu ne construis pas d'agents toi-même aujourd'hui, les gens pour qui tu écris du logiciel, eux, le feront probablement. Tes données et tes APIs qui parlent MCP pourront se brancher directement aux agents de demain, sans adaptateur sur mesure pour chacun." },
            { t: "fun", v: "MCP ne rend pas ton IA plus intelligente. Elle cesse simplement d'être un cerveau dans un bocal." },
            { t: "tip", v: "Tout au long du livre : 💡 = astuce pratique, 🎭 = analogie fun, 📜 = courte note historique ou technique." },
          ],
          it: [
            { t: "h2", v: "Allora… dovresti usare MCP?" },
            { t: "p", v: "Se costruisci agenti di IA, MCP merita davvero un'occhiata seria. È uno standard aperto giovane, ma l'idea è semplice: un unico modo condiviso perché qualsiasi agente possa raggiungere qualsiasi fonte di dati tramite un server MCP." },
            { t: "p", v: "E anche se oggi non costruisci agenti tu, le persone per cui scrivi software molto probabilmente lo faranno. Dati e API che parlano MCP potranno collegarsi domani agli agenti senza un adattatore su misura per ognuno." },
            { t: "fun", v: "MCP non rende la tua IA più intelligente. La fa solo smettere di essere un cervello in un barattolo." },
            { t: "tip", v: "In tutto il libro: 💡 = consiglio pratico, 🎭 = analogia divertente, 📜 = breve nota storica o tecnica." },
          ],
          pt: [
            { t: "h2", v: "Então… você deveria usar MCP?" },
            { t: "p", v: "Se você constrói agentes de IA, vale muito a pena olhar para o MCP com seriedade. É um padrão aberto jovem, mas a ideia é simples: uma maneira comum para qualquer agente alcançar qualquer fonte de dados através de um servidor MCP." },
            { t: "p", v: "E mesmo que você não construa agentes hoje, as pessoas para quem você escreve software quase certamente vão. Dados e APIs que falam MCP poderão se conectar amanhã aos agentes sem precisar de um adaptador sob medida para cada um." },
            { t: "fun", v: "MCP não deixa sua IA mais inteligente. Apenas faz com que ela pare de ser um cérebro num pote." },
            { t: "tip", v: "Ao longo do livro: 💡 = dica prática, 🎭 = analogia divertida, 📜 = nota histórica ou técnica curta." },
          ],
          ru: [
            { t: "h2", v: "Так стоит ли использовать MCP?" },
            { t: "p", v: "Если вы делаете AI-агентов, к MCP стоит присмотреться всерьёз. Это молодой открытый стандарт, но идея проста: единый общий способ, которым любой агент дотягивается до любого источника данных через MCP-сервер." },
            { t: "p", v: "И даже если вы сами сегодня агентов не делаете, те, для кого вы пишете софт, почти наверняка будут. Если ваши данные и API говорят на MCP, завтра их можно будет напрямую подключить к агентам — без отдельного адаптера под каждого." },
            { t: "fun", v: "MCP не делает ИИ умнее. Просто перестаёт быть мозгом в банке." },
            { t: "tip", v: "По всей книге: 💡 — практический совет, 🎭 — забавная аналогия, 📜 — короткая историческая или техническая заметка." },
          ],
          zh: [
            { t: "h2", v: "那么……你该用 MCP 吗？" },
            { t: "p", v: "如果你在构建 AI 智能体，MCP 非常值得认真看看。它是一个还很年轻的开放标准，但背后的想法很简单：让任何智能体都能通过一台 MCP 服务器，以同一种方式接触任何数据源。" },
            { t: "p", v: "就算你今天不亲自做智能体，你为之写代码的那些人几乎一定会。让你的数据和 API 说 MCP，明天它们就能直接对接未来的智能体，不用为每一个再写定制适配器。" },
            { t: "fun", v: "MCP 不会让你的 AI 变聪明，它只是不再是一颗泡在罐子里的大脑。" },
            { t: "tip", v: "整本书中：💡 = 实用小贴士，🎭 = 有趣类比，📜 = 简短的历史或技术备注。" },
          ],
          ja: [
            { t: "h2", v: "では…MCP を使うべき？" },
            { t: "p", v: "AI エージェントを作っているなら、MCP は真剣に見る価値があります。まだ若いオープン標準ですが、考え方はシンプル：どのエージェントも MCP サーバー越しに、どのデータソースにも同じ方法で届くようにする、というものです。" },
            { t: "p", v: "今日あなた自身がエージェントを作っていなくても、あなたがソフトウェアを作って届けている相手は、きっと作るでしょう。データや API が MCP を話せるなら、明日のエージェントに、毎回専用アダプターを書かずに直接つなげられます。" },
            { t: "fun", v: "MCP は AI を賢くはしません。瓶の中の脳でなくなる、それだけです。" },
            { t: "tip", v: "本書を通して：💡 は実用ヒント、🎭 は楽しい例え、📜 はちょっとした歴史・技術メモ。" },
          ],
          ar: [
            { t: "h2", v: "إذن… هل ينبغي استخدام MCP؟" },
            { t: "p", v: "إذا كنت تبني وكلاء ذكاء اصطناعي، فإن MCP يستحق نظرة جادة. إنه معيار مفتوح حديث العهد، لكن الفكرة بسيطة: طريقة موحّدة يمكن لأي وكيل من خلالها الوصول إلى أي مصدر بيانات عبر خادم MCP." },
            { t: "p", v: "وحتى إن كنت لا تبني وكلاء بنفسك اليوم، فإن من تكتب لهم البرمجيات سيفعلون ذلك على الأرجح غدًا. حين تتحدث بياناتك وواجهاتك البرمجية لغة MCP، يمكنها أن تتصل مباشرة بوكلاء المستقبل دون محوّل مخصّص لكل واحد منها." },
            { t: "fun", v: "MCP لا يجعل ذكاءك الاصطناعي أكثر ذكاءً، بل يكفّ عن أن يكون مجرد دماغ داخل برطمان." },
            { t: "tip", v: "في هذا الكتاب: 💡 نصيحة عملية، 🎭 تشبيه طريف، 📜 ملاحظة تاريخية أو تقنية قصيرة." },
          ],
        },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CHAPTER 2 — MCP next to APIs
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 2,
    title: {
      en: "But… don't we already have APIs?",
      tr: "Ama… elimizde zaten API'ler yok mu?",
      de: "Aber… haben wir nicht schon APIs?",
      es: "Pero… ¿no tenemos ya APIs?",
      fr: "Mais… on n'a pas déjà les APIs ?",
      it: "Ma… non abbiamo già le API?",
      pt: "Mas… nós já não temos APIs?",
      ru: "Но… разве у нас уже нет API?",
      zh: "可是…我们不是已经有 API 了吗？",
      ja: "でも…もう API があるじゃない？",
      ar: "لكن… ألا تتوفّر لدينا واجهات API بالفعل؟",
    },
    tagline: {
      en: "MCP next to APIs: cousins, not rivals.",
      tr: "API'lerin yanında MCP: rakip değil, kuzen.",
      de: "MCP neben APIs: Verwandte, keine Rivalen.",
      es: "MCP junto a las APIs: primos, no rivales.",
      fr: "MCP à côté des APIs : cousins, pas rivaux.",
      it: "MCP accanto alle API: cugini, non rivali.",
      pt: "MCP ao lado das APIs: primos, não rivais.",
      ru: "MCP рядом с API: кузены, а не соперники.",
      zh: "MCP 与 API：是表亲，不是对手。",
      ja: "MCP と API：ライバルではなく、いとこ同士。",
      ar: "MCP إلى جانب APIs: أبناء عمومة لا منافسون.",
    },
    pages: [
      // ── Page 1: bridge + USB-C metaphor ──
      {
        body: {
          en: [
            { t: "h2", v: "A very fair question" },
            { t: "p", v: "At the end of the last chapter we said: if you build AI agents, MCP deserves a serious look. A perfectly reasonable reader now stops and asks: 'Wait a second — we've been connecting software to other software for decades using APIs. So why exactly do we need a new thing?' Good question. Let's answer it." },
            { t: "p", v: "MCP appeared in late 2024 from Anthropic as an open standard for how AI applications hand context and tools to large language models. The hype around it is loud — but the idea behind it is quiet and simple." },
            { t: "h3", v: "Think of it as the USB-C of AI apps" },
            { t: "p", v: "Look at the side of any modern laptop. One USB-C port can take a charger, a monitor, an external drive, a microphone — and it doesn't matter which company made each one. They all just work, because they all speak the same plug." },
            { t: "fun", v: "MCP is that plug, but for your AI app. One agreed-upon shape on both sides, and suddenly every \"peripheral\" — a warehouse inventory, a customer support system, an analytics dashboard — clicks into place." },
            { t: "mermaid", v: diagramUsbC },
          ],
          tr: [
            { t: "h2", v: "Çok yerinde bir soru" },
            { t: "p", v: "Geçen bölümün sonunda dedik ki: AI ajanları geliştiriyorsanız MCP'ye ciddi göz atın. Aklı başında bir okuyucu burada şunu sorar: 'Dur bir saniye — biz on yıllardır yazılımları birbirine API'lerle bağlıyoruz. Yeni bir şeye neden ihtiyacımız var ki?' Çok güzel soru. Cevap verelim." },
            { t: "p", v: "MCP, 2024'ün sonlarında Anthropic tarafından açık bir standart olarak ortaya çıktı: AI uygulamaları büyük dil modellerine bağlam ve araçları nasıl uzatır, onu standartlaştırıyor. Ortalıkta epey gürültü var; ama arkasındaki fikir sessiz ve sade." },
            { t: "h3", v: "AI uygulamalarının USB-C'si gibi düşünün" },
            { t: "p", v: "Modern bir dizüstüne bakın. Tek bir USB-C porta şarj cihazı, monitör, harici disk, mikrofon takabilirsiniz; hangi marka olduğu fark etmez. Hepsi çalışır, çünkü hepsi aynı fişi konuşur." },
            { t: "fun", v: "İşte MCP, AI uygulamanız için tam o fiş. İki taraf da aynı şekle anlaşmış; aniden her 'çevre birimi' — bir depo envanteri, bir müşteri destek sistemi, bir analitik panosu — kıtır diye yerine oturuyor." },
            { t: "mermaid", v: diagramUsbC },
          ],
        },
      },

      // ── Page 2: architecture recap (JSON-RPC, host, clients, many servers) ──
      {
        body: {
          en: [
            { t: "h2", v: "Same cast, sharper edges" },
            { t: "p", v: "We already met the three heroes — host, client, server. Now let's zoom in a little. Inside one MCP host there can be several MCP clients running side by side. Each client opens its own session with one server, and they talk using a format called JSON-RPC 2.0 — basically polite little JSON messages that say 'please do this' and 'here is the answer'." },
            { t: "ul", v: [
              "🏠 The host is the app the user actually opens (a chat app, an IDE, a desktop assistant).",
              "📞 Each client inside the host handles one connection.",
              "🛠️ Each server stands next to one thing — an inventory system, a billing platform, a translation service — and offers its skills.",
            ] },
            { t: "tip", v: "Back to the laptop: the host is the laptop, MCP is the USB-C cable, and each server is a different peripheral hanging off it." },
          ],
          tr: [
            { t: "h2", v: "Aynı oyuncular, daha keskin çizgilerle" },
            { t: "p", v: "Üç kahramanı zaten tanıdık: host, client, server. Şimdi biraz yakınlaşalım. Tek bir MCP host'un içinde yan yana birden fazla MCP client çalışabilir. Her client kendi server'ıyla ayrı bir oturum açar ve birbirleriyle JSON-RPC 2.0 dediğimiz bir formatla konuşurlar — özünde 'lütfen şunu yap' ve 'işte cevap' diyen kibar küçük JSON mesajları." },
            { t: "ul", v: [
              "🏠 Host, kullanıcının gerçekten açtığı uygulama (sohbet uygulaması, IDE, masaüstü asistanı).",
              "📞 Host'un içindeki her client tek bir bağlantıyı yönetir.",
              "🛠️ Her server tek bir şeyin yanında durur — bir envanter sistemi, bir faturalama platformu, bir çeviri servisi — ve becerilerini sunar.",
            ] },
            { t: "tip", v: "Dizüstüne geri dönelim: host = dizüstü, MCP = USB-C kablo, her server = ona takılı farklı bir çevre birimi." },
          ],
        },
      },

      // ── Page 3: two needs + three primitives ──
      {
        body: {
          en: [
            { t: "h2", v: "What does MCP actually give the agent?" },
            { t: "p", v: "An AI agent really needs two things from the outside world: stuff to know and stuff to do. MCP covers both: it can hand the agent extra context (documents, database rows, knowledge base entries) and it can let the agent perform actions (call a service, run a search, do a calculation)." },
            { t: "h3", v: "The three primitives" },
            { t: "p", v: "Every MCP server can advertise up to three kinds of \"things\" it offers, called primitives:" },
            { t: "ul", v: [
              "🧰 Tools — concrete actions the agent can call, like convertCurrency(amount, from, to) or bookMeetingRoom(roomId, when). Each tool publishes its name, description, and input/output shape.",
              "📚 Resources — read-only data the client can fetch on demand: text files, database schemas, document contents.",
              "📝 Prompt templates — ready-made prompt patterns the server suggests, so the agent doesn't have to invent them.",
            ] },
            { t: "mermaid", v: diagramPrimitives },
            { t: "note", v: "Not every server uses all three. In practice, many servers focus on tools and that alone is already very powerful." },
          ],
          tr: [
            { t: "h2", v: "MCP ajana aslında ne veriyor?" },
            { t: "p", v: "Bir AI ajanının dış dünyadan iki şeye ihtiyacı vardır: bilecek şey ve yapacak şey. MCP ikisini de kapsar — ajana ekstra bağlam uzatabilir (belgeler, veritabanı satırları, bilgi tabanı kayıtları) ve ajana eylem yaptırabilir (bir servisi çağır, arama yap, hesaplama çalıştır)." },
            { t: "h3", v: "Üç temel yapı taşı (primitive)" },
            { t: "p", v: "Her MCP server, sunduğu 'şey'leri üç türde ilan edebilir — bunlara primitive denir:" },
            { t: "ul", v: [
              "🧰 Tools — ajanın çağırabileceği somut eylemler: convertCurrency(amount, from, to), bookMeetingRoom(roomId, when) gibi. Her tool kendi adını, açıklamasını ve girdi/çıktı şekillerini paylaşır.",
              "📚 Resources — client'ın istediğinde çekebileceği salt-okunur veriler: metin dosyaları, veritabanı şemaları, belge içerikleri.",
              "📝 Prompt templates — server'ın önceden hazırladığı prompt kalıpları; ajan sıfırdan uydurmak zorunda kalmasın diye.",
            ] },
            { t: "mermaid", v: diagramPrimitives },
            { t: "note", v: "Her server hepsini kullanmıyor. Pratikte birçok server sadece tools'a odaklanır; bu bile başlı başına çok güçlüdür." },
          ],
        },
      },

      // ── Page 4: dynamic discovery ──
      {
        body: {
          en: [
            { t: "h2", v: "The magic word: discovery" },
            { t: "p", v: "Here's a small superpower MCP carries in its pocket. At runtime, the client can simply ask the server: 'Hey, what can you do today?' The server answers with a machine-readable catalog — typically through calls like tools/list, resources/list and prompts/list — and the agent picks up the new menu on the spot." },
            { t: "p", v: "That means you can add a new tool to your MCP server tomorrow, and your agent will see it tonight without anyone redeploying the agent. Try doing that with a traditional REST integration — usually a developer has to update the client code first." },
            { t: "fun", v: "Imagine a restaurant where the menu updates itself every time you walk in, and the waiter already knows the new dishes. That's discovery." },
            { t: "tip", v: "Because the catalog is machine-readable, the LLM can be told 'here's the toolbox you have right now', and it can choose for itself which tool fits the user's question." },
          ],
          tr: [
            { t: "h2", v: "Sihirli kelime: keşif (discovery)" },
            { t: "p", v: "MCP'nin cebinde sakladığı küçük bir süper güç. Çalışma anında client server'a basitçe sorabilir: 'Hey, bugün neler yapabiliyorsun?' Server makinece okunabilir bir katalogla cevap verir — genelde tools/list, resources/list, prompts/list çağrılarıyla — ve ajan yeni menüyü anında öğrenir." },
            { t: "p", v: "Yani MCP server'ınıza yarın yeni bir tool ekleyebilirsiniz; ajanınız bu gece görür ve kimsenin ajanı yeniden deploy etmesi gerekmez. Aynı şeyi geleneksel bir REST entegrasyonunda yapmayı deneyin — genellikle önce bir geliştiricinin client kodunu güncellemesi gerekir." },
            { t: "fun", v: "Her girdiğinizde menüsü kendi kendini güncelleyen, garsonun yeni yemekleri zaten bildiği bir restoran düşünün. Discovery dediğimiz tam olarak bu." },
            { t: "tip", v: "Katalog makinece okunabilir olduğu için, LLM'e 'şu an elindeki alet çantası bu' denebilir ve hangi tool'un kullanıcının sorusuna uyduğuna kendi karar verir." },
          ],
        },
      },

      // ── Page 5: APIs in one page ──
      {
        body: {
          en: [
            { t: "h2", v: "A one-page reminder: what is an API?" },
            { t: "p", v: "An API — Application Programming Interface — is just an agreed-upon set of rules for one system to ask another system for information or for an action. The caller (the client) doesn't need to know how the other side works inside; it only needs to know how to phrase the request and how to read the response." },
            { t: "h3", v: "REST: the everyday API style" },
            { t: "p", v: "The most common flavor is REST, which lives on top of plain old HTTP. The client uses familiar verbs:" },
            { t: "ul", v: [
              "GET /recipes/42 — give me recipe number 42",
              "POST /orders — create a new order",
              "PUT /recipes/42 — update this recipe",
              "DELETE /recipes/42 — remove it",
            ] },
            { t: "p", v: "Responses usually come back as JSON. In fact, most commercial LLMs themselves are offered as REST APIs: send a JSON prompt, get a JSON answer." },
            { t: "note", v: "REST is not the only style (there's also GraphQL, gRPC, SOAP, and more), but it is the unofficial default of the web." },
          ],
          tr: [
            { t: "h2", v: "Tek sayfada hatırlatma: API nedir?" },
            { t: "p", v: "API — Application Programming Interface — bir sistemin başka bir sistemden bilgi ya da eylem isteyebilmesi için üzerinde anlaşılmış kurallar bütünüdür. Çağıran taraf (client), karşı tarafın içeride nasıl çalıştığını bilmek zorunda değildir; yalnız isteği nasıl yazacağını ve cevabı nasıl okuyacağını bilmesi yeter." },
            { t: "h3", v: "REST: günlük API stili" },
            { t: "p", v: "En yaygın çeşit REST'tir ve sıradan eski HTTP'nin üstünde yaşar. Client tanıdık fiilleri kullanır:" },
            { t: "ul", v: [
              "GET /recipes/42 — bana 42 numaralı tarifi ver",
              "POST /orders — yeni bir sipariş oluştur",
              "PUT /recipes/42 — bu tarifi güncelle",
              "DELETE /recipes/42 — kaldır",
            ] },
            { t: "p", v: "Cevaplar genelde JSON olarak döner. Hatta çoğu ticari LLM'in kendisi de REST API olarak sunulur: JSON prompt gönder, JSON cevap al." },
            { t: "note", v: "REST tek stil değil (GraphQL, gRPC, SOAP gibileri de var) ama web'in gayri resmi varsayılanıdır." },
          ],
        },
      },

      // ── Page 6: similarities vs differences ──
      {
        body: {
          en: [
            { t: "h2", v: "Cousins, with a few important differences" },
            { t: "h3", v: "Where they look the same" },
            { t: "ul", v: [
              "Both are client/server: someone asks, someone answers.",
              "Both hide the messy internals behind a clean interface.",
              "Both exist to spare developers from re-inventing wheels.",
            ] },
            { t: "h3", v: "Where they part ways" },
            { t: "ul", v: [
              "🎯 Purpose-built vs general-purpose. MCP was designed specifically for LLM apps and agents; REST APIs were designed before anyone said the word 'agent'.",
              "🔍 Dynamic discovery. An MCP client can ask the server 'what can you do?' at runtime. With most REST APIs, when endpoints change, a human has to update the client.",
              "🧱 Uniform interface. Every MCP server speaks the same protocol, no matter what it wraps. Every REST API tends to be its own little universe — different URLs, parameters, auth schemes.",
            ] },
            { t: "fun", v: "Five REST APIs often need five custom adapters in your agent. Five MCP servers answer the exact same calls. Build once, plug into many." },
          ],
          tr: [
            { t: "h2", v: "Kuzenler — ama birkaç önemli farkla" },
            { t: "h3", v: "Nerede aynı görünüyorlar" },
            { t: "ul", v: [
              "İkisi de client/server: biri sorar, biri cevaplar.",
              "İkisi de karmaşık iç işleyişi temiz bir arayüzün arkasına saklar.",
              "İkisi de geliştiricinin sıfırdan tekerlek icat etmesini engellemek için var.",
            ] },
            { t: "h3", v: "Nerede yollar ayrılıyor" },
            { t: "ul", v: [
              "🎯 Amaca özel vs genel amaçlı. MCP doğrudan LLM uygulamaları ve ajanlar için tasarlandı; REST API'ler ise henüz 'ajan' kelimesi bile söylenmeden önce vardı.",
              "🔍 Dinamik keşif. MCP client'ı çalışma anında server'a 'ne yapabiliyorsun?' diye sorabilir. Çoğu REST API'de endpoint değişirse, client kodunu bir geliştiricinin güncellemesi gerekir.",
              "🧱 Tek tip arayüz. Her MCP server, neyi sarmaladığından bağımsız olarak aynı protokolü konuşur. Her REST API ise kendi küçük evreni gibidir — farklı URL'ler, parametreler, kimlik doğrulama şemaları.",
            ] },
            { t: "fun", v: "Beş REST API genelde ajanınızda beş özel adaptör ister. Beş MCP server tam tamına aynı çağrılara cevap verir. Bir kere yaz, çoğuna tak." },
          ],
        },
      },

      // ── Page 7: the twist + closing ──
      {
        body: {
          en: [
            { t: "h2", v: "Plot twist: MCP often calls APIs" },
            { t: "p", v: "Now the surprise. If you peek inside many real-world MCP servers, you'll often find a familiar face: a plain old REST API doing the actual heavy lifting. The MCP server is essentially a friendly wrapper that translates between MCP-shaped calls on one side and the original service's native API on the other." },
            { t: "p", v: "Imagine an MCP server that sits in front of a corporate ticketing system. It advertises high-level MCP tools such as ticket/list and ticket/comment, but when the agent calls one of them, the server quietly turns that call into the matching request against the ticketing system's plain REST API behind the curtain." },
            { t: "mermaid", v: diagramLayers },
            { t: "h3", v: "Not enemies — layers" },
            { t: "p", v: "So MCP and APIs are not fighting for the same chair. They sit in different layers of the AI stack. MCP gives agents a uniform, discoverable, agent-friendly surface; APIs keep doing what they've always done underneath. New MCP servers appear every week — for relational databases, CRM platforms, payment processors, design tools, internal company services — and the list keeps growing." },
            { t: "fun", v: "APIs are the engine, MCP is the steering wheel an AI agent can actually grip." },
          ],
          tr: [
            { t: "h2", v: "Sürpriz: MCP çoğu zaman API çağırır" },
            { t: "p", v: "Şimdi sürpriz kısım. Gerçek dünyadaki birçok MCP server'ın içine baktığınızda tanıdık bir yüzle karşılaşırsınız: gerçek işi yapan, sıradan eski bir REST API. MCP server aslında dost canlısı bir sarmalayıcıdır — bir tarafta MCP biçimli çağrılar, diğer tarafta orijinal servisin kendi API'si; arada çeviriyi o yapar." },
            { t: "p", v: "Örnek olarak, kurumsal bir biletleme sisteminin önünde duran bir MCP server hayal edin. ticket/list, ticket/comment gibi üst seviye MCP tool'ları ilan eder; ama ajan bunlardan birini çağırdığında, server perde arkasında bunu sessizce biletleme sisteminin sıradan REST API'sine karşılık gelen isteğe çevirir." },
            { t: "mermaid", v: diagramLayers },
            { t: "h3", v: "Düşman değil — katman" },
            { t: "p", v: "Yani MCP ve API'ler aynı koltuk için kavga etmiyor. AI yığınında farklı katmanlarda otururlar. MCP, ajanlara tek tip, keşfedilebilir ve ajan-dostu bir yüzey verir; API'ler de altta her zaman yaptıklarını yapmaya devam eder. Her hafta yeni MCP server'lar ortaya çıkıyor — ilişkisel veritabanları, CRM platformları, ödeme işlemcileri, tasarım araçları, kurum içi servisler — ve liste büyümeye devam ediyor." },
            { t: "fun", v: "API'ler motor. MCP ise bir AI ajanının gerçekten tutabileceği direksiyon." },
          ],
        },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CHAPTER 3 — RAG vs MCP
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 3,
    title: {
      en: "RAG and MCP: know more vs. do more",
      tr: "RAG ve MCP: daha fazlasını bilmek mi, yapmak mı?",
      de: "RAG und MCP: mehr wissen vs. mehr tun",
      es: "RAG y MCP: saber más vs. hacer más",
      fr: "RAG et MCP : en savoir plus vs. en faire plus",
      it: "RAG e MCP: sapere di più vs. fare di più",
      pt: "RAG e MCP: saber mais vs. fazer mais",
      ru: "RAG и MCP: знать больше или делать больше?",
      zh: "RAG 与 MCP：是“多懂一些”还是“多做一些”？",
      ja: "RAG と MCP：もっと知る か、もっと動く か",
      ar: "RAG و MCP: المعرفة الأوسع أم الفعل الأكبر؟",
    },
    tagline: {
      en: "Two famous acronyms, one clear difference — and one happy ending.",
      tr: "İki ünlü kısaltma, tek net fark — ve mutlu bir son.",
      de: "Zwei berühmte Abkürzungen, ein klarer Unterschied — und ein Happy End.",
      es: "Dos siglas famosas, una diferencia clara — y un final feliz.",
      fr: "Deux acronymes célèbres, une différence claire — et une happy end.",
      it: "Due acronimi famosi, una differenza chiara — e un lieto fine.",
      pt: "Duas siglas famosas, uma diferença clara — e um final feliz.",
      ru: "Две громкие аббревиатуры, одно чёткое различие — и хорошая концовка.",
      zh: "两个响亮的缩写，一个清晰的区别——还有一个圆满结局。",
      ja: "有名な二つの略語、明確なひとつの違い、そしてハッピーエンド。",
      ar: "اختصاران شهيران، فارق واضح واحد — ونهاية سعيدة.",
    },
    pages: [
      // ── Page 1: the hook ──
      {
        body: {
          en: [
            { t: "h2", v: "Wait — RAG, MCP, what is going on?" },
            { t: "p", v: "By now you've heard a lot of acronyms in AI land. Two of the loudest ones at the moment are RAG and MCP. People throw them around in the same sentence as if they were the same thing — and that's exactly why so many readers quietly nod and then go home confused. So let's clear it up, once and for all, in a single chapter." },
            { t: "p", v: "Imagine your first day working at a small neighborhood bookstore. A customer walks in and asks: 'What's your return policy?' Then another asks: 'Do you still have Murakami's latest in stock, and can you order me one if not?' Two perfectly normal questions — but you need very different things to answer each one." },
            { t: "fun", v: "An LLM on its own is like a brilliant new colleague who hasn't read the staff handbook and doesn't have a key to the stockroom. Charming, but not very useful — yet." },
          ],
          tr: [
            { t: "h2", v: "Dur — RAG, MCP, neyin nesi?" },
            { t: "p", v: "Şu ana kadar AI dünyasında bir sürü kısaltma duydunuz. Şu sıralar en gürültülü ikisi RAG ve MCP. İnsanlar bunları aynı cümlede sanki aynı şeymiş gibi atıp tutuyor — ve tam da bu yüzden çoğu okuyucu kibarca başını sallayıp eve kafası karışmış halde dönüyor. O zaman tek bir bölümde, bir kerede netleştirelim." },
            { t: "p", v: "Mahallenin küçük bir kitapçısında ilk iş gününüzü düşünün. Bir müşteri içeri girip soruyor: 'İade politikanız nedir?' Hemen ardından bir başkası: 'Murakami'nin son kitabından stoğunuzda kaldı mı, yoksa benim için sipariş verir misiniz?' İki son derece olağan soru — ama her birine cevap vermek için çok farklı şeylere ihtiyacınız var." },
            { t: "fun", v: "Tek başına bir LLM, personel el kitabını okumamış ve depo anahtarı olmayan yeni bir meslektaş gibidir. Sevimli, ama henüz pek işe yaramaz." },
          ],
        },
      },

      // ── Page 2: two needs of any LLM app ──
      {
        body: {
          en: [
            { t: "h2", v: "Two different needs, two different tricks" },
            { t: "p", v: "An AI app really only ever needs two things from the outside world: knowledge and the ability to act. Once you see this split clearly, RAG and MCP slot neatly into their seats." },
            { t: "ul", v: [
              "📚 \"Help me know more.\" — Pull in the right information so the model can answer correctly. This is RAG's job.",
              "🛠️ \"Help me do more.\" — Reach out to real systems, run real actions, change real state. This is MCP's job.",
            ] },
            { t: "mermaid", v: `flowchart LR
    Q["❓ A question or task"] --> A{"What does the agent need?"}
    A -->|"Know more"| R["📚 RAG<br/>fetch relevant text"]
    A -->|"Do more"| M["🛠️ MCP<br/>call tools / systems"]
    R --> ANS["💬 Grounded answer"]
    M --> ACT["⚙️ Action performed"]` },
            { t: "tip", v: "If your sentence ends with \"…tell me about X,\" you probably need RAG. If it ends with \"…and then book it / send it / update it,\" you probably need MCP." },
          ],
          tr: [
            { t: "h2", v: "İki farklı ihtiyaç, iki farklı numara" },
            { t: "p", v: "Bir AI uygulamasının dış dünyadan aslında yalnızca iki şeye ihtiyacı vardır: bilgi ve eyleme geçebilme yeteneği. Bu ayrımı net görünce, RAG ve MCP de kendi koltuklarına oturuverir." },
            { t: "ul", v: [
              "📚 \"Daha fazla bilmeme yardım et.\" — Modelin doğru cevap verebilmesi için doğru bilgiyi içeri çek. Bu RAG'ın işi.",
              "🛠️ \"Daha fazlasını yapmama yardım et.\" — Gerçek sistemlere uzan, gerçek eylemler çalıştır, gerçek durumu değiştir. Bu da MCP'nin işi.",
            ] },
            { t: "mermaid", v: `flowchart LR
    Q["❓ Bir soru ya da görev"] --> A{"Ajan neye ihtiyaç duyuyor?"}
    A -->|"Daha fazla bilmek"| R["📚 RAG<br/>ilgili metni getir"]
    A -->|"Daha fazlasını yapmak"| M["🛠️ MCP<br/>araç/sistem çağır"]
    R --> ANS["💬 Dayanaklı cevap"]
    M --> ACT["⚙️ Eylem gerçekleşti"]` },
            { t: "tip", v: "Cümleniz \"…hakkında bana bilgi ver\" ile bitiyorsa muhtemelen RAG lazım. \"…ve sonra rezerve et / gönder / güncelle\" ile bitiyorsa muhtemelen MCP lazım." },
          ],
        },
      },

      // ── Page 3: RAG explained, 5 steps, with bookstore example ──
      {
        body: {
          en: [
            { t: "h2", v: "RAG — Retrieval-Augmented Generation" },
            { t: "p", v: "RAG's whole reason to exist is to help the model know more. You keep a bunch of useful texts somewhere — staff handbooks, product manuals, internal wiki pages, articles, transcripts. When the user asks something, RAG fishes out the most relevant bits and quietly slips them into the model's prompt, so the answer is grounded in your real material instead of made up." },
            { t: "h3", v: "Five small steps" },
            { t: "mermaid", v: `flowchart LR
    A1["1. ASK<br/>user types a question"] --> A2["2. RETRIEVE<br/>search the knowledge base"]
    A2 --> A3["3. RETURN<br/>get the relevant passages"]
    A3 --> A4["4. AUGMENT<br/>add them to the prompt"]
    A4 --> A5["5. GENERATE<br/>LLM writes a grounded answer"]` },
            { t: "p", v: "Back in the bookstore: a customer asks, 'What's your return policy?' Your RAG-equipped assistant searches the staff handbook, finds the paragraph that says returns are accepted within 30 days with a receipt, hands it to the model, and the model replies in a friendly, accurate sentence — and ideally tells you which page it came from so you can double-check." },
            { t: "note", v: "RAG's data is usually static-ish and text-shaped: PDFs, web pages, markdown notes. Great for facts that someone already wrote down somewhere." },
          ],
          tr: [
            { t: "h2", v: "RAG — Retrieval-Augmented Generation" },
            { t: "p", v: "RAG'in tek varlık sebebi, modelin daha fazlasını bilmesine yardım etmektir. Bir yerlerde işe yarar metinler tutarsınız — personel el kitapları, ürün kılavuzları, dahili wiki sayfaları, makaleler, transkriptler. Kullanıcı bir şey sorduğunda RAG, en alakalı parçaları balık tutar gibi çekip sessizce modelin prompt'una ekler; böylece cevap uydurma değil, gerçek materyalinize dayanır." },
            { t: "h3", v: "Beş küçük adım" },
            { t: "mermaid", v: `flowchart LR
    A1["1. SOR<br/>kullanıcı soruyu yazar"] --> A2["2. ARA<br/>bilgi tabanını tara"]
    A2 --> A3["3. GETİR<br/>ilgili paragrafları al"]
    A3 --> A4["4. ZENGİNLEŞTİR<br/>prompt'a ekle"]
    A4 --> A5["5. ÜRET<br/>LLM dayanaklı cevabı yazar"]` },
            { t: "p", v: "Kitapçıya geri dönelim: bir müşteri 'İade politikanız nedir?' diye soruyor. RAG'lı asistanınız personel el kitabını tarıyor, 'iadeler fişle birlikte 30 gün içinde kabul edilir' diyen paragrafı buluyor, modele uzatıyor; model de bunu sıcak ve doğru bir cümleye çeviriyor — ideal olarak hangi sayfadan geldiğini de söylüyor ki çapraz kontrol edebilesiniz." },
            { t: "note", v: "RAG'ın verisi genelde sabit-ish ve metin biçimlidir: PDF'ler, web sayfaları, markdown notlar. Birinin zaten bir yerlere yazdığı bilgiler için harikadır." },
          ],
        },
      },

      // ── Page 4: MCP explained, 5 steps, with bookstore example ──
      {
        body: {
          en: [
            { t: "h2", v: "MCP — Model Context Protocol" },
            { t: "p", v: "MCP's whole reason to exist is to help the model do more. Instead of feeding the model extra text, MCP gives it a hand: a structured way to call tools, query live systems, and change real state. We already met it in earlier chapters — now let's look at the flow with the same lens we used for RAG." },
            { t: "h3", v: "Five small steps" },
            { t: "mermaid", v: `flowchart LR
    B1["1. DISCOVER<br/>ask server what tools exist"] --> B2["2. UNDERSTAND<br/>read each tool's schema"]
    B2 --> B3["3. PLAN<br/>LLM picks tools and order"]
    B3 --> B4["4. EXECUTE<br/>call them through MCP"]
    B4 --> B5["5. INTEGRATE<br/>use results, maybe call again"]` },
            { t: "p", v: "Back in the bookstore: a customer asks, 'Do you still have Murakami's latest in stock, and if not can you order one?' Your MCP-equipped assistant discovers an inventory tool and an order tool, plans to use them in that order, calls the inventory tool, sees there are zero copies left, and then calls the order tool to place a fresh order. Real action, real change." },
            { t: "tip", v: "MCP's data is live and structured: stock levels, order numbers, calendar slots, payment statuses. Not paragraphs to read — buttons to push." },
          ],
          tr: [
            { t: "h2", v: "MCP — Model Context Protocol" },
            { t: "p", v: "MCP'nin tek varlık sebebi, modelin daha fazlasını yapmasına yardım etmektir. Modele ekstra metin beslemek yerine ona bir el uzatır: araç çağırmanın, canlı sistemleri sorgulamanın ve gerçek durumu değiştirmenin yapısal bir yolu. Önceki bölümlerde tanışmıştık — şimdi RAG'a baktığımız aynı mercekten akışına bakalım." },
            { t: "h3", v: "Beş küçük adım" },
            { t: "mermaid", v: `flowchart LR
    B1["1. KEŞFET<br/>server'a hangi araçlar var diye sor"] --> B2["2. ANLA<br/>her aracın şemasını oku"]
    B2 --> B3["3. PLANLA<br/>LLM araçları ve sırayı seçer"]
    B3 --> B4["4. ÇALIŞTIR<br/>MCP üzerinden çağır"]
    B4 --> B5["5. ENTEGRE ET<br/>sonuçları kullan, gerekirse tekrar çağır"]` },
            { t: "p", v: "Kitapçıya geri: bir müşteri 'Murakami'nin son kitabı stokta mı, yoksa benim için sipariş verir misiniz?' diye soruyor. MCP'li asistanınız bir envanter tool'u ve bir sipariş tool'u keşfediyor, bu sırayla kullanmayı planlıyor, envantere bakıyor (sıfır kopya kalmış), ardından sipariş tool'unu çağırıp taze bir sipariş açıyor. Gerçek eylem, gerçek değişiklik." },
            { t: "tip", v: "MCP'nin verisi canlı ve yapısaldır: stok seviyeleri, sipariş numaraları, takvim slotları, ödeme durumları. Okunacak paragraflar değil — basılacak düğmeler." },
          ],
        },
      },

      // ── Page 5: Venn diagram, similarities + key differences ──
      {
        body: {
          en: [
            { t: "h2", v: "Where they shake hands, where they part ways" },
            { t: "mermaid", v: `flowchart TB
    subgraph S["🤝 Both RAG and MCP"]
      direction TB
      S1["Bring outside knowledge to the LLM"]
      S2["Reduce hallucinations by grounding it"]
      S3["The real data lives outside the model"]
    end
    subgraph R["📚 RAG only"]
      direction TB
      R1["Reads documents"]
      R2["Best for static text knowledge"]
      R3["Cites the source passage"]
    end
    subgraph M["🛠️ MCP only"]
      direction TB
      M1["Calls live tools and systems"]
      M2["Can change real state"]
      M3["Discovers new tools at runtime"]
    end` },
            { t: "p", v: "Both pull data from outside the model and both make answers more trustworthy. That's the shared territory. The split happens in what they pull and what they do with it: RAG retrieves text, MCP triggers actions." },
            { t: "fun", v: "RAG is a great librarian. MCP is a great office manager. You want both on your team, not one instead of the other." },
          ],
          tr: [
            { t: "h2", v: "Nerede el sıkışıyorlar, nerede ayrılıyorlar" },
            { t: "mermaid", v: `flowchart TB
    subgraph S["🤝 Hem RAG hem MCP"]
      direction TB
      S1["LLM'e dışarıdan bilgi getirir"]
      S2["Halüsinasyonu, dayanak vererek azaltır"]
      S3["Gerçek veri modelin dışında yaşar"]
    end
    subgraph R["📚 Sadece RAG"]
      direction TB
      R1["Belgeleri okur"]
      R2["Sabit metin bilgisi için ideal"]
      R3["Kaynak paragrafı gösterir"]
    end
    subgraph M["🛠️ Sadece MCP"]
      direction TB
      M1["Canlı araç ve sistemleri çağırır"]
      M2["Gerçek durumu değiştirebilir"]
      M3["Yeni araçları çalışma anında keşfeder"]
    end` },
            { t: "p", v: "İkisi de modelin dışından veri çeker ve cevapları daha güvenilir kılar. Ortak alan bu. Ayrılık neyi çektiklerinde ve onunla ne yaptıklarında: RAG metin getirir, MCP eylem tetikler." },
            { t: "fun", v: "RAG harika bir kütüphaneci. MCP harika bir ofis yöneticisi. İkisini de takımınızda istersiniz — birinin yerine diğerini değil." },
          ],
        },
      },

      // ── Page 6: when to use which ──
      {
        body: {
          en: [
            { t: "h2", v: "So which one should I use?" },
            { t: "p", v: "A simple rule of thumb you can repeat to yourself before you start any AI feature:" },
            { t: "ul", v: [
              "🧠 If the answer already exists, written down somewhere — RAG.",
              "🔧 If the answer requires checking or changing a live system — MCP.",
              "🪄 If it requires both at the same time — well… see the next page.",
            ] },
            { t: "h3", v: "A quick smell test" },
            { t: "ul", v: [
              "\"Summarize our refund policy.\" → RAG.",
              "\"Has order #4821 shipped yet?\" → MCP.",
              "\"Cancel order #4821 and email the customer the refund policy.\" → both.",
            ] },
            { t: "note", v: "Choosing wrong isn't dangerous — it's just wasteful. RAG can't change anything, and MCP doesn't memorize documents. They each shine in their own corner." },
          ],
          tr: [
            { t: "h2", v: "Peki hangisini kullanmalıyım?" },
            { t: "p", v: "Yeni bir AI özelliğine başlamadan önce kendi kendinize tekrar edebileceğiniz basit bir pratik kural:" },
            { t: "ul", v: [
              "🧠 Cevap bir yerlerde zaten yazılıysa — RAG.",
              "🔧 Cevap canlı bir sistemi kontrol etmeyi ya da değiştirmeyi gerektiriyorsa — MCP.",
              "🪄 İkisini de aynı anda gerektiriyorsa — sonraki sayfaya bakın.",
            ] },
            { t: "h3", v: "Hızlı bir koku testi" },
            { t: "ul", v: [
              "\"İade politikamızı özetle.\" → RAG.",
              "\"#4821 numaralı sipariş kargolandı mı?\" → MCP.",
              "\"#4821 numaralı siparişi iptal et ve müşteriye iade politikasını e-postayla gönder.\" → ikisi de.",
            ] },
            { t: "note", v: "Yanlış seçmek tehlikeli değildir — sadece israftır. RAG hiçbir şeyi değiştiremez, MCP de belge ezberlemez. İkisi de kendi köşesinde parlar." },
          ],
        },
      },

      // ── Page 7: plot twist — MCP can use RAG as a tool + close ──
      {
        body: {
          en: [
            { t: "h2", v: "Plot twist: they can work together" },
            { t: "p", v: "Here is the friendliest detail of the whole RAG-vs-MCP debate: it is not really an either/or. A modern AI agent often uses MCP as the way it reaches out to the outside world — and one of the tools that the MCP server exposes can be… a search over your knowledge base. In other words, MCP can call RAG." },
            { t: "mermaid", v: `flowchart LR
    AG["🤖 AI Agent"] -->|MCP| S["🛠️ MCP Server"]
    S --> T1["🔧 placeOrder(...)"]
    S --> T2["🔧 cancelOrder(...)"]
    S --> T3["📚 searchHandbook(query)<br/>(RAG under the hood)"]
    T3 --> KB[("📄 Knowledge base")]` },
            { t: "p", v: "Going back one last time to our bookstore: a customer asks 'Cancel my order and tell me again how returns work.' The agent uses MCP to call cancelOrder, then uses MCP to call a searchHandbook tool that runs a RAG lookup over the staff manual, then composes one friendly reply that covers both things." },
            { t: "fun", v: "RAG knows. MCP does. Used together, your AI app finally feels less like a brilliant intern and more like a colleague who has both read the handbook and has the keys to the stockroom." },
            { t: "tip", v: "When you design an AI feature, don't ask \"RAG or MCP?\" Ask: \"Where does each piece of information live, and who is allowed to change it?\" The answer will tell you which pattern, or which mix, you need." },
          ],
          tr: [
            { t: "h2", v: "Sürpriz: birlikte çalışabilirler" },
            { t: "p", v: "Tüm RAG-vs-MCP tartışmasının en güzel detayı: aslında ya o ya bu değil. Modern bir AI ajanı çoğu zaman dış dünyaya MCP ile uzanır — ve MCP server'ın sunduğu tool'lardan biri pekâlâ bilgi tabanınızda arama yapan bir tool olabilir. Yani MCP, RAG'ı çağırabilir." },
            { t: "mermaid", v: `flowchart LR
    AG["🤖 AI Ajanı"] -->|MCP| S["🛠️ MCP Server"]
    S --> T1["🔧 placeOrder(...)"]
    S --> T2["🔧 cancelOrder(...)"]
    S --> T3["📚 searchHandbook(query)<br/>(altında RAG çalışır)"]
    T3 --> KB[("📄 Bilgi tabanı")]` },
            { t: "p", v: "Son kez kitapçıya: bir müşteri 'Siparişimi iptal et ve iadelerin nasıl çalıştığını yeniden anlat.' diyor. Ajan MCP üzerinden cancelOrder'ı çağırıyor, sonra yine MCP üzerinden searchHandbook adlı bir tool'u çağırıyor — bu tool da arka planda personel el kitabında RAG aramasını çalıştırıyor. Ajan sonunda iki konuyu da kapsayan tek bir dostça cevap yazıyor." },
            { t: "fun", v: "RAG bilir. MCP yapar. İkisi birlikte kullanıldığında, AI uygulamanız nihayet zeki bir stajyerden çok; el kitabını okumuş ve depo anahtarı olan bir meslektaşa benzemeye başlar." },
            { t: "tip", v: "Bir AI özelliği tasarlarken \"RAG mi MCP mi?\" diye sormayın. Sorun: \"Her bilgi parçası nerede yaşıyor ve onu değiştirmeye kimin izni var?\" Cevap, hangi deseni — ya da hangi karışımı — kullanacağınızı size söyler." },
          ],
        },
      },
    ],
  },
];

// ═════════════════════════════════════════════════════════════════════════════
// EDITIONS — the codex now ships in two volumes: Theory and Examples.
// `chapters` (above) is kept as the Theory volume. Examples lives below.
// ═════════════════════════════════════════════════════════════════════════════

export const theoryChapters: Chapter[] = chapters;

// ── Examples volume ──────────────────────────────────────────────────────────
// Intentionally empty for now — content will be added chapter by chapter.
// A single "coming soon" placeholder page is shown so the volume is openable.
export const examplesChapters: Chapter[] = [
  {
    id: 0,
    title: {
      en: "Coming soon",
      tr: "Yakında",
    },
    tagline: {
      en: "This volume is still being written.",
      tr: "Bu cilt hâlâ yazılıyor.",
    },
    pages: [
      {
        body: {
          en: [
            { t: "h2", v: "Stay tuned ✨" },
            { t: "p", v: "The Examples volume is being assembled, chapter by chapter, as new integrations are tried out in the wild — Microsoft Foundry and friends are on the way." },
            { t: "p", v: "In the meantime, head back to the Theory volume to learn the foundations." },
            { t: "tip", v: "Want to help fill this volume? See the Contributing section in the README on GitHub." },
          ],
          tr: [
            { t: "h2", v: "Takipte kalın ✨" },
            { t: "p", v: "Examples cildi, sahada denenen yeni entegrasyonlarla bölüm bölüm derleniyor — Microsoft Foundry ve dostları yolda." },
            { t: "p", v: "Bu arada temelleri öğrenmek için Theory cildine geri dönebilirsiniz." },
            { t: "tip", v: "Bu cildi doldurmaya yardım etmek ister misiniz? GitHub'daki README'deki Contributing bölümüne bakın." },
          ],
        },
      },
    ],
  },
];

// ── Editions registry ────────────────────────────────────────────────────────
export type EditionKey = "theory" | "examples";

export interface EditionMeta {
  key: EditionKey;
  chapters: Chapter[];
  title: I18n<string>;       // shown on the book cover
  subtitle: I18n<string>;    // small line under the title
  shelfTitle: I18n<string>;  // shown on the landing-page card
  shelfBlurb: I18n<string>;  // one-line description on the card
  emoji: string;
}

export const EDITIONS: Record<EditionKey, EditionMeta> = {
  theory: {
    key: "theory",
    chapters: theoryChapters,
    emoji: "📖",
    title: {
      en: "The MCP Codex · Theory",
      tr: "MCP Kitabı · Teori",
    },
    subtitle: {
      en: "An Illustrated Guide to the Model Context Protocol",
      tr: "Model Context Protocol için Resimli Rehber",
    },
    shelfTitle: {
      en: "Theory",
      tr: "Teori",
    },
    shelfBlurb: {
      en: "Concepts, architecture, vocabulary. Start here.",
      tr: "Kavramlar, mimari, terminoloji. Buradan başlayın.",
    },
  },
  examples: {
    key: "examples",
    chapters: examplesChapters,
    emoji: "🧪",
    title: {
      en: "The MCP Codex · Examples",
      tr: "MCP Kitabı · Örnekler",
    },
    subtitle: {
      en: "MCP in the wild — real platforms, real wiring.",
      tr: "Doğal ortamında MCP — gerçek platformlar, gerçek bağlantılar.",
    },
    shelfTitle: {
      en: "Examples",
      tr: "Örnekler",
    },
    shelfBlurb: {
      en: "MCP × Foundry and more — hands-on chapters.",
      tr: "MCP × Foundry ve dahası — uygulamalı bölümler.",
    },
  },
};
