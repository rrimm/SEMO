# 개요

민감한 정보를 숨기기 위해 파일을들 예외 처리 하였습니다.</br>
`WAS`를 실행 시키기 위해서는 아래에 나온 파일들을 작성하신 후 실행 시켜 주시면 됩니다.

## application-datasource.yml 작성

```yaml
spring:
  datasource:
    url: { 자신이 사용하는 DB 주소 }?serverTimezone=Asia/Seoul
    username: { DB 유저의 이름 }
    password: { DB 유저의 비밀번호 }
    driver-class-name: { 사용하는 DB의 드라이버 }

decorator:
  datasource:
    p6spy:
      enable-logging: {true or false}
                      # true : sql logging
```

### p6spy 란?

[p6spy](https://github.com/p6spy/p6spy)는 쿼리 파라미터를 로그에 남겨주고 추가적인 기능을 제공하는 외부 라이브러리이다.
