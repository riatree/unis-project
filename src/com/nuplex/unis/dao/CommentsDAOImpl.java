package com.nuplex.unis.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.nuplex.unis.vo.Comment;
import com.nuplex.unis.vo.PageVO;
import com.nuplex.unis.vo.ScrollVO;

public class CommentsDAOImpl implements CommentsDAO {
	private SqlSession sqlSession;
	
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}//setSqlSession() end
	
	@Override
	public List<Comment> selectList(ScrollVO scrollVO) {
		return sqlSession.selectList("comments.selectList", scrollVO);
	}

	@Override
	public int selectTotal(int no) {
		return sqlSession.selectOne("comments.selectTotal",no);
	}

	@Override
	public int insertOriginal(Comment comment) {
		return sqlSession.insert("comments.insertOriginal",comment);
	}

	@Override
	public Comment selectOne(int no) {
		return sqlSession.selectOne("comments.selectOne",no);
	}
	
	@Override
	public List<Comment> selectProfileCommentList(PageVO pageVO) {
		return sqlSession.selectList("comments.selectProfileCommentList", pageVO);
	}//selectProfileCommentList() end
	
	@Override
	public int selectProfileCommentTotal(int no) {
		return sqlSession.selectOne("comments.selectProfileCommentTotal", no);
	}//selectProfileCommentTotal() end
	
	@Override
	public int update(int no) {
		return sqlSession.update("comments.update",no);
	}
	
	@Override
	public int insertRecomment(Comment comment) {
		return sqlSession.insert("comments.insertRecomment",comment);
	}
}//CommentsDAOImpl end
