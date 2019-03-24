package com.nuplex.unis.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.nuplex.unis.vo.Matching;
import com.nuplex.unis.vo.PageVO;

public class MatchingsDAOImpl implements MatchingsDAO{
	private SqlSession sqlSession;
	
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}//setSqlSession() end
	
	public int insert(Matching matching) {
		return sqlSession.insert("matchings.insert",matching);
	}

	@Override
	public List<Matching> selectListByUnes(int no) {
		return sqlSession.selectList("matchings.selectListByUnes",no);
	}//selectListByUnes() end
	
	@Override
	public List<Matching> selectListByInes(int no) {
		return sqlSession.selectList("matchings.selectListByInes",no);
	}//selectListByInes() end
	
	@Override
	public List<Matching> selectUnesMacingList(PageVO pageVO) {
		return sqlSession.selectList("matchings.selectUnesMacingList",pageVO);
	}

	@Override
	public int selectUnesMacingTotal(int no) {
		return sqlSession.selectOne("matchings.selectUnesMacingTotal",no);
	}//selectUnesMacingTotal() end

	@Override
	public int matchingUpdate(int no) {
		return sqlSession.update("matchings.matchingUpdate",no);
	}

	@Override
	public int unMatchingUpdate(int no) {
		return sqlSession.update("matchings.unMatchingUpdate",no);
	}
	
	@Override
	public List<Matching> selectUserMacingList(PageVO pageVO) {
		return sqlSession.selectList("matchings.selectUserMacingList",pageVO);
	}

	@Override
	public int selectUserMacingTotal(int no) {
		return sqlSession.selectOne("matchings.selectUserMacingTotal",no);
	}
}//MatchingsDAOImpl end
