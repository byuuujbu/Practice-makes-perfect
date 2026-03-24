// ── 언어 설정 ──
let currentLang = 'ko';
let lastSeed    = null;
let lastInputs  = null;
let menuIsOpen  = false;   // DOM 대신 플래그로 메뉴 열림 상태 추적
let currentTab  = 'fortune'; // 현재 활성 탭

// ── 아이돌 목록 ──
const IDOLS = [
    { group: 'BTS',         name: 'RM' },
    { group: 'BTS',         name: 'Jin' },
    { group: 'BTS',         name: 'Suga' },
    { group: 'BTS',         name: 'j-hope' },
    { group: 'BTS',         name: 'Jimin' },
    { group: 'BTS',         name: 'V' },
    { group: 'BTS',         name: 'Jungkook' },
    { group: 'BLACKPINK',   name: 'Jennie' },
    { group: 'BLACKPINK',   name: 'Lisa' },
    { group: 'BLACKPINK',   name: 'Rosé' },
    { group: 'BLACKPINK',   name: 'Jisoo' },
    { group: 'aespa',       name: 'Karina' },
    { group: 'aespa',       name: 'Giselle' },
    { group: 'aespa',       name: 'Winter' },
    { group: 'aespa',       name: 'Ningning' },
    { group: 'NewJeans',    name: 'Minji' },
    { group: 'NewJeans',    name: 'Hanni' },
    { group: 'NewJeans',    name: 'Danielle' },
    { group: 'NewJeans',    name: 'Haerin' },
    { group: 'NewJeans',    name: 'Hyein' },
    { group: 'Stray Kids',  name: 'Bang Chan' },
    { group: 'Stray Kids',  name: 'Lee Know' },
    { group: 'Stray Kids',  name: 'Changbin' },
    { group: 'Stray Kids',  name: 'Hyunjin' },
    { group: 'Stray Kids',  name: 'Han' },
    { group: 'Stray Kids',  name: 'Felix' },
    { group: 'Stray Kids',  name: 'Seungmin' },
    { group: 'Stray Kids',  name: 'I.N' },
    { group: 'IVE',         name: 'Yujin' },
    { group: 'IVE',         name: 'Gaeul' },
    { group: 'IVE',         name: 'Rei' },
    { group: 'IVE',         name: 'Wonyoung' },
    { group: 'IVE',         name: 'Liz' },
    { group: 'IVE',         name: 'Leeseo' },
    { group: 'TXT',         name: 'Yeonjun' },
    { group: 'TXT',         name: 'Soobin' },
    { group: 'TXT',         name: 'Beomgyu' },
    { group: 'TXT',         name: 'Taehyun' },
    { group: 'TXT',         name: 'Huening Kai' },
    { group: 'ENHYPEN',     name: 'Jungwon' },
    { group: 'ENHYPEN',     name: 'Heeseung' },
    { group: 'ENHYPEN',     name: 'Jay' },
    { group: 'ENHYPEN',     name: 'Jake' },
    { group: 'ENHYPEN',     name: 'Sunghoon' },
    { group: 'ENHYPEN',     name: 'Sunoo' },
    { group: 'ENHYPEN',     name: 'Ni-ki' },
    { group: '(G)I-DLE',   name: 'Miyeon' },
    { group: '(G)I-DLE',   name: 'Minnie' },
    { group: '(G)I-DLE',   name: 'Soyeon' },
    { group: '(G)I-DLE',   name: 'Yuqi' },
    { group: '(G)I-DLE',   name: 'Shuhua' },
    { group: 'Seventeen',   name: 'S.Coups' },
    { group: 'Seventeen',   name: 'Jeonghan' },
    { group: 'Seventeen',   name: 'Joshua' },
    { group: 'Seventeen',   name: 'Jun' },
    { group: 'Seventeen',   name: 'Hoshi' },
    { group: 'Seventeen',   name: 'Wonwoo' },
    { group: 'Seventeen',   name: 'Woozi' },
    { group: 'Seventeen',   name: 'The8' },
    { group: 'Seventeen',   name: 'Mingyu' },
    { group: 'Seventeen',   name: 'DK' },
    { group: 'Seventeen',   name: 'Seungkwan' },
    { group: 'Seventeen',   name: 'Vernon' },
    { group: 'Seventeen',   name: 'Dino' },
    { group: 'TWICE',       name: 'Nayeon' },
    { group: 'TWICE',       name: 'Jeongyeon' },
    { group: 'TWICE',       name: 'Momo' },
    { group: 'TWICE',       name: 'Sana' },
    { group: 'TWICE',       name: 'Jihyo' },
    { group: 'TWICE',       name: 'Mina' },
    { group: 'TWICE',       name: 'Dahyun' },
    { group: 'TWICE',       name: 'Chaeyoung' },
    { group: 'TWICE',       name: 'Tzuyu' },
    { group: 'EXO',         name: 'Xiumin' },
    { group: 'EXO',         name: 'Suho' },
    { group: 'EXO',         name: 'Lay' },
    { group: 'EXO',         name: 'Baekhyun' },
    { group: 'EXO',         name: 'Chen' },
    { group: 'EXO',         name: 'Chanyeol' },
    { group: 'EXO',         name: 'D.O' },
    { group: 'EXO',         name: 'Kai' },
    { group: 'EXO',         name: 'Sehun' },
];

