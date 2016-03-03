import angular from 'angular';
import blogPostComponent from './blog-post.component';
import angularMarked from 'angular-marked/lib/angular-marked';

export default angular.module('blogPost', [
  angularMarked
])
.component('blogPost', blogPostComponent);
