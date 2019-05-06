import { isObject } from '@abhaydgarg/is';
import { item, topstories, newstories, beststories } from 'hacker-news-api-consumer';
import axios from 'axios';
import extractor from 'unfluff';

import Config from '../../Config';
import mapper from '../Mapper';
import { getMetadataFromStorage, addMetadata } from '../Storage';

export async function getStories (type) {
  let fn = null;
  if (type === 'new') {
    fn = newstories;
  } else if (type === 'top') {
    fn = topstories;
  } else if (type === 'best') {
    fn = beststories;
  } else {
    throw new Error('Type mismatch');
  }

  let xIds = [];
  const response = await fn();
  // Error object of type Object is returned from
  // hacker-news-api-consumer module.
  if (response.error !== undefined) {
    throw new Error(response.error);
  }
  xIds = response.data.slice(0, 10);
  return xIds;
}

export async function getStory (id) {
  const response = await item(id);
  if (response.error !== undefined) {
    throw new Error(response.error);
  }
  return mapper(response.data);
}

export async function getMetadata (id, url) {
  // First try to get metadata from storage.
  let metadata = getMetadataFromStorage(id);
  if (isObject(metadata)) {
    return metadata;
  }

  // reset
  metadata = {};

  try {
    const response = await axios.get(`${Config.corsFreeUrl}${url}`, {
      headers: { 'X-Requested-With': 'XMLHttpRequest' }
    });
    const data = extractor.lazy(response.data);
    metadata = {
      description: data.description(),
      image: data.image()
    };
    return metadata;
  } catch (e) {
    throw e;
  } finally {
    // Store the metadata even in success and failure.
    // Do not try again.
    addMetadata(id, metadata);
  }
}
