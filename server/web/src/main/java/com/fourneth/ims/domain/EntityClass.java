package com.fourneth.ims.domain;

import org.codehaus.jackson.annotate.JsonIgnore;
import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.codehaus.jackson.map.annotate.JsonSerialize;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

/**
 * Created with IntelliJ IDEA.
 * User: romith
 * Date: 4/25/13
 * Time: 10:29 PM
 * To change this template use File | Settings | File Templates.
 */
@MappedSuperclass
@JsonSerialize(include = JsonSerialize.Inclusion.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class EntityClass implements Serializable {

    @Id
    @Column
    @GeneratedValue
    private Long id;
    @Version
    private int version;
    @Column(name = "created_time")
    @NotNull
    private Long createdTime;
    @Column(name = "updated_time")
    private long updatedTime;
    @Column(name = "organization_id") @NotNull @Size(max = 50)
    private String organizationId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getVersion() {
        return version;
    }

    public void setVersion(int version) {
        this.version = version;
    }

    public long getUpdatedTime() {
        return updatedTime;
    }

    public void setUpdatedTime(Long updatedTime) {
        this.updatedTime = updatedTime;
    }

    public long getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(Long createdTime) {
        this.createdTime = createdTime;
    }

    public String getOrganizationId() {
        return organizationId;
    }

    public void setOrganizationId(String organizationId) {
        this.organizationId = organizationId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        EntityClass that = (EntityClass) o;

        return version == that.version
                && !(id != null ? !id.equals(that.id) : that.id != null)
                && !(organizationId != null
                    ? !organizationId.equals(that.organizationId)
                    : that.organizationId != null);

    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + version;
        result = 31 * result + (organizationId != null ? organizationId.hashCode() : 0);
        return result;
    }
}
