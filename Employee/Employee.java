import java.util.ArrayList;
import java.util.List;

public class Employee {
    private int id;
    private String name;
    private double salary;
    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public void displayDetails() {
        System.out.println("Employee Details:");
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Salary: $" + String.format("%.2f", salary));
        System.out.println("------------------------");
    }

    public static void main(String[] args) {

        Employee emp1 = new Employee(101, "vamsi v", 75000.0);
        Employee emp2 = new Employee(102, "Hari s", 82000.0);
        Employee emp3 = new Employee(103, "Ramu m", 68000.0);

        List<Employee> employees = new ArrayList<>();
        employees.add(emp1);
        employees.add(emp2);
        employees.add(emp3);

        System.out.println("Employee List:");
        System.out.println("========================\n");
        for (Employee emp : employees) {
            emp.displayDetails();
        }
    }
} 