// ── 그룹 목록 ──
const GROUPS = [
    { name: 'BTS',        emoji: '💜' },
    { name: 'BLACKPINK',  emoji: '🖤' },
    { name: 'aespa',      emoji: '🤖' },
    { name: 'NewJeans',   emoji: '🐰' },
    { name: 'Stray Kids', emoji: '🐺' },
    { name: 'IVE',        emoji: '🌟' },
    { name: 'TXT',        emoji: '🌀' },
    { name: 'ENHYPEN',    emoji: '🌙' },
    { name: '(G)I-DLE',  emoji: '👑' },
    { name: 'Seventeen',  emoji: '💎' },
    { name: 'TWICE',      emoji: '🍭' },
    { name: 'EXO',        emoji: '🪐' },
    { name: 'MONSTA X',   emoji: '⚡' },
    { name: 'GOT7',       emoji: '🕊️' },
    { name: 'NCT 127',    emoji: '🌐' },
    { name: 'NCT Dream',  emoji: '💚' },
];

function t() { return TRANSLATIONS[currentLang]; }

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('oracle_lang', lang);
    updateLangButtons();
    // 탭 버튼 텍스트 업데이트
    updateTabLabels();
    // 결과가 이미 표시중이면 해당 언어로 즉시 재렌더링
    if (currentTab === 'fortune') {
        if (lastSeed !== null && lastInputs !== null) {
            renderFortune(lastInputs, lastSeed);
        }
    } else if (currentTab === 'match') {
        renderMatchTab();
    } else if (currentTab === 'group') {
        renderGroupTab();
    }
    // 버튼 텍스트도 현재 언어로
    const btn = document.querySelector('.action-btn');
    if (btn) btn.textContent = t().ui.readBtn;
}

function updateTabLabels() {
    const ui = t().ui;
    const fortuneBtn = document.querySelector('[data-tab="fortune"]');
    const matchBtn   = document.querySelector('[data-tab="match"]');
    const groupBtn   = document.querySelector('[data-tab="group"]');
    if (fortuneBtn) fortuneBtn.textContent = ui.tabFortune;
    if (matchBtn)   matchBtn.textContent   = ui.tabMatch;
    if (groupBtn)   groupBtn.textContent   = ui.tabGroup;
}

function updateLangButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
}

// ── K-pop 콘텐츠 데이터 ──
const luckyColors = [
    { name: 'Cosmic Violet', hex: '#9b59b6', emoji: '💜' },
    { name: 'Rose Quartz',   hex: '#f4a7b9', emoji: '🌸' },
    { name: 'Midnight Blue', hex: '#2c3e7a', emoji: '🌙' },
    { name: 'Starlight Gold',hex: '#d4af37', emoji: '✨' },
    { name: 'Cherry Blossom',hex: '#ffb7c5', emoji: '🌺' },
    { name: 'Aura White',    hex: '#f0e6ff', emoji: '🤍' },
    { name: 'Neon Lavender', hex: '#c9a8ff', emoji: '💫' },
    { name: 'Sunset Coral',  hex: '#ff6b6b', emoji: '🍑' },
    { name: 'Sage Green',    hex: '#7fb069', emoji: '🍃' },
    { name: 'Powder Blue',   hex: '#a8d8ea', emoji: '🩵' },
];

const idolEnergies = [
    { idol: 'BTS RM',        vibe: 'Deep thinker energy. Read something meaningful today.',      emoji: '📚', group: 'BTS' },
    { idol: 'BTS Jimin',     vibe: 'Graceful & emotional. Your feelings are valid today.',       emoji: '🌙', group: 'BTS' },
    { idol: 'BTS V',         vibe: 'Artistic & free-spirited. Express yourself boldly.',         emoji: '🎨', group: 'BTS' },
    { idol: 'BTS Jungkook',  vibe: 'Golden energy. Whatever you try today, you will shine.',     emoji: '⭐', group: 'BTS' },
    { idol: 'BTS Suga',      vibe: 'Quiet intensity. Rest is productive too.',                   emoji: '🎵', group: 'BTS' },
    { idol: 'BTS j-hope',    vibe: 'Pure sunshine energy. Spread your light today.',             emoji: '☀️', group: 'BTS' },
    { idol: 'BTS Jin',       vibe: 'Worldwide handsome energy. Confidence is your power.',       emoji: '💎', group: 'BTS' },
    { idol: 'BLACKPINK Jennie', vibe: 'Boss energy. Walk like you own the universe.',            emoji: '👑', group: 'BLACKPINK' },
    { idol: 'BLACKPINK Lisa',   vibe: 'Unstoppable energy. Dance through your challenges.',      emoji: '🔥', group: 'BLACKPINK' },
    { idol: 'BLACKPINK Rosé',   vibe: 'Poetic energy. Find beauty in small things today.',       emoji: '🌹', group: 'BLACKPINK' },
    { idol: 'BLACKPINK Jisoo',  vibe: 'Pure charm energy. Be kind — it will return to you.',    emoji: '🌸', group: 'BLACKPINK' },
    { idol: 'aespa Karina',     vibe: 'Main character energy. You are the protagonist today.',   emoji: '🤖', group: 'aespa' },
    { idol: 'aespa Winter',     vibe: 'Cold exterior, warm heart. Someone needs your warmth.',   emoji: '❄️', group: 'aespa' },
    { idol: 'NewJeans Hanni',   vibe: 'Cool & effortless energy. Go at your own pace.',          emoji: '🐰', group: 'NewJeans' },
    { idol: 'NewJeans Minji',   vibe: 'Natural leader energy. Trust your instincts today.',      emoji: '🦋', group: 'NewJeans' },
    { idol: 'IVE Wonyoung',     vibe: 'Iconic energy. Stand tall — you were born for this.',    emoji: '💫', group: 'IVE' },
    { idol: 'Stray Kids Felix', vibe: 'Warm & powerful energy. Your passion is contagious.',    emoji: '🦊', group: 'Stray Kids' },
    { idol: '(G)I-DLE Soyeon', vibe: 'Creative genius energy. Make something today.',           emoji: '🎤', group: '(G)I-DLE' },
    { idol: 'TXT Yeonjun',      vibe: 'Trendsetter energy. Be unapologetically yourself.',      emoji: '🌀', group: 'TXT' },
    { idol: 'ENHYPEN Sunghoon', vibe: 'Elegant & precise energy. Details matter today.',        emoji: '⛸️', group: 'ENHYPEN' },
];

