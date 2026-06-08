# 와와 학습코칭센터 (HJ Project)

[wawacenter.com](https://www.wawacenter.com/)을 리뉴얼한 느낌으로 제작한 정적 웹사이트입니다.
순수 HTML / CSS / JavaScript로 작성되어 별도 빌드 과정 없이 바로 배포됩니다.

## 페이지 구성

| 파일 | 내용 |
|------|------|
| `index.html` | 홈 (히어로, 4C 프로세스, 5개 브랜드, 후기, CTA) |
| `about.html` | 브랜드 소개 (철학, 30년 연혁, 5개 브랜드) |
| `learning.html` | 학습 시스템 (4C, 맞춤관리, AI학습, 가정연계) |
| `centers.html` | 센터 찾기 (전국 지점 + 무료진단 신청폼) |
| `reviews.html` | 학습 후기 (성과 지표, 후기, 학습자료) |
| `news.html` | 소식·FAQ (공지사항 + FAQ) |
| `recruit.html` | 교사 채용 (모집분야, 절차, 지원폼) |

## 로컬 미리보기

```bash
python3 -m http.server 8800
# http://localhost:8800
```

## 배포 (Vercel)

별도 설정 없이 Vercel에 GitHub 저장소를 연결하면 자동 배포됩니다.
(빌드 명령 없음 / 출력 디렉터리: 루트)

---

> ⚠️ 콘텐츠(연혁, 지점 정보, 통계, 후기 등)는 데모용 예시입니다. 실제 정보로 교체가 필요합니다.
