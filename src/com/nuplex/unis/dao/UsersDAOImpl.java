package com.nuplex.unis.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.nuplex.unis.vo.PageVO;
import com.nuplex.unis.vo.User;

public class UsersDAOImpl implements UsersDAO {

	private SqlSession sqlSession;
	
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}//setSqlSession() end
	
	@Override
	public User selectLogin(User user) {
		return sqlSession.selectOne("users.selectLogin",user);
	}//selectLogin() end
	
	@Override
	public int selectCheckId(String email) {
		return sqlSession.selectOne("users.selectCheckId", email);
	}//selectCheckId() end

	@Override
	public int selectCheckNickname(String nickname) {
		return sqlSession.selectOne("users.selectCheckNickname", nickname);
	}//selectCheckNickname() end

	@Override
	public int selectCheckLicense(String license) {
		return sqlSession.selectOne("users.selectCheckLicense",license);
	}//selectCheckLicense() end

	@Override
	public void insert(User user) {
		// TODO Auto-generated method stub
		sqlSession.insert("users.insert", user);
	}	

	@Override
	public User selectCafe(int no) {
		return sqlSession.selectOne("users.selectCafe", no);
	}

	@Override
	public String selectType(int no) {
		return sqlSession.selectOne("users.selectUserType",no);
	}

	@Override
	public User selectUser(int no) {
		return sqlSession.selectOne("users.selectUser", no);
	}
	
	@Override
	public List<User> selectList(PageVO pageVO) {
		return sqlSession.selectList("users.selectList",pageVO);
	}//selectList() end

	@Override
	public int selectTotal(PageVO pageVO) {
		return sqlSession.selectOne("users.selectTotal", pageVO);
	}//selectTotal() end

	@Override
	public List<User> newList() {
		// TODO Auto-generated method stub
		return sqlSession.selectList("users.newList");
	}

	@Override
	public List<User> bestList() {
		return sqlSession.selectList("users.bestList");
	}//bestList() end

	@Override
	public List<User> cafeList() {
		return sqlSession.selectList("users.cafeList");
	}//cafeList() end

	@Override
	public User selectOneForTabs(int no) {
		return sqlSession.selectOne("users.selectOneForTabs", no);
	}
}//UsersDAOImpl end
