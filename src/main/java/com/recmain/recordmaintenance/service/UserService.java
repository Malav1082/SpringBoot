package com.recmain.recordmaintenance.service;

import com.recmain.recordmaintenance.entities.User;
import com.recmain.recordmaintenance.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  @Autowired
  private UserRepository userRepository;

  public User addUser(User user) {
    return userRepository.save(user);
  }

  public User getUserByE(User user) {
    return userRepository.findByEmail(user.getEmail());
  }

  public User getUserByEP(String email, String password) {
    User u = null;

    try {
      u = this.userRepository.findByEmailAndPassword(email, password);
    } catch (Exception e) {
      e.printStackTrace();
    }
    return u;
  }

  public boolean resetPassword(
    String email,
    String password,
    String new_password
  ) {
    User u = this.userRepository.findByEmailAndPassword(email, password);

    if (u != null) {
      u.setPassword(new_password);
      userRepository.save(u);
      return true;
    } else {
      return false;
    }
  }

  public boolean forgotPassword(String email, String new_password) {
    User u = userRepository.findByEmail(email);

    if (u != null) {
      u.setPassword(new_password);
      userRepository.save(u);
      return true;
    } else {
      return false;
    }
  }
}
