package com.nuplex.unis.service;

import java.util.Map;

import com.nuplex.unis.vo.Comment;

public interface CommentsService {

	public Map<String, Object> getComments(int no, int scrollNo);
	
	public Map<String, Object> writeComment(Comment comment);
	
	public Map<String, Object> writeRecomment(Comment comment);
	
}//CommentsService end
