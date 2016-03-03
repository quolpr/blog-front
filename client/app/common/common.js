import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import BlogPost from './blog-post';

export default angular.module('app.common', [
  Navbar.name,
  Hero.name,
  User.name,
  BlogPost.name,
]);
