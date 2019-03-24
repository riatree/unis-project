package com.nuplex.unis.service;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.transaction.annotation.Transactional;

import com.nuplex.unis.dao.CommentsDAO;
import com.nuplex.unis.vo.Comment;
import com.nuplex.unis.vo.ScrollVO;

public class CommentsServiceImpl implements CommentsService {
	private CommentsDAO commentsDAO;
	
	public void setCommentsDAO(CommentsDAO commentsDAO) {
		this.commentsDAO = commentsDAO;
	}//setCommentsDAO() end
	
	@Override
	public Map<String, Object> getComments(int no, int scrollNo) {
		
		ScrollVO scrollVO = new ScrollVO();
		
		scrollVO.setUserNo(no);
		scrollVO.setScrollNo(scrollNo);
		
		List<Comment> commentList = commentsDAO.selectList(scrollVO);
		Map<String, Object> map = new ConcurrentHashMap<>();
		
		for (Comment comment : commentList) {
			int status = Integer.parseInt(comment.getStatus());
			int seqnum = comment.getSeq();
			String commentType = null;
			if(status==seqnum) {
				commentType = "comment";
			}else {
				commentType = "recomment";
			}//if~else end
			comment.setCommentType(commentType);
		}//for end
		
		map.put("comments", commentList);
		map.put("totalNum", commentsDAO.selectTotal(no));
		return map;
	}//getComments() end

	@Override
	@Transactional
	public Map<String, Object> writeComment(Comment comment) {
		commentsDAO.insertOriginal(comment);
		int insertedNo = comment.getNo();
//		System.out.println(insertedNo);
		
		Comment newComment = commentsDAO.selectOne(insertedNo);
		newComment.setCommentType("comment");
//		System.out.println(comment.getCommentType());
		
		Map<String, Object> map = new ConcurrentHashMap<>();
		map.put("comment", newComment);
		map.put("totalNum", commentsDAO.selectTotal(comment.getTargetNo()));
		
		return map;
	}
	
	@Override
	@Transactional
	public Map<String, Object> writeRecomment(Comment comment) {
		commentsDAO.insertRecomment(comment);
		int insertedNo = comment.getNo();
//		System.out.println(insertedNo);
		
		Comment newComment = commentsDAO.selectOne(insertedNo);
		newComment.setCommentType("recomment");
//		System.out.println(comment.getCommentType());
		
		Map<String, Object> map = new ConcurrentHashMap<>();
		map.put("comment", newComment);
		map.put("totalNum", commentsDAO.selectTotal(comment.getTargetNo()));
		
		return map;
	}
	
}//CommentsServiceImpl end
