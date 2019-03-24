package com.nuplex.unis.dao;

import org.apache.ibatis.session.SqlSession;

public class SupportsDAOImpl implements SupportsDAO {
	private SqlSession sqlSession;
	
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}//setSqlSession() end
	
	
}//SupportsDAOImpl end
