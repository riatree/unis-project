package com.nuplex.unis.dao;

import java.util.List;

import com.nuplex.unis.vo.PageVO;
import com.nuplex.unis.vo.User;

public interface UsersDAO {
	public int selectCheckId(String email);
	public int selectCheckNickname(String nickname);
	public int selectCheckLicense(String license);
	public void insert(User user);
	public User selectLogin(User user); 
	public User selectCafe(int no);
	public String selectType(int no);
	public User selectUser(int no);
	public List<User> selectList(PageVO pageVO);
	public int selectTotal(PageVO pageVO);
	public List<User> newList();
	public List<User> bestList();
	public List<User> cafeList();
	
	public User selectOneForTabs(int no);
}//UsersDAO end
