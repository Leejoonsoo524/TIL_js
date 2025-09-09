### 자바스크립트
Object : 객체 -> 사용자가 컨트롤 할 수 있는 객체대상
Property : 속성 -> 객체가 가지는 속성
Event : 이벤트 -> 인터넷 브라우저에서 발생할 수 있는 사건
function : 함수 --> : 실행 클래스 내부에 선언된 함수는 메소드라 부르며 클래스와 관련없다면 일반적으로 전부 함수라고 한다.
Method : 메소드 -->

### 자바스크립트 작성방법
내부 스크립트 
<script>스크립트 작성</script>
외부 스크립트 
<script src="경로"></script>
인라인 스크립트 (이벤트한정)
<tag event = "이벤트 함수"></tag>

### async 와 defer 차이점 
<script src="./script/first.js" async></script>
* 페이지 로드 관계없이 다운로드 후 즉시 실행 스크립트
<script src="./script/second.js" defer></script>
* 페이지 로드가 완료된 후 즉시 실행 스크립트
* 외부 스크립트 시에만 사용 가능

### 자바스크립트 오류 및 디버깅 하기위해선 개발자도구 console 에서 확인해야함

### 자바스크립트 변수 작성법
var data_create;<!-- 선언 -->

data_create = 3;

### 변수명 퀴즈
<!-- 1. var 1num=10; -->
2. var $num=10;
<!-- 3. var 100num=10; -->
4. var num100=10;
5. var test=10;
6. var num=10;
7. var str="hello";
<!-- 8. var my name; -->
9. var _name;
<!-- 10. var if; -->

### 변수의 자료형
자바스크립트는 동적 언어로 변수 정의 시 자료형 정의를 할 필요가 없고, 대입되는 데이터 종류에 따라 변수의 데티어 종류가 결정된다.
### 변수의 자료형을 알수있는 함수 typeof();

### ES6(ECMA Script 6) 템플릿 문자열
백틱기호 ``(물결표시있는곳)로 문자열+식 전체를 묶구 ${}로 프로그래밍 식을 작성하는 기법
