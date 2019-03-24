package com.nuplex.unis.service;

import java.util.List;
import java.util.Map;

import com.nuplex.unis.vo.Follow;
import com.nuplex.unis.vo.Image;
import com.nuplex.unis.vo.User;

public interface UsersService {
	public int checkEmail(String email);
	public int checkNickname(String nickname);
	public int checkLicense(String license);
	public void insert(User user);
	public User login(User user);
	public Map<String, Object> userDetail(int no);
	public Map<String, Object> userCommentList(int no, int pageNo);
	public boolean commentUpdate(int no);
	public Map<String, Object> userMatchingList(int no, int pageNo);	
	public Map<String, Object> getList(int pageNo, String addressOld, int americano, int whithUnis);
	public List<User> newList();
	public List<User> bestList();
	public List<User> cafeList();
	public List<Follow> getBookmarkList(int no);
	public boolean removeBookmark(int no);
	
	public List<Image> getAlbum(int ownerNo, int scrollNo);
	
	public User getOwnerInfo(int no);
}//UsersSerivce end
