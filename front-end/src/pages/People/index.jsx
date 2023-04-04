import './Member.css';

const Members = () => {
  return (
    <>
      <div className="TextBox">
        <h2>TEAM SEMO</h2>
      </div>
      <div className="card_area">
        <h3>팀 구성 및 소개</h3>
        <ul className="card_wrap">
          <li>
            <img
              src={require('../../assets/People/image1.jpeg')}
              alt=""
              className="img_set"
            ></img>
            <dl>
              <dt>김정욱 / 조장</dt>
              <dd>희망 직무 : 백엔드</dd>
              <dd>MBTI : ENTJ</dd>
              <dd>
                한마디 : “끊임 없이 성장하고 있고 백엔드를 희망하는 새싹
                개발자입니다.”
              </dd>
              <dd>담당 : 프로젝트 설계 및 기능 구현</dd>
              <dd>email : workju1124@gmail.com</dd>
            </dl>
          </li>
          <li>
            <img
              src={require('../../assets/People/image2.jpg')}
              alt=""
              className="img_set"
            ></img>
            <dl>
              <dt>김미림</dt>
              <dd>희망 직무 : 백엔드</dd>
              <dd>MBTI : ISTJ</dd>
              <dd>한마디 : “단순 코더가 아닌, 좋은 개발자가 되고 싶습니다.”</dd>
              <dd>담당 : 상품 상세페이지 UI 설계 및 기능 구현</dd>
              <dd>email : kmr1033@gmail.com</dd>
            </dl>
          </li>
          <li>
            <img
              src={require('../../assets/People/image3.png')}
              alt=""
              className="img_set"
            />
            <dl>
              <dt>서예원</dt>
              <dd>희망 직무 : 프론트엔드</dd>
              <dd>MBTI : INFP</dd>
              <dd>한마디 : “일단 해보자”</dd>
              <dd>
                담당 : 로그인, 회원가입 페이지 설계, 회원정보 조회, 비밀번호
                변경 기능 구현
              </dd>
              <dd>email : syw2858@gmail.com</dd>
            </dl>
          </li>
          <li>
            <img
              src={require('../../assets/People/image4.jpg')}
              alt=""
              className="img_set"
            ></img>
            <dl>
              <dt>엄태민</dt>
              <dd>희망 직무 : 백엔드</dd>
              <dd>MBTI : INTP</dd>
              <dd>한마디 : “열심히 배우며 성장하고 싶습니다.”</dd>
              <dd>담당 : 리뷰페이지 설계 및 기능, UI 구현</dd>
              <dd>email : utm1125@naver.com</dd>
            </dl>
          </li>
          <li>
            <img
              src={require('../../assets/People/image5.jpg')}
              alt=""
              className="img_set"
            ></img>
            <dl>
              <dt>이진영</dt>
              <dd>희망 직무 : 풀스택</dd>
              <dd>MBTI : ENTJ</dd>
              <dd>한마디: “지속적으로 성장하는 개발자가 되고 싶습니다.”</dd>
              <dd>담당 : 상품페이지 UI 설계 및 기능 구현</dd>
              <dd>email : jylee0013@gmail.com</dd>
            </dl>
          </li>
          <li>
            <img
              src={require('../../assets/People/image6.png')}
              alt=""
              className="img_set"
            ></img>
            <dl>
              <dt>이준영</dt>
              <dd>희망 직무 : 풀스택</dd>
              <dd>MBTI : ISTP</dd>
              <dd>
                한마디: “끊임없이 노력하는 풀스택 개발자가 되고 싶습니다.”
              </dd>
              <dd>담당 : 장바구니 페이지 UI 설계 및 기능 구현</dd>
              <dd>email : paul3148@naver.com</dd>
            </dl>
          </li>
          <li>
            <img
              src={require('../../assets/People/image7.png')}
              alt=""
              className="img_set"
            ></img>
            <dl>
              <dt>황성민</dt>
              <dd>희망 직무 : 풀스택</dd>
              <dd>MBTI : ENTJ</dd>
              <dd>한마디 : 성장하는 개발자가 되고 싶습니다"</dd>
              <dd>email : vmfhrmfoa98@gmail.com</dd>
            </dl>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Members;
