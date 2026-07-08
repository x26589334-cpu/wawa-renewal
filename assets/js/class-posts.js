/*
 * 와와 학습코칭센터 — 수업현황(지점 수업 후기) 글 목록
 * ------------------------------------------------------------
 * 글을 새로 올릴 때:
 *   1) 이 배열 맨 위에 항목 1개를 추가한다 (newest first, 최신이 위로)
 *   2) class/{slug}.html 글 페이지 파일을 1개 만든다 (class/_템플릿.html 복사해서 작성)
 *   3) 썸네일 사진을 assets/images/class/ 에 넣는다
 *   4) sitemap.xml 에 https://wawaedu.kr/class/{slug}.html 한 줄 추가
 *
 * 필드 설명
 *   slug    : 글 파일 이름(확장자 제외). class/{slug}.html 과 일치해야 함
 *   area    : 동네 (예: "풍산동")
 *   branch  : 지점명 (예: "하남풍산점")
 *   subject : 과목 (예: "영어·수학")
 *   date    : 날짜 "YYYY-MM-DD" (이 값으로 자동 정렬됨)
 *   thumb   : 썸네일 이미지 경로 (assets/images/class/파일명.jpg)
 *   title   : 카드 제목
 *   excerpt : 카드에 보일 2~3줄 요약
 */
window.WAWA_CLASS_POSTS = [
  {
    slug: "2026-07-08-하남풍산점",
    area: "풍산동",
    branch: "하남풍산점",
    subject: "영어·수학",
    date: "2026-07-08",
    thumb: "assets/images/class/가좌점1.jpg",
    title: "풍산동 와와학습코칭 하남풍산점 · 영어·수학 수업 현황",
    excerpt: "이번 주 하남풍산점에서는 중등 영어 내신 대비와 수학 오답 코칭을 진행했습니다. 학생별 학습 플래너 점검과 함께 스스로 공부하는 습관을 만들어가는 과정을 담았습니다.",
  },
  {
    slug: "2026-07-08-사동점",
    area: "사동",
    branch: "사동점",
    subject: "수학",
    date: "2026-07-08",
    thumb: "assets/images/class/염창점1.jpg",
    title: "경산 사동 와와학습코칭 사동점 · 수학 수업 현황",
    excerpt: "사동점 고등 수학 코칭 현장입니다. 개념 정리 → 문제 풀이 → 오답 점검의 4C 프로세스로, 시험 기간 자기주도학습 루틴을 함께 잡았습니다.",
  },
];
