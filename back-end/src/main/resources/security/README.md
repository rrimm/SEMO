# 개요

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