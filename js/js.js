let feed = new Instafeed({
  accessToken: 'IGQVJYVkFILTJaVHlRMmhFd1VkeURldW8yLXhRVWZAhelhZANmVqWUEzMWFsSkZATNmkwNDVqNlhjcUlLSDh5Y0x5ZAjlDVVdwYi1tV1FMTkxXbDFVejc4cnYxYmhWQ0NuUmdpaThuTEwyTy1UNU5FZADI1QwZDZD',
  limit: 8,
  template: '<a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a>',
});
feed.run();