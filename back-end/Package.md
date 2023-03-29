# Package

## Web Layer

Controller <-> Service <-> Repository <-> Mapper</br>
　　　　　 DTO 　　　　 VO 　　　　　　　 VO

### Controller

- `@Controller` 이 사용되어야 하는 영역
- 브라우저상의 웹 클라이언트의 요청 및 응받을 처리
- 서비스 계층, 데이터 엑세스 계층에서 발생하는 예외 처리

### Service

- `@Service` 이 사용되어야 하는 영역
- 일반적으로 `Controller` 와 `Repository` 의 중간 영역에서 사용
- `@Transactional` 이 사용되어야 하는 영역

### Repository

- `DataBase` 와 같이 데이터 저장소에 접근하는 영역

### DTO

- Data Transfer Object
- 계층간에 데이터 교환을 위한 객체

### Domain

- `Value Object` 를 사용합니다.
- 비즈니스 로직 처리 담당

## 파일 이름

- `Java` 클래스 파일의 이름의 첫 문자는 영어 대문자로 시작합니다.
- 카멜표기법을 사용합니다.</br>

Example : `MemberController.java`

### DTO 이름

- `Client`에서 요청이 온 경우에는 `Request`를 붙힌다.</br>
  Example : `MemberRequest`
- `Client`에 응답을 보낼 경우에는 `Response`를 붙힌다.</br>
  Example : `MemberResponse`

#### DTO구조

- `@Data` 어노테이션을 사용합니다.
- 변수의 이름 표기법은 카멜 표기법을 사용합니다.</br>
  Example : `memberId`

## 폴더 구조

```text
├── member
│   ├── controller
│   ├── domain
│   ├── dto
│   │   ├── request
│   │   └── response
│   ├── repository
│   └── service
└── product
```

파일 구조는 위와 같습니다.</br>

### 폴더 이름

- 폴더의 이름은 소문자로 시작합니다.
