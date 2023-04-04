# DB

해당 스키마는 `MySQL`로 구성하였습니다.</br>
해당 스키마의 생성을 위한 `sql`
문은 [schema.sql](https://github.com/MultiProject23/SEMO/blob/main/back-end/src/main/resources/sql/schema/schema.sql)
에서 확인할 수 있습니다.

## ER 다이어그램

![erd](https://user-images.githubusercontent.com/74192619/229756949-bf9afd84-4c0f-4cfe-acb8-3a40ba47c71d.jpeg)

## 테이블 구성

### 1. Member

| Column   | DataType    | Java DataType | PK  | FK  | NN  | Description             |
| -------- |-------------| ------------- | --- | --- | --- | ----------------------- |
| Id       | bigint      | Long          | O   |     |     | 멤버 식별자             |
| Birth    | data        | LocalData     |     |     | O   | 멤버의 생년 월일        |
| Email    | varchar(30) | String        |     |     | O   | 멤버의 이메일           |
| Name     | varchar(20) | String        |     |     | O   | 멤버의 이름             |
| Password | varchar(16) | String        |     |     | O   | 멤버의 비밀번호 (HS512) |
| Phone    | varchar(13) | String        |     |     | O   | 멤버의 전화번호         |
| Role     | varchar(20) | Enum          |     |     | O   | 멤버의 역활             |

### 2. Product

| Column   | DataType     | Java DataType | PK  | FK  | NN  | Description   |
| -------- |--------------| ------------- | --- | --- | --- | ------------- |
| Id       | bigint       | Long          | O   |     |     | 제품 식별자   |
| Category | varchar(10)  | Enum          |     |     | O   | 제품 카테고리 |
| Image    | MediumBlob   | String        |     |     | O   | 제품 이미지   |
| Info     | varchar(255) | String        |     |     | O   | 제품 설명     |
| Name     | varchar(100) | String        |     |     | O   | 제품 이름     |
| Price    | int          | int           |     |     | O   | 제품 가격     |
| Stock    | int          | int           |     |     | O   | 제품 재고     |
| Target   | varchar(10)  | Enum          |     |     | O   | 제품 고객층   |

### 3. Carousel

| Column      | DataType | Java DataType | PK  | FK  | NN  | Description   |
| ----------- | -------- | ------------- | --- | --- | --- | ------------- |
| Carousel_Id | bigint   | Long          | O   |     |     | 캐러셀 식별자 |
| Product_Id  | bigint   | Long          |     | O   | O   | 제품 식별자   |
| Image       | MediumBlob     | String        |     |     | O   | 캐러셀 이미지 |

- `Product ----< Carousel`

### 4. Cart

| Column     | DataType | Java DataType | PK  | FK  | NN  | Description     |
| ---------- |----------| ------------- | --- | --- | --- | --------------- |
| Id         | bigint   | Long          | O   |     |     | 장바구니 식별자 |
| Member_Id  | bigint   | Long          |     | O   | O   | 멤버 식별자     |
| Product_Id | bigint   | Long          |     | O   | O   | 제품 식별자     |
| Checked    | bit(1)   | boolean       |     |     | O   | 선택 유무       |
| Quantity   | int      | int           |     |     | O   | 제품 수량       |

- `Member ----< Cart`
- `Product ----< Cart`

### 5. Orders

| Column        | DataType    | Java DataType | PK  | FK  | NN  | Description      |
|---------------|-------------| ------------- | --- | --- | --- | ---------------- |
| Id            | bigint      | Long          | O   |     |     | 주문 목록 식별자 |
| Member_Id     | bigint      | Long          |     | O   | O   | 멤버 식별자      |
| Product_Id    | bigint      | Long          |     | O   | O   | 제품 식별자      |
| Date          | date        | LocalDate     |     |     | O   | 주문 날자        |
| Quantity      | int         | int           |     |     | O   | 주문 수량        |
| Oroder_Status | varchar(20) | Enum          |     |     | O   | 주문 상태        |

- `Member ----< Order`
- `Product ----< Order`

### 6. Review

| Column     | DataType     | Java DataType | PK  | FK  | NN  | Description   |
| ---------- |--------------| ------------- | --- | --- | --- | ------------- |
| Id         | bigint       | Long          | O   |     | O   | 리뷰 식별자   |
| Member_Id  | bigint       | Long          |     | O   |     | 멤버 식별자   |
| Product_Id | bigint       | Long          |     | O   |     | 제품 식별자   |
| Content    | varchar(250) | String        |     |     |     | 리뷰 내용     |
| Image      | MediumBlob   | String        |     |     | O   | 리뷰 이미지   |

- `Member ----< Review`
- `Product ----< Review`

### 7. Refresh_Token

| Column   | DataType     | Java DataType | PK  | FK  | NN  | Description        |
| -------- | ------------ | ------------- | --- | --- | --- | ------------------ |
| RT_Key   | varchar(255) | String        | O   |     | O   | Refresh Key Member |
| RT_Value | varchar(255) | String        |     |     | O   | Refresh Key Token  |

### 8. Address - 보류

| Column       | DataType     | Java DataType | PK  | FK  | NN  | Description |
| ------------ | ------------ | ------------- | --- | --- | --- | ----------- |
| Id           | bigint       | Long          | O   |     |     | 주소 식별자 |
| Member_Id    | bigint       | Long          |     | O   | O   | 멤버 식별자 |
| Address_Info | varchar(255) | String        |     |     | O   | 상세 주소   |
| Recipient    | varchar(255) | String        |     |     | O   | 수취인      |
| Zip_Code     | varchar(255) | String        |     |     | O   | 우편 번호   |

- `Member ----< Address`
