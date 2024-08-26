import React, { useState } from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'> 
        Dive into our eclectic menu, where tradition meets innovation. Each dish is crafted to offer a unique blend of global influences and inventive twists, promising a dining experience that is as diverse and dynamic as your taste buds.
        </p>
        <div className='explore-menu-list'>
            {menu_list.map((item, index) => {
                return (
                  <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""/>
                    <p>{item.menu_name}</p>
                  </div>
                );
            })}
        </div>
        <hr/>
    </div>
  );
}

export default ExploreMenu;
