package com.nuplex.unis.service;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.transaction.annotation.Transactional;

import com.nuplex.unis.dao.CafeConditionsDAO;
import com.nuplex.unis.dao.CommentsDAO;
import com.nuplex.unis.dao.FollowsDAO;
import com.nuplex.unis.dao.ImagesDAO;
import com.nuplex.unis.dao.ImagesLinkDAO;
import com.nuplex.unis.dao.MatchingsDAO;
import com.nuplex.unis.dao.TalentsDAO;
import com.nuplex.unis.dao.UsersDAO;
import com.nuplex.unis.util.PaginateUtil;
import com.nuplex.unis.vo.CafeCondition;
import com.nuplex.unis.vo.Comment;
import com.nuplex.unis.vo.Follow;
import com.nuplex.unis.vo.Image;
import com.nuplex.unis.vo.Matching;
import com.nuplex.unis.vo.PageVO;
import com.nuplex.unis.vo.ScrollVO;
import com.nuplex.unis.vo.User;

public class UsersServiceImpl implements UsersService {
	private UsersDAO usersDAO;
	private CafeConditionsDAO cafeConditionsDAO;
	private CommentsDAO commentsDAO;
	private MatchingsDAO matchingsDAO;
	private ImagesLinkDAO imagesLinkDAO;
	private FollowsDAO followsDAO;
	private ImagesDAO imagesDAO;
	private TalentsDAO talentsDAO;
	
	public void setUsersDAO(UsersDAO usersDAO) {
		this.usersDAO = usersDAO;
	}//setUsersDAO() end
	
	public void setCafeConditionsDAO(CafeConditionsDAO cafeConditionsDAO) {
		this.cafeConditionsDAO = cafeConditionsDAO;
	}
	
	public void setCommentsDAO(CommentsDAO commentsDAO) {
		this.commentsDAO = commentsDAO;
	}
	
	public void setMatchingsDAO(MatchingsDAO matchingsDAO) {
		this.matchingsDAO = matchingsDAO;
	}
	
	public void setImagesLinkDAO(ImagesLinkDAO imagesLinkDAO) {
		this.imagesLinkDAO = imagesLinkDAO;
	}
	
	public void setFollowsDAO(FollowsDAO followsDAO) {
		this.followsDAO = followsDAO;
	}
	
	public void setImagesDAO(ImagesDAO imagesDAO) {
		this.imagesDAO = imagesDAO;
	}
	
	public void setTalentsDAO(TalentsDAO talentsDAO) {
		this.talentsDAO = talentsDAO;
	}

	@Override
	public User login(User user) {
		return usersDAO.selectLogin(user);
	}	

	@Transactional
	@Override
	public void insert(User user) {
		usersDAO.insert(user);
		String[] conditions=user.getCondition();
		
		CafeCondition cafeCondition=new CafeCondition();
		cafeCondition.setUserNo(user.getNo());
		
		for(int i =0 ; i<conditions.length; i++) {
			cafeCondition.setName(conditions[i]);
			cafeConditionsDAO.insert(cafeCondition);
		}//for() end
	}

	@Override
	public int checkEmail(String email) {
		return usersDAO.selectCheckId(email);
	}//checkEmail() end

	@Override
	public int checkNickname(String nickname) {
		return usersDAO.selectCheckNickname(nickname);
	}//checkNickname() end

	@Override
	public int checkLicense(String license) {
		return usersDAO.selectCheckLicense(license);
	}//checkLicense() end
	
