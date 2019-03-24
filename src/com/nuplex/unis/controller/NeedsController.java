package com.nuplex.unis.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.nuplex.unis.service.NeedsService;
import com.nuplex.unis.vo.Matching;
import com.nuplex.unis.vo.Need;

@Controller
public class NeedsController {
	private NeedsService needsService;
	
	public void setNeedsService(NeedsService needsService) {
		this.needsService = needsService;
	}
	
	@RequestMapping(value="/{type}/list", method=RequestMethod.GET)
	public String needList(@PathVariable String type) {
		return "needList";
	}
	
	@RequestMapping(value="/{type}/register",method=RequestMethod.GET)
	public String registerForm(@PathVariable String type) {
		return "registerForm";
	}
	
	@RequestMapping(value="/{type}/register",method=RequestMethod.POST)
	public String register(Need need, @PathVariable String type,
			@RequestParam(value="image") String[] images, 
			@RequestParam(value="no") int[] nos) {
		needsService.registerPost(need,images,nos);
		return "redirect:/"+type+"/list";
	}
	
	@RequestMapping(value="/unes/detail/{no}",method=RequestMethod.GET )
	public String unesmain(Model model, @PathVariable int no) {
		
		model.addAllAttributes(needsService.getUnes(no));
		return "unesDetail";
		
	}//needmain() end
	
	@RequestMapping(value="/unes/detail/{no}/popup",method=RequestMethod.POST)
	public String unesMatchingInsert(Matching m,@PathVariable int no) {
		needsService.matchingInsert(m);		
		return "redirect:/unes/detail/"+no;
	}
}