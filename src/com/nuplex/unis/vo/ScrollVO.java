package com.nuplex.unis.vo;

public class ScrollVO {

	private int userNo, scrollNo, start, end, ownerNo;

	public ScrollVO() {
		// TODO Auto-generated constructor stub
	}
	
	public int getOwnerNo() {
		return ownerNo;
	}

	public void setOwnerNo(int ownerNo) {
		this.ownerNo = ownerNo;
	}

	public int getStart() {
		return (scrollNo - 1) * 20 + 1;
	}

	public int getEnd() {
		return scrollNo * 20;
	}
	
	public void setStart(int start) {
		this.start = start;
	}

	public void setEnd(int end) {
		this.end = end;
	}

	public int getUserNo() {
		return userNo;
	}

	public void setUserNo(int userNo) {
		this.userNo = userNo;
	}

	public int getScrollNo() {
		return scrollNo;
	}

	public void setScrollNo(int scrollNo) {
		this.scrollNo = scrollNo;
	}
	
}//ScrollVO end
