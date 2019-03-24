package com.nuplex.unis.controller;

import java.io.File;
import java.sql.Timestamp;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.nuplex.unis.service.CommentsService;
import com.nuplex.unis.service.NeedsService;
import com.nuplex.unis.service.UsersService;
import com.nuplex.unis.util.FileRenameUtil;
import com.nuplex.unis.util.ResizeImageUtil;
import com.nuplex.unis.vo.Comment;
import com.nuplex.unis.vo.Follow;
import com.nuplex.unis.vo.Image;
import com.nuplex.unis.vo.Matching;
import com.nuplex.unis.vo.Need;
import com.nuplex.unis.vo.User;

@Controller
public class AjaxController {
	private NeedsService needsService;
	private UsersService usersService;
	private CommentsService commentsService;
	private ResizeImageUtil resizeImageUtil;

	public void setResizeImageUtil(ResizeImageUtil resizeImageUtil) {
		this.resizeImageUtil = resizeImageUtil;
	}

	public void setNeedsService(NeedsService needsService) {
		this.needsService = needsService;
	}
	
	public void setUsersSerivce(UsersService usersService) {
		this.usersService = usersService;
	}
	
	public void setCommentsService(CommentsService commentsService) {
		this.commentsService = commentsService;
	}

	@RequestMapping(value = "/ajax/{type}/list/page/{pageNo}", method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public Map<String, Object> getNeedList(@PathVariable String type, @PathVariable int pageNo,
			@RequestParam(value = "region") String region, @RequestParam(value = "talentNo") String talentNo,
			@RequestParam(value = "startDate", required = false) Timestamp startDate,
			@RequestParam(value = "endDate", required = false) Timestamp endDate,
			@RequestParam(value = "noise") int noise, @RequestParam(value = "fareType") String fareType,
			@RequestParam(value = "fare") int fare, @RequestParam(value = "fareDir") String fareDir,
			@RequestParam(value = "area") int area) {
		return needsService.getNeedList(type, pageNo, region, talentNo, startDate, endDate, noise, fareType, fare, fareDir, area);
	}//get needList, filter
	
	@RequestMapping(value = "/ajax/{type}/register/{userNo}/page/{pageNo}", method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public List<Image> getNeedList(@PathVariable String type, @PathVariable int userNo, @PathVariable int pageNo) {
		return needsService.getImageList(userNo, pageNo);
	}//get user's imageList

	@RequestMapping(value = "/ajax/upload", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String uploadImage(HttpServletRequest request, String type, MultipartFile uploadImg) {
		ServletContext sc = request.getServletContext();
		
		String uploadPath = sc.getRealPath("/img/upload");
		String profilePath = sc.getRealPath("/img/profile");
		String needPath1 = sc.getRealPath("/img/needs_105x81");
		String needPath2 = sc.getRealPath("/img/needs_340x190");

		File file = new File(uploadPath + File.separator + uploadImg.getOriginalFilename());
		file = FileRenameUtil.rename(file);

		try {
			uploadImg.transferTo(file);
			switch (type) {
			case "P":
				resizeImageUtil.resize(file.getAbsolutePath(), profilePath + File.separator + file.getName(), 300);
				break;
			case "B":
				break;
			case "N":
				resizeImageUtil.resize(file.getAbsolutePath(), needPath1 + File.separator + file.getName(), 105, 81);
				resizeImageUtil.resize(file.getAbsolutePath(), needPath2 + File.separator + file.getName(), 340, 190);
				break;
			}// switch end
			return "{\"src\":\"" + file.getName() + "\"}";
		} catch (Exception e) {
			e.printStackTrace();
			return "에러";
		} // try ~ catch() end
	}// uploadImage() end
	
	@RequestMapping(value="/ajax/user/check/email", method=RequestMethod.GET, produces="application/json;charset=UTF-8")
	@ResponseBody
	public String checkId(String email) {
		return "{\"count\":"+ usersService.checkEmail(email) +"}";
	}//checkId () end
	
	@RequestMapping(value="/ajax/user/check/nickname", method=RequestMethod.GET, produces="application/json;charset=UTF-8")
	@ResponseBody
	public String checkNickname(String nickname) {
		return "{\"count\":"+ usersService.checkNickname(nickname) +"}";
	}//checkNickname () end
	
	@RequestMapping(value="/ajax/user/check/license", method=RequestMethod.GET, produces="application/json;charset=UTF-8")
	@ResponseBody
	public String checkLicense(String license) {
		return "{\"count\":"+ usersService.checkLicense(license) +"}";
	}//checkLicense() end
	
	@RequestMapping(value="/ajax/unes/detail/{no}",method=RequestMethod.GET, produces = "application/json;charset=UTF-8" )
	@ResponseBody
	public Map<String, Object> unesConditionList(@PathVariable int no) {
		return needsService.getMachedList(no);
	}//unesConditionList() end
	
	@RequestMapping(value="/ajax/ines/detail/{no}",method=RequestMethod.GET, produces = "application/json;charset=UTF-8" )
	@ResponseBody
	public Map<String, Object> inesConditionList(@PathVariable int no) {
		return needsService.getInesMachedList(no);
	}//inesConditionList() end
	
	@RequestMapping(value="/ajax/ines/detail/{no}/page/{pageNo}",method=RequestMethod.GET, produces = "application/json;charset=UTF-8" )
	@ResponseBody
	public Map<String, Object> inesMatchingAjax(@PathVariable int no,@PathVariable int pageNo) {
		return needsService.getInesMachingList(pageNo, no);
	}//unesConditionList() end
	
	@RequestMapping(value="/ajax/unes/detail/{no}/calender",method=RequestMethod.GET, produces = "application/json;charset=UTF-8" )
	@ResponseBody
	public List<Matching> unesScheduleList(@PathVariable int no) {		
		return needsService.getMetchCalender(no);
	}//unesScheduleList() end
	
	@RequestMapping(value="/ajax/unes/detail/{no}/page/{pageNo}",method=RequestMethod.GET, produces = "application/json;charset=UTF-8" )
	@ResponseBody
	public Map<String, Object> unesMatchingAjax(@PathVariable int no,@PathVariable int pageNo) {
		return needsService.getMachingList(pageNo, no);
	}//unesConditionList() end
	
	@RequestMapping(value="/ajax/unes/detail/{no}/update/{clickNum}",method=RequestMethod.POST, produces = "application/json;charset=UTF-8" )
	@ResponseBody
	public int unesMatchingUpdateAjax(@PathVariable int no,@PathVariable int clickNum) {
		return needsService.matchingUpdate(clickNum);
	}//unesConditionList() end
	
	@RequestMapping(value="/ajax/unes/detail/{no}/update/{clickNum}/cancel",method=RequestMethod.POST, produces = "application/json;charset=UTF-8" )
	@ResponseBody
	public int unesUnMatchingUpdateAjax(@PathVariable int no,@PathVariable int clickNum) {
		return needsService.unMatchingUpdate(clickNum);
	}//unesConditionList() end
	
	@RequestMapping(value = "/ajax/user/{no}/request/page/{pageNo}", method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public Map<String, Object> userRequestAjax(@PathVariable int no, @PathVariable int pageNo) {
		return usersService.userMatchingList(no, pageNo);
	}// userRequestAjax() end

	@RequestMapping(value = "/ajax/user/{no}/comment/page/{pageNo}", method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public Map<String, Object> userCommentAjax(@PathVariable int no, @PathVariable int pageNo) {
		return usersService.userCommentList(no, pageNo);
	}// userCommentAjax() end

	// 작성댓글 삭제
	@RequestMapping(value = "/ajax/user/{no}/comment/delete", method = RequestMethod.POST)
	@ResponseBody
	public String userCommentDelete(@PathVariable int no, int commentNum) {
		boolean flag = usersService.commentUpdate(commentNum);
		return "{\"result\" :" + flag + "}";
	}// userCommentDelete() end
	
	@RequestMapping(value="/ajax/comment/{no}",method=RequestMethod.GET,produces="application/json;charset=UTF-8")
	@ResponseBody
	public Map<String, Object> getComments(@PathVariable int no, int scrollNo) {
		return commentsService.getComments(no, scrollNo);
	}
	
	@RequestMapping(value="/ajax/comment/{no}",method=RequestMethod.POST,produces="application/json;charset=UTF-8")
	@ResponseBody
	public Map<String, Object> writeComment(@PathVariable int no, Comment comment, HttpSession session) {
		comment.setTargetNo(no);
		User loginUser = (User) session.getAttribute("loginUser");
		comment.setUserNo(loginUser.getNo());
		
		return commentsService.writeComment(comment);
	}
	
	@ResponseBody
	@RequestMapping(value="/ajax/recomment/{no}",method=RequestMethod.POST,produces="application/json;charset=UTF-8")
	public Map<String, Object> writeRecomment(@PathVariable int no, Comment comment, HttpSession session) {
		comment.setTargetNo(no);
		User loginUser = (User) session.getAttribute("loginUser");
		comment.setUserNo(loginUser.getNo());
		
		return commentsService.writeRecomment(comment);
	}
	
	@RequestMapping(value="/ajax/ihas/list/page/{pageNo}",method=RequestMethod.GET, produces="application/json;charset=UTF-8")
	@ResponseBody
	public Map<String, Object> getIhasList(@PathVariable int pageNo,@RequestParam(value="addressOld") String addressOld,@RequestParam(value="americano") int americano, @RequestParam(value="withUnis") int withUnis){
		return usersService.getList(pageNo,addressOld,americano,withUnis);
		
	}
	
	@RequestMapping(value="/ajax/user/{no}/book", method=RequestMethod.GET, produces="application/json;charset=UTF-8")
	@ResponseBody
	public List<Follow> bookmarkList(@PathVariable int no) {
		return usersService.getBookmarkList(no);
	}//bookmarkList() end
	
	@RequestMapping(value="/ajax/user/book/delete",method=RequestMethod.POST, produces="application/json;charset=UTF-8")
	@ResponseBody
	public String removeBookmark(int no) {
		return "{\"result\" : " + usersService.removeBookmark(no)+"}";
	}//removeBookmark() end
	
	@RequestMapping(value="/ajax/user/{no}/need/list", method=RequestMethod.GET, produces="application/json;charset=UTF-8")
	@ResponseBody
	public List<Need> getNeedList(@PathVariable int no) {
		System.out.println(no);
		return needsService.getNeedList(no);
	}//getNeedList() end
	
	@ResponseBody
	@RequestMapping(value = "/ajax/user/{no}/album", method = RequestMethod.GET, produces="application/json;charset=UTF-8")
	public List<Image> albumAjax(HttpServletRequest request, @PathVariable int no, int scrollNo) {
		return usersService.getAlbum(no, scrollNo);
	}// albumTap() end
}