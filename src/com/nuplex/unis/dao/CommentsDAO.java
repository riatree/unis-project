package com.nuplex.unis.dao;

import java.util.List;

import com.nuplex.unis.vo.Comment;
import com.nuplex.unis.vo.PageVO;
import com.nuplex.unis.vo.ScrollVO;

public interface CommentsDAO {
	public List<Comment> selectList(ScrollVO scrollVO);
	public int selectTotal(int no);
	public Comment selectOne(int no);
	
	public int insertOriginal(Comment comment);
	public int insertRecomment(Comment comment);
	
	public List<Comment> selectProfileCommentList(PageVO pageVO);
	public int selectProfileCommentTotal(int no);
	public int update(int no);
}//CommentsDAO end
