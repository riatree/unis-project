package com.nuplex.unis.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.nuplex.unis.vo.Follow;

public class FollowsDAOImpl implements FollowsDAO{
	private SqlSession sqlSession;
	
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}//setSqlSession() end
	
	@Override
	public List<Follow> selectList(int no) {
		return sqlSession.selectList("follows.selectList",no);
	}//selectList() end

	@Override
	public int delete(int no) {
		return sqlSession.delete("follows.delete",no);
	}//delete() end
}//FollewsDAOImpl end
