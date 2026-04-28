using EmployeeAPI.Data;
using EmployeeAPI.Models;
using Microsoft.EntityFrameworkCore;


var builder = WebApplication.CreateBuilder(args);


// 註冊 DbContext，指定使用 SQLite
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));



// 啟用專案
var app = builder.Build();



// 先加一個測試路由
// app.MapGet("/", () => "Employee API is running");


// 提供 wwwroot/index.html、css、js
app.UseDefaultFiles();
app.UseStaticFiles();



// 取得全部員工
app.MapGet("/employees", async (AppDbContext db) =>
    await db.Employees.ToListAsync());




// 取得單筆員工
app.MapGet("/employees/{id}", async (int id, AppDbContext db) =>
{
    var employee = await db.Employees.FindAsync(id);
    return employee is null ? Results.NotFound() : Results.Ok(employee);
});


// 新增員工
app.MapPost("/employees", async (Employee employee, AppDbContext db) =>
{
    db.Employees.Add(employee);
    await db.SaveChangesAsync();
    return Results.Created($"/employees/{employee.Id}", employee);
});


// 修改員工
app.MapPut("/employees/{id}", async (int id, Employee input, AppDbContext db) =>
{
    var employee = await db.Employees.FindAsync(id);

    if (employee is null)
        return Results.NotFound();

    employee.Name = input.Name;
    employee.Department = input.Department;
    employee.Email = input.Email;
    employee.Salary = input.Salary;

    await db.SaveChangesAsync();
    return Results.Ok(employee);
});


// 刪除員工
app.MapDelete("/employees/{id}", async (int id, AppDbContext db) =>
{
    var employee = await db.Employees.FindAsync(id);

    if (employee is null)
        return Results.NotFound();

    db.Employees.Remove(employee);
    await db.SaveChangesAsync();
    return Results.NoContent();
});


app.Run();
