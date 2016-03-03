import template from './blog-post.html';
import './blog-post.styl';

export default {
  restrict: 'E',
  bindings: {
    post: '='
  },
  template,
  controller: ["marked", "$sce", function(marked, $sce) {
    this.mdBody = $sce.trustAsHtml(marked(this.post.body))
  }],
  controllerAs: 'blogPost'
}
