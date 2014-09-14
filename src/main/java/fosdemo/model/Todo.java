package fosdemo.model;

import javax.persistence.Entity;
import java.io.Serializable;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Version;
import java.lang.Override;
import java.util.Date;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;
import javax.validation.constraints.NotNull;

@Entity
@XmlRootElement
public class Todo implements Serializable
{

   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   @Column(name = "id", updatable = false, nullable = false)
   private Long id;
   @Version
   @Column(name = "version")
   private int version;

   @Column
   @NotNull
   private String task;

   @Column
   private String description;

   @Column
   @Temporal(TemporalType.DATE)
   private Date createdOn;

   public Long getId()
   {
      return this.id;
   }

   public void setId(final Long id)
   {
      this.id = id;
   }

   public int getVersion()
   {
      return this.version;
   }

   public void setVersion(final int version)
   {
      this.version = version;
   }

   @Override
   public boolean equals(Object obj)
   {
      if (this == obj)
      {
         return true;
      }
      if (!(obj instanceof Todo))
      {
         return false;
      }
      Todo other = (Todo) obj;
      if (id != null)
      {
         if (!id.equals(other.id))
         {
            return false;
         }
      }
      return true;
   }

   @Override
   public int hashCode()
   {
      final int prime = 31;
      int result = 1;
      result = prime * result + ((id == null) ? 0 : id.hashCode());
      return result;
   }

   public String getTask()
   {
      return task;
   }

   public void setTask(String task)
   {
      this.task = task;
   }

   public String getDescription()
   {
      return description;
   }

   public void setDescription(String description)
   {
      this.description = description;
   }

   public Date getCreatedOn()
   {
      return createdOn;
   }

   public void setCreatedOn(Date createdOn)
   {
      this.createdOn = createdOn;
   }

   @Override
   public String toString()
   {
      String result = getClass().getSimpleName() + " ";
      if (id != null)
         result += "id: " + id;
      result += ", version: " + version;
      if (task != null && !task.trim().isEmpty())
         result += ", task: " + task;
      if (description != null && !description.trim().isEmpty())
         result += ", description: " + description;
      if (createdOn != null)
         result += ", createdOn: " + createdOn;
      return result;
   }
}