	@Override
	public Map<String, Object> userDetail(int no) {
		
		Map<String, Object> map = new ConcurrentHashMap<>();
		
		String userType = usersDAO.selectType(no);
		map.put("userType", userType.equals("cafe")?"카페":"유저");
		
		if(userType.equals("cafe")) {
			User user = usersDAO.selectCafe(no);
			String phoneStr = user.getPhone();
			int phoneStrLeng = phoneStr.length();
			String phoneFmt = null;
			if(phoneStr.substring(0, 2).equals("02")) {
				if(phoneStrLeng == 10) {
					phoneFmt = phoneStr.substring(0,2) + " - " + phoneStr.substring(2,6) + " - " + phoneStr.substring(6);
				}else {
					phoneFmt = phoneStr.substring(0,2) + " - " + phoneStr.substring(2,5) + " - " + phoneStr.substring(5);
				}//if~else end
			}else {
				if(phoneStrLeng == 11) {
					phoneFmt = phoneStr.substring(0,3) + " - " + phoneStr.substring(3,7) + " - " + phoneStr.substring(7);
				}else {
					phoneFmt = phoneStr.substring(0,3) + " - " + phoneStr.substring(3,6) + " - " + phoneStr.substring(6);
				}//if~else end
			}//if~else end
			user.setPhone(phoneFmt);
			map.put("user", user);
			map.put("conditions", cafeConditionsDAO.selectCafeConditions(no));
		}else {
			map.put("user", usersDAO.selectUser(no));
			map.put("talents", talentsDAO.selectList(no));
		}//if~else end
		map.put("owner", usersDAO.selectOneForTabs(no));
		map.put("representImages", imagesLinkDAO.selectRepresentImages(no));
		
		return map;
	}//userDetail() end
	
	@Override
	public Map<String, Object> userCommentList(int no, int pageNo) {
		Map<String, Object> map = new ConcurrentHashMap<>();
		
		int numPage = 20;
		int numBlock = 3;

		PageVO pageVO = new PageVO(pageNo, numPage, no);
		
		List<Comment> list = commentsDAO.selectProfileCommentList(pageVO);
		
		int total = commentsDAO.selectProfileCommentTotal(no);
		
		String url = "/user/" + no + "/comment/page/";
		
		String paginate = PaginateUtil.getPaginate(pageNo, total, numPage, numBlock, url);

		map.put("list", list);
		map.put("paginate", paginate);
		
		return map;
	}//profileCommentList() end
	
	@Override
	public boolean commentUpdate(int no) {
		return 1==commentsDAO.update(no);
	}//commentDelete() end
	
	@Override
	public Map<String, Object> userMatchingList(int no, int pageNo) {
		Map<String, Object> map = new ConcurrentHashMap<>();
		
		int numPage = 20;
		int numBlock = 3;
		PageVO pageVO = new PageVO(pageNo, numPage, no);
		
		List<Matching> list = matchingsDAO.selectUserMacingList(pageVO);
		
		int total = matchingsDAO.selectUserMacingTotal(no);
		
		String url = "/user/" + no + "/request/page/";
		
		String paginate = PaginateUtil.getPaginate(pageNo, total, numPage, numBlock, url);
	
		map.put("list", list);
		map.put("paginate", paginate);
		
		return map;
	}//userMatchingList() end
	
	@Override
	public Map<String, Object> getList(int pageNo, String addressOld, int americano, int withUnis) {
		Map<String, Object> datas = new ConcurrentHashMap<>();
		
		int numPage = 6;
		int numBlock = 5;
		String url = "/ihas/page/";
		
		PageVO pageVO= new PageVO(pageNo, numPage, addressOld, americano, withUnis);
		
		datas.put("users",usersDAO.selectList(pageVO));
		int total = usersDAO.selectTotal(pageVO);
		datas.put("paginate", PaginateUtil.getPaginate(pageNo, total, numPage, numBlock, url));
		datas.put("total", total);
		
		return datas;
	}//getList() end

	@Override
	public List<User> newList() {
		return usersDAO.newList();
	}//newList() end

	@Override
	public List<User> bestList() {
		return usersDAO.bestList();
	}//bestList() end

	@Override
	public List<User> cafeList() {
		return usersDAO.cafeList();
	}//cafeList() end


	@Override
	public List<Follow> getBookmarkList(int no) {
		return followsDAO.selectList(no);
	}//getBookmarkList() end

	@Override
	public boolean removeBookmark(int no) {
		return 1 == followsDAO.delete(no);
	}//removeBookmark() end

	@Override
	public List<Image> getAlbum(int ownerNo, int scrollNo) {
		
		ScrollVO scrollVO = new ScrollVO();
		
		scrollVO.setOwnerNo(ownerNo);
		scrollVO.setScrollNo(scrollNo);
		
		return imagesDAO.selectAlbum(scrollVO);
	}//getAlbum() end

	@Override
	public User getOwnerInfo(int no) {
		return usersDAO.selectOneForTabs(no);
	}
	
}//UsersSerivceImpl end
