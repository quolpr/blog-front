export default class HomeController {
  constructor() {
    this.blogPosts = [
      {
        title: "test",
        body: "### Test",
        created_at: "12.02.2016",
        tags: [
          {name: "test", path: "test"}
        ]
      }
    ]
  }
}
