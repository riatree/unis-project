package com.nuplex.unis.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nuplex.unis.service.UsersService;

@Controller
public class IndexController {
	private UsersService usersService;
	
	public void setUsersService(UsersService usersService) {
		this.usersService = usersService;
	}//setUsersService() end
	
	@RequestMapping(value= {"/","/index"}, method=RequestMethod.GET)
	public String index(Model model) {
		System.out.println("GET /index");
		model.addAttribute("cafeList",usersService.cafeList());
		return "index";
	}//index() end
	
}//IndexController end
