package com.nuplex.unis.dao;

import org.apache.ibatis.session.SqlSession;

public class UnregUsersDAOImpl implements UnregUsersDAO {
	private SqlSession sqlSession;
	
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}//setSqlSession() end
	
	
}//UnregUsersDAOImpl end
