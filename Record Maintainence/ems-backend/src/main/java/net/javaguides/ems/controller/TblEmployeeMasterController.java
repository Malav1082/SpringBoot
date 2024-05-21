package net.javaguides.ems.controller;

import lombok.AllArgsConstructor;
import net.javaguides.ems.dto.TblEmployeeMasterDto;
import net.javaguides.ems.service.TblEmployeeMasterService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employee-master")
@AllArgsConstructor
public class TblEmployeeMasterController {

    private final TblEmployeeMasterService employeeMasterService;

    @PostMapping
    public ResponseEntity<TblEmployeeMasterDto> createEmployee(@RequestBody TblEmployeeMasterDto employeeMasterDto) {
        TblEmployeeMasterDto createdEmployee = employeeMasterService.createTblEmployeeMaster(employeeMasterDto);
        return new ResponseEntity<>(createdEmployee, HttpStatus.CREATED);
    }

    @GetMapping("/{empId}")
    public ResponseEntity<TblEmployeeMasterDto> getEmployeeById(@PathVariable Long empId) {
        TblEmployeeMasterDto employeeMasterDto = employeeMasterService.getTblEmployeeMasterById(empId);
        return ResponseEntity.ok(employeeMasterDto);
    }

    @GetMapping
    public ResponseEntity<List<TblEmployeeMasterDto>> getAllEmployees() {
        List<TblEmployeeMasterDto> employees = employeeMasterService.getAllTblEmployeeMaster();
        return ResponseEntity.ok(employees);
    }

    @PutMapping("/{empId}")
    public ResponseEntity<TblEmployeeMasterDto> updateEmployee(@PathVariable Long empId, @RequestBody TblEmployeeMasterDto updatedEmp) {
        TblEmployeeMasterDto updatedEmployee = employeeMasterService.updateTblEmployeeMaster(empId, updatedEmp);
        return ResponseEntity.ok(updatedEmployee);
    }

    @DeleteMapping("/{empId}")
    public ResponseEntity<Void> deleteEmployee(@PathVariable Long empId) {
        employeeMasterService.deleteTblEmployeeMaster(empId);
        return ResponseEntity.noContent().build();
    }
}
