package com.serviceflow.fuzzbuzz.service.api;

import org.springframework.stereotype.Service;

@Service
public class FuzzBuzzServiceImpl implements FuzzBussService{

	public String calulateFuzzBuzz(Integer value) {
		StringBuilder retval = new StringBuilder("") ;
		if(value > 0){
			for (int i = 1; i <= value; i++) {
	            if (i % 15 == 0) {
	                retval.append("FizzBuzz").append(" ");
	            } else if (i % 3 == 0) {
	                retval.append("Fizz").append(" ");
	            } else if (i % 5 == 0) {
	                retval.append("Buzz").append(" ");
	            } else {
	                retval.append(String.valueOf(i)).append(" ");
	            }
	        }
		}	
		return retval.toString();
	}

}
