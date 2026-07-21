/**
 * 와와 학습코칭센터 — 무료 학습 진단 신청 폼 → 구글 시트 저장
 *
 * ★ 이 버전은 "신청정보" 스프레드시트의 [와와] 탭에 저장합니다.
 *   (국제학교 신청과 같은 스프레드시트에 함께 모으는 방식)
 *
 * [연결 방법 — 5분]
 * 1) "신청정보" 스프레드시트를 브라우저에서 연다. (국제학교·와와 탭이 있는 그 시트)
 * 2) 주소창 URL에서 스프레드시트 ID를 복사한다.
 *    예) https://docs.google.com/spreadsheets/d/[이 부분이 ID]/edit
 * 3) 아래 SHEET_ID = "..." 의 따옴표 안에 그 ID를 붙여넣는다.
 * 4) 기존에 배포해 둔 와와 폼용 Apps Script 편집기를 연다.
 *    (코드를 전부 지우고 이 파일 내용으로 교체)
 * 5) 저장(💾) → [배포(Deploy)] → [배포 관리(Manage deployments)]
 *    → 기존 배포 옆 연필(수정) → 버전을 [새 버전(New version)]으로 → [배포].
 *    ※ 이렇게 하면 웹 앱 URL이 그대로라 사이트는 수정할 필요가 없습니다.
 * 6) 권한 승인이 뜨면 "신청정보" 시트를 소유한 그 구글 계정으로 허용.
 */

// ▼▼▼ "신청정보" 스프레드시트 ID를 붙여넣으세요 ▼▼▼
var SHEET_ID = "1UUS6le8gJTsuvaSDi31ZzuQjA214YD32xJFVgYx9cno";
// ▲▲▲                                            ▲▲▲

var TAB_NAME = "와와"; // 저장할 탭 이름

// 시트 첫 줄(헤더)을 자동으로 만들어 줌
var HEADERS = ["접수일시", "학생이름", "학년", "학부모연락처", "거주 도로명주소", "상담요청내용"];

function doPost(e) {
  try {
    var ss = SpreadsheetApp.openById(SHEET_ID);
    var sheet = ss.getSheetByName(TAB_NAME) || ss.insertSheet(TAB_NAME);

    // 헤더가 없으면 추가
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
    }

    var p = (e && e.parameter) ? e.parameter : {};
    sheet.appendRow([
      new Date(),
      p.name || "",
      p.grade || "",
      p.phone || "",
      p.area || "",
      p.memo || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// 브라우저에서 URL 직접 열었을 때 동작 확인용
function doGet() {
  return ContentService.createTextOutput("와와 신청 폼 수신 서버가 정상 작동 중입니다. (신청정보 → 와와 탭)");
}
