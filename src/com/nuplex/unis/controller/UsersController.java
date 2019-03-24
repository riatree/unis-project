package com.nuplex.unis.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nuplex.unis.service.UsersService;
import com.nuplex.unis.vo.User;

@Controller
public class UsersController {
	private UsersService usersService;
	
	public void setUsersService(UsersService usersService) {
		this.usersService = usersService;
	}
	
	@RequestMapping(value="/login",method=RequestMethod.GET)
	public String loginPage() {
		return "login";
	}	
	
	@RequestMapping(value="/findpassword", method=RequestMethod.GET)
	public String findPassword() {
		return "findPassword";
	}//findPassword() end

	@RequestMapping(value="/session", method=RequestMethod.POST)
	public String login(User user, HttpSession session, @RequestHeader String referer) {
		session.setAttribute("loginUser", usersService.login(user));
		return "redirect:/index";
	}
	
	@RequestMapping(value="/session", method=RequestMethod.DELETE)
	public String logout(HttpSession session, @RequestHeader String referer) {
		session.invalidate();
		return "redirect:"+referer;
	}
	
	@RequestMapping(value="/users/join", method=RequestMethod.GET)
	public String joinUsers() {
		return "joinForm";
	}//joinUsers() end	
	
	@RequestMapping(value="/cafe/join", method=RequestMethod.GET)
	public String joinCafe() {
		return "cafeJoinForm";
	}//joinCafe() end
	
	@RequestMapping(value="/cafe/join", method=RequestMethod.POST)
	public String registerCafe(User user) {
		usersService.insert(user);
		return "cafeJoinForm";
	}//joinCafe() end
	
	@RequestMapping(value="/user/join", method=RequestMethod.GET)
	public String joinUser() {
		return "userJoinForm";
	}//joinUser() end
	
	@RequestMapping(value="/cell/verification", method=RequestMethod.GET)
	public String verifyCell() {
		return "cellVerification";
	}//verifyCell() end

	
	/* UserPage */

	@RequestMapping(value = "/user/{no}", method = RequestMethod.GET)
	public String userpage(HttpServletRequest request, @PathVariable int no, Model model) {
		request.setAttribute("pageName", "intro");

		model.addAllAttributes(usersService.userDetail(no));
		model.addAttribute("whosePage", no);

		return "userpage";
	}// userpage() end

	@RequestMapping(value = "/user/{no}/album", method = RequestMethod.GET)
	public String albumTap(HttpServletRequest request, @PathVariable int no, Model model) {
		request.setAttribute("pageName", "album");
		
		model.addAttribute("owner", usersService.getOwnerInfo(no));
		model.addAttribute("whosePage", no);
		return "userpageAlbum";
	}// albumTap() end
	

	@RequestMapping(value = "/user/{no}/need", method = RequestMethod.GET)
	public String needsTap(HttpServletRequest request, @PathVariable int no, Model model) {
		request.setAttribute("pageName", "need");
		model.addAttribute("whosePage", no);
		model.addAttribute("owner", usersService.getOwnerInfo(no));
		return "userpageNeeds";
	}// needsTap() end

	@RequestMapping(value = "/user/{no}/request", method = RequestMethod.GET)
	public String requestsTap(HttpServletRequest request, @PathVariable int no, Model model) {
		request.setAttribute("pageName", "request");
		model.addAttribute("whosePage", no);
		model.addAttribute("owner", usersService.getOwnerInfo(no));
		return "userpageRequests";
	}// requestsTap() end

	@RequestMapping(value = "/user/{no}/bookmark", method = RequestMethod.GET)
	public String bookmarksTap(HttpServletRequest request, @PathVariable int no, Model model) {
		request.setAttribute("pageName", "bookmark");
		model.addAttribute("whosePage", no);
		model.addAttribute("owner", usersService.getOwnerInfo(no));
		return "userpageBookmarks";
	}// bookmarksTap() end

	@RequestMapping(value = "/user/{no}/feed", method = RequestMethod.GET)
	public String feedsTap(HttpServletRequest request, @PathVariable int no, Model model) {
		request.setAttribute("pageName", "feed");
		model.addAttribute("whosePage", no);
		model.addAttribute("owner", usersService.getOwnerInfo(no));
		return "userpageFeeds";
	}// feedsTap() end

	@RequestMapping(value = "/user/{no}/comment", method = RequestMethod.GET)
	public String commentsTap(HttpServletRequest request, @PathVariable int no, Model model) {
		request.setAttribute("pageName", "commentList");
		model.addAttribute("whosePage", no);
		model.addAttribute("owner", usersService.getOwnerInfo(no));
		return "userpageComments";
	}// commentsTap() end	
	
	@RequestMapping(value="/ihas/list", method=RequestMethod.GET )
	public String ihasList(Model model) {
		model.addAttribute("newList",usersService.newList());
		model.addAttribute("bestList",usersService.bestList());
		return "ihas";
	}
}//IndexController end
