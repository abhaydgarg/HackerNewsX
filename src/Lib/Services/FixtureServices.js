import { idsFixture, storiesFixture, metadataFixture } from './fixtures';
import mapper from '../Mapper';

export async function getStories (type) {
  return idsFixture;
}

export async function getStory (id) {
  return mapper(storiesFixture[id]);
}

export async function getMetadata (id, url) {
  return metadataFixture;
}