const kpopVibes = [
    "Your aura today: main character of a K-drama. No skipping this episode. 🎬",
    "The universe said: you're giving idol-on-comeback energy today. 💿",
    "Today's concept: mysterious and untouchable. Very fourth-gen of you. ✨",
    "Your energy matches a fan-favorite b-side track. Underrated but legendary. 🎵",
    "The stars aligned and said: this is your fancam moment. Own it. 📸",
    "Today you're the center of the universe's choreography. Don't miss your cue. 💃",
    "Your vibe: debut stage energy. Nervous but make it look flawless. 🌟",
    "The oracle detects: you're the dark horse of today. Surprise everyone. 🐎",
    "Today's energy: fan meet energy. Warm, genuine, unforgettable. 🤝",
    "You're giving World Tour headline energy. The stage is yours. 🌍",
];

// 운세 구성 요소
const keywords = ["용신", "희신", "합", "충", "파", "해", "귀인", "록", "살", "공망", "비견", "겁재", "식신", "상관", "편재", "정재", "편관", "정관", "편인", "정인"];
const states = ["강성하니", "서리니", "비치니", "머무니", "맴도니"];
const advices = [
    "내실을 기하십시오.", "과감히 나아가십시오.", "조력을 구하십시오.", "언행을 삼가십시오.", "변동을 피하십시오.",
    "욕심을 버리십시오.", "인연을 소중히 하십시오.", "지혜를 발휘하십시오.", "잠시 쉬어가십시오.", "기회를 포착하십시오."
];

// 100개 저녁 메뉴 리스트
const dinnerMenus = [
    "삼겹살과 쌈채소", "순두부찌개", "초밥 세트", "수제 돈가스", "한우 스테이크", "제육볶음", "해물 칼국수", "크림 파스타", "짬뽕", "짜장면",
    "연어 덮밥", "갈비탕", "떡볶이", "후라이드 치킨", "쌀국수", "비빔밥", "평양냉면", "닭볶음탕", "해물파전", "감자탕",
    "마라탕", "양꼬치", "수제 버거", "인도 커리", "똠양꿍", "불고기 전골", "아구찜", "육회 비빔밥", "고등어 구이", "청국장",
    "팟타이", "봉골레 파스타", "라자냐", "스키야키", "샤브샤브", "보쌈", "족발", "곱창 전골", "장어 구이", "추어탕",
    "베이글", "타코", "규동", "텐동", "오코노미야키", "김치찜", "찜닭", "간장 게장", "부대찌개", "동태탕",
    "들깨 수제비", "낙지 볶음", "오징어 소면", "치즈 리조또", "탄탄면", "멘보샤", "전복죽", "오리 주물럭", "순대국밥", "돼지국밥",
    "소고기 무국", "닭갈비", "코다리 조림", "우렁 쌈밥", "곤드레밥", "알리오 올리오", "시카고 피자", "월남쌈", "분짜", "나시고랭",
    "카츠동", "사케동", "우니 파스타", "양갈비", "전복 삼계탕", "해물탕", "조개구이", "물회", "대구지리탕", "소머리국밥",
    "김치전", "오므라이스", "함박 스테이크", "마파두부", "꿔바로우", "훠궈", "라멘", "소바", "치즈 돈가스", "회덮밥",
    "생선까스", "에그 베네딕트", "프렌치 토스트", "샐러드", "고소한 라떼와 샌드위치", "갈치조림", "육개장", "수육 국밥", "닭발", "골뱅이 무침"
];

