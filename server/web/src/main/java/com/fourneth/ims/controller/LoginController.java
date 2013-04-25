package com.fourneth.ims.controller;

import com.fourneth.ims.domain.Employee;
import javassist.compiler.MemberResolver;
import org.aspectj.apache.bcel.classfile.Method;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.propertyeditors.StringArrayPropertyEditor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created with IntelliJ IDEA.
 * User: Prathapage
 * Date: 2/25/13
 * Time: 3:16 PM
 * To change this template use File | Settings | File Templates.
 */
@Controller
public class LoginController {

    private static final Logger logger = LoggerFactory.getLogger(LoginController.class);

    @RequestMapping(method = RequestMethod.POST , value ="/login", consumes = "application/json",
            produces = "application/json")
    public @ResponseBody Employee login(String username, String password )
    {
        logger.info("Login Request received username[{}] password[{}]", username, password);
        return new Employee();
    }

}
