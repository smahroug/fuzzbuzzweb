package com.serviceflow.fuzzbuzz.web.contoller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.util.JSONWrappedObject;
import com.serviceflow.fuzzbuzz.service.api.FuzzBussService;


@RestController
public class FuzzBuzzContoller {
	
	@Autowired
	FuzzBussService fuzzBussService;
	
	@RequestMapping(value = "/api/calculate/{value}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public JSONWrappedObject calulateFuzzBuzz(@PathVariable Integer value) {
		return new JSONWrappedObject(null, null, fuzzBussService.calulateFuzzBuzz(value));
	}	

}
