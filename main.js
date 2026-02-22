// 운세 구성 요소 (조합하면 20 * 2 * 10 = 400가지 이상의 문장이 가능)
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

function getFortune() {
    const y = document.getElementById('year').value;
    const m = document.getElementById('month').value;
    const d = document.getElementById('day').value;
    const display = document.getElementById('display-area');

    if (!y || !m || !d) {
        alert("생년월일을 입력해주셔야 기운을 읽을 수 있습니다.");
        return;
    }

    // 시드 계산 개선: 숫자를 문자열로 붙인 뒤 정수로 변환하여 더 큰 변별력을 줌
    // 오늘 날짜를 더해 매일 다른 결과가 나오도록 함
    const today = new Date();
    const dateStr = `${y}${m}${d}${today.getFullYear()}${today.getMonth()}${today.getDate()}`;
    let seed = 0;
    for(let i=0; i<dateStr.length; i++) {
        seed = (seed * 31) + dateStr.charCodeAt(i);
        seed = seed % 1000000; // 시드 값 범위 제한
    }

    // 시드를 이용해 각 요소를 독립적으로 선택 (조합의 다양성 극대화)
    const kwIdx = seed % keywords.length;
    const stIdx = Math.floor(seed / 3) % states.length;
    const adIdx = Math.floor(seed / 7) % advices.length;

    const fortuneText = `일진에 ${keywords[kwIdx]}의 기운이 ${states[stIdx]}, 오늘은 ${advices[adIdx]}`;

    display.innerHTML = `
        <div style="font-size:0.9rem; opacity:0.6; margin-bottom:12px;">${y}.${m}.${d}생의 천기</div>
        <div class="fortune-result" onclick="showMenu(${seed})">"${fortuneText}"</div>
        <div class="sub-text">(운세 문장을 클릭하면 저메추가 나타납니다)</div>
        <div id="menu-recommendation"></div>
    `;
}

function showMenu(seed) {
    const menuArea = document.getElementById('menu-recommendation');
    // 시드에 현재 시간(시)을 더해 메뉴 선택의 변별력을 높임
    const mIdx = (seed + new Date().getHours() * 13) % dinnerMenus.length;
    const menuName = dinnerMenus[mIdx];
    
    // 이미지 로드 안정성을 위해 고정된 'food' 태그와 시드 기반 lock 사용
    const imageUrl = `https://loremflickr.com/600/400/food?lock=${mIdx}`;

    menuArea.style.display = "block";
    menuArea.innerHTML = `
        <div class="menu-content">
            <span class="menu-label">오늘의 처방 식단</span>
            <div class="menu-img-container">
                <img src="${imageUrl}" 
                     alt="${menuName}" 
                     class="menu-img"
                     onerror="this.src='https://loremflickr.com/600/400/meal'">
            </div>
            <span class="menu-name">[ ${menuName} ]</span>
        </div>
    `;
}

// 테마 토글 기능
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton(newTheme);
}

function updateThemeButton(theme) {
    const btn = document.getElementById('theme-btn');
    if (btn) {
        btn.textContent = theme === 'light' ? '🌙 다크 모드' : '☀️ 라이트 모드';
    }
}

// 초기 테마 설정
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButton(savedTheme);
});
