package com.tagore;

import com.netflix.zuul.ZuulFilter;

public class MyZuulFilter extends ZuulFilter {

	@Override
	public Object run() {
		System.out.println("This request has passed through the custom");
		return null;
	}

	@Override
	public boolean shouldFilter() {
		
		return true;
	}

	@Override
	public int filterOrder() {
		// TODO Auto-generated method stub
		return 1;
	}

	@Override
	public String filterType() {
		// TODO Auto-generated method stub
		return "pre";
	}

}
