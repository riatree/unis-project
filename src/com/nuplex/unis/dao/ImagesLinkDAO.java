package com.nuplex.unis.dao;

import java.util.List;

import com.nuplex.unis.vo.Image;
import com.nuplex.unis.vo.ImageLink;

public interface ImagesLinkDAO {
	public void insert(ImageLink imageLink);
	public List<Image> selectRepresentImages(int no);
}//ImagesLinkDAO end
