package net.javaguides.ems.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TblUserMasterDto {
    private long userId;
    private String userName;
    private String mobileNumber;
    private String password;
    private String confirmPassword;
}
