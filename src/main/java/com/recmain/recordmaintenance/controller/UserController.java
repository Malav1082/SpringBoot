package com.recmain.recordmaintenance.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.recmain.recordmaintenance.entities.User;
import com.recmain.recordmaintenance.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * UserController
 */
@RestController
@CrossOrigin("*")
public class UserController {

  @Autowired
  public UserService userService;

  // @PostMapping("/login")
  // public String login(@RequestBody UserDto userDto) {
  //   System.out.println("POSTED LOGIN" + userDto);
  //   User user = this.modelMapper.map(userDto, User.class);
  //   System.out.println(user);
  //   return "login";
  // }

  @PostMapping("/login")
  public ResponseEntity<?> login(@RequestBody User user) {
    if (userService.getUserByEP(user.getEmail(), user.getPassword()) != null) {
      return ResponseEntity.ok(" Welcome " + user.getEmail());
    } else {
      return ResponseEntity
        .status(HttpStatus.UNAUTHORIZED)
        .body("Invalid Credentials!");
    }
  }

  @PostMapping("/register")
  public ResponseEntity<?> register(@RequestBody User user) {
    if (userService.getUserByE(user) == null) {
      User u = userService.addUser(user);
      // return ResponseEntity.ok(u.getEmail() + " Registered Successfully");
      return ResponseEntity
        .status(HttpStatus.OK)
        .body(u.getEmail() + " Registered Successfully");
    } else {
      return ResponseEntity
        .status(HttpStatus.BAD_REQUEST)
        .body("User Already Exists!");
    }
  }

  @PostMapping("/reset-password")
  public ResponseEntity<?> resetPassword(@RequestBody JsonNode userNewPas) {
    if (
      userService.resetPassword(
        userNewPas.get("email").asText(),
        userNewPas.get("password").asText(),
        userNewPas.get("new_password").asText()
      )
    ) {
      return ResponseEntity
        .status(HttpStatus.OK)
        .body("Password Changed Successfully!");
    } else {
      return ResponseEntity
        .status(HttpStatus.UNAUTHORIZED)
        .body("Invalid Credentials!");
    }
  }

  @PostMapping("/forgot-password")
  public ResponseEntity<?> forgotPassword(@RequestBody JsonNode user) {
    if (
      userService.forgotPassword(
        user.get("email").asText(),
        user.get("new_password").asText()
      )
    ) {
      return ResponseEntity
        .status(HttpStatus.OK)
        .body("Password Changed Successfully!");
    } else {
      return ResponseEntity
        .status(HttpStatus.UNAUTHORIZED)
        .body("User not found!");
    }
  }
}
