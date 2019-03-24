package com.nuplex.unis.dao;

import org.apache.ibatis.session.SqlSession;

public class LikesDAOImpl implements LikesDAO {
	private SqlSession sqlSession;
	
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}//setSqlSession() end
	
	
}//LikesDAOImpl end
