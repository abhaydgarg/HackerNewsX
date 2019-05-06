import { isEmpty } from '@abhaydgarg/is';
import url from 'url';

import Config from '../Config';

export default function mapper (object) {
  // Initial values when url
  // is not present in story;
  // story can be ask or show.
  let story = {
    id: object.id,
    title: object.title,
    image: null,
    description: object.text,
    url: `${Config.ycombinatorUrl}item?id=${object.id}`,
    website: 'news.ycombinator',
    time: object.time * 1000,
    points: object.score,
    comments: object.descendants,
    commentUrl: `${Config.ycombinatorUrl}item?id=${object.id}`,
    canFetchMetadata: false
  };

  if (!isEmpty(object.url)) {
    story.description = null;
    story.url = object.url;
    story.website = url.parse(object.url).hostname;
    story.canFetchMetadata = true;
  }
  return story;
}
