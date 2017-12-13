import { Injectable } from '@angular/core';

@Injectable()
export class FeedService {
  posts: any = [
    { 
      header: 'Home',
      tags: 'Story, Tech',
      description: "Be careful. You can always add more - but you can't take it away. All you need to paint is a few tools, a little instruction, and a vision in your mind. Sometimes you learn more from your mistakes than you do from your masterpieces."
    },
    {
      header: 'Brent',
      tags: 'Sports, Hobbies, Gaming',
      description: "There we go. Didn't you know you had that much power? You can move mountains. You can do anything. You create the dream - then you bring it into your world."
    },
    {
      header: 'Path of Exile',
      tags: 'Gaming, ARPG,',
      description: "Follow the lay of the land. It's most important. We don't make mistakes we just have happy little accidents. Only think about one thing at a time. Don't get greedy."
    },
    {
      header: 'Home Sweet Home',
      tags: 'Story, Ohio',
      description: "Follow the lay of the land. It's most important. We don't need any guidelines or formats. All we need to do is just let it flow right out of us. We don't really know where this goes - and I'm not sure we really care."
    }
  ];

  getPosts = () => {
    return this.posts;
  }
}