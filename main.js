// 200개 운세 키워드 및 조합 데이터
const kw = ["용신", "희신", "합", "충", "파", "해", "귀인", "록", "살", "공망", "비견", "겁재", "식신", "상관", "편재", "정재", "편관", "정관", "편인", "정인"];
const ad = ["내실을 기하십시오.", "과감히 나아가십시오.", "조력을 구하십시오.", "언행을 삼가십시오.", "변동을 피하십시오.", "욕심을 버리십시오.", "인연을 소중히 하십시오.", "지혜를 발휘하십시오.", "잠시 쉬어가십시오.", "기회를 포착하십시오."];

const fortunes = [];
for (let i = 0; i < 200; i++) {
    fortunes.push(`일진에 ${kw[i % kw.length]}의 기운이 ${i % 2 === 0 ? '강성하니' : '서리니'}, 오늘은 ${ad[i % ad.length]}`);
}

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

    const today = new Date();
    // 고유 시드: 생일 조합 + 오늘 날짜 (매일 바뀌는 운세)
    const seed = (parseInt(y) * parseInt(m) * parseInt(d)) + (today.getFullYear() + today.getMonth() + today.getDate());
    const fIdx = seed % fortunes.length;

    display.innerHTML = `
        <div style="font-size:0.9rem; opacity:0.6; margin-bottom:12px;">${y}.${m}.${d}생의 천기</div>
        <div class="fortune-result" onclick="showMenu(${seed})">"${fortunes[fIdx]}"</div>
        <div class="sub-text">(운세 문장을 클릭하면 저메추가 나타납니다)</div>
        <div id="menu-recommendation"></div>
    `;
}

function showMenu(seed) {
    const menuArea = document.getElementById('menu-recommendation');
    const mIdx = (seed + new Date().getHours()) % dinnerMenus.length;

    menuArea.style.display = "block";
    menuArea.innerHTML = `오늘의 처방 식단: <br><span style="font-size:1.8rem; color: var(--menu-highlight); display: block; margin-top: 10px;">[ ${dinnerMenus[mIdx]} ]</span>`;
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
