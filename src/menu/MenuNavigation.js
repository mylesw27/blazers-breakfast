import React from 'react';
import './MenuNavigation.css'
  
export default function Navbar() {
    const menuItems = [
      { id: 1, title: "Drinks" },
      { id: 2, title: "Appetizers" },
      { id: 3, title: "Burritos" }, 
      { id: 4, title: "Pancakes" },
      { id: 5, title: "Waffles" }
    ]

  return(
    <div class="navigation-container">
      <div>
        <ul>
          {menuItems.map(item => (
            <li key={item.title}>
              {item.title}
            </li>))}
        </ul>
      </div>
    </div>
  )
}