const wittyReasons = [
    "근성장이 당신을 기다립니다. 오늘은 단백질이 답이다!",
    "몸속 미토콘드리아가 이 메뉴를 보고 박수를 치고 있네요.",
    "영양 성분표를 보니 거의 보약 수준, 이건 못 참지!",
    "오늘의 스트레스는 이 메뉴의 아미노산이 해결해 줄 거예요.",
    "내 몸을 위한 가장 힙한 투자, 바로 이 식사입니다.",
    "혈액순환이 '오예!'를 외칠 만한 완벽한 밸런스네요.",
    "도파민 대신 건강한 행복감을 채워줄 마법의 메뉴!",
    "지방은 빼고 행복은 더하고, 오늘 식단 완전 럭키비키잖아?",
    "당신의 장내 미생물들이 이 메뉴를 간절히 원하고 있어요.",
    "거울 속 당신이 말합니다. '오늘 이 정도 보상은 받아야지!'",
    "뇌세포가 기뻐할 오메가3의 축복이 가득한 선택입니다.",
    "오늘 당신의 아우라는 이 메뉴의 비타민 함량과 비례합니다.",
    "면역력이 '레벨업' 되었습니다. 맛있게 드시기만 하세요.",
    "식후 혈당 스파이크 걱정 없는 평온한 미식의 길!",
    "건강하게 먹으면 0칼로리...는 아니지만 기분은 최고!",
    "당신의 에너지가 100% 충전될 골든 타임입니다.",
    "오늘 하루 고생한 당신의 간이 이 메뉴를 추천합니다.",
    "몸이 가벼워지는 소리, 들리시나요? (안 들리면 한 입 더!)",
    "이 메뉴를 먹으면 오늘 밤 꿀잠 예약, 수면의 질 상승!",
    "세포 하나하나가 '감사합니다'라고 인사할 식단이네요.",
    "탄단지의 완벽한 삼중주, 당신의 몸을 위한 오케스트라!",
    "피부광이 살아나는 소리! 오늘 저녁 메뉴가 비결입니다.",
    "오늘 당신의 기운은 딱 이 온도를 원하고 있었군요.",
    "이건 그냥 음식이 아니라 우주가 준 에너지 포션이에요.",
    "근손실 예방 완료! 우주는 당신의 근육을 응원합니다.",
    "지친 심신을 달래줄 소울 푸드, 영양까지 챙긴 건 덤!",
    "오늘 식사로 당신의 매력이 2.5% 더 상승할 예정입니다.",
    "소화기관이 '편안함' 모드로 진입하게 될 거예요.",
    "신선함이 입안에서 팝핀을 추는 맛, 건강은 기본이죠.",
    "오늘의 당신에게 가장 필요한 '갓생' 식단!",
    "심장이 쫄깃해지는 맛이지만 혈압은 안정시켜 줄게요.",
    "비타민 B군이 떼창을 부르는 에너제틱한 메뉴입니다.",
    "지구 환경과 내 몸을 동시에 생각하는 의식 있는 선택!",
    "한 입 먹을 때마다 행운 수치가 1씩 올라가는 중...",
    "당신의 직감이 옳았습니다. 몸이 원하는 건 바로 이거죠.",
    "스트레스 호르몬인 코르티솔이 항복을 선언하는 맛!",
    "눈이 번쩍 뜨이는 영양 폭탄, 오늘 공부/업무 대박 날 듯?",
    "이 메뉴 먹고 나면 내일 아침 붓기 제로, 미모 뿜뿜!",
    "식단 관리도 엣지 있게, 당신의 센스에 무릎을 탁!",
    "세포 재생의 시간! 우주가 보낸 재생 물약입니다.",
    "항산화 성분이 당신의 노화를 잠시 멈춰 세울 거예요.",
    "오늘 당신의 소화력은 거의 용광로 급, 다 흡수해버려요!",
    "영양소들이 당신의 몸속에서 파티를 열 준비를 마쳤습니다.",
    "맛있게 먹고 운동하면 그게 바로 국가가 허락한 유일한 마약!",
    "오늘의 날씨와 당신의 컨디션, 그리고 이 메뉴의 완벽한 조화.",
    "몸속 수분이 환호하는 촉촉하고 건강한 선택입니다.",
    "지방 연소 모드 on! 이 메뉴가 부스터 역할을 해줄 거예요.",
    "당신의 뼈와 근육이 든든해지는 소리가 여기까지 들려요.",
    "멘탈 관리의 시작은 잘 먹는 것, 오늘 멘탈 금강산 급!",
    "오늘 당신의 아침부터 저녁까지의 고생을 보상해 줄 유일한 맛.",
    "유기농 감성이 듬뿍 담긴, 몸이 먼저 알아보는 메뉴입니다.",
    "행복 지수가 떡상하는 중! 맛있는 건 건강하게 먹어야죠.",
    "당신의 위장이 '고마워'라고 문자 보낼 것 같은 메뉴네요.",
    "피로 곰 100마리를 쫓아낼 강력한 영양의 힘!",
    "오늘 이 식사를 마치면 당신은 '어제보다 나은 나'가 됩니다.",
    "건강한 식습관의 아이콘, 당신의 선택에 박수를 보냅니다.",
    "입맛은 살리고 살은 안 찌는 우주적 미스테리 메뉴!",
    "오늘 당신의 mbti가 이 메뉴를 간절히 원하고 있습니다.",
    "세로토닌 분비 뿜뿜! 행복은 멀리 있지 않아요.",
    "인생은 짧고 맛있는 건 많지만, 건강한 건 더 많죠!",
    "지구상에서 가장 힙한 영양 밸런스, 바로 오늘입니다.",
    "근력 1 상승, 민첩 1 상승, 매력 10 상승 확정!",
    "오늘 당신의 눈동자에 치얼스... 가 아니라 이 메뉴에 치얼스!",
    "몸 안의 독소가 '저 가요~' 하고 인사하며 떠날 거예요.",
    "클린 식단의 정석, 하지만 맛은 반칙 수준!",
    "오늘 당신의 운명에 '건강한 만찬'이 새겨져 있네요.",
    "이 메뉴 먹고 파이팅 하면 못 이길 적이 없을 듯!",
    "당신의 피부가 '광채 모드'로 전환되었습니다.",
    "지친 뇌를 깨워줄 신선한 영양의 자극이 필요할 때!",
    "오늘 저녁, 당신은 세상에서 가장 건강한 주인공입니다.",
    "맛있음 + 건강함 = 당신의 오늘 밤 기분!",
    "혈관들이 고속도로처럼 시원하게 뚫리는 느낌적인 느낌!",
    "오늘 당신의 에너지 레벨은 '최고조'를 향해 갑니다.",
    "식사 후 몰려오는 식곤증 대신 상쾌함을 드릴게요.",
    "지방은 낮추고 자존감은 높여주는 마법의 식단!",
    "오늘 당신이 이걸 먹는 건 다 우주의 계획안에 있습니다.",
    "건강한 식사는 최고의 자기관리, 당신은 이미 프로!",
    "한 입의 행복이 백 년의 건강으로 이어지는 기적.",
    "오늘 당신의 세포들은 축제 분위기! 메뉴가 너무 좋아서요.",
    "몸의 밸런스가 완벽하게 맞춰지는 기분 좋은 식사 시간.",
    "비주얼은 합격, 영양은 만점, 당신의 선택은 천재!",
    "스트레스 타파! 입안 가득 퍼지는 건강한 즐거움.",
    "오늘 하루 수고한 나를 위한 가장 정직한 선물입니다.",
    "당신의 소화력이 우주를 삼킬 기세네요, 맛있게 드세요!",
    "영양소가 골고루! 몸 안의 퍼즐이 완성되는 순간입니다.",
    "이 메뉴를 먹으면 오늘 꿈에 행운의 요정이 나타날지도?",
    "건강도 트렌드! MZ 세대가 열광할 완벽한 영양 조합.",
    "몸이 가벼워지면 마음도 가벼워지는 법, 오늘 산뜻하네요.",
    "지구 끝까지 갈 수 있을 것 같은 에너지가 솟구칠 거예요.",
    "오늘 당신의 아침 거울이 이 메뉴를 추천했을지도 몰라요.",
    "식탁 위의 작은 우주, 그 안에서 당신은 가장 빛나는 별!",
    "맛의 정점, 영양의 정점, 오늘 당신은 정점에 서 있습니다.",
    "심플하지만 강력한 건강의 힘을 믿어보세요.",
    "오늘 이 식사로 당신의 럭키 포인트가 풀충전되었습니다.",
    "세상이 당신을 힘들게 해도, 이 메뉴는 당신 편이에요.",
    "건강하게 먹는 습관이 당신의 미래를 바꿉니다. 오늘처럼요!",
    "이 메뉴와 함께라면 오늘 밤은 걱정 없이 꿀잠 가능!",
    "당신의 몸이 보내는 신호에 귀를 기울인 완벽한 답변입니다.",
    "맛있게 먹으면 보약, 건강하게 먹으면 명약, 이건 둘 다!",
    "자, 이제 행운을 한 입 크게 베어 물 차례입니다!"
];

