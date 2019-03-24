package com.nuplex.unis.service;

import com.nuplex.unis.dao.LikesDAO;

public class LikesServiceImpl implements LikesService {
	private LikesDAO likesDAO;
	
	public void setLikesDAO(LikesDAO likesDAO) {
		this.likesDAO = likesDAO;
	}//setLikesDAO() end
	
	
}//LikesServiceImpl end
