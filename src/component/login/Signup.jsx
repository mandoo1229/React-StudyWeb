import React from 'react';

const Signup = () => {
    return (
        <div>
            <body className="bg-gray-100">
                <div className="flex justify-center items-center h-screen">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
                        <h2 className="text-2xl mb-4 text-center">회원가입</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">이름</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="이름"/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="name">닉네임</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"id="nickname" type="text" placeholder="닉네임"/>
                        </div>
                        <div className='mb-4'>
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="email">이메일 주소</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="이메일" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">비밀번호</label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"id="password" type="password" placeholder="비밀번호"/>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password-confirm" type="password" placeholder="비밀번호 확인"/>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="role">직군</label>
                            <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="role">
                                <option value="" disabled selected>직군 선택</option>
                                <option value="developer">개발자</option>
                                <option value="designer">디자이너</option>
                                <option value="manager">매니저</option>
                                <option value="other">기타</option>
                            </select>
                        </div>
                        <div className="flex items-center justify-between">
                            <a className="text-gray-700 hover:text-gray-300 text-sm font-bold">로그인 화면으로 돌아가기</a>
                            <button id="signup-button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                회원가입
                            </button>
                        </div>
                    </form>
                </div>
            </body>
        </div>
    );
};

export default Signup;