// ── Shopee 제휴 설정 ──
// TODO: affiliate.shopee.co.id (인도네시아) 또는 shopee.com.br/m/afiliados (브라질) 가입 후
//       발급받은 트래킹 코드로 교체하세요.
const SHOPEE_AFFILIATE_ID = '11320731721';

// 타임존 기반 지역 감지 → Shopee 도메인 분기
function getShopeeConfig() {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (tz.includes('Jakarta') || tz.includes('Makassar') || tz.includes('Jayapura'))
        return { domain: 'shopee.co.id',   lang: 'id', label: 'Shopee Indonesia' };
    if (tz.includes('Sao_Paulo') || tz.includes('Fortaleza') || tz.includes('Manaus') || tz.includes('Belem'))
        return { domain: 'shopee.com.br',  lang: 'pt', label: 'Shopee Brasil' };
    if (tz.includes('Santiago'))
        return { domain: 'shopee.cl',      lang: 'es', label: 'Shopee Chile' };
    if (tz.includes('Bogota'))
        return { domain: 'shopee.com.co',  lang: 'es', label: 'Shopee Colombia' };
    if (tz.includes('Manila'))
        return { domain: 'shopee.ph',      lang: 'en', label: 'Shopee Philippines' };
    if (tz.includes('Kuala_Lumpur'))
        return { domain: 'shopee.com.my',  lang: 'en', label: 'Shopee Malaysia' };
    if (tz.includes('Bangkok'))
        return { domain: 'shopee.co.th',   lang: 'th', label: 'Shopee Thailand' };
    if (tz.includes('Ho_Chi_Minh') || tz.includes('Hanoi'))
        return { domain: 'shopee.vn',      lang: 'vi', label: 'Shopee Vietnam' };
    if (tz.includes('Singapore'))
        return { domain: 'shopee.sg',      lang: 'en', label: 'Shopee Singapore' };
    // 기본값: 인도네시아 (최대 시장)
    return { domain: 'shopee.co.id', lang: 'id', label: 'Shopee' };
}

// 메뉴 유형 → Shopee 검색 키워드 매핑
// K-pop 팬들이 실제로 구매하는 한국 식품 카테고리 기준
const MENU_KEYWORD_MAP = {
    ramen: {
        menus: ['라멘', '짬뽕', '쌀국수', '탄탄면', '해물 칼국수', '들깨 수제비', '팟타이', '오징어 소면', '소바', '분짜'],
        keyword: { id: 'ramen korea buldak', pt: 'ramen coreano buldak', es: 'ramen coreano', en: 'korean ramen buldak' }
    },
    bbq: {
        menus: ['삼겹살', '불고기 전골', '장어 구이', '고등어 구이', '조개구이', '양갈비', '오리 주물럭', '닭갈비', '양꼬치'],
        keyword: { id: 'bumbu bbq korea bulgogi', pt: 'molho bbq coreano bulgogi', es: 'salsa bbq coreana', en: 'korean bbq sauce bulgogi' }
    },
    rice: {
        menus: ['비빔밥', '연어 덮밥', '규동', '카츠동', '사케동', '곤드레밥', '우렁 쌈밥', '나시고랭', '회덮밥', '육회 비빔밥', '오므라이스'],
        keyword: { id: 'bibimbap kit makanan korea', pt: 'kit bibimbap coreano', es: 'kit bibimbap coreano', en: 'bibimbap korean food kit' }
    },
    fried: {
        menus: ['후라이드 치킨', '치킨', '수제 돈가스', '치즈 돈가스', '생선까스', '텐동', '꿔바로우'],
        keyword: { id: 'bumbu ayam goreng korea', pt: 'tempero frango coreano', es: 'condimento pollo coreano', en: 'korean fried chicken mix' }
    },
    snack: {
        menus: ['떡볶이', '해물파전', '김치전', '타코', '베이글'],
        keyword: { id: 'tteokbokki snack korea', pt: 'tteokbokki snack coreano', es: 'tteokbokki snack coreano', en: 'tteokbokki korean snack' }
    },
};

