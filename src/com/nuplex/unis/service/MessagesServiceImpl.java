package com.nuplex.unis.service;

import com.nuplex.unis.dao.MessagesDAO;

public class MessagesServiceImpl implements MessagesService {
	private MessagesDAO messagesDAO;
	
	public void setMessagesDAO(MessagesDAO messagesDAO) {
		this.messagesDAO = messagesDAO;
	}//setMessagesDAO() end
	
	
	
}//messagesServiceImpl end
