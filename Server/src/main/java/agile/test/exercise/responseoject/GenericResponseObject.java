package agile.test.exercise.responseoject;

import java.io.Serializable;

/**
 *
 */
public class GenericResponseObject implements Serializable {

    private String status = "SUCCESS";
    private Object data;
    private String messageCode;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public String getMessageCode() {
        return messageCode;
    }

    public void setMessageCode(String messageCode) {
        this.messageCode = messageCode;
    }
}