function getShopeeKeyword(menuName, lang) {
    for (const cat of Object.values(MENU_KEYWORD_MAP)) {
        if (cat.menus.some(m => menuName.includes(m.replace(' ', '')) || menuName === m)) {
            return cat.keyword[lang] || cat.keyword['en'];
        }
    }
    // 기본: 한국 식품 스낵
    const defaults = { id: 'makanan korea snack kpop', pt: 'comida coreana snack kpop', es: 'comida coreana snack kpop', en: 'korean food snack kpop' };
    return defaults[lang] || defaults['en'];
}

function getShopeeLink(menuName) {
    const config  = getShopeeConfig();
    const keyword = getShopeeKeyword(menuName, config.lang);
    const query   = encodeURIComponent(keyword);
    return {
        url:   `https://${config.domain}/search?keyword=${query}&af_source=${SHOPEE_AFFILIATE_ID}`,
        label: config.label
    };
}

// ── 탭 전환 ──
function switchTab(tabName) {
    currentTab = tabName;
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.toggle('active', panel.dataset.panel === tabName);
    });
    if (tabName === 'match') renderMatchTab();
    if (tabName === 'group') renderGroupTab();
}

// ── 궁합 계산 ──
function calcCompatibility(userSeed, idolName) {
    let h = 0;
    for (let i = 0; i < idolName.length; i++) {
        h = (h * 31 + idolName.charCodeAt(i)) % 1000000;
    }
    return ((userSeed ^ h) * 9301 + 49297) % 233280 % 101;
}

function getCompatTier(score) {
    const tiers = t().compatTiers;
    for (const tier of tiers) {
        if (score >= tier.min) return tier;
    }
    return tiers[tiers.length - 1];
}

// ── 궁합 탭 렌더링 ──
function renderMatchTab() {
    const tr = t();
    const ui = tr.ui;

    // Group idols by group
    const grouped = {};
    IDOLS.forEach(idol => {
        if (!grouped[idol.group]) grouped[idol.group] = [];
        grouped[idol.group].push(idol.name);
    });

    let optgroups = '';
    for (const [groupName, members] of Object.entries(grouped)) {
        const options = members.map(name =>
            `<option value="${groupName}|${name}">${name}</option>`
        ).join('');
        optgroups += `<optgroup label="${groupName}">${options}</optgroup>`;
    }

    const matchPanel = document.getElementById('match-panel');
    if (!matchPanel) return;

    matchPanel.innerHTML = `
        <div class="tab-content-inner">
            <div class="tab-section-title">${ui.matchTitle}</div>
            <div class="idol-selector-wrap">
                <select id="idol-select" class="idol-select">
                    <option value="">${ui.matchSelect}</option>
                    ${optgroups}
                </select>
            </div>
            <button class="action-btn match-btn" onclick="checkCompatibility()">${ui.matchBtn}</button>
            <div id="compat-result"></div>
        </div>
    `;
}

function checkCompatibility() {
    const ui = t().ui;
    if (lastSeed === null) {
        alert(ui.matchAlert);
        return;
    }
    const select = document.getElementById('idol-select');
    if (!select || !select.value) {
        alert(ui.matchAlert);
        return;
    }
    const [groupName, idolName] = select.value.split('|');
    const fullName = `${groupName} ${idolName}`;
    const score = calcCompatibility(lastSeed, fullName);
    const tier = getCompatTier(score);

    const resultDiv = document.getElementById('compat-result');
    if (!resultDiv) return;

    resultDiv.innerHTML = `
        <div class="compat-result-card">
            <div class="compat-idol-name">${groupName} — ${idolName}</div>
            <div class="compat-label">${ui.matchWith}</div>
            <div class="compat-score-wrap">
                <div class="compat-score" id="compat-score-num">0</div>
                <div class="compat-percent">%</div>
            </div>
            <div class="compat-tier-label">${tier.label}</div>
            <div class="compat-tier-text">${tier.text}</div>
        </div>
    `;

    // Animate number
    let current = 0;
    const target = score;
    const increment = Math.max(1, Math.floor(target / 40));
    const timer = setInterval(() => {
        current = Math.min(current + increment, target);
        const el = document.getElementById('compat-score-num');
        if (el) el.textContent = current;
        if (current >= target) clearInterval(timer);
    }, 30);

    trackEvent('compat_check', { idol: fullName, score, tier: tier.label, lang: currentLang });
}

// ── 그룹 운세 탭 렌더링 ──
function renderGroupTab() {
    const tr = t();
    const ui = tr.ui;

    const btns = GROUPS.map(g =>
        `<button class="group-btn" onclick="showGroupFortune('${g.name.replace(/'/g, "\\'")}', '${g.emoji}')">
            <span class="group-emoji">${g.emoji}</span>
            <span class="group-name">${g.name}</span>
        </button>`
    ).join('');

    const groupPanel = document.getElementById('group-panel');
    if (!groupPanel) return;

    groupPanel.innerHTML = `
        <div class="tab-content-inner">
            <div class="tab-section-title">${ui.groupTitle}</div>
            <div class="group-grid">${btns}</div>
            <div id="group-fortune-result"></div>
        </div>
    `;
}

