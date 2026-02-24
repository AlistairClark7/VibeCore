using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using EasyAspCoreReactTemplate.Models;

namespace EasyAspCoreReactTemplate.Data;

public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : IdentityDbContext(options)
{
    public DbSet<TodoItem> Todos { get; set; }
}