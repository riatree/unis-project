package com.nuplex.unis.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.nuplex.unis.vo.Need;
import com.nuplex.unis.vo.PageVO;

public class NeedsDAOImpl implements NeedsDAO {
	private SqlSession sqlSession;
	
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	public int insert(Need need) {
		return sqlSession.insert("needs.insert",need);
	}

	@Override
	public List<Need> selectList(PageVO pageVO) {
		return sqlSession.selectList("needs.selectList",pageVO);
	}

	@Override
	public int selectTotal(PageVO pageVO) {
		return sqlSession.selectOne("needs.selectTotal",pageVO);
	}
	
	@Override
	public Need selectOneByUnes(int no) {
		return sqlSession.selectOne("needs.selectUnesOne",no);
	}//selectOneByUnes() end

	@Override
	public int selectListCount(int no) {
		return sqlSession.selectOne("needs.selectListCount",no);
	}//selectListCount() end
	
	@Override
	public List<Need> selectNeedList(int no) {
		return sqlSession.selectList("needs.selectNeedList", no);
	}//selectNeedList() end
	
	@Override
	public Need selectOneByInes(int no) {
		return sqlSession.selectOne("needs.selectInesOne",no);
	}//selectOneByInes() end
	
}//NeedsDAOImpl end
