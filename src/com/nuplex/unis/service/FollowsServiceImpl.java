package com.nuplex.unis.service;

import com.nuplex.unis.dao.FollowsDAO;

public class FollowsServiceImpl implements FollowsService {
	private FollowsDAO followsDAO;
	
	public void setFollowsDAO(FollowsDAO followsDAO) {
		this.followsDAO = followsDAO;
	}//setFollewsDAO() end
	
	
}//FollewsServiceImpl end
