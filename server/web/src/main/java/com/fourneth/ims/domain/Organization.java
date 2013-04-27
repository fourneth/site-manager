package com.fourneth.ims.domain;

import javax.persistence.Column;

/**
 * Created with IntelliJ IDEA.
 * User: romith
 * Date: 4/25/13
 * Time: 10:28 PM
 * To change this template use File | Settings | File Templates.
 */
public class Organization extends EntityClass {

    @Column
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