function showGroupFortune(groupName, emoji) {
    const tr = t();
    const ui = tr.ui;

    // Seed based on today's date + group name
    const today = new Date();
    const dateStr = `${today.getFullYear()}${today.getMonth()}${today.getDate()}${groupName}`;
    let seed = 0;
    for (let i = 0; i < dateStr.length; i++) {
        seed = (seed * 31) + dateStr.charCodeAt(i);
        seed = seed % 1000000;
    }

    const kwIdx = seed % tr.keywords.length;
    const stIdx = Math.floor(seed / 3) % tr.states.length;
    const adIdx = Math.floor(seed / 7) % tr.advices.length;
    const fortuneText = tr.fortuneTemplate(tr.keywords[kwIdx], tr.states[stIdx], tr.advices[adIdx]);

    const colorIdx = Math.floor(seed / 11) % luckyColors.length;
    const color = luckyColors[colorIdx];

    const resultDiv = document.getElementById('group-fortune-result');
    if (!resultDiv) return;

    // Highlight active group button
    document.querySelectorAll('.group-btn').forEach(btn => {
        btn.classList.toggle('active', btn.querySelector('.group-name').textContent === groupName);
    });

    resultDiv.innerHTML = `
        <div class="group-fortune-card">
            <div class="group-fortune-header">
                <span class="group-fortune-emoji">${emoji}</span>
                <span class="group-fortune-name">${groupName}</span>
            </div>
            <div class="group-fortune-text">"${fortuneText}"</div>
            <div class="group-fortune-color">
                <span class="color-dot" style="background:${color.hex}"></span>
                ${color.emoji} ${color.name}
            </div>
        </div>
    `;

    trackEvent('group_fortune', { group: groupName, lang: currentLang });
}

