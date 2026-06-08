/**
 * 와와 학습코칭센터 — 무료 학습 진단 신청 폼 → 구글 시트 저장
 *
 * [설치 방법]
 * 1) 구글 시트(스프레드시트)를 새로 만든다.
 * 2) 상단 메뉴: 확장 프로그램(Extensions) → Apps Script 클릭.
 * 3) 기본 코드를 모두 지우고, 아래 코드를 전부 붙여넣는다.
 * 4) 저장(💾) 후, 상단의 [배포(Deploy)] → [새 배포(New deployment)] 클릭.
 * 5) 유형 선택(톱니바퀴) → [웹 앱(Web app)] 선택.
 *    - 설명: 아무거나 (예: wawa-form)
 *    - 실행 계정(Execute as): 나(Me)
 *    - 액세스 권한(Who has access): 모든 사용자(Anyone)   ← 반드시 Anyone!
 * 6) [배포] → 권한 승인(본인 구글 계정 허용) 진행.
 * 7) 생성된 "웹 앱 URL"(https://script.google.com/macros/s/..../exec)을 복사해서 전달.
 *    → 이 URL을 사이트 폼의 data-sheet 속성에 넣으면 연동 완료.
 */

// 시트 첫 줄(헤더)을 자동으로 만들어 줌
var HEADERS = ["접수일시", "학생이름", "학년", "학부모연락처", "희망지역", "상담요청내용"];

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("신청내역") || ss.insertSheet("신청내역");

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
  return ContentService.createTextOutput("와와 신청 폼 수신 서버가 정상 작동 중입니다.");
}
