
const admin = [
    {
      "id": 1,
      "name": "Admin User",
      "email": "admin@company.com",
      "password": "123"
    }
]

const employee= [
    {
      "id": 1,
      "name": "Rahul",
      "email": "rahul@company.com",
      "password": "123",
      "tasks": [
        {
          "title": "Design login page",
          "description": "Create responsive login UI",
          "date": "2026-03-05",
          "category": "Design",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Fix navbar bug",
          "description": "Navbar not responsive on mobile",
          "date": "2026-03-06",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Update logo",
          "description": "Replace old company logo",
          "date": "2026-03-07",
          "category": "Design",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 2,
      "name": "Anjali",
      "email": "anjali@company.com",
      "password": "123",
      "tasks": [
        {
          "title": "Create dashboard layout",
          "description": "Admin dashboard UI",
          "date": "2026-03-04",
          "category": "Design",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Optimize images",
          "description": "Reduce image load size",
          "date": "2026-03-08",
          "category": "Performance",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Footer redesign",
          "description": "Improve footer layout",
          "date": "2026-03-09",
          "category": "Design",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "name": "Vikram",
      "email": "vikram@company.com",
      "password": "123",
      "tasks": [
        {
          "title": "Implement API calls",
          "description": "Connect frontend with backend",
          "date": "2026-03-05",
          "category": "Backend",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Fix authentication bug",
          "description": "Login token issue",
          "date": "2026-03-06",
          "category": "Security",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Write API documentation",
          "description": "Document endpoints",
          "date": "2026-03-10",
          "category": "Documentation",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "name": "Sneha",
      "email": "sneha@company.com",
      "password": "123",
      "tasks": [
        {
          "title": "User profile page",
          "description": "Design and implement profile page",
          "date": "2026-03-05",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Dark mode toggle",
          "description": "Add theme switch feature",
          "date": "2026-03-07",
          "category": "Feature",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Accessibility improvements",
          "description": "Improve accessibility support",
          "date": "2026-03-11",
          "category": "UX",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "name": "Arjun",
      "email": "arjun@company.com",
      "password": "123",
      "tasks": [
        {
          "title": "Set up CI/CD",
          "description": "Automate deployment pipeline",
          "date": "2026-03-06",
          "category": "DevOps",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Server monitoring",
          "description": "Track server performance",
          "date": "2026-03-08",
          "category": "DevOps",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Fix deployment script",
          "description": "Correct script errors",
          "date": "2026-03-09",
          "category": "DevOps",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    }
  ]


export const getLocalStorage = ()=>{
  let data = JSON.parse(localStorage.getItem("employees"))
}

export const setLocalStorage = ()=>{

  localStorage.setItem("employees", JSON.stringify(employee))
  localStorage.setItem("admin", JSON.stringify(admin))

}
