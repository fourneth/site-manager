package com.fourneth.ims.domain;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Created with IntelliJ IDEA.
 * User: romith
 * Date: 4/28/13
 * Time: 5:09 PM
 * To change this template use File | Settings | File Templates.
 */
@Entity
@Table(name = "user")
public class User extends EntityClass {

    private String username;
    private String password;
    private String employeeId;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }
}