// ── 카드 저장 ──
function downloadCard() {
    const el = document.getElementById('display-area');
    if (!el || typeof html2canvas === 'undefined') return;
    html2canvas(el, {
        backgroundColor: '#08000f',
        scale: 2,
        useCORS: true,
        logging: false,
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'oracle-reading.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
    trackEvent('save_card', { lang: currentLang });
}

// ── GA4 이벤트 헬퍼 ──
function trackEvent(eventName, params = {}) {
    if (typeof gtag === 'function') {
        gtag('event', eventName, params);
    }
}

// ── 운세 보기 ──
function getFortune() {
    const y    = document.getElementById('year').value;
    const m    = document.getElementById('month').value;
    const d    = document.getElementById('day').value;
    const w    = document.getElementById('weight').value;
    const mbti = document.getElementById('mbti').value.toUpperCase();

    if (!y || !m || !d) {
        alert(t().ui.alertFill);
        return;
    }

    trackEvent('fortune_read', {
        has_mbti: mbti.length > 0,
        has_weight: w.length > 0,
        birth_year: y,
        lang: currentLang,
    });

    const today   = new Date();
    const dateStr = `${y}${m}${d}${w}${mbti}${today.getFullYear()}${today.getMonth()}${today.getDate()}`;
    let seed = 0;
    for (let i = 0; i < dateStr.length; i++) {
        seed = (seed * 31) + dateStr.charCodeAt(i);
        seed = seed % 1000000;
    }

    lastSeed   = seed;
    lastInputs = { y, m, d, mbti };
    menuIsOpen = false;   // 새 운세 조회 시 메뉴 상태 초기화
    renderFortune(lastInputs, seed);
}

function renderFortune({ y, m, d, mbti }, seed) {
    const tr = t();

    const kwIdx = seed % tr.keywords.length;
    const stIdx = Math.floor(seed / 3) % tr.states.length;
    const adIdx = Math.floor(seed / 7) % tr.advices.length;
    const fortuneText = tr.fortuneTemplate(tr.keywords[kwIdx], tr.states[stIdx], tr.advices[adIdx]);

    const colorIdx = Math.floor(seed / 11) % luckyColors.length;
    const idolIdx  = Math.floor(seed / 13) % idolEnergies.length;
    const vibeIdx  = Math.floor(seed / 17) % kpopVibes.length;
    const luckyNum = (seed % 99) + 1;

    const color = luckyColors[colorIdx];
    const idol  = idolEnergies[idolIdx];
    const vibe  = kpopVibes[vibeIdx];

    document.getElementById('display-area').innerHTML = `
        <div class="fortune-container">
            <div class="fortune-meta">DESTINY CHART • ${y}.${m}.${d} • ${mbti || 'UNKNOWN'}</div>
            <div class="fortune-result" onclick="revealMenu(${seed})">"${fortuneText}"</div>

            <div class="kpop-cards">
                <div class="kcard color-card">
                    <div class="kcard-label">${tr.ui.luckyColor}</div>
                    <div class="color-swatch" style="background:${color.hex}"></div>
                    <div class="kcard-value">${color.emoji} ${color.name}</div>
                </div>
                <div class="kcard number-card">
                    <div class="kcard-label">${tr.ui.luckyNumber}</div>
                    <div class="kcard-big">${luckyNum}</div>
                </div>
                <div class="kcard idol-card">
                    <div class="kcard-label">${tr.ui.idolEnergy}</div>
                    <div class="kcard-idol-name">${idol.idol} ${idol.emoji}</div>
                    <div class="kcard-idol-vibe">${idol.vibe}</div>
                </div>
            </div>

            <div class="kpop-vibe-box">
                <div class="kpop-vibe-text">${vibe}</div>
            </div>

            <div class="fortune-tap-hint">${tr.ui.tapHint}</div>
            <div id="menu-recommendation"></div>
        </div>
    `;

    // 메뉴가 이미 열려 있었으면 새 언어로 즉시 재렌더링
    if (menuIsOpen) renderMenu(seed);
}

// ── 메뉴 공개 (사용자 클릭) ──
function revealMenu(seed) {
    if (menuIsOpen) return;   // 이미 열려 있으면 무시
    menuIsOpen = true;
    renderMenu(seed);
}

// ── 메뉴 실제 렌더링 (언어 전환 재렌더 포함) ──
function renderMenu(seed) {
    const menuArea = document.getElementById('menu-recommendation');
    if (!menuArea) return;

    const tr   = t();
    const mIdx = (seed + new Date().getHours() * 13) % tr.menus.length;
    const rIdx = (seed + new Date().getHours() * 7)  % tr.wittyReasons.length;

    const menuName = tr.menus[mIdx] || tr.menus[0];
    const reason   = tr.wittyReasons[rIdx] || tr.wittyReasons[0];

    trackEvent('menu_revealed', { menu_name: menuName, lang: currentLang });

    const shopee = getShopeeLink(menuName);

    const ui = tr.ui;
    menuArea.innerHTML = `
        <div class="menu-content">
            <div class="witty-reason">${reason}</div>
            <span class="menu-label">${ui.menuLabel}</span>
            <span class="menu-name">${menuName}</span>
            <div class="menu-decoration">✧</div>
        </div>

        <div class="shopee-section">
            <p class="shopee-hint">${ui.shopeeHint}</p>
            <a class="shopee-btn"
               href="${shopee.url}"
               target="_blank"
               rel="noopener noreferrer sponsored"
               onclick="trackShopeeClick('${menuName}')">
                <span class="shopee-icon">🛍️</span>
                <span class="shopee-text">
                    <span class="shopee-main">${ui.shopeeMain(menuName, shopee.label)}</span>
                    <span class="shopee-sub">K-food · K-snacks · Fast delivery</span>
                </span>
                <span class="shopee-arrow">→</span>
            </a>
            <p class="shopee-disclosure">${ui.shopeeDisclosure}</p>
        </div>

        <div class="share-section">
            <span class="share-label">${ui.shareLabel}</span>
            <div class="share-buttons">
                <button class="share-btn twitter" onclick="shareOnTwitter('${menuName}')">
                    ${ui.shareTwitter}
                </button>
                <button class="share-btn copy" id="copy-btn" onclick="copyLink()">
                    ${ui.shareCopy}
                </button>
                <button class="share-btn save-card" onclick="downloadCard()">
                    ${ui.saveCard}
                </button>
            </div>
        </div>
    `;
}

// ── Shopee 클릭 추적 ──
function trackShopeeClick(menuName) {
    const config = getShopeeConfig();
    trackEvent('shopee_click', {
        menu_name: menuName,
        shopee_domain: config.domain,
        shopee_region: config.label,
        affiliate: 'shopee_affiliate'
    });
}

// ── Twitter / X 공유 ──
function shareOnTwitter(menuName) {
    const fortuneEl = document.querySelector('.fortune-result');
    const fortuneText = fortuneEl ? fortuneEl.textContent.replace(/^"|"$/g, '') : '';

    const text = [
        `✨ The Oracle read my K-fate today ✨`,
        ``,
        `${fortuneText}`,
        ``,
        `🍜 Tonight's divine menu: ${menuName}`,
        ``,
        `✦ Discover your destiny → ${window.location.href}`,
        `#TheOracle #KFortune #KPop #운세`
    ].join('\n');

    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(twitterUrl, '_blank', 'noopener,noreferrer');

    // GA4: share 이벤트
    trackEvent('share', { method: 'twitter', content_type: 'fortune_result' });
}

// ── 링크 복사 ──
function copyLink() {
    const btn = document.getElementById('copy-btn');
    navigator.clipboard.writeText(window.location.href).then(() => {
        btn.textContent = t().ui.copied;
        btn.classList.add('copied');
        setTimeout(() => {
            btn.textContent = t().ui.shareCopy;
            btn.classList.remove('copied');
        }, 2000);
    }).catch(() => {
        const ta = document.createElement('textarea');
        ta.value = window.location.href;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        btn.textContent = t().ui.copied;
        btn.classList.add('copied');
        setTimeout(() => {
            btn.textContent = t().ui.shareCopy;
            btn.classList.remove('copied');
        }, 2000);
    });

    trackEvent('share', { method: 'copy_link', content_type: 'page_url' });
}

// ── 테마 토글 ──
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton(newTheme);
    trackEvent('theme_toggle', { theme: newTheme });
}

function updateThemeButton(theme) {
    const btn = document.getElementById('theme-btn');
    if (btn) btn.textContent = theme === 'light' ? 'DARK' : 'LIGHT';
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButton(savedTheme);

    // 언어 초기화: 저장값 → 브라우저 언어 자동감지 → 기본 영어
    const saved = localStorage.getItem('oracle_lang');
    if (saved && TRANSLATIONS[saved]) {
        currentLang = saved;
    } else {
        currentLang = 'ko'; // 기본값: 한국어
    }
    updateLangButtons();
    updateTabLabels();
    const btn = document.querySelector('.action-btn');
    if (btn) btn.textContent = t().ui.readBtn;

    // 별 생성
    const container = document.querySelector('.stars-container');
    if (container) {
        for (let i = 0; i < 80; i++) {
            const star = document.createElement('div');
            star.style.cssText = `
                position: absolute;
                width: ${Math.random() * 2 + 1}px;
                height: ${Math.random() * 2 + 1}px;
                background: ${Math.random() > 0.5 ? '#c9a8ff' : '#ff9ec4'};
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                opacity: ${Math.random() * 0.6 + 0.1};
                animation: twinkle ${Math.random() * 4 + 2}s ease-in-out infinite alternate;
            `;
            container.appendChild(star);
        }

        // 별 반짝임 keyframes
        if (!document.getElementById('twinkle-style')) {
            const style = document.createElement('style');
            style.id = 'twinkle-style';
            style.textContent = `
                @keyframes twinkle {
                    from { opacity: 0.1; transform: scale(1); }
                    to   { opacity: 0.7; transform: scale(1.4); }
                }
            `;
            document.head.appendChild(style);
        }
    }
});
