package com.fourneth.ims.controller;

import com.fourneth.ims.domain.Employee;
import com.fourneth.ims.repository.EmployeeRepository;
import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Controller
public class EmployeeController {

    private static final Logger logger = LoggerFactory.getLogger(EmployeeController.class);

    @Autowired
    private EmployeeRepository er;

    @RequestMapping(method = RequestMethod.GET, value = "/employees/{id}", produces = "application/json")
    public @ResponseBody Employee employee(@PathVariable long id) {

        logger.info("Employee get request received id [{}]", id);

        return er.findOne(id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/employees",
            consumes = "application/json", produces = "application/json")
    public @ResponseBody Employee create(@RequestBody Employee e) {
        logger.info("Employee create request received [{}]", e);
        e.setCreatedTime(System.currentTimeMillis());
        er.save(e);
        return e;
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/employees",
            consumes = "application/json", produces = "application/json")
    public @ResponseBody Employee update(@RequestBody Employee e) {
        logger.info("Employee update request received [{}]", e);
        e.setUpdatedTime(System.currentTimeMillis());//todo integrate service layer here
        er.save(e);
        return e;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/employees", produces = "application/json")
    public @ResponseBody Map findAll(@RequestParam Integer page,
                                     @RequestParam Integer start,
                                     @RequestParam Integer limit) {
        logger.info("Employees get request received.....");
        LinkedHashMap<Object,Object> response = Maps.newLinkedHashMap();
        response.put("users", Lists.newArrayList(er.findAll()));
        response.put("success", Boolean.TRUE);
        response.put("message", "success");
        return response;
    }
}
