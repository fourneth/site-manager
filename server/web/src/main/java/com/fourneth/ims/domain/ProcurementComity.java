package com.fourneth.ims.domain;

/**
 * Created with IntelliJ IDEA.
 * User: romith
 * Date: 4/25/13
 * Time: 11:56 PM
 * To change this template use File | Settings | File Templates.
 */
public class ProcurementComity extends EntityClass {

    private String name;
    private String code;
    private String organizationUnitId;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
