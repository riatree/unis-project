package com.nuplex.unis.service;

import com.nuplex.unis.dao.UserTanlentsDAO;

public class UserTalentsServiceImpl implements UserTalentsService {
	private UserTanlentsDAO userTanlentsDAO;
	
	public void setUserTanlentsDAO(UserTanlentsDAO userTanlentsDAO) {
		this.userTanlentsDAO = userTanlentsDAO;
	}//setUserTanlentsDAO() end
	
	
}//UserTalentsServiceImpl end
