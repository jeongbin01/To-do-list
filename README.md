# To-Do List & Calendar App

## 프로젝트 개요
이 프로젝트는 **할 일 관리와 캘린더 기능**을 결합한 웹 애플리케이션입니다.  
사용자는 할 일을 추가하고, 완료 여부를 체크하며, 특정 날짜에 대한 메모를 저장할 수 있습니다.  
로컬 스토리지를 이용하여 데이터를 유지합니다.

## 로컬 파일 열기
- **`index.html`**: React 앱을 렌더링하는 HTML 파일  
- **`index.js`**: React 앱의 진입점  
- **`App.js`**: 애플리케이션의 주요 레이아웃 및 상태 관리  
- **`App.css`**: 전체적인 스타일링  
- **`Calendar.js`**: 날짜 선택 및 달력 기능 구현  
- **`TodoForm.js`**: 할 일 추가 및 수정 폼  
- **`TodoItem.js`**: 개별 할 일 항목 표시 및 관리  
- **`TodoList.js`**: 전체 할 일 목록을 렌더링  

## 주요 기능
- **할 일 추가, 수정, 삭제**: 우선순위와 카테고리를 설정 가능  
- **할 일 완료 체크**: 체크박스를 통해 상태 변경 가능  
- **캘린더 기능**: 특정 날짜를 선택하여 관련된 할 일과 메모를 관리  
- **메모 기능**: 날짜별로 메모를 추가, 수정, 삭제 가능  
- **검색 기능**: 입력한 키워드에 따라 할 일 필터링  
- **로컬 스토리지 저장**: 페이지를 새로고침해도 데이터 유지  

## 사용 방법
1. `index.html`을 실행하여 React 앱을 로드합니다.  
2. 캘린더에서 날짜를 선택합니다.  
3. 할 일을 입력하고 추가 버튼을 누릅니다.  
4. 완료한 항목은 체크박스를 클릭하여 표시합니다.  
5. 수정 및 삭제 버튼을 통해 할 일을 관리합니다.  
6. 선택한 날짜에 메모를 추가할 수 있습니다.  

## 기술 스택
- **React.js**: 컴포넌트 기반 UI 라이브러리
- **React Hooks (`useState`, `useEffect`)**: 상태 및 사이드 이펙트 관리
- **JavaScript (ES6+)**: 최신 JS 문법 활용
- **date-fns**: 날짜 처리 및 캘린더 기능 지원
- **CSS3**: 반응형 UI 및 사용자 친화적인 스타일링 적용
- **LocalStorage**: 로컬 환경에서 데이터 유지
- **ReactDOM.createRoot()**: React 18 이상의 렌더링 방식 지원
  
## 향후 계획
- **Drag & Drop 기능 추가**: 할 일 순서를 자유롭게 변경  
- **데이터베이스 연동**: Firebase 또는 MongoDB를 활용한 데이터 저장  
- **다크 모드 지원**: 사용자 환경에 맞춘 테마 변경 기능  
- **PWA 지원**: 오프라인에서도 사용할 수 있도록 기능 확장  

## 리뷰 포인트
- **UI/UX가 직관적인가?**  
- **캘린더와 To-Do 리스트의 연동이 자연스러운가?**  
- **할 일 추가/수정 기능이 원활하게 동작하는가?**  
- **검색 및 필터링 기능이 편리한가?**  

## 부족한 점
- **서버 연동이 없어 데이터 공유가 불가능함**  
- **모바일 최적화 개선 필요**  
- **할 일 카테고리별 정렬 기능 미지원**  

## 히스토리
- **v1.0 (2025-03-02)**: 초기 버전 배포  
- **v1.1 (예정)**: UI 개선 및 새로운 기능 추가  

## 원하는 목적성
- **할 일 관리를 쉽고 직관적으로 제공하는 것**  
- **개인 일정과 할 일을 한 곳에서 관리할 수 있도록 함**  
- **간단한 메모 기능을 제공하여 기록을 용이하게 만듦**  
