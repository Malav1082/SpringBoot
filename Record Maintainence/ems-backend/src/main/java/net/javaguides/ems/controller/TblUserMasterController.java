package net.javaguides.ems.controller;

import lombok.AllArgsConstructor;
import net.javaguides.ems.service.TblUserMasterService;
import net.javaguides.ems.entity.TblUserMaster;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@CrossOrigin("*")
public class TblUserMasterController {

    @Autowired
    public TblUserMasterService tblUserMasterService;

    @PostMapping("/register")
    public String register(@RequestBody TblUserMaster tblUserMaster) {
        if (tblUserMasterService.getUserByE(tblUserMaster) == null) {
            System.out.println(tblUserMasterService.addUser(tblUserMaster));
        } else {
            System.out.println("Already Exists!");
        }
        return "register";
    }

    // @PostMapping("/login")
    // public String login(@RequestBody UserDto userDto) {
    //   System.out.println("POSTED LOGIN" + userDto);
    //   User user = this.modelMapper.map(userDto, User.class);
    //   System.out.println(user);
    //   return "login";
    // }
//    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    public String login(@RequestBody TblUserMaster tblUserMaster) {
        System.out.println("POSTED LOGIN" + tblUserMaster);
        return "login";
    }

    @GetMapping("/reset-password")
    public String resetPassword() {
        System.out.println("reset-password");
        return "reset-password";
    }

    @GetMapping("/forgot-password")
    public String forgotPassword() {
        System.out.println("forgot-password");
        return "forgot-password";
    }
}
