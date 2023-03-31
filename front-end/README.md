# React로 구현하는 쇼핑몰 프로젝트

React로 구현하는 쇼핑몰 프로젝트입니다.

## 사용한 기술

![image](https://user-images.githubusercontent.com/74192619/223370493-e9312c7d-08cd-46c4-ad4a-9d5ac51c72cc.png)

### 라이브러리 사이트

- [react-router-dom](https://reactrouter.com/en/main)
- [react-bootstrap bootstrap](https://react-bootstrap.github.io/getting-started/introduction/)
- [react-material-ui-carousel](https://www.npmjs.com/package/react-material-ui-carousel)
- [@fortawesome/free-regular-svg-icons](https://fontawesome.com/docs/web/use-with/react/)
- [@fortawesome/free-solid-svg-icons](https://fontawesome.com/docs/web/use-with/react/)
- [@fortawesome/react-fontawesome@latest](https://fontawesome.com/docs/web/use-with/react/)
- [@emotion/react](https://emotion.sh/docs/introduction)
- [@emotion/styled](https://emotion.sh/docs/introduction)

<details>
<summary>Github 사용법</summary>

### Local 저장소와 Github 저장소를 연동하는 방법

1. 터미널을 원하는 위치의 폴더로 이동한다.
2. `git init` 명령어를 실행한다.
3. `git remote add origin https://github.com/MultiProject23/React-Project.git` 를 입력한다.
4. 연동확인 방법은 `git remote -v` 로 확인할 수 있다.

> `origin` 은 `github`로 생각하시면 편합니다.

### 브런치

1. `git checkout -b {브런치이름}`로 브런치를 생성하면서 이동이 가능하다.

> 예를 들어 `route` 의 기능을 구현하다고 한다면 `git checkout -b feature/route` 라고 한다. 다음과 같이 하면 브런치가 생성되며 해당 브런치로 이동이된다.

2. 브런치를 확인하는 방법은 `git branch`로 확인이 가능하며 `q`를 눌러서 나올수있다.
3. 브런치를 이동하고 싶다면 `git checkout {브런치이름}`으로 이동이 가능하다.

> 예로 `main` 브런치로 이동한다고 하면 `git checkout main`을 입력하면 된다.

> **브런치 이름 작성 방식**</br>
> 브런치의 이름을 작성할때 기능을 구현한다면 `feature/{기능이름 or 페이지}` 으로 작성한다. </br>버그 같은 경우에는 `hotfix/{버그 이름}` 으로 작성한다.</br> 디자인만 변경한다면 `design/{페이지 or 컴포넌트}` 으로 작성한다.

### github에 있는 브런치의 파일을 가져오는 방법

1. `git pull origin {브런치 이름}`로 가져올 수 있다.

> main 브런치를 예로 들면 다음과 같다. `git pull origin main`

### 수정한 소스 코드를 올리는 방법

1. `git add .` 로 git에 파일을 관리하게 추가한다.
2. `git commit -m "{원하는 메시지}` 로 git에 관리된 파일을 커밋(업로드 라고 생각하시면 편합니다.)한다.

> 예를 들면 `git commit -m "feat: 로그인 기능 구현"` 으로 하면 된다.

> **git 컨벤션**</br>![2023-03-07_17-27-46](https://user-images.githubusercontent.com/74192619/223366262-8cbfdf40-661a-411a-bc13-035c9ab52e45.png)

### Github Issues 사용 방법

1. Github의 Nav바중 `Issues`를 클릭하면 아래 사진과 같이 나온다.

![2023-03-07_17-30-15](https://user-images.githubusercontent.com/74192619/223366753-2e55510e-c2db-4add-beb7-757b2900b276.png)

2. `New Issus` 클릭하면 아래와 사진이 나타난다.

![2023-03-07_17-30-24](https://user-images.githubusercontent.com/74192619/223366764-05bb80d9-3e6a-4159-bce4-86a34f536694.png)

3. 원하는 이슈의 템플릿을 선택한 후 `Get started` 를 클릭한다.

![2023-03-07_17-32-40](https://user-images.githubusercontent.com/74192619/223367282-ddf4f051-7eb4-46e5-83b8-4f107d71f9e8.png)

4. 다음과 같이 작성을 하면 된다. 만약 사진을 추가하고 싶으면 사진을 텍스트 영역으로 드로그 앤 다운(끌어다가 놓기)를 하면 추가가 된다.

![2023-03-07_17-36-04](https://user-images.githubusercontent.com/74192619/223368000-5a599332-1cca-4c92-b800-1b3957ef6ab0.png)

5. 만약 `Labels`를 수정하고 싶으면 해당 영역을 클릭한후 수정이 가능하다.

![2023-03-07_17-32-54](https://user-images.githubusercontent.com/74192619/223367344-28f86358-ef72-4395-8f0a-a8e31be34f20.png)

6. `Submit new issue` 를 누르면 등록이 된다.

### Pull Request

작성 예정..

